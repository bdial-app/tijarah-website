import Image, { type StaticImageData } from "next/image";
import Reveal from "./Reveal";
import { PhoneMockup } from "./Devices";
import discoverShot from "@/assests/discover-2.png";
import chatShot from "@/assests/chat-2.png";
import trustShot from "@/assests/trust.png";
import sakinaShot from "@/assests/sakina-2.png";
import advShot from "@/assests/adv.png";

// Three metric cards + two horizontal feature blocks, mirroring the
// reference's "Start the day with confidence" section. Card tint colors and
// aspect ratios are lifted from the reference CSS.

function MetricCard({
  tint,
  title,
  copy,
  phone,
  screenshot,
  overlay,
}: {
  tint: string;
  title: string;
  copy: string;
  phone?: "home" | "chat" | "provider" | "analytics" | "leads";
  screenshot?: { src: StaticImageData; alt: string };
  overlay: React.ReactNode;
}) {
  return (
    <div
      data-reveal
      className={`flex flex-col overflow-hidden rounded-3xl bg-[#EAEEF7] ${tint}`}
    >
      <div className="p-[clamp(2.5rem,0.714vw+2.357rem,3rem)] pb-0">
        <h3 className="section-h3">{title}</h3>
        <p className="mt-2 text-[1.05rem] text-ink-60">{copy}</p>
      </div>
      <div className="relative mt-6 flex aspect-[432/495] justify-center overflow-hidden">
        <div className="w-[68%]">
          {screenshot ? (
            <PhoneMockup screenshot={screenshot.src} alt={screenshot.alt} />
          ) : (
            <PhoneMockup variant={phone!} />
          )}
        </div>
        {overlay}
      </div>
    </div>
  );
}

function GlassChip({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-white/60 p-4 shadow-[0_2px_16px_rgba(0,0,0,0.15)] backdrop-blur-xl">
      {children}
    </div>
  );
}

function ProviderCard({
  gradient,
  emoji,
  image,
  name,
  city,
  stat,
  statColor,
}: {
  gradient: string;
  emoji?: string;
  image?: { src: StaticImageData; alt: string };
  name: string;
  city: string;
  stat: string;
  statColor: string;
}) {
  return (
    <div className="w-full overflow-hidden rounded-[2rem] bg-white shadow-[0_16px_40px_-16px_rgba(15,22,43,0.25)]">
      <div className={`relative flex aspect-square items-center justify-center overflow-hidden bg-gradient-to-br ${gradient}`}>
        {image ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 1024px) 20rem, 40vw"
            className="object-cover object-top"
          />
        ) : (
          <span className="text-[4rem] drop-shadow-sm">{emoji}</span>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-2">
          <p className="text-[1rem] font-semibold leading-tight">{name}</p>
          <p className="text-[0.85rem] font-medium text-ink-60">{city}</p>
        </div>
        <p className={`mt-1.5 text-[0.85rem] font-semibold ${statColor}`}>{stat}</p>
      </div>
    </div>
  );
}

const trustIcons = ["🪪", "✅", "📞", "⭐", "🏅", "🛡️", "📍", "✨", "🌟", "💜"];

