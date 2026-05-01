import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { PhysicsPostersArticle } from "@/components/articles/physics-posters/physics-posters-article";
import { SiteHeader } from "@/components/home/site-header";

export const metadata: Metadata = {
  title: "24 Beautiful Physics Poster Designs That Inspire You — Abakcus",
  description:
    "String theory, quantum mechanics, entropy, general relativity — 24 poster designs by 2046 Print Shop that turn physics concepts into beautiful objects worth hanging on a classroom wall.",
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
    type: "article",
    images: [
      "https://pub-57855d8f88704d1cafba485f1b715e8d.r2.dev/24%20Beautiful%20Physics%20Poster%20Designs%20That%20Inspire%20You.png",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "24 Beautiful Physics Poster Designs That Inspire You",
    description:
      "String theory, quantum mechanics, entropy, general relativity — 24 poster designs by 2046 Print Shop that turn physics concepts into beautiful objects worth hanging on a wall.",
    images: [
      "https://pub-57855d8f88704d1cafba485f1b715e8d.r2.dev/24%20Beautiful%20Physics%20Poster%20Designs%20That%20Inspire%20You.png",
    ],
  },
};

export default function PhysicsPostersPage() {
  return (
    <>
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
        <PhysicsPostersArticle />
        <ArticleReadMore currentSlug="24-beautiful-physics-poster-designs-that-inspire-you" />
      </div>
    </>
  );
}
