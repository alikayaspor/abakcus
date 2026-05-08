import type { Metadata } from "next";
import { ArticlesArchive } from "@/components/articles/articles-archive";
import { SiteHeader } from "@/components/home/site-header";

const CANONICAL = "https://abakcus.com/articles";

export const metadata: Metadata = {
  title: "Articles — Science, Math & History Long Reads | Abakcus",
  description:
    "Long reads on science, mathematics, history, and the open web — curated essays on Euclid, Feynman, Bauhaus, probability, and more.",
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Articles — Science, Math & History Long Reads",
    description:
      "Long reads on science, mathematics, history, and the open web — curated essays on Euclid, Feynman, Bauhaus, probability, and more.",
    url: CANONICAL,
    siteName: "Abakcus",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Articles — Science, Math & History Long Reads | Abakcus",
    description:
      "Long reads on science, mathematics, history, and the open web.",
  },
};

export default function ArticlesPage() {
  return (
    <div className="uc-page-bg min-h-screen">
      <SiteHeader />
      <ArticlesArchive />
    </div>
  );
}
