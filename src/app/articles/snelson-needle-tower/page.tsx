import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { NeedleTowerArticle } from "@/components/articles/needle-tower/needle-tower-article";
import { SiteHeader } from "@/components/home/site-header";

const CANONICAL = "https://abakcus.com/articles/snelson-needle-tower";
const OG_IMAGE =
  "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/Kenneth%20Snelson%E2%80%99s%20Needle%20Tower.jpg";

export const metadata: Metadata = {
  title: "Kenneth Snelson's Needle Tower: 60 Feet, Zero Contact — Abakcus",
  description:
    "Kenneth Snelson's Needle Tower stands 60 feet tall on 14 inches of ground contact. No aluminum tube inside it touches another. The whole thing holds up because of what isn't there.",
  authors: [{ name: "Ali Kaya" }],
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
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "Kenneth Snelson's Needle Tower: 60 Feet, Zero Contact",
    description:
      "60 feet tall, 14 inches of ground contact. No aluminum tube touches another. The whole thing holds up because of what isn't there.",
    url: CANONICAL,
    siteName: "Abakcus",
    type: "article",
    publishedTime: "2026-04-21",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 800,
        alt: "Kenneth Snelson's Needle Tower at the Hirshhorn Museum, Washington D.C.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenneth Snelson's Needle Tower: 60 Feet, Zero Contact",
    description:
      "60 feet tall, 14 inches of ground contact. No aluminum tube touches another. The whole thing holds up because of what isn't there.",
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Kenneth Snelson's Needle Tower: 60 Feet, Zero Contact",
  description:
    "Kenneth Snelson's Needle Tower stands 60 feet tall with 14 inches of ground contact. No tube touches another — tensegrity in its purest form.",
  datePublished: "2026-04-21",
  dateModified: "2026-04-21",
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
    "Kenneth Snelson, Needle Tower, tensegrity, floating compression, Hirshhorn, sculpture",
  articleSection: "Art & Mathematics · Sculpture",
};

export default function NeedleTowerPage() {
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
        <NeedleTowerArticle />
        <ArticleReadMore currentSlug="snelson-needle-tower" />
      </div>
    </>
  );
}
