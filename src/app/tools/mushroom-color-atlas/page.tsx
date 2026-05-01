import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { MushroomColorAtlasArticle } from "@/components/tools/mushroom-color-atlas/mushroom-color-atlas-article";
import { SiteHeader } from "@/components/home/site-header";

const OG_IMAGE =
  "https://pub-3775c49696ac49478c024f66a3dbe50d.r2.dev/Mushroom%20Color%20Atlas.webp";

export const metadata: Metadata = {
  title: "The Color the Forest Already Had — Mushroom Color Atlas",
  description:
    "825 colors derived from 40+ dye mushrooms, catalogued by Julie Beeler. An interactive atlas of natural color that exists only because a specific fungus grew in a specific place.",
  openGraph: {
    title: "The Color the Forest Already Had — Mushroom Color Atlas",
    description:
      "825 colors. 40+ dye mushrooms. Every mordant, fiber, and condition documented. Julie Beeler's Mushroom Color Atlas.",
    type: "article",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Color the Forest Already Had — Mushroom Color Atlas",
    description:
      "Color that exists only because a specific mushroom grew in a specific place at a specific time.",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: "/tools/mushroom-color-atlas",
  },
};

export default function MushroomColorAtlasPage() {
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
        <MushroomColorAtlasArticle />
        <ArticleReadMore currentSlug="mushroom-color-atlas" />
      </div>
    </>
  );
}
