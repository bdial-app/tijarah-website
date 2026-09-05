"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { AppleIcon, GooglePlayIcon } from "./icons";
import DownloadLink from "./DownloadLink";
import QrPattern from "./QrPattern";

// Fixed "scan to download" card in the corner, like the reference site.
// Hidden over the hero (which has its own CTA), slides in once you scroll past.

export default function QrCard() {
  const ref = useRef<HTMLDivElement>(null);
  // Bumped each time the card slides in, so the QR re-assembles with it.
  const [reveal, setReveal] = useState(0);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current;
    if (!el) return;
    gsap.set(el, { y: 24, autoAlpha: 0 });

    // Two conditions gate the card, and both can flip in the same scroll tick —
    // so derive visibility from the pair rather than tweening from each
    // callback, which would race (competing tweens, longest one wins).
    let pastHero = false;
    let atFooter = false;
    let visible = false;

    const apply = () => {
      const next = pastHero && !atFooter;
      if (next === visible) return;
      visible = next;
      if (next) setReveal((n) => n + 1);
      gsap.to(el, {
        y: next ? 0 : 24,
        autoAlpha: next ? 1 : 0,
        duration: next ? 0.6 : 0.4,
        ease: next ? "power3.out" : "power2.in",
        overwrite: true,
      });
    };

    // Appear once past the hero (which has its own CTA)
    ScrollTrigger.create({
      start: () => window.innerHeight * 0.9,
      onEnter: () => {
        pastHero = true;
        apply();
      },
      onLeaveBack: () => {
        pastHero = false;
        apply();
      },
    });

    // ...and get out of the way of the footer, whose links it would cover
    const footer = document.querySelector("footer");
    if (footer) {
      ScrollTrigger.create({
        trigger: footer,
        start: "top bottom",
        onEnter: () => {
          atFooter = true;
          apply();
        },
        onLeaveBack: () => {
          atFooter = false;
          apply();
        },
      });
    }
  });

  return (
    <div ref={ref} className="fixed bottom-6 right-6 z-40 hidden lg:block">
      {/* The whole card is the CTA: scanning is for people on a desktop, but a
          touch device that reaches this width (iPad, Android tablet) can just
          tap through to its own store. */}
      <DownloadLink
        className="flex items-center gap-4 rounded-3xl bg-brand-deep p-4 pr-6 shadow-[0_24px_48px_-16px_rgba(15,22,43,0.5)] ring-1 ring-white/15 transition-transform duration-300 hover:-translate-y-0.5"
        ariaLabel="Download the Tijarah app"
      >
        {(platform) => (
          <>
            {/* Big enough that each QR module is a few pixels across — the
                logo needs error-correction H, which packs in more modules, so
                below about 7rem the code stops scanning reliably. */}
            <div className="h-32 w-32 rounded-xl bg-white p-2">
              <QrPattern playKey={reveal} />
            </div>
            <div>
              <p className="text-[0.95rem] font-semibold text-white">
                Download app
              </p>
              <p className="mt-0.5 text-[0.8rem] text-white/60">
                {platform === "ios"
                  ? "Tap to open the App Store"
                  : platform === "android"
                    ? "Tap to open Google Play"
                    : "Scan for App Store & Google Play"}
              </p>
              <div className="mt-2 flex items-center gap-2 text-white/70">
                {platform !== "android" && (
                  <>
                    <AppleIcon className="h-3.5 w-3.5" />
                    <span className="text-[0.72rem]">iOS</span>
                  </>
                )}
                {platform === "other" && <span className="text-white/25">·</span>}
                {platform !== "ios" && (
                  <>
                    <GooglePlayIcon className="h-3.5 w-3.5" />
                    <span className="text-[0.72rem]">Android</span>
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </DownloadLink>
    </div>
  );
}
