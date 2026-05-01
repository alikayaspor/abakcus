import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { FibonacciShelfArticle } from "@/components/articles/fibonacci-shelf/fibonacci-shelf-article";
import { SiteHeader } from "@/components/home/site-header";

export const metadata: Metadata = {
  title: "A Shelf Built on a Sequence",
  description:
    "Peng Wang’s Fibonacci Shelf — six aluminum rectangles, one modular idea, and the golden ratio in the living room.",
};

export default function FibonacciShelfArticlePage() {
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
        <FibonacciShelfArticle />
        <ArticleReadMore currentSlug="fibonacci-shelf" />
      </div>
    </>
  );
}
