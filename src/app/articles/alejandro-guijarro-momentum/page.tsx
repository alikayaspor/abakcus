import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { AlejandroGuijarroMomentumArticle } from "@/components/articles/alejandro-guijarro-momentum/alejandro-guijarro-momentum-article";
import { SiteHeader } from "@/components/home/site-header";

const CANONICAL =
  "https://abakcus.com/articles/alejandro-guijarro-momentum";
const OG_IMAGE =
  "https://pub-98e13baa8ca84d53b2e3ee903a8fce62.r2.dev/Alejandro%20Guijarro%20Physics%20Blackboards%201.jpg";

export const metadata: Metadata = {
  title: "The Equations That Forgot They Were Equations | Abakcus",
  description:
    "Alejandro Guijarro spent three years photographing quantum mechanics blackboards at Cambridge, Stanford, Oxford, CERN, and Berkeley. The result is Momentum — a series that asks whether science and abstraction were ever really different things.",
  authors: [{ name: "Ali Kaya" }],
  alternates: { canonical: CANONICAL },
  keywords: [
    "Alejandro Guijarro",
    "Momentum photography series",
    "quantum mechanics blackboard",
    "blackboard photography",
    "physics art",
    "contemporary photography",
    "abstract art",
    "CERN",
    "Cambridge physics",
    "Stanford blackboard",
    "science photography",
  ],
  openGraph: {
    title: "The Equations That Forgot They Were Equations — Alejandro Guijarro's Momentum",
    description:
      "Alejandro Guijarro spent three years photographing quantum mechanics blackboards at Cambridge, Stanford, Oxford, CERN, and Berkeley. The result asks whether science and abstraction were ever really different.",
    url: CANONICAL,
    siteName: "Abakcus",
    type: "article",
    publishedTime: "2026-05-05",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 800,
        alt: "Alejandro Guijarro — Momentum series, quantum mechanics blackboard at Cambridge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Equations That Forgot They Were Equations — Alejandro Guijarro",
    description:
      "Three years, 8+ institutions, 20 photographs. Guijarro photographed quantum mechanics blackboards at Cambridge, Oxford, CERN, and Stanford.",
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "The Equations That Forgot They Were Equations — Alejandro Guijarro's Momentum",
  description:
    "Alejandro Guijarro spent three years photographing quantum mechanics blackboards at Cambridge, Stanford, Oxford, CERN, and Berkeley — a photography series called Momentum.",
  datePublished: "2026-05-05",
  dateModified: "2026-05-05",
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
    "Alejandro Guijarro, Momentum, quantum mechanics blackboard, physics art, blackboard photography",
  articleSection: "Photography · Science",
};

export default function AlejandroGuijarroMomentumPage() {
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
        <AlejandroGuijarroMomentumArticle />
        <ArticleReadMore currentSlug="alejandro-guijarro-momentum" />
      </div>
    </>
  );
}
