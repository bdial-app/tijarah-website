import Image, { type StaticImageData } from "next/image";
import Reveal from "./Reveal";
import sweetTalksLogo from "@/assests/members/1.png";
import taherLogo from "@/assests/members/2.png";
import zainabLogo from "@/assests/members/zainab.png";
import nisrinLogo from "@/assests/members/nisrin.png";
import burhaniLogo from "@/assests/members/burhani.png";
import mariyaLogo from "@/assests/members/mariya.png";
import hakimiLogo from "@/assests/members/hakimi.png";
import nafisaLogo from "@/assests/members/nafisa.png";
import saifeeLogo from "@/assests/members/saifee.png";
import tasneemLogo from "@/assests/members/tasneem.png";

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
  /** Merchant logo; replaces the emoji tile when set. */
  logo?: StaticImageData;
  /**
   * For logos printed on a non-white ground: the artwork's own paper colour.
   * The card is painted flat in this colour so the square blends in seamlessly.
   * Leave unset for white-background logos, which multiply onto the tinted gradient.
   */
  paper?: string;
};

const merchants: Merchant[] = [
  { name: "Zainab's Kitchen", city: "Mumbai", emoji: "🍱", gradient: "from-orange-50 via-orange-100 to-amber-200", stat: "4.9 ★ · 214 reviews", delta: "💜", logo: zainabLogo, paper: "#fdf2de" },
  { name: "Adv.Nisrin Dammerwala", city: "Pune", emoji: "🎨", gradient: "from-slate-50 via-blue-100 to-indigo-200", stat: "312 bookings", delta: "💜", logo: nisrinLogo },
  { name: "Taher Tailors", city: "Surat", emoji: "✂️", gradient: "from-stone-50 via-stone-100 to-stone-300", stat: "4.8 ★ · 190 reviews", logo: taherLogo },
  { name: "Sweet Talks", city: "Hyderabad", emoji: "🍬", gradient: "from-green-50 via-emerald-100 to-lime-200", stat: "1.2k saves", delta: "💜", logo: sweetTalksLogo },
  { name: "Burhani Tutors", city: "Indore", emoji: "📚", gradient: "from-sky-50 via-sky-100 to-blue-200", stat: "86 students", logo: burhaniLogo },
  { name: "Mariya Mehndi", city: "Ahmedabad", emoji: "🌸", gradient: "from-rose-50 via-rose-100 to-pink-200", stat: "Booked till Eid", delta: "💜", logo: mariyaLogo, paper: "#fdf3e3" },
  { name: "Hakimi Caterers", city: "Mumbai", emoji: "🍽️", gradient: "from-amber-50 via-yellow-100 to-amber-200", stat: "4.9 ★ · 128 events", logo: hakimiLogo, paper: "#fcf4e5" },
  { name: "Nafisa's Boutique", city: "Udaipur", emoji: "👗", gradient: "from-purple-50 via-violet-100 to-purple-200", stat: "New collection", delta: "💜", logo: nafisaLogo, paper: "#fef8eb" },
  { name: "Saifee Decor", city: "Pune", emoji: "🎈", gradient: "from-teal-50 via-teal-100 to-emerald-200", stat: "140 events styled", logo: saifeeLogo },
  { name: "Tasneem's Tiffins", city: "Kolkata", emoji: "🥘", gradient: "from-red-50 via-red-100 to-orange-200", stat: "580 subscribers", delta: "💜", logo: tasneemLogo, paper: "#f0b66f" },
];

function MerchantCard({ m }: { m: Merchant }) {
  return (
    <div
      className={`relative aspect-[2/3] w-[clamp(8.5rem,8.929vw+6.714rem,14.75rem)] flex-none overflow-hidden rounded-2xl bg-gradient-to-br ${m.gradient}`}
      style={m.paper ? { background: m.paper } : undefined}
    >
      {/* Stat chips, echoing the reference's overlaid app metrics */}
      <div className="absolute left-2 right-2 top-2 z-10 flex flex-wrap gap-1">
        <span className="rounded-full bg-white/75 px-2 py-1 text-[0.62rem] font-semibold ring-1 ring-black/5 backdrop-blur">
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
      {m.logo ? (
        <Image
          src={m.logo}
          alt={`${m.name} logo`}
          fill
          sizes="(min-width: 1280px) 236px, 20vw"
          className={`object-contain p-5 ${m.paper ? "" : "mix-blend-multiply"}`}
        />
      ) : (
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[3.4rem] drop-shadow-sm">
          {m.emoji}
        </span>
      )}
      <div
        className={`absolute inset-x-0 bottom-0 bg-gradient-to-t to-transparent px-3 pb-2.5 pt-8 text-white ${
          m.logo ? "from-black/70" : "from-black/55"
        }`}
      >
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
