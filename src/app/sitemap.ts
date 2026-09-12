import type { MetadataRoute } from "next";
import { postPath, sortedPosts } from "@/lib/blog";
import { absoluteUrl } from "@/lib/site";

// Static export: emitted once at build time as /sitemap.xml.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const latestPost = sortedPosts[0]?.published;

  return [
    { url: absoluteUrl("/"), changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("/about"), changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/login"), changeFrequency: "yearly", priority: 0.5 },
    {
      url: absoluteUrl("/blog"),
      lastModified: latestPost ? new Date(latestPost) : undefined,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...sortedPosts.map((p) => ({
      url: absoluteUrl(postPath(p.slug)),
      lastModified: new Date(p.updated ?? p.published),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
