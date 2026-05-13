import { PASTEL } from "./pastel-palette";

export type FeaturedPick = {
  slug: string;
  title: string;
  dek: string;
  tag: string;
  href: string;
  pageColor: string;
} & (
  | { image: string; featuredVisual?: undefined }
  | { featuredVisual: "pi-book-cover"; image?: undefined }
  | { featuredVisual: "mit-1869"; image?: undefined }
);

/** Editorial hero carousel — pastel panels */
export const featuredPicks: FeaturedPick[] = [
  {
    slug: "pi-books-list",
    title: "Six Books That Taught π How to Misbehave",
    dek: "History, obsession, category theory — and Sir Cumference.",
    tag: "Book list",
    href: "/book-lists/books-about-pi",
    image:
      "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/Six%20books%20that%20taught%20%CF%80%20how%20to%20misbehave.png",
    pageColor: PASTEL.rose,
  },
  {
    slug: "mit-1869",
    title: "Seven questions, June 7, 1869",
    dek: "MIT's first algebra entrance exam. The questions haven't changed. Everything else has.",
    tag: "Mathematics",
    href: "/articles/mit-1869",
    image:
      "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/MIT%27s%201869%20algebra%20entrance%20exam.png",
    pageColor: PASTEL.lavender,
  },
  {
    slug: "rafael-araujo-geometrical-masterpieces",
    title: "Rafael Araujo's 20+ Mesmerizing Geometrical Masterpieces",
    dek: "Rafael Araujo spends 100 hours on a single drawing — no software, no undo. A selection of his most stunning hand-drawn golden ratio illustrations.",
    tag: "Mathematics · Art",
    href: "/rafael-araujo-geometrical-masterpieces",
    image:
      "https://pub-57855d8f88704d1cafba485f1b715e8d.r2.dev/Rafael%20Araujo%20Geometrical%20Drawings%2016.jpeg",
    pageColor: PASTEL.peach,
  },
  {
    slug: "geometry-behind-pringles",
    title: "The Geometry Behind Pringles",
    dek: "A Pringle is a hyperbolic paraboloid — stack, snap, can, and factory physics.",
    tag: "Mathematics",
    href: "/articles/geometry-behind-pringles",
    image:
      "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/The%20Geometry%20Behind%20Pringles.png",
    pageColor: PASTEL.sky,
  },
  {
    slug: "24-beautiful-physics-poster-designs-that-inspire-you",
    title: "24 Beautiful Physics Poster Designs That Inspire You",
    dek: "String theory, quantum mechanics, entropy — 24 poster designs that turn physics concepts into beautiful objects worth hanging on a wall.",
    tag: "Physics · Design",
    href: "/24-beautiful-physics-poster-designs-that-inspire-you",
    image:
      "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/24%20Beautiful%20Physics%20Poster%20Designs%20That%20Inspire%20You.webp",
    pageColor: PASTEL.lavender,
  },
  {
    slug: "taming-the-garden",
    title: "A tree on a barge, crossing the Black Sea",
    dek: "Salomé Jashi's documentary on a billionaire who collected ancient trees — uprooted, shipped, replanted.",
    tag: "Documentary",
    href: "/videos/taming-the-garden",
    image:
      "https://pub-5aa87426ad334d0495bf29d914b5ce1b.r2.dev/taming%20the%20garden.jpeg",
    pageColor: PASTEL.lime,
  },
  {
    slug: "alejandro-guijarro-momentum",
    title: "The Equations That Forgot They Were Equations",
    dek: "Alejandro Guijarro photographed quantum mechanics blackboards at Cambridge, Oxford, CERN, and Stanford. No staging. Just what the physicists left behind.",
    tag: "Photography · Science",
    href: "/articles/alejandro-guijarro-momentum",
    image:
      "https://pub-98e13baa8ca84d53b2e3ee903a8fce62.r2.dev/Alejandro%20Guijarro%20Physics%20Blackboards%201.jpg",
    pageColor: PASTEL.sky,
  },
  {
    slug: "erich-dieckmann-metal-tube-chair",
    title: "Drawing a Chair 64 Times",
    dek: "Erich Dieckmann's 1931 morphological matrix — 8 rows, 64 variations, from rigid geometry to near-abstraction.",
    tag: "Design · Bauhaus",
    href: "/articles/erich-dieckmann-metal-tube-chair",
    image:
      "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/Metal%20Tube%20Chair%20by%20Erich%20Dieckmann.png",
    pageColor: PASTEL.rose,
  },
  {
    slug: "oliver-byrne-euclid",
    title: "The First Six Books of the Elements of Euclid",
    dek: "Red, yellow, blue, black. Euclid in colour. Before Mondrian, before the Bauhaus — 1847.",
    tag: "Books · Geometry",
    href: "/books/oliver-byrne-euclid",
    image:
      "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/Oliver%20Byrne%20%E2%80%93%20The%20First%20Six%20Books%20of%20the%20Elements%20of%20Euclid.webp",
    pageColor: PASTEL.peach,
  },
  {
    slug: "marilyn-vos-savant",
    title: "The Woman Who Was Right",
    dek: "In 1990, Marilyn vos Savant answered a probability puzzle correctly. Nearly 10,000 people wrote to tell her she was wrong.",
    tag: "Probability · History",
    href: "/articles/marilyn-vos-savant",
    image:
      "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/Ask%20Marilyn.webp",
    pageColor: PASTEL.lavender,
  },
  {
    slug: "cymatics-nigel-stanford",
    title: "Cymatics: Sound Has a Shape",
    dek: "Nigel Stanford wrote the music last — after the physics decided the notes.",
    tag: "Physics · Music",
    href: "/videos/cymatics-nigel-stanford",
    image: "https://pub-676f738e0a3948d19dc9defd954e36d5.r2.dev/Cymatics.webp",
    pageColor: PASTEL.sky,
  },
];
