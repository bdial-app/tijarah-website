import Reveal from "../Reveal";
import { AppleIcon, GooglePlayIcon } from "../icons";

const steps: Array<{ title: string; copy: string; note?: string }> = [
  {
    title: "Get the app",
    copy: "Download Tijarah free from the App Store on iPhone or Google Play on Android. It is a 38 MB download and works on Android 8.0 and above.",
    note: "stores",
  },
  {
    title: "Verify your number",
    copy: "Enter your mobile number and the six-digit OTP we send you. That number becomes your account. No email, no password to remember.",
  },
  {
    title: "Confirm your iJamat ID",
    copy: "Add your iJamat ID once so the community knows you are one of them. Providers additionally clear an Aadhaar check before going live.",
  },
];

export default function SignInSteps() {
  return (
    <section className="section-pad">
      <Reveal className="mx-auto flex max-w-[90rem] flex-col gap-[clamp(2.5rem,3vw,4rem)] px-[clamp(1rem,1.429vw+0.714rem,2rem)]">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <h2 data-reveal className="section-h2">
            Signing in takes a minute
          </h2>
          <p data-reveal className="text-[1.125rem] text-ink-60">
            Three steps, all inside the app, and you only do them once.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.title}
              data-reveal
              className="flex flex-col gap-4 rounded-3xl bg-white p-7 shadow-[0_24px_48px_-32px_rgba(15,22,43,0.28)] transition-transform duration-500 hover:-translate-y-1"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/8 text-[1.15rem] font-semibold text-brand">
                {i + 1}
              </span>
              <h3 className="section-h4">{step.title}</h3>
              <p className="text-[0.98rem] text-ink-60">{step.copy}</p>

              {step.note === "stores" && (
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  <span className="flex items-center gap-2 rounded-full bg-ink/5 px-3 py-1.5 text-[0.82rem] font-semibold">
                    <AppleIcon className="h-3.5 w-3.5" />
                    App Store
                  </span>
                  <span className="flex items-center gap-2 rounded-full bg-ink/5 px-3 py-1.5 text-[0.82rem] font-semibold">
                    <GooglePlayIcon className="h-3.5 w-3.5" />
                    Google Play
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
