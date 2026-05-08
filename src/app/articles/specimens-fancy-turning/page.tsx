import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { SpecimensFancyTurningArticle } from "@/components/articles/specimens-fancy-turning/specimens-fancy-turning-article";
import { SiteHeader } from "@/components/home/site-header";

const CANONICAL = "https://abakcus.com/articles/specimens-fancy-turning";
const OG_IMAGE =
  "https://pub-98e13baa8ca84d53b2e3ee903a8fce62.r2.dev/Specimens%20of%20Fancy%20Turning%2012.webp";

export const metadata: Metadata = {
  title: "The Patterns No Hand Could Have Drawn — Specimens of Fancy Turning | Abakcus",
  description:
    "Victorian ornamental turning produced spirograph-like geometric forms of extraordinary precision — not drawn, not sculpted, but calculated by a geometric chuck lathe. Specimens of Fancy Turning is the catalog of what that machine could prove.",
  authors: [{ name: "Ali Kaya" }],
  keywords: [
    "Specimens of Fancy Turning",
    "ornamental turning",
    "geometric chuck",
    "Victorian mathematics",
    "lathe art",
    "epitrochoid",
    "hypotrochoid",
    "fancy turning",
    "Holtzapffel",
    "mathematical art",
    "spirograph geometry",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "The Patterns No Hand Could Have Drawn — Specimens of Fancy Turning",
    description:
      "Victorian ornamental turning produced spirograph-like geometric forms of extraordinary precision — not drawn, not sculpted, but calculated by a machine that ran on mathematics.",
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
        alt: "Specimens of Fancy Turning — Victorian geometric lathe patterns",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Patterns No Hand Could Have Drawn — Specimens of Fancy Turning",
    description:
      "Victorian ornamental turning produced spirograph-like geometric forms of extraordinary precision — not drawn, not sculpted, but calculated by a machine that ran on mathematics.",
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Patterns No Hand Could Have Drawn — Specimens of Fancy Turning",
  description:
    "Specimens of Fancy Turning documents Victorian geometric chuck lathe patterns — spirograph-like forms calculated, not drawn.",
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
    "Specimens of Fancy Turning, ornamental turning, geometric chuck, Victorian mathematics, epitrochoid",
  articleSection: "Mathematics · Victorian Art",
};

export default function SpecimensFancyTurningPage() {
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
        <SpecimensFancyTurningArticle />
        <ArticleReadMore currentSlug="specimens-fancy-turning" />
      </div>
    </>
  );
}
