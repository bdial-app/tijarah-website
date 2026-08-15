import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import StoreButtons from "./StoreButtons";
import { AppleIcon, GooglePlayIcon, TijarahWordmark } from "./icons";
import { APP_STORE_URL, PLAY_STORE_URL, isExternalUrl } from "@/lib/store-links";
import logo from "@/assests/Frame 7.png";

// Links without an href aren't built yet and fall back to "#".
const columns: Array<{
  heading: string;
  links: Array<{ label: string; href?: string }>;
}> = [
  {
    heading: "Company",
    links: [{ label: "About us", href: "/about" }, { label: "Careers" }, { label: "Blog" }],
  },
  {
    heading: "Get the app",
    links: [
      { label: "Download on the App Store", href: APP_STORE_URL },
      { label: "Get it on Google Play", href: PLAY_STORE_URL },
      { label: "Sign in", href: "/login" },
      { label: "System requirements", href: "/login" },
    ],
  },
  {
    heading: "Product",
    links: [
      { label: "Become a provider" },
      { label: "Deals" },
      { label: "Women-led hub" },
    ],
  },
  {
    heading: "Support",
    links: [{ label: "FAQ" }, { label: "Report a bug" }, { label: "Contact us" }],
  },
  {
    heading: "Legal",
    links: [{ label: "Terms of Service" }, { label: "Privacy Policy" }],
  },
];

const socials = ["Instagram", "X", "LinkedIn", "YouTube"];

export default function Footer() {
  return (
    <>
      {/* Closing CTA */}
      <section className="section-pad pt-0">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-8 px-4 text-center">
          <h2 data-reveal className="hero-h1">
            Ready when you are
          </h2>
          <p data-reveal className="max-w-md text-[1.125rem] text-ink-60">
            Start with one search. Tijarah connects you to your community and
            the businesses that make it special.
          </p>
          <div data-reveal>
            <StoreButtons className="justify-center" />
          </div>
          <p data-reveal className="-mt-2 text-[0.85rem] text-ink-40">
            Free on the App Store and Google Play · No account needed to browse
          </p>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="border-t border-ink/10">
        <div className="mx-auto max-w-[90rem] px-[clamp(1.5rem,2vw,3rem)] py-14">
          <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
            <div className="flex flex-col gap-6">
              <Link href="/" className="flex items-center gap-3" aria-label="Tijarah home">
                <Image src={logo} alt="Tijarah logo" className="h-12 w-12 rounded-2xl" />
                <TijarahWordmark className="text-[1.25rem]" />
              </Link>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-ink-60 [&_a]:whitespace-nowrap">
                <span className="text-[0.8rem] font-semibold uppercase tracking-wider text-ink-40">
                  Available on
                </span>
                <Link href="/login" className="flex items-center gap-1.5 text-[0.9rem] transition-opacity hover:opacity-60">
                  <AppleIcon className="h-4 w-4" />
                  App Store
                </Link>
                <Link href="/login" className="flex items-center gap-1.5 text-[0.9rem] transition-opacity hover:opacity-60">
                  <GooglePlayIcon className="h-4 w-4" />
                  Google Play
                </Link>
              </div>
              <p className="text-[0.85rem] text-ink-40">© Tijarah, 2026</p>
              <div className="flex gap-5">
                {socials.map((s) => (
                  <a key={s} href="#" className="text-[0.9rem] text-ink-60 transition-opacity hover:opacity-60">
                    {s}
                  </a>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-14">
              {columns.map((col) => (
                <div key={col.heading}>
                  <p className="text-[0.8rem] font-semibold uppercase tracking-wider text-ink-40">
                    {col.heading}
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {col.links.map((l) => (
                      <li key={l.label}>
                        <Link
                          href={l.href ?? "#"}
                          className="text-[0.95rem] transition-opacity hover:opacity-60"
                          {...(isExternalUrl(l.href ?? "")
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
