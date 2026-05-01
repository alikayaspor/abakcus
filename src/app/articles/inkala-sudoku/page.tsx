import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { InkalaSudokuArticle } from "@/components/articles/inkala-sudoku/inkala-sudoku-article";
import { SiteHeader } from "@/components/home/site-header";

const CANONICAL = "https://abakcus.com/articles/inkala-sudoku";
const OG_IMAGE =
  "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/The%20World%E2%80%99s%20Hardest%20Sudoku%20by%20Arto%20Inkala.jpg.webp";

export const metadata: Metadata = {
  title:
    "Arto Inkala's world's hardest Sudoku — 23 clues, one solution, three months of work",
  description:
    "Finnish mathematician Arto Inkala's 2012 Sudoku: 23 givens, 4.5% trivialization rate, one logical solution. Why it broke solvers — and what 'hardest' actually means.",
  authors: [{ name: "Abakcus" }],
  alternates: { canonical: CANONICAL },
  keywords: [
    "Arto Inkala",
    "Sudoku",
    "world's hardest sudoku",
    "trivialization rate",
    "AI Escargot",
    "logic puzzle",
    "mathematics",
  ],
  openGraph: {
    title:
      "Arto Inkala's world's hardest Sudoku — 23 clues, one solution",
    description:
      "23 pre-filled squares, one solution, a 4.5% trivialization rate — and solvers who needed months. What makes Inkala's 2012 grid so brutal.",
    url: CANONICAL,
    siteName: "Abakcus",
    type: "article",
    publishedTime: "2026-04-14",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 1200,
        alt: "The World's Hardest Sudoku by Arto Inkala — 9×9 grid with highlighted digits",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The world's hardest Sudoku — 23 clues, 153 human attempts",
    description:
      "Inkala spent three months designing it. One solver needed 153 tries over two months. Here's the metric behind the myth.",
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Arto Inkala's world's hardest Sudoku — 23 clues, one solution, three months of work",
  description:
    "Finnish mathematician Arto Inkala's 2012 Sudoku puzzle: trivialization rate, human solution stories, and how difficulty is measured.",
  datePublished: "2026-04-14",
  dateModified: "2026-04-14",
  author: {
    "@type": "Organization",
    name: "Abakcus",
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
  keywords: "Sudoku, Arto Inkala, logic puzzle, mathematics",
  articleSection: "Mathematics",
};

export default function InkalaSudokuPage() {
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
        <InkalaSudokuArticle />
        <ArticleReadMore currentSlug="inkala-sudoku" />
      </div>
    </>
  );
}
