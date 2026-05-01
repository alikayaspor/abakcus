import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { Rushmore1998Article } from "@/components/videos/rushmore-1998/rushmore-1998-article";
import { SiteHeader } from "@/components/home/site-header";

const OG_IMAGE =
  "https://pub-676f738e0a3948d19dc9defd954e36d5.r2.dev/Rushmore.jpg";

export const metadata: Metadata = {
  title: "Rushmore (1998) — Wes Anderson",
  description:
    "Max Fischer is failing every class at Rushmore Academy. He is also the founder of eleven clubs. Wes Anderson's best argument that how you spend your attention is who you are.",
  openGraph: {
    title: "Rushmore (1998) — Wes Anderson",
    description:
      "Max Fischer is failing every class. He is also founder of eleven clubs. Jason Schwartzman, Bill Murray, Olivia Williams.",
    type: "article",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rushmore (1998) — Wes Anderson",
    description:
      "A student who fails everything and saves the thing he loves. Wes Anderson's second film.",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: "/videos/rushmore-1998",
  },
};

export default function Rushmore1998Page() {
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
        <Rushmore1998Article />
        <ArticleReadMore currentSlug="rushmore-1998" />
      </div>
    </>
  );
}
