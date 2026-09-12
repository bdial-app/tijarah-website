"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ContactHero() {
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
            Contact us
          </p>
          <h1 data-hero-reveal className="hero-h1">
            Talk to a person
          </h1>
          <p data-hero-reveal className="max-w-xl text-[1.125rem] text-ink-60">
            No ticket numbers, no bots. Pick a topic, tell us what is going on,
            and someone on the Tijarah team will write back.
          </p>
        </div>
      </div>
    </header>
  );
}
