import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";
import { terms as doc, legalPath } from "@/lib/legal";
import { SITE_NAME, absoluteUrl } from "@/lib/site";

const url = absoluteUrl(legalPath(doc.slug));

export const metadata: Metadata = {
  title: `${doc.title} | Tijarah`,
  description: doc.description,
  alternates: { canonical: url },
  openGraph: {
    title: doc.title,
    description: doc.description,
    url,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_IN",
  },
};

export default function Page() {
  return <LegalPage doc={doc} />;
}
