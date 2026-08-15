import { NextResponse } from "next/server";
import { APP_STORE_URL, DOWNLOAD_URL, PLAY_STORE_URL } from "@/lib/store-links";

// Where the QR code points. A QR can only carry one URL, so the per-device
// branch has to happen here, off the scanning phone's user agent.
export async function GET(request: Request) {
  const ua = request.headers.get("user-agent") ?? "";

  const target = /android/i.test(ua)
    ? PLAY_STORE_URL
    : /iPad|iPhone|iPod/.test(ua)
      ? APP_STORE_URL
      : DOWNLOAD_URL;

  // 302 + no-store: the correct destination differs per device, so nothing in
  // front of this (CDN, browser) may reuse one visitor's answer for another.
  return NextResponse.redirect(new URL(target, request.url), {
    status: 302,
    headers: { "Cache-Control": "no-store" },
  });
}
