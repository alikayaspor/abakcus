import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { ZurichNotebookArticle } from "@/components/articles/zurich-notebook/zurich-notebook-article";
import { SiteHeader } from "@/components/home/site-header";

export const metadata: Metadata = {
  title: "The notebook where general relativity didn't work yet",
  description:
    "Einstein’s Zurich Notebook — puzzles, line elements, wrong turns, and the path to November 1915.",
};

export default function ZurichNotebookArticlePage() {
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
        <ZurichNotebookArticle />
        <ArticleReadMore currentSlug="zurich-notebook" />
      </div>
    </>
  );
}
