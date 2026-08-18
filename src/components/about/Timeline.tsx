"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const milestones = [
  {
    date: "Spring 2024",
    title: "A spreadsheet of 400 names",
    copy: "Four families start logging every provider they'd personally vouch for. Word gets around; the sheet is shared 1,200 times in six weeks.",
    emoji: "📒",
    tint: "from-amber-200 to-orange-400",
  },
  {
    date: "Winter 2024",
    title: "The first verified profiles",
    copy: "We pair Aadhaar with iJamat ID so a listing can prove both identity and community standing. 180 providers onboard in Mumbai and Pune.",
    emoji: "🪪",
    tint: "from-sky-200 to-blue-400",
  },
  {
    date: "Summer 2025",
    title: "Tijarah launches on the App Store and Google Play",
    copy: "Chat, bookings, saved locations and reviews ship together on iPhone and Android. 8,000 members join in the first month, mostly through family group chats.",
    emoji: "🚀",
    tint: "from-yellow-200 to-amber-400",
  },
  {
    date: "Winter 2025",
    title: "The Women-led hub",
    copy: "A dedicated home for the home kitchens, boutiques and studios run by women — plus payouts, invoicing and repeat-customer tools built for them.",
    emoji: "🌸",
    tint: "from-violet-200 to-purple-400",
  },
  {
    date: "Today",
    title: "48 cities and counting",
    copy: "25,000 members, 3,200 verified providers, ten languages, and still no commission on a single booking.",
    emoji: "📍",
    tint: "from-amber-300 to-amber-500",
    highlight: true,
  },
];

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      // The rail fills as you scroll the list.
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 65%",
            end: "bottom 75%",
            scrub: 0.4,
          },
        }
      );

      gsap.utils.toArray<HTMLElement>("[data-milestone]").forEach((item) => {
        gsap.from(item, {
          y: 40,
          autoAlpha: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: item, start: "top 85%" },
        });
        const dot = item.querySelector("[data-dot]");
        if (dot) {
          gsap.from(dot, {
            scale: 0,
            duration: 0.6,
            ease: "back.out(2.5)",
            scrollTrigger: { trigger: item, start: "top 85%" },
          });
        }
      });
    },
    { scope: ref }
  );

  return (
    <section className="section-pad pt-0">
      <div className="mx-auto flex max-w-5xl flex-col gap-[clamp(2.5rem,3vw,4rem)] px-[clamp(1rem,1.429vw+0.714rem,2rem)]">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="section-h2">How we got here</h2>
        </div>

        {/* Mobile: left rail with the cards indented past it. Desktop: the rail
            moves to the centre and cards alternate sides, each 2.5rem short of
            centre so the absolutely-positioned dots land on the rail. */}
        <div ref={ref} className="relative pl-12 lg:pl-0">
          {/* A static track with a navy-to-gold fill scrubbed on top */}
          <div className="absolute bottom-2 left-[11px] top-2 w-0.5 bg-ink/10 lg:left-1/2 lg:-translate-x-1/2" />
          <div
            ref={lineRef}
            className="absolute bottom-2 left-[11px] top-2 w-0.5 origin-top lg:left-1/2 lg:-translate-x-1/2 [background:linear-gradient(to_bottom,#33477F,#0F162B_55%,#FDC003)]"
          />

          <ol className="flex flex-col gap-8">
            {milestones.map((m, i) => (
              <li
                key={m.title}
                data-milestone
                className={`relative lg:w-[calc(50%-2.5rem)] ${
                  i % 2 ? "lg:self-end" : "lg:self-start"
                }`}
              >
                <span
                  data-dot
                  className={`absolute -left-11 top-9 z-10 flex h-4 w-4 items-center justify-center rounded-full bg-page ring-2 ${
                    m.highlight ? "ring-amber" : "ring-brand"
                  } ${
                    i % 2
                      ? "lg:left-[-2.5rem] lg:-translate-x-1/2"
                      : "lg:left-auto lg:right-[-2.5rem] lg:translate-x-1/2"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${m.highlight ? "bg-amber" : "bg-brand"}`}
                  />
                </span>

                <div
                  className={`rounded-3xl p-6 ring-1 transition-transform duration-500 hover:-translate-y-1 sm:p-7 ${
                    m.highlight
                      ? "bg-brand text-white ring-white/10 shadow-[0_32px_64px_-32px_rgba(15,22,43,0.6)] [background-image:radial-gradient(30rem_16rem_at_85%_-10%,rgba(253,192,3,0.25),transparent)]"
                      : "bg-white ring-black/5 shadow-[0_24px_48px_-32px_rgba(15,22,43,0.28)]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gradient-to-br text-[1.2rem] ${m.tint}`}
                    >
                      {m.emoji}
                    </span>
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] ${
                        m.highlight ? "bg-amber text-ink" : "bg-amber/15 text-amber-700"
                      }`}
                    >
                      {m.date}
                    </span>
                  </div>
                  <h3 className="section-h4 mt-5">{m.title}</h3>
                  <p
                    className={`mt-2.5 text-[1rem] leading-relaxed ${
                      m.highlight ? "text-white/75" : "text-ink-60"
                    }`}
                  >
                    {m.copy}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
