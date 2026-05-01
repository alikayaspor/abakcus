import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { LosCronocrimenesArticle } from "@/components/videos/los-cronocrimenes/los-cronocrimenes-article";
import { SiteHeader } from "@/components/home/site-header";

const OG_IMAGE =
  "https://pub-676f738e0a3948d19dc9defd954e36d5.r2.dev/Los-Cronocrimenes.jpg";

export const metadata: Metadata = {
  title: "Los Cronocrímenes (Timecrimes) — Nacho Vigalondo, 2007",
  description:
    "A bathtub full of white liquid. One nervous man. One hour, looped. Nacho Vigalondo's Timecrimes is the most airtight time-travel film ever made on a $2.6 million budget.",
  openGraph: {
    title: "Los Cronocrímenes (Timecrimes) — Nacho Vigalondo, 2007",
    description:
      "A bathtub full of white liquid. One nervous man. One hour, looped. Nacho Vigalondo's Timecrimes is the most airtight time-travel film ever made on a $2.6 million budget.",
    type: "article",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Los Cronocrímenes (Timecrimes) — Nacho Vigalondo, 2007",
    description:
      "Four characters, one hour, no exit. The most airtight time-loop film ever made on a shoestring.",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: "/videos/los-cronocrimenes",
  },
};

export default function LosCronocrimenesPage() {
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
        <LosCronocrimenesArticle />
        <ArticleReadMore currentSlug="los-cronocrimenes" />
      </div>
    </>
  );
}
