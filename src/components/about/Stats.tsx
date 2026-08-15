"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const stats = [
  { value: 25000, suffix: "+", label: "Community members" },
  { value: 3200, suffix: "+", label: "Verified providers" },
  { value: 48, suffix: "", label: "Cities across India" },
  { value: 61, suffix: "%", label: "Providers women-led" },
];

// Indian digit grouping (25,000 → 25,000; 1,20,000 for lakhs). Locale is
// explicit so the server and client render the same string.
const format = (n: number) => Math.round(n).toLocaleString("en-IN");

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const nodes = gsap.utils.toArray<HTMLElement>("[data-count]");

      nodes.forEach((node) => {
        const target = Number(node.dataset.count);
        const counter = { n: 0 };
        gsap.to(counter, {
          n: target,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => {
            node.textContent = format(counter.n);
          },
          scrollTrigger: { trigger: node, start: "top 88%" },
        });
      });

      gsap.from("[data-stat]", {
        y: 40,
        autoAlpha: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: "top 85%" },
      });
    },
    { scope: ref }
  );

  return (
    <section className="px-[clamp(1rem,1.429vw+0.714rem,2rem)]">
      <div
        ref={ref}
        className="mx-auto grid max-w-[90rem] gap-y-12 rounded-3xl bg-white px-[clamp(1.5rem,3vw,4rem)] py-[clamp(3rem,4vw,5rem)] shadow-[0_32px_64px_-32px_rgba(31,32,37,0.18)] sm:grid-cols-2 lg:grid-cols-4"
      >
        {stats.map((s) => (
          <div
            key={s.label}
            data-stat
            className="flex flex-col items-center gap-2 text-center"
          >
            <p className="card-h2 tabular-nums text-brand">
              {/* Server-rendered at the final value, so it reads correctly
                  before (or without) the count-up. */}
              <span data-count={s.value}>{format(s.value)}</span>
              {s.suffix}
            </p>
            <p className="text-[0.95rem] text-ink-60">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
