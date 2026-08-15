import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorksWith from "@/components/WorksWith";
import Merchants from "@/components/Merchants";
import Features from "@/components/Features";
import Intelligence from "@/components/Intelligence";
import ExtraFeatures from "@/components/ExtraFeatures";
import Privacy from "@/components/Privacy";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";
import QrCard from "@/components/QrCard";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <Hero />
        <WorksWith />
        <Merchants />
        <Features />
        <Intelligence />
        <ExtraFeatures />
        <Privacy />
        <Reviews />
        <Footer />
        <QrCard />
      </main>
    </SmoothScroll>
  );
}
