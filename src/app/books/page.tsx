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

const ALL_BOOKS = [
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
    tags: ["Education", "Creativity", "MIT Media Lab"],
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
    tags: ["Mathematics", "Design", "Architecture"],
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
    tags: ["Design", "Gastronomy", "Geometry", "Italian Cuisine"],
  },
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
    tags: ["Mathematics", "Philosophy", "Physics", "Essays"],
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
    tags: ["Mathematics", "Geometry", "Chaos Theory", "Natural Science"],
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
    tags: ["Natural History", "Illustration", "Art Nouveau", "TASCHEN"],
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
    tags: ["Mathematics", "Geometry", "Design History", "TASCHEN"],
  },
];

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

        {/* ── BOOK GRID ── */}
        <section className="mx-auto max-w-[var(--page-max)] px-[var(--page-pad)] py-16 md:py-24">
          <ul className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {ALL_BOOKS.map((book) => (
              <li key={book.slug}>
                <Link
                  href={book.href}
                  className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-[var(--line-soft)] bg-white shadow-[var(--shadow-soft)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]"
                >
                  <div className="w-full overflow-hidden">
                    <Image
                      src={book.image}
                      alt={`${book.title} — ${book.author}`}
                      width={400}
                      height={533}
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                      sizes="(max-width:640px) 48vw, (max-width:768px) 32vw, (max-width:1280px) 25vw, 20vw"
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
              </li>
            ))}
          </ul>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
