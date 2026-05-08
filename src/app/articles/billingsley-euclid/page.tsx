import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { BillingsleyEuclidArticle } from "@/components/articles/billingsley-euclid/billingsley-euclid-article";
import { SiteHeader } from "@/components/home/site-header";

const CANONICAL = "https://abakcus.com/articles/billingsley-euclid";
const OG_IMAGE =
  "https://pub-5aa87426ad334d0495bf29d914b5ce1b.r2.dev/Henry%20Billingsley%E2%80%99s%20Euclid%E2%80%99s%20Elements.jpg";

export const metadata: Metadata = {
  title: "Henry Billingsley's 1570 English Euclid — Paper That Stands Up | Abakcus",
  description:
    "Henry Billingsley's 1570 English Euclid introduced pop-up paper solids to prove Euclidean geometry — folded models where abstract proofs had failed. A lesson in mathematical pedagogy that still doesn't need a headset.",
  authors: [{ name: "Ali Kaya" }],
  keywords: [
    "Henry Billingsley Euclid",
    "1570 English Euclid",
    "Billingsley Elements",
    "pop-up paper mathematics",
    "Euclid Elements history",
    "3D paper solids geometry",
    "mathematical pedagogy",
    "Renaissance mathematics",
    "history of mathematics",
    "first English Euclid",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Henry Billingsley's 1570 English Euclid — Paper That Stands Up",
    description:
      "Henry Billingsley's 1570 Euclid introduced pop-up paper solids to prove geometry. A lesson in mathematical teaching that still doesn't need a headset.",
    url: CANONICAL,
    siteName: "Abakcus",
    type: "article",
    publishedTime: "2026-04-05",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 800,
        alt: "Henry Billingsley's Euclid's Elements, 1570 — folded paper solid proofs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Henry Billingsley's 1570 English Euclid — Paper That Stands Up",
    description:
      "Henry Billingsley's 1570 Euclid introduced pop-up paper solids to prove geometry. A lesson that still doesn't need a headset.",
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Henry Billingsley's 1570 English Euclid — Paper That Stands Up",
  description:
    "Henry Billingsley's 1570 English translation of Euclid introduced pop-up paper models for 3D geometric proofs — a mathematical pedagogy breakthrough.",
  datePublished: "2026-04-05",
  dateModified: "2026-04-05",
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
    "Henry Billingsley, Euclid Elements, 1570 English Euclid, pop-up paper solids, history of mathematics",
  articleSection: "Mathematics · History",
};

export default function BillingsleyEuclidArticlePage() {
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
        <BillingsleyEuclidArticle />
        <ArticleReadMore currentSlug="billingsley-euclid" />
      </div>
    </>
  );
}
