import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { GoodWillHuntingArticle } from "@/components/videos/good-will-hunting/good-will-hunting-article";
import { SiteHeader } from "@/components/home/site-header";

const OG_IMAGE =
  "https://pub-676f738e0a3948d19dc9defd954e36d5.r2.dev/Good%20Will%20Hunting.webp";

export const metadata: Metadata = {
  title: "Good Will Hunting (1997) — A Film About Genius That Ignores the Math",
  description:
    "A janitor at MIT solves a research-level mathematics problem on a hallway chalkboard. The film is not about the mathematics. Gus Van Sant, Matt Damon, Robin Williams, 1997.",
  keywords: [
    "Good Will Hunting",
    "Gus Van Sant",
    "Matt Damon",
    "Robin Williams",
    "1997 film",
    "math genius film",
    "MIT mathematics movie",
    "Ben Affleck",
    "Academy Award screenplay",
  ],
  openGraph: {
    title: "Good Will Hunting (1997) — A Film About Genius That Ignores the Math",
    description:
      "A janitor at MIT solves a research-level math problem on a hallway chalkboard. The film is entirely uninterested in the mathematics. Dir. Gus Van Sant.",
    type: "article",
    images: [{ url: OG_IMAGE, width: 800, height: 1067, alt: "Good Will Hunting — 1997 film poster" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Good Will Hunting (1997) — Gus Van Sant",
    description:
      "A film about mathematics that is entirely uninterested in mathematics. It uses genius as a premise and spends two hours asking what you're supposed to do with one.",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: "/videos/good-will-hunting",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Review",
  itemReviewed: {
    "@type": "Movie",
    name: "Good Will Hunting",
    dateCreated: "1997",
    director: { "@type": "Person", name: "Gus Van Sant" },
    actor: [
      { "@type": "Person", name: "Matt Damon" },
      { "@type": "Person", name: "Robin Williams" },
      { "@type": "Person", name: "Ben Affleck" },
      { "@type": "Person", name: "Minnie Driver" },
      { "@type": "Person", name: "Stellan Skarsgård" },
    ],
  },
  reviewBody:
    "Good Will Hunting uses mathematical genius as a premise and spends two hours asking what you're supposed to do with one — and who gets to decide. The film is not really about the mathematics at all. It's about connection, trust, and the version of safety that looks like staying in South Boston forever.",
  author: { "@type": "Organization", name: "Abakcus" },
  reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
};

export default function GoodWillHuntingPage() {
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
        <GoodWillHuntingArticle />
        <ArticleReadMore currentSlug="good-will-hunting" />
      </div>
    </>
  );
}
