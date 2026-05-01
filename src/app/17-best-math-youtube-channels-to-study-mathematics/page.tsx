import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { MathYouTubeChannelsArticle } from "@/components/articles/math-youtube-channels/math-youtube-channels-article";
import { SiteHeader } from "@/components/home/site-header";

export const metadata: Metadata = {
  title: "Five Channels That Make You Love Mathematics — Abakcus",
  description:
    "Numberphile, 3Blue1Brown, Eddie Woo, Socratica, Khan Academy — five YouTube channels built by people who loved mathematics first, and only then turned the camera on.",
  keywords: [
    "best math YouTube channels",
    "mathematics YouTube",
    "3Blue1Brown",
    "Numberphile",
    "Eddie Woo",
    "Socratica",
    "Khan Academy",
    "learn mathematics online",
    "math videos",
    "study mathematics YouTube",
  ],
  openGraph: {
    title: "Five Channels That Make You Love Mathematics",
    description:
      "Numberphile, 3Blue1Brown, Eddie Woo, Socratica, Khan Academy — five YouTube channels built by people who loved mathematics first, and only then turned the camera on.",
    type: "article",
    images: [
      "https://pub-57855d8f88704d1cafba485f1b715e8d.r2.dev/Five%20Channels%20That%20Make%20You%20Love%20Mathematics.png",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Five Channels That Make You Love Mathematics",
    description:
      "Numberphile, 3Blue1Brown, Eddie Woo, Socratica, Khan Academy — five YouTube channels built by people who loved mathematics first, and only then turned the camera on.",
    images: [
      "https://pub-57855d8f88704d1cafba485f1b715e8d.r2.dev/Five%20Channels%20That%20Make%20You%20Love%20Mathematics.png",
    ],
  },
};

export default function MathYouTubeChannelsPage() {
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
        <MathYouTubeChannelsArticle />
        <ArticleReadMore currentSlug="17-best-math-youtube-channels-to-study-mathematics" />
      </div>
    </>
  );
}
