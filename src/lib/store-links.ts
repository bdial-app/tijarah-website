// Single source of truth for where "download" sends people — everything else
// on the site resolves from these two.
export const APP_STORE_URL = "https://apps.apple.com/in/app/tijarah/id6772507338";
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.pronttera.tijarah";

// Desktop / unknown devices can't install anything, so they get the download
// page, which shows both stores side by side.
export const DOWNLOAD_URL = "/login";

export type Platform = "ios" | "android" | "other";

export function detectPlatform(): Platform {
  if (typeof navigator === "undefined") return "other";

  const ua = navigator.userAgent || "";

  if (/android/i.test(ua)) return "android";
  if (/iPad|iPhone|iPod/.test(ua)) return "ios";
  // iPadOS 13+ requests desktop sites by default, so its UA reads as a Mac.
  // A Mac has no touch screen; an iPad reports several touch points.
  if (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1) return "ios";

  return "other";
}

export function storeUrlFor(platform: Platform) {
  if (platform === "ios") return APP_STORE_URL;
  if (platform === "android") return PLAY_STORE_URL;
  return DOWNLOAD_URL;
}

export const isExternalUrl = (url: string) => /^https?:/i.test(url);
