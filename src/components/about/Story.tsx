import Reveal from "../Reveal";

// The origin story, told against a mock of the group chat it grew out of.
const thread: Array<{ from: string; text: string; mine?: boolean }> = [
  { from: "Fatema", text: "Anyone know a good tailor near Bhendi Bazaar? 🙏" },
  { from: "Zoya", text: "My cousin used someone in Null Bazaar, let me ask" },
  { from: "Murtaza", text: "+1, also looking for tiffin service in Pune" },
  { from: "Fatema", text: "This is the third time this month we've asked 😅", mine: true },
];

export default function Story() {
  return (
    <section className="section-pad">
      <Reveal className="mx-auto grid max-w-[80rem] items-center gap-[clamp(2.5rem,4vw,5rem)] px-[clamp(1rem,1.429vw+0.714rem,2rem)] lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <h2 data-reveal className="section-h2">
            It began in a group chat
          </h2>
          <p data-reveal className="text-[1.125rem] text-ink-60">
            Every Bohri neighbourhood has one — the thread where somebody asks
            for a mehndi artist two days before a wedding, and forty people
            scroll past without answering. The talent was always there. The
            directory wasn&apos;t.
          </p>
          <p data-reveal className="text-[1.125rem] text-ink-60">
            In 2024 we started keeping a spreadsheet of the providers our
            families actually vouched for. It reached four hundred names before
            we admitted it needed to be an app — one where every profile is
            verified, every review is written by someone who really booked, and
            the person on the other end is your neighbour, not a call centre.
          </p>
          <p data-reveal className="text-[1.125rem] text-ink-60">
            Tijarah is that spreadsheet, grown up. Providers keep{" "}
            <span className="font-semibold text-ink">100% of what they earn</span>{" "}
            — we take no commission on a single ₹ — and the community keeps the
            trust it already had.
          </p>
        </div>

        <div data-reveal className="relative">
          <div className="rounded-3xl bg-white p-5 shadow-[0_32px_64px_-24px_rgba(15,22,43,0.22)] ring-1 ring-black/5">
            <div className="flex items-center gap-3 border-b border-ink/10 pb-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-amber-200 to-orange-400 text-[1.1rem]">
                👥
              </div>
              <div>
                <p className="text-[0.95rem] font-semibold leading-tight">
                  Mohalla — Mumbai
                </p>
                <p className="text-[0.78rem] text-ink-40">128 members</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-4">
              {thread.map((m) => (
                <div
                  key={m.text}
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                    m.mine
                      ? "self-end bg-brand text-white"
                      : "self-start bg-ink/[0.05]"
                  }`}
                >
                  {!m.mine && (
                    <p className="text-[0.72rem] font-semibold text-brand">
                      {m.from}
                    </p>
                  )}
                  <p
                    className={`text-[0.92rem] leading-snug ${
                      m.mine ? "" : "mt-0.5"
                    }`}
                  >
                    {m.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* The answer the thread never had */}
          <div className="card-float absolute -bottom-6 -right-2 w-[62%] rounded-2xl bg-brand-deep p-4 shadow-[0_24px_48px_-16px_rgba(15,22,43,0.5)] sm:-right-6">
            <p className="text-[0.72rem] font-semibold uppercase tracking-wider text-amber">
              Tijarah
            </p>
            <p className="mt-1 text-[0.92rem] font-semibold leading-snug text-white">
              12 verified tailors near you
            </p>
            <p className="mt-0.5 text-[0.78rem] text-white/60">
              Sorted by rating · 4 open now
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
