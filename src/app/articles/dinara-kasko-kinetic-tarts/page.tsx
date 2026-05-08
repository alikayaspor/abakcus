import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { DinaraKaskoArticle } from "@/components/articles/dinara-kasko-kinetic-tarts/dinara-kasko-article";
import { SiteHeader } from "@/components/home/site-header";

const CANONICAL = "https://abakcus.com/articles/dinara-kasko-kinetic-tarts";
const OG_IMAGE =
  "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/Dinara%20Kasko%20Geometrical%20Kinetic%20Tarts%20.jpg";

export const metadata: Metadata = {
  title: "Dinara Kasko's Geometrical Kinetic Tarts — Sculpture You Eat | Abakcus",
  description:
    "Ukrainian pastry chef Dinara Kasko and Miami artist José Margulis turned kinetic sculpture into edible geometry — four tarts made from CNC-cut chocolate, almond sponge, and the philosophy of disappearance.",
  authors: [{ name: "Ali Kaya" }],
  keywords: [
    "Dinara Kasko",
    "kinetic tarts",
    "geometric cake",
    "CNC chocolate",
    "José Margulis",
    "edible sculpture",
    "parametric pastry",
    "SoGood Magazine",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Dinara Kasko's Geometrical Kinetic Tarts — Sculpture You Eat",
    description:
      "When an architect becomes a pastry chef, cake surfaces become the domain of differential geometry.",
    url: CANONICAL,
    siteName: "Abakcus",
    type: "article",
    publishedTime: "2026-04-19",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 800,
        alt: "Dinara Kasko's Geometrical Kinetic Tarts — CNC-cut chocolate sculptures",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dinara Kasko's Geometrical Kinetic Tarts — Sculpture You Eat",
    description:
      "Four tarts built like kinetic sculptures, then eaten. CNC-cut chocolate, parametric geometry, and the philosophy of disappearance.",
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Dinara Kasko's Geometrical Kinetic Tarts — Sculpture You Eat",
  description:
    "Dinara Kasko and José Margulis turned kinetic sculpture into edible geometry — four tarts made from CNC-cut chocolate and the philosophy of disappearance.",
  datePublished: "2026-04-19",
  dateModified: "2026-04-19",
  author: {
    "@type": "Person",
    name: "Ali Kaya",
    url: "https://abakcus.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Abakcus",
    url: "https://abakcus.com",
  },
  image: OG_IMAGE,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": CANONICAL,
  },
  keywords:
    "Dinara Kasko, kinetic tarts, geometric cake, CNC chocolate, edible sculpture",
  articleSection: "Art & Design · Food",
};

export default function DinaraKaskoArticlePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <div className="uc-page-bg pb-4">
        <div className="mx-auto max-w-[var(--page-max)] px-[var(--page-pad)] pt-6">
          <Link
            href="/articles"
            className="inline-flex text-sm text-[var(--ink-muted)] underline-offset-4 hover:underline"
          >
            ← All articles
          </Link>
        </div>
        <DinaraKaskoArticle />
        <ArticleReadMore currentSlug="dinara-kasko-kinetic-tarts" />
      </div>
    </>
  );
}
