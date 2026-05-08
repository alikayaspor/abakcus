import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { Sqrt2IrrationalArticle } from "@/components/articles/sqrt2-irrational/sqrt2-irrational-article";
import { SiteHeader } from "@/components/home/site-header";

const CANONICAL = "https://abakcus.com/articles/sqrt2-irrational";
const OG_IMAGE =
  "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/The%20Proof%20of%20Square%20Root%20of%202%20Irrational.webp";

export const metadata: Metadata = {
  title: "A Number That Cannot Be the Smallest — A Proof That √2 Is Irrational | Abakcus",
  description:
    "Most proofs that √2 is irrational use prime factorization. This one uses something simpler: if a smallest natural number witnessing rationality existed, you could always find a smaller one — a contradiction by the well-ordering principle.",
  authors: [{ name: "Ali Kaya" }],
  keywords: [
    "square root of 2 irrational",
    "well-ordering principle",
    "infinite descent",
    "number theory",
    "mathematical proof",
    "√2 rational proof",
    "irrationality proof",
    "Fermat descent",
    "natural numbers",
    "mathematical induction",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "A Number That Cannot Be the Smallest — A Proof That √2 Is Irrational",
    description:
      "If √2 were rational, there would have to be a smallest natural number witnessing this. Then we show that number cannot exist.",
    url: CANONICAL,
    siteName: "Abakcus",
    type: "article",
    publishedTime: "2026-04-21",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 800,
        alt: "The proof that √2 is irrational via the well-ordering principle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A Number That Cannot Be the Smallest — A Proof That √2 Is Irrational",
    description:
      "If √2 were rational, there would have to be a smallest natural number witnessing this. Then we show that number cannot exist.",
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "A Number That Cannot Be the Smallest — A Proof That √2 Is Irrational",
  description:
    "A proof that √2 is irrational using the well-ordering principle — if a smallest natural number witnessing rationality existed, you could always find a smaller one.",
  datePublished: "2026-04-21",
  dateModified: "2026-04-21",
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
    "square root 2 irrational, well-ordering principle, infinite descent, mathematical proof, number theory",
  articleSection: "Mathematics · Number Theory",
};

export default function Sqrt2IrrationalPage() {
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
        <Sqrt2IrrationalArticle />
        <ArticleReadMore currentSlug="sqrt2-irrational" />
      </div>
    </>
  );
}
