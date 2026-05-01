import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { RafaelAraujoArticle } from "@/components/articles/rafael-araujo-geometrical-masterpieces/rafael-araujo-article";
import { SiteHeader } from "@/components/home/site-header";

const OG_IMAGE =
  "https://pub-57855d8f88704d1cafba485f1b715e8d.r2.dev/Rafael%20Araujo%E2%80%99s%20Geometrical%20Drawings.webp";

export const metadata: Metadata = {
  title: "Rafael Araujo's 20+ Mesmerizing Geometrical Masterpieces — Abakcus",
  description:
    "To celebrate Rafael Araujo's talent and vision, we have curated a selection of his most stunning hand-drawn illustrations, showcasing the elegance and intricacy of the Golden Ratio in nature.",
  keywords: [
    "Rafael Araujo",
    "Rafael Araujo geometrical drawings",
    "golden ratio art",
    "Fibonacci spiral drawing",
    "hand-drawn mathematical art",
    "golden ratio coloring book",
    "phyllotaxis illustration",
    "nautilus shell geometry",
    "mathematical illustration",
    "golden spiral art",
    "Blueprint Araujo",
    "geometric masterpieces",
  ],
  openGraph: {
    title: "Rafael Araujo's 20+ Mesmerizing Geometrical Masterpieces",
    description:
      "To celebrate Rafael Araujo's talent and vision, we have curated a selection of his most stunning hand-drawn illustrations, showcasing the elegance and intricacy of the Golden Ratio in nature.",
    type: "article",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafael Araujo's 20+ Mesmerizing Geometrical Masterpieces",
    description:
      "To celebrate Rafael Araujo's talent and vision, we have curated a selection of his most stunning hand-drawn illustrations, showcasing the elegance and intricacy of the Golden Ratio in nature.",
    images: [OG_IMAGE],
  },
};

export default function RafaelAraujoPage() {
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
        <RafaelAraujoArticle />
        <ArticleReadMore currentSlug="rafael-araujo-geometrical-masterpieces" />
      </div>
    </>
  );
}
