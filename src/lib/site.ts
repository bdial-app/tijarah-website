// Canonical origin for absolute URLs (Open Graph, JSON-LD, sitemap).
// TODO: replace with the real production domain before launch.
export const SITE_URL = "https://tijarahconnect.com";
export const SITE_NAME = "Tijarah";

// Contact points quoted in the legal pages.
// TODO: confirm these mailboxes exist before launch.
export const SUPPORT_EMAIL = "support@tijarahconnect.com";
export const PRIVACY_EMAIL = "privacy@tijarahconnect.com";

export const absoluteUrl = (path: string) =>
  new URL(path.endsWith("/") ? path : `${path}/`, SITE_URL).toString();
