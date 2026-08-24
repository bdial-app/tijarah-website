"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { PhoneMockup } from "./Devices";

// Dark "Tijarah for Business" section, mirroring the reference's Bevel
// Intelligence block: entered via a scrubbed "shutter" transition (horizontal
// slats that build the indigo background as you scroll), an avatar persona
// marquee, then full-width light cards alternating text/phone.

const personas = [
  { name: "The Home Chef", emoji: "🍱", gradient: "from-amber-400 to-orange-600" },
  { name: "The Henna Artist", emoji: "🎨", gradient: "from-violet-400 to-purple-600" },
  { name: "The Tailor", emoji: "✂️", gradient: "from-indigo-400 to-blue-600" },
  { name: "The Tutor", emoji: "📚", gradient: "from-teal-400 to-emerald-600" },
];

function AvatarRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="marquee-row flex flex-none gap-10 pr-10" aria-hidden={ariaHidden}>
      {personas.map((p) => (
        <div key={p.name} className="flex w-32 flex-none flex-col items-center gap-3">
          <div
            className={`flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br ${p.gradient} text-[2.6rem] shadow-[0_0_3rem_-8px_rgba(255,255,255,0.5)]`}
          >
            {p.emoji}
          </div>
          <p className="whitespace-nowrap text-[0.85rem] text-white/60">{p.name}</p>
        </div>
      ))}
    </div>
  );
}

type Card = {
  tint: string;
  title: string;
  copy: string;
  phone: "home" | "chat" | "provider" | "analytics" | "leads";
  chip: React.ReactNode;
};

