import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { PinocchioArticle } from "@/components/articles/pinocchio/pinocchio-article";
import { SiteHeader } from "@/components/home/site-header";

const CANONICAL = "https://abakcus.com/articles/pinocchio";
const OG_IMAGE =
  "https://pub-5aa87426ad334d0495bf29d914b5ce1b.r2.dev/Pinocchio.jpg";

export const metadata: Metadata = {
  title: "13 Lies, One Snapped Neck — The Physics of Pinocchio | Abakcus",
  description:
    "A 2014 Leicester paper asked how many lies Pinocchio could tell before Newtonian mechanics broke his neck. The answer: thirteen — and a 208-metre nose.",
  authors: [{ name: "Ali Kaya" }],
  keywords: [
    "Pinocchio physics",
    "how many lies Pinocchio",
    "Pinocchio nose mechanics",
    "Leicester physics paper",
    "exponential nose growth",
    "Newtonian mechanics Pinocchio",
    "Journal of Physics Special Topics",
    "biomechanics fiction",
    "science humor",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "13 Lies, One Snapped Neck — The Physics of Pinocchio",
    description:
      "A Leicester physics paper calculated how many lies Pinocchio could tell before his nose snapped his neck. The answer: 13.",
    url: CANONICAL,
    siteName: "Abakcus",
    type: "article",
    publishedTime: "2026-04-11",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 800,
        alt: "Pinocchio — the physics of exponential nose growth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "13 Lies, One Snapped Neck — The Physics of Pinocchio",
    description:
      "A Leicester physics paper calculated how many lies Pinocchio could tell before his nose snapped his neck. The answer: 13.",
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "13 Lies, One Snapped Neck — The Physics of Pinocchio",
  description:
    "Applying Newtonian mechanics to Pinocchio's nose growth — a Leicester paper calculated the maximum number of lies before structural failure.",
  datePublished: "2026-04-11",
  dateModified: "2026-04-11",
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
    "Pinocchio physics, nose mechanics, exponential growth, Newtonian mechanics, Leicester paper",
  articleSection: "Physics · Mathematics",
};

export default function PinocchioArticlePage() {
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
        <PinocchioArticle />
        <ArticleReadMore currentSlug="pinocchio" />
      </div>
    </>
  );
}
