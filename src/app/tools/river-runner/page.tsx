import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { RiverRunnerArticle } from "@/components/tools/river-runner/river-runner-article";
import { SiteHeader } from "@/components/home/site-header";

export const metadata: Metadata = {
  title: "Every Raindrop Has a Destination — River Runner",
  description:
    "River Runner is an interactive map that traces the exact path of any raindrop — from the point it hits the ground to the ocean. Built by Sam Learner using USGS watershed data.",
};

export default function RiverRunnerPage() {
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
        <RiverRunnerArticle />
        <ArticleReadMore currentSlug="river-runner" />
      </div>
    </>
  );
}