const cards: Card[] = [
  {
    tint: "[background-image:radial-gradient(circle_at_75%_100%,rgba(114,132,178,0.45),rgba(114,132,178,0.35)_10%,rgba(255,255,255,0)_64%)]",
    title: "Know what's working",
    copy: "Track views, searches, calls, and saves to see exactly how customers find you.",
    phone: "analytics",
    chip: (
      <div className="absolute -left-[28%] top-[18%] w-[70%] rounded-2xl bg-white p-4 shadow-[0_24px_48px_-16px_rgba(15,22,43,0.35)]">
        <p className="text-[0.75rem] text-ink-60">Search appearances</p>
        <p className="text-[1.05rem] font-semibold">+48% this week</p>
        <div className="mt-2 flex h-8 items-end gap-1">
          {[30, 45, 38, 60, 50, 95, 70].map((v, i) => (
            <span key={i} className={`flex-1 rounded-sm ${i === 5 ? "bg-indigo-600" : "bg-ink/10"}`} style={{ height: `${v}%` }} />
          ))}
        </div>
      </div>
    ),
  },
  {
    tint: "[background-image:radial-gradient(circle_at_75%_100%,rgba(253,192,3,0.4),rgba(253,192,3,0.2)_10%,rgba(255,255,255,0)_64%)]",
    title: "Never miss a lead",
    copy: "Hot, warm, and cold lead scoring shows you who's ready to book right now.",
    phone: "leads",
    chip: (
      <div className="absolute -right-[24%] top-[24%] flex w-[72%] flex-col gap-2">
        {[["🔥", "New hot lead", "Wedding mehndi · 2 min ago"]].map(([icon, title, sub]) => (
          <div key={title} className="flex items-center gap-3 rounded-2xl bg-white p-3.5 shadow-[0_24px_48px_-16px_rgba(15,22,43,0.35)]">
            <span className="text-[1.2rem]">{icon}</span>
            <span>
              <span className="block text-[0.85rem] font-semibold leading-tight">{title}</span>
              <span className="block text-[0.75rem] text-ink-60">{sub}</span>
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    tint: "[background-image:radial-gradient(circle_at_75%_100%,rgba(243,188,28,0.4),rgba(243,188,28,0.2)_10%,rgba(255,255,255,0)_64%)]",
    title: "Deals that bring them in",
    copy: "Launch offers with quotas and expiry, then watch them convert.",
    phone: "home",
    chip: (
      <div className="absolute -left-[26%] top-[30%] w-[68%] rounded-2xl bg-white p-4 shadow-[0_24px_48px_-16px_rgba(15,22,43,0.35)]">
        <p className="text-[0.95rem] font-semibold leading-snug">🎉 20% off first order</p>
        <p className="mt-1 text-[0.75rem] text-ink-60">34 of 50 claimed</p>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-ink/10">
          <div className="h-full w-[68%] rounded-full bg-[#FDC003]" />
        </div>
      </div>
    ),
  },
  {
    tint: "[background-image:radial-gradient(circle_at_75%_100%,rgba(158,174,206,0.45),rgba(158,174,206,0.25)_10%,rgba(255,255,255,0)_64%)]",
    title: "Get seen first",
    copy: "Sponsored listings put you at the top of search and the explore carousel.",
    phone: "provider",
    chip: (
      <div className="absolute -right-[22%] top-[26%] w-[66%] rounded-2xl bg-white p-4 shadow-[0_24px_48px_-16px_rgba(15,22,43,0.35)]">
        <span className="inline-flex rounded-full bg-[#FDC003]/15 px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-wider text-amber-600">
          Sponsored
        </span>
        <p className="mt-2 text-[0.85rem] font-semibold">4.2k impressions this week</p>
      </div>
    ),
  },
];

export default function Intelligence() {
  const sectionRef = useRef<HTMLElement>(null);
  const shutterRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      // Shutter cover: slats scale up (bottom-origin) as the section scrolls in
      const rows = shutterRef.current?.children;
      if (rows?.length) {
        gsap.set(rows, { scaleY: 0, transformOrigin: "bottom center" });
        gsap.to(rows, {
          scaleY: 1,
          ease: "none",
          stagger: { each: 0.1, from: "end" },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            end: "top 35%",
            scrub: 0.3,
          },
        });
      }

      // Content reveal once dark background is in
      const targets = sectionRef.current?.querySelectorAll("[data-dark-reveal]");
      if (targets?.length) {
        targets.forEach((el) => {
          gsap.from(el, {
            y: 56,
            autoAlpha: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
          });
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative text-white">
      {/* Shutter slats build the indigo background */}
      <div ref={shutterRef} className="absolute inset-0 -z-10 flex flex-col overflow-hidden" aria-hidden>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="w-full flex-1 bg-[#0F162B]" />
        ))}
      </div>
      {/* Subtle brand-bright glow over the slats */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 25%, rgba(51,71,127,0.5), transparent 65%)",
        }}
        aria-hidden
      />

      <div className="section-pad mx-auto flex max-w-[90rem] flex-col gap-14 px-[clamp(1rem,1.429vw+0.714rem,2rem)]">
        {/* Personas marquee over a soft glow */}
        <div data-dark-reveal className="relative flex flex-col items-center gap-12">
          <div
            className="pointer-events-none absolute -top-[8rem] h-[24rem] w-[min(43rem,100%)] rounded-full opacity-60 blur-3xl"
            style={{
              background:
                "radial-gradient(circle at 50% 40%, rgba(253,192,3,0.25), rgba(110,130,176,0.2) 45%, transparent 70%)",
            }}
            aria-hidden
          />
          <div className="mask-fade-x flex w-full max-w-[35rem] justify-start overflow-hidden [--marquee-duration:28s]">
            <AvatarRow />
            <AvatarRow ariaHidden />
          </div>
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
            <h2 className="section-h2">
              Grow with <span className="text-white/50">Tijarah for Business</span>
            </h2>
            <p className="max-w-md text-[1.125rem] text-white/60">
              Everything providers need to get discovered, win customers, and
              grow &mdash; no tech skills needed.
            </p>
          </div>
        </div>

        {/* Alternating cards (light-themed inside the dark section) */}
        <div className="flex flex-col gap-6">
          {cards.map((card, i) => (
            <div
              key={card.title}
              data-dark-reveal
              className={`flex flex-col overflow-hidden rounded-3xl bg-white text-ink lg:h-[38.75rem] lg:items-center ${
                i % 2 ? "lg:flex-row-reverse" : "lg:flex-row"
              } ${card.tint}`}
            >
              <div className="w-full p-[clamp(2.5rem,3.82vw+1.562rem,5rem)] lg:w-1/2">
                <h3 className="card-h2">{card.title}</h3>
                <p className="mt-4 max-w-md text-[1.05rem] text-ink-60">{card.copy}</p>
              </div>
              <div className="relative flex w-full justify-center pb-12 lg:h-full lg:w-1/2 lg:items-end lg:pb-0">
                <div className="relative w-[56%] max-w-[17rem] lg:translate-y-[12%]">
                  <PhoneMockup variant={card.phone} />
                  {card.chip}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
