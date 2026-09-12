"use client";

import { useDeferredValue, useId, useMemo, useState } from "react";
import { renderInline } from "@/components/blog/ArticleBody";
import type { FaqGroup } from "@/lib/faq";

// Client-side filter over the server-rendered questions. Everything is in
// the HTML up front (crawlable, works without JS); typing narrows the list
// and pops matching answers open so the reader does not have to click.
export default function FaqBrowser({ groups }: { groups: FaqGroup[] }) {
  const [query, setQuery] = useState("");
  const deferred = useDeferredValue(query);
  const inputId = useId();

  const needle = deferred.trim().toLowerCase();
  const visible = useMemo(() => {
    if (!needle) return groups;
    return groups
      .map((g) => ({
        ...g,
        items: g.items.filter(
          (it) =>
            it.q.toLowerCase().includes(needle) ||
            it.a.toLowerCase().includes(needle)
        ),
      }))
      .filter((g) => g.items.length > 0);
  }, [groups, needle]);

  const shown = visible.reduce((n, g) => n + g.items.length, 0);

  return (
    <div className="mx-auto w-full max-w-[80rem] px-[clamp(1rem,1.429vw+0.714rem,2rem)] pb-[clamp(3rem,5vw,5rem)] pt-[clamp(3rem,5vw,5rem)]">
      {/* Search */}
      <div className="mx-auto w-full max-w-[46rem]">
        <label htmlFor={inputId} className="sr-only">
          Search the FAQ
        </label>
        <div className="flex items-center gap-3 rounded-full bg-white px-5 py-3.5 shadow-[0_24px_48px_-32px_rgba(15,22,43,0.28)] ring-1 ring-ink/5 focus-within:ring-2 focus-within:ring-amber">
          <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-ink-40" fill="none" aria-hidden>
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
            <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <input
            id={inputId}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search, e.g. Aadhaar, commission, new phone"
            autoComplete="off"
            className="w-full bg-transparent text-[1.02rem] text-ink outline-none placeholder:text-ink-40"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="rounded-full px-2.5 py-1 text-[0.8rem] font-semibold text-ink-60 transition-colors hover:bg-ink/5 hover:text-ink"
            >
              Clear
            </button>
          )}
        </div>
        <p className="mt-3 h-5 text-center text-[0.85rem] text-ink-40" aria-live="polite">
          {needle ? `${shown} ${shown === 1 ? "answer" : "answers"} match` : ""}
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
        {/* Topic nav */}
        <aside className="lg:sticky lg:top-28 lg:w-[17rem] lg:shrink-0">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ink-40">
            Topics
          </p>
          <ol className="mt-4 flex flex-wrap gap-2 lg:flex-col lg:gap-2.5">
            {groups.map((g) => {
              const n = visible.find((v) => v.id === g.id)?.items.length ?? 0;
              return (
                <li key={g.id}>
                  <a
                    href={`#${g.id}`}
                    className={`inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[0.9rem] font-medium ring-1 ring-ink/5 transition-colors hover:text-brand lg:bg-transparent lg:px-0 lg:py-0 lg:ring-0 ${
                      n === 0 ? "text-ink-40" : "text-ink-60"
                    }`}
                  >
                    {g.title}
                    <span className="rounded-full bg-ink/5 px-1.5 text-[0.72rem] font-semibold text-ink-40">
                      {n}
                    </span>
                  </a>
                </li>
              );
            })}
          </ol>
        </aside>

        {/* Questions */}
        <div className="min-w-0 flex-1 lg:max-w-[46rem]">
          {visible.length === 0 ? (
            <div className="rounded-3xl bg-white p-8 text-center shadow-[0_24px_48px_-32px_rgba(15,22,43,0.28)]">
              <p className="text-[1.1rem] font-semibold text-ink">
                Nothing matches &ldquo;{deferred.trim()}&rdquo;
              </p>
              <p className="mt-2 text-ink-60">
                Try a different word, or ask us directly below.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-14">
              {visible.map((g) => (
                <section key={g.id} id={g.id} className="scroll-mt-28">
                  <h2 className="section-h3">{g.title}</h2>
                  <p className="mt-2 text-ink-60">{g.blurb}</p>
                  <div className="faq-list mt-6">
                    {g.items.map((it) => (
                      <details key={it.q} open={needle ? true : undefined}>
                        <summary>{it.q}</summary>
                        <p>{renderInline(it.a)}</p>
                      </details>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
