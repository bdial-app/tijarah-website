import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import QrCard from "@/components/QrCard";
import Footer from "@/components/Footer";
import LoginHero from "@/components/login/LoginHero";
import SignInSteps from "@/components/login/SignInSteps";
import WhyInApp from "@/components/login/WhyInApp";

export const metadata: Metadata = {
  title: "Sign in | Tijarah",
  description:
    "Tijarah accounts are verified inside the app. Download Tijarah free from the App Store or Google Play, verify your number, and you are signed in.",
};

export default function LoginPage() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <LoginHero />
        <SignInSteps />
        <WhyInApp />
        <Footer />
        <QrCard />
      </main>
    </SmoothScroll>
  );
}
