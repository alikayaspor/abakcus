import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { Zero999Equals1Article } from "@/components/articles/0999-equals-1/zero-999-equals-1-article";
import { SiteHeader } from "@/components/home/site-header";

const CANONICAL = "https://abakcus.com/articles/0999-equals-1";
const OG_IMAGE = "https://abakcus.com/images/0999-equals-1-card.svg";

export const metadata: Metadata = {
  title: "The Proof That 0.999… Is Exactly Equal to 1 — Abakcus",
  description:
    "0.999… is not 'almost 1' or 'approaching 1' — it is exactly 1. Here is the clean geometric series proof that settles the matter in five steps.",
  authors: [{ name: "Ali Kaya" }],
  keywords: [
    "0.999 equals 1",
    "0.999 = 1 proof",
    "geometric series proof",
    "repeating decimal equals 1",
    "infinite decimal",
    "real number system",
    "mathematical proof",
    "0.999... proof",
    "why 0.999 equals 1",
    "real analysis",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "The Proof That 0.999… Is Exactly Equal to 1",
    description:
      "0.999… is not 'almost 1' — it is exactly 1. Here is the geometric series proof in five steps.",
    url: CANONICAL,
    siteName: "Abakcus",
    type: "article",
    publishedTime: "2026-04-27",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "0.999… = 1 — geometric series proof",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Proof That 0.999… Is Exactly Equal to 1",
    description:
      "0.999… is not 'almost 1' — it is exactly 1. Here is the geometric series proof in five steps.",
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Proof That 0.999… Is Exactly Equal to 1",
  description:
    "0.999… is not 'almost 1' — it is exactly 1. The clean geometric series proof that settles the matter in five steps.",
  datePublished: "2026-04-27",
  dateModified: "2026-04-27",
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
    "0.999 equals 1, repeating decimal, geometric series proof, real analysis, mathematical proof",
  articleSection: "Mathematics · Real Analysis",
};

export default function Zero999Equals1Page() {
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
        <Zero999Equals1Article />
        <ArticleReadMore currentSlug="0999-equals-1" />
      </div>
    </>
  );
}
