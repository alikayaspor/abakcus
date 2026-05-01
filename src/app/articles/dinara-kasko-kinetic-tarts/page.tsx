import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { DinaraKaskoArticle } from "@/components/articles/dinara-kasko-kinetic-tarts/dinara-kasko-article";
import { SiteHeader } from "@/components/home/site-header";

export const metadata: Metadata = {
  title: "Dinara Kasko's Geometrical Kinetic Tarts — Sculpture You Eat",
  description:
    "Ukrainian pastry chef Dinara Kasko and Miami artist José Margulis turned kinetic sculpture into edible geometry — four tarts made from CNC-cut chocolate, almond sponge, and the philosophy of disappearance.",
  keywords: [
    "Dinara Kasko",
    "kinetic tarts",
    "geometric cake",
    "CNC chocolate",
    "José Margulis",
    "edible sculpture",
    "parametric pastry",
    "SoGood Magazine",
  ],
  openGraph: {
    title: "Dinara Kasko's Geometrical Kinetic Tarts — Sculpture You Eat",
    description:
      "When an architect becomes a pastry chef, cake surfaces become the domain of differential geometry.",
    type: "article",
    images: [
      "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/Dinara%20Kasko%20Geometrical%20Kinetic%20Tarts%20.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dinara Kasko's Geometrical Kinetic Tarts — Sculpture You Eat",
    description:
      "Four tarts built like kinetic sculptures, then eaten. CNC-cut chocolate, parametric geometry, and the philosophy of disappearance.",
    images: [
      "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/Dinara%20Kasko%20Geometrical%20Kinetic%20Tarts%20.jpg",
    ],
  },
  alternates: {
    canonical: "https://abakcus.com/articles/dinara-kasko-kinetic-tarts",
  },
};

export default function DinaraKaskoArticlePage() {
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
        <DinaraKaskoArticle />
        <ArticleReadMore currentSlug="dinara-kasko-kinetic-tarts" />
      </div>
    </>
  );
}
