import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/home/site-header";
import { ArticleProseLink } from "@/components/articles/article-prose-link";
import { ArticleReadMore } from "@/components/articles/article-read-more";

export const metadata: Metadata = {
  title: "The Art and Science of Ernst Haeckel — Where Biology Became Beauty",
  description:
    "Ernst Haeckel drew the natural world not to document it, but to make an argument. Five centuries later, that argument still holds the page.",
  openGraph: {
    title: "The Art and Science of Ernst Haeckel — Where Biology Became Beauty",
    description:
      "Ernst Haeckel drew the natural world not to document it, but to make an argument. TASCHEN's monumental volume gathers the visual evidence.",
    images: [
      {
        url: "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/The%20Art%20and%20Science%20of%20Ernst%20Haeckel%20by%20TASCHEN.png",
        width: 800,
        height: 1000,
        alt: "The Art and Science of Ernst Haeckel — TASCHEN",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Art and Science of Ernst Haeckel — Where Biology Became Beauty",
    description:
      "450 lithographs, watercolors, and drawings. Radiolarians, corals, jellyfish. Art Nouveau before Art Nouveau had a name.",
    images: [
      "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/The%20Art%20and%20Science%20of%20Ernst%20Haeckel%20by%20TASCHEN.png",
    ],
  },
  alternates: {
    canonical: "/books/the-art-and-science-of-ernst-haeckel",
  },
};

const SPREAD_IMAGES = [
  {
    src: "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/The%20Art%20and%20Science%20of%20Ernst%20Haeckel%20by%20TASCHEN%202.webp",
    alt: "Haeckel radiolarian plates — geometric symmetry of single-celled organisms",
  },
  {
    src: "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/The%20Art%20and%20Science%20of%20Ernst%20Haeckel%20by%20TASCHEN%203.webp",
    alt: "Haeckel jellyfish illustrations — Medusae plates",
  },
  {
    src: "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/The%20Art%20and%20Science%20of%20Ernst%20Haeckel%20by%20TASCHEN%204.jpg",
    alt: "Haeckel coral and marine organism drawings",
  },
  {
    src: "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/The%20Art%20and%20Science%20of%20Ernst%20Haeckel%20by%20TASCHEN%205.jpg",
    alt: "Haeckel botanical and fern illustrations",
  },
];

const INFLUENCE = [
  {
    role: "Glasswork",
    name: "Émile Gallé",
    desc: "His nature-inspired glass vessels echo Haeckel's organic forms directly.",
  },
  {
    role: "Architecture",
    name: "Hector Guimard",
    desc: "The sinuous iron curves of Paris Métro entrances owe a quiet debt to Haeckel's radiolarians.",
  },
  {
    role: "Jewellery",
    name: "René Lalique",
    desc: "Insect and plant motifs rendered with scientific precision — unmistakably Haeckelian.",
  },
];

export default function HaeckelPage() {
  return (
    <>
      <SiteHeader />

      {/* ── HERO ── */}
      <header className="relative overflow-hidden bg-[#1a2a1a] pb-0">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, #0d1a0d 0%, #1a2a1a 100%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[var(--page-max)] px-[var(--page-pad)]">
          <div className="flex flex-col items-center gap-10 py-20 text-center md:flex-row md:gap-16 md:py-28 md:text-left">
            {/* Cover */}
            <div className="w-52 shrink-0 sm:w-64 md:w-72">
              <div
                className="relative overflow-hidden rounded-lg shadow-[0_32px_80px_-16px_rgba(0,0,0,0.75)]"
                style={{ aspectRatio: "3/4" }}
              >
                <Image
                  src="https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/The%20Art%20and%20Science%20of%20Ernst%20Haeckel%20by%20TASCHEN.png"
                  alt="The Art and Science of Ernst Haeckel — TASCHEN 2017"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width:768px) 208px, 288px"
                />
              </div>
            </div>

            {/* Text */}
            <div className="max-w-xl">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-[#8fbe6f]">
                On the Book &nbsp;·&nbsp; 2017 &nbsp;·&nbsp; TASCHEN
              </p>
              <h1 className="mt-5 font-serif text-[clamp(2rem,6vw,4rem)] font-bold leading-[1.05] tracking-tight text-[#f4f0e6]">
                The Art and Science
                <br />
                of{" "}
                <em className="text-[#8fbe6f]">Ernst Haeckel</em>
              </h1>
              <p className="mt-6 font-serif text-lg italic leading-relaxed text-[#8a9e7a]">
                Where biology ended and beauty began.
              </p>
              <p className="mt-5 font-mono text-[0.68rem] uppercase tracking-[0.15em] text-[#4a6040]">
                Willmann &amp; Voss&nbsp;/&nbsp;704 pages&nbsp;/&nbsp;450+
                plates&nbsp;/&nbsp;∞ symmetry
              </p>
              <a
                href="https://amzn.to/4dYbAZc"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#8fbe6f] px-5 py-2.5 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#1a2a1a] transition-opacity duration-200 hover:opacity-85"
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
            content="The Art and Science of Ernst Haeckel by Rainer Willmann and Julia Voss"
          />
          <meta itemProp="author" content="Abakcus" />

          {/* ── OPENING QUOTE ── */}
          <blockquote className="mb-10 border-l-[3px] border-[#5a7a4a] py-1 pl-6">
            <p className="font-serif text-[1.15rem] italic leading-[1.7] text-[var(--ink)] sm:text-[1.2rem]">
              In 1866, while drawing the arms of an octopus, Ernst Haeckel was
              probably the luckiest man alive — because he could see those arms
              both through a microscope and through the eyes of an artist. And
              as he translated what he saw onto paper, he was asking a question
              science had barely thought to pose: why is nature&apos;s beauty so
              perfectly systematic?
            </p>
          </blockquote>

          {/* ── DROP-CAP INTRO ── */}
          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            <span
              className="float-left mr-2 mt-1 font-serif text-[4.5rem] font-bold leading-[0.78] text-[var(--ink)] sm:text-[5.2rem]"
              aria-hidden="true"
            >
              T
            </span>
            ASCHEN&apos;s monumental volume brings together the visual evidence
            of that question: over 450 lithographs, watercolors, and drawings.
            Radiolarians, corals, jellyfish, ferns, butterflies. Each rendered
            with such painstaking care that deciding whether you&apos;re looking
            at science or art becomes genuinely impossible.
          </p>

          {/* ── DIVIDER ── */}
          <div className="clear-both my-10 flex items-center gap-4">
            <span className="h-px flex-1 bg-[var(--line)]" />
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
              §
            </span>
            <span className="h-px flex-1 bg-[var(--line)]" />
          </div>

          {/* ── SPREAD GALLERY ── */}
          <div className="mb-5 flex items-baseline gap-4 border-b border-[var(--line)] pb-3">
            <span className="shrink-0 font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              01
            </span>
            <h2 className="font-serif text-[1.05rem] font-medium leading-snug tracking-[0.01em] text-[var(--ink)] sm:text-[1.15rem]">
              From the plates
            </h2>
          </div>

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

          {/* ── DIVIDER ── */}
          <div className="my-10 flex items-center gap-4">
            <span className="h-px flex-1 bg-[var(--line)]" />
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
              §
            </span>
            <span className="h-px flex-1 bg-[var(--line)]" />
          </div>

          {/* ── INTERPRETER SECTION ── */}
          <div className="mb-5 flex items-baseline gap-4 border-b border-[var(--line)] pb-3">
            <span className="shrink-0 font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              02
            </span>
            <h2 className="font-serif text-[1.05rem] font-medium leading-snug tracking-[0.01em] text-[var(--ink)] sm:text-[1.15rem]">
              Not an observer — an interpreter
            </h2>
          </div>

          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            What set Haeckel apart from other natural history illustrators was
            that he was not an observer but an interpreter. When drawing the
            skeletons of single-celled organisms under the microscope, he
            idealized them — slightly rounder, slightly more symmetrical,
            slightly more perfect than they actually were. This infuriated
            scientists. But those same drawings went on to nourish the Art
            Nouveau movement, shaping Émile Gallé&apos;s glasswork, Hector
            Guimard&apos;s Paris Métro entrances, René Lalique&apos;s jewellery.
          </p>

          {/* ── PULL QUOTE ── */}
          <blockquote className="my-10 border-l-[3px] border-[#8a6a3a] py-1 pl-6">
            <p className="font-serif text-[1.2rem] italic leading-[1.65] text-[var(--ink)] sm:text-[1.3rem]">
              Haeckel&apos;s lines entered the DNA of an entire artistic
              movement. And he never planned any of it.
            </p>
          </blockquote>

          {/* ── INFLUENCE GRID ── */}
          <p className="mb-4 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--ink-muted)]">
            The artists Haeckel unknowingly inspired
          </p>
          <div className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {INFLUENCE.map((inf) => (
              <div
                key={inf.name}
                className="rounded-xl border border-[var(--line)] bg-white px-5 py-5"
              >
                <p className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-[#5a7a4a]">
                  {inf.role}
                </p>
                <p className="mt-2 font-serif text-base font-medium text-[var(--ink)]">
                  {inf.name}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-[var(--ink-muted)]">
                  {inf.desc}
                </p>
              </div>
            ))}
          </div>

          {/* ── DIVIDER ── */}
          <div className="my-10 flex items-center gap-4">
            <span className="h-px flex-1 bg-[var(--line)]" />
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
              §
            </span>
            <span className="h-px flex-1 bg-[var(--line)]" />
          </div>

          {/* ── SCALE SECTION ── */}
          <div className="mb-5 flex items-baseline gap-4 border-b border-[var(--line)] pb-3">
            <span className="shrink-0 font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              03
            </span>
            <h2 className="font-serif text-[1.05rem] font-medium leading-snug tracking-[0.01em] text-[var(--ink)] sm:text-[1.15rem]">
              The scale is the argument
            </h2>
          </div>

          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            When you first open this book, the shock of its scale hits you
            before anything else. TASCHEN&apos;s large format is not vanity here
            — it is necessity. Compressing Haeckel&apos;s work onto A4 would be
            like printing a fresco on a business card. You get lost in the
            pages. You study the twelve-armed symmetry of a radiolarian and
            somewhere at the back of your mind a quiet awe rises — for the
            organism, and for the man who could see it this way.
          </p>
          <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            The texts by Rainer Willmann and Julia Voss offer breathing room
            between the visual intensity. Haeckel&apos;s biography, the
            scientific debates of his era, the controversies over the accuracy
            of his drawings — it&apos;s all here. But honestly: you don&apos;t
            open this book for the words.
          </p>

          {/* ── NOTE BOX ── */}
          <div className="my-10 flex gap-5 rounded-xl border border-[var(--line)] bg-white px-6 py-5 sm:px-7">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--line)]">
              <svg
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
              >
                <circle cx="7" cy="7" r="6" stroke="#8a8070" strokeWidth="1" />
                <line
                  x1="7"
                  y1="6"
                  x2="7"
                  y2="10"
                  stroke="#8a8070"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                <circle cx="7" cy="4" r="0.7" fill="#8a8070" />
              </svg>
            </div>
            <div>
              <p className="font-sans text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-[var(--ink-muted)]">
                A note on accuracy
              </p>
              <p className="mt-2 font-serif text-sm italic leading-relaxed text-[var(--ink-muted)] sm:text-[0.95rem]">
                Some of Haeckel&apos;s theories have since been questioned or
                disproved, and certain drawings are documented to diverge from
                strict reality. TASCHEN does not look away from these shadows —
                the book presents Haeckel as a human being with contradictions,
                not a legend frozen in amber. That honesty makes it more
                valuable, not less.
              </p>
            </div>
          </div>

          {/* ── DIVIDER ── */}
          <div className="my-10 border-t border-[var(--line)]" />

          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            This is not a book that lives on a shelf. It is the kind that stays
            open on a table — the kind where, glancing at a random page some
            idle afternoon, you feel something shift quietly inside you. In
            Haeckel&apos;s world, nature is simultaneously data and poetry,
            observation and aesthetics.
          </p>
          <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            And perhaps that is when the biggest question arrives: were they
            ever really separate to begin with? If you have ever wondered the
            same thing, this is{" "}
            <ArticleProseLink
              href="/articles/specimens-fancy-turning"
              className="article-euclid-link"
            >
              the kind of question worth following
            </ArticleProseLink>
            .
          </p>

          {/* ── VERDICT ── */}
          <div className="mt-12 flex gap-5 rounded-xl border border-[var(--line)] bg-white px-6 py-6 sm:px-8 sm:py-7">
            <span className="shrink-0 pt-0.5 text-2xl leading-none tracking-widest text-[#8a6a3a]">
              ★★★★★
            </span>
            <div>
              <p className="font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
                In short
              </p>
              <p className="mt-2 font-serif text-base italic leading-relaxed text-[var(--ink-muted)] sm:text-[1.05rem]">
                One of the most visually overwhelming books you can own.
                Haeckel&apos;s drawings don&apos;t illustrate the natural world
                so much as argue for its strangeness — and TASCHEN gives that
                argument the scale it deserves.
              </p>
            </div>
          </div>

          {/* ── FOOTER NOTE ── */}
          <p className="mt-12 text-xs leading-relaxed text-[var(--ink-muted)]">
            Rainer Willmann &amp; Julia Voss —{" "}
            <a
              href="https://amzn.to/4dYbAZc"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-[#b5874a]"
            >
              <em>The Art and Science of Ernst Haeckel</em>
            </a>
            <br />
            TASCHEN, 2017 &nbsp;·&nbsp; abakcus.com
          </p>
        </article>
        <ArticleReadMore currentSlug="the-art-and-science-of-ernst-haeckel" />
      </div>
    </>
  );
}
