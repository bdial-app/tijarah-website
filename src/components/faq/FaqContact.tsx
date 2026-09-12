import Reveal from "../Reveal";
import StoreButtons from "../StoreButtons";
import { SUPPORT_EMAIL } from "@/lib/site";

// Closing card: the two things a reader can still do after the FAQ,
// write to a person or get the app.
export default function FaqContact() {
  return (
    <section className="px-[clamp(1rem,1.429vw+0.714rem,2rem)] pb-[clamp(5rem,7.143vw+3.571rem,10rem)]">
      <Reveal className="relative mx-auto flex max-w-[80rem] flex-col gap-8 overflow-hidden rounded-3xl bg-brand-deep px-[clamp(1.5rem,3vw,4rem)] py-[clamp(3rem,4vw,5rem)] text-white md:flex-row md:items-end md:justify-between">
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(253,192,3,0.35),transparent_65%)]"
          aria-hidden
        />
        <div className="relative flex max-w-xl flex-col gap-4">
          <p data-reveal className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-amber">
            Still stuck?
          </p>
          <h2 data-reveal className="card-h2">
            Ask a person
          </h2>
          <p data-reveal className="text-[1.05rem] text-white/70">
            Email{" "}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="font-semibold text-white underline decoration-amber decoration-2 underline-offset-4"
            >
              {SUPPORT_EMAIL}
            </a>{" "}
            or use Contact us inside the app. We reply within two working days,
            and we never ask for an OTP.
          </p>
        </div>
        <div data-reveal className="relative shrink-0">
          <StoreButtons tone="dark" />
        </div>
      </Reveal>
    </section>
  );
}
