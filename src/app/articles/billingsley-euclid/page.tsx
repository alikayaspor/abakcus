import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { BillingsleyEuclidArticle } from "@/components/articles/billingsley-euclid/billingsley-euclid-article";
import { SiteHeader } from "@/components/home/site-header";

export const metadata: Metadata = {
  title: "Paper that stands up",
  description:
    "Henry Billingsley’s 1570 English Euclid — pop-up solids, folded paper, and a lesson that still doesn’t need a headset.",
};

export default function BillingsleyEuclidArticlePage() {
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
        <BillingsleyEuclidArticle />
        <ArticleReadMore currentSlug="billingsley-euclid" />
      </div>
    </>
  );
}
