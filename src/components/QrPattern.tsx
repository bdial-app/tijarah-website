"use client";

import { useMemo, useRef, useSyncExternalStore } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import QRCode from "qrcode";
import BrandLogo from "./BrandLogo";

// The real, scannable QR. It's generated in the browser from the origin the
// page is actually served from — the site is a static export, so there's no
// server to read the host from, and a hardcoded domain would break on
// previews. It resolves to /download, which forwards to the App Store or
// Google Play based on the scanning device.
//
// Rather than one flat image, every dark module is its own <rect> so the code
// can assemble itself on screen: the three finder squares land first, the data
// ripples out from the centre, the brand tile pops in, and a gold scan line
// sweeps down once. `playKey` retriggers that sequence — bump it whenever the
// card carrying the code comes back into view.
//
// The logo sits where a QR is most forgiving: error correction H lets a
// scanner rebuild up to 30% of the symbol, and the tile (with its white
// halo) covers well under 10%. Modules under it are dropped rather than
// painted over, so the scanner sees clean white there instead of half-hidden
// squares it might misread.
//
// Sizing note: level H packs more modules into the same box, so give this at
// least 7rem and keep the white padding around it — that padding is the
// code's quiet zone.

type Module = { key: number; x: number; y: number; row: number; col: number };

// Brand tile footprint, as a fraction of the symbol's width / height.
const LOGO_W = 0.34;
const LOGO_H = LOGO_W / 2.78; // BrandLogo's band crop aspect
const LOGO_PAD = 0.035; // white halo around it, also in symbol fractions

