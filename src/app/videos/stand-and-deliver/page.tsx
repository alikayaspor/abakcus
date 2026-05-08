import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { StandAndDeliverArticle } from "@/components/videos/stand-and-deliver/stand-and-deliver-article";
import { SiteHeader } from "@/components/home/site-header";

const OG_IMAGE =
  "https://pub-676f738e0a3948d19dc9defd954e36d5.r2.dev/Stand%20And%20Deliver.jpg";

export const metadata: Metadata = {
  title: "Stand and Deliver (1988) — The Testing Board Assumed They Cheated",
  description:
    "Stand and Deliver tells the story of Jaime Escalante. But the real story is harder, darker, and far more interesting than the film lets on.",
  keywords: [
    "Stand and Deliver",
    "Jaime Escalante",
    "Edward James Olmos",
    "Garfield High School",
    "AP Calculus",
    "math education film",
    "1988 film",
    "Ramón Menéndez",
    "East Los Angeles",
  ],
  openGraph: {
    title: "Stand and Deliver (1988) — The Testing Board Assumed They Cheated",
    description:
      "Eighteen students passed the AP Calculus exam. The testing board called almost immediately: the scores were invalidated. They had studied together.",
    type: "article",
    images: [{ url: OG_IMAGE, width: 800, height: 1067, alt: "Stand and Deliver — 1988 film poster" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stand and Deliver (1988) — Ramón Menéndez",
    description:
      "The most important math film ever made — not because it's accurate, but because it's honest about what the subject can do for a person told it isn't for them.",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: "/videos/stand-and-deliver",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Review",
  itemReviewed: {
    "@type": "Movie",
    name: "Stand and Deliver",
    dateCreated: "1988",
    director: { "@type": "Person", name: "Ramón Menéndez" },
    actor: [
      { "@type": "Person", name: "Edward James Olmos" },
      { "@type": "Person", name: "Lou Diamond Phillips" },
    ],
  },
  reviewBody:
    "Stand and Deliver tells the story of Jaime Escalante — but softens certain edges to do it. The real story is harder and more interesting: students who worked hard were assumed to be cheating, the program was ground down as it grew, and the man behind it started over at forty-three with unrecognized credentials.",
  author: { "@type": "Organization", name: "Abakcus" },
  reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
};

export default function StandAndDeliverPage() {
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
            href="/"
            className="inline-flex text-sm text-[var(--ink-muted)] underline-offset-4 hover:underline"
          >
            ← Back to home
          </Link>
        </div>
        <StandAndDeliverArticle />
        <ArticleReadMore currentSlug="stand-and-deliver" />
      </div>
    </>
  );
}
