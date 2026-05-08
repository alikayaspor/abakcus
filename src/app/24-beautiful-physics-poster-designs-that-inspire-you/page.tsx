import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { PhysicsPostersArticle } from "@/components/articles/physics-posters/physics-posters-article";
import { SiteHeader } from "@/components/home/site-header";

const CANONICAL =
  "https://abakcus.com/24-beautiful-physics-poster-designs-that-inspire-you";
const OG_IMAGE =
  "https://pub-57855d8f88704d1cafba485f1b715e8d.r2.dev/24%20Beautiful%20Physics%20Poster%20Designs%20That%20Inspire%20You.png";

export const metadata: Metadata = {
  title: "24 Beautiful Physics Poster Designs That Inspire You | Abakcus",
  description:
    "String theory, quantum mechanics, entropy, general relativity — 24 poster designs by 2046 Print Shop that turn physics concepts into beautiful objects worth hanging on a classroom wall.",
  authors: [{ name: "Ali Kaya" }],
  alternates: { canonical: CANONICAL },
  keywords: [
    "physics poster designs",
    "physics posters",
    "2046 Print Shop physics",
    "quantum mechanics poster",
    "string theory poster",
    "general relativity poster",
    "thermodynamics poster",
    "physics classroom decor",
    "dark matter poster",
    "Newton laws of motion poster",
    "physics art print",
    "beautiful physics posters",
  ],
  openGraph: {
    title: "24 Beautiful Physics Poster Designs That Inspire You",
    description:
      "String theory, quantum mechanics, entropy, general relativity — 24 poster designs by 2046 Print Shop that turn physics concepts into beautiful objects worth hanging on a wall.",
    url: CANONICAL,
    siteName: "Abakcus",
    type: "article",
    publishedTime: "2025-01-01",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "24 Beautiful Physics Poster Designs — string theory, quantum mechanics, entropy, general relativity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "24 Beautiful Physics Poster Designs That Inspire You",
    description:
      "String theory, quantum mechanics, entropy, general relativity — 24 poster designs by 2046 Print Shop that turn physics concepts into beautiful objects worth hanging on a wall.",
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "24 Beautiful Physics Poster Designs That Inspire You",
  description:
    "String theory, quantum mechanics, entropy, general relativity — 24 poster designs by 2046 Print Shop that turn physics concepts into beautiful objects worth hanging on a classroom wall.",
  datePublished: "2025-01-01",
  dateModified: "2025-01-01",
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
    "physics posters, 2046 Print Shop, quantum mechanics poster, string theory poster, general relativity poster, thermodynamics poster, physics art print",
  articleSection: "Physics · Design",
};

export default function PhysicsPostersPage() {
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
        <PhysicsPostersArticle />
        <ArticleReadMore currentSlug="24-beautiful-physics-poster-designs-that-inspire-you" />
      </div>
    </>
  );
}
