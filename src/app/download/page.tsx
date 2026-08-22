import type { Metadata } from "next";
import { APP_STORE_URL, PLAY_STORE_URL } from "@/lib/store-links";
import DownloadRedirect from "./DownloadRedirect";

export const metadata: Metadata = {
  title: "Download Tijarah",
  // A redirect stub; search engines should index the stores or /login instead.
  robots: { index: false, follow: true },
};

// Lands here from the QR code. The client component forwards to the right
// store straight away; the links below only show if JavaScript never runs.
export default function DownloadPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-brand-deep px-6 text-center text-white">
      <DownloadRedirect />
      <h1 className="text-xl font-semibold">Get the Tijarah app</h1>
      <p className="text-white/70">
        <a className="underline" href={APP_STORE_URL}>
          App Store
        </a>
        <span className="mx-2 text-white/30">·</span>
        <a className="underline" href={PLAY_STORE_URL}>
          Google Play
        </a>
      </p>
    </main>
  );
}
