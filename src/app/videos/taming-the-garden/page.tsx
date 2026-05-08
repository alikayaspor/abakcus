import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { TamingTheGardenArticle } from "@/components/videos/taming-the-garden/taming-the-garden-article";
import { SiteHeader } from "@/components/home/site-header";

const CANONICAL = "https://abakcus.com/videos/taming-the-garden";
const OG_IMAGE =
  "https://pub-5aa87426ad334d0495bf29d914b5ce1b.r2.dev/taming%20the%20garden.jpeg";

export const metadata: Metadata = {
  title: "Taming the Garden — Salomé Jashi, 2021 | Abakcus",
  description:
    "A Georgian billionaire had over 200 ancient trees uprooted and shipped to his private estate. Salomé Jashi's documentary captures the surreal, silent spectacle — and the communities left behind.",
  authors: [{ name: "Ali Kaya" }],
  alternates: { canonical: CANONICAL },
  keywords: [
    "Taming the Garden",
    "Salomé Jashi",
    "Georgian documentary",
    "Bidzina Ivanishvili",
    "ancient trees documentary",
    "documentary film 2021",
    "environmental documentary",
    "tree transplanting Georgia",
  ],
  openGraph: {
    title: "Taming the Garden — Salomé Jashi, 2021",
    description:
      "A Georgian billionaire had over 200 ancient trees uprooted and shipped to his private estate. Salomé Jashi's documentary captures the surreal, silent spectacle — and the communities left behind.",
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
        alt: "Taming the Garden — a massive tree being transported on a barge across the Black Sea",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taming the Garden — Salomé Jashi, 2021",
    description:
      "A Georgian billionaire uprooted 200+ ancient trees for his private garden. Salomé Jashi filmed what this looks like from the ground.",
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Taming the Garden — Salomé Jashi, 2021",
  description:
    "A Georgian billionaire had over 200 ancient trees uprooted and shipped to his private estate. Salomé Jashi's documentary captures the surreal, silent spectacle — and the communities left behind.",
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
    "Taming the Garden, Salomé Jashi, Georgian documentary, ancient trees, Bidzina Ivanishvili",
  articleSection: "Documentary · Film",
};

export default function TamingTheGardenPage() {
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
            href="/videos"
            className="inline-flex text-sm text-[var(--ink-muted)] underline-offset-4 hover:underline"
          >
            ← All videos
          </Link>
        </div>
        <TamingTheGardenArticle />
        <ArticleReadMore currentSlug="taming-the-garden" />
      </div>
    </>
  );
}
