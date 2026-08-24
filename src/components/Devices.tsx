// Device mockups with hand-built app UI. All sizing inside the screens uses
// container-query units (cqw) so the UI scales with whatever width the parent
// gives the device.

import Image, { type StaticImageData } from "next/image";

const BRAND = "#0F162B";
const AMBER = "#FDC003";

function MiniBars({ accent = BRAND }: { accent?: string }) {
  const bars = [34, 55, 42, 70, 58, 88, 64];
  return (
    <div className="flex h-[14cqw] items-end gap-[1.8cqw]" aria-hidden>
      {bars.map((v, i) => (
        <div
          key={i}
          className="flex-1 rounded-[1cqw]"
          style={{
            height: `${v}%`,
            backgroundColor: i === 5 ? accent : "rgba(15,22,43,0.12)",
          }}
        />
      ))}
    </div>
  );
}

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-[7cqw] pt-[3.4cqw] text-[3.6cqw] font-semibold">
      <span>9:41</span>
      <span className="flex items-center gap-[1.4cqw]" aria-hidden>
        <span className="inline-block h-[2.4cqw] w-[4cqw] rounded-[0.6cqw] bg-ink/80" />
        <span className="inline-block h-[2.4cqw] w-[3.2cqw] rounded-[0.6cqw] bg-ink/50" />
        <span className="inline-block h-[2.6cqw] w-[5.4cqw] rounded-[0.8cqw] border border-ink/60" />
      </span>
    </div>
  );
}

function TabBar({ activeIndex = 0 }: { activeIndex?: number }) {
  return (
    <div className="mt-auto flex items-center justify-around border-t border-black/5 bg-white px-[6cqw] py-[3.4cqw]">
      {["Home", "Explore", "Chats", "Saved"].map((label, i) => {
        const on = i === activeIndex;
        return (
          <div
            key={label}
            className={`flex flex-col items-center gap-[1cqw] text-[2.6cqw] ${
              on ? "" : "text-ink-40"
            }`}
            style={on ? { color: BRAND } : undefined}
          >
            <span
              className="h-[4.6cqw] w-[4.6cqw] rounded-[1.4cqw]"
              style={{ backgroundColor: on ? BRAND : "rgba(15,22,43,0.2)" }}
            />
            {label}
          </div>
        );
      })}
    </div>
  );
}

function Stars({ n = 5 }: { n?: number }) {
  return (
    <span className="flex gap-[0.6cqw]" aria-hidden>
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} viewBox="0 0 16 16" className="h-[3cqw] w-[3cqw]" fill={AMBER}>
          <path d="M8 1.3l1.8 4.4 4.7.4-3.6 3.1 1.1 4.6L8 11.4l-4.1 2.4 1.1-4.6L1.5 6.1l4.7-.4L8 1.3z" />
        </svg>
      ))}
    </span>
  );
}

