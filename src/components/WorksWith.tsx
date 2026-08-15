import Reveal from "./Reveal";

// Placeholder partner wordmarks — swap for real SVG logos when provided.
// Styled monochrome at a fixed cap height, like the reference logo strip.
const partners = [
  { name: "App Store", style: "font-semibold tracking-tight" },
  { name: "Google Play", style: "font-semibold tracking-tight" },
  { name: "Web App", style: "font-bold tracking-tight" },
  { name: "Google Maps", style: "font-semibold tracking-tight" },
  { name: "Razorpay", style: "font-bold italic tracking-tight" },
  { name: "UPI", style: "font-black italic tracking-widest" },
];

function LogoRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      className="marquee-row flex flex-none items-center gap-10 pr-10 md:animate-none"
      aria-hidden={ariaHidden}
    >
      {partners.map((p) => (
        <span
          key={p.name}
          className={`whitespace-nowrap text-[1.35rem] leading-6 text-ink/80 ${p.style}`}
        >
          {p.name}
        </span>
      ))}
    </div>
  );
}

export default function WorksWith() {
  return (
    <section className="pt-24">
      <Reveal className="mx-auto flex max-w-[90rem] flex-col items-center gap-6 px-4">
        <h2 data-reveal className="section-h4">
          Available on
        </h2>
        {/* Desktop: centered static row. Mobile: infinite marquee with edge fade. */}
        <div
          data-reveal
          className="mask-fade-x flex w-full justify-start overflow-hidden [--marquee-duration:22s] md:[mask-image:none] md:justify-center"
        >
          <LogoRow />
          <div className="contents md:hidden">
            <LogoRow ariaHidden />
            <LogoRow ariaHidden />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
