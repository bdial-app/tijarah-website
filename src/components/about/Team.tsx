import Reveal from "../Reveal";

// Placeholder people — swap names, roles and photos for the real team before
// launch. Avatars are gradient initials so no image assets are needed yet.
const team = [
  {
    name: "Fatema Rangwala",
    role: "Co-founder, Product",
    city: "Mumbai",
    gradient: "from-amber-200 via-orange-300 to-amber-500",
  },
  {
    name: "Murtaza Shakir",
    role: "Co-founder, Engineering",
    city: "Pune",
    gradient: "from-sky-200 via-blue-300 to-indigo-600",
  },
  {
    name: "Zoya Kanchwala",
    role: "Community & Trust",
    city: "Surat",
    gradient: "from-rose-200 via-rose-300 to-rose-500",
  },
  {
    name: "Huzefa Lokhandwala",
    role: "Provider Success",
    city: "Indore",
    gradient: "from-teal-200 via-emerald-300 to-emerald-600",
  },
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((p) => p[0])
    .join("");

export default function Team() {
  return (
    <section className="section-pad pt-0">
      <Reveal className="mx-auto flex max-w-[90rem] flex-col gap-[clamp(2.5rem,3vw,4rem)] px-[clamp(1rem,1.429vw+0.714rem,2rem)]">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <h2 data-reveal className="section-h2">
            The people behind it
          </h2>
          <p data-reveal className="text-[1.125rem] text-ink-60">
            A small team spread across four cities, most of us raised in the
            neighbourhoods we&apos;re building for.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((p) => (
            <div
              key={p.name}
              data-reveal
              className="flex flex-col gap-4 rounded-3xl bg-white p-6 shadow-[0_24px_48px_-32px_rgba(31,32,37,0.28)]"
            >
              <div
                className={`flex aspect-[4/3] items-center justify-center rounded-2xl bg-gradient-to-br ${p.gradient}`}
              >
                <span className="text-[2rem] font-semibold text-white/90 drop-shadow-sm">
                  {initials(p.name)}
                </span>
              </div>
              <div>
                <p className="text-[1.05rem] font-semibold leading-tight">
                  {p.name}
                </p>
                <p className="mt-1 text-[0.9rem] text-ink-60">{p.role}</p>
                <p className="mt-0.5 text-[0.82rem] text-ink-40">{p.city}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Hiring nudge */}
        <div
          data-reveal
          className="flex flex-col items-center gap-4 rounded-3xl bg-brand-deep px-6 py-12 text-center text-white [background-image:radial-gradient(circle_at_50%_0,rgba(255,255,255,0)_40%,rgba(245,179,30,0.2)_90%,rgba(245,179,30,0.4))]"
        >
          <h3 className="card-h2">We&apos;re hiring</h3>
          <p className="max-w-md text-[1.05rem] text-white/60">
            Engineers, community managers and designers who want to build for
            the people they grew up with.
          </p>
          <a
            href="#"
            className="mt-2 rounded-full bg-white px-5 py-3 text-[0.95rem] font-semibold text-brand-deep transition-transform duration-500 hover:scale-105"
          >
            See open roles
          </a>
        </div>
      </Reveal>
    </section>
  );
}
