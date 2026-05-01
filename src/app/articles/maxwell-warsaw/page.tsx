import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { MaxwellWarsawArticle } from "@/components/articles/maxwell-warsaw/maxwell-warsaw-article";
import { SiteHeader } from "@/components/home/site-header";

export const metadata: Metadata = {
  title: "Four equations on a wall",
  description:
    "Warsaw University carved Maxwell’s equations into its physics library — integral form, in stone, at street level.",
};

export default function MaxwellWarsawArticlePage() {
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
        <MaxwellWarsawArticle />
        <ArticleReadMore currentSlug="maxwell-warsaw" />
      </div>
    </>
  );
}
