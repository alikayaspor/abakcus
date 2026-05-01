import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { OkazakiMatchstickArticle } from "@/components/videos/okazaki-matchstick/okazaki-matchstick-article";
import { SiteHeader } from "@/components/home/site-header";

const OG_IMAGE =
  "https://pub-676f738e0a3948d19dc9defd954e36d5.r2.dev/Tomohiro%20Okazaki's%20Matches.png";

export const metadata: Metadata = {
  title: "The Matchstick That Refused to Be Still — Tomohiro Okazaki",
  description:
    "Tokyo graphic designer Tomohiro Okazaki transforms the most resolved object in the world into a stop-motion study of transformation. One object, one surface, no special effects.",
  openGraph: {
    title: "The Matchstick That Refused to Be Still — Tomohiro Okazaki",
    description:
      "One object, one surface, no special effects — and an entire taxonomy of transformation.",
    type: "article",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Matchstick That Refused to Be Still",
    description:
      "What can a rigid thing become if you are patient enough, and precise enough, and willing to cut it into small enough pieces?",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: "/videos/okazaki-matchstick",
  },
};

export default function OkazakiMatchstickPage() {
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
        <OkazakiMatchstickArticle />
        <ArticleReadMore currentSlug="okazaki-matchstick" />
      </div>
    </>
  );
}
