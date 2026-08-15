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
  },
  {
    date: "Winter 2024",
    title: "The first verified profiles",
    copy: "We pair Aadhaar with iJamat ID so a listing can prove both identity and community standing. 180 providers onboard in Mumbai and Pune.",
  },
  {
    date: "Summer 2025",
    title: "Tijarah launches on the App Store and Google Play",
    copy: "Chat, bookings, saved locations and reviews ship together on iPhone and Android. 8,000 members join in the first month, mostly through family group chats.",
  },
  {
    date: "Winter 2025",
    title: "The Women-led hub",
    copy: "A dedicated home for the home kitchens, boutiques and studios run by women — plus payouts, invoicing and repeat-customer tools built for them.",
  },
  {
    date: "Today",
    title: "48 cities and counting",
    copy: "25,000 members, 3,200 verified providers, ten languages, and still no commission on a single booking.",
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
      });
    },
    { scope: ref }
  );

  return (
    <section className="section-pad pt-0">
      <div className="mx-auto flex max-w-4xl flex-col gap-[clamp(2.5rem,3vw,4rem)] px-[clamp(1rem,1.429vw+0.714rem,2rem)]">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="section-h2">How we got here</h2>
        </div>

        {/* Rail geometry: list padding 3rem, rail centred at 12px, and each
            16px dot pulled back 2.75rem so its centre lands on the rail. */}
        <div ref={ref} className="relative pl-12">
          {/* A static track with a brand-coloured fill scrubbed on top */}
          <div className="absolute bottom-2 left-[11px] top-2 w-0.5 bg-ink/12" />
          <div
            ref={lineRef}
            className="absolute bottom-2 left-[11px] top-2 w-0.5 origin-top bg-brand"
          />

          <ol className="flex flex-col gap-10">
            {milestones.map((m) => (
              <li key={m.title} data-milestone className="relative">
                <span className="absolute -left-11 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-page ring-2 ring-brand">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                </span>
                <p className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-ink-40">
                  {m.date}
                </p>
                <h3 className="section-h4 mt-2">{m.title}</h3>
                <p className="mt-2 max-w-xl text-[1rem] text-ink-60">{m.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
