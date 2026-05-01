import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { YukiKawaeArticle } from "@/components/videos/yuki-kawae/yuki-kawae-article";
import { SiteHeader } from "@/components/home/site-header";

const OG_IMAGE =
  "https://pub-676f738e0a3948d19dc9defd954e36d5.r2.dev/Yuki%20Kawae%20zen%20garden.jpg";

export const metadata: Metadata = {
  title: "A Drawing That Erases Itself — Yuki Kawae's Zen Garden",
  description:
    "Yuki Kawae spends hours raking intricate patterns into a sand garden in his apartment — then erases them. A 23-minute video that makes the calculations stop.",
  openGraph: {
    title: "A Drawing That Erases Itself — Yuki Kawae's Zen Garden",
    description:
      "A rake moves through sand for 23 minutes. By the end, nothing remains. That is the whole argument.",
    type: "article",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "A Drawing That Erases Itself — Yuki Kawae",
    description:
      "Yuki Kawae rakes patterns into a sand garden, then smooths them away. A meditative video that makes the calculations stop.",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: "/videos/yuki-kawae",
  },
};

export default function YukiKawaePage() {
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
        <YukiKawaeArticle />
        <ArticleReadMore currentSlug="yuki-kawae" />
      </div>
    </>
  );
}
