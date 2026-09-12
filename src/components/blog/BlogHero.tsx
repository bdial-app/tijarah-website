"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Same intro beat as the About hero: nav drops in, copy staggers up.
export default function BlogHero() {
  useGSAP(() => {
    gsap
      .timeline({ defaults: { ease: "power3.out" } })
      .from(".js-nav", { y: -28, autoAlpha: 0, duration: 0.9 }, 0.1)
      .from(
        "[data-hero-reveal]",
        { y: 44, autoAlpha: 0, duration: 1.1, stagger: 0.12 },
        0.2
      );
  });

  return (
    <section className="flex px-2 pt-2">
      <div className="relative flex w-full flex-col overflow-hidden rounded-3xl bg-[#ECF1F9] px-4 pb-[clamp(3rem,6vw,5rem)] pt-32 md:pt-40">
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(253,192,3,0.28),transparent_65%)]"
          aria-hidden
        />
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <p
            data-hero-reveal
            className="rounded-full bg-white/70 px-4 py-1.5 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-ink-60 backdrop-blur"
          >
            Tijarah Blog
          </p>
          <h1 data-hero-reveal className="hero-h1">
            Guides, stories and updates from the community
          </h1>
          <p data-hero-reveal className="max-w-xl text-[1.125rem] text-ink-60">
            How to find verified providers near you, grow a home business
            without paying commission, and get the most out of Tijarah.
          </p>
        </div>
      </div>
    </section>
  );
}
