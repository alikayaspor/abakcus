import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { RafaelAraujoArticle } from "@/components/articles/rafael-araujo-geometrical-masterpieces/rafael-araujo-article";
import { SiteHeader } from "@/components/home/site-header";

const CANONICAL =
  "https://abakcus.com/rafael-araujo-geometrical-masterpieces";
const OG_IMAGE =
  "https://pub-57855d8f88704d1cafba485f1b715e8d.r2.dev/Rafael%20Araujo%E2%80%99s%20Geometrical%20Drawings.webp";

export const metadata: Metadata = {
  title: "Rafael Araujo's 20+ Mesmerizing Geometrical Masterpieces — Abakcus",
  description:
    "Rafael Araujo is a Venezuelan architect who spends up to 100 hours per drawing, creating breathtaking golden-ratio illustrations entirely by hand — no computers, no CAD. A curated gallery of his most stunning works.",
  authors: [{ name: "Ali Kaya" }],
  alternates: { canonical: CANONICAL },
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
    "geometric masterpieces",
    "blueprint araujo",
  ],
  openGraph: {
    title: "Rafael Araujo's 20+ Mesmerizing Geometrical Masterpieces",
    description:
      "A Venezuelan architect who spends up to 100 hours per drawing, creating golden-ratio illustrations entirely by hand. No computers — just a compass, ruler, and protractor.",
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
        alt: "Rafael Araujo's hand-drawn geometrical masterpieces — golden ratio spirals and helix constructions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafael Araujo's 20+ Mesmerizing Geometrical Masterpieces",
    description:
      "A Venezuelan architect who spends up to 100 hours per drawing, creating golden-ratio illustrations entirely by hand. No computers — just a compass and protractor.",
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Rafael Araujo's 20+ Mesmerizing Geometrical Masterpieces",
  description:
    "Rafael Araujo is a Venezuelan architect and illustrator who has spent more than four decades producing drawings of breathtaking mathematical precision entirely by hand — golden ratio spirals, helixes, and phyllotaxis patterns.",
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
    "Rafael Araujo, golden ratio art, Fibonacci spiral, hand-drawn mathematical illustration",
  articleSection: "Mathematics · Art",
};

export default function RafaelAraujoPage() {
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
        <RafaelAraujoArticle />
        <ArticleReadMore currentSlug="rafael-araujo-geometrical-masterpieces" />
      </div>
    </>
  );
}
