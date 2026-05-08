import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { IndianaPiBillArticle } from "@/components/articles/indiana-pi-bill/indiana-pi-bill-article";
import { SiteHeader } from "@/components/home/site-header";

const CANONICAL = "https://abakcus.com/articles/indiana-pi-bill";
const OG_IMAGE =
  "https://pub-5aa87426ad334d0495bf29d914b5ce1b.r2.dev/The%20Indiana%20Pi%20Bill.jpeg";

export const metadata: Metadata = {
  title: "The Indiana Pi Bill: When a Legislature Tried to Vote on π — Abakcus",
  description:
    "In 1897, Indiana's House of Representatives passed a bill that implied π = 3.2 — until a Purdue mathematician happened to be in the building and stopped it in the Senate.",
  authors: [{ name: "Ali Kaya" }],
  keywords: [
    "Indiana Pi Bill",
    "Indiana House Bill 246",
    "pi equals 3.2",
    "history of pi",
    "Goodwin pi bill",
    "Professor Waldo",
    "mathematical legislation",
    "circle squaring Indiana",
    "1897 pi law",
    "pi history",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "The Indiana Pi Bill: When a Legislature Tried to Vote on π",
    description:
      "In 1897, Indiana's House passed a bill that implied π = 3.2. Then a Purdue mathematician walked in.",
    url: CANONICAL,
    siteName: "Abakcus",
    type: "article",
    publishedTime: "2026-04-08",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 800,
        alt: "The Indiana Pi Bill, 1897 — House Bill 246",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Indiana Pi Bill: When a Legislature Tried to Vote on π",
    description:
      "In 1897, Indiana's House passed a bill that implied π = 3.2. Then a Purdue mathematician walked in.",
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Indiana Pi Bill: When a Legislature Tried to Vote on π",
  description:
    "In 1897, Indiana's House passed a bill implying π = 3.2. Professor C.A. Waldo of Purdue stopped it in the Senate.",
  datePublished: "2026-04-08",
  dateModified: "2026-04-08",
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
    "Indiana Pi Bill, pi history, mathematical legislation, Goodwin, circle squaring, 1897",
  articleSection: "Mathematics · History",
};

export default function IndianaPiBillArticlePage() {
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
        <IndianaPiBillArticle />
        <ArticleReadMore currentSlug="indiana-pi-bill" />
      </div>
    </>
  );
}
