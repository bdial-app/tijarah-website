"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Dark privacy card with the reference's signature effect: a dot grid hidden
// behind a radial mask that follows the cursor (same GSAP approach as the
// reference site's inline script).
export default function Privacy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const dots = dotsRef.current;
      if (!container || !dots) return;

      gsap.set(dots, {
        opacity: 0,
        webkitMask: "radial-gradient(circle 0rem at 0% 0%, black 0%, transparent 0%)",
        mask: "radial-gradient(circle 0rem at 0% 0%, black 0%, transparent 0%)",
      });

      const onMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        gsap.to(dots, {
          webkitMask: `radial-gradient(circle 18.75rem at ${x}% ${y}%, black 0%, transparent 100%)`,
          mask: `radial-gradient(circle 18.75rem at ${x}% ${y}%, black 0%, transparent 100%)`,
          duration: 1.2,
          ease: "power4.out",
          opacity: 1,
        });
      };
      const onLeave = () => {
        gsap.to(dots, { opacity: 0, duration: 0.6, ease: "power2.out" });
      };

      container.addEventListener("mousemove", onMove);
      container.addEventListener("mouseleave", onLeave);
      return () => {
        container.removeEventListener("mousemove", onMove);
        container.removeEventListener("mouseleave", onLeave);
      };
    },
    { scope: containerRef }
  );

  return (
    <section className="px-[clamp(1rem,1.429vw+0.714rem,2rem)]">
      <div
        ref={containerRef}
        className="relative mx-auto flex min-h-[24rem] max-w-[90rem] flex-col items-center justify-center overflow-hidden rounded-3xl bg-[#0F162B] px-6 py-20 text-center text-white [background-image:radial-gradient(circle_at_50%_0,rgba(255,255,255,0)_40%,rgba(253,192,3,0.2)_90%,rgba(253,192,3,0.4))]"
      >
        {/* Dot grid revealed by the cursor */}
        <div
          ref={dotsRef}
          className="pointer-events-none absolute inset-0 opacity-0 [background-image:radial-gradient(rgba(253,192,3,0.55)_1.5px,transparent_1.5px)] [background-size:24px_24px]"
          aria-hidden
        />
        <svg viewBox="0 0 24 24" className="h-12 w-12 text-[#FDC003]" fill="none" aria-hidden>
          <path
            d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 12l2 2 3.5-4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h2 className="section-h2 mt-6">Built for trust</h2>
        <p className="mt-4 max-w-md text-[1.125rem] text-white/60">
          Every profile is verified, every review is moderated, and your data
          stays yours, never sold.
        </p>
      </div>
    </section>
  );
}
