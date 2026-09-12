import Link from "next/link";
import Reveal from "./Reveal";
import StoreButtons from "./StoreButtons";
import { AppleIcon, GooglePlayIcon } from "./icons";
import BrandLogo from "./BrandLogo";
import { PhoneMockup } from "./Devices";
import { APP_STORE_URL, PLAY_STORE_URL, isExternalUrl } from "@/lib/store-links";
import ctaExplore from "@/assests/discover-2.png";
import ctaService from "@/assests/Heroimg/hero3.png";
import ctaProfile from "@/assests/Heroimg/hero2.png";

// Links without an href aren't built yet and fall back to "#".
const columns: Array<{
  heading: string;
  links: Array<{ label: string; href?: string }>;
}> = [
  {
    heading: "Company",
    links: [{ label: "About us", href: "/about" }, { label: "Blog", href: "/blog" }],
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
    links: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/tijarahconnect?igsi=enJuMWEzM2pyZXBy",
  },
];

export default function Footer() {
  return (
    <>
      {/* Closing CTA: copy on top, then a fan of phones that sinks into the
          footer — the reference closes with a product flat-lay in the same
          spot, so the page ends on the app rather than on empty ground. */}
      <section className="section-pad relative overflow-hidden pb-0">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[70%] [background:radial-gradient(60rem_32rem_at_50%_0%,rgba(253,192,3,0.16),transparent_70%)]"
          aria-hidden
        />
        <Reveal className="relative mx-auto flex w-full max-w-[86rem] flex-col items-center">
          <div className="flex max-w-2xl flex-col items-center gap-8 px-4 text-center">
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
          </div>

          {/* Device stage: phones are taller than the stage on purpose so
              they run off the bottom edge and fade into the footer. */}
          <div
            data-reveal
            className="pointer-events-none relative mt-12 w-full select-none md:mt-16"
          >
            <div className="relative mx-auto aspect-[390/300] [mask-image:linear-gradient(#000_40%,transparent_95%)] [-webkit-mask-image:linear-gradient(#000_40%,transparent_95%)] w-full sm:aspect-[1440/440] md:aspect-[1440/400]">
              <div className="absolute left-[16%] top-[14%] hidden w-[18.5%] md:block [transform:perspective(1600px)_rotateY(16deg)_rotate(-6deg)]">
                <PhoneMockup
                  screenshot={ctaService}
                  alt="Tijarah service listing for centralised air conditioning"
                />
              </div>

              <div className="absolute right-[16%] top-[14%] hidden w-[18.5%] md:block [transform:perspective(1600px)_rotateY(-16deg)_rotate(6deg)]">
                <PhoneMockup
                  screenshot={ctaProfile}
                  alt="Verified provider profile on Tijarah"
                />
              </div>

              <div className="absolute left-1/2 top-0 w-[64%] -translate-x-1/2 sm:w-[38%] md:w-[22.5%]">
                <PhoneMockup
                  screenshot={ctaExplore}
                  alt="Explore tab in Tijarah with curated collections and nearby businesses"
                />
              </div>
            </div>
          </div>
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
            {/* Brand: the tile's own navy melts into the footer, leaving the
                wordmark reading as if it were set straight on the background. */}
            <div className="flex max-w-sm flex-col items-start gap-6">
              <Link href="/" aria-label="Tijarah home">
                <BrandLogo className="h-[2.1rem]" />
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
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-pill"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
