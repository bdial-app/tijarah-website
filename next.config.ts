import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `next build` writes plain HTML/CSS/JS to ./out, deployable
  // on any static host. Anything that needs a request at runtime (the QR
  // route, the /download user-agent redirect) runs in the browser instead.
  output: "export",
  // Emit /about/index.html rather than /about.html so every static host
  // serves clean URLs without rewrite rules.
  trailingSlash: true,
  // No image optimiser in a static export; the only <Image> is the logo.
  images: { unoptimized: true },
};

export default nextConfig;
