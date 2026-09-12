"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { formatDate } from "@/lib/blog";
import type { LegalDoc } from "@/lib/legal";

// Same intro beat as the other page heroes (nav drops, copy staggers up),
// on the light rounded panel, without a visual stage: the document is the point.
export default function LegalHeader({ doc }: { doc: LegalDoc }) {
  useGSAP(() => {
    gsap
      .timeline({ defaults: { ease: "power3.out" } })
      .from(".js-nav", { y: -28, autoAlpha: 0, duration: 0.9 }, 0.1)
      .from(
        "[data-hero-reveal]",
        { y: 44, autoAlpha: 0, duration: 1.1, stagger: 0.1 },
        0.2
      );
  });

  return (
    <header className="flex px-2 pt-2">
      <div className="relative flex w-full flex-col overflow-hidden rounded-3xl bg-[#ECF1F9] px-4 pb-[clamp(3rem,5vw,5rem)] pt-32 md:pt-40">
        <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center gap-6 text-center">
          <p
            data-hero-reveal
            className="rounded-full bg-white/70 px-4 py-1.5 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-ink-60 backdrop-blur"
          >
            Legal
          </p>
          <h1 data-hero-reveal className="hero-h1">
            {doc.title}
          </h1>
          <p data-hero-reveal className="max-w-2xl text-[1.125rem] text-ink-60">
            {doc.description}
          </p>
          <p data-hero-reveal className="text-[0.9rem] text-ink-40">
            Effective{" "}
            <time dateTime={doc.effective} className="text-ink">
              {formatDate(doc.effective)}
            </time>
          </p>
        </div>
      </div>
    </header>
  );
}
