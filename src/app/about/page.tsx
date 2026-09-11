import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import QrCard from "@/components/QrCard";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import Story from "@/components/about/Story";
import Stats from "@/components/about/Stats";
import Values from "@/components/about/Values";
import Timeline from "@/components/about/Timeline";

export const metadata: Metadata = {
  title: "About | Tijarah",
  description:
    "Tijarah is a community marketplace built by and for the Bohri community in India: verified providers, women-led businesses, ten languages, and zero commission.",
};

export default function AboutPage() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <AboutHero />
        <Story />
        <Stats />
        <Values />
        <Timeline />
        <Footer />
        <QrCard />
      </main>
    </SmoothScroll>
  );
}
