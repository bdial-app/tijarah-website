import Reveal from "./Reveal";

type Review = {
  title: string;
  author: string;
  date: string;
  body: string;
};

const rowA: Review[] = [
  { title: "Found my wedding caterer here", author: "Huseina M.", date: "September 9, 2026", body: "“Booked Hakimi Caterers after reading 40+ reviews from people I actually trust. The food was talked about for weeks!”" },
  { title: "My tiffin problem: solved", author: "mustafa_k", date: "August 28, 2026", body: "“Moved to Pune for work and found Tasneem's Tiffins in one search. Chatting and ordering took five minutes.”" },
  { title: "Changed everything for my studio", author: "ArwaHenna", date: "August 19, 2026", body: "“I went from WhatsApp forwards to 300+ bookings. The leads dashboard tells me exactly who's serious.”" },
  { title: "The women-led hub is beautiful", author: "Fatema S.", date: "July 30, 2026", body: "“Our community's women entrepreneurs get their own space to shine. I've discovered so many talented businesses.”" },
];

const rowB: Review[] = [
  { title: "Verified means I can relax", author: "sakina_hyd", date: "September 2, 2026", body: "“Aadhaar and iJamat verification means I know exactly who I'm dealing with. Reviews are genuine and moderated.”" },
  { title: "Urdu support! Finally", author: "Taher52", date: "August 24, 2026", body: "“My mother uses it in Urdu, I use it in English. Ten languages in one community app.”" },
  { title: "Deals actually worth claiming", author: "zahra.px", date: "August 8, 2026", body: "“20% off my first mehndi booking and a free dessert with my tiffin sign-up. The deals page is my first stop.”" },
  { title: "The community, digitized", author: "Murtaza B.", date: "July 18, 2026", body: "“From Surat to Mumbai, every trusted name is here. Chat, reviews, directions — one place.”" },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-star" aria-label="5 star review">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-current" aria-hidden>
          <path d="M8 1.3l1.8 4.4 4.7.4-3.6 3.1 1.1 4.6L8 11.4l-4.1 2.4 1.1-4.6L1.5 6.1l4.7-.4L8 1.3z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ r }: { r: Review }) {
  return (
    <div className="w-[20rem] flex-none rounded-2xl bg-white p-6 shadow-[0_12px_32px_-16px_rgba(15,22,43,0.15)] ring-1 ring-black/5 sm:w-[24rem]">
      <Stars />
      <p className="mt-3 text-[1.05rem] font-semibold">{r.title}</p>
      <p className="mt-1 text-[0.8rem] text-ink-40">
        {r.author} · {r.date}
      </p>
      <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-60">{r.body}</p>
    </div>
  );
}

function CardRow({ reviews, reverse = false, ariaHidden = false }: { reviews: Review[]; reverse?: boolean; ariaHidden?: boolean }) {
  return (
    <div
      className="marquee-row flex flex-none items-stretch gap-6 pr-6"
      style={reverse ? { animationDirection: "reverse" } : undefined}
      aria-hidden={ariaHidden}
    >
      {reviews.map((r) => (
        <ReviewCard key={r.title} r={r} />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="section-pad bg-amber [background-image:radial-gradient(80rem_40rem_at_50%_-10%,rgba(255,255,255,0.35),transparent)]">
      <Reveal className="flex flex-col gap-[clamp(2.5rem,3vw,5rem)]">
        <div data-reveal className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 text-center">
          <h2 className="section-h2">
            Crafted with care,
            <br />
            loved by the community
          </h2>
          <p className="max-w-lg text-[1.125rem] text-ink/75">
            Don&apos;t take our word for it. See why Tijarah is trusted by
            community members and business owners across the country.
          </p>
        </div>
        <div data-reveal className="mask-fade-x flex flex-col gap-6 overflow-hidden">
          <div className="flex [--marquee-duration:60s]">
            <CardRow reviews={rowA} />
            <CardRow reviews={rowA} ariaHidden />
          </div>
          <div className="flex [--marquee-duration:70s]">
            <CardRow reviews={rowB} reverse />
            <CardRow reviews={rowB} reverse ariaHidden />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
