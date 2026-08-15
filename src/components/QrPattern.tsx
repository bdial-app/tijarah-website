// The real, scannable QR. It's served from /api/qr so the encoded URL always
// matches the host the site is running on, and it resolves to /download, which
// forwards to the App Store or Google Play based on the scanning device.
//
// Sizing note: a QR only scans reliably when each module is a few pixels wide,
// so give this a box of at least 6rem and keep the white padding around it —
// that padding is the code's quiet zone.
export default function QrPattern({ className = "" }: { className?: string }) {
  return (
    // An SVG from a route handler has no intrinsic size for next/image, and
    // vector output needs no optimisation.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/api/qr"
      alt="QR code to download the Tijarah app"
      className={`h-full w-full ${className}`}
    />
  );
}
