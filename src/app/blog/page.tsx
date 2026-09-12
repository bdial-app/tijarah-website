import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import QrCard from "@/components/QrCard";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import BlogHero from "@/components/blog/BlogHero";
import PostCard, { FeaturedPostCard } from "@/components/blog/PostCard";
import { AUTHOR, postPath, sortedPosts } from "@/lib/blog";
import { SITE_NAME, absoluteUrl } from "@/lib/site";

const title = "Blog | Tijarah";
const description =
  "Guides and stories from Tijarah, the community marketplace app for the Bohra community in India: finding verified service providers near you, growing a zero-commission home business, and more.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "Tijarah blog",
    "Bohri community app",
    "verified service providers India",
    "home business app India",
    "women-led businesses",
    "zero commission marketplace",
  ],
  alternates: { canonical: absoluteUrl("/blog") },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/blog"),
    siteName: SITE_NAME,
    type: "website",
    locale: "en_IN",
    images: [{ url: sortedPosts[0].cover.src, width: 1600, height: 900, alt: sortedPosts[0].cover.alt }],
  },
  twitter: { card: "summary_large_image", title, description },

};

export default function BlogPage() {
  const [featured, ...rest] = sortedPosts;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Tijarah Blog",
    url: absoluteUrl("/blog"),
    description,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: absoluteUrl("/icon-512.png") },
    },
    blogPost: sortedPosts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      url: absoluteUrl(postPath(p.slug)),
      image: absoluteUrl(p.cover.src).replace(/\/$/, ""),
      datePublished: p.published,
      author: { "@type": "Organization", name: AUTHOR },
    })),
  };

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
        <BlogHero />

        <section className="section-pad !pt-[clamp(3rem,4vw,5rem)]">
          <Reveal className="mx-auto flex max-w-[80rem] flex-col gap-[clamp(2rem,3vw,3.5rem)] px-[clamp(1rem,1.429vw+0.714rem,2rem)]">
            <div data-reveal>
              <FeaturedPostCard post={featured} />
            </div>

            <div className="flex items-end justify-between gap-4">
              <h2 data-reveal className="section-h3">
                All articles
              </h2>
              <p data-reveal className="text-[0.9rem] text-ink-40">
                {sortedPosts.length} posts
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {rest.map((post) => (
                <div key={post.slug} data-reveal>
                  <PostCard post={post} />
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <Footer />
        <QrCard />
      </main>
    </SmoothScroll>
  );
}
