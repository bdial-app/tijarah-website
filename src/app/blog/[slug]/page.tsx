import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import QrCard from "@/components/QrCard";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ArticleHeader from "@/components/blog/ArticleHeader";
import ArticleBody from "@/components/blog/ArticleBody";
import BlogCta from "@/components/blog/BlogCta";
import PostCard from "@/components/blog/PostCard";
import { AUTHOR, getPost, postPath, posts, sortedPosts } from "@/lib/blog";
import { SITE_NAME, absoluteUrl } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

// Static export: every post is emitted at build time; unknown slugs 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const url = absoluteUrl(postPath(post.slug));
  const title = `${post.title} | Tijarah`;
  const image = { url: post.cover.src, width: 1600, height: 900, alt: post.cover.alt };

  return {
    title,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: AUTHOR }],
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName: SITE_NAME,
      type: "article",
      locale: "en_IN",
      publishedTime: post.published,
      modifiedTime: post.updated ?? post.published,
      authors: [AUTHOR],
      section: post.category,
      tags: post.keywords,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [image.url],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = absoluteUrl(postPath(post.slug));
  const related = sortedPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const faq = post.blocks.find((b) => b.type === "faq");

  const jsonLd: Array<Record<string, unknown>> = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      keywords: post.keywords.join(", "),
      articleSection: post.category,
      datePublished: post.published,
      dateModified: post.updated ?? post.published,
      inLanguage: "en-IN",
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      image: absoluteUrl(post.cover.src).replace(/\/$/, ""),
      author: { "@type": "Organization", name: AUTHOR, url: absoluteUrl("/") },
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
        logo: { "@type": "ImageObject", url: absoluteUrl("/icon-512.png") },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
  ];

  if (faq && faq.type === "faq") {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.items.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <article>
          <ArticleHeader post={post} />

          {/* The body is left out of the scroll reveal on purpose: long
              articles should be fully readable (and crawlable) without any
              animation dependency. */}
          <div className="mx-auto max-w-[44rem] px-[clamp(1rem,1.429vw+0.714rem,2rem)] pb-[clamp(3rem,5vw,5rem)] pt-[clamp(3rem,5vw,5rem)]">
            <ArticleBody blocks={post.blocks} />
          </div>
        </article>

        <section className="pb-[clamp(5rem,7.143vw+3.571rem,10rem)]">
          <Reveal className="mx-auto flex max-w-[80rem] flex-col gap-[clamp(3rem,5vw,6rem)] px-[clamp(1rem,1.429vw+0.714rem,2rem)]">
            <div data-reveal className="mx-auto w-full max-w-[64rem]">
              <BlogCta />
            </div>

            <div className="flex flex-col gap-8">
              <h2 data-reveal className="section-h3">
                More from the blog
              </h2>
              <div className="grid gap-5 md:grid-cols-3">
                {related.map((p) => (
                  <div key={p.slug} data-reveal>
                    <PostCard post={p} />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        <Footer />
        <QrCard />
      </main>
    </SmoothScroll>
  );
}
