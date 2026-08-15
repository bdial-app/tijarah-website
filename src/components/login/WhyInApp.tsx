import Reveal from "../Reveal";
import StoreButtons from "../StoreButtons";

const reasons: Array<{ emoji: string; title: string; copy: string }> = [
  {
    emoji: "🔐",
    title: "Nothing to phish",
    copy: "No web form means no fake Tijarah login page can ever take your details. If a site asks you to sign in to Tijarah in a browser, it is not us.",
  },
  {
    emoji: "📱",
    title: "Tied to your device",
    copy: "Your session is bound to the phone you verified on, so a leaked password cannot hand your account to someone else. There is no password to leak.",
  },
  {
    emoji: "💬",
    title: "Chat needs the app anyway",
    copy: "Messages, booking updates and lead alerts arrive as notifications. Everything you would sign in to do already happens in the app.",
  },
  {
    emoji: "🛡️",
    title: "Verified both ways",
    copy: "Customers verify with an iJamat ID and providers clear an Aadhaar check, so the person on the other side of a chat is a real neighbour.",
  },
];

export default function WhyInApp() {
  return (
    <section className="px-[clamp(1rem,1.429vw+0.714rem,2rem)] pb-[clamp(5rem,7.143vw+3.571rem,10rem)]">
      <Reveal className="mx-auto flex max-w-[90rem] flex-col gap-[clamp(2.5rem,3vw,4rem)] overflow-hidden rounded-3xl bg-brand-deep px-[clamp(1.5rem,3vw,4rem)] py-[clamp(3rem,4vw,5rem)]">
        <div className="flex max-w-2xl flex-col gap-4">
          <h2 data-reveal className="section-h2 text-white">
            Why sign-in stays in the app
          </h2>
          <p data-reveal className="text-[1.125rem] text-white/60">
            We looked at what a web login would actually add, and decided the
            safer account was worth more than the extra door.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {reasons.map((r) => (
            <div
              key={r.title}
              data-reveal
              className="flex flex-col gap-3 rounded-3xl bg-white/6 p-6 ring-1 ring-white/10"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-[1.15rem]">
                {r.emoji}
              </span>
              <h3 className="section-h4 text-white">{r.title}</h3>
              <p className="text-[0.98rem] text-white/60">{r.copy}</p>
            </div>
          ))}
        </div>

        <div
          data-reveal
          className="flex flex-col gap-6 rounded-3xl bg-white/6 p-[clamp(1.5rem,2.5vw,2.5rem)] ring-1 ring-white/10 lg:flex-row lg:items-center lg:justify-between"
        >
          <div className="flex max-w-md flex-col gap-2">
            <h3 className="section-h3 text-white">
              Already have an account?
            </h3>
            <p className="text-[0.98rem] text-white/60">
              Install Tijarah on your new phone from the App Store or Google
              Play and verify the same mobile number — your chats, bookings and
              saved providers come back with you.
            </p>
          </div>
          <StoreButtons tone="dark" className="shrink-0" />
        </div>

        <p data-reveal className="text-[0.9rem] text-white/50">
          Trouble getting in?{" "}
          <a href="#" className="text-white underline underline-offset-4">
            Contact support
          </a>{" "}
          and we will sort it out with you — we never ask for an OTP, on any
          channel.
        </p>
      </Reveal>
    </section>
  );
}
