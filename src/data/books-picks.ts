import { PASTEL } from "./pastel-palette";

export type BookFeatured = {
  slug: string;
  title: string;
  author: string;
  dek: string;
  href: string;
  image: string;
  pageColor: string;
};

export type BookShelfItem = {
  slug: string;
  title: string;
  author: string;
  dek: string;
  href: string;
  image: string;
  pageColor: string;
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
};

/** Four-up shelf — math, science, wonder */
export const booksShelf: BookShelfItem[] = [
  {
    slug: "pasta-by-design",
    title: "Pasta by Design",
    author: "George L. Legendre",
    dek: "92 pasta shapes. 3 parametric equations each. No recipes at all.",
    href: "/books/pasta-by-design",
    image:
      "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/Pasta%20by%20Design.jpg",
    pageColor: PASTEL.peach,
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
  },
  {
    slug: "pi-books-list",
    title: "Six books that taught π how to misbehave",
    author: "Book list",
    dek: "History, obsession, category theory, a novella — and a knight named Sir Cumference.",
    href: "/book-lists/pi",
    image:
      "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/Six%20books%20that%20taught%20%CF%80%20how%20to%20misbehave.png",
    pageColor: PASTEL.sky,
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
  },
  {
    slug: "introduction-to-mathematical-philosophy",
    title: "Introduction to Mathematical Philosophy",
    author: "Bertrand Russell",
    dek: "Written in Brixton Prison in 1918. What is the number 3? Russell takes six months and 208 pages to answer it with precision.",
    href: "/books/introduction-to-mathematical-philosophy",
    image:
      "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/Introduction%20to%20Mathematical%20Philosophy%20by%20Bertrand%20Russell.png",
    pageColor: PASTEL.sky,
  },
];
