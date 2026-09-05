import Reveal from "../Reveal";

type IconProps = { className?: string };

const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function ShieldCheck({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M12 3l7 3v5c0 4.5-3 8.5-7 10-4-1.5-7-5.5-7-10V6l7-3z" {...stroke} />
      <path d="M9.5 12l2 2 3.5-4" {...stroke} />
    </svg>
  );
}

function Sprout({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M12 21v-8" {...stroke} />
      <path d="M12 13c0-3 2-5 5-5 0 3-2 5-5 5z" {...stroke} />
      <path d="M12 15c0-2.6-1.8-4.5-4.5-4.5 0 2.6 1.8 4.5 4.5 4.5z" {...stroke} />
    </svg>
  );
}

function Rupee({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <circle cx="12" cy="12" r="9" {...stroke} />
      <path d="M9 7.5h6M9 10.5h6M13.5 7.5c0 2-1.4 3-3.2 3H9l4.6 6" {...stroke} />
    </svg>
  );
}

function Lock({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <rect x="4.5" y="10" width="15" height="10.5" rx="2.5" {...stroke} />
      <path d="M8.5 10V7.5a3.5 3.5 0 017 0V10" {...stroke} />
      <path d="M12 14v2.5" {...stroke} />
    </svg>
  );
}

function Globe({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <circle cx="12" cy="12" r="9" {...stroke} />
      <path d="M3.5 9.5h17M3.5 14.5h17" {...stroke} />
      <path d="M12 3c2.5 2.4 3.8 5.4 3.8 9S14.5 18.6 12 21c-2.5-2.4-3.8-5.4-3.8-9S9.5 5.4 12 3z" {...stroke} />
    </svg>
  );
}

function Handshake({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M3 9.5l3-2.5 4 1 3.5-1 4 2.5" {...stroke} />
      <path d="M3 9.5v5l3.5 3.5 2-2 2 1.5 2-1.5 2 1 3-3.5v-4.5" {...stroke} />
      <path d="M10 8l-2.5 2.5a1.6 1.6 0 002.2 2.3L12 10.7" {...stroke} />
    </svg>
  );
}

const values: Array<{
  Icon: (p: IconProps) => React.ReactElement;
  title: string;
  copy: string;
}> = [
  {
    Icon: ShieldCheck,
    title: "Verified, not just listed",
    copy: "Every provider clears Aadhaar and EJamat ID checks before a profile goes live. No anonymous sellers, no ghost listings.",
  },
  {
    Icon: Sprout,
    title: "Women-led by design",
    copy: "Three in five providers on Tijarah are women running businesses from home. The Women-led hub puts them first, not in a filter nobody opens.",
  },
  {
    Icon: Rupee,
    title: "Zero commission, always",
    copy: "Providers keep every ₹ a customer pays them. We charge no cut on bookings. The business belongs to the person doing the work.",
  },
  {
    Icon: Lock,
    title: "Your data stays yours",
    copy: "Chats are private, contact details are never scraped or resold, and we have no advertising business that would tempt us to change that.",
  },
  {
    Icon: Globe,
    title: "In your language",
    copy: "Ten languages, from Urdu and Gujarati to Tamil and English, so the app speaks the way your family actually does.",
  },
  {
    Icon: Handshake,
    title: "Moderated by neighbours",
    copy: "Reviews come only from real bookings, and disputes are read by community moderators who know the context, not an offshore queue.",
  },
];

export default function Values() {
  return (
    <section className="section-pad">
      <Reveal className="mx-auto flex max-w-[90rem] flex-col gap-[clamp(2.5rem,3vw,4rem)] px-[clamp(1rem,1.429vw+0.714rem,2rem)]">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <h2 data-reveal className="section-h2">
            What we hold to
          </h2>
          <p data-reveal className="text-[1.125rem] text-ink-60">
            Six commitments we&apos;d rather grow slowly than break.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {values.map(({ Icon, title, copy }) => (
            <div
              key={title}
              data-reveal
              className="flex flex-col gap-4 rounded-3xl bg-white p-7 shadow-[0_24px_48px_-32px_rgba(15,22,43,0.28)] transition-transform duration-500 hover:-translate-y-1"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/8 text-brand">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="section-h4">{title}</h3>
              <p className="text-[0.98rem] text-ink-60">{copy}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
