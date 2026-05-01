import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { Zero999Equals1Article } from "@/components/articles/0999-equals-1/zero-999-equals-1-article";
import { SiteHeader } from "@/components/home/site-header";

export const metadata: Metadata = {
  title: "The Proof That 0.999… Is Exactly Equal to 1 — Abakcus",
  description:
    "0.999… is not 'almost 1' or 'approaching 1' — it is exactly 1. Here is the clean geometric series proof that settles the matter in five steps.",
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
  openGraph: {
    title: "The Proof That 0.999… Is Exactly Equal to 1",
    description:
      "0.999… is not 'almost 1' — it is exactly 1. Here is the geometric series proof in five steps.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Proof That 0.999… Is Exactly Equal to 1",
    description:
      "0.999… is not 'almost 1' — it is exactly 1. Here is the geometric series proof in five steps.",
  },
};

export default function Zero999Equals1Page() {
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
        <Zero999Equals1Article />
        <ArticleReadMore currentSlug="0999-equals-1" />
      </div>
    </>
  );
}
