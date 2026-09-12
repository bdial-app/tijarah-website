import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import QrCard from "@/components/QrCard";
import Footer from "@/components/Footer";
import FaqHero from "@/components/faq/FaqHero";
import FaqBrowser from "@/components/faq/FaqBrowser";
import FaqContact from "@/components/faq/FaqContact";
import { faqCount, faqGroups } from "@/lib/faq";
import { SITE_NAME, absoluteUrl } from "@/lib/site";

const url = absoluteUrl("/faq");
const description =
  "Answers to common questions about Tijarah: signing in with OTP and EJamat ID, Aadhaar verification, zero-commission bookings, listing your business, and your data.";

export const metadata: Metadata = {
  title: "FAQ | Tijarah",
  description,
  alternates: { canonical: url },
  openGraph: {
    title: "Tijarah FAQ",
    description,
    url,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_IN",
  },
};

// Structured data wants plain text: strip the inline **bold** and [link](href).
const plain = (s: string) =>
  s.replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

export default function FaqPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      name: "Tijarah FAQ",
      url,
      inLanguage: "en-IN",
      mainEntity: faqGroups.flatMap((g) =>
        g.items.map((it) => ({
          "@type": "Question",
          name: it.q,
          acceptedAnswer: { "@type": "Answer", text: plain(it.a) },
        }))
      ),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "FAQ", item: url },
      ],
    },
  ];

  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <FaqHero count={faqCount} />
        <FaqBrowser groups={faqGroups} />
        <FaqContact />
        <Footer />
        <QrCard />
      </main>
    </SmoothScroll>
  );
}
