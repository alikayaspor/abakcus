import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { TamingTheGardenArticle } from "@/components/videos/taming-the-garden/taming-the-garden-article";
import { SiteHeader } from "@/components/home/site-header";

export const metadata: Metadata = {
  title: "Taming the Garden — Salomé Jashi, 2021",
  description:
    "A Georgian billionaire had over 200 ancient trees uprooted and shipped to his private garden. Salomé Jashi filmed what this looks like from the ground.",
};

export default function TamingTheGardenPage() {
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
        <TamingTheGardenArticle />
        <ArticleReadMore currentSlug="taming-the-garden" />
      </div>
    </>
  );
}
