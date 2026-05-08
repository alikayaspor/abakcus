import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { ZurichNotebookArticle } from "@/components/articles/zurich-notebook/zurich-notebook-article";
import { SiteHeader } from "@/components/home/site-header";

const CANONICAL = "https://abakcus.com/articles/zurich-notebook";
const OG_IMAGE =
  "https://pub-5aa87426ad334d0495bf29d914b5ce1b.r2.dev/Einstein%E2%80%99s%20Zurich%20Notebook.jpg";

export const metadata: Metadata = {
  title: "Einstein's Zurich Notebook — The Notebook Where General Relativity Didn't Work Yet | Abakcus",
  description:
    "Einstein's Zurich Notebook from 1912–1913 captures the wrong turns, provisional solutions, and gradual approach to general relativity — two years before the final theory.",
  authors: [{ name: "Ali Kaya" }],
  keywords: [
    "Einstein Zurich Notebook",
    "Einstein general relativity",
    "history of general relativity",
    "Einstein 1912 notebook",
    "general relativity development",
    "Einstein wrong turns",
    "Einstein physics notes",
    "path to general relativity",
    "Einstein Grossmann",
    "November 1915 Einstein",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Einstein's Zurich Notebook — Where General Relativity Didn't Work Yet",
    description:
      "Einstein's Zurich Notebook from 1912–1913 — puzzles, line elements, wrong turns, and the path to November 1915.",
    url: CANONICAL,
    siteName: "Abakcus",
    type: "article",
    publishedTime: "2026-04-09",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 800,
        alt: "Einstein's Zurich Notebook — handwritten pages from 1912-1913",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Einstein's Zurich Notebook — Where General Relativity Didn't Work Yet",
    description:
      "Einstein's Zurich Notebook from 1912–1913 — puzzles, line elements, wrong turns, and the path to November 1915.",
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Einstein's Zurich Notebook — The Notebook Where General Relativity Didn't Work Yet",
  description:
    "Einstein's Zurich Notebook (1912–1913) documents the wrong turns and provisional solutions on the path to general relativity.",
  datePublished: "2026-04-09",
  dateModified: "2026-04-09",
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
    "Einstein Zurich Notebook, general relativity, history of physics, Einstein 1912, November 1915",
  articleSection: "Physics · History of Science",
};

export default function ZurichNotebookArticlePage() {
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
        <ZurichNotebookArticle />
        <ArticleReadMore currentSlug="zurich-notebook" />
      </div>
    </>
  );
}
