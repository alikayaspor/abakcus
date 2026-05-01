import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { MathDocumentariesArticle } from "@/components/articles/math-documentaries/math-documentaries-article";
import { SiteHeader } from "@/components/home/site-header";

export const metadata: Metadata = {
  title: "25 Beautiful Math Documentaries to Make Students Love Mathematics — Abakcus",
  description:
    "A Trip to Infinity, The Proof, N Is a Number, Secrets of the Surface — 25 mathematics documentaries that show the other face of the subject: obsession, beauty, and the particular madness of chasing a question.",
  keywords: [
    "math documentaries",
    "mathematics documentaries",
    "best math documentaries",
    "Paul Erdős documentary",
    "Andrew Wiles documentary",
    "Maryam Mirzakhani documentary",
    "N is a Number",
    "The Proof documentary",
    "math films for students",
    "mathematical films",
  ],
  openGraph: {
    title: "25 Beautiful Math Documentaries to Make Students Love Mathematics",
    description:
      "A Trip to Infinity, The Proof, N Is a Number — 25 documentaries that show the other face of mathematics: obsession, beauty, and the particular madness of chasing a question.",
    type: "article",
    images: [
      "https://pub-57855d8f88704d1cafba485f1b715e8d.r2.dev/25%20Beautiful%20Math%20Documentaries%20to%20Make%20Students%20Love%20Mathematic.png",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "25 Beautiful Math Documentaries to Make Students Love Mathematics",
    description:
      "A Trip to Infinity, The Proof, N Is a Number — 25 documentaries that show the other face of mathematics: obsession, beauty, and the particular madness of chasing a question.",
    images: [
      "https://pub-57855d8f88704d1cafba485f1b715e8d.r2.dev/25%20Beautiful%20Math%20Documentaries%20to%20Make%20Students%20Love%20Mathematic.png",
    ],
  },
};

export default function MathDocumentariesPage() {
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
        <MathDocumentariesArticle />
        <ArticleReadMore currentSlug="25-beautiful-math-documentaries-to-love-math" />
      </div>
    </>
  );
}
