"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { PhoneMockup } from "../Devices";
import QrPattern from "../QrPattern";
import StoreButtons from "../StoreButtons";
import { AppleIcon, GooglePlayIcon } from "../icons";

// There is deliberately no email/password form on this page: a Tijarah account
// is created and verified inside the app, so the web page's job is to hand you
// off to the App Store or Google Play as cleanly as possible.

function CheckBadge({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 12l2 2 3.5-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function LoginHero() {
  // Same intro beat as the other heroes: nav drops in, copy staggers up,
  // the phone follows.
  useGSAP(() => {
    gsap
      .timeline({ defaults: { ease: "power3.out" } })
      .from(".js-nav", { y: -28, autoAlpha: 0, duration: 0.9 }, 0.1)
      .from(
        "[data-hero-reveal]",
        { y: 44, autoAlpha: 0, duration: 1.1, stagger: 0.12 },
        0.2
      )
      .from("[data-hero-stage]", { y: 90, autoAlpha: 0, duration: 1.3 }, 0.5)
      .from(
        "[data-hero-chip]",
        { y: 24, autoAlpha: 0, scale: 0.94, duration: 0.8, stagger: 0.08 },
        1.0
      );
  });

  return (
    <section className="flex px-2 pt-2">
      <div className="relative flex w-full flex-col overflow-hidden rounded-3xl bg-[#ECF1F9] px-[clamp(1rem,3vw,3.5rem)] pb-[clamp(3rem,6vw,6rem)] pt-32 md:pt-40">
        {/* Soft brand glow behind the phone */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-[-10%] top-[10%] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(15,22,43,0.14),transparent_68%)]"
        />

        <div className="relative z-10 mx-auto grid w-full max-w-[80rem] items-center gap-[clamp(3rem,5vw,5rem)] lg:grid-cols-[1.05fr_0.95fr]">
          {/* Copy + store hand-off */}
          <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
            <p
              data-hero-reveal
              className="rounded-full bg-white/70 px-4 py-1.5 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-ink-60 backdrop-blur"
            >
              Sign in
            </p>
            <h1 data-hero-reveal className="hero-h1 max-w-xl">
              Your sign-in lives in the app
            </h1>
            <p
              data-hero-reveal
              className="max-w-xl text-[1.125rem] text-ink-60"
            >
              Tijarah has no web login, and that is on purpose. Your account is
              verified with your phone number and iJamat ID inside the app, so
              there is no password to forget and no web form to phish. Get
              Tijarah from the App Store or Google Play and you are signed in on
              your device.
            </p>

            <div
              data-hero-reveal
              className="flex flex-col items-center gap-3 lg:items-start"
            >
              <StoreButtons className="justify-center lg:justify-start" />
              <p className="text-[0.85rem] text-ink-40">
                Free on iPhone and Android · Android 8.0+ and iOS 15+
              </p>
            </div>

            {/* Scan-to-download, mirroring the corner card on other pages */}
            <div
              data-hero-reveal
              className="mt-2 flex items-center gap-4 rounded-3xl bg-white/80 p-4 pr-6 shadow-[0_24px_48px_-28px_rgba(15,22,43,0.35)] backdrop-blur"
            >
              <div className="h-28 w-28 rounded-xl bg-white p-2 ring-1 ring-ink/5">
                <QrPattern />
              </div>
              <div className="text-left">
                <p className="text-[0.95rem] font-semibold">
                  Scan to download
                </p>
                <p className="mt-0.5 text-[0.85rem] text-ink-60">
                  Opens the App Store on iPhone, Google Play on Android.
                </p>
              </div>
            </div>
          </div>

          {/* Phone with the in-app sign-in moment */}
          <div data-hero-stage className="relative mx-auto w-full max-w-[24rem]">
            <div className="relative mx-auto w-[72%] sm:w-[62%] lg:w-[76%]">
              <PhoneMockup variant="home" />
            </div>

            <div
              data-hero-chip
              className="absolute left-0 top-[18%] flex items-center gap-2.5 rounded-2xl bg-white/85 px-3.5 py-2.5 shadow-[0_16px_40px_-14px_rgba(15,22,43,0.3)] ring-1 ring-black/5 backdrop-blur"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-brand/8 text-brand">
                <CheckBadge className="h-4.5 w-4.5" />
              </span>
              <div>
                <p className="text-[0.78rem] font-semibold leading-tight">
                  iJamat ID verified
                </p>
                <p className="text-[0.7rem] text-ink-60">Signed in as Fatema</p>
              </div>
            </div>

            <div
              data-hero-chip
              className="absolute right-0 top-[52%] flex items-center gap-2.5 rounded-2xl bg-white/85 px-3.5 py-2.5 shadow-[0_16px_40px_-14px_rgba(15,22,43,0.3)] ring-1 ring-black/5 backdrop-blur"
            >
              <span className="text-[1.1rem]">🔐</span>
              <div>
                <p className="text-[0.78rem] font-semibold leading-tight">
                  One-tap OTP
                </p>
                <p className="text-[0.7rem] text-ink-60">No password, ever</p>
              </div>
            </div>

            <div
              data-hero-chip
              className="absolute bottom-[6%] left-[6%] flex items-center gap-3 rounded-2xl bg-white/85 px-3.5 py-2.5 shadow-[0_16px_40px_-14px_rgba(15,22,43,0.3)] ring-1 ring-black/5 backdrop-blur"
            >
              <AppleIcon className="h-4 w-4" />
              <span className="text-[0.78rem] font-semibold">App Store</span>
              <span className="text-ink/15">|</span>
              <GooglePlayIcon className="h-4 w-4" />
              <span className="text-[0.78rem] font-semibold">Google Play</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
