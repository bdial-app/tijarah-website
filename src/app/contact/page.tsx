import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import QrCard from "@/components/QrCard";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactChannels from "@/components/contact/ContactChannels";
import { PRIVACY_EMAIL, SITE_NAME, SUPPORT_EMAIL, absoluteUrl } from "@/lib/site";

const url = absoluteUrl("/contact");
const description =
  "Reach the Tijarah team about your account, a booking, your provider listing, a bug, or a privacy request. A person replies within two working days.";

export const metadata: Metadata = {
  title: "Contact us | Tijarah",
  description,
  alternates: { canonical: url },
  openGraph: {
    title: "Contact Tijarah",
    description,
    url,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_IN",
  },
};

export default function ContactPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact Tijarah",
      url,
      inLanguage: "en-IN",
      mainEntity: {
        "@type": "Organization",
        name: SITE_NAME,
        url: absoluteUrl("/"),
        contactPoint: [
          { "@type": "ContactPoint", contactType: "customer support", email: SUPPORT_EMAIL, areaServed: "IN" },
          { "@type": "ContactPoint", contactType: "privacy", email: PRIVACY_EMAIL, areaServed: "IN" },
        ],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Contact us", item: url },
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
        <ContactHero />
        <ContactChannels />
        <Footer />
        <QrCard />
      </main>
    </SmoothScroll>
  );
}