export default function QrPattern({
  className = "",
  playKey = 0,
  withLogo = true,
}: {
  className?: string;
  playKey?: number;
  withLogo?: boolean;
}) {
  const svgRef = useRef<SVGSVGElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  // The origin only exists in the browser; the server snapshot is null so the
  // first client paint matches it, then React fills the code in straight after.
  const origin = useSyncExternalStore(
    () => () => {},
    () => window.location.origin,
    () => null,
  );

  const qr = useMemo(
    () =>
      origin
        ? QRCode.create(`${origin}/download/`, {
            errorCorrectionLevel: withLogo ? "H" : "M",
          })
        : null,
    [origin, withLogo],
  );
  const size = qr?.modules.size ?? 0;
  const bits = (qr?.modules.data as Uint8Array | undefined) ?? null;

  const { finders, data } = useMemo(() => {
    const finders: Module[] = [];
    const data: Module[] = [];
    if (!bits || !size) return { finders, data };

    // Modules whose centre lands inside the logo footprint are omitted.
    const hw = (LOGO_W / 2 + LOGO_PAD) * size;
    const hh = (LOGO_H / 2 + LOGO_PAD) * size;
    const mid = size / 2;
    const inFinder = (r: number, c: number) =>
      (r < 7 && c < 7) || (r < 7 && c >= size - 7) || (r >= size - 7 && c < 7);

    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (!bits[r * size + c]) continue;
        if (
          withLogo &&
          Math.abs(c + 0.5 - mid) < hw &&
          Math.abs(r + 0.5 - mid) < hh
        )
          continue;
        const m = { key: r * size + c, x: c, y: r, row: r, col: c };
        (inFinder(r, c) ? finders : data).push(m);
      }
    }
    return { finders, data };
  }, [bits, size, withLogo]);

  const ready = size > 0;

  useGSAP(
    () => {
      const svg = svgRef.current;
      const wrap = wrapRef.current;
      if (!svg || !wrap || !ready) return;

      const finderEls = svg.querySelectorAll<SVGRectElement>("[data-finder]");
      const dataEls = svg.querySelectorAll<SVGRectElement>("[data-module]");
      const logo = wrap.querySelector<HTMLElement>("[data-logo]");
      const beam = wrap.querySelector<HTMLElement>("[data-beam]");

      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // Not yet shown, or motion is unwelcome: settle into the final state.
      if (playKey === 0 || reduce) {
        gsap.set([finderEls, dataEls], { scale: 1, opacity: 1 });
        if (logo) gsap.set(logo, { scale: 1, opacity: 1 });
        if (beam) gsap.set(beam, { opacity: 0 });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      // Anchors first: the three finder squares are what a phone locks onto.
      tl.fromTo(
        finderEls,
        { scale: 0, opacity: 0, transformOrigin: "50% 50%" },
        { scale: 1, opacity: 1, duration: 0.45, stagger: { each: 0.004, from: "random" } },
      );

      // Then the payload ripples outward from the middle.
      tl.fromTo(
        dataEls,
        { scale: 0, opacity: 0, transformOrigin: "50% 50%" },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(2)",
          stagger: { amount: 0.9, from: "center" },
        },
        "-=0.25",
      );

      if (logo) {
        tl.fromTo(
          logo,
          { scale: 0.4, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.55, ease: "back.out(1.8)" },
          "-=0.55",
        );
      }

      // One pass of a scanner's gold line to say "this is meant to be scanned".
      // Position and opacity run side by side so it fades in and out at the
      // edges instead of hard-clipping against the tile.
      if (beam) {
        tl.addLabel("sweep", "-=0.15");
        tl.fromTo(
          beam,
          { yPercent: -60 },
          { yPercent: 60, duration: 0.9, ease: "power1.inOut" },
          "sweep",
        );
        tl.fromTo(
          beam,
          { opacity: 0 },
          { keyframes: { opacity: [0, 0.9, 0.9, 0] }, duration: 0.9, ease: "none" },
          "sweep",
        );
      }
    },
    { dependencies: [ready, playKey, withLogo], scope: wrapRef },
  );

  // Nothing to show until the browser has built the code; the white card
  // behind it simply reads as an empty tile for that first frame.
  if (!ready) return null;

  // Each module is one unit; a hairline margin keeps the outer modules off the
  // very edge without eating into the size the white padding already gives.
  const margin = 0.5;
  const view = size + margin * 2;

  return (
    <div
      ref={wrapRef}
      className={`relative h-full w-full overflow-hidden ${className}`}
      role="img"
      aria-label="QR code to download the Tijarah app"
    >
      <svg
        ref={svgRef}
        viewBox={`${-margin} ${-margin} ${view} ${view}`}
        shapeRendering="crispEdges"
        className="h-full w-full"
        aria-hidden
      >
        <g fill="#0F162B">
          {finders.map((m) => (
            <rect key={m.key} data-finder x={m.x} y={m.y} width={1} height={1} />
          ))}
          {data.map((m) => (
            <rect
              key={m.key}
              data-module
              x={m.x}
              y={m.y}
              width={1}
              height={1}
              rx={0.18}
            />
          ))}
        </g>
      </svg>

      {withLogo && (
        // Centred by the grid, not a transform, so GSAP's scale on the tile
        // never fights a translate.
        <div className="pointer-events-none absolute inset-0 grid place-items-center">
          <div
            data-logo
            className="rounded-[0.3rem] bg-white"
            style={{
              width: `${(LOGO_W + LOGO_PAD * 1.5) * 100}%`,
              padding: `${LOGO_PAD * 0.5 * 100}%`,
            }}
          >
            <BrandLogo className="h-auto w-full" radius="rounded-[0.22rem]" />
          </div>
        </div>
      )}

      {/* Scan line: gold core with a soft glow, hidden until the timeline
          sweeps it through. */}
      <div
        data-beam
        className="pointer-events-none absolute inset-x-0 top-0 h-full opacity-0"
        aria-hidden
      >
        <div className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 bg-amber-400 shadow-[0_0_10px_2px_rgba(253,192,3,0.55)]" />
        <div className="absolute inset-x-0 top-1/2 h-8 -translate-y-1/2 bg-[linear-gradient(to_bottom,transparent,rgba(253,192,3,0.18),transparent)]" />
      </div>
    </div>
  );
}