function HomeUI() {
  const categories = [
    { emoji: "🍱", label: "Food" },
    { emoji: "🎨", label: "Henna" },
    { emoji: "✂️", label: "Tailoring" },
    { emoji: "📚", label: "Tuition" },
  ];
  const providers = [
    { emoji: "🍱", name: "Zainab's Kitchen", cat: "Tiffin & Catering", rating: "4.9", count: "214", women: true },
    { emoji: "✂️", name: "Taher Tailors", cat: "Custom stitching", rating: "4.8", count: "190", women: false },
    { emoji: "🎨", name: "Arwa's Henna Studio", cat: "Bridal mehndi", rating: "4.9", count: "312", women: true },
  ];
  return (
    <div className="flex h-full flex-col bg-[#F4F6FA]">
      <StatusBar />
      <div className="flex flex-1 flex-col overflow-hidden px-[6cqw] pt-[5cqw]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[5.4cqw] font-semibold tracking-[-0.02em]">
              Salaam, Fatema 👋
            </p>
            <p className="text-[3.2cqw] text-ink-60">📍 Mumbai</p>
          </div>
          <span
            className="flex h-[10cqw] w-[10cqw] items-center justify-center rounded-full text-[4cqw] font-semibold text-white"
            style={{ background: `linear-gradient(135deg, ${BRAND}, #33477F)` }}
          >
            F
          </span>
        </div>

        <div className="mt-[4.6cqw] flex items-center gap-[2.6cqw] rounded-full bg-white px-[4.6cqw] py-[3.4cqw] shadow-[0_2cqw_6cqw_rgba(15,22,43,0.06)]">
          <span className="text-[3.6cqw]">🔍</span>
          <span className="text-[3.2cqw] text-ink-40">
            Try &lsquo;henna artist&rsquo;…
          </span>
        </div>

        <div className="mt-[4cqw] flex gap-[2.4cqw]">
          {categories.map((c) => (
            <div
              key={c.label}
              className="flex flex-1 flex-col items-center gap-[1.4cqw] rounded-[4cqw] bg-white py-[3cqw] shadow-[0_2cqw_6cqw_rgba(15,22,43,0.05)]"
            >
              <span className="text-[5cqw]">{c.emoji}</span>
              <span className="text-[2.6cqw] font-semibold">{c.label}</span>
            </div>
          ))}
        </div>

        <p className="mb-[2.6cqw] mt-[5cqw] text-[3.6cqw] font-semibold">
          Nearby providers
        </p>
        <div className="space-y-[2.4cqw]">
          {providers.map((p) => (
            <div
              key={p.name}
              className="flex items-center gap-[3.4cqw] rounded-[4.6cqw] bg-white p-[3.4cqw] shadow-[0_2cqw_6cqw_rgba(15,22,43,0.05)]"
            >
              <span className="flex h-[10cqw] w-[10cqw] items-center justify-center rounded-[3cqw] bg-[#EFF2F8] text-[4.6cqw]">
                {p.emoji}
              </span>
              <span className="flex-1">
                <span className="block text-[3.4cqw] font-semibold">{p.name}</span>
                <span className="block text-[2.8cqw] text-ink-60">{p.cat}</span>
                <span className="mt-[0.8cqw] flex items-center gap-[1.4cqw]">
                  <span className="text-[2.8cqw] font-semibold" style={{ color: AMBER }}>
                    ★ {p.rating}
                  </span>
                  <span className="text-[2.6cqw] text-ink-40">({p.count})</span>
                  {p.women && (
                    <span className="rounded-full bg-violet-100 px-[2cqw] py-[0.6cqw] text-[2.2cqw] font-semibold text-violet-700">
                      💜 Women-led
                    </span>
                  )}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
      <TabBar activeIndex={0} />
    </div>
  );
}

function ChatUI() {
  return (
    <div className="flex h-full flex-col bg-[#F4F6FA]">
      <StatusBar />
      <div className="flex items-center gap-[3cqw] border-b border-black/5 bg-white/70 px-[6cqw] py-[3.6cqw]">
        <span
          className="flex h-[9cqw] w-[9cqw] items-center justify-center rounded-full text-[3.6cqw] font-semibold text-white"
          style={{ background: `linear-gradient(135deg, ${AMBER}, #D99C00)` }}
        >
          Z
        </span>
        <span>
          <span className="block text-[4cqw] font-semibold">Zainab&apos;s Kitchen</span>
          <span className="flex items-center gap-[1.4cqw] text-[2.8cqw] text-emerald-600">
            <span className="h-[1.8cqw] w-[1.8cqw] rounded-full bg-emerald-500" />
            Online
          </span>
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-[3cqw] px-[5cqw] pt-[5cqw]">
        <div
          className="ml-auto max-w-[82%] rounded-[5cqw] rounded-br-[1.6cqw] p-[4cqw] text-[3.4cqw] text-white"
          style={{ backgroundColor: BRAND }}
        >
          Salaam! Do you deliver weekly tiffin to Bandra?
        </div>
        <div className="max-w-[82%] rounded-[5cqw] rounded-bl-[1.6cqw] bg-white p-[4cqw] text-[3.4cqw] shadow-[0_2cqw_6cqw_rgba(15,22,43,0.05)]">
          Wa alaikum salaam! Yes 😊 Mon–Fri, <b>₹1,800/week</b>
        </div>
        <div className="max-w-[82%] rounded-[5cqw] rounded-bl-[1.6cqw] bg-white p-[4cqw] text-[3.4cqw] shadow-[0_2cqw_6cqw_rgba(15,22,43,0.05)]">
          This week&apos;s menu 👇
          <span className="mt-[2.4cqw] flex items-center gap-[2cqw] rounded-[3cqw] bg-[#EFF2F8] p-[2.6cqw]">
            <span className="text-[4cqw]">🥘</span>
            <span className="text-[2.8cqw] text-ink-60">Menu · Mon–Fri</span>
          </span>
        </div>
        <div
          className="ml-auto max-w-[70%] rounded-[5cqw] rounded-br-[1.6cqw] p-[4cqw] text-[3.4cqw] text-white"
          style={{ backgroundColor: BRAND }}
        >
          Perfect, let&apos;s start Monday!
        </div>
        <div className="max-w-[62%] rounded-[5cqw] bg-emerald-50 p-[4cqw] text-[3.2cqw] text-emerald-800">
          ✓ Order confirmed
        </div>
      </div>
      <div className="m-[4cqw] flex items-center rounded-full bg-white px-[4.6cqw] py-[3.2cqw] text-[3.2cqw] text-ink-40 shadow-[0_2cqw_6cqw_rgba(15,22,43,0.06)]">
        Message…
      </div>
    </div>
  );
}

function ProviderUI() {
  const reviews = [
    { quote: "Stunning bridal work!", who: "Huseina M." },
    { quote: "Booked again for Eid", who: "Sakina F." },
  ];
  return (
    <div className="flex h-full flex-col bg-[#F4F6FA]">
      <div
        className="flex h-[26%] items-center justify-center"
        style={{ background: `linear-gradient(135deg, ${BRAND}, ${AMBER})` }}
      >
        <span className="text-[16cqw] drop-shadow-sm">🎨</span>
      </div>
      <div className="flex flex-1 flex-col overflow-hidden px-[5cqw] pt-[4cqw]">
        <p className="text-[5cqw] font-semibold tracking-[-0.02em]">
          Arwa&apos;s Henna Studio
        </p>
        <div className="mt-[2.4cqw] flex flex-wrap gap-[1.6cqw]">
          <span className="rounded-full bg-emerald-100 px-[2.6cqw] py-[1cqw] text-[2.4cqw] font-semibold text-emerald-700">
            ✓ Verified
          </span>
          <span className="rounded-full bg-violet-100 px-[2.6cqw] py-[1cqw] text-[2.4cqw] font-semibold text-violet-700">
            💜 Women-led
          </span>
          <span className="rounded-full bg-amber-100 px-[2.6cqw] py-[1cqw] text-[2.4cqw] font-semibold text-amber-700">
            ⭐ Top Rated
          </span>
        </div>

        <div className="mt-[3.4cqw] flex rounded-[4cqw] bg-white py-[3cqw] shadow-[0_2cqw_6cqw_rgba(15,22,43,0.05)]">
          {[
            ["4.9★", "rating"],
            ["312", "reviews"],
            ["1.8k", "saves"],
          ].map(([v, l]) => (
            <span key={l} className="flex flex-1 flex-col items-center">
              <span className="text-[3.8cqw] font-semibold">{v}</span>
              <span className="text-[2.4cqw] text-ink-40">{l}</span>
            </span>
          ))}
        </div>

        <div className="mt-[3cqw] flex gap-[2.4cqw]">
          <span className="flex-1 rounded-full bg-white py-[2.8cqw] text-center text-[2.8cqw] font-semibold shadow-[0_2cqw_6cqw_rgba(15,22,43,0.05)]">
            Call
          </span>
          <span
            className="flex-1 rounded-full py-[2.8cqw] text-center text-[2.8cqw] font-semibold text-white"
            style={{ backgroundColor: BRAND }}
          >
            Chat
          </span>
          <span className="flex-1 rounded-full bg-white py-[2.8cqw] text-center text-[2.8cqw] font-semibold shadow-[0_2cqw_6cqw_rgba(15,22,43,0.05)]">
            Directions
          </span>
        </div>

        <p className="mb-[2.4cqw] mt-[4cqw] text-[3.4cqw] font-semibold">Reviews</p>
        <div className="space-y-[2.4cqw]">
          {reviews.map((r) => (
            <div
              key={r.who}
              className="rounded-[4cqw] bg-white p-[3.4cqw] shadow-[0_2cqw_6cqw_rgba(15,22,43,0.05)]"
            >
              <Stars />
              <p className="mt-[1.6cqw] text-[3cqw] font-semibold">{r.quote}</p>
              <p className="text-[2.6cqw] text-ink-40">— {r.who}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AnalyticsUI() {
  const stats = [
    { label: "Calls", value: "86", delta: "+12%" },
    { label: "Directions", value: "54", delta: "+8%" },
    { label: "Saves", value: "129", delta: "+21%" },
  ];
  return (
    <div className="flex h-full flex-col bg-[#F4F6FA]">
      <StatusBar />
      <div className="flex flex-1 flex-col px-[6cqw] pt-[5cqw]">
        <div className="flex items-center justify-between">
          <p className="text-[5.4cqw] font-semibold tracking-[-0.02em]">
            Your dashboard
          </p>
          <span className="rounded-full bg-white px-[3.4cqw] py-[1.6cqw] text-[3cqw] shadow-[0_1cqw_4cqw_rgba(15,22,43,0.06)]">
            This week ▾
          </span>
        </div>

        <div className="mt-[4.6cqw] rounded-[6cqw] bg-white p-[5cqw] shadow-[0_2cqw_6cqw_rgba(15,22,43,0.06)]">
          <p className="text-[3.2cqw] text-ink-60">Profile views</p>
          <div className="mt-[1.5cqw] flex items-baseline gap-[2.6cqw]">
            <span className="text-[7.5cqw] font-semibold tracking-[-0.03em]">1,240</span>
            <span className="rounded-full bg-emerald-100 px-[2.4cqw] py-[0.8cqw] text-[2.8cqw] font-semibold text-emerald-700">
              +32%
            </span>
          </div>
          <div className="mt-[3.4cqw]">
            <MiniBars />
          </div>
          <div className="mt-[2cqw] flex justify-between text-[2.4cqw] text-ink-40">
            {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
              <span key={i}>{d}</span>
            ))}
          </div>
        </div>

        <div className="mt-[3.4cqw] space-y-[2.4cqw]">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex items-center justify-between rounded-[4.6cqw] bg-white p-[4cqw] shadow-[0_2cqw_6cqw_rgba(15,22,43,0.05)]"
            >
              <span className="text-[3.2cqw] text-ink-60">{s.label}</span>
              <span className="flex items-center gap-[2cqw]">
                <span className="text-[3.8cqw] font-semibold">{s.value}</span>
                <span className="text-[2.8cqw] font-semibold text-emerald-600">
                  {s.delta}
                </span>
              </span>
            </div>
          ))}
        </div>

        <div
          className="mt-[3.4cqw] flex items-center justify-between rounded-[4.6cqw] p-[4cqw] text-white"
          style={{ backgroundColor: BRAND }}
        >
          <span className="text-[3.2cqw] opacity-80">Conversion</span>
          <span className="text-[3.8cqw] font-semibold">6.8%</span>
        </div>
      </div>
    </div>
  );
}

function LeadsUI() {
  const leads = [
    { icon: "🔥", title: "Wedding mehndi", sub: "Fatema S. · Mumbai · 2h ago", unlock: true },
    { icon: "☀️", title: "Bulk tiffin order", sub: "Office, Pune · 5h ago", unlock: false },
    { icon: "🔥", title: "Rakhi gift hampers", sub: "Zahra B. · 1d ago", unlock: false },
  ];
  return (
    <div className="flex h-full flex-col bg-[#F4F6FA]">
      <StatusBar />
      <div className="flex flex-1 flex-col px-[6cqw] pt-[5cqw]">
        <p className="text-[5.4cqw] font-semibold tracking-[-0.02em]">Leads</p>

        <div className="mt-[3.4cqw] flex gap-[2cqw]">
          {["Hot", "Warm", "Cold"].map((s, i) => (
            <span
              key={s}
              className="rounded-full px-[4cqw] py-[1.8cqw] text-[2.8cqw] font-semibold"
              style={
                i === 0
                  ? { backgroundColor: AMBER, color: "#0F162B" }
                  : { backgroundColor: "#fff", color: "rgba(15,22,43,0.6)" }
              }
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-[4cqw] space-y-[2.4cqw]">
          {leads.map((l) => (
            <div
              key={l.title}
              className="flex items-center gap-[3cqw] rounded-[4.6cqw] bg-white p-[3.8cqw] shadow-[0_2cqw_6cqw_rgba(15,22,43,0.05)]"
            >
              <span className="text-[4.6cqw]">{l.icon}</span>
              <span className="flex-1">
                <span className="block text-[3.4cqw] font-semibold">{l.title}</span>
                <span className="block text-[2.7cqw] text-ink-60">{l.sub}</span>
              </span>
              {l.unlock && (
                <span
                  className="rounded-full px-[3.4cqw] py-[1.8cqw] text-[2.7cqw] font-semibold text-white"
                  style={{ backgroundColor: BRAND }}
                >
                  Unlock
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-[4cqw] self-start rounded-full bg-white px-[4cqw] py-[2.2cqw] text-[2.8cqw] font-semibold text-ink-60 shadow-[0_2cqw_6cqw_rgba(15,22,43,0.05)]">
          12 lead credits left
        </div>
      </div>
    </div>
  );
}

const screens = {
  home: HomeUI,
  chat: ChatUI,
  provider: ProviderUI,
  analytics: AnalyticsUI,
  leads: LeadsUI,
} as const;

type PhoneMockupProps =
  | { variant: keyof typeof screens; screenshot?: never; alt?: never }
  | { variant?: never; screenshot: StaticImageData; alt: string };

export function PhoneMockup({ variant, screenshot, alt }: PhoneMockupProps) {
  const Screen = variant ? screens[variant] : null;
  return (
    <div className="relative w-full [container-type:inline-size]">
      <div className="relative aspect-[392/852] w-full rounded-[14cqw] bg-[#0F162B] p-[2.4cqw] shadow-[0_30px_60px_-15px_rgba(15,22,43,0.35)]">
        <div className="relative h-full w-full overflow-hidden rounded-[11.8cqw] bg-[#F4F6FA]">
          {Screen ? (
            <Screen />
          ) : (
            <Image
              src={screenshot!}
              alt={alt!}
              fill
              sizes="30vw"
              className="object-cover object-top"
            />
          )}
          {/* Dynamic island */}
          <div className="absolute left-1/2 top-[1.6cqw] h-[6.4cqw] w-[24cqw] -translate-x-1/2 rounded-full bg-[#0F162B]" />
        </div>
      </div>
    </div>
  );
}
