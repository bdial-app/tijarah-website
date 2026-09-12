// Canonical origin for absolute URLs (Open Graph, JSON-LD, sitemap).
// TODO: replace with the real production domain before launch.
export const SITE_URL = "https://tijarahconnect.com";
export const SITE_NAME = "Tijarah";

export const absoluteUrl = (path: string) =>
  new URL(path.endsWith("/") ? path : `${path}/`, SITE_URL).toString();
