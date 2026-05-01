import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { Mit1869Article } from "@/components/articles/mit-1869/mit-1869-article";
import { SiteHeader } from "@/components/home/site-header";

export const metadata: Metadata = {
  title: "MIT's 1869 algebra entrance exam — seven questions that haven't changed",
  description:
    "In 1869, MIT held its first formal entrance exam. Seven algebra questions, June 7, 1869. The questions a kid had to answer to get into MIT 157 years ago are almost identical to the ones kids answer today.",
};

export default function Mit1869Page() {
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
        <Mit1869Article />
        <ArticleReadMore currentSlug="mit-1869" />
      </div>
    </>
  );
}
