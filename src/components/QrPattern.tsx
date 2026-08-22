"use client";

import { useEffect, useState } from "react";
import QRCode from "qrcode";

// The real, scannable QR. It's generated in the browser from the origin the
// page is actually served from — the site is a static export, so there's no
// server to read the host from, and a hardcoded domain would break on
// previews. It resolves to /download, which forwards to the App Store or
// Google Play based on the scanning device.
//
// Sizing note: a QR only scans reliably when each module is a few pixels wide,
// so give this a box of at least 6rem and keep the white padding around it —
// that padding is the code's quiet zone.
export default function QrPattern({ className = "" }: { className?: string }) {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    QRCode.toString(`${window.location.origin}/download/`, {
      type: "svg",
      errorCorrectionLevel: "M",
      // Quiet zone comes from the white padding of the card around it, so the
      // code itself only needs a hairline margin — every module stays as large
      // as possible, which is what makes it scan at this size.
      margin: 1,
      color: { dark: "#0F162Bff", light: "#00000000" },
    }).then((svg) => {
      if (!cancelled) {
        setSrc(`data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  // Nothing to show until the browser has built the code; the white card
  // behind it simply reads as an empty tile for that first frame.
  if (!src) return null;

  return (
    // A data-URL SVG has no intrinsic size for next/image, and vector output
    // needs no optimisation.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt="QR code to download the Tijarah app"
      className={`h-full w-full ${className}`}
    />
  );
}
