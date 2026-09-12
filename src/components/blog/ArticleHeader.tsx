"use client";

import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { AUTHOR, formatDate, readingMinutes, type Post } from "@/lib/blog";
import PostCover from "./PostCover";

export default function ArticleHeader({ post }: { post: Post }) {
  useGSAP(() => {
    gsap
      .timeline({ defaults: { ease: "power3.out" } })
      .from(".js-nav", { y: -28, autoAlpha: 0, duration: 0.9 }, 0.1)
      .from(
        "[data-hero-reveal]",
        { y: 44, autoAlpha: 0, duration: 1.1, stagger: 0.1 },
        0.2
      )
      .from("[data-hero-stage]", { y: 60, autoAlpha: 0, duration: 1.2 }, 0.5);
  });

  return (
    <header className="flex px-2 pt-2">
      <div className="relative flex w-full flex-col overflow-hidden rounded-3xl bg-[#ECF1F9] px-4 pb-[clamp(2rem,4vw,3rem)] pt-32 md:pt-40">
        <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center gap-6 text-center">
          <nav
            data-hero-reveal
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-ink-60"
          >
            <Link href="/blog" className="transition-opacity hover:opacity-60">
              Blog
            </Link>
            <span aria-hidden>/</span>
            <span className="text-brand">{post.category}</span>
          </nav>
          <h1
            data-hero-reveal
            className="text-[clamp(2.25rem,2.143vw+1.75rem,3.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] [text-wrap:balance]"
          >
            {post.title}
          </h1>
          <p data-hero-reveal className="max-w-2xl text-[1.125rem] text-ink-60">
            {post.description}
          </p>
          <p
            data-hero-reveal
            className="flex flex-wrap items-center justify-center gap-x-2 text-[0.9rem] text-ink-40"
          >
            <span className="text-ink">{AUTHOR}</span>
            <span aria-hidden>·</span>
            <time dateTime={post.published}>{formatDate(post.published)}</time>
            <span aria-hidden>·</span>
            <span>{readingMinutes(post)} min read</span>
          </p>
        </div>

        <figure data-hero-stage className="relative z-0 mx-auto mt-[clamp(2rem,4vw,3.5rem)] w-full max-w-[64rem]">
          <PostCover
            post={post}
            priority
            className="aspect-[21/9] rounded-3xl shadow-[0_32px_64px_-32px_rgba(15,22,43,0.35)]"
          />
          <figcaption className="mt-3 text-center text-[0.78rem] text-ink-40">
            Photo by{" "}
            <a
              href={post.cover.credit.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-opacity hover:opacity-70"
            >
              {post.cover.credit.name}
            </a>{" "}
            on{" "}
            <a
              href="https://unsplash.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-opacity hover:opacity-70"
            >
              Unsplash
            </a>
          </figcaption>
        </figure>
      </div>
    </header>
  );
}
