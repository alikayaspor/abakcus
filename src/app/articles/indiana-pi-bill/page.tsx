import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { IndianaPiBillArticle } from "@/components/articles/indiana-pi-bill/indiana-pi-bill-article";
import { SiteHeader } from "@/components/home/site-header";

export const metadata: Metadata = {
  title: "The legislature that tried to vote on π",
  description:
    "In 1897, Indiana’s House passed a bill that implied π = 3.2 — until a Purdue mathematician happened to be in the building.",
};

export default function IndianaPiBillArticlePage() {
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
        <IndianaPiBillArticle />
        <ArticleReadMore currentSlug="indiana-pi-bill" />
      </div>
    </>
  );
}
