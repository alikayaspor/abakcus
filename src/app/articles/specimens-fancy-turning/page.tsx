import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { SpecimensFancyTurningArticle } from "@/components/articles/specimens-fancy-turning/specimens-fancy-turning-article";
import { SiteHeader } from "@/components/home/site-header";

export const metadata: Metadata = {
  title: "The Patterns No Hand Could Have Drawn — Specimens of Fancy Turning",
  description:
    "Victorian ornamental turning produced spirograph-like geometric forms of extraordinary precision — not drawn, not sculpted, but calculated by a geometric chuck lathe. Specimens of Fancy Turning is the catalog of what that machine could prove.",
  keywords: [
    "Specimens of Fancy Turning",
    "ornamental turning",
    "geometric chuck",
    "Victorian mathematics",
    "lathe art",
    "epitrochoid",
    "hypotrochoid",
    "fancy turning",
    "Holtzapffel",
    "mathematical art",
    "spirograph geometry",
  ],
  openGraph: {
    title: "The Patterns No Hand Could Have Drawn — Specimens of Fancy Turning",
    description:
      "Victorian ornamental turning produced spirograph-like geometric forms of extraordinary precision — not drawn, not sculpted, but calculated by a machine that ran on mathematics.",
    type: "article",
    images: [
      "https://pub-98e13baa8ca84d53b2e3ee903a8fce62.r2.dev/Specimens%20of%20Fancy%20Turning%2012.webp",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Patterns No Hand Could Have Drawn — Specimens of Fancy Turning",
    description:
      "Victorian ornamental turning produced spirograph-like geometric forms of extraordinary precision — not drawn, not sculpted, but calculated by a machine that ran on mathematics.",
    images: [
      "https://pub-98e13baa8ca84d53b2e3ee903a8fce62.r2.dev/Specimens%20of%20Fancy%20Turning%2012.webp",
    ],
  },
};

export default function SpecimensFancyTurningPage() {
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
        <SpecimensFancyTurningArticle />
        <ArticleReadMore currentSlug="specimens-fancy-turning" />
      </div>
    </>
  );
}
