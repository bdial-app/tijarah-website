import Image from "next/image";
import logo from "@/assests/logo.png";

// The single brand asset is a square navy tile with the wordmark banded across
// its middle. Cropping to that band (object-cover inside a 2.78:1 box) turns
// the tile into the horizontal lockup the nav, footer and hero need, so every
// surface renders the same file rather than a hand-built copy of the wordmark.
// The band sits a hair below centre, hence the 51% object-position.
//
// `plate` mats the mark on a little extra navy on all four sides. The tile's
// gradient is flat across each row and runs top-to-bottom, so a plate carrying
// the same gradient over the band's range meets the image edge invisibly.
//
// `alt` is empty by default: every current use sits inside a link that already
// carries an aria-label, so a name here would just be announced twice.
export default function BrandLogo({
  className = "h-8",
  priority = false,
  alt = "",
  plate = false,
}: {
  className?: string;
  priority?: boolean;
  alt?: string;
  plate?: boolean;
}) {
  const mark = (
    <Image
      src={logo}
      alt={alt}
      priority={priority}
      className={`aspect-[2.78/1] w-auto object-cover object-[center_51%] ${
        plate ? "" : "rounded-xl"
      } ${className}`}
    />
  );

  if (!plate) return mark;

  return (
    <span className="inline-flex rounded-xl bg-[linear-gradient(#16203E,#121B35)] p-1">
      {mark}
    </span>
  );
}
