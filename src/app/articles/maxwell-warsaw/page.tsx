import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { MaxwellWarsawArticle } from "@/components/articles/maxwell-warsaw/maxwell-warsaw-article";
import { SiteHeader } from "@/components/home/site-header";

const CANONICAL = "https://abakcus.com/articles/maxwell-warsaw";
const OG_IMAGE =
  "https://pub-5aa87426ad334d0495bf29d914b5ce1b.r2.dev/Maxwell%E2%80%99s%20Equations%20on%20the%20Walls%20of%20Warsaw%20University%202.jpeg";

export const metadata: Metadata = {
  title: "Maxwell's Equations on the Walls of Warsaw University — Abakcus",
  description:
    "Warsaw University carved Maxwell's equations into its physics library — integral form, in stone, at street level. No apologies.",
  authors: [{ name: "Ali Kaya" }],
  keywords: [
    "Maxwell's equations",
    "Warsaw University physics library",
    "Maxwell equations stone",
    "physics architecture",
    "electromagnetic equations",
    "James Clerk Maxwell",
    "Warsaw physics",
    "science public art",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Maxwell's Equations on the Walls of Warsaw University",
    description:
      "Warsaw University carved Maxwell's equations into its physics library — integral form, in stone, at street level.",
    url: CANONICAL,
    siteName: "Abakcus",
    type: "article",
    publishedTime: "2026-04-07",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 800,
        alt: "Maxwell's equations carved in stone on Warsaw University physics library",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maxwell's Equations on the Walls of Warsaw University",
    description:
      "Warsaw University carved Maxwell's equations into its physics library — integral form, in stone, at street level.",
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Maxwell's Equations on the Walls of Warsaw University",
  description:
    "Warsaw University's physics library features Maxwell's equations carved in stone at street level — integral form, no apologies.",
  datePublished: "2026-04-07",
  dateModified: "2026-04-07",
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
    "Maxwell's equations, Warsaw University, physics library, stone carving, electromagnetism",
  articleSection: "Physics · Architecture",
};

export default function MaxwellWarsawArticlePage() {
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
        <MaxwellWarsawArticle />
        <ArticleReadMore currentSlug="maxwell-warsaw" />
      </div>
    </>
  );
}
