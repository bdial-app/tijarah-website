import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tijarah — Your Community, Connected",
  description:
    "Discover, chat with, and support trusted service providers from your community — women-led businesses, verified profiles, real reviews, and deals, all in one app.",
};

// Tints the mobile browser chrome to match the site's navy.
export const viewport: Viewport = {
  themeColor: "#0F162B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
