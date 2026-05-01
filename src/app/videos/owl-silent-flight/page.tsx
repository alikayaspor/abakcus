import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { OwlSilentFlightArticle } from "@/components/videos/owl-silent-flight/owl-silent-flight-article";
import { SiteHeader } from "@/components/home/site-header";

const OG_IMAGE = "https://img.youtube.com/vi/-WigEGNnuTE/maxresdefault.jpg";

export const metadata: Metadata = {
  title: "The Owl That Isn't There — BBC Natural World",
  description:
    "A bird moves through air as though the air has agreed to stay quiet. Three overlapping noise-cancellation systems, sixty million years in the making.",
  openGraph: {
    title: "The Owl That Isn't There — BBC Natural World",
    description:
      "Three overlapping noise-cancellation systems, sixty million years in the making. The physics of owl silent flight.",
    type: "article",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Owl That Isn't There — BBC Natural World",
    description:
      "A bird crosses a field at night, and the air keeps its secret.",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: "/videos/owl-silent-flight",
  },
};

export default function OwlSilentFlightPage() {
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
        <OwlSilentFlightArticle />
        <ArticleReadMore currentSlug="owl-silent-flight" />
      </div>
    </>
  );
}
