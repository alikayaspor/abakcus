import { PASTEL } from "./pastel-palette";

export type BookFeatured = {
  slug: string;
  title: string;
  author: string;
  dek: string;
  href: string;
  image: string;
  pageColor: string;
  publishedAt: string;
};

export type BookShelfItem = {
  slug: string;
  title: string;
  author: string;
  dek: string;
  href: string;
  image: string;
  pageColor: string;
  publishedAt: string;
};

/** Hero pick — large cover, long line */
export const booksFeatured: BookFeatured = {
  slug: "oliver-byrne-euclid",
  title: "The First Six Books of the Elements of Euclid",
  author: "Oliver Byrne · TASCHEN",
  dek: "Red, yellow, blue, black. Euclid in colour. Before Mondrian, before the Bauhaus — 1847.",
  href: "/books/oliver-byrne-euclid",
  image:
    "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/Oliver%20Byrne%20%E2%80%93%20The%20First%20Six%20Books%20of%20the%20Elements%20of%20Euclid.webp",
  pageColor: PASTEL.peach,
  publishedAt: "2025-12-01",
};

/** Four-up shelf — math, science, wonder */
export const booksShelf: BookShelfItem[] = [
  {
    slug: "islamic-geometric-patterns-eric-broug",
    title: "Islamic Geometric Patterns",
    author: "Eric Broug",
    dek: "A compass, a ruler, and 1,400 years of quiet geometry. 23 patterns from real buildings.",
    href: "/books/islamic-geometric-patterns-eric-broug",
    image:
      "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/Islamic%20Geometric%20Patterns%20by%20Eric%20Broug.jpg",
    pageColor: PASTEL.lime,
    publishedAt: "2026-05-07",
  },
  {
    slug: "pasta-by-design",
    title: "Pasta by Design",
    author: "George L. Legendre",
    dek: "92 pasta shapes. 3 parametric equations each. No recipes at all.",
    href: "/books/pasta-by-design",
    image:
      "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/Pasta%20by%20Design.jpg",
    pageColor: PASTEL.lavender,
    publishedAt: "2025-11-01",
  },
  {
    slug: "geometry-of-pasta",
    title: "The Geometry of Pasta",
    author: "Caz Hildebrand & Jacob Kenedy",
    dek: "Shape is not aesthetic — shape is the mathematics of flavour.",
    href: "/books/geometry-of-pasta",
    image:
      "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/The%20Geometry%20of%20Pasta.jpg",
    pageColor: PASTEL.rose,
    publishedAt: "2025-10-01",
  },
  {
    slug: "pi-books-list",
    title: "Six Books That Taught π How to Misbehave",
    author: "Book list",
    dek: "History, obsession, category theory, a novella — and a knight named Sir Cumference.",
    href: "/book-lists/books-about-pi",
    image:
      "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/Six%20books%20that%20taught%20%CF%80%20how%20to%20misbehave.png",
    pageColor: PASTEL.sky,
    publishedAt: "2026-01-01",
  },
  {
    slug: "the-art-and-science-of-ernst-haeckel",
    title: "The Art and Science of Ernst Haeckel",
    author: "Willmann & Voss · TASCHEN",
    dek: "450 plates. Radiolarians, jellyfish, ferns. Art Nouveau before Art Nouveau had a name.",
    href: "/books/the-art-and-science-of-ernst-haeckel",
    image:
      "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/The%20Art%20and%20Science%20of%20Ernst%20Haeckel%20by%20TASCHEN.png",
    pageColor: PASTEL.lime,
    publishedAt: "2025-09-01",
  },
  {
    slug: "when-einstein-walked-with-godel",
    title: "When Einstein Walked with Gödel",
    author: "Jim Holt",
    dek: "The biggest questions in math and physics — told like stories worth losing sleep over.",
    href: "/books/when-einstein-walked-with-godel",
    image:
      "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/When%20Einstein%20Walked%20with%20Go%CC%88del-%20Excursions%20to%20the%20Edge%20of%20Thought.jpg",
    pageColor: PASTEL.lavender,
    publishedAt: "2025-08-01",
  },
  {
    slug: "fractal-geometry-of-nature",
    title: "The Fractal Geometry of Nature",
    author: "Benoît B. Mandelbrot",
    dek: "A new geometry for a world that was never smooth. Clouds, coastlines, veins — all described at last.",
    href: "/books/fractal-geometry-of-nature",
    image:
      "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/The%20Fractal%20Geometry%20of%20Nature%20%E2%80%94%20Benoi%CC%82t%20B.%20Mandelbrot.jpg",
    pageColor: PASTEL.sky,
    publishedAt: "2025-07-01",
  },
  {
    slug: "lifelong-kindergarten",
    title: "Lifelong Kindergarten",
    author: "Mitchel Resnick",
    dek: "Why kindergarteners are the most creative. And how to stay that way forever.",
    href: "/books/lifelong-kindergarten",
    image:
      "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/Lifelong%20Kindergarten-%20Cultivating%20Creativity%20Through%20Projects%2C%20Passion%2C%20Peers%2C%20and%20Play.jpg",
    pageColor: PASTEL.lavender,
    publishedAt: "2025-06-01",
  },
  {
    slug: "infinite-powers",
    title: "Infinite Powers",
    author: "Steven Strogatz",
    dek: "Newton didn't invent calculus. Archimedes was doing it in the third century BC. Strogatz proves this — chapter by chapter.",
    href: "/books/infinite-powers",
    image:
      "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/Infinite%20Powers%20by%20Steven%20Strogatz.webp",
    pageColor: PASTEL.lavender,
    publishedAt: "2026-05-13",
  },
  {
    slug: "surely-youre-joking-mr-feynman",
    title: "Surely You're Joking, Mr. Feynman!",
    author: "Richard P. Feynman",
    dek: "Cracked safes, bongo drums, and a Nobel Prize. The book that proves curiosity is a rigorous enough occupation on its own.",
    href: "/books/surely-youre-joking-mr-feynman",
    image:
      "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/Surely%20You%E2%80%99re%20Joking%2C%20Mr.%20Feynman!%20by%20Richard%20Feynman.jpg",
    pageColor: PASTEL.peach,
    publishedAt: "2025-05-01",
  },
  {
    slug: "introduction-to-mathematical-philosophy",
    title: "Introduction to Mathematical Philosophy",
    author: "Bertrand Russell",
    dek: "Written in Brixton Prison in 1918. What is the number 3? Russell takes six months and 208 pages to answer it with precision.",
    href: "/books/introduction-to-mathematical-philosophy",
    image:
      "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/Introduction%20to%20Mathematical%20Philosophy%20by%20Bertrand%20Russell.png",
    pageColor: PASTEL.rose,
    publishedAt: "2026-05-06",
  },
  {
    slug: "how-smart-machines-think",
    title: "How Smart Machines Think",
    author: "Sean Gerrish",
    dek: "Written in 2018, before ChatGPT. The foundations it explains are still the floor every modern AI stands on.",
    href: "/books/how-smart-machines-think",
    image:
      "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/How%20Smart%20Machines%20Think%20by%20Sean%20Gerrish.jpg",
    pageColor: PASTEL.sky,
    publishedAt: "2026-05-08",
  },
];
