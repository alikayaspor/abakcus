import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { KungFuMotionArticle } from "@/components/videos/kung-fu-motion-visualization/kung-fu-motion-article";
import { SiteHeader } from "@/components/home/site-header";

const OG_IMAGE =
  "https://pub-676f738e0a3948d19dc9defd954e36d5.r2.dev/Visualizing%20The%20Invisible%20Motions%20Of%20Kung%20Fu%202.webp";

export const metadata: Metadata = {
  title: "Kung Fu Motion Visualization: The Structure Inside Movement — Abakcus",
  description:
    "Tobias Gremmler used motion capture data from Kung Fu masters to turn movement into sculptural form. Velocity became matter. Time became fabric.",
  keywords: [
    "Kung Fu Motion Visualization",
    "Tobias Gremmler",
    "motion capture visualization",
    "MOCAP art",
    "data visualization art",
    "motion data sculpture",
    "Kung Fu data art",
    "IGA Hong Kong",
    "dynamic image systems",
  ],
  openGraph: {
    title: "Kung Fu Motion Visualization: The Structure Inside Movement",
    description:
      "Tobias Gremmler used motion capture data from Kung Fu masters to turn movement into sculptural form. Velocity became matter. Time became fabric.",
    type: "article",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kung Fu Motion Visualization: The Structure Inside Movement",
    description:
      "Tobias Gremmler used motion capture data from Kung Fu masters to turn movement into sculptural form. Velocity became matter. Time became fabric.",
    images: [OG_IMAGE],
  },
};

export default function KungFuMotionPage() {
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
        <KungFuMotionArticle />
        <ArticleReadMore currentSlug="kung-fu-motion-visualization" />
      </div>
    </>
  );
}

