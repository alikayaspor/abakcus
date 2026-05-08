import type { Metadata } from "next";
import { SudokuMathematicsArticle } from "@/components/articles/sudoku-mathematics/sudoku-mathematics-article";

const CANONICAL = "https://abakcus.com/articles/sudoku-mathematics";
const OG_IMAGE =
  "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/The%20Mathematics%20of%20Sudoku.png";

export const metadata: Metadata = {
  title: "The Mathematics of Sudoku — Abakcus",
  description:
    "On counting all valid 9×9 grids (6.7 sextillion), solving algorithms (simple backtracking vs. Crook's pencil-and-paper method), and why Sudoku is fundamentally a graph coloring problem.",
  authors: [{ name: "Ali Kaya" }],
  keywords: [
    "mathematics of sudoku",
    "sudoku graph coloring",
    "sudoku counting grids",
    "Crook's algorithm",
    "sudoku backtracking",
    "combinatorics puzzles",
    "graph theory",
    "17-clue sudoku",
    "Felgenhauer Jarvis",
    "sudoku algorithms",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "The Mathematics of Sudoku",
    description:
      "Counting 6.7 sextillion grids, solving with Crook's pencil-and-paper algorithm, and understanding why Sudoku is a graph coloring problem.",
    url: CANONICAL,
    siteName: "Abakcus",
    type: "article",
    publishedTime: "2026-04-17",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 800,
        alt: "The Mathematics of Sudoku — grid, counting, and graph coloring",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Mathematics of Sudoku",
    description:
      "Counting 6.7 sextillion grids, Crook's pencil-and-paper algorithm, and why Sudoku is a graph coloring problem.",
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Mathematics of Sudoku",
  description:
    "On counting all valid 9×9 grids, solving algorithms, and why Sudoku is fundamentally a graph coloring problem.",
  datePublished: "2026-04-17",
  dateModified: "2026-04-17",
  author: {
    "@type": "Person",
    name: "Ali Kaya",
    url: "https://abakcus.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Abakcus",
    url: "https://abakcus.com",
  },
  image: OG_IMAGE,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": CANONICAL,
  },
  keywords:
    "mathematics of sudoku, graph coloring, combinatorics, Crook's algorithm, backtracking",
  articleSection: "Mathematics · Combinatorics",
};

export default function SudokuMathematicsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SudokuMathematicsArticle />
    </>
  );
}
