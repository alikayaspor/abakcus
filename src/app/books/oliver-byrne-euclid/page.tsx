import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/home/site-header";
import { ArticleProseLink } from "@/components/articles/article-prose-link";
import { ArticleReadMore } from "@/components/articles/article-read-more";

export const metadata: Metadata = {
  title: "Oliver Byrne's Euclid — The First Six Books of the Elements",
  description:
    "Oliver Byrne translated two thousand years of geometry into colour. Red, yellow, blue, and black. The result looks like it was designed yesterday.",
  openGraph: {
    title: "Oliver Byrne's Euclid — The First Six Books of the Elements",
    description:
      "Oliver Byrne translated two thousand years of geometry into colour. The result remains astonishing today.",
    images: [
      {
        url: "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/Oliver%20Byrne%20%E2%80%93%20The%20First%20Six%20Books%20of%20the%20Elements%20of%20Euclid.webp",
        width: 800,
        height: 1000,
        alt: "Oliver Byrne — The First Six Books of the Elements of Euclid",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oliver Byrne's Euclid — The First Six Books of the Elements",
    description:
      "Red, yellow, blue, black. Before Mondrian, Byrne. A mathematics textbook from 1847 that looks like it was designed last year.",
    images: [
      "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/Oliver%20Byrne%20%E2%80%93%20The%20First%20Six%20Books%20of%20the%20Elements%20of%20Euclid.webp",
    ],
  },
  alternates: {
    canonical: "/books/oliver-byrne-euclid",
  },
};

const SPREAD_IMAGES = [
  {
    src: "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/Oliver%20Byrne%20%E2%80%93%20The%20First%20Six%20Books%20of%20the%20Elements%20of%20Euclid%202.webp",
    alt: "Byrne's Euclid — coloured geometric proof spread",
  },
  {
    src: "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/Oliver%20Byrne%20%E2%80%93%20The%20First%20Six%20Books%20of%20the%20Elements%20of%20Euclid%203.webp",
    alt: "Byrne's Euclid — red yellow blue diagram page",
  },
];

const READERS = [
  {
    role: "Physicist",
    name: "Isaac Newton",
    desc: "Read the Elements as a young student and modelled the structure of Principia Mathematica on its method of proof.",
  },
  {
    role: "Philosopher",
    name: "Baruch Spinoza",
    desc: "Wrote his Ethics entirely in Euclidean form — definitions, axioms, propositions, proofs.",
  },
  {
    role: "Statesman",
    name: "Abraham Lincoln",
    desc: "Studied all six books before practicing law. He wanted to know what it meant to truly prove something.",
  },
];

export default function OliverByrneEuclidPage() {
  return (
    <>
      <SiteHeader />

      {/* ── HERO ── */}
      <header className="relative overflow-hidden bg-[#0e1a2e] pb-0">
        <div
          className="absolute inset-0 opacity-55"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, #060d1a 0%, #0e1a2e 100%)",
          }}
        />
        {/* Byrne colour stripe */}
        <div className="absolute bottom-0 left-0 right-0 flex h-1">
          <div className="flex-1 bg-[#c0392b]" />
          <div className="flex-1 bg-[#d4a017]" />
          <div className="flex-1 bg-[#1a3a6b]" />
          <div className="flex-1 bg-[#111111]" />
        </div>
        <div className="relative z-10 mx-auto max-w-[var(--page-max)] px-[var(--page-pad)]">
          <div className="flex flex-col items-center gap-10 py-20 pb-24 text-center md:flex-row md:gap-16 md:py-28 md:pb-32 md:text-left">
            {/* Cover */}
            <div className="w-52 shrink-0 sm:w-64 md:w-72">
              <div
                className="relative overflow-hidden rounded-lg shadow-[0_32px_80px_-16px_rgba(0,0,0,0.75)]"
                style={{ aspectRatio: "3/4" }}
              >
                <Image
                  src="https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/Oliver%20Byrne%20%E2%80%93%20The%20First%20Six%20Books%20of%20the%20Elements%20of%20Euclid.webp"
                  alt="Oliver Byrne — The First Six Books of the Elements of Euclid, TASCHEN edition"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width:768px) 208px, 288px"
                />
              </div>
            </div>

            {/* Text */}
            <div className="max-w-xl">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-[#d4a017]">
                On the Book &nbsp;·&nbsp; orig. 1847 &nbsp;·&nbsp; TASCHEN
                reprint 2010
              </p>
              <h1 className="mt-5 font-serif text-[clamp(1.9rem,5.5vw,3.8rem)] font-bold leading-[1.05] tracking-tight text-[#f7f5f0]">
                The First Six Books
                <br />
                of the{" "}
                <em className="text-[#d4a017]">Elements of Euclid</em>
              </h1>
              <p className="mt-6 font-serif text-lg italic leading-relaxed text-[#8a9ab8]">
                Two thousand years of geometry. Four colours.
                <br className="hidden sm:block" />
                One radical idea.
              </p>
              <p className="mt-5 font-mono text-[0.68rem] uppercase tracking-[0.15em] text-[#3a4a6a]">
                Oliver Byrne&nbsp;/&nbsp;268 pages&nbsp;/&nbsp;4
                colours&nbsp;/&nbsp;0 letters
              </p>
              <a
                href="https://amzn.to/4sQnesS"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#d4a017] px-5 py-2.5 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#0e1a2e] transition-opacity duration-200 hover:opacity-85"
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
            content="The First Six Books of the Elements of Euclid by Oliver Byrne"
          />
          <meta itemProp="author" content="Abakcus" />

          {/* ── OPENING ── */}
          <p className="mb-12 border-b border-[var(--line)] pb-12 font-serif text-[1.5rem] italic leading-[1.55] text-[var(--ink)] sm:text-[1.65rem]">
            Some books are not read. They are seen.
          </p>

          {/* ── DROP-CAP INTRO ── */}
          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            <span
              className="float-left mr-2 mt-1 font-serif text-[4.5rem] font-bold leading-[0.78] text-[var(--ink)] sm:text-[5.2rem]"
              aria-hidden="true"
            >
              O
            </span>
            liver Byrne&apos;s 1847 interpretation of Euclid&apos;s{" "}
            <em>Elements</em> is one of those rare moments when mathematics
            becomes image. Theorems that had been taught for over two thousand
            years using letters and symbols were retold, by Byrne, entirely in
            colour: red, yellow, blue, and black. A line segment was no longer
            labelled &ldquo;BC&rdquo; — it was a yellow line. An angle was no
            longer expressed as a sequence of letters — it was a blue triangle.
          </p>
          <p className="clear-both mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            The result remains astonishing today: the most abstract corners of
            mathematics translated into a visual language the eye can grasp
            before the mind has even caught up.
          </p>

          {/* ── DIVIDER ── */}
          <div className="my-10 flex items-center gap-4">
            <span className="h-px flex-1 bg-[var(--line)]" />
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
              §
            </span>
            <span className="h-px flex-1 bg-[var(--line)]" />
          </div>

          {/* ── PROOF PANEL ── */}
          <div className="mb-5 flex items-baseline gap-4 border-b border-[var(--line)] pb-3">
            <span className="shrink-0 font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              01
            </span>
            <h2 className="font-serif text-[1.05rem] font-medium leading-snug tracking-[0.01em] text-[var(--ink)] sm:text-[1.15rem]">
              How Byrne rewrote a theorem
            </h2>
          </div>

          <div className="mb-10 rounded-xl border border-[var(--line)] bg-white px-7 py-7 sm:px-8">
            {/* Traditional */}
            <div className="flex items-start gap-5 border-b border-[var(--line)] pb-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  aria-hidden="true"
                >
                  <line
                    x1="6"
                    y1="24"
                    x2="42"
                    y2="24"
                    stroke="#888"
                    strokeWidth="1.5"
                    strokeDasharray="4 3"
                  />
                  <text
                    x="2"
                    y="20"
                    fontSize="9"
                    fill="#888"
                    fontFamily="Georgia,serif"
                  >
                    A
                  </text>
                  <text
                    x="37"
                    y="20"
                    fontSize="9"
                    fill="#888"
                    fontFamily="Georgia,serif"
                  >
                    B
                  </text>
                  <text
                    x="22"
                    y="20"
                    fontSize="9"
                    fill="#888"
                    fontFamily="Georgia,serif"
                  >
                    C
                  </text>
                </svg>
              </div>
              <div>
                <p className="mb-1 font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
                  Traditional notation
                </p>
                <p className="font-serif text-sm italic leading-relaxed text-[var(--ink-muted)] sm:text-[0.95rem]">
                  Let line segment AB be bisected at point C, such that AC =
                  CB…
                </p>
              </div>
            </div>
            {/* Byrne */}
            <div className="flex items-start gap-5 pt-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  aria-hidden="true"
                >
                  <line
                    x1="6"
                    y1="24"
                    x2="26"
                    y2="24"
                    stroke="#c0392b"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <line
                    x1="26"
                    y1="24"
                    x2="42"
                    y2="24"
                    stroke="#1a3a6b"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                  <circle cx="26" cy="24" r="3.5" fill="#d4a017" />
                </svg>
              </div>
              <div>
                <p className="mb-1 font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
                  Byrne&apos;s method
                </p>
                <p className="font-serif text-sm italic leading-relaxed text-[var(--ink-muted)] sm:text-[0.95rem]">
                  A red line meets a blue line at a yellow point — equal halves
                  made visible at a glance.
                </p>
              </div>
            </div>
          </div>

          {/* ── DIVIDER ── */}
          <div className="my-10 flex items-center gap-4">
            <span className="h-px flex-1 bg-[var(--line)]" />
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
              §
            </span>
            <span className="h-px flex-1 bg-[var(--line)]" />
          </div>

          {/* ── EUCLID SECTION ── */}
          <div className="mb-5 flex items-baseline gap-4 border-b border-[var(--line)] pb-3">
            <span className="shrink-0 font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              02
            </span>
            <h2 className="font-serif text-[1.05rem] font-medium leading-snug tracking-[0.01em] text-[var(--ink)] sm:text-[1.15rem]">
              The second most printed book in history
            </h2>
          </div>

          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            One thing must be understood about Euclid&apos;s{" "}
            <em>Elements</em>: this is the second most printed book in history.
            For centuries it was studied not merely as a mathematics text but as
            a model of correct thinking — of how to build a sound argument, how
            to prove something step by irrefutable step. Newton read it.
            Spinoza wrote his entire philosophy in geometric proof form. Lincoln
            studied the <em>Elements</em> from cover to cover before becoming a
            lawyer — because he wanted to learn how to demonstrate that
            something was true. (The{" "}
            <ArticleProseLink
              href="/articles/indiana-pi-bill"
              className="article-euclid-link"
            >
              Indiana Pi Bill of 1897
            </ArticleProseLink>
            {" "}is a good reminder of what happens when legislators lose sight of Euclid&apos;s standard of proof.)
          </p>
          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            Euclid&apos;s <em>Elements</em> has never stopped inspiring visual
            reinvention.{" "}
            <ArticleProseLink
              href="/articles/billingsley-euclid"
              className="article-euclid-link"
            >
              Henry Billingsley&apos;s 1570 English edition
            </ArticleProseLink>{" "}
            included paper pop-up solids that readers could fold out of the
            page — three-dimensional geometry rendered tactile. Byrne&apos;s
            question, in 1847, was different and no less radical: what if all
            of this could simply be{" "}
            <em>shown</em>?
          </p>

          {/* ── PULL QUOTE ── */}
          <blockquote className="my-10 border-l-[3px] border-[#1a3a6b] py-1 pl-6">
            <p className="font-serif text-[1.2rem] italic leading-[1.65] text-[var(--ink)] sm:text-[1.3rem]">
              Before Mondrian, Byrne. Before the Bauhaus, Byrne. A mathematics
              textbook from 1847 that looks like it was designed last year.
            </p>
          </blockquote>

          {/* ── COLOUR STRIP ── */}
          <div className="mb-4 flex h-2 overflow-hidden rounded-full">
            <div className="flex-1 bg-[#c0392b]" />
            <div className="flex-1 bg-[#d4a017]" />
            <div className="flex-1 bg-[#1a3a6b]" />
            <div className="flex-1 bg-[#111111]" />
          </div>
          <div className="mb-10 grid grid-cols-4 gap-2">
            {[
              { color: "#c0392b", name: "Red" },
              { color: "#d4a017", name: "Yellow" },
              { color: "#1a3a6b", name: "Blue" },
              { color: "#111111", name: "Black" },
            ].map((p) => (
              <div key={p.name} className="flex items-center gap-2">
                <div
                  className="h-3.5 w-3.5 shrink-0 rounded-sm"
                  style={{
                    backgroundColor: p.color,
                    border: p.color === "#111111" ? "1px solid #ddd" : "none",
                  }}
                />
                <span className="font-serif text-xs italic text-[var(--ink-muted)]">
                  {p.name}
                </span>
              </div>
            ))}
          </div>

          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            Designers speak of Byrne&apos;s book with reverence today because
            its red-yellow-blue-black palette, flat geometric forms, and the
            precision living inside apparent simplicity look uncannily like the
            most important design movements of the twentieth century — movements
            that would not arrive for another eighty years. Perhaps beauty and
            truth really do draw from the same source. The{" "}
            <ArticleProseLink
              href="/articles/sqrt2-irrational"
              className="article-euclid-link"
            >
              proof that √2 is irrational
            </ArticleProseLink>
            , which Euclid himself established, carries exactly that same
            quality: once seen, it cannot be unseen.
          </p>
          <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            TASCHEN&apos;s edition presents the original in its full large
            format, with complete fidelity. William Rankin&apos;s introduction
            places Byrne in context — mathematically, visually, culturally. But
            again: you do not open this book for the words.
          </p>

          {/* ── SPREAD GALLERY ── */}
          <div className="mb-10 flex flex-col gap-12">
            {SPREAD_IMAGES.map((img) => (
              <figure key={img.src} className="m-0">
                <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl bg-[var(--tonal)]">
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

          {/* ── FAMOUS READERS ── */}
          <div className="mb-5 flex items-baseline gap-4 border-b border-[var(--line)] pb-3">
            <span className="shrink-0 font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              03
            </span>
            <h2 className="font-serif text-[1.05rem] font-medium leading-snug tracking-[0.01em] text-[var(--ink)] sm:text-[1.15rem]">
              Those who read Euclid before Byrne
            </h2>
          </div>

          <div className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {READERS.map((r) => (
              <div
                key={r.name}
                className="rounded-xl border border-[var(--line)] bg-white px-5 py-5"
              >
                <p className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-[#1a3a6b]">
                  {r.role}
                </p>
                <p className="mt-2 font-serif text-base font-medium text-[var(--ink)]">
                  {r.name}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-[var(--ink-muted)]">
                  {r.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            Once you are inside, you get lost. You follow a theorem: a red line
            begins here, a blue area intersects it, a yellow segment extends
            beyond. The steps are so clear, so visible, that instead of saying
            &ldquo;I understand&rdquo; you find yourself saying &ldquo;I
            see.&rdquo; And the distance between those two things is the whole
            point of Byrne&apos;s project.
          </p>

          {/* ── FOR WHOM ── */}
          <div className="my-10 rounded-xl bg-[#111111] px-7 py-7 sm:px-8 sm:py-8">
            <p className="mb-5 font-sans text-[0.58rem] uppercase tracking-[0.18em] text-white/35">
              This book is for
            </p>
            <ul className="flex flex-col gap-4">
              {[
                {
                  color: "#c0392b",
                  text: "Those who love mathematics and want to see it from a completely different angle.",
                },
                {
                  color: "#d4a017",
                  text: "Designers and visual thinkers curious about how images can carry rigorous knowledge.",
                },
                {
                  color: "#1a3a6b",
                  text: "Anyone who has ever wondered how something abstract can suddenly become concrete.",
                },
                {
                  color: "rgba(255,255,255,0.45)",
                  text: "Those who want a book that doesn't just sit on a shelf — but stays open on a table.",
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

          {/* ── DIVIDER ── */}
          <div className="my-10 border-t border-[var(--line)]" />

          <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            Two thousand years of thought, given back to the eye. That is what
            this book does. And every time you open it at a random page and
            find yourself surprised that something so old can feel so immediate
            — you understand exactly what Byrne was after. Mathematics was
            always visible. It was only ever being told in the wrong language.
          </p>

          {/* ── VERDICT ── */}
          <div className="mt-12 flex gap-5 rounded-xl border border-[var(--line)] bg-white px-6 py-6 sm:px-8 sm:py-7">
            <span className="shrink-0 pt-0.5 text-2xl leading-none tracking-widest text-[#d4a017]">
              ★★★★★
            </span>
            <div>
              <p className="font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
                In short
              </p>
              <p className="mt-2 font-serif text-base italic leading-relaxed text-[var(--ink-muted)] sm:text-[1.05rem]">
                One of the most quietly radical books ever printed. Byrne
                didn&apos;t simplify Euclid — he revealed him. TASCHEN&apos;s
                edition gives this masterpiece the physical presence it has
                always deserved.
              </p>
            </div>
          </div>

          {/* ── FOOTER NOTE ── */}
          <p className="mt-12 text-xs leading-relaxed text-[var(--ink-muted)]">
            Oliver Byrne —{" "}
            <a
              href="https://amzn.to/4sQnesS"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-[#b5874a]"
            >
              <em>
                The First Six Books of the Elements of Euclid
              </em>
            </a>
            <br />
            TASCHEN, 2010 &nbsp;·&nbsp; Original edition: London,
            1847 &nbsp;·&nbsp; abakcus.com
          </p>
        </article>
        <ArticleReadMore currentSlug="oliver-byrne-euclid" />
      </div>
    </>
  );
}
