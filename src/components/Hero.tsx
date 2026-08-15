"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import CloudTunnel from "./CloudTunnel";
import FloatingCards from "./FloatingCards";
import { PhoneMockup } from "./Devices";
import StoreButtons from "./StoreButtons";

function StarRating() {
  return (
    <div className="flex items-center justify-center gap-2">
      <svg viewBox="0 0 80 16" className="w-20" aria-label="4.8 star rating">
        <defs>
          <linearGradient id="star-partial">
            <stop offset="80%" stopColor="#FECC00" />
            <stop offset="80%" stopColor="rgba(31,32,37,0.25)" />
          </linearGradient>
        </defs>
        {[0, 1, 2, 3, 4].map((i) => (
          <path
            key={i}
            transform={`translate(${i * 16} 0)`}
            d="M8 1.3l1.8 4.4 4.7.4-3.6 3.1 1.1 4.6L8 11.4l-4.1 2.4 1.1-4.6L1.5 6.1l4.7-.4L8 1.3z"
            fill={i < 4 ? "#FECC00" : "url(#star-partial)"}
          />
        ))}
      </svg>
      <span className="text-[0.8rem] text-ink-60">12.4K</span>
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const stageInnerRef = useRef<HTMLDivElement>(null);
  const cloudsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Intro reveal
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(".js-nav", { y: -28, autoAlpha: 0, duration: 0.9 }, 0.1)
      .from(
        "[data-hero-reveal]",
        { y: 44, autoAlpha: 0, duration: 1.1, stagger: 0.12 },
        0.2
      )
      .from(
        stageRef.current,
        { y: 110, autoAlpha: 0, duration: 1.3 },
        0.55
      )
      .from(
        ".js-hero-card",
        { y: 26, autoAlpha: 0, scale: 0.94, duration: 0.8, stagger: 0.07 },
        1.0
      );

    // Scroll parallax: devices drift up slightly, sky zooms in
    gsap.to(stageInnerRef.current, {
      yPercent: -7,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
    gsap.to(cloudsRef.current, {
      scale: 1.08,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  return (
    <section ref={sectionRef} className="flex min-h-svh px-2 pt-2">
      <div className="relative flex w-full flex-col overflow-hidden rounded-3xl bg-[#eef5fa] pt-28 md:pt-36">
        <div ref={cloudsRef} className="absolute inset-0">
          <CloudTunnel className="mask-fade-y absolute inset-0 h-full w-full" />
        </div>

        {/* Copy + CTA */}
        <div className="relative z-10 flex flex-col items-center gap-6 px-4 text-center">
          <h1 data-hero-reveal className="hero-h1 max-w-3xl">
            Your Connected Community Marketplace
          </h1>
          <p data-hero-reveal className="max-w-md text-[1.125rem] text-ink-60">
            Discover, chat with, and support trusted service providers from
            your community &mdash; from home kitchens to henna artists, all in
            one place.
          </p>
          <div data-hero-reveal className="flex flex-col items-center gap-4">
            <StoreButtons className="justify-center" />
            <p className="text-[0.85rem] text-ink-40">
              Free on the App Store and Google Play
            </p>
            <StarRating />
          </div>
        </div>

        {/* Devices + floating cards */}
        <div
          ref={stageRef}
          className="pointer-events-none relative z-10 mx-auto mt-10 w-full max-w-[86rem] select-none md:mt-8"
        >
          <div
            ref={stageInnerRef}
            className="mask-fade-b relative mx-auto aspect-[390/560] w-full sm:aspect-[1440/780] md:aspect-[1440/660]"
          >
            <FloatingCards />

            <div className="absolute left-[13%] top-[16%] hidden w-[18.5%] md:block [transform:perspective(1600px)_rotateY(16deg)_rotate(-6deg)]">
              <PhoneMockup variant="chat" />
            </div>

            <div className="absolute right-[13%] top-[16%] hidden w-[18.5%] md:block [transform:perspective(1600px)_rotateY(-16deg)_rotate(6deg)]">
              <PhoneMockup variant="provider" />
            </div>

            <div className="absolute left-1/2 top-0 w-[64%] -translate-x-1/2 sm:w-[38%] md:w-[22.5%]">
              <PhoneMockup variant="home" />
            </div>

            <div className="pointer-events-none absolute left-[57.5%] top-[34%] z-10 hidden w-[16%] md:block">
              <div className="flex flex-col gap-2">
                <div className="js-hero-card rounded-2xl bg-white/70 p-3 shadow-[0_16px_40px_-12px_rgba(31,32,37,0.22)] ring-1 ring-black/5 backdrop-blur">
                  <p className="text-[12px] font-semibold leading-tight">
                    🔥 New lead &mdash; Wedding mehndi
                  </p>
                  <p className="mt-0.5 text-[11px] text-ink-60">
                    Mumbai · just now
                  </p>
                </div>
                <div className="js-hero-card rounded-2xl bg-white/70 p-3 shadow-[0_16px_40px_-12px_rgba(31,32,37,0.22)] ring-1 ring-black/5 backdrop-blur">
                  <p className="text-[12px] font-semibold leading-tight">
                    💬 3 new messages
                  </p>
                  <p className="mt-0.5 text-[11px] text-ink-60">
                    Zainab&apos;s Kitchen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
