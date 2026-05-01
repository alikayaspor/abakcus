import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { KilledByGoogleArticle } from "@/components/tools/killed-by-google/killed-by-google-article";
import { SiteHeader } from "@/components/home/site-header";

export const metadata: Metadata = {
  title: "299 Products. One Graveyard. — Killed by Google",
  description:
    "Google has retired 299 products since 2006. The average lifespan: 5.2 years. A data visualization of all of them — and the two corporate decisions that explain most of the timeline.",
};

export default function KilledByGooglePage() {
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
        <KilledByGoogleArticle />
        <ArticleReadMore currentSlug="killed-by-google" />
      </div>
    </>
  );
}
