import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/home/site-header";
import { ArticleProseLink } from "@/components/articles/article-prose-link";
import { ArticleReadMore } from "@/components/articles/article-read-more";

const CANONICAL =
  "https://abakcus.com/books/islamic-geometric-patterns-eric-broug";
const OG_IMAGE =
  "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/Islamic%20Geometric%20Patterns%20by%20Eric%20Broug.jpg";

export const metadata: Metadata = {
  title: "Islamic Geometric Patterns by Eric Broug | Abakcus",
  description:
    "A compass, a ruler, and 1,400 years of quiet geometry. A reading note on Eric Broug's Islamic Geometric Patterns — step-by-step construction manual, compressed history, and silent exercise book in one.",
  authors: [{ name: "Ali Kaya" }],
  alternates: { canonical: CANONICAL },
  keywords: [
    "Eric Broug",
    "Islamic geometric patterns",
    "Islamic geometric patterns book",
    "Islamic geometry",
    "Islamic art book",
    "geometric pattern construction",
    "compass ruler geometry",
    "Thames Hudson Islamic patterns",
    "Islamic architecture patterns",
    "geometric design Islam",
    "mathematics art history",
    "Islamic tiles",
  ],
  openGraph: {
    title: "Compass, Ruler, and Silence — On Eric Broug's Islamic Geometric Patterns",
    description:
      "A compass, a ruler, and 1,400 years of quiet geometry. Step-by-step instructions for 23 patterns from real Islamic buildings — from the Great Mosque of Córdoba to Samarkand.",
    url: CANONICAL,
    siteName: "Abakcus",
    type: "article",
    publishedTime: "2026-05-07",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 800,
        height: 1067,
        alt: "Islamic Geometric Patterns by Eric Broug — Thames & Hudson",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compass, Ruler, and Silence — On Eric Broug's Islamic Geometric Patterns",
    description:
      "No calculator. No trigonometry. Only a circle and a straight line — and from there, an entire world unfolds.",
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Review",
  name: "Compass, Ruler, and Silence — On Eric Broug's Islamic Geometric Patterns",
  description:
    "A reading note on Eric Broug's Islamic Geometric Patterns. On a compass, a ruler, and 1,400 years of quiet geometry.",
  reviewRating: {
    "@type": "Rating",
    ratingValue: "4",
    bestRating: "5",
  },
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
  datePublished: "2026-05-07",
  url: CANONICAL,
  itemReviewed: {
    "@type": "Book",
    name: "Islamic Geometric Patterns",
    author: {
      "@type": "Person",
      name: "Eric Broug",
    },
    publisher: {
      "@type": "Organization",
      name: "Thames & Hudson",
    },
    datePublished: "2008",
    inLanguage: "en",
    image: OG_IMAGE,
    isbn: "9780500287217",
    numberOfPages: "144",
  },
};

const BUILDINGS = [
  { city: "Córdoba", building: "Great Mosque" },
  { city: "Damascus", building: "Umayyad Mosque" },
  { city: "Cairo", building: "Sultan Hassan Complex" },
  { city: "Baghdad", building: "Mustansiriya Madrasa" },
  { city: "Samarkand", building: "Shah-i-Zinda" },
];

export default function IslamicGeometricPatternsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />

      {/* ── HERO ── */}
      <header className="relative overflow-hidden pb-0" style={{ backgroundColor: "#0d1e2e" }}>
        {/* Geometric tile background */}
        <div className="absolute inset-0 opacity-[0.12]" aria-hidden>
          <svg
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="islamicTile"
                x="0"
                y="0"
                width="72"
                height="72"
                patternUnits="userSpaceOnUse"
              >
                <g stroke="#c9a84c" strokeWidth="0.8" fill="none">
                  <polygon points="36,4 60,18 60,54 36,68 12,54 12,18" />
                  <polygon points="36,12 54,22 54,50 36,60 18,50 18,22" />
                  <circle cx="36" cy="36" r="10" />
                  <line x1="36" y1="4" x2="36" y2="12" />
                  <line x1="60" y1="18" x2="54" y2="22" />
                  <line x1="60" y1="54" x2="54" y2="50" />
                  <line x1="36" y1="68" x2="36" y2="60" />
                  <line x1="12" y1="54" x2="18" y2="50" />
                  <line x1="12" y1="18" x2="18" y2="22" />
                  <line x1="26" y1="36" x2="18" y2="22" />
                  <line x1="46" y1="36" x2="54" y2="22" />
                  <line x1="26" y1="36" x2="18" y2="50" />
                  <line x1="46" y1="36" x2="54" y2="50" />
                </g>
              </pattern>
              <pattern
                id="islamicTile2"
                x="0"
                y="0"
                width="72"
                height="72"
                patternUnits="userSpaceOnUse"
              >
                <g stroke="#4a8fa8" strokeWidth="0.4" fill="none">
                  <rect
                    x="8"
                    y="8"
                    width="56"
                    height="56"
                    transform="rotate(45 36 36)"
                  />
                </g>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#islamicTile)" />
            <rect
              width="100%"
              height="100%"
              fill="url(#islamicTile2)"
              opacity="0.5"
            />
          </svg>
        </div>
        {/* Gold-to-teal bottom accent bar */}
        <div className="absolute bottom-0 left-0 right-0 flex h-1">
          <div className="flex-1" style={{ backgroundColor: "#c9a84c" }} />
          <div className="flex-1" style={{ backgroundColor: "#4a8fa8" }} />
          <div className="flex-1" style={{ backgroundColor: "#1a6b5a" }} />
          <div className="flex-1" style={{ backgroundColor: "#1a3a6b" }} />
        </div>
        <div className="relative z-10 mx-auto max-w-[var(--page-max)] px-[var(--page-pad)]">
          <div className="flex flex-col items-center gap-10 py-20 pb-24 text-center md:flex-row md:gap-16 md:py-28 md:pb-32 md:text-left">
            {/* Cover */}
            <div className="w-48 shrink-0 sm:w-60 md:w-68">
              <div
                className="relative overflow-hidden rounded-lg shadow-[0_32px_80px_-16px_rgba(0,0,0,0.8)]"
                style={{ aspectRatio: "3/4" }}
              >
                <Image
                  src={OG_IMAGE}
                  alt="Islamic Geometric Patterns by Eric Broug — Thames & Hudson"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width:768px) 192px, 272px"
                />
              </div>
            </div>

            {/* Text */}
            <div className="max-w-xl">
              <p
                className="font-mono text-[0.68rem] uppercase tracking-[0.22em]"
                style={{ color: "#c9a84c" }}
              >
                On the Book &nbsp;·&nbsp; Thames &amp; Hudson
                &nbsp;·&nbsp; 2008 / rev. 2019
              </p>
              <h1 className="mt-5 font-serif text-[clamp(1.9rem,5.5vw,3.6rem)] font-bold leading-[1.08] tracking-tight text-[#f5f0e8]">
                Compass, Ruler,
                <br />
                <em style={{ color: "#c9a84c" }}>and Silence</em>
              </h1>
              <p className="mt-4 font-serif text-lg italic leading-relaxed" style={{ color: "#7a9ab8" }}>
                On Eric Broug&apos;s{" "}
                <em className="not-italic font-medium text-[#f5f0e8]">
                  Islamic Geometric Patterns
                </em>
              </p>
              <p className="mt-4 font-mono text-[0.68rem] uppercase tracking-[0.15em]" style={{ color: "#3a5a7a" }}>
                Eric Broug&nbsp;/&nbsp;144 pages&nbsp;/&nbsp;200+ illustrations&nbsp;/&nbsp;23 patterns
              </p>
              <a
                href="https://amzn.to/4tla9YE"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.16em] transition-opacity duration-200 hover:opacity-85"
                style={{ backgroundColor: "#c9a84c", color: "#0d1e2e" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                Buy on Amazon
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ── ARTICLE ── */}
      <div className="uc-page-bg pb-16">
        <div className="mx-auto max-w-[var(--page-max)] px-[var(--page-pad)] pt-6">
          <Link
            href="/books"
            className="inline-flex text-sm text-[var(--ink-muted)] underline-offset-4 hover:underline"
          >
            ← All books
          </Link>
        </div>

        <article className="mx-auto max-w-[720px] px-[var(--page-pad)] pt-14 pb-20 text-[var(--ink)]">

          {/* ── BOOK INFO STRIP ── */}
          <div className="mb-12 grid grid-cols-2 gap-x-6 gap-y-3 border border-[var(--line)] border-t-[3px] bg-white px-6 py-5 sm:grid-cols-4" style={{ borderTopColor: "#c9a84c" }}>
            {[
              { label: "Author", value: "Eric Broug" },
              { label: "Publisher", value: "Thames & Hudson" },
              { label: "Pages", value: "144 pp., 200+ illus." },
              { label: "Subject", value: "Islamic geometric patterns" },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-mono text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-[var(--ink-muted)]">
                  {item.label}
                </p>
                <p className="mt-1 font-serif text-sm text-[var(--ink)]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* ── OPENING ── */}
          <p className="mb-12 border-b border-[var(--line)] pb-12 font-serif text-[1.5rem] italic leading-[1.55] text-[var(--ink)] sm:text-[1.65rem]">
            No calculator. No trigonometry. Only a circle and a straight line —
            and from there, an entire world unfolds.
          </p>

          {/* ── DROP-CAP INTRO ── */}
          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            <span
              className="float-left mr-2 mt-1 font-serif text-[4.5rem] font-bold leading-[0.78] text-[var(--ink)] sm:text-[5.2rem]"
              aria-hidden="true"
            >
              W
            </span>
            hen I first opened this book, I expected a textbook. A few pages
            in, I realized I was holding something else entirely: a set of
            step-by-step instructions that quietly interrogates its own
            feasibility. Every construction sequence carries an unspoken
            question: <em>&ldquo;Can you actually do this?&rdquo;</em>
          </p>
          <p className="clear-both mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            Eric Broug studied the history of Islamic art and architecture at
            SOAS in London, and his aim here is clear and unassuming: to teach
            the geometric patterns found in Islamic architecture, placed in
            their historical context. The toolkit required is equally plain — a
            pencil, a ruler, a compass.
          </p>

          {/* ── PULL QUOTE ── */}
          <blockquote
            className="my-10 border-l-[3px] py-1 pl-6"
            style={{ borderLeftColor: "#c9a84c" }}
          >
            <p className="font-serif text-[1.2rem] italic leading-[1.65] text-[var(--ink)] sm:text-[1.3rem]">
              No calculator. No trigonometry. Only a circle and a straight line — and
              from there, an entire world unfolds.
            </p>
          </blockquote>

          {/* ── DIVIDER ── */}
          <div className="my-10 flex items-center gap-4">
            <span className="h-px flex-1 bg-[var(--line)]" />
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
              §
            </span>
            <span className="h-px flex-1 bg-[var(--line)]" />
          </div>

          {/* ── SECTION 01 ── */}
          <div className="mb-5 flex items-baseline gap-4 border-b border-[var(--line)] pb-3">
            <span className="shrink-0 font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              01
            </span>
            <h2 className="font-serif text-[1.05rem] font-medium leading-snug tracking-[0.01em] text-[var(--ink)] sm:text-[1.15rem]">
              Three families, one world
            </h2>
          </div>

          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            The book is organized around three foundational{" "}
            <em>pattern families: the square, the hexagon, and the pentagon</em>
            . These three forms account for nearly all geometric production
            across the Islamic world. Broug doesn&apos;t explain the
            mathematics — he demonstrates it. You draw the circle, trace the
            arcs, locate the intersections, complete the pattern. The result in
            front of you is the same design found on the walls of the Great
            Mosque of Córdoba. The Umayyad Mosque in Damascus. Cairo. Baghdad.
            Samarkand.
          </p>
          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            Each of the book&apos;s 23 patterns comes from a real building.
            Broug prefaces every set of instructions with a brief historical
            note — where the pattern was made, when, and in what context. These
            notes are dry without being lifeless: &ldquo;This pattern dates
            from 12th-century Syria and was originally executed in stone
            inlay.&rdquo; Then you pick up your pencil.
          </p>

          {/* ── BUILDINGS PANEL ── */}
          <div className="mb-10 rounded-xl border border-[var(--line)] bg-white px-6 py-5">
            <p className="mb-4 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-[var(--ink-muted)]">
              A few buildings in the book
            </p>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {BUILDINGS.map((b) => (
                <li key={b.city} className="flex items-center gap-3">
                  <span
                    className="h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: "#4a8fa8" }}
                    aria-hidden
                  />
                  <span className="font-serif text-sm text-[var(--ink)]">
                    <span className="font-medium">{b.city}</span>
                    <span className="text-[var(--ink-muted)]">
                      {" "}
                      — {b.building}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── DIVIDER ── */}
          <div className="my-10 flex items-center gap-4">
            <span className="h-px flex-1 bg-[var(--line)]" />
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
              §
            </span>
            <span className="h-px flex-1 bg-[var(--line)]" />
          </div>

          {/* ── SECTION 02 ── */}
          <div className="mb-5 flex items-baseline gap-4 border-b border-[var(--line)] pb-3">
            <span className="shrink-0 font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              02
            </span>
            <h2 className="font-serif text-[1.05rem] font-medium leading-snug tracking-[0.01em] text-[var(--ink)] sm:text-[1.15rem]">
              The geometry that lived in the hand
            </h2>
          </div>

          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            Where the book becomes genuinely interesting is at its midpoint —
            the turn from beginner patterns to intermediate and advanced. Early
            on, everything is legible: thick lines, wide steps, minimal room
            for error. As complexity increases, the situation changes. Now
            there are six, seven, eight overlapping circles. A deviation of one
            millimeter corrupts the next ten steps. And here the book implies
            something it never states: the craftsmen who originally made these
            patterns — who applied them flawlessly onto stone or tile — were
            not calculating. They knew geometry not from memory but from the
            hand.
          </p>
          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            Broug is candid about how little we know of these craftsmen. They
            are anonymous. Unsigned. They left no names, only patterns. That is
            a different kind of persistence. The same anonymity runs through
            much of the Islamic scholarly tradition — a{" "}
            <ArticleProseLink href="/articles/al-jaghmini-astronomy-manuscript">
              12th-century astronomical manuscript
            </ArticleProseLink>{" "}
            from Khwarazm, copied and recopied for three centuries, carries
            virtually no trace of the copyists who kept it alive. What mattered
            was the knowledge, not the name.
          </p>

          {/* ── PULL QUOTE ── */}
          <blockquote
            className="my-10 border-l-[3px] py-1 pl-6"
            style={{ borderLeftColor: "#1a6b5a" }}
          >
            <p className="font-serif text-[1.2rem] italic leading-[1.65] text-[var(--ink)] sm:text-[1.3rem]">
              What the anonymous masters left behind outlasted their names —
              because what becomes pattern sidesteps time entirely.
            </p>
          </blockquote>

          {/* ── DIVIDER ── */}
          <div className="my-10 flex items-center gap-4">
            <span className="h-px flex-1 bg-[var(--line)]" />
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
              §
            </span>
            <span className="h-px flex-1 bg-[var(--line)]" />
          </div>

          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            The book has real limitations. Broug&apos;s step counts
            occasionally run longer than necessary — several readers have noted
            this, pointing out sequences that could be shortened without any
            loss of accuracy. The criticism is fair. But this is a pedagogical
            choice, not an oversight. His intended audience is not the
            mathematician; it is the person whose hands want to learn something
            their{" "}
            <ArticleProseLink href="/rafael-araujo-geometrical-masterpieces">
              eyes have admired from a distance
            </ArticleProseLink>
            .
          </p>
          <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            A more significant gap: the book is almost entirely silent on
            meaning. The relationship between{" "}
            <ArticleProseLink href="/articles/al-jaghmini-astronomy-manuscript">
              Islamic geometry
            </ArticleProseLink>{" "}
            and theological thought, the{" "}
            <ArticleProseLink href="/articles/penrose-journal">
              logic of infinite repetition
            </ArticleProseLink>
            , the reasons figural representation was displaced by abstraction
            in certain contexts — these questions live at the margins. Broug
            teaches the construction and leaves the interpretation to you.
            Those who want the deeper framework will find it elsewhere — in
            Keith Critchlow, for instance, or in the broader scholarly
            literature on Islamic visual culture.
          </p>

          {/* ── DIVIDER ── */}
          <div className="my-10 flex items-center gap-4">
            <span className="h-px flex-1 bg-[var(--line)]" />
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
              §
            </span>
            <span className="h-px flex-1 bg-[var(--line)]" />
          </div>

          {/* ── SECTION 04 ── */}
          <div className="mb-5 flex items-baseline gap-4 border-b border-[var(--line)] pb-3">
            <span className="shrink-0 font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              04
            </span>
            <h2 className="font-serif text-[1.05rem] font-medium leading-snug tracking-[0.01em] text-[var(--ink)] sm:text-[1.15rem]">
              What happens in the classroom
            </h2>
          </div>

          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            As a mathematics teacher, I&apos;ll say this plainly: the book
            works in a classroom. When students hold a ruler instead of a
            screen, something shifts. Geometry stops being abstract and becomes
            something they can ruin, correct, and finish. When the pattern
            closes, no answer key is needed — the eye knows immediately. That
            experience is not something a problem set can replicate.
          </p>

          {/* ── FOR WHOM ── */}
          <div
            className="my-10 rounded-xl px-7 py-7 sm:px-8 sm:py-8"
            style={{ backgroundColor: "#0d1e2e" }}
          >
            <p className="mb-5 font-sans text-[0.58rem] uppercase tracking-[0.18em] text-white/35">
              This book is for
            </p>
            <ul className="flex flex-col gap-4">
              {[
                {
                  color: "#c9a84c",
                  text: "Mathematicians, designers, and art history enthusiasts who want to understand how geometry became ornament.",
                },
                {
                  color: "#4a8fa8",
                  text: "Teachers looking for something that proves geometry can be built, not just solved.",
                },
                {
                  color: "#1a6b5a",
                  text: "Anyone who has ever looked at an Islamic tile and wondered how the line got there.",
                },
                {
                  color: "rgba(255,255,255,0.4)",
                  text: "Those who prefer to work slowly, in pencil, with a compass — and who don't mind getting it wrong the first time.",
                },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-3">
                  <span
                    className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: item.color }}
                    aria-hidden="true"
                  />
                  <span className="font-serif text-sm italic leading-relaxed text-white/80 sm:text-[0.95rem]">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            Broug&apos;s book is a construction manual, a compressed history,
            and a quiet exercise book, all at once. It makes no dramatic
            promises. It delivers what it says it will. That is rarer than it
            sounds.
          </p>

          {/* ── FOOTNOTES ── */}
          <div className="mt-10 border-t border-[var(--line)] pt-6 font-mono text-[0.68rem] leading-[1.65] text-[var(--ink-muted)]">
            <p>
              ¹ The revised 2019 edition adds seven new patterns from Turkey,
              Morocco, Syria, Spain, and Pakistan — including a design from the
              Ak Medrese in Niğde, one of the few Anatolian examples in the
              book.
            </p>
            <p className="mt-3">
              ² For a more scholarly treatment, Broug&apos;s{" "}
              <em>Islamic Geometric Design</em> (Thames &amp; Hudson, 2013)
              covers the same territory with greater historical and analytical
              depth. The{" "}
              <em>Islamic Design Workbook</em> offers a more hands-on companion
              volume.
            </p>
          </div>

          {/* ── VERDICT ── */}
          <div className="mt-12 flex gap-5 rounded-xl border border-[var(--line)] bg-white px-6 py-6 sm:px-8 sm:py-7">
            <span
              className="shrink-0 pt-0.5 text-2xl leading-none tracking-widest"
              style={{ color: "#c9a84c" }}
            >
              ★★★★☆
            </span>
            <div>
              <p className="font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
                In short
              </p>
              <p className="mt-2 font-serif text-base italic leading-relaxed text-[var(--ink-muted)] sm:text-[1.05rem]">
                The kind of book your hands want to learn from, while your mind
                wonders why it&apos;s taking so long. The compass keeps
                turning.
              </p>
            </div>
          </div>

          {/* ── FOOTER NOTE ── */}
          <p className="mt-12 text-xs leading-relaxed text-[var(--ink-muted)]">
            Eric Broug —{" "}
            <a
              href="https://amzn.to/4tla9YE"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-[var(--ink)]"
            >
              <em>Islamic Geometric Patterns</em>
            </a>
            <br />
            Thames &amp; Hudson, 2008 &nbsp;·&nbsp; Revised edition:
            2019 &nbsp;·&nbsp; abakcus.com
          </p>
        </article>
        <ArticleReadMore currentSlug="islamic-geometric-patterns-eric-broug" />
      </div>
    </>
  );
}
