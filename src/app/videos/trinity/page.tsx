import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { TrinityArticle } from "@/components/videos/trinity/trinity-article";
import { SiteHeader } from "@/components/home/site-header";

const OG_IMAGE =
  "https://pub-676f738e0a3948d19dc9defd954e36d5.r2.dev/Trinity%20%E2%80%93%20Visualization%20of%20Nuclear%20Detonations.webp";

export const metadata: Metadata = {
  title: "Trinity — Every Nuclear Detonation in Human History, 1945–2010",
  description:
    "Orbital Mechanics' 2015 data visualization maps every recorded nuclear detonation from the Trinity test to North Korea's tests in 2009. Fourteen minutes. Two thousand flashes.",
  keywords: [
    "Trinity visualization",
    "nuclear detonations history",
    "Orbital Mechanics",
    "nuclear test visualization",
    "Cold War nuclear tests",
    "data visualization history",
    "Trinity test 1945",
    "nuclear weapons data",
  ],
  openGraph: {
    title: "Trinity — Every Nuclear Detonation in Human History, 1945–2010",
    description:
      "A fourteen-minute data visualization that maps every recorded nuclear detonation from 1945 to 2010. Two thousand flashes. The accumulation is the argument.",
    type: "article",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trinity — Every Nuclear Detonation in History",
    description:
      "Two thousand nuclear detonations mapped in fourteen minutes. Orbital Mechanics, 2015.",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: "/videos/trinity",
  },
};

export default function TrinityPage() {
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
        <TrinityArticle />
        <ArticleReadMore currentSlug="trinity" />
      </div>
    </>
  );
}
