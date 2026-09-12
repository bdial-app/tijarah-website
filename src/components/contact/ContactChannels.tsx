import Link from "next/link";
import Reveal from "../Reveal";
import ContactForm from "./ContactForm";
import { channels } from "@/lib/contact";
import { isExternalUrl } from "@/lib/store-links";

export default function ContactChannels() {
  return (
    <section className="px-[clamp(1rem,1.429vw+0.714rem,2rem)] py-[clamp(3rem,5vw,5rem)]">
      <div className="mx-auto grid w-full max-w-[80rem] gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16">
        {/* Form */}
        <div className="min-w-0">
          <h2 className="section-h3">Send us a message</h2>
          <p className="mt-2 max-w-xl text-ink-60">
            Pick the closest topic so it lands with the right person. Many
            questions are already answered in the{" "}
            <Link
              href="/faq"
              className="font-semibold text-brand underline decoration-amber decoration-2 underline-offset-4"
            >
              FAQ
            </Link>
            .
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>

        {/* Other ways in */}
        <Reveal className="flex flex-col gap-4">
          <p data-reveal className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ink-40">
            Other ways to reach us
          </p>
          {channels.map((c) => (
            <div
              key={c.title}
              data-reveal
              className="flex flex-col gap-2 rounded-3xl bg-white p-6 shadow-[0_24px_48px_-32px_rgba(15,22,43,0.28)]"
            >
              <h3 className="text-[1.05rem] font-semibold text-ink">{c.title}</h3>
              <p className="text-[0.95rem] text-ink-60">{c.copy}</p>
              {c.href ? (
                <a
                  href={c.href}
                  className="mt-1 break-all font-semibold text-brand underline decoration-amber decoration-2 underline-offset-4 transition-colors hover:text-brand-bright"
                  {...(isExternalUrl(c.href)
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {c.label}
                </a>
              ) : (
                <p className="mt-1 font-semibold text-ink">{c.label}</p>
              )}
              <p className="text-[0.8rem] text-ink-40">{c.note}</p>
            </div>
          ))}
          <p data-reveal className="mt-2 rounded-3xl bg-amber-100 p-5 text-[0.9rem] leading-relaxed text-ink">
            <strong className="font-semibold">We never ask for an OTP.</strong>{" "}
            Anyone who does, on any channel, is not Tijarah.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
