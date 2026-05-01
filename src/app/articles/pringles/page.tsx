import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { PringlesArticle } from "@/components/articles/pringles/pringles-article";
import { SiteHeader } from "@/components/home/site-header";

export const metadata: Metadata = {
  title: "The chip that required a geometry lesson",
  description:
    "Why a Pringle is a hyperbolic paraboloid — structure, stack, snap, and the factory line.",
};

export default function PringlesArticlePage() {
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
        <PringlesArticle />
        <ArticleReadMore currentSlug="pringles" />
      </div>
    </>
  );
}
