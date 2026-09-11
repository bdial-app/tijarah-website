"use client";

import { useEffect, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import pushShot from "@/assests/push.png";
import dealsShot from "@/assests/Deals and Offers.png";
import savedShot from "@/assests/Saved-Bookmarks.png";
import catalogueShot from "@/assests/Catalogue.png";
import locationsShot from "@/assests/saved location.png";
import searchShot from "@/assests/Smart-search.png";

// Auto-advancing feature tabs, mirroring the reference's "And that's not all"
// section: a phone previews the active feature while the list cycles with a
// progress ring. Hover (or click) a tab to jump; cycling pauses while the
// section is hovered or offscreen.

const DURATION = 4500;

type Feature = {
  title: string;
  copy: string;
  emoji: string;
  accent: string;
  screenshot?: { src: StaticImageData; alt: string };
};

const features: Feature[] = [
  { title: "Deals & Offers", copy: "Community-exclusive offers before they expire.", emoji: "🏷️", accent: "from-rose-200 to-pink-400", screenshot: { src: dealsShot, alt: "Tijarah Manage Business screen on the Offers tab listing active, upcoming, and expired deals" } },
  { title: "Save & Bookmark", copy: "Keep providers and products handy for later.", emoji: "🔖", accent: "from-amber-200 to-orange-400", screenshot: { src: savedShot, alt: "Tijarah Saved screen listing bookmarked verified businesses in Pune" } },
  { title: "Push Notifications", copy: "Replies, deals, and updates as they happen.", emoji: "🔔", accent: "from-violet-200 to-purple-400", screenshot: { src: pushShot, alt: "Tijarah business screen with a push notification about a new appointment request" } },
  { title: "Share Your Catalogue", copy: "Send your full product list to anyone in a tap.", emoji: "📤", accent: "from-emerald-200 to-green-400", screenshot: { src: catalogueShot, alt: "Tijarah Manage Business screen on the Catalogue tab listing a business's products and services" } },
  { title: "Saved Locations", copy: "Home, work, and custom spots for faster search.", emoji: "📍", accent: "from-indigo-200 to-blue-400", screenshot: { src: locationsShot, alt: "Tijarah Saved Addresses screen with Home, Work, and Other locations in Pune" } },
  { title: "Smart Search", copy: "Typo-tolerant, did-you-mean search that just works.", emoji: "🔍", accent: "from-teal-200 to-emerald-400", screenshot: { src: searchShot, alt: "Tijarah search results for content creation, grouped into businesses, products and services, and categories" } },
];

function FeatureScreen({ f, active }: { f: Feature; active: boolean }) {
  return (
    <div
      className={`absolute inset-0 flex flex-col bg-[#F4F6FA] transition-opacity duration-500 ${
        active ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden={!active}
    >
      {f.screenshot ? (
        <Image
          src={f.screenshot.src}
          alt={f.screenshot.alt}
          fill
          sizes="(max-width: 1024px) 60vw, 20rem"
          className="object-cover object-top"
        />
      ) : (
        <>
          <div className={`flex h-[38%] flex-col items-center justify-end bg-gradient-to-br ${f.accent} pb-[6cqw]`}>
            <span className="text-[14cqw] drop-shadow-sm">{f.emoji}</span>
            <p className="mt-[2cqw] rounded-full bg-white/80 px-[4cqw] py-[1.6cqw] text-[3.4cqw] font-semibold backdrop-blur">
              {f.title}
            </p>
          </div>
          <div className="flex-1 space-y-[3cqw] p-[6cqw]">
            <div className="rounded-[5cqw] bg-white p-[4.6cqw] shadow-[0_2cqw_6cqw_rgba(15,22,43,0.06)]">
              <div className="h-[2.4cqw] w-[55%] rounded-full bg-ink/15" />
              <div className="mt-[2.4cqw] h-[2.4cqw] w-[80%] rounded-full bg-ink/8" />
              <div className="mt-[2.4cqw] h-[2.4cqw] w-[68%] rounded-full bg-ink/8" />
            </div>
            <div className="flex gap-[3cqw]">
              <div className="flex-1 rounded-[5cqw] bg-white p-[4.6cqw] shadow-[0_2cqw_6cqw_rgba(15,22,43,0.06)]">
                <div className="h-[7cqw] w-[7cqw] rounded-full bg-ink/10" />
                <div className="mt-[2.4cqw] h-[2.4cqw] w-[85%] rounded-full bg-ink/10" />
              </div>
              <div className="flex-1 rounded-[5cqw] bg-white p-[4.6cqw] shadow-[0_2cqw_6cqw_rgba(15,22,43,0.06)]">
                <div className="h-[7cqw] w-[7cqw] rounded-full bg-ink/10" />
                <div className="mt-[2.4cqw] h-[2.4cqw] w-[70%] rounded-full bg-ink/10" />
              </div>
            </div>
            <div className="rounded-[5cqw] bg-white p-[4.6cqw] shadow-[0_2cqw_6cqw_rgba(15,22,43,0.06)]">
              <div className="h-[2.4cqw] w-[40%] rounded-full bg-ink/15" />
              <div className="mt-[3cqw] flex h-[10cqw] items-end gap-[1.8cqw]">
                {[40, 70, 55, 90, 62, 80, 48].map((v, i) => (
                  <span key={i} className="flex-1 rounded-[1cqw] bg-ink/10" style={{ height: `${v}%` }} />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

const RADIUS = 15;
const CIRC = 2 * Math.PI * RADIUS;

export default function ExtraFeatures() {
  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), {
      threshold: 0.25,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || hovering) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % features.length), DURATION);
    return () => clearTimeout(t);
  }, [active, inView, hovering]);

  // Keep the active tab visible in the list. Scrolls only the list container —
  // scrollIntoView would scroll the page itself on mount.
  useEffect(() => {
    if (!inView || hovering) return;
    const list = listRef.current;
    const el = list?.children[active] as HTMLElement | undefined;
    if (!list || !el) return;
    const top = el.offsetTop - list.offsetTop;
    if (top < list.scrollTop) {
      list.scrollTo({ top, behavior: "smooth" });
    } else if (top + el.offsetHeight > list.scrollTop + list.clientHeight) {
      list.scrollTo({
        top: top + el.offsetHeight - list.clientHeight,
        behavior: "smooth",
      });
    }
  }, [active, inView, hovering]);

  const running = inView && !hovering;

  return (
    <section ref={sectionRef} className="section-pad">
      <div className="mx-auto flex max-w-[90rem] flex-col gap-[clamp(2.5rem,3vw,5rem)] px-[clamp(1rem,1.429vw+0.714rem,2rem)]">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <h2 className="section-h2">And that&apos;s not all</h2>
          <p className="text-[1.125rem] text-ink-60">
            Tijarah also has the following features:
          </p>
        </div>

        <div
          className="grid items-center gap-10 lg:grid-cols-2"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          {/* Phone preview */}
          <div className="flex justify-center">
            <div className="w-[68%] max-w-[20rem] [container-type:inline-size]">
              <div className="relative aspect-[392/852] w-full rounded-[14cqw] bg-[#0F162B] p-[2.4cqw] shadow-[0_40px_80px_-20px_rgba(15,22,43,0.4)]">
                <div className="relative h-full w-full overflow-hidden rounded-[11.8cqw] bg-[#F4F6FA]">
                  {features.map((f, i) => (
                    <FeatureScreen key={f.title} f={f} active={i === active} />
                  ))}
                  <div className="absolute left-1/2 top-[1.6cqw] h-[6.4cqw] w-[24cqw] -translate-x-1/2 rounded-full bg-[#0F162B]" />
                </div>
              </div>
            </div>
          </div>

          {/* Tab list */}
          <div
            ref={listRef}
            className="relative flex max-h-[38rem] flex-col gap-2 overflow-y-auto pr-1"
          >
            {features.map((f, i) => {
              const isActive = i === active;
              return (
                <button
                  key={f.title}
                  type="button"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={`flex items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left transition-colors duration-300 ${
                    isActive ? "bg-white shadow-[0_8px_24px_-12px_rgba(15,22,43,0.18)]" : "hover:bg-white/50"
                  }`}
                >
                  <span>
                    <span className="block text-[1.05rem] font-semibold">{f.title}</span>
                    <span
                      className={`block text-[0.9rem] text-ink-60 transition-all duration-300 ${
                        isActive ? "mt-0.5 max-h-12 opacity-100" : "max-h-0 overflow-hidden opacity-0"
                      }`}
                    >
                      {f.copy}
                    </span>
                  </span>
                  <span className="relative h-9 w-9 flex-none">
                    <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
                      <circle cx="18" cy="18" r={RADIUS} fill="none" stroke="rgba(15,22,43,0.12)" strokeWidth="2.5" />
                      {isActive && (
                        <circle
                          key={`${active}-${running}`}
                          cx="18"
                          cy="18"
                          r={RADIUS}
                          fill="none"
                          stroke="#0F162B"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeDasharray={CIRC}
                          strokeDashoffset={CIRC}
                          style={
                            running
                              ? { animation: `ring-fill ${DURATION}ms linear forwards` }
                              : { strokeDashoffset: CIRC * 0.75 }
                          }
                        />
                      )}
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-[0.6rem] text-ink-60">
                      {isActive ? "❚❚" : "▶"}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
