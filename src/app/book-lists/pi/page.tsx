import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { PiBooksList } from "@/components/book-lists/pi-books-list";
import { SiteHeader } from "@/components/home/site-header";

const CANONICAL = "https://abakcus.com/book-lists/pi";
const OG_IMAGE =
  "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/Six%20books%20that%20taught%20%CF%80%20how%20to%20misbehave.png";

export const metadata: Metadata = {
  title: "Six Books That Taught π How to Misbehave",
  description:
    "Beckmann, Blatner, Posamentier & Lehmann, Cheng, Ziemska, Neuschwander — six books that approach π from oblique angles: history, obsession, category theory, and one very well-timed pun.",
  authors: [{ name: "Abakcus" }],
  alternates: { canonical: CANONICAL },
  keywords: [
    "pi books",
    "books about pi",
    "mathematics books",
    "A History of Pi",
    "The Joy of Pi",
    "How to Bake Pi",
    "Eugenia Cheng",
    "irrational number",
    "pi reading list",
  ],
  openGraph: {
    title: "Six Books That Taught π How to Misbehave",
    description:
      "History, obsession, category theory — and Sir Cumference. Six books that refuse to settle for the tidy version of π.",
    url: CANONICAL,
    siteName: "Abakcus",
    type: "article",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Six Books That Taught π How to Misbehave — Abakcus book list",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Six Books That Taught π How to Misbehave",
    description:
      "History, obsession, category theory — and Sir Cumference. Six books that refuse to settle for the tidy version of π.",
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Six Books That Taught π How to Misbehave",
  description:
    "A curated list of six books about π — from Petr Beckmann's opinionated history to Eugenia Cheng's category theory detour.",
  url: CANONICAL,
  numberOfItems: 6,
  author: {
    "@type": "Organization",
    name: "Abakcus",
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
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "A History of π",
      author: "Petr Beckmann",
      url: "https://amzn.to/4tCHA9X",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "The Joy of π",
      author: "David Blatner",
      url: "https://amzn.to/4toPrrs",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "π: A Biography of the World's Most Mysterious Number",
      author: "Alfred S. Posamentier & Ingmar Lehmann",
      url: "https://amzn.to/41dGZPP",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "How to Bake π",
      author: "Eugenia Cheng",
      url: "https://amzn.to/47KFKLF",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Mandelbrot the Magnificent",
      author: "Liz Ziemska",
      url: "https://amzn.to/3PTaEeM",
    },
    {
      "@type": "ListItem",
      position: 6,
      name: "Sir Cumference and the First Round Table",
      author: "Cindy Neuschwander",
      url: "https://amzn.to/4vgjWRU",
    },
  ],
};

export default function PiBooksListPage() {
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
        <PiBooksList />
        <ArticleReadMore currentSlug="pi-books-list" />
      </div>
    </>
  );
}
