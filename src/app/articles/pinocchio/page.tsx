import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { PinocchioArticle } from "@/components/articles/pinocchio/pinocchio-article";
import { SiteHeader } from "@/components/home/site-header";

export const metadata: Metadata = {
  title: "13 lies, one snapped neck — the physics of Pinocchio",
  description:
    "A 2014 Leicester paper asked how many lies Pinocchio could tell before Newtonian mechanics broke his neck. The answer: thirteen — and a 208-metre nose.",
};

export default function PinocchioArticlePage() {
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
        <PinocchioArticle />
        <ArticleReadMore currentSlug="pinocchio" />
      </div>
    </>
  );
}
