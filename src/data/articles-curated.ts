import { PASTEL } from "./pastel-palette";

/** Editorial card data — no layout slot (see `getCuratedArticlesForHomeGrid`). */
export type CuratedArticleSource = {
  slug: string;
  /** Card headline on the home grid */
  title: string;
  /** Author retained for metadata; not shown on the home grid */
  author: string;
  dek: string;
  /** Primary image — used on home grid cards */
  image: string;
  /**
   * Optional alternate image for the articles-archive listing.
   * Use a landscape crop when the primary `image` is portrait-oriented.
   * Falls back to `image` when omitted.
   */
  imageArchive?: string;
  href: string;
  pageColor: string;
  /** Newer dates surface first on the home grid. Use ISO `YYYY-MM-DD`. */
  publishedAt: string;
};

/** Home grid + read-more: includes wide/narrow slot for the card layout. */
export type CuratedArticle = CuratedArticleSource & {
  span: "wide" | "narrow";
};

/**
 * Fixed pattern for the 6-up grid (md: 12 columns): wide | narrow | narrow /
 * wide | wide | narrow. Newest `publishedAt` fills slot 1, older items shift.
 */
const HOME_GRID_SPANS: ("wide" | "narrow")[] = [
  "wide",
  "narrow",
  "narrow",
  "wide",
  "wide",
  "narrow",
];

