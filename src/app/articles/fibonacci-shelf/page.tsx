import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { FibonacciShelfArticle } from "@/components/articles/fibonacci-shelf/fibonacci-shelf-article";
import { SiteHeader } from "@/components/home/site-header";

const CANONICAL = "https://abakcus.com/articles/fibonacci-shelf";
const OG_IMAGE =
  "https://pub-5aa87426ad334d0495bf29d914b5ce1b.r2.dev/The%20Fibonacci%20Shelf%20by%20Peng%20Wang%206.jpg";

export const metadata: Metadata = {
  title: "Peng Wang's Fibonacci Shelf — A Shelf Built on a Sequence | Abakcus",
  description:
    "Peng Wang's Fibonacci Shelf — six aluminum rectangles, one modular idea, and the golden ratio in the living room. A piece of furniture that is also a proof.",
  authors: [{ name: "Ali Kaya" }],
  keywords: [
    "Fibonacci shelf",
    "Peng Wang designer",
    "golden ratio furniture",
    "Fibonacci sequence design",
    "modular shelf",
    "mathematical design",
    "aluminum shelf",
    "MOCO Museum",
    "design mathematics",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Peng Wang's Fibonacci Shelf — A Shelf Built on a Sequence",
    description:
      "Six aluminum rectangles, one modular idea, and the golden ratio in the living room. A piece of furniture that is also a proof.",
    url: CANONICAL,
    siteName: "Abakcus",
    type: "article",
    publishedTime: "2026-03-18",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 800,
        alt: "The Fibonacci Shelf by Peng Wang — six modular aluminum rectangles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peng Wang's Fibonacci Shelf — A Shelf Built on a Sequence",
    description:
      "Six aluminum rectangles, one modular idea, and the golden ratio in the living room.",
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Peng Wang's Fibonacci Shelf — A Shelf Built on a Sequence",
  description:
    "Peng Wang's Fibonacci Shelf uses the Fibonacci sequence and golden ratio as its design principle — six modular aluminum rectangles that form a complete composition.",
  datePublished: "2026-03-18",
  dateModified: "2026-03-18",
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
    "Fibonacci shelf, Peng Wang, golden ratio, Fibonacci sequence, design mathematics, furniture",
  articleSection: "Design · Mathematics",
};

export default function FibonacciShelfArticlePage() {
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
        <FibonacciShelfArticle />
        <ArticleReadMore currentSlug="fibonacci-shelf" />
      </div>
    </>
  );
}
