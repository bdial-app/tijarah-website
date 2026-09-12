import Link from "next/link";
import { formatDate, postPath, readingMinutes, type Post } from "@/lib/blog";
import PostCover from "./PostCover";

function Meta({ post }: { post: Post }) {
  return (
    <p className="flex flex-wrap items-center gap-x-2 text-[0.82rem] text-ink-40">
      <time dateTime={post.published}>{formatDate(post.published)}</time>
      <span aria-hidden>·</span>
      <span>{readingMinutes(post)} min read</span>
    </p>
  );
}

function Category({ children }: { children: string }) {
  return (
    <span className="inline-flex w-fit rounded-full bg-brand/8 px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-brand">
      {children}
    </span>
  );
}

export function FeaturedPostCard({ post }: { post: Post }) {
  return (
    <Link
      href={postPath(post.slug)}
      className="group grid overflow-hidden rounded-3xl bg-white shadow-[0_32px_64px_-32px_rgba(15,22,43,0.28)] ring-1 ring-black/5 transition-transform duration-500 hover:-translate-y-1 lg:grid-cols-[1.1fr_1fr]"
    >
      <PostCover post={post} priority className="min-h-[16rem] lg:min-h-[24rem]" />
      <div className="flex flex-col justify-center gap-5 p-7 md:p-10">
        <div className="flex items-center gap-3">
          <Category>{post.category}</Category>
          <span className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-amber-600">
            Latest
          </span>
        </div>
        <h2 className="section-h3 transition-colors group-hover:text-brand-bright">
          {post.title}
        </h2>
        <p className="text-[1.05rem] text-ink-60">{post.excerpt}</p>
        <Meta post={post} />
      </div>
    </Link>
  );
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={postPath(post.slug)}
      className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_24px_48px_-32px_rgba(15,22,43,0.28)] ring-1 ring-black/5 transition-transform duration-500 hover:-translate-y-1"
    >
      <PostCover post={post} className="aspect-[16/9]" />
      <div className="flex flex-1 flex-col gap-4 p-6 md:p-7">
        <Category>{post.category}</Category>
        <h3 className="section-h4 !leading-[1.15] transition-colors group-hover:text-brand-bright">
          {post.title}
        </h3>
        <p className="text-[0.98rem] text-ink-60">{post.excerpt}</p>
        <div className="mt-auto pt-2">
          <Meta post={post} />
        </div>
      </div>
    </Link>
  );
}
