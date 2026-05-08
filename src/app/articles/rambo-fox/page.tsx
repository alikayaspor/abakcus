import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { RamboFoxArticle } from "@/components/articles/rambo-fox/rambo-fox-article";
import { SiteHeader } from "@/components/home/site-header";

const CANONICAL = "https://abakcus.com/articles/rambo-fox";
const OG_IMAGE =
  "https://pub-5aa87426ad334d0495bf29d914b5ce1b.r2.dev/Rambo%20the%20Fox%202.jpeg";

export const metadata: Metadata = {
  title: "One Fox. Four Years. Zero Apologies. — Rambo the Fox | Abakcus",
  description:
    "A single red fox in the Pilliga held off a multi-million-dollar eradication effort for four years — traps, baits, dogs, and a rewritten conservation plan.",
  authors: [{ name: "Ali Kaya" }],
  keywords: [
    "Rambo the fox",
    "Pilliga fox",
    "red fox eradication",
    "New South Wales fox",
    "fox trapping failure",
    "invasive species Australia",
    "fox conservation",
    "wildlife management failure",
    "Australian fox problem",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "One Fox. Four Years. Zero Apologies. — Rambo the Fox",
    description:
      "A single red fox in the Pilliga held off a multi-million-dollar eradication effort for four years.",
    url: CANONICAL,
    siteName: "Abakcus",
    type: "article",
    publishedTime: "2026-04-06",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 800,
        alt: "Rambo the Fox — the red fox of the Pilliga",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "One Fox. Four Years. Zero Apologies. — Rambo the Fox",
    description:
      "A single red fox in the Pilliga held off a multi-million-dollar eradication effort for four years.",
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "One Fox. Four Years. Zero Apologies. — Rambo the Fox",
  description:
    "A single red fox in Australia's Pilliga forest held off an entire eradication programme for four years — traps, baits, dogs, and eventually a rewritten conservation plan.",
  datePublished: "2026-04-06",
  dateModified: "2026-04-06",
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
    "Rambo fox, Pilliga, red fox Australia, invasive species, wildlife management",
  articleSection: "Nature · Wildlife",
};

export default function RamboFoxArticlePage() {
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
        <RamboFoxArticle />
        <ArticleReadMore currentSlug="rambo-fox" />
      </div>
    </>
  );
}
