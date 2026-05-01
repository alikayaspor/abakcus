import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { CymaticsNigelStanfordArticle } from "@/components/videos/cymatics-nigel-stanford/cymatics-nigel-stanford-article";
import { SiteHeader } from "@/components/home/site-header";

export const metadata: Metadata = {
  title: "Sound Has a Shape — Nigel Stanford, Cymatics, 2014",
  description:
    "Nigel Stanford spent months building instruments that don't play music — they reveal it. Five physics experiments, one music video, and the wave equation made visible.",
};

export default function CymaticsNigelStanfordPage() {
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
        <CymaticsNigelStanfordArticle />
        <ArticleReadMore currentSlug="cymatics-nigel-stanford" />
      </div>
    </>
  );
}
