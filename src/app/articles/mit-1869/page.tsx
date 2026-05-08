import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { Mit1869Article } from "@/components/articles/mit-1869/mit-1869-article";
import { SiteHeader } from "@/components/home/site-header";

const CANONICAL = "https://abakcus.com/articles/mit-1869";
const OG_IMAGE =
  "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/MIT%27s%201869%20algebra%20entrance%20exam.png";

export const metadata: Metadata = {
  title: "MIT's 1869 Algebra Entrance Exam — Seven Questions That Haven't Changed — Abakcus",
  description:
    "In 1869, MIT held its first formal entrance exam. Seven algebra questions, June 7, 1869. The questions a student had to answer to get into MIT over 150 years ago are almost identical to the ones students answer today.",
  authors: [{ name: "Ali Kaya" }],
  keywords: [
    "MIT 1869 entrance exam",
    "MIT algebra exam",
    "MIT history",
    "algebra history",
    "mathematics history",
    "1869 entrance exam",
    "MIT admissions history",
    "history of math education",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "MIT's 1869 Algebra Entrance Exam — Seven Questions That Haven't Changed",
    description:
      "Seven algebra questions, June 7, 1869. The questions a student had to answer to get into MIT over 150 years ago are almost identical to the ones students answer today.",
    url: CANONICAL,
    siteName: "Abakcus",
    type: "article",
    publishedTime: "2026-04-13",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 800,
        alt: "MIT's 1869 algebra entrance exam — seven original questions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MIT's 1869 Algebra Entrance Exam — Seven Questions That Haven't Changed",
    description:
      "Seven algebra questions, June 7, 1869. The questions a student had to answer to get into MIT over 150 years ago are almost identical to the ones students answer today.",
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "MIT's 1869 Algebra Entrance Exam — Seven Questions That Haven't Changed",
  description:
    "MIT's first formal entrance exam from 1869 — seven algebra questions that remain essentially unchanged today.",
  datePublished: "2026-04-13",
  dateModified: "2026-04-13",
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
    "MIT 1869 entrance exam, algebra history, mathematics education, MIT history",
  articleSection: "Mathematics · History of Education",
};

export default function Mit1869Page() {
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
        <Mit1869Article />
        <ArticleReadMore currentSlug="mit-1869" />
      </div>
    </>
  );
}
