import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { AlejandroGuijarroMomentumArticle } from "@/components/articles/alejandro-guijarro-momentum/alejandro-guijarro-momentum-article";
import { SiteHeader } from "@/components/home/site-header";

export const metadata: Metadata = {
  title: "The Equations That Forgot They Were Equations — Alejandro Guijarro's Momentum",
  description:
    "Alejandro Guijarro spent three years photographing quantum mechanics blackboards at Cambridge, Stanford, Oxford, CERN, and Berkeley. The result is Momentum — a series that asks whether science and abstraction were ever really different things.",
  keywords: [
    "Alejandro Guijarro",
    "Momentum",
    "quantum mechanics blackboard",
    "blackboard photography",
    "physics art",
    "contemporary photography",
    "abstract art",
    "CERN",
    "Cambridge",
    "Stanford",
  ],
  openGraph: {
    title: "The Equations That Forgot They Were Equations — Alejandro Guijarro's Momentum",
    description:
      "Alejandro Guijarro spent three years photographing quantum mechanics blackboards. The result asks whether science and abstraction were ever really different.",
    type: "article",
    images: [
      "https://pub-98e13baa8ca84d53b2e3ee903a8fce62.r2.dev/Alejandro%20Guijarro%20Physics%20Blackboards%201.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Equations That Forgot They Were Equations — Alejandro Guijarro's Momentum",
    description:
      "Alejandro Guijarro spent three years photographing quantum mechanics blackboards at Cambridge, Oxford, CERN, and Stanford.",
    images: [
      "https://pub-98e13baa8ca84d53b2e3ee903a8fce62.r2.dev/Alejandro%20Guijarro%20Physics%20Blackboards%201.jpg",
    ],
  },
};

export default function AlejandroGuijarroMomentumPage() {
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
        <AlejandroGuijarroMomentumArticle />
        <ArticleReadMore currentSlug="alejandro-guijarro-momentum" />
      </div>
    </>
  );
}
