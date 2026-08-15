"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { useStoreLink } from "@/lib/usePlatform";
import type { Platform } from "@/lib/store-links";

// One download CTA that points wherever the visitor's device can actually
// install from: App Store on iOS, Google Play on Android, the /login download
// page on everything else. Pass children as a function to vary the label.
export default function DownloadLink({
  className = "",
  ariaLabel,
  children,
}: {
  className?: string;
  ariaLabel?: string;
  children: ReactNode | ((platform: Platform) => ReactNode);
}) {
  const { platform, url, isExternal } = useStoreLink();
  const content = typeof children === "function" ? children(platform) : children;

  // Internal fallback keeps client-side routing; a real store URL leaves the site.
  if (!isExternal) {
    return (
      <Link href={url} className={className} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={url}
      className={className}
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
    >
      {content}
    </a>
  );
}
