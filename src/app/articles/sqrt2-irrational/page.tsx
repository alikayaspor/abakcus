import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { Sqrt2IrrationalArticle } from "@/components/articles/sqrt2-irrational/sqrt2-irrational-article";
import { SiteHeader } from "@/components/home/site-header";

export const metadata: Metadata = {
  title: "A Number That Cannot Be the Smallest — A Proof That √2 Is Irrational",
  description:
    "Most proofs that √2 is irrational use prime factorization. This one uses something simpler: if a smallest natural number witnessing rationality existed, you could always find a smaller one — a contradiction by the well-ordering principle.",
  keywords: [
    "square root of 2 irrational",
    "well-ordering principle",
    "infinite descent",
    "number theory",
    "mathematical proof",
    "√2 rational proof",
    "irrationality proof",
    "Fermat descent",
    "natural numbers",
    "mathematical induction",
  ],
  openGraph: {
    title: "A Number That Cannot Be the Smallest — A Proof That √2 Is Irrational",
    description:
      "If √2 were rational, there would have to be a smallest natural number witnessing this. Then we show that number cannot exist.",
    type: "article",
    images: [
      "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/The%20Proof%20of%20Square%20Root%20of%202%20Irrational.webp",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A Number That Cannot Be the Smallest — A Proof That √2 Is Irrational",
    description:
      "If √2 were rational, there would have to be a smallest natural number witnessing this. Then we show that number cannot exist.",
    images: [
      "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/The%20Proof%20of%20Square%20Root%20of%202%20Irrational.webp",
    ],
  },
};

export default function Sqrt2IrrationalPage() {
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
        <Sqrt2IrrationalArticle />
        <ArticleReadMore currentSlug="sqrt2-irrational" />
      </div>
    </>
  );
}
