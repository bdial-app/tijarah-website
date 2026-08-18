import type { MetadataRoute } from "next";

// Completes the favicon set: the wordmark tiles are used for home-screen
// installs, where there's room to read them. Tabs use favicon.ico instead.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tijarah — Your Community, Connected",
    short_name: "Tijarah",
    description:
      "Discover, chat with, and support trusted service providers from your community.",
    start_url: "/",
    display: "standalone",
    background_color: "#0F162B",
    theme_color: "#0F162B",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
