import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { RamboFoxArticle } from "@/components/articles/rambo-fox/rambo-fox-article";
import { SiteHeader } from "@/components/home/site-header";

export const metadata: Metadata = {
  title: "One fox. Four years. Zero apologies.",
  description:
    "A single red fox in the Pilliga held off a multi-million-dollar eradication effort — traps, baits, dogs, and a rewritten conservation plan.",
};

export default function RamboFoxArticlePage() {
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
        <RamboFoxArticle />
        <ArticleReadMore currentSlug="rambo-fox" />
      </div>
    </>
  );
}
