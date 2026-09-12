import { Fragment, type ReactNode } from "react";
import Link from "next/link";
import type { Block } from "@/lib/blog";

// Inline markup kept deliberately tiny: **bold** and [text](href). Anything
// richer belongs in a new block type rather than a bigger parser.
const INLINE = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;

export function renderInline(text: string): ReactNode {
  return text.split(INLINE).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-ink">
          {part.slice(2, -2)}
        </strong>
      );
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const [, label, href] = link;
      return (
        <Link
          key={i}
          href={href}
          className="font-semibold text-brand underline decoration-amber decoration-2 underline-offset-4 transition-colors hover:text-brand-bright"
        >
          {label}
        </Link>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

// Renders a run of blocks without the prose wrapper so other long-form
// layouts (legal documents) can nest them inside their own sections.
export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.type) {
          case "p":
            return <p key={i}>{renderInline(b.text)}</p>;
          case "h2":
            return (
              <h2 key={i} id={slugify(b.text)}>
                {b.text}
              </h2>
            );
          case "h3":
            return <h3 key={i}>{b.text}</h3>;
          case "ul":
            return (
              <ul key={i}>
                {b.items.map((it, j) => (
                  <li key={j}>{renderInline(it)}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i}>
                {b.items.map((it, j) => (
                  <li key={j}>{renderInline(it)}</li>
                ))}
              </ol>
            );
          case "quote":
            return (
              <blockquote key={i}>
                <p>{b.text}</p>
                {b.by && <cite>{b.by}</cite>}
              </blockquote>
            );
          case "tip":
            return (
              <aside key={i} className="article-tip">
                <p className="article-tip-title">{b.title}</p>
                <p>{renderInline(b.text)}</p>
              </aside>
            );
          case "faq":
            return (
              <section key={i} className="article-faq" aria-label="Frequently asked questions">
                {b.items.map((it) => (
                  <details key={it.q}>
                    <summary>{it.q}</summary>
                    <p>{renderInline(it.a)}</p>
                  </details>
                ))}
              </section>
            );
        }
      })}
    </>
  );
}

export default function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="article-prose">
      <Blocks blocks={blocks} />
    </div>
  );
}
