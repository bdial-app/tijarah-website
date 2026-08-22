"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { detectPlatform, isExternalUrl, storeUrlFor } from "@/lib/store-links";

// Where the QR code points. A QR can only carry one URL, so the per-device
// branch has to happen here, in the scanning phone's browser — the site is a
// static export, so there's no server to read the user agent.
export default function DownloadRedirect() {
  const router = useRouter();

  useEffect(() => {
    const target = storeUrlFor(detectPlatform());
    if (isExternalUrl(target)) {
      window.location.replace(target);
    } else {
      router.replace(target);
    }
  }, [router]);

  return null;
}
