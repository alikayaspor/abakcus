import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { YourNameInLandsatArticle } from "@/components/tools/your-name-in-landsat/your-name-in-landsat-article";
import { SiteHeader } from "@/components/home/site-header";

const OG_IMAGE =
  "https://pub-3775c49696ac49478c024f66a3dbe50d.r2.dev/Your%20Name%20in%20Landsat.png";

export const metadata: Metadata = {
  title: "Your Name, Written by Earth — NASA's Landsat Tool",
  description:
    "NASA's interactive tool spells out your name using real Landsat satellite images of Earth. Every letter is a real place with real coordinates — and kids absolutely lose it when they see theirs.",
  openGraph: {
    title: "Your Name, Written by Earth — NASA's Landsat Tool",
    description:
      "Type your name. Watch the planet spell it back. Each letter is a real satellite photograph of Earth's surface — a mountain ridge, a salt flat, a river bend.",
    type: "article",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name, Written by Earth — NASA's Landsat Tool",
    description:
      "NASA's interactive tool spells out your name using real Landsat satellite images. Every letter is a real place.",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: "/tools/your-name-in-landsat",
  },
};

export default function YourNameInLandsatPage() {
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
        <YourNameInLandsatArticle />
        <ArticleReadMore currentSlug="your-name-in-landsat" />
      </div>
    </>
  );
}
