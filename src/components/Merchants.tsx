import Reveal from "./Reveal";

function Laurel({ flip = false }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 56"
      className={`h-12 w-auto text-ink/80 ${flip ? "-scale-x-100" : ""}`}
      fill="currentColor"
      aria-hidden
    >
      {/* Stem */}
      <path
        d="M20 4 C10 16 8 34 16 52"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* Leaves along the stem */}
      {[
        [19, 8, -50],
        [15, 14, -35],
        [12.2, 21, -20],
        [10.8, 28, -5],
        [11, 35, 10],
        [12.8, 42, 25],
        [15.5, 48, 40],
      ].map(([x, y, r], i) => (
        <ellipse
          key={i}
          cx={x}
          cy={y}
          rx="2.3"
          ry="5"
          transform={`rotate(${r} ${x} ${y})`}
        />
      ))}
    </svg>
  );
}

function AwardBadge({ label, title }: { label: string; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <Laurel />
      <div className="text-center">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-ink-60">
          {label}
        </p>
        <p className="mt-0.5 text-[0.95rem] font-semibold leading-tight">
          {title}
        </p>
      </div>
      <Laurel flip />
    </div>
  );
}

type Merchant = {
  name: string;
  city: string;
  emoji: string;
  gradient: string;
  stat: string;
  delta?: string;
};

const merchants: Merchant[] = [
  { name: "Zainab's Kitchen", city: "Mumbai", emoji: "🍱", gradient: "from-amber-200 via-orange-300 to-amber-500", stat: "4.9 ★ · 214 reviews", delta: "💜" },
  { name: "Arwa's Henna Studio", city: "Pune", emoji: "🎨", gradient: "from-rose-200 via-rose-300 to-rose-500", stat: "312 bookings", delta: "💜" },
  { name: "Taher Tailors", city: "Surat", emoji: "✂️", gradient: "from-stone-300 via-stone-400 to-stone-600", stat: "4.8 ★ · 190 reviews" },
  { name: "Sakina's Bakes", city: "Hyderabad", emoji: "🎂", gradient: "from-fuchsia-200 via-pink-300 to-pink-600", stat: "1.2k saves", delta: "💜" },
  { name: "Burhani Tutors", city: "Indore", emoji: "📚", gradient: "from-sky-200 via-blue-300 to-blue-600", stat: "86 students" },
  { name: "Mariya Mehndi", city: "Ahmedabad", emoji: "🌸", gradient: "from-lime-200 via-green-300 to-green-600", stat: "Booked till Eid", delta: "💜" },
  { name: "Hakimi Caterers", city: "Mumbai", emoji: "🍽️", gradient: "from-yellow-200 via-amber-300 to-orange-400", stat: "4.9 ★ · 128 events" },
  { name: "Nafisa's Boutique", city: "Udaipur", emoji: "👗", gradient: "from-violet-200 via-purple-300 to-indigo-600", stat: "New collection", delta: "💜" },
  { name: "Saifee Decor", city: "Pune", emoji: "🎈", gradient: "from-teal-200 via-emerald-300 to-emerald-600", stat: "140 events styled" },
  { name: "Tasneem's Tiffins", city: "Kolkata", emoji: "🥘", gradient: "from-orange-200 via-amber-400 to-yellow-600", stat: "580 subscribers", delta: "💜" },
];

function MerchantCard({ m }: { m: Merchant }) {
  return (
    <div
      className={`relative aspect-[2/3] w-[clamp(8.5rem,8.929vw+6.714rem,14.75rem)] flex-none overflow-hidden rounded-2xl bg-gradient-to-br ${m.gradient}`}
    >
      {/* Stat chips, echoing the reference's overlaid app metrics */}
      <div className="absolute left-2 right-2 top-2 flex flex-wrap gap-1">
        <span className="rounded-full bg-white/75 px-2 py-1 text-[0.62rem] font-semibold backdrop-blur">
          {m.stat}
        </span>
        {m.delta &&
          (m.delta === "💜" ? (
            <span className="rounded-full bg-violet-100 px-2 py-1 text-[0.62rem] font-semibold text-violet-700 backdrop-blur">
              💜 Women-led
            </span>
          ) : (
            <span className="rounded-full bg-white/75 px-2 py-1 text-[0.62rem] font-semibold text-emerald-700 backdrop-blur">
              {m.delta}
            </span>
          ))}
      </div>
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[3.4rem] drop-shadow-sm">
        {m.emoji}
      </span>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent px-3 pb-2.5 pt-8 text-white">
        <p className="text-[0.8rem] font-semibold leading-tight">{m.name}</p>
        <p className="text-[0.68rem] text-white/75">{m.city}</p>
      </div>
    </div>
  );
}

function CardRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      className="marquee-row flex flex-none items-stretch gap-[clamp(1rem,1.429vw+0.714rem,2rem)] pr-[clamp(1rem,1.429vw+0.714rem,2rem)]"
      aria-hidden={ariaHidden}
    >
      {merchants.map((m) => (
        <MerchantCard key={m.name} m={m} />
      ))}
    </div>
  );
}

export default function Merchants() {
  return (
    <section className="section-pad">
      <Reveal className="flex flex-col gap-[clamp(2.5rem,3vw,5rem)]">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 px-4 text-center">
          <div data-reveal className="flex flex-wrap items-center justify-center gap-8">
            <AwardBadge label="App Store" title="4.8 ★ Rated" />
            <AwardBadge label="Google Play" title="4.7 ★ Rated" />
            <AwardBadge label="Community Choice" title="Women-led Hub" />
          </div>
          <h2 data-reveal className="section-h2">
            Join over 25,000 members supporting community businesses
          </h2>
        </div>
        <div data-reveal className="mask-fade-x flex justify-start overflow-hidden [--marquee-duration:55s]">
          <CardRow />
          <CardRow ariaHidden />
        </div>
      </Reveal>
    </section>
  );
}
