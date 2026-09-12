import Image from "next/image";
import type { Post } from "@/lib/blog";

// Cover photo for cards and the article header. Files live in /public/blog at
// 1600x900. The static export runs with images.unoptimized, so this serves
// the file as-is; explicit dimensions keep layout stable while it loads.
export default function PostCover({
  post,
  className = "",
  priority = false,
}: {
  post: Post;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`relative overflow-hidden bg-[#ECF1F9] ${className}`}>
      <Image
        src={post.cover.src}
        alt={post.cover.alt}
        width={1600}
        height={900}
        priority={priority}
        sizes="(min-width: 1024px) 60vw, 100vw"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
    </div>
  );
}
