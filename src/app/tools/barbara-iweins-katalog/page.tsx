import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { BarbaraIweinsKatalogArticle } from "@/components/tools/barbara-iweins-katalog/barbara-iweins-katalog-article";
import { SiteHeader } from "@/components/home/site-header";

export const metadata: Metadata = {
  title: "12,795 Objects, One Life — Barbara Iweins' Katalog",
  description:
    "Belgian photographer Barbara Iweins spent five years photographing every single object she owns — all 12,795 of them. What started as coping became a radical inventory of a life.",
};

export default function BarbaraIweinsKatalogPage() {
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
        <BarbaraIweinsKatalogArticle />
        <ArticleReadMore currentSlug="barbara-iweins-katalog" />
      </div>
    </>
  );
}
