import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { PringlesArticle } from "@/components/articles/pringles/pringles-article";
import { SiteHeader } from "@/components/home/site-header";

const CANONICAL = "https://abakcus.com/articles/pringles";
const OG_IMAGE =
  "https://pub-5aa87426ad334d0495bf29d914b5ce1b.r2.dev/Geometry%20Behind%20Pringles.webp";

export const metadata: Metadata = {
  title: "The Chip That Required a Geometry Lesson — The Mathematics of Pringles | Abakcus",
  description:
    "A Pringle is a hyperbolic paraboloid — the same doubly-curved saddle surface used in architecture and engineering. Here is why that shape stacks, snaps, and ships the way it does.",
  authors: [{ name: "Ali Kaya" }],
  keywords: [
    "Pringles hyperbolic paraboloid",
    "geometry of Pringles",
    "saddle surface mathematics",
    "doubly curved surface",
    "hyperbolic paraboloid chip",
    "Pringles shape",
    "mathematics food",
    "differential geometry",
    "Gaussian curvature",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "The Chip That Required a Geometry Lesson — The Mathematics of Pringles",
    description:
      "A Pringle is a hyperbolic paraboloid — structure, stack, snap, and the factory line all follow from the geometry.",
    url: CANONICAL,
    siteName: "Abakcus",
    type: "article",
    publishedTime: "2026-04-10",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 800,
        alt: "The geometry behind Pringles — hyperbolic paraboloid shape",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Chip That Required a Geometry Lesson — The Mathematics of Pringles",
    description:
      "A Pringle is a hyperbolic paraboloid — structure, stack, snap, and the factory line all follow from the geometry.",
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Chip That Required a Geometry Lesson — The Mathematics of Pringles",
  description:
    "A Pringle is a hyperbolic paraboloid — doubly curved, stackable, and structurally sound. Here is the geometry behind the chip.",
  datePublished: "2026-04-10",
  dateModified: "2026-04-10",
  author: {
    "@type": "Person",
    name: "Ali Kaya",
    url: "https://abakcus.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Abakcus",
    url: "https://abakcus.com",
  },
  image: OG_IMAGE,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": CANONICAL,
  },
  keywords:
    "Pringles, hyperbolic paraboloid, saddle surface, differential geometry, Gaussian curvature",
  articleSection: "Mathematics · Geometry",
};

export default function PringlesArticlePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <div className="uc-page-bg pb-4">
        <div className="mx-auto max-w-[var(--page-max)] px-[var(--page-pad)] pt-6">
          <Link
            href="/articles"
            className="inline-flex text-sm text-[var(--ink-muted)] underline-offset-4 hover:underline"
          >
            ← All articles
          </Link>
        </div>
        <PringlesArticle />
        <ArticleReadMore currentSlug="pringles" />
      </div>
    </>
  );
}
