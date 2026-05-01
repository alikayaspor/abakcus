import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { MarilynVosSavantArticle } from "@/components/articles/marilyn-vos-savant/marilyn-vos-savant-article";
import { SiteHeader } from "@/components/home/site-header";

export const metadata: Metadata = {
  title: "The Woman Who Was Right — Marilyn vos Savant and the Monty Hall Problem",
  description:
    "In 1990, Marilyn vos Savant answered a probability puzzle correctly. Nearly 10,000 people — many of them academics — wrote in to tell her she was wrong. She was not wrong.",
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
    type: "article",
    images: [
      "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/Ask%20Marilyn.webp",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Woman Who Was Right — Marilyn vos Savant and the Monty Hall Problem",
    description:
      "In 1990, Marilyn vos Savant answered a probability puzzle correctly. Nearly 10,000 people — many of them academics — wrote in to tell her she was wrong. She was not wrong.",
    images: [
      "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/Ask%20Marilyn.webp",
    ],
  },
};

export default function MarilynVosSavantPage() {
  return (
    <>
      <SiteHeader />
      <div className="uc-page-bg pb-4">
        <div className="mx-auto max-w-[var(--page-max)] px-[var(--page-pad)] pt-6">
          <Link
            href="/"
            className="inline-flex text-sm text-[var(--ink-muted)] underline-offset-4 hover:underline"
          >
            ← Back to home
          </Link>
        </div>
        <MarilynVosSavantArticle />
        <ArticleReadMore currentSlug="marilyn-vos-savant" />
      </div>
    </>
  );
}
