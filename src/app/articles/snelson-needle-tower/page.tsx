import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { NeedleTowerArticle } from "@/components/articles/needle-tower/needle-tower-article";
import { SiteHeader } from "@/components/home/site-header";

export const metadata: Metadata = {
  title:
    "Kenneth Snelson's Needle Tower: 60 Feet, Zero Contact — Abakcus",
  description:
    "Kenneth Snelson's Needle Tower stands 60 feet tall on 14 inches of ground contact. No aluminum tube inside it touches another. The whole thing holds up because of what isn't there.",
  keywords: [
    "Kenneth Snelson",
    "Needle Tower",
    "tensegrity",
    "floating compression",
    "Hirshhorn Museum",
    "sculpture",
    "mathematics",
    "Buckminster Fuller",
    "structural engineering",
    "aluminum sculpture",
  ],
  openGraph: {
    title: "Kenneth Snelson's Needle Tower: 60 Feet, Zero Contact",
    description:
      "60 feet tall, 14 inches of ground contact. No aluminum tube touches another. The whole thing holds up because of what isn't there.",
    type: "article",
    images: [
      "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/Kenneth%20Snelson%E2%80%99s%20Needle%20Tower.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenneth Snelson's Needle Tower: 60 Feet, Zero Contact",
    description:
      "60 feet tall, 14 inches of ground contact. No aluminum tube touches another. The whole thing holds up because of what isn't there.",
    images: [
      "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/Kenneth%20Snelson%E2%80%99s%20Needle%20Tower.jpg",
    ],
  },
};

export default function NeedleTowerPage() {
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
        <NeedleTowerArticle />
        <ArticleReadMore currentSlug="snelson-needle-tower" />
      </div>
    </>
  );
}
