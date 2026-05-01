import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { FeynmanOdeToAFlowerArticle } from "@/components/videos/feynman-ode-to-a-flower/feynman-ode-to-a-flower-article";
import { SiteHeader } from "@/components/home/site-header";

const OG_IMAGE =
  "https://pub-676f738e0a3948d19dc9defd954e36d5.r2.dev/Richard%20Feynman%20-%20Ode%20To%20A%20Flower.webp";

export const metadata: Metadata = {
  title: "Ode to a Flower — Richard Feynman",
  description:
    "In two minutes, Feynman dismantles the idea that science strips nature of beauty. Understanding a flower doesn't subtract from it — it multiplies.",
  openGraph: {
    title: "Ode to a Flower — Richard Feynman",
    description:
      "In two minutes, Feynman dismantles the idea that science strips nature of beauty. Understanding a flower doesn't subtract from it — it multiplies.",
    type: "article",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ode to a Flower — Richard Feynman",
    description:
      "Understanding a flower doesn't subtract from its beauty — it multiplies it. Feynman, in two minutes.",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: "/videos/feynman-ode-to-a-flower",
  },
};

export default function FeynmanOdeToAFlowerPage() {
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
        <FeynmanOdeToAFlowerArticle />
        <ArticleReadMore currentSlug="feynman-ode-to-a-flower" />
      </div>
    </>
  );
}
