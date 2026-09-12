import StoreButtons from "../StoreButtons";

// Closing card on every article: the whole blog exists to bring people to
// the app, so each post ends on the download buttons.
export default function BlogCta() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-brand-deep p-8 text-white shadow-[0_32px_64px_-24px_rgba(15,22,43,0.5)] md:p-12">
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(253,192,3,0.35),transparent_65%)]"
        aria-hidden
      />
      <div className="relative flex flex-col gap-6">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-amber">
          Get Tijarah
        </p>
        <h2 className="card-h2 max-w-xl">
          Your community, connected. Free, verified, zero commission.
        </h2>
        <p className="max-w-xl text-[1.05rem] text-white/70">
          Find trusted providers near you, or list your own home business and
          keep every rupee you earn.
        </p>
        <StoreButtons tone="dark" />
      </div>
    </div>
  );
}
