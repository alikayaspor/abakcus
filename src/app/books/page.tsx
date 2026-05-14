import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/home/site-header";
import { SiteFooter } from "@/components/home/site-footer";

export const metadata: Metadata = {
  title: "Books — Abakcus",
  description:
    "Math, science, and voices that reward slow pages — the shelf we steal from between essays.",
  alternates: {
    canonical: "/books",
  },
};

type Book = {
  slug: string;
  title: string;
  author: string;
  year: string;
  publisher: string;
  dek: string;
  href: string;
  image: string;
  section: "mathematics" | "physics" | "other";
  publishedAt: string;
};

const ALL_BOOKS: Book[] = [
  {
    slug: "infinite-powers",
    title: "Infinite Powers",
    author: "Steven Strogatz",
    year: "2019",
    publisher: "Houghton Mifflin Harcourt",
    dek: "Newton didn't invent calculus. Archimedes was doing it in the third century BC. Strogatz proves this — and then shows how the infinity principle shaped everything from Neptune's discovery to gravitational waves.",
    href: "/books/infinite-powers",
    image:
      "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/Infinite%20Powers%20by%20Steven%20Strogatz.webp",
    section: "mathematics",
    publishedAt: "2026-05-13",
  },
  {
    slug: "introduction-to-mathematical-philosophy",
    title: "Introduction to Mathematical Philosophy",
    author: "Bertrand Russell",
    year: "1919",
    publisher: "George Allen & Unwin",
    dek: "Written in Brixton Prison in 1918. What is the number 3? Russell takes six months and 208 pages to answer it with precision.",
    href: "/books/introduction-to-mathematical-philosophy",
    image:
      "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/Introduction%20to%20Mathematical%20Philosophy%20by%20Bertrand%20Russell.png",
    section: "mathematics",
    publishedAt: "2026-05-06",
  },
  {
    slug: "islamic-geometric-patterns-eric-broug",
    title: "Islamic Geometric Patterns",
    author: "Eric Broug",
    year: "2008 / 2019",
    publisher: "Thames & Hudson",
    dek: "A compass, a ruler, and 1,400 years of quiet geometry. 23 patterns from real buildings — from Córdoba to Samarkand.",
    href: "/books/islamic-geometric-patterns-eric-broug",
    image:
      "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/Islamic%20Geometric%20Patterns%20by%20Eric%20Broug.jpg",
    section: "mathematics",
    publishedAt: "2026-05-07",
  },
  {
    slug: "oliver-byrne-euclid",
    title: "The First Six Books of the Elements of Euclid",
    author: "Oliver Byrne",
    year: "1847 / 2010",
    publisher: "TASCHEN",
    dek: "Red, yellow, blue, black. Euclid in colour. Before Mondrian, before the Bauhaus.",
    href: "/books/oliver-byrne-euclid",
    image:
      "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/Oliver%20Byrne%20%E2%80%93%20The%20First%20Six%20Books%20of%20the%20Elements%20of%20Euclid.webp",
    section: "mathematics",
    publishedAt: "2025-12-01",
  },
  {
    slug: "pasta-by-design",
    title: "Pasta by Design",
    author: "George L. Legendre",
    year: "2011",
    publisher: "Thames & Hudson",
    dek: "92 pasta shapes. 3 parametric equations each. 2 trig functions. No recipes at all.",
    href: "/books/pasta-by-design",
    image:
      "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/Pasta%20by%20Design.jpg",
    section: "mathematics",
    publishedAt: "2025-11-01",
  },
  {
    slug: "geometry-of-pasta",
    title: "The Geometry of Pasta",
    author: "Caz Hildebrand & Jacob Kenedy",
    year: "2010",
    publisher: "Boxtree",
    dek: "Shape is not aesthetic — shape is the mathematics of flavour.",
    href: "/books/geometry-of-pasta",
    image:
      "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/The%20Geometry%20of%20Pasta.jpg",
    section: "mathematics",
    publishedAt: "2025-10-01",
  },
  {
    slug: "fractal-geometry-of-nature",
    title: "The Fractal Geometry of Nature",
    author: "Benoît B. Mandelbrot",
    year: "1982",
    publisher: "W. H. Freeman",
    dek: "A new geometry for a world that was never smooth. Clouds, coastlines, veins — all described at last.",
    href: "/books/fractal-geometry-of-nature",
    image:
      "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/The%20Fractal%20Geometry%20of%20Nature%20%E2%80%94%20Benoi%CC%82t%20B.%20Mandelbrot.jpg",
    section: "mathematics",
    publishedAt: "2025-07-01",
  },
  // ── Technology & AI ──────────────────────────────────────────────────────
  {
    slug: "how-smart-machines-think",
    title: "How Smart Machines Think",
    author: "Sean Gerrish",
    year: "2018",
    publisher: "MIT Press",
    dek: "Written before ChatGPT existed. The foundations it explains — reinforcement learning, ensemble methods, recommendation systems — are still the floor every modern AI stands on.",
    href: "/books/how-smart-machines-think",
    image:
      "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/How%20Smart%20Machines%20Think%20by%20Sean%20Gerrish.jpg",
    section: "other" as const,
    publishedAt: "2026-05-08",
  },
  {
    slug: "overview-benjamin-grant",
    title: "Overview: A New Perspective of Earth",
    author: "Benjamin Grant",
    year: "2016",
    publisher: "Ten Speed Press",
    dek: "200 satellite images from DigitalGlobe. Beauty first, then the caption. The gap between those two things is where the book actually lives.",
    href: "/books/overview-benjamin-grant",
    image:
      "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/A%20New%20Perspective%20of%20Earth%20by%20Benjamin%20Grant.webp",
    section: "other" as const,
    publishedAt: "2026-05-13",
  },
  // ── Physics ──────────────────────────────────────────────────────────────
  {
    slug: "when-einstein-walked-with-godel",
    title: "When Einstein Walked with Gödel",
    author: "Jim Holt",
    year: "2018",
    publisher: "Farrar, Straus and Giroux",
    dek: "The biggest questions in mathematics, physics, and philosophy — told like stories worth losing sleep over.",
    href: "/books/when-einstein-walked-with-godel",
    image:
      "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/When%20Einstein%20Walked%20with%20Go%CC%88del-%20Excursions%20to%20the%20Edge%20of%20Thought.jpg",
    section: "physics",
    publishedAt: "2025-08-01",
  },
  {
    slug: "surely-youre-joking-mr-feynman",
    title: "Surely You're Joking, Mr. Feynman!",
    author: "Richard P. Feynman",
    year: "1985",
    publisher: "W. W. Norton",
    dek: "Cracked safes, bongo drums, and a Nobel Prize. The book that proves curiosity is a rigorous enough occupation on its own.",
    href: "/books/surely-youre-joking-mr-feynman",
    image:
      "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/Surely%20You%E2%80%99re%20Joking%2C%20Mr.%20Feynman!%20by%20Richard%20Feynman.jpg",
    section: "physics",
    publishedAt: "2025-05-01",
  },
  // ── Education & Others ───────────────────────────────────────────────────
  {
    slug: "lifelong-kindergarten",
    title: "Lifelong Kindergarten",
    author: "Mitchel Resnick",
    year: "2017",
    publisher: "MIT Press",
    dek: "Why kindergarteners are the most creative. And how to stay that way forever.",
    href: "/books/lifelong-kindergarten",
    image:
      "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/Lifelong%20Kindergarten-%20Cultivating%20Creativity%20Through%20Projects%2C%20Passion%2C%20Peers%2C%20and%20Play.jpg",
    section: "other",
    publishedAt: "2025-06-01",
  },
  {
    slug: "the-art-and-science-of-ernst-haeckel",
    title: "The Art and Science of Ernst Haeckel",
    author: "Rainer Willmann & Julia Voss",
    year: "2017",
    publisher: "TASCHEN",
    dek: "450 plates. Radiolarians, jellyfish, ferns. Art Nouveau before Art Nouveau had a name.",
    href: "/books/the-art-and-science-of-ernst-haeckel",
    image:
      "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/The%20Art%20and%20Science%20of%20Ernst%20Haeckel%20by%20TASCHEN.png",
    section: "other",
    publishedAt: "2025-09-01",
  },
];

