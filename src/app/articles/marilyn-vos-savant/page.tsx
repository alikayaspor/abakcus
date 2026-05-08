import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { MarilynVosSavantArticle } from "@/components/articles/marilyn-vos-savant/marilyn-vos-savant-article";
import { SiteHeader } from "@/components/home/site-header";

const CANONICAL = "https://abakcus.com/articles/marilyn-vos-savant";
const OG_IMAGE =
  "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/Ask%20Marilyn.webp";

export const metadata: Metadata = {
  title: "The Woman Who Was Right: Marilyn vos Savant and Monty Hall | Abakcus",
  description:
    "In 1990, Marilyn vos Savant answered a probability puzzle correctly. Nearly 10,000 people — many of them academics — wrote in to tell her she was wrong. She was not wrong.",
  authors: [{ name: "Ali Kaya" }],
  alternates: { canonical: CANONICAL },
  keywords: [
    "Marilyn vos Savant",
    "Monty Hall Problem",
    "Ask Marilyn",
    "probability puzzle",
    "Parade magazine",
    "three doors problem",
    "Monty Hall",
    "conditional probability",
  ],
  openGraph: {
    title: "The Woman Who Was Right — Marilyn vos Savant and the Monty Hall Problem",
    description:
      "In 1990, Marilyn vos Savant answered a probability puzzle correctly. Nearly 10,000 people — many of them academics — wrote in to tell her she was wrong. She was not wrong.",
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
        alt: "Marilyn vos Savant — Ask Marilyn column, Parade magazine, 1990",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Woman Who Was Right — Marilyn vos Savant and the Monty Hall Problem",
    description:
      "In 1990, Marilyn vos Savant answered a probability puzzle correctly. Nearly 10,000 people — many of them academics — wrote in to tell her she was wrong. She was not wrong.",
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "The Woman Who Was Right — Marilyn vos Savant and the Monty Hall Problem",
  description:
    "In 1990, Marilyn vos Savant answered a probability puzzle correctly. Nearly 10,000 people — many of them academics — wrote in to tell her she was wrong. She was not wrong.",
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
    "Marilyn vos Savant, Monty Hall Problem, Ask Marilyn, probability puzzle, Parade magazine, conditional probability",
  articleSection: "Mathematics · History",
};

export default function MarilynVosSavantPage() {
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
        <MarilynVosSavantArticle />
        <ArticleReadMore currentSlug="marilyn-vos-savant" />
      </div>
    </>
  );
}
