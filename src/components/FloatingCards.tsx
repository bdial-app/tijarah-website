import type { CSSProperties, ReactNode } from "react";

function FloatCard({
  className,
  delay = 0,
  children,
}: {
  className: string;
  delay?: number;
  children: ReactNode;
}) {
  const style: CSSProperties = {
    animationDelay: `${delay}s`,
    animationDuration: `${6 + delay}s`,
  };
  return (
    <div className={`js-hero-card absolute hidden xl:block ${className}`}>
      <div className="card-float" style={style}>
        <div className="rounded-2xl bg-white/95 p-3.5 shadow-[0_16px_40px_-12px_rgba(31,32,37,0.22)] ring-1 ring-black/5 backdrop-blur">
          {children}
        </div>
      </div>
    </div>
  );
}

function Avatar({ from, to, label }: { from: string; to: string; label: string }) {
  return (
    <span
      className={`flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br ${from} ${to} text-[10px] font-semibold text-white ring-2 ring-white`}
    >
      {label}
    </span>
  );
}

// Floating app-UI snippets scattered around the phones, like the reference hero
export default function FloatingCards() {
  return (
    <>
      <FloatCard className="left-[2.5%] top-[6%] w-[15%] min-w-[180px]" delay={0.4}>
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 text-[#f5b31e]">
            <svg viewBox="0 0 16 16" className="h-4 w-4 fill-current" aria-hidden>
              <path d="M8 1.3l1.8 4.4 4.7.4-3.6 3.1 1.1 4.6L8 11.4l-4.1 2.4 1.1-4.6L1.5 6.1l4.7-.4L8 1.3z" />
            </svg>
          </span>
          <span>
            <span className="block text-[12px] font-semibold leading-tight">
              New review ★★★★★
            </span>
            <span className="block text-[11px] text-ink-60">
              Amazing tiffin service! · just now
            </span>
          </span>
        </div>
      </FloatCard>

      <FloatCard className="left-[1.5%] top-[44%] w-[11%] min-w-[150px]" delay={1.3}>
        <div className="flex items-center justify-between">
          <span className="text-[12px] font-semibold">Profile views</span>
          <span className="rounded-full bg-emerald-100 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700">
            +32%
          </span>
        </div>
        <div className="mt-2 flex h-9 items-end gap-1" aria-hidden>
          {[35, 55, 45, 70, 52, 88, 62].map((v, i) => (
            <span
              key={i}
              className={`flex-1 rounded-sm ${i === 5 ? "bg-[#221d8f]" : "bg-ink/10"}`}
              style={{ height: `${v}%` }}
            />
          ))}
        </div>
        <p className="mt-1.5 text-[11px] text-ink-60">This week</p>
      </FloatCard>

      <FloatCard className="left-[1.5%] top-[72%] w-[15%] min-w-[185px]" delay={0.9}>
        <div className="flex items-center gap-1 text-star" aria-hidden>
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} viewBox="0 0 16 16" className="h-3 w-3 fill-current">
              <path d="M8 1.3l1.8 4.4 4.7.4-3.6 3.1 1.1 4.6L8 11.4l-4.1 2.4 1.1-4.6L1.5 6.1l4.7-.4L8 1.3z" />
            </svg>
          ))}
        </div>
        <p className="mt-1.5 text-[12px] leading-snug">
          “Found my wedding caterer here!”
        </p>
        <p className="mt-1 text-[11px] text-ink-60">— Arwa M.</p>
      </FloatCard>

      <FloatCard className="right-[2.5%] top-[8%] w-[14.5%] min-w-[180px]" delay={1.8}>
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-[15px]">
            🔥
          </span>
          <span>
            <span className="block text-[12px] font-semibold leading-tight">
              New lead
            </span>
            <span className="block text-[11px] text-ink-60">
              Mehndi booking · Mumbai
            </span>
          </span>
        </div>
      </FloatCard>

      <FloatCard className="right-[1%] top-[46%] w-[11%] min-w-[150px]" delay={0.6}>
        <div className="flex items-center">
          <Avatar from="from-rose-400" to="to-pink-600" label="S" />
          <span className="-ml-2">
            <Avatar from="from-sky-400" to="to-blue-600" label="K" />
          </span>
          <span className="-ml-2">
            <Avatar from="from-amber-400" to="to-orange-600" label="N" />
          </span>
          <span className="ml-2 text-[12px] font-semibold">+2,180</span>
        </div>
        <p className="mt-1.5 text-[11px] text-ink-60">
          new members this month
        </p>
      </FloatCard>

      <FloatCard className="right-[1.5%] top-[74%] w-[13.5%] min-w-[170px]" delay={1.1}>
        <div className="flex items-center justify-between">
          <span className="text-[12px] font-semibold">Deal claimed 🎉</span>
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
        </div>
        <p className="mt-1 text-[11px] text-ink-60">
          20% off first tiffin week
        </p>
        <div className="mt-2 h-1.5 w-full rounded-full bg-ink/10">
          <div className="h-full w-[68%] rounded-full bg-[#f5b31e]" />
        </div>
        <p className="mt-1.5 text-[10px] text-ink-60">34 of 50 claimed</p>
      </FloatCard>
    </>
  );
}
