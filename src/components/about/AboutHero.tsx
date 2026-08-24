"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import BrandLogo from "../BrandLogo";

// Two counter-rotating rings of community trades orbiting the brand mark.
// The arms carry the spin; each chip nests a counter-spin so it stays upright.
const rings = [
  { inset: "0%", duration: "64s", reverse: false, items: ["🍱", "🎨", "✂️", "🎂", "📚"] },
  { inset: "19%", duration: "46s", reverse: true, items: ["🌸", "🍽️", "👗", "🎈"] },
];

function OrbitRing() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[38rem]" aria-hidden>
      <div className="absolute inset-[22%] rounded-full bg-[radial-gradient(circle,rgba(15,22,43,0.16),transparent_70%)]" />

      {rings.map((ring) => (
        <div
          key={ring.inset}
          className="orbit-spin absolute"
          style={{
            inset: ring.inset,
            animationDuration: ring.duration,
            animationDirection: ring.reverse ? "reverse" : "normal",
          }}
        >
          <div className="absolute inset-0 rounded-full border border-ink/10" />
          {ring.items.map((item, i) => {
            const angle = (360 / ring.items.length) * i;
            return (
              <div
                key={item}
                className="absolute inset-0"
                style={{ transform: `rotate(${angle}deg)` }}
              >
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                  <div style={{ transform: `rotate(${-angle}deg)` }}>
                    <div
                      className="orbit-spin flex h-[clamp(2.75rem,4.5vw,3.75rem)] w-[clamp(2.75rem,4.5vw,3.75rem)] items-center justify-center rounded-2xl bg-white/80 text-[clamp(1.1rem,1.8vw,1.5rem)] shadow-[0_12px_32px_-12px_rgba(15,22,43,0.28)] backdrop-blur"
                      style={{
                        animationDuration: ring.duration,
                        animationDirection: ring.reverse ? "normal" : "reverse",
                      }}
                    >
                      {item}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}

      {/* Brand lockup at the centre — the mark carries the name on its own */}
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2rem] bg-white/70 px-[clamp(1.25rem,2.5vw,2.25rem)] py-[clamp(1.5rem,3vw,2.75rem)] shadow-[0_24px_60px_-24px_rgba(15,22,43,0.35)] backdrop-blur">
        <BrandLogo className="h-[clamp(2rem,3.2vw,3rem)]" priority />
      </div>
    </div>
  );
}

export default function AboutHero() {
  // Same intro beat as the home hero: nav drops in, copy staggers up, the
  // visual follows. Defined here because the home Hero isn't on this route.
  useGSAP(() => {
    gsap
      .timeline({ defaults: { ease: "power3.out" } })
      .from(".js-nav", { y: -28, autoAlpha: 0, duration: 0.9 }, 0.1)
      .from(
        "[data-hero-reveal]",
        { y: 44, autoAlpha: 0, duration: 1.1, stagger: 0.12 },
        0.2
      )
      .from("[data-hero-stage]", { y: 90, autoAlpha: 0, duration: 1.3 }, 0.5);
  });

  return (
    <section className="flex px-2 pt-2">
      <div className="relative flex w-full flex-col overflow-hidden rounded-3xl bg-[#ECF1F9] px-4 pb-[clamp(3rem,6vw,6rem)] pt-32 md:pt-40">
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <p
            data-hero-reveal
            className="rounded-full bg-white/70 px-4 py-1.5 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-ink-60 backdrop-blur"
          >
            About Tijarah
          </p>
          <h1 data-hero-reveal className="hero-h1">
            Built by the community, for the community
          </h1>
          <p data-hero-reveal className="max-w-xl text-[1.125rem] text-ink-60">
            Tijarah started with a simple frustration: the best cooks, tailors,
            tutors and artists in our neighbourhoods were impossible to find
            unless you already knew someone who knew them. So we built the
            introduction.
          </p>
        </div>

        <div data-hero-stage className="relative z-0 mt-[clamp(2rem,4vw,4rem)]">
          <OrbitRing />
        </div>
      </div>
    </section>
  );
}
