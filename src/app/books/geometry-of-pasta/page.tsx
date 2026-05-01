import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/home/site-header";
import { ArticleProseLink } from "@/components/articles/article-prose-link";
import { ArticleReadMore } from "@/components/articles/article-read-more";

export const metadata: Metadata = {
  title: "The Geometry of Pasta — Caz Hildebrand & Jacob Kenedy",
  description:
    "Shape is not aesthetic — shape is the mathematics of flavour. The world's finest geometry lesson, served on a plate.",
  openGraph: {
    title: "The Geometry of Pasta — Caz Hildebrand & Jacob Kenedy",
    description:
      "Shape is not aesthetic — shape is the mathematics of flavour. The world's finest geometry lesson, served on a plate.",
    images: [
      {
        url: "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/The%20Geometry%20of%20Pasta.jpg",
        width: 800,
        height: 1000,
        alt: "The Geometry of Pasta — Caz Hildebrand & Jacob Kenedy",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Geometry of Pasta — Caz Hildebrand & Jacob Kenedy",
    description:
      "Short, wide, ridged rigatoni vs penne. Shape is not decoration — shape is what decides whether the sauce stays or slides.",
    images: [
      "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/The%20Geometry%20of%20Pasta.jpg",
    ],
  },
  alternates: {
    canonical: "/books/geometry-of-pasta",
  },
};

const SPREAD_IMAGES = [
  {
    src: "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/The%20Geometry%20of%20Pasta%202.webp",
    alt: "The Geometry of Pasta — black-and-white architectural pasta drawings, spread layout",
  },
  {
    src: "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/The%20Geometry%20of%20Pasta%203.jpg",
    alt: "The Geometry of Pasta — pasta shape diagrams with sauce pairing notes",
  },
];

const SHAPE_TABLE = [
  {
    pasta: "Spaghetti",
    character: "Long, smooth, round",
    sauce: "Oil-based, light tomato",
  },
  {
    pasta: "Rigatoni",
    character: "Wide tube, ridged",
    sauce: "Chunky meat ragù",
  },
  {
    pasta: "Orecchiette",
    character: "Small concave cup",
    sauce: "Greens, sausage, crumbs",
  },
  {
    pasta: "Tagliatelle",
    character: "Flat, wide ribbon",
    sauce: "Bolognese, butter",
  },
  {
    pasta: "Fusilli",
    character: "Tight helix spiral",
    sauce: "Pesto, thick tomato",
  },
];

export default function GeometryOfPastaPage() {
  return (
    <>
      <SiteHeader />

      {/* ── HERO ── */}
      <header className="relative overflow-hidden bg-[#141210] pb-0">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, #060504 0%, #141210 100%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[var(--page-max)] px-[var(--page-pad)]">
          <div className="flex flex-col items-center gap-10 py-20 text-center md:flex-row md:gap-16 md:py-28 md:text-left">
            {/* Cover */}
            <div className="w-52 shrink-0 sm:w-64 md:w-72">
              <div
                className="relative overflow-hidden rounded-lg shadow-[0_32px_80px_-16px_rgba(0,0,0,0.85)]"
                style={{ aspectRatio: "3/4" }}
              >
                <Image
                  src="https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/The%20Geometry%20of%20Pasta.jpg"
                  alt="The Geometry of Pasta — Caz Hildebrand & Jacob Kenedy, Boxtree 2010"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width:768px) 208px, 288px"
                />
              </div>
            </div>

            {/* Text */}
            <div className="max-w-xl">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-[#b84a2e]">
                On the Book &nbsp;·&nbsp; 2010 &nbsp;·&nbsp; Boxtree
              </p>
              <h1 className="mt-5 font-serif text-[clamp(2rem,6vw,4.2rem)] font-bold leading-[1.0] tracking-tight text-[#f5f0e8]">
                The Geometry
                <br />
                of{" "}
                <em className="text-[#d96040]">Pasta</em>
              </h1>
              <p className="mt-6 font-serif text-lg italic leading-relaxed text-[#8c8070]">
                Shape is not aesthetic — shape is the mathematics of flavour.
              </p>
              <p className="mt-5 font-mono text-[0.68rem] uppercase tracking-[0.15em] text-[#3d3830]">
                Caz Hildebrand &amp; Jacob Kenedy&nbsp;/&nbsp;1 design rule&nbsp;/&nbsp;∞
                sauces
              </p>
              <a
                href="https://amzn.to/4tYybcF"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#b84a2e] px-5 py-2.5 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white transition-opacity duration-200 hover:opacity-85"
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
            href="/"
            className="inline-flex text-sm text-[var(--ink-muted)] underline-offset-4 hover:underline"
          >
            ← Back to home
          </Link>
        </div>

        <article
          className="mx-auto max-w-[720px] px-[var(--page-pad)] pt-14 pb-20 text-[var(--ink)]"
          itemScope
          itemType="https://schema.org/Review"
        >
          <meta
            itemProp="itemReviewed"
            content="The Geometry of Pasta by Caz Hildebrand & Jacob Kenedy"
          />
          <meta itemProp="author" content="Abakcus" />

          {/* ── OPENING ── */}
          <p className="mb-14 border-b border-[var(--line)] pb-14 font-serif text-[1.45rem] italic leading-[1.5] text-[var(--ink)] sm:text-[1.65rem]">
            Have you ever thought about the difference between rigatoni and
            penne?
          </p>

          {/* ── INTRO PROSE ── */}
          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            Both are tubes. Both are pasta. But one paired with the wrong sauce
            becomes a disappointment. Short, wide, ridged rigatoni waits to be
            bitten with sauce pooled inside it. Penne is more delicate, faster
            — a different feeling, demanding a different sauce. Shape is not
            just aesthetic. Shape is the mathematics of flavour.
          </p>
          <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            <em>The Geometry of Pasta</em> by Caz Hildebrand and Jacob Kenedy
            is built entirely on this idea: every pasta shape has a logic, and
            without understanding that logic, you cannot choose the right sauce.
            It sits on a shelf alongside{" "}
            <ArticleProseLink
              href="/books/pasta-by-design"
              className="article-euclid-link"
            >
              Pasta by Design
            </ArticleProseLink>{" "}
            — George Legendre&apos;s parametric-equation catalogue of 92 shapes
            — as the warmer, more edible half of the same obsession.
          </p>

          {/* ── SECTION HEADER ── */}
          <div className="mb-5 flex items-baseline gap-4 border-b border-[var(--line)] pb-3">
            <span className="shrink-0 font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              01
            </span>
            <h2 className="font-serif text-[1.05rem] font-medium leading-snug tracking-[0.01em] text-[var(--ink)] sm:text-[1.15rem]">
              Anatomy of three shapes
            </h2>
          </div>

          {/* ── PASTA ANATOMY PANEL ── */}
          <div className="mb-10 overflow-hidden rounded-xl bg-[#141210] px-7 py-8 sm:px-9">
            <div className="grid grid-cols-3 gap-6">
              {/* Rigatoni */}
              <div className="flex flex-col items-center gap-3">
                <svg
                  width="64"
                  height="72"
                  viewBox="0 0 72 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Rigatoni cross-section"
                >
                  <ellipse cx="36" cy="18" rx="16" ry="7" stroke="rgba(255,255,255,0.8)" strokeWidth="1.2" fill="none" />
                  <ellipse cx="36" cy="62" rx="16" ry="7" stroke="rgba(255,255,255,0.8)" strokeWidth="1.2" fill="none" />
                  <line x1="20" y1="18" x2="20" y2="62" stroke="rgba(255,255,255,0.8)" strokeWidth="1.2" />
                  <line x1="52" y1="18" x2="52" y2="62" stroke="rgba(255,255,255,0.8)" strokeWidth="1.2" />
                  <line x1="24" y1="15" x2="24" y2="65" stroke="rgba(255,255,255,0.2)" strokeWidth="0.7" />
                  <line x1="29" y1="13" x2="29" y2="67" stroke="rgba(255,255,255,0.2)" strokeWidth="0.7" />
                  <line x1="36" y1="11" x2="36" y2="69" stroke="rgba(255,255,255,0.2)" strokeWidth="0.7" />
                  <line x1="43" y1="13" x2="43" y2="67" stroke="rgba(255,255,255,0.2)" strokeWidth="0.7" />
                  <line x1="48" y1="15" x2="48" y2="65" stroke="rgba(255,255,255,0.2)" strokeWidth="0.7" />
                </svg>
                <p className="font-serif text-[0.9rem] italic text-white/85">
                  Rigatoni
                </p>
                <p className="text-center text-[0.7rem] leading-snug text-white/40">
                  Wide tube, ridged — holds chunky sauces inside and out
                </p>
              </div>

              {/* Fusilli */}
              <div className="flex flex-col items-center gap-3">
                <svg
                  width="64"
                  height="72"
                  viewBox="0 0 72 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Fusilli spiral shape"
                >
                  <path d="M28 70 Q20 40 36 10 Q52 40 44 70" stroke="rgba(255,255,255,0.8)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                  <path d="M30 68 Q23 40 36 14 Q49 40 42 68" stroke="rgba(255,255,255,0.18)" strokeWidth="0.7" fill="none" strokeLinecap="round" />
                  <path d="M32 66 Q26 40 36 18 Q46 40 40 66" stroke="rgba(255,255,255,0.18)" strokeWidth="0.7" fill="none" strokeLinecap="round" />
                  <path d="M34 64 Q29 42 36 22 Q43 42 38 64" stroke="rgba(255,255,255,0.18)" strokeWidth="0.7" fill="none" strokeLinecap="round" />
                  <ellipse cx="36" cy="10" rx="8" ry="3.5" stroke="rgba(255,255,255,0.5)" strokeWidth="0.8" fill="none" />
                  <ellipse cx="36" cy="69" rx="8" ry="3.5" stroke="rgba(255,255,255,0.5)" strokeWidth="0.8" fill="none" />
                </svg>
                <p className="font-serif text-[0.9rem] italic text-white/85">
                  Fusilli
                </p>
                <p className="text-center text-[0.7rem] leading-snug text-white/40">
                  Spiral form traps sauce in every groove along the helix
                </p>
              </div>

              {/* Orecchiette */}
              <div className="flex flex-col items-center gap-3">
                <svg
                  width="64"
                  height="72"
                  viewBox="0 0 72 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="Orecchiette cup shape"
                >
                  <path d="M20 55 Q20 28 36 20 Q52 28 52 55" stroke="rgba(255,255,255,0.8)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                  <path d="M20 55 Q36 62 52 55" stroke="rgba(255,255,255,0.8)" strokeWidth="1.2" fill="none" />
                  <path d="M26 52 Q26 32 36 25 Q46 32 46 52" stroke="rgba(255,255,255,0.2)" strokeWidth="0.7" fill="none" />
                  <path d="M26 52 Q36 57 46 52" stroke="rgba(255,255,255,0.2)" strokeWidth="0.7" fill="none" />
                  <path d="M30 50 Q30 35 36 29 Q42 35 42 50" stroke="rgba(255,255,255,0.2)" strokeWidth="0.7" fill="none" />
                </svg>
                <p className="font-serif text-[0.9rem] italic text-white/85">
                  Orecchiette
                </p>
                <p className="text-center text-[0.7rem] leading-snug text-white/40">
                  Small cup — cradles both sauce and vegetables at once
                </p>
              </div>
            </div>
          </div>

          {/* ── SECOND PROSE ── */}
          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            The book hits the eyes first. Hildebrand&apos;s background in
            graphic design is felt on every page. Black-and-white, nearly
            anatomical drawings — each pasta shape presented like an
            architectural plan. Farfalle looks not like a butterfly but like an
            engineering marvel. Fusilli&apos;s spiral is rendered with
            mathematical elegance. No colour, no decoration — only form, only
            geometry.
          </p>
          <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            This aesthetic choice is not accidental. If Hildebrand wants you to
            focus on shape, she must remove every distraction. She does. The
            result is a cookbook that reads like a design monograph — both
            things at once, neither apologising for the other.
          </p>

          {/* ── PULL QUOTE ── */}
          <blockquote className="my-10 border-l-[3px] border-[#b84a2e] py-1 pl-6">
            <p className="font-serif text-[1.2rem] italic leading-[1.65] text-[var(--ink)] sm:text-[1.3rem]">
              Shape is not decoration. Shape is what decides whether the sauce
              stays or slides, whether the bite is satisfying or empty.
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

          {/* ── SECTION HEADER ── */}
          <div className="mb-5 flex items-baseline gap-4 border-b border-[var(--line)] pb-3">
            <span className="shrink-0 font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              02
            </span>
            <h2 className="font-serif text-[1.05rem] font-medium leading-snug tracking-[0.01em] text-[var(--ink)] sm:text-[1.15rem]">
              Shape meets sauce
            </h2>
          </div>

          {/* ── COMPARISON TABLE ── */}
          <div className="mb-10 overflow-hidden rounded-xl border border-[var(--line)]">
            <div className="grid grid-cols-[1.2fr_1fr_1fr] gap-3 bg-[#141210] px-5 py-3">
              {["Pasta", "Character", "Best with"].map((h) => (
                <span
                  key={h}
                  className="font-sans text-[0.6rem] font-medium uppercase tracking-[0.14em] text-white/40"
                >
                  {h}
                </span>
              ))}
            </div>
            <div className="divide-y divide-[var(--line)]">
              {SHAPE_TABLE.map((row, i) => (
                <div
                  key={row.pasta}
                  className={`grid grid-cols-[1.2fr_1fr_1fr] items-center gap-3 px-5 py-3.5 ${i % 2 === 1 ? "bg-[var(--tonal)]" : "bg-white"}`}
                >
                  <p className="font-serif text-[0.95rem] italic text-[var(--ink)]">
                    {row.pasta}
                  </p>
                  <p className="text-xs text-[var(--ink-muted)]">
                    {row.character}
                  </p>
                  <p className="text-xs font-medium text-[#4a7c59]">
                    {row.sauce}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── THIRD PROSE ── */}
          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            Kenedy&apos;s role is to warm what the visuals keep cool. The
            recipes alongside each pasta shape are short, trustworthy, and
            deeply Italian — meaning the ingredient lists are not long, the
            technique is not fussy, but the result is always correct.
            Kenedy&apos;s approach rests on a single question: what does this
            shape hold? What does it lose? Which sauce serves it — and which
            drowns it?
          </p>
          <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            The answers sometimes surprise. Spaghetti does not go with every
            sauce — in fact, by most careful accounts, it is a fairly restricted
            shape. Orecchiette, that small ear-shaped pasta, is remarkably
            versatile — its hollow embraces both sauce and vegetable in the same
            bite.
          </p>

          {/* ── SPREAD IMAGES ── */}
          <div className="mb-10 flex flex-col gap-12">
            {SPREAD_IMAGES.map((img) => (
              <figure key={img.src} className="m-0">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[var(--tonal)]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                    sizes="(max-width:640px) 92vw, 680px"
                  />
                </div>
                <figcaption className="mt-2 text-center font-mono text-[0.7rem] leading-snug text-[var(--ink-muted)] tracking-wide">
                  {img.alt}
                </figcaption>
              </figure>
            ))}
          </div>

          {/* ── DESIGN NOTE ── */}
          <div className="my-10 flex gap-5 rounded-xl border border-[var(--line)] bg-white px-6 py-5 sm:px-7">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--line)]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <rect
                  x="2"
                  y="2"
                  width="12"
                  height="12"
                  rx="2"
                  stroke="#8c8680"
                  strokeWidth="1"
                />
                <line
                  x1="5"
                  y1="8"
                  x2="11"
                  y2="8"
                  stroke="#8c8680"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                <line
                  x1="8"
                  y1="5"
                  x2="8"
                  y2="11"
                  stroke="#8c8680"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div>
              <p className="font-sans text-sm font-medium text-[var(--ink)]">
                On the design
              </p>
              <p className="mt-1 font-serif text-sm italic leading-relaxed text-[var(--ink-muted)]">
                Hildebrand&apos;s black-and-white illustration style — clinical,
                almost architectural — was a deliberate act of restraint. In a
                world of glossy food photography, this book insists on geometry
                over appetite. The result is a cookbook that reads like a design
                monograph. Both things at once. Neither apologising for the
                other.
              </p>
            </div>
          </div>

          {/* ── CLOSING QUOTE BLOCK ── */}
          <div className="mb-10 rounded-xl bg-[#b84a2e] px-7 py-7 sm:px-8 sm:py-8">
            <p className="mb-4 font-serif text-[1.05rem] italic leading-[1.7] text-white/92 sm:text-[1.1rem]">
              If{" "}
              <ArticleProseLink
                href="/books/oliver-byrne-euclid"
                className="article-euclid-link"
              >
                Euclid
              </ArticleProseLink>{" "}
              had eaten pasta, he would probably have written this book.
            </p>
            <p className="font-sans text-[0.62rem] uppercase tracking-[0.16em] text-white/45">
              Abakcus &nbsp;·&nbsp; April 2026
            </p>
          </div>

          {/* ── DIVIDER ── */}
          <div className="my-10 flex items-center gap-4">
            <span className="h-px flex-1 bg-[var(--line)]" />
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
              §
            </span>
            <span className="h-px flex-1 bg-[var(--line)]" />
          </div>

          {/* ── CLOSING PROSE ── */}
          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            One more thing about this book: while reading it, you feel compelled
            to go to the kitchen. This is the highest achievement a cookbook can
            reach.
          </p>
          <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            But <em>The Geometry of Pasta</em> is not merely a cookbook. It is
            a design manifesto, a meditation on form and function, and the
            world&apos;s most delicious geometry lesson — served in a single,
            quietly brilliant volume.
          </p>

          {/* ── VERDICT ── */}
          <div className="mt-12 flex gap-5 rounded-xl border border-[var(--line)] bg-white px-6 py-6 sm:px-8 sm:py-7">
            <span className="shrink-0 pt-0.5 text-2xl leading-none tracking-widest text-[#b84a2e]">
              ★★★★★
            </span>
            <div>
              <p className="font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
                In short
              </p>
              <p className="mt-2 font-serif text-base italic leading-relaxed text-[var(--ink-muted)] sm:text-[1.05rem]">
                A book that makes you think differently about both design and
                dinner. Hildebrand&apos;s rigour and Kenedy&apos;s warmth
                balance each other perfectly — and the result is one of the
                most distinctive cookbooks ever printed.
              </p>
            </div>
          </div>

          {/* ── FOOTER NOTE ── */}
          <p className="mt-12 text-xs leading-relaxed text-[var(--ink-muted)]">
            Caz Hildebrand &amp; Jacob Kenedy —{" "}
            <a
              href="https://amzn.to/4tYybcF"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-[#b84a2e]"
            >
              <em>The Geometry of Pasta</em>
            </a>
            <br />
            Boxtree, 2010 &nbsp;·&nbsp; abakcus.com
          </p>
        </article>
        <ArticleReadMore currentSlug="geometry-of-pasta" />
      </div>
    </>
  );
}
