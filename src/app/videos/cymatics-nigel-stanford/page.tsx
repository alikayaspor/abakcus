import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { CymaticsNigelStanfordArticle } from "@/components/videos/cymatics-nigel-stanford/cymatics-nigel-stanford-article";
import { SiteHeader } from "@/components/home/site-header";

const CANONICAL = "https://abakcus.com/videos/cymatics-nigel-stanford";
const OG_IMAGE =
  "https://pub-676f738e0a3948d19dc9defd954e36d5.r2.dev/Cymatics.webp";

export const metadata: Metadata = {
  title: "Cymatics: Sound Has a Shape — Nigel Stanford | Abakcus",
  description:
    "Nigel Stanford spent months building instruments that don't play music — they reveal it. Five physics experiments, one music video, and the wave equation made visible.",
  authors: [{ name: "Ali Kaya" }],
  alternates: { canonical: CANONICAL },
  keywords: [
    "cymatics",
    "Nigel Stanford",
    "cymatics music video",
    "sound visualization",
    "Chladni plate",
    "standing waves",
    "ferrofluid",
    "Ruben's tube",
    "wave equation",
    "physics music",
    "Solar Echoes",
  ],
  openGraph: {
    title: "Cymatics: Sound Has a Shape — Nigel Stanford, 2014",
    description:
      "Nigel Stanford spent months building instruments that don't play music — they reveal it. Five physics experiments, one music video, and the wave equation made visible.",
    url: CANONICAL,
    siteName: "Abakcus",
    type: "article",
    publishedTime: "2026-04-19",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 800,
        alt: "Chladni plate pattern — sand forming geometric shapes on a vibrating metal plate, from Nigel Stanford's Cymatics video",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cymatics: Sound Has a Shape — Nigel Stanford, 2014",
    description:
      "Five physics experiments, one music video. Sand, vodka, water, fire, and iron — all revealing the wave equation.",
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cymatics: Sound Has a Shape — Nigel Stanford, 2014",
  description:
    "Nigel Stanford spent months building instruments that don't play music — they reveal it. Five physics experiments, one music video, and the wave equation made visible.",
  datePublished: "2026-04-19",
  dateModified: "2026-04-19",
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
    "cymatics, Nigel Stanford, sound visualization, Chladni plate, wave equation, physics music",
  articleSection: "Physics · Music",
};

export default function CymaticsNigelStanfordPage() {
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
        <CymaticsNigelStanfordArticle />
        <ArticleReadMore currentSlug="cymatics-nigel-stanford" />
      </div>
    </>
  );
}
