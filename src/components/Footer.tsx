import Link from "next/link";
import Reveal from "./Reveal";
import StoreButtons from "./StoreButtons";
import { AppleIcon, GooglePlayIcon, TijarahWordmark } from "./icons";
import { APP_STORE_URL, PLAY_STORE_URL, isExternalUrl } from "@/lib/store-links";

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
      { label: "App Store", href: APP_STORE_URL },
      { label: "Google Play", href: PLAY_STORE_URL },
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
      <footer className="relative overflow-hidden bg-brand text-white [background-image:radial-gradient(70rem_28rem_at_50%_0%,rgba(253,192,3,0.1),transparent)]">
        {/* Hairline of brand gold along the very top edge */}
        <div
          className="absolute inset-x-0 top-0 h-px [background:linear-gradient(90deg,transparent,rgba(253,192,3,0.5),transparent)]"
          aria-hidden
        />

        <div className="mx-auto max-w-[90rem] px-[clamp(1.5rem,2vw,3rem)] pb-10 pt-16">
          <div className="flex flex-col gap-14 lg:flex-row lg:justify-between lg:gap-20">
            {/* Brand: the wordmark carries the lockup on its own — the tile
                version disappears against the navy. */}
            <div className="flex max-w-sm flex-col items-start gap-6">
              <Link href="/" aria-label="Tijarah home">
                <TijarahWordmark className="text-[1.65rem]" light />
              </Link>
              <p className="text-[0.98rem] leading-relaxed text-white/55">
                Your community, connected. Verified providers, reviews you can
                trust, and no commission on a single booking.
              </p>
              <div className="flex flex-wrap gap-2.5">
                <Link href="/login" className="footer-pill">
                  <AppleIcon className="h-4 w-4" />
                  App Store
                </Link>
                <Link href="/login" className="footer-pill">
                  <GooglePlayIcon className="h-4 w-4" />
                  Google Play
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-12">
              {columns.map((col) => (
                <div key={col.heading}>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-amber">
                    {col.heading}
                  </p>
                  <ul className="mt-5 space-y-3">
                    {col.links.map((l) => (
                      <li key={l.label}>
                        <Link
                          href={l.href ?? "#"}
                          className="text-[0.95rem] text-white/65 transition-colors duration-200 hover:text-amber"
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

          {/* Bottom bar */}
          <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[0.85rem] text-white/40">
              © Tijarah, 2026 · Built for the community, in India
            </p>
            <div className="flex flex-wrap gap-2.5">
              {socials.map((s) => (
                <a key={s} href="#" className="footer-pill">
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
