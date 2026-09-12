import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import QrCard from "@/components/QrCard";
import Footer from "@/components/Footer";
import LegalHeader from "./LegalHeader";
import LegalDoc from "./LegalDoc";
import { legalPath, type LegalDoc as LegalDocType } from "@/lib/legal";
import { SITE_NAME, absoluteUrl } from "@/lib/site";

// Shared page shell for /terms and /privacy: header, document, footer,
// plus WebPage + breadcrumb structured data.
export default function LegalPage({ doc }: { doc: LegalDocType }) {
  const url = absoluteUrl(legalPath(doc.slug));

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: doc.title,
      description: doc.description,
      url,
      inLanguage: "en-IN",
      dateModified: doc.effective,
      isPartOf: { "@type": "WebSite", name: SITE_NAME, url: absoluteUrl("/") },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: doc.title, item: url },
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
        <article>
          <LegalHeader doc={doc} />
          <LegalDoc doc={doc} />
        </article>
        <Footer />
        <QrCard />
      </main>
    </SmoothScroll>
  );
}
