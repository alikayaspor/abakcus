import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { UnitCircleArticle } from "@/components/articles/unit-circle/unit-circle-article";
import { SiteHeader } from "@/components/home/site-header";

export const metadata: Metadata = {
  title: "How to Memorize the Unit Circle",
  description:
    "Not a chart to memorize — a pattern to understand. Trigonometry on the unit circle, step by step.",
};

export default function UnitCircleArticlePage() {
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
        <UnitCircleArticle />
        <ArticleReadMore currentSlug="unit-circle" />
      </div>
    </>
  );
}
