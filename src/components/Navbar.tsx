"use client";

import { useState } from "react";
import Link from "next/link";
import StoreButtons, { AppStoreButton, PlayStoreButton } from "./StoreButtons";
import DownloadLink from "./DownloadLink";
import { usePlatform } from "@/lib/usePlatform";
import BrandLogo from "./BrandLogo";

const links = [
  { label: "About", href: "/about" },
  { label: "Login", href: "/login" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 pl-3" aria-label="Tijarah home">
      <BrandLogo className="h-[1.6rem]" priority plate />
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const platform = usePlatform();

  return (
    <header className="js-nav fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <div className="relative w-full max-w-5xl md:w-auto">
        <div className="flex w-full items-center justify-between gap-6 rounded-4xl bg-white/60 p-2 shadow-[0_8px_32px_-12px_rgba(15,22,43,0.12)] backdrop-blur-xl md:w-auto md:justify-center md:gap-10">
          <Logo />

          <nav className="hidden items-center gap-8 text-[0.95rem] md:flex">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="transition-opacity duration-300 hover:opacity-60"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            {/* Straight to the App Store / Google Play on a phone or tablet;
                desktop falls back to /login, which shows both stores. */}
            <DownloadLink className="btn whitespace-nowrap">
              {(platform) => (
                <>
                  <span>
                    {platform === "ios"
                      ? "Get on App Store"
                      : platform === "android"
                        ? "Get on Google Play"
                        : "Download app"}
                  </span>
                  <span className="btn-highlight" />
                </>
              )}
            </DownloadLink>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="mr-2 flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <span
              className={`h-[2px] w-5 rounded bg-ink transition-transform duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[2px] w-5 rounded bg-ink transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[2px] w-5 rounded bg-ink transition-transform duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`absolute inset-x-0 top-[calc(100%+0.5rem)] origin-top rounded-3xl bg-white/90 p-4 shadow-[0_24px_48px_-16px_rgba(15,22,43,0.25)] backdrop-blur-xl transition-all duration-300 md:hidden ${
            open
              ? "pointer-events-auto scale-100 opacity-100"
              : "pointer-events-none scale-95 opacity-0"
          }`}
        >
          <nav className="flex flex-col">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3.5 text-[1.05rem] font-semibold transition-colors hover:bg-ink/5"
              >
                {l.label}
              </Link>
            ))}
            {/* On a phone only one of the two stores can be used, so show the
                one that matches; unknown devices still get both. */}
            <div onClick={() => setOpen(false)} className="mt-3">
              {platform === "ios" || platform === "android" ? (
                <div className="flex [&>a]:w-full [&>a]:justify-center">
                  {platform === "ios" ? <AppStoreButton /> : <PlayStoreButton />}
                </div>
              ) : (
                <StoreButtons className="[&>a]:w-full [&>a]:justify-center" />
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