/** Source list — add new pieces here with today’s (or release) `publishedAt`. */
export const curatedArticles: CuratedArticleSource[] = [

  {    slug: "mymind",
    title: "Save Everything. Organize Nothing.",
    author: "Ali Kaya",
    dek: "mymind auto-tags every link, image, and note you save — then finds them when you search. No folders, no tags, no system. You throw things at it; it organizes and makes them searchable. A rare app that actually keeps its promise.",
    image:
      "https://pub-3775c49696ac49478c024f66a3dbe50d.r2.dev/MyMind%203.webp",
    href: "/tools/mymind",
    pageColor: PASTEL.sky,
    publishedAt: "2026-05-11",
  },
  {    slug: "literature-clock",
    title: "Every Minute Has a Book",
    author: "Ali Kaya",
    dek: "There are 1,440 minutes in a day. Literature Clock matches each one to a passage from world literature. Open the site: find out it's 2:47 because Tolstoy already wrote that minute.",
    image:
      "https://pub-3775c49696ac49478c024f66a3dbe50d.r2.dev/Literature%20Clock.png",
    href: "/tools/literature-clock",
    pageColor: PASTEL.peach,
    publishedAt: "2026-05-10",
  },
  {
    slug: "good-will-hunting",
    title: "How Do You Like Them Apples?",
    author: "Ali Kaya",
    dek: "A janitor at MIT solves a research-level math problem on a hallway chalkboard. The film is not about the mathematics. Gus Van Sant, 1997.",
    image:
      "https://pub-676f738e0a3948d19dc9defd954e36d5.r2.dev/Good%20Will%20Hunting.webp",
    href: "/videos/good-will-hunting",
    pageColor: PASTEL.lime,
    publishedAt: "2026-05-10",
  },
  {
    slug: "your-name-in-landsat",
    title: "Your Name, Written by Earth",
    author: "Ali Kaya",
    dek: "NASA spells out your name using real Landsat satellite images. Every letter is a real place, 700 km below, with coordinates you can look up.",
    image:
      "https://pub-3775c49696ac49478c024f66a3dbe50d.r2.dev/Your%20Name%20in%20Landsat.png",
    href: "/tools/your-name-in-landsat",
    pageColor: PASTEL.sky,
    publishedAt: "2026-05-05",
  },
  {
    slug: "introduction-to-mathematical-philosophy",
    title: "Written in Prison. In Print for a Century.",
    author: "Ali Kaya",
    dek: "In 1918, Bertrand Russell was given a cell, a desk, and six months with nothing urgent to do. He used them to write the clearest introduction to the foundations of mathematics ever published.",
    image:
      "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/Introduction%20to%20Mathematical%20Philosophy%20by%20Bertrand%20Russell.png",
    href: "/books/introduction-to-mathematical-philosophy",
    pageColor: PASTEL.sky,
    publishedAt: "2026-05-06",
  },
  {
    slug: "trinity",
    title: "Two Thousand Flashes on a Map",
    author: "Ali Kaya",
    dek: "Orbital Mechanics mapped every nuclear detonation from the Trinity test to North Korea\u2019s 2009 tests. Fourteen minutes. Two thousand flashes. The count is the argument.",
    image:
      "https://pub-676f738e0a3948d19dc9defd954e36d5.r2.dev/Trinity%20%E2%80%93%20Visualization%20of%20Nuclear%20Detonations.webp",
    href: "/videos/trinity",
    pageColor: PASTEL.sky,
    publishedAt: "2026-05-08",
  },
  {
    slug: "yuki-kawae",
    title: "A Drawing That Erases Itself",
    author: "Ali Kaya",
    dek: "Yuki Kawae spends hours raking patterns into a sand garden in his apartment. Then he smooths them away. 23 minutes. No narration. The arithmetic stops.",
    image:
      "https://pub-676f738e0a3948d19dc9defd954e36d5.r2.dev/Yuki%20Kawae%20zen%20garden.jpg",
    href: "/videos/yuki-kawae",
    pageColor: PASTEL.peach,
    publishedAt: "2026-05-05",
  },
  {
    slug: "calculus-made-easy",
    title: "What One Fool Can Do, Another Can",
    author: "Ali Kaya",
    dek: "Silvanus P. Thompson wrote a calculus book in 1910. Someone converted it to HTML by hand. It's free and it still works.",
    image:
      "https://pub-3775c49696ac49478c024f66a3dbe50d.r2.dev/Calculus%20Made%20Easy.png",
    href: "/tools/calculus-made-easy",
    pageColor: PASTEL.sky,
    publishedAt: "2026-05-10",
  },
  {
    slug: "fry-universe",
    title: "Your Favorite Fry Is a Geometry Problem",
    author: "Ali Kaya",
    dek: "A shoestring fry and a steak fry are made from the same ingredient, cooked the same way. The only difference is the cut. Chris Williams built a 3D tool to show you exactly what that difference is.",
    image:
      "https://pub-3775c49696ac49478c024f66a3dbe50d.r2.dev/The%20Fry%20Universe.webp",
    href: "/tools/fry-universe",
    pageColor: PASTEL.peach,
    publishedAt: "2026-05-07",
  },
  {    slug: "seeing-theory",
    title: "Statistics You Can Watch Think",
    author: "Ali Kaya",
    dek: "A Brown University student made probability visible — and changed how a generation understands statistics.",
    image:
      "https://pub-3775c49696ac49478c024f66a3dbe50d.r2.dev/Seeing%20Theory.png",
    href: "/tools/seeing-theory",
    pageColor: PASTEL.sky,
    publishedAt: "2026-05-04",
  },
  {    slug: "magritte-blank-signature",
    title: "How Magritte Broke Perception Without Breaking a Single Rule",
    author: "Ali Kaya",
    dek: "In 1965, Magritte painted a woman on horseback through a forest. Everything is real. Nothing is possible. A 2023 study in the Journal of Vision finally explains exactly how he did it.",
    image:
      "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/Rene%20Magritte%E2%80%99s%20The%20Blank%20Signature.webp",
    href: "/articles/magritte-blank-signature",
    pageColor: PASTEL.rose,
    publishedAt: "2026-05-03",
  },
  {    slug: "al-jaghmini-astronomy-manuscript",
    title: "The Astronomy Textbook That Outlived an Empire",
    author: "Ali Kaya",
    dek: "Written one year before its author died in the Mongol conquest of Khwarazm, al-Jaghmini's Mulakhkhas became the most widely copied Arabic astronomy textbook ever made.",
    image:
      "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/An%20Illustrated%20Astronomical%20Treatise%20by%20Mahmud%20ibn%20Muhammad%20al-Jaghmini.jpg",
    href: "/articles/al-jaghmini-astronomy-manuscript",
    pageColor: PASTEL.peach,
    publishedAt: "2026-04-30",
  },
  {    slug: "erich-dieckmann-metal-tube-chair",
    title: "Drawing a Chair 64 Times",
    author: "Ali Kaya",
    dek: "Erich Dieckmann's 1931 morphological matrix: 8 rows, 64 variations, from rigid geometry to near-abstraction. The clearest single-page argument for design research the Bauhaus produced.",
    image:
      "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/Metal%20Tube%20Chair%20by%20Erich%20Dieckmann.png",
    href: "/articles/erich-dieckmann-metal-tube-chair",
    pageColor: PASTEL.lime,
    publishedAt: "2026-05-02",
  },  {    slug: "feynman-math-education",
    title: "Feynman on How Math Should Be Taught to Children",
    author: "Ali Kaya",
    dek: "In 1965, Feynman read 500 pounds of math textbooks and wrote the sharpest critique in the history of mathematics education. Sixty years later, the problem is still with us.",
    image:
      "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/How%20Should%20Math%20Be%20Taught%20to%20Children%3F.webp",
    href: "/articles/feynman-math-education",
    pageColor: PASTEL.peach,
    publishedAt: "2026-05-01",
  },
  {    slug: "kung-fu-motion-visualization",
    title: "Kung Fu Motion Visualization: Hareketin İçindeki Yapı",
    author: "Ali Kaya",
    dek: "Tobias Gremmler turned motion-capture data from Kung Fu masters into five moving sculptures. Veri heykel oldu; zaman kumaş, hız madde.",
    image:
      "https://pub-676f738e0a3948d19dc9defd954e36d5.r2.dev/Visualizing%20The%20Invisible%20Motions%20Of%20Kung%20Fu%202.webp",
    href: "/videos/the-physics-of-kung-fu",
    pageColor: PASTEL.lime,
    publishedAt: "2026-04-22",
  },
  {  slug: "rafael-araujo-geometrical-masterpieces",
    title: "Rafael Araujo's 20+ Mesmerizing Geometrical Masterpieces",
    author: "Ali Kaya",
    dek: "Rafael Araujo spends 100 hours on a single drawing — no software, no undo. A selection of his most stunning hand-drawn golden ratio illustrations.",
    image:
      "https://pub-57855d8f88704d1cafba485f1b715e8d.r2.dev/Rafael%20Araujo%20Geometrical%20Drawings%2016.jpeg",
    href: "/rafael-araujo-geometrical-masterpieces",
    pageColor: PASTEL.peach,
    publishedAt: "2026-04-29",
  },  {    slug: "0999-equals-1",
    title: "The Proof That 0.999… Is Exactly Equal to 1",
    author: "Ali Kaya",
    dek: "It looks strange. It feels wrong. But 0.999… is not ‘almost 1’ — it is exactly 1. Here is the geometric series proof that settles the matter in five steps.",
    image: "/images/0999-equals-1-card.svg",
    href: "/articles/0999-equals-1",
    pageColor: PASTEL.rose,
    publishedAt: "2026-04-27",
  },
  {    slug: "24-beautiful-physics-poster-designs-that-inspire-you",
    title: "24 Beautiful Physics Poster Designs That Inspire You",
    author: "Ali Kaya",
    dek: "String theory, quantum mechanics, entropy, general relativity — 24 poster designs by 2046 Print Shop that turn physics concepts into beautiful objects worth hanging on a wall.",
    image:
      "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/24%20Beautiful%20Physics%20Poster%20Designs%20That%20Inspire%20You.png",
    imageArchive:
      "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/24%20Beautiful%20Physics%20Poster%20Designs%20Inspire%20You.png",
    href: "/24-beautiful-physics-poster-designs-that-inspire-you",
    pageColor: PASTEL.lavender,
    publishedAt: "2026-04-26",
  },
  {
    slug: "25-beautiful-math-documentaries-to-love-math",
    title: "25 Beautiful Math Documentaries to Make Students Love Mathematics",
    author: "Ali Kaya",
    dek: "A Trip to Infinity, The Proof, N Is a Number — 25 documentaries that show the other face of mathematics: obsession, beauty, and the particular madness of chasing a question.",
    image:
      "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/25%20Beautiful%20Math%20Documentaries%20to%20Make%20Students%20Love%20Mathematics.png",
    href: "/25-beautiful-math-documentaries-to-love-math",
    pageColor: PASTEL.peach,
    publishedAt: "2026-04-25",
  },
  {
    slug: "17-best-math-youtube-channels-to-study-mathematics",
    title: "Five YouTube Channels That Make You Love Mathematics",
    author: "Ali Kaya",
    dek: "Numberphile, 3Blue1Brown, Eddie Woo, Socratica, Khan Academy — five YouTube channels built by people who loved mathematics first, and only then turned the camera on.",
    image:
      "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/Five%20YouTube%20Channels%20That%20Make%20You%20Love%20Mathematics.png",
    href: "/17-best-math-youtube-channels-to-study-mathematics",
    pageColor: PASTEL.sky,
    publishedAt: "2026-04-24",
  },  {    slug: "snelson-needle-tower",
    title: "Kenneth Snelson's Needle Tower: 60 Feet, Zero Contact",
    author: "Ali Kaya",
    dek: "60 feet tall, 14 inches of ground contact. No aluminum tube touches another. The whole thing holds up because of what isn't there.",
    image:
      "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/Kenneth%20Snelson%E2%80%99s%20Needle%20Tower.jpg",
    href: "/articles/snelson-needle-tower",
    pageColor: PASTEL.lime,
    publishedAt: "2026-04-21",
  },
  {    slug: "sqrt2-irrational",
    title: "A Number That Cannot Be the Smallest",
    author: "Ali Kaya",
    dek: "Most proofs that √2 is irrational use prime factorization. This one uses something simpler: if a smallest natural number witnessing rationality existed, you could always find a smaller one.",
    image:
      "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/The%20Proof%20of%20Square%20Root%20of%202%20Irrational.webp",
    href: "/articles/sqrt2-irrational",
    pageColor: PASTEL.lavender,
    publishedAt: "2026-04-21",
  },
  {
    slug: "specimens-fancy-turning",
    title: "The Patterns No Hand Could Have Drawn",
    author: "Ali Kaya",
    dek: "Victorian ornamental turning produced spirograph-like geometric forms of extraordinary precision — not drawn, not sculpted, but calculated by a machine that ran on mathematics.",
    image:
      "https://pub-98e13baa8ca84d53b2e3ee903a8fce62.r2.dev/Specimens%20of%20Fancy%20Turning%2012.webp",
    href: "/articles/specimens-fancy-turning",
    pageColor: PASTEL.rose,
    publishedAt: "2026-04-21",
  },  {    slug: "alejandro-guijarro-momentum",
    title: "The Equations That Forgot They Were Equations",
    author: "Ali Kaya",
    dek: "Alejandro Guijarro spent three years photographing quantum mechanics blackboards at Cambridge, Stanford, CERN, and Oxford. No staging. Just the board.",
    image:
      "https://pub-98e13baa8ca84d53b2e3ee903a8fce62.r2.dev/Alejandro%20Guijarro%20Physics%20Blackboards%201.jpg",
    href: "/articles/alejandro-guijarro-momentum",
    pageColor: PASTEL.sky,
    publishedAt: "2026-05-04",
  },
  {    slug: "marilyn-vos-savant",
    title: "The Woman Who Was Right",
    author: "Ali Kaya",
    dek: "In 1990, Marilyn vos Savant answered a probability puzzle correctly. Nearly 10,000 people — many of them academics — wrote to tell her she was wrong. She was not.",
    image:
      "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/Ask%20Marilyn.webp",
    href: "/articles/marilyn-vos-savant",
    pageColor: PASTEL.lavender,
    publishedAt: "2026-04-19",
  },
  {
    slug: "mushroom-color-atlas",
    title: "The Color the Forest Already Had",
    author: "Ali Kaya",
    dek: "825 colors, 40+ dye mushrooms. Julie Beeler's atlas of natural color that exists only because a specific fungus grew in a specific place.",
    image:
      "https://pub-3775c49696ac49478c024f66a3dbe50d.r2.dev/Mushroom%20Color%20Atlas.webp",
    href: "/tools/mushroom-color-atlas",
    pageColor: PASTEL.peach,
    publishedAt: "2026-04-19",
  },
  {
    slug: "killed-by-google",
    title: "299 Products. One Graveyard.",
    author: "Ali Kaya",
    dek: "Google has retired 299 products since 2006. Average lifespan: 5.2 years. The pattern behind the shutdowns has run twice — and will run again.",
    image:
      "https://pub-3775c49696ac49478c024f66a3dbe50d.r2.dev/Killed%20by%20Google.png",
    href: "/tools/killed-by-google",
    pageColor: PASTEL.rose,
    publishedAt: "2026-04-19",
  },
  {
    slug: "barbara-iweins-katalog",
    title: "12,795 Objects, One Life",
    author: "Ali Kaya",
    dek: "Barbara Iweins photographed every single thing she owns — all 12,795 of them. The spreadsheet is the easy part to explain.",
    image:
      "https://pub-3775c49696ac49478c024f66a3dbe50d.r2.dev/Barbara%20Iweins%20Katalog.png",
    href: "/tools/barbara-iweins-katalog",
    pageColor: PASTEL.peach,
    publishedAt: "2026-04-19",
  },  {    slug: "river-runner",
    title: "Every Raindrop Has a Destination",
    author: "Ali Kaya",
    dek: "River Runner lets you click anywhere on a map and watch the exact downstream journey of a raindrop — from where it lands to the ocean.",
    image:
      "https://pub-3775c49696ac49478c024f66a3dbe50d.r2.dev/River%20Runner.png",
    href: "/tools/river-runner",
    pageColor: PASTEL.sky,
    publishedAt: "2026-04-19",
  },
  {
    slug: "stand-and-deliver",
    title: "The Testing Board Assumed They Cheated",
    author: "Ali Kaya",
    dek: "Stand and Deliver tells the story of Jaime Escalante. But the real story is harder, darker, and far more interesting than the film lets on.",
    image:
      "https://pub-676f738e0a3948d19dc9defd954e36d5.r2.dev/Stand%20And%20Deliver.jpg",
    href: "/videos/stand-and-deliver",
    pageColor: PASTEL.peach,
    publishedAt: "2026-05-07",
  },
  {    slug: "cymatics-nigel-stanford",
    title: "Cymatics: Sound Has a Shape",
    author: "Ali Kaya",
    dek: "Nigel Stanford spent months building instruments that don't play music — they reveal it. Five physics experiments, one music video, and the wave equation made visible.",
    image:
      "https://pub-676f738e0a3948d19dc9defd954e36d5.r2.dev/Cymatics.webp",
    href: "/videos/cymatics-nigel-stanford",
    pageColor: PASTEL.sky,
    publishedAt: "2026-04-19",
  },
  {
    slug: "dinara-kasko-kinetic-tarts",
    title: "Four tarts, one sculptor, and the philosophy of disappearance",
    author: "Ali Kaya",
    dek: "Dinara Kasko and artist José Margulis built kinetic sculptures from CNC-cut chocolate. They were assembled, admired, and eaten — which was the point.",
    image:
      "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/Dinara%20Kasko%20Geometrical%20Kinetic%20Tarts%20.jpg",
    href: "/articles/dinara-kasko-kinetic-tarts",
    pageColor: PASTEL.rose,
    publishedAt: "2026-04-19",
  },  {    slug: "feynman-technique",
    title: "The Feynman Technique: A Complete Guide",
    author: "Ali Kaya",
    dek: "The four-step learning method developed by Nobel Prize-winning physicist Richard Feynman. How it works, why it works, and how to apply it to anything.",
    image:
      "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/Richard%20Feynman.webp",
    href: "/articles/feynman-technique",
    pageColor: PASTEL.lavender,
    publishedAt: "2026-04-18",
  },
  {    slug: "sudoku-mathematics",
    title: "The Mathematics of Sudoku",
    author: "Ali Kaya",
    dek: "On counting all valid 9×9 grids (6.7 sextillion), solving algorithms that work on paper, and why Sudoku is fundamentally a graph coloring problem.",
    image:
      "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/The%20Mathematics%20of%20Sudoku%202.png",
    href: "/articles/sudoku-mathematics",
    pageColor: PASTEL.peach,
    publishedAt: "2026-04-17",
  },
  {
    slug: "roberto-carlos-free-kick",
    title: "The free kick that took 13 years to explain",
    author: "Ali Kaya",
    dek: "On June 3, 1997, Roberto Carlos kicked a ball at 136 km/h spinning at 14 revolutions per second. The Magnus effect bent it around a wall into the net from 35 metres.",
    image:
      "https://pub-676f738e0a3948d19dc9defd954e36d5.r2.dev/Roberto%20Carlos%20Frekick.png",
    href: "/videos/roberto-carlos-free-kick",
    pageColor: PASTEL.rose,
    publishedAt: "2026-04-16",
  },  {    slug: "penrose-journal",
    title: "Inside Roger Penrose's notebook",
    author: "Ali Kaya",
    dek: "Handwritten pages of spinor algebra, twistor diagrams, Penrose tiling prototypes, and Cayley algebra — alongside programs for a 1978 pocket calculator.",
    image:
      "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/Roger-Penroses-Beautiful-Journal-1024x678.jpg.webp",
    href: "/articles/penrose-journal",
    pageColor: PASTEL.sky,
    publishedAt: "2026-04-15",
  },
  {    slug: "inkala-sudoku",
    title: "The world's hardest Sudoku — 23 clues, one solution",
    author: "Ali Kaya",
    dek: "Arto Inkala's 2012 puzzle: 4.5% trivialization rate, 153 human attempts, three months to design — and what “hardest” actually measures.",
    image:
      "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/The%20World%E2%80%99s%20Hardest%20Sudoku%20by%20Arto%20Inkala.jpg.webp",
    href: "/articles/inkala-sudoku",
    pageColor: PASTEL.lavender,
    publishedAt: "2026-04-14",
  },
  {
    slug: "mit-1869",
    title: "Seven questions, June 7, 1869",
    author: "Ali Kaya",
    dek: "MIT's first algebra entrance exam. The questions haven't changed. Everything else — tuition, class size, acceptance rate — is unrecognisable.",
    image:
      "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/MIT%27s%201869%20algebra%20entrance%20exam.png",
    href: "/articles/mit-1869",
    pageColor: PASTEL.sky,
    publishedAt: "2026-04-13",
  },
  {
    slug: "taming-the-garden",
    title: "A tree on a barge, crossing the Black Sea",
    author: "Ali Kaya",
    dek: "Salomé Jashi's Taming the Garden follows hundreds of ancient trees uprooted for a Georgian billionaire's private garden. One of the most haunting films of the decade.",
    image:
      "https://pub-5aa87426ad334d0495bf29d914b5ce1b.r2.dev/taming%20the%20garden.jpeg",
    href: "/videos/taming-the-garden",
    pageColor: PASTEL.lime,
    publishedAt: "2026-04-12",
  },
  {
    slug: "pinocchio",
    title: "13 lies before the neck gives out",
    author: "Ali Kaya",
    dek: "A Leicester paper applied Newtonian mechanics to Pinocchio’s nose — exponential growth, oak, and a hard limit at thirteen.",
    image:
      "https://pub-5aa87426ad334d0495bf29d914b5ce1b.r2.dev/Pinocchio.jpg",
    href: "/articles/pinocchio",
    pageColor: PASTEL.peach,
    publishedAt: "2026-04-11",
  },
  {
    slug: "geometry-behind-pringles",
    title: "The chip that required a geometry lesson",
    author: "Ali Kaya",
    dek: "A Pringle is a hyperbolic paraboloid — stack, snap, can, and factory physics.",
    image:
      "https://pub-5aa87426ad334d0495bf29d914b5ce1b.r2.dev/Geometry%20Behind%20Pringles.webp",
    href: "/articles/geometry-behind-pringles",
    pageColor: PASTEL.peach,
    publishedAt: "2026-04-10",
  },
  {
    slug: "zurich-notebook",
    title: "The notebook where general relativity didn't work yet",
    author: "Ali Kaya",
    dek: "Zurich, 1912–1913 — puzzles, line elements, wrong turns, and the path to November 1915.",
    image:
      "https://pub-5aa87426ad334d0495bf29d914b5ce1b.r2.dev/Einstein%E2%80%99s%20Zurich%20Notebook.jpg",
    href: "/articles/zurich-notebook",
    pageColor: PASTEL.lavender,
    publishedAt: "2026-04-09",
  },
  {
    slug: "indiana-pi-bill",
    title: "The legislature that tried to vote on π",
    author: "Ali Kaya",
    dek: "1897 — Indiana’s House passed a bill that implied π = 3.2. Then a mathematician walked in.",
    image:
      "https://pub-5aa87426ad334d0495bf29d914b5ce1b.r2.dev/The%20Indiana%20Pi%20Bill.jpeg",
    href: "/articles/indiana-pi-bill",
    pageColor: PASTEL.peach,
    publishedAt: "2026-04-08",
  },
  {
    slug: "maxwell-warsaw",
    title: "Four equations on a wall",
    author: "Ali Kaya",
    dek: "Maxwell in stone on Warsaw’s physics library — integral form, street level, no apologies.",
    image:
      "https://pub-5aa87426ad334d0495bf29d914b5ce1b.r2.dev/Maxwell%E2%80%99s%20Equations%20on%20the%20Walls%20of%20Warsaw%20University%202.jpeg",
    href: "/articles/maxwell-warsaw",
    pageColor: PASTEL.sky,
    publishedAt: "2026-04-07",
  },
  {
    slug: "rambo-fox",
    title: "One fox. Four years. Zero apologies.",
    author: "Ali Kaya",
    dek: "A single red fox in the Pilliga vs. traps, baits, dogs — and a rewritten plan.",
    image:
      "https://pub-5aa87426ad334d0495bf29d914b5ce1b.r2.dev/Rambo%20the%20Fox%202.jpeg",
    href: "/articles/rambo-fox",
    pageColor: PASTEL.rose,
    publishedAt: "2026-04-06",
  },
  {
    slug: "billingsley-euclid",
    title: "Paper that stands up",
    author: "Ali Kaya",
    dek: "Henry Billingsley’s 1570 English Euclid — paper solids that still beat a headset",
    image:
      "https://pub-5aa87426ad334d0495bf29d914b5ce1b.r2.dev/Henry%20Billingsley%E2%80%99s%20Euclid%E2%80%99s%20Elements.jpg",
    href: "/articles/billingsley-euclid",
    pageColor: PASTEL.peach,
    publishedAt: "2026-04-05",
  },
  {
    slug: "fibonacci-shelf",
    title: "A shelf built on a sequence",
    author: "Ali Kaya",
    dek: "Peng Wang’s modular shelf — six rectangles, one famous sequence",
    image:
      "https://pub-5aa87426ad334d0495bf29d914b5ce1b.r2.dev/The%20Fibonacci%20Shelf%20by%20Peng%20Wang%206.jpg",
    href: "/articles/fibonacci-shelf",
    pageColor: PASTEL.peach,
    publishedAt: "2026-03-18",
  },
  {
    slug: "unit-circle",
    title: "How to memorize the unit circle easily",
    author: "Ali Kaya",
    dek: "Not a chart to memorize — a pattern to understand on the unit circle",
    image: "/images/unit-circle-minimal-sweet.svg",
    href: "/articles/unit-circle",
    pageColor: PASTEL.lime,
    publishedAt: "2026-02-01",
  },
  {
    slug: "geometry-everywhere",
    title: "Tessellations everywhere",
    author: "Marcus Chen",
    dek: "Tessellations in nature that beat any screensaver",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
    href: "/articles/geometry-everywhere",
    pageColor: "#D4EDEA",
    publishedAt: "2025-11-20",
  },
  {
    slug: "open-access",
    title: "Open access, quietly",
    author: "Nina Patel",
    dek: "The quiet revolution in how we share research online",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0de644?w=1200&q=80",
    href: "/articles/open-access",
    pageColor: "#E1F4AD",
    publishedAt: "2025-09-10",
  },
  {
    slug: "typography-math",
    title: "Equations and type",
    author: "Leo Hart",
    dek: "When equations need the right typeface to breathe",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    href: "/articles/typography-math",
    pageColor: "#FFF8E7",
    publishedAt: "2025-06-01",
  },
  // ── Books (filtered out of home grid & /articles listing) ──────────────────
  {
    slug: "islamic-geometric-patterns-eric-broug",
    title: "Islamic Geometric Patterns",
    author: "Eric Broug · Thames & Hudson",
    dek: "A compass, a ruler, and 1,400 years of quiet geometry. 23 patterns from real buildings — from the Great Mosque of Córdoba to Samarkand.",
    image:
      "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/Islamic%20Geometric%20Patterns%20by%20Eric%20Broug.jpg",
    href: "/books/islamic-geometric-patterns-eric-broug",
    pageColor: PASTEL.sky,
    publishedAt: "2026-05-07",
  },
  {
    slug: "oliver-byrne-euclid",
    title: "The First Six Books of the Elements of Euclid",
    author: "Oliver Byrne · TASCHEN",
    dek: "Red, yellow, blue, black. Euclid in colour. Before Mondrian, before the Bauhaus — 1847.",
    image:
      "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/Oliver%20Byrne%20%E2%80%93%20The%20First%20Six%20Books%20of%20the%20Elements%20of%20Euclid.webp",
    href: "/books/oliver-byrne-euclid",
    pageColor: PASTEL.peach,
    publishedAt: "2025-12-01",
  },
  {
    slug: "pasta-by-design",
    title: "Pasta by Design",
    author: "George L. Legendre",
    dek: "92 pasta shapes. 3 parametric equations each. No recipes at all.",
    image:
      "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/Pasta%20by%20Design.jpg",
    href: "/books/pasta-by-design",
    pageColor: PASTEL.peach,
    publishedAt: "2025-11-01",
  },
  {
    slug: "geometry-of-pasta",
    title: "The Geometry of Pasta",
    author: "Caz Hildebrand & Jacob Kenedy",
    dek: "Shape is not aesthetic — shape is the mathematics of flavour.",
    image:
      "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/The%20Geometry%20of%20Pasta.jpg",
    href: "/books/geometry-of-pasta",
    pageColor: PASTEL.rose,
    publishedAt: "2025-10-01",
  },
  {
    slug: "the-art-and-science-of-ernst-haeckel",
    title: "The Art and Science of Ernst Haeckel",
    author: "Willmann & Voss · TASCHEN",
    dek: "450 plates. Radiolarians, jellyfish, ferns. Art Nouveau before Art Nouveau had a name.",
    image:
      "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/The%20Art%20and%20Science%20of%20Ernst%20Haeckel%20by%20TASCHEN.png",
    href: "/books/the-art-and-science-of-ernst-haeckel",
    pageColor: PASTEL.lime,
    publishedAt: "2025-09-01",
  },
  {
    slug: "when-einstein-walked-with-godel",
    title: "When Einstein Walked with Gödel",
    author: "Jim Holt",
    dek: "The biggest questions in math and physics — told like stories worth losing sleep over.",
    image:
      "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/When%20Einstein%20Walked%20with%20Go%CC%88del-%20Excursions%20to%20the%20Edge%20of%20Thought.jpg",
    href: "/books/when-einstein-walked-with-godel",
    pageColor: PASTEL.lavender,
    publishedAt: "2025-08-01",
  },
  {
    slug: "fractal-geometry-of-nature",
    title: "The Fractal Geometry of Nature",
    author: "Benoît B. Mandelbrot",
    dek: "A new geometry for a world that was never smooth. Clouds, coastlines, veins — all described at last.",
    image:
      "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/The%20Fractal%20Geometry%20of%20Nature%20%E2%80%94%20Benoi%CC%82t%20B.%20Mandelbrot.jpg",
    href: "/books/fractal-geometry-of-nature",
    pageColor: PASTEL.sky,
    publishedAt: "2025-07-01",
  },
  {
    slug: "lifelong-kindergarten",
    title: "Lifelong Kindergarten",
    author: "Mitchel Resnick",
    dek: "Why kindergarteners are the most creative. And how to stay that way forever.",
    image:
      "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/Lifelong%20Kindergarten-%20Cultivating%20Creativity%20Through%20Projects%2C%20Passion%2C%20Peers%2C%20and%20Play.jpg",
    href: "/books/lifelong-kindergarten",
    pageColor: PASTEL.lavender,
    publishedAt: "2025-06-01",
  },
  {
    slug: "surely-youre-joking-mr-feynman",
    title: "Surely You're Joking, Mr. Feynman!",
    author: "Richard P. Feynman",
    dek: "Cracked safes, bongo drums, and a Nobel Prize. The book that proves curiosity is a rigorous enough occupation on its own.",
    image:
      "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/Surely%20You%E2%80%99re%20Joking%2C%20Mr.%20Feynman!%20by%20Richard%20Feynman.jpg",
    href: "/books/surely-youre-joking-mr-feynman",
    pageColor: PASTEL.peach,
    publishedAt: "2025-05-01",
  },
];

/** Home “Good Internet” section — newest first, grid spans from slot pattern. */
export function getCuratedArticlesForHomeGrid(): CuratedArticle[] {
  const sorted = [...curatedArticles]
    .filter(
      (a) =>
        !a.href.startsWith("/tools/") &&
        !a.href.startsWith("/videos/") &&
        !a.href.startsWith("/books/"),
    )
    .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));
  const n = Math.min(sorted.length, HOME_GRID_SPANS.length);
  return sorted.slice(0, n).map((item, i) => ({
    ...item,
    span: HOME_GRID_SPANS[i]!,
  }));
}

/** Attach a neutral span for APIs that still expect `CuratedArticle`. */
export function toCuratedArticleWithSpan(
  a: CuratedArticleSource,
  span: "wide" | "narrow" = "narrow",
): CuratedArticle {
  return { ...a, span };
}
