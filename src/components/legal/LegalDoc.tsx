import Link from "next/link";
import { Blocks } from "@/components/blog/ArticleBody";
import { legalDocs, legalPath, type LegalDoc as LegalDocType } from "@/lib/legal";
import { SUPPORT_EMAIL } from "@/lib/site";

// Full document: plain-language summary, sticky contents on wide screens,
// then the numbered sections. Deliberately outside any scroll reveal so the
// whole text is readable and crawlable with no animation dependency.
export default function LegalDoc({ doc }: { doc: LegalDocType }) {
  const other = legalDocs.find((d) => d.slug !== doc.slug);

  return (
    <div className="mx-auto w-full max-w-[80rem] px-[clamp(1rem,1.429vw+0.714rem,2rem)] pb-[clamp(5rem,7.143vw+3.571rem,10rem)] pt-[clamp(3rem,5vw,5rem)]">
      <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
        {/* Contents */}
        <aside className="lg:sticky lg:top-28 lg:w-[17rem] lg:shrink-0">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ink-40">
            Contents
          </p>
          <ol className="mt-4 flex flex-col gap-2.5">
            {doc.sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-[0.92rem] leading-snug text-ink-60 transition-colors hover:text-brand"
                >
                  {s.heading}
                </a>
              </li>
            ))}
          </ol>
          {other && (
            <p className="mt-8 border-t border-ink/10 pt-6 text-[0.9rem] text-ink-60">
              See also{" "}
              <Link
                href={legalPath(other.slug)}
                className="font-semibold text-brand underline decoration-amber decoration-2 underline-offset-4"
              >
                {other.title}
              </Link>
            </p>
          )}
        </aside>

        {/* Document */}
        <div className="min-w-0 flex-1 lg:max-w-[46rem]">
          <section
            aria-label="Summary"
            className="rounded-3xl bg-amber-100 p-6 md:p-8"
          >
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-amber-700">
              In short
            </p>
            <ul className="mt-4 flex flex-col gap-3 text-[1.02rem] leading-relaxed text-ink">
              {doc.summary.map((line) => (
                <li key={line} className="flex gap-3">
                  <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[0.85rem] text-ink-60">
              This summary is for convenience. The full text below is what applies.
            </p>
          </section>

          <div className="article-prose mt-12">
            {doc.sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-28">
                <h2>{s.heading}</h2>
                <Blocks blocks={s.blocks} />
              </section>
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-brand-deep p-7 text-white md:p-9">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-amber">
              Questions?
            </p>
            <p className="mt-3 text-[1.05rem] text-white/75">
              If anything here is unclear, write to{" "}
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="font-semibold text-white underline decoration-amber decoration-2 underline-offset-4"
              >
                {SUPPORT_EMAIL}
              </a>{" "}
              and a person will reply.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
