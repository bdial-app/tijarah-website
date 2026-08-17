import { AppleIcon, GooglePlayIcon } from "./icons";
import { APP_STORE_URL, PLAY_STORE_URL, isExternalUrl } from "@/lib/store-links";

export { APP_STORE_URL, PLAY_STORE_URL };

// Once the URLs point at the real listings, the buttons open them in a new tab.
const external = (url: string) =>
  isExternalUrl(url)
    ? ({ target: "_blank", rel: "noopener noreferrer" } as const)
    : {};

type Tone = "light" | "dark";

const tones: Record<Tone, { apple: string; play: string }> = {
  // On the page background / pale panels: two solid pills.
  light: {
    apple: "bg-brand text-[#EAEEF7]",
    play: "bg-[#0F162B] text-[#EAEEF7]",
  },
  // On brand-deep panels: white pills so both read at the same weight.
  dark: {
    apple: "bg-white text-ink",
    play: "bg-white text-ink",
  },
};

function Label({ top, name }: { top: string; name: string }) {
  return (
    <span className="flex flex-col items-start gap-[0.15rem] leading-none">
      <span className="text-[0.62rem] uppercase tracking-[0.12em] opacity-70">
        {top}
      </span>
      <span className="text-[1.02rem] font-semibold tracking-tight">{name}</span>
    </span>
  );
}

export function AppStoreButton({ tone = "light" }: { tone?: Tone }) {
  return (
    <a
      href={APP_STORE_URL}
      className={`store-btn ${tones[tone].apple}`}
      aria-label="Download Tijarah on the App Store"
      {...external(APP_STORE_URL)}
    >
      <AppleIcon className="h-6 w-6" />
      <Label top="Download on the" name="App Store" />
      <span className="btn-highlight" />
    </a>
  );
}

export function PlayStoreButton({ tone = "light" }: { tone?: Tone }) {
  return (
    <a
      href={PLAY_STORE_URL}
      className={`store-btn ${tones[tone].play}`}
      aria-label="Get Tijarah on Google Play"
      {...external(PLAY_STORE_URL)}
    >
      <GooglePlayIcon className="h-6 w-6" />
      <Label top="Get it on" name="Google Play" />
      <span className="btn-highlight" />
    </a>
  );
}

export default function StoreButtons({
  tone = "light",
  className = "",
}: {
  tone?: Tone;
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <AppStoreButton tone={tone} />
      <PlayStoreButton tone={tone} />
    </div>
  );
}
