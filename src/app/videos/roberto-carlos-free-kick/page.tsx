import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { RobertoCarlosArticle } from "@/components/videos/roberto-carlos/roberto-carlos-article";
import { SiteHeader } from "@/components/home/site-header";

const OG_IMAGE =
  "https://pub-676f738e0a3948d19dc9defd954e36d5.r2.dev/Roberto%20Carlos%20Frekick.png";

export const metadata: Metadata = {
  title: "The Free Kick That Took 13 Years to Explain — Roberto Carlos",
  description:
    "On June 3, 1997, Roberto Carlos kicked a ball at 136 km/h with 14 revolutions per second of spin. The Magnus effect did the rest. Four French physicists spent 13 years explaining it.",
  openGraph: {
    title: "The Free Kick That Took 13 Years to Explain — Roberto Carlos",
    description:
      "136 km/h. 14 revolutions per second. 35 metres. Physics took until 2010.",
    type: "article",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Free Kick That Took 13 Years to Explain",
    description:
      "Roberto Carlos's impossible goal finally explained — the spinning ball spiral.",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: "/videos/roberto-carlos-free-kick",
  },
};

export default function RobertoCarlosFreekickPage() {
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
        <RobertoCarlosArticle />
        <ArticleReadMore currentSlug="roberto-carlos-free-kick" />
      </div>
    </>
  );
}