function OrbitRing({
  size,
  duration,
  reverse = false,
  icons,
}: {
  size: string;
  duration: string;
  reverse?: boolean;
  icons: string[];
}) {
  return (
    <div
      className={`absolute left-1/2 top-1/2 aspect-square -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[inset_0_0_1.5rem_#fff] ${size}`}
    >
      <div
        className="orbit-spin absolute inset-0"
        style={{ animationDuration: duration, animationDirection: reverse ? "reverse" : "normal" }}
      >
        {icons.map((icon, i) => {
          const angle = (360 / icons.length) * i;
          return (
            <div
              key={i}
              className="absolute inset-0"
              style={{ transform: `rotate(${angle}deg)` }}
            >
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                {/* Static counter-rotation cancels the placement angle; animated
                    counter-spin cancels the ring rotation, keeping icons upright */}
                <div style={{ transform: `rotate(${-angle}deg)` }}>
                  <div
                    className="orbit-spin flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[1.25rem] shadow-[0_0_1rem_-4px_rgba(0,0,0,0.35)]"
                    style={{
                      animationDuration: duration,
                      animationDirection: reverse ? "normal" : "reverse",
                    }}
                  >
                    {icon}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section className="section-pad pt-0">
      <Reveal className="mx-auto flex max-w-[90rem] flex-col gap-[clamp(2.5rem,3vw,5rem)] px-[clamp(1rem,1.429vw+0.714rem,2rem)]">
        {/* Header */}
        <div data-reveal className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <h2 className="section-h2">Find the right service with confidence</h2>
          <p className="max-w-md text-[1.125rem] text-ink-60">
            Search, compare, and connect, with real reviews from people you trust.
          </p>
        </div>

        {/* Three metric cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          <MetricCard
            tint="[background-image:linear-gradient(rgba(255,255,255,0)_40%,rgba(253,192,3,0.18)_90%,rgba(253,192,3,0.35))]"
            title="Discover"
            copy="Typo friendly search that knows your area find anything from tiffin services to henna artists."
            screenshot={{ src: discoverShot, alt: "Tijarah app home screen showing search and nearby providers" }}
            overlay={
              <div className="absolute bottom-[-4%] left-1/2 flex w-[81%] -translate-x-1/2 flex-col gap-3">
                <GlassChip>
                  <p className="text-[1.1rem] font-semibold tracking-tight">
                    🔍 &apos;mehndi near me&apos;
                  </p>
                  <p className="mt-1 text-[0.85rem] text-ink-60">24 providers nearby</p>
                </GlassChip>
              </div>
            }
          />
          <MetricCard
            tint="[background-image:linear-gradient(rgba(255,255,255,0)_40%,rgba(51,71,127,0.2)_90%,rgba(51,71,127,0.4))]"
            title="Chat"
            copy="Message providers directly in real-time, with photos, read receipts, and typing indicators."
            screenshot={{ src: chatShot, alt: "Tijarah chat screen with a provider conversation and product enquiries" }}
            overlay={
              <div className="absolute bottom-[10%] right-[6%] w-[44%]">
                <GlassChip>
                  <p className="text-[0.85rem] font-semibold leading-tight">
                    💬 Zainab&apos;s Kitchen
                  </p>
                  <p className="mt-1 text-[0.75rem] text-ink-60">typing…</p>
                </GlassChip>
              </div>
            }
          />
          <MetricCard
            tint="[background-image:linear-gradient(rgba(255,255,255,0)_40%,rgba(122,141,186,0.25)_90%,rgba(122,141,186,0.45))]"
            title="Trust"
            copy="Real ratings and reviews from your community, moderated with care so you know who you're hiring."
            screenshot={{ src: trustShot, alt: "Tijarah provider profile with services, location, and contact details" }}
            overlay={
              <div className="absolute bottom-[8%] left-1/2 flex w-[87%] -translate-x-1/2 gap-3">
                <div className="flex-1 rounded-2xl bg-white p-4 shadow-[0_2px_16px_rgba(0,0,0,0.1)]">
                  <p className="text-[1.1rem] font-semibold">★ 4.9</p>
                  <p className="text-[0.75rem] text-ink-60">312 reviews</p>
                </div>
                <div className="flex-1 rounded-2xl bg-white p-4 shadow-[0_2px_16px_rgba(0,0,0,0.1)]">
                  <p className="text-[1.1rem] font-semibold text-emerald-600">✓ Verified</p>
                  <p className="text-[0.75rem] text-ink-60">provider</p>
                </div>
              </div>
            }
          />
        </div>

        {/* Horizontal: women-led hub (text left, images right) */}
        <div
          data-reveal
          className="flex flex-col overflow-hidden rounded-3xl bg-[#EAEEF7] [background-image:linear-gradient(rgba(255,255,255,0),rgba(159,174,206,0.45)_90%,rgba(159,174,206,0.45))] lg:aspect-[1360/650] lg:flex-row lg:items-center"
        >
          <div className="w-full p-[clamp(2.5rem,0.714vw+2.357rem,3rem)] lg:w-[clamp(23.125rem,18.214vw+19.482rem,35.875rem)] lg:pl-12">
            <h3 className="card-h2">Women-led, front and center</h3>
            <p className="mt-4 text-[1.05rem] text-ink-60">
              A dedicated hub celebrating women-led businesses. Discover them,
              support them, watch them grow.
            </p>
          </div>
          <div className="relative flex flex-1 items-center justify-center gap-5 px-6 pb-10 lg:pb-0">
            <div className="w-[40%] max-w-[20rem]">
              <ProviderCard
                gradient="from-amber-200 via-orange-300 to-amber-500"
                image={{ src: sakinaShot, alt: "Sakina decorating a cake in her bakery" }}
                name="Sakina's Bakes"
                city="Hyderabad"
                stat="4.9 ★ · 💜 Women-led"
                statColor="text-violet-600"
              />
            </div>
            <div className="w-[40%] max-w-[20rem] translate-y-10">
              <ProviderCard
                gradient="from-amber-100 via-yellow-200 to-orange-300"
                image={{ src: advShot, alt: "Advocate Nisrin Dammerwala at her desk in front of law books" }}
                name="Adv.Nisrin Dammerwala"
                city="Pune"
                stat="312 bookings · 💜 Women-led"
                statColor="text-violet-600"
              />
            </div>
          </div>
        </div>

        {/* Horizontal: verification (images left, text right) */}
        <div
          data-reveal
          className="flex flex-col overflow-hidden rounded-3xl bg-[#EAEEF7] [background-image:linear-gradient(rgba(255,255,255,0),rgba(253,192,3,0.12)_90%,rgba(253,192,3,0.25))] lg:aspect-[1360/650] lg:flex-row-reverse lg:items-center"
        >
          <div className="w-full p-[clamp(2.5rem,0.714vw+2.357rem,3rem)] lg:w-[clamp(23.125rem,15.536vw+20.018rem,34rem)] lg:pr-12">
            <h3 className="card-h2">Verified, so you can trust who you hire</h3>
            <p className="mt-4 text-[1.05rem] text-ink-60">
              Aadhaar and iJamat verification, OTP-checked contact numbers, and
              earned badges like Top Rated and Rising Star.
            </p>
          </div>
          <div className="relative min-h-[24rem] flex-1 self-stretch overflow-hidden">
            {/* Orbiting verification rings */}
            <div className="absolute left-[42%] top-[58%] h-0 w-0">
              <OrbitRing size="w-[26rem]" duration="52s" icons={trustIcons.slice(0, 5)} />
              <OrbitRing size="w-[40rem]" duration="80s" reverse icons={trustIcons.slice(5)} />
            </div>
            {/* Phone on top */}
            <div className="absolute left-[30%] top-[16%] w-[38%] max-w-[15rem]">
              <PhoneMockup variant="provider" />
            </div>
            {/* Floating verification cards */}
            <div className="absolute right-[8%] top-[14%] w-[34%] max-w-[13rem] rotate-[5deg] rounded-2xl bg-white p-4 shadow-[0_16px_40px_-16px_rgba(15,22,43,0.35)]">
              <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-ink-40">
                Aadhaar
              </p>
              <div className="mt-2 space-y-1.5">
                {[100, 80, 60].map((w, i) => (
                  <div key={i} className="h-1.5 rounded-full bg-ink/10" style={{ width: `${w}%` }} />
                ))}
              </div>
              <p className="mt-2 text-[0.85rem] font-semibold text-emerald-600">✓ Verified</p>
            </div>
            <div className="absolute bottom-[12%] left-[6%] w-[32%] max-w-[12rem] -rotate-[10deg] rounded-2xl bg-white p-4 shadow-[0_16px_40px_-16px_rgba(15,22,43,0.35)]">
              <p className="text-[0.7rem] font-semibold uppercase tracking-wider text-ink-40">
                iJamat card
              </p>
              <p className="mt-1 text-[0.9rem] font-semibold">Community member ✓</p>
              <div className="mt-2 space-y-1.5">
                {[90, 70].map((w, i) => (
                  <div key={i} className="h-1.5 rounded-full bg-ink/10" style={{ width: `${w}%` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
