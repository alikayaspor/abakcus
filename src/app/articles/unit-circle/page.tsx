import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { UnitCircleArticle } from "@/components/articles/unit-circle/unit-circle-article";
import { SiteHeader } from "@/components/home/site-header";

const CANONICAL = "https://abakcus.com/articles/unit-circle";
const OG_IMAGE = "https://abakcus.com/images/unit-circle-minimal-sweet.svg";

export const metadata: Metadata = {
  title: "How to Memorize the Unit Circle — Abakcus",
  description:
    "Not a chart to memorize — a pattern to understand. Trigonometry on the unit circle explained step by step: why the values are what they are, and how to reconstruct the whole table from three angles.",
  authors: [{ name: "Ali Kaya" }],
  keywords: [
    "how to memorize unit circle",
    "unit circle trigonometry",
    "sin cos values unit circle",
    "unit circle chart",
    "trigonometry angles",
    "unit circle explained",
    "30 45 60 degree angles",
    "trigonometry study guide",
    "radians unit circle",
    "trig values from pattern",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "How to Memorize the Unit Circle",
    description:
      "Not a chart to memorize — a pattern to understand. The unit circle explained step by step.",
    url: CANONICAL,
    siteName: "Abakcus",
    type: "article",
    publishedTime: "2026-02-01",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Unit circle diagram showing sin and cos values at key angles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Memorize the Unit Circle",
    description:
      "Not a chart to memorize — a pattern to understand. The unit circle explained step by step.",
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Memorize the Unit Circle",
  description:
    "A step-by-step guide to understanding the unit circle — not memorizing a chart, but recognising the pattern behind sin and cos values.",
  datePublished: "2026-02-01",
  dateModified: "2026-02-01",
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
    "unit circle, trigonometry, sin cos values, 30 45 60 degrees, radians, memorize",
  articleSection: "Mathematics · Trigonometry",
};

export default function UnitCircleArticlePage() {
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
        <UnitCircleArticle />
        <ArticleReadMore currentSlug="unit-circle" />
      </div>
    </>
  );
}
