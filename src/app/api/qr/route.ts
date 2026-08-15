import QRCode from "qrcode";

// Renders the real, scannable QR as an SVG. Generating it here rather than in
// the browser keeps the encoder out of the client bundle and lets the code pick
// up whatever host the site is actually served from — no hardcoded domain.
export async function GET(request: Request) {
  const h = request.headers;
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? new URL(request.url).host;
  const proto = h.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");

  const svg = await QRCode.toString(`${proto}://${host}/download`, {
    type: "svg",
    errorCorrectionLevel: "M",
    // Quiet zone comes from the white padding of the card around it, so the
    // code itself only needs a hairline margin — every module stays as large
    // as possible, which is what makes it scan at this size.
    margin: 1,
    color: { dark: "#171060ff", light: "#00000000" },
  });

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