const SECTIONS: {
  key: Book["section"];
  label: string;
  dek: string;
  maxItems?: number;
}[] = [
  {
    key: "mathematics",
    label: "Mathematics",
    dek: "Proofs, patterns, and the unreasonable effectiveness of numbers.",
    maxItems: 10,
  },
  {
    key: "physics",
    label: "Physics",
    dek: "From quantum foam to the arrow of time.",
  },
  {
    key: "other",
    label: "Education & Others",
    dek: "Learning, wonder, and the books that don't fit neatly anywhere else.",
  },
];

const PASTEL_BORDERS = [
  "var(--pastel-sky)",
  "var(--pastel-rose)",
  "var(--pastel-lime)",
  "var(--pastel-peach)",
  "var(--pastel-lavender)",
];

function BookCard({ book, index }: { book: Book; index: number }) {
  const borderColor = PASTEL_BORDERS[index % PASTEL_BORDERS.length];
  return (
    <Link
      href={book.href}
      prefetch={false}
      className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-white shadow-[var(--shadow-soft)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
      style={{ border: `2px solid ${borderColor}` }}
    >
      <div className="w-full overflow-hidden">
        <Image
          src={book.image}
          alt={`${book.title} — ${book.author}`}
          width={400}
          height={533}
          unoptimized={book.image.endsWith(".png")}
          className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(max-width:640px) 48vw, (max-width:1024px) 32vw, 20vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-3">
        <p className="font-serif text-sm font-semibold leading-snug text-[var(--ink)] sm:text-base">
          {book.title}
        </p>
        <p className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-[var(--ink-muted)]">
          {book.author}
        </p>
        <p className="mt-1 font-serif text-sm leading-relaxed text-[var(--ink-muted)]">
          {book.dek}
        </p>
      </div>
    </Link>
  );
}

export default function BooksPage() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* ── PAGE HEADER ── */}
        <header className="border-b border-[var(--line-soft)] bg-[var(--tonal)] py-14 md:py-20">
          <div className="mx-auto max-w-[var(--page-max)] px-[var(--page-pad)] text-center">
            <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[var(--ink-muted)]">
              Reading list
            </p>
            <h1 className="mt-4 font-serif text-[clamp(2rem,5vw,3.5rem)] font-normal leading-[1.15] tracking-tight text-[var(--ink)]">
              Long reads, bound.
            </h1>
            <p className="mx-auto mt-4 max-w-xl font-serif text-base leading-relaxed text-[var(--ink-muted)] sm:text-lg">
              Math, science, and voices that reward slow pages — the shelf we
              steal from between essays.
            </p>
          </div>
        </header>

        {/* ── SECTIONS ── */}
        <div className="mx-auto max-w-[var(--page-max)] divide-y divide-[var(--line-soft)] px-[var(--page-pad)] py-16 md:py-24">
          {SECTIONS.map((section) => {
            const books = ALL_BOOKS.filter((b) => b.section === section.key)
              .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt))
              .slice(0, section.maxItems ?? Infinity);
            if (books.length === 0) return null;
            return (
              <section key={section.key} className="py-12 first:pt-0 last:pb-0 md:py-16">
                <header className="mb-8 md:mb-10">
                  <h2 className="font-serif text-[clamp(1.25rem,2.5vw,1.75rem)] font-normal tracking-tight text-[var(--ink)]">
                    {section.label}
                  </h2>
                  <p className="mt-1.5 font-serif text-sm leading-relaxed text-[var(--ink-muted)] sm:text-base">
                    {section.dek}
                  </p>
                </header>
                <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 md:grid-cols-4 md:gap-5 lg:grid-cols-5 lg:gap-6">
                  {books.map((book, i) => (
                    <li key={book.slug}>
                      <BookCard book={book} index={i} />
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
