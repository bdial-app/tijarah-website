// Canonical origin for absolute URLs (Open Graph, JSON-LD, sitemap).
export const SITE_URL = "https://tijarahapp.in";
// Bare hostname for prose that names the website.
export const SITE_HOST = new URL(SITE_URL).host;
export const SITE_NAME = "Tijarah";

// Contact points quoted in the legal, FAQ and contact pages. Privacy and
// grievance requests go to the same mailbox until a dedicated one exists.
export const SUPPORT_EMAIL = "support@tijarahapp.in";
export const PRIVACY_EMAIL = SUPPORT_EMAIL;

export const absoluteUrl = (path: string) =>
  new URL(path.endsWith("/") ? path : `${path}/`, SITE_URL).toString();
