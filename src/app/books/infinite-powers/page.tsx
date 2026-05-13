import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/home/site-header";
import { ArticleProseLink } from "@/components/articles/article-prose-link";
import { ArticleReadMore } from "@/components/articles/article-read-more";

const COVER =
  "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/Infinite%20Powers%20by%20Steven%20Strogatz.webp";

export const metadata: Metadata = {
  title: "Infinite Powers — Steven Strogatz | Abakcus",
  description:
    "Strogatz's boldest claim in Infinite Powers is that Newton didn't invent calculus. The rest of the book proves it, chapter by chapter.",
  authors: [{ name: "Ali Kaya" }],
  alternates: {
    canonical: "/books/infinite-powers",
  },
  keywords: [
    "Infinite Powers",
    "Steven Strogatz",
    "calculus history",
    "history of calculus",
    "Archimedes calculus",
    "infinity principle",
    "calculus book review",
    "popular mathematics",
    "math book",
    "Strogatz book",
  ],
  openGraph: {
    title: "Infinite Powers — Steven Strogatz",
    description:
      "Strogatz's boldest claim is that Newton didn't invent calculus. The rest of the book proves it, chapter by chapter.",
    images: [
      {
        url: COVER,
        width: 800,
        height: 1200,
        alt: "Infinite Powers by Steven Strogatz — book cover",
      },
    ],
    type: "article",
    publishedTime: "2026-05-13",
    siteName: "Abakcus",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Infinite Powers — Steven Strogatz",
    description:
      "Newton didn't invent calculus. Archimedes was doing it in the third century BC. Strogatz proves this in the first three chapters with a clarity that leaves no room for doubt.",
    images: [COVER],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Review",
  name: "Infinite Powers by Steven Strogatz — Abakcus",
  author: { "@type": "Person", name: "Ali Kaya" },
  datePublished: "2026-05-13",
  reviewBody:
    "Strogatz's boldest claim in Infinite Powers is that Newton didn't invent calculus. The rest of the book proves it, chapter by chapter — from Archimedes through Newton, Leibniz, Maxwell, and the detection of gravitational waves in 2015.",
  itemReviewed: {
    "@type": "Book",
    name: "Infinite Powers",
    author: { "@type": "Person", name: "Steven Strogatz" },
    publisher: {
      "@type": "Organization",
      name: "Houghton Mifflin Harcourt",
    },
    datePublished: "2019",
    numberOfPages: 384,
    isbn: "9781328879981",
    url: "https://amzn.to/4dkHD3z",
  },
  publisher: {
    "@type": "Organization",
    name: "Abakcus",
    url: "https://abakcus.com",
  },
};

export default function InfinitePowersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />

      {/* ── HERO ── */}
      <header className="relative overflow-hidden bg-[#090b1a] pb-0">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, #050610 0%, #090b1a 100%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[var(--page-max)] px-[var(--page-pad)]">
          <div className="flex flex-col items-center gap-10 py-20 text-center md:flex-row md:gap-16 md:py-28 md:text-left">
            {/* Cover */}
            <div className="w-52 shrink-0 sm:w-64 md:w-72">
              <div
                className="relative overflow-hidden rounded-lg shadow-[0_32px_80px_-16px_rgba(0,0,0,0.85)]"
                style={{ aspectRatio: "2/3" }}
              >
                <Image
                  src={COVER}
                  alt="Infinite Powers by Steven Strogatz — Houghton Mifflin Harcourt 2019 book cover"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width:768px) 208px, 288px"
                />
              </div>
            </div>

            {/* Text */}
            <div className="max-w-xl">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-[#8b7fdb]">
                On the Book &nbsp;·&nbsp; 2019 &nbsp;·&nbsp; Houghton Mifflin
                Harcourt
              </p>
              <h1 className="mt-5 font-serif text-[clamp(2rem,6vw,4.2rem)] font-bold leading-[1.0] tracking-tight text-[#f5f0e8]">
                Infinite
                <br />
                <em className="text-[#8b7fdb]">Powers</em>
              </h1>
              <p className="mt-6 font-serif text-lg italic leading-relaxed text-[#9a93b8]">
                How the infinite became a language reality is written in.
              </p>
              <p className="mt-5 font-mono text-[0.68rem] uppercase tracking-[0.15em] text-[#3d3660]">
                Steven Strogatz&nbsp;/&nbsp;384 pages&nbsp;/&nbsp;∞
                principle&nbsp;/&nbsp;2,300 years
              </p>
              <a
                href="https://amzn.to/4dkHD3z"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#8b7fdb] px-5 py-2.5 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#090b1a] transition-opacity duration-200 hover:opacity-85"
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
          <meta itemProp="itemReviewed" content="Infinite Powers by Steven Strogatz" />
          <meta itemProp="author" content="Abakcus" />

          {/* ── BOOK META ── */}
          <div className="mb-12 grid grid-cols-2 gap-0 border-l border-t border-[var(--line)] sm:grid-cols-3">
            {[
              { label: "Author", value: "Steven Strogatz" },
              { label: "Publisher", value: "Houghton Mifflin Harcourt" },
              { label: "Year", value: "2019" },
              { label: "Pages", value: "384" },
              { label: "Position", value: "Professor of Applied Mathematics, Cornell" },
              { label: "Recognition", value: "NYT Bestseller · Royal Society finalist" },
            ].map((cell) => (
              <div
                key={cell.label}
                className="border-b border-r border-[var(--line)] px-4 py-3"
              >
                <p className="font-mono text-[0.52rem] uppercase tracking-[0.16em] text-[var(--ink-muted)]">
                  {cell.label}
                </p>
                <p className="mt-0.5 font-serif text-[0.9rem] text-[var(--ink)]">
                  {cell.value}
                </p>
              </div>
            ))}
          </div>

          {/* ── DROP-CAP INTRO ── */}
          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            <span
              className="float-left mr-2 mt-1 font-serif text-[4.5rem] font-bold leading-[0.78] text-[var(--ink)] sm:text-[5.2rem]"
              aria-hidden="true"
            >
              M
            </span>
            ention the history of calculus and most people expect the
            Newton&ndash;Leibniz dispute. Who got there first? The English say
            Newton, the Germans say Leibniz. The fight is so well-documented that
            any book with &ldquo;history of calculus&rdquo; on the spine seems
            obligated to take sides. Strogatz sets that expectation aside gently
            but firmly. The real question isn&apos;t who invented it, he says.
            The real question is: was calculus always already there?
          </p>

          {/* ── PULL QUOTE 1 ── */}
          <blockquote className="my-10 border-l-[3px] border-[#8b7fdb] py-1 pl-6">
            <p className="font-serif text-[1.2rem] italic leading-[1.65] text-[var(--ink)] sm:text-[1.3rem]">
              Archimedes didn&apos;t invent calculus. But he wrote its DNA two
              thousand years early. Strogatz shows this in the first three
              chapters with a clarity that leaves no room for doubt.
            </p>
          </blockquote>

          <p className="clear-both mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            His answer is yes. The central claim of the book is this: the infinity
            principle — the core idea underneath calculus — was already in use two
            thousand years before Newton, in the work of Archimedes. What did
            Archimedes do to find the area of a circle? He divided it into an
            infinite number of thin slices, treated each slice as an approximate
            triangle, and added them all together. That is a complete description
            of integral calculus. Archimedes was doing this in the third century
            BC. Which means the idea of taming infinity — breaking a complicated
            thing into infinitely many simple parts, analyzing each, and
            reassembling — belongs not to Newton, not to Leibniz, but to humanity.
          </p>

          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            The book moves forward from there: Galileo&apos;s experiments with
            falling bodies, Kepler&apos;s planetary orbits, Newton&apos;s laws of
            gravity, Leibniz&apos;s symbolic notation, Maxwell&apos;s equations
            of electromagnetism, Fourier&apos;s heat waves, and finally the
            detection of gravitational waves in 2015. At each stop, the same
            structure appears: the infinity principle is brought to bear on a
            problem, and the world becomes one step more legible. Strogatz moves
            through this chain chronologically but never monotonously. Each
            chapter builds on the previous one while being complete as its own
            story.
          </p>

          <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            Strogatz&apos;s gifts as a writer are clearest here. He is a
            professor of applied mathematics at Cornell, one of the most cited
            mathematicians in the world — but you don&apos;t think about any of
            that while reading, because he never tries to impress you. He thinks
            alongside you instead. &ldquo;Let&apos;s look at it this way,&rdquo;
            he says. &ldquo;Here is where Archimedes&apos;s genius appears:
            notice, nobody had thought of this.&rdquo; That tone — curious, warm,
            entirely without arrogance — holds steady across the entire book.
          </p>

          {/* ── DIVIDER ── */}
          <div className="my-10 flex items-center gap-4">
            <span className="h-px flex-1 bg-[var(--line)]" />
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
              the pizza proof
            </span>
            <span className="h-px flex-1 bg-[var(--line)]" />
          </div>

          {/* ── PIZZA PROOF SCENE ── */}
          <div className="mb-10 overflow-hidden rounded-xl bg-[#090b1a] px-7 py-7 sm:px-8 sm:py-8">
            <p className="mb-4 font-sans text-[0.58rem] uppercase tracking-[0.18em] text-white/35">
              A Scene
            </p>
            <p className="font-serif text-[1.05rem] italic leading-[1.85] text-white/80 sm:text-[1.1rem]">
              Slice a circle like a pizza. Peel the slices apart, flip alternating
              ones, arrange them side by side — the shape that emerges starts to
              look like a rectangle. Push the number of slices toward infinity and
              the rectangle becomes exact.{" "}
              <span className="text-[#8b7fdb]">
                The area formula falls out on its own.
              </span>{" "}
              Reading this, it&apos;s difficult not to think: why didn&apos;t
              anyone show me this in school?
            </p>
          </div>

          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            The &ldquo;pizza proof&rdquo; in the first chapter makes this
            concrete. Strogatz isn&apos;t giving you a formula. He&apos;s giving
            you an intuition. And once the intuition arrives, the formula is
            already obvious. This is the same spirit that drives{" "}
            <ArticleProseLink
              href="/articles/feynman-technique"
              className="article-euclid-link"
            >
              Feynman&apos;s approach to understanding
            </ArticleProseLink>{" "}
            — not memorizing the answer but deriving it from first principles
            until it feels inevitable.
          </p>

          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            Later chapters include the mathematical modeling of AIDS — how
            calculus shaped antiviral drug research by modeling how HIV spreads
            through the body. The discovery of Neptune — the only planet predicted
            by mathematics before it was observed through a telescope. Gravitational
            waves — vibrations Einstein predicted in 1915 using differential
            equations, confirmed by the LIGO experiment a full century later. Each
            example makes the same point:{" "}
            <ArticleProseLink
              href="/tools/calculus-made-easy"
              className="article-euclid-link"
            >
              calculus is not a calculation tool
            </ArticleProseLink>
            . It is the language reality is written in.
          </p>

          {/* ── PULL QUOTE 2 ── */}
          <blockquote className="my-10 border-l-[3px] border-[#8b7fdb] py-1 pl-6">
            <p className="font-serif text-[1.2rem] italic leading-[1.65] text-[var(--ink)] sm:text-[1.3rem]">
              Feynman said calculus is the language God talks. Strogatz&apos;s
              book is the story of how humans learned to speak it, and what they
              found when they did.
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
            As a mathematics teacher, I can say this plainly: this book is one of
            the best answers available to the question every student eventually
            asks — &ldquo;why am I learning calculus?&rdquo; The usual classroom
            answer is &ldquo;for university&rdquo; or &ldquo;you&apos;ll need it
            in engineering.&rdquo;{" "}
            <ArticleProseLink
              href="/articles/feynman-math-education"
              className="article-euclid-link"
            >
              Strogatz&apos;s answer is different
            </ArticleProseLink>
            : because without this language, a large part of the universe stays
            silent. It doesn&apos;t sound like an exaggeration by the time he
            says it, because by then he has already proved it.
          </p>

          <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            There is a limitation worth naming. The final section — the future of
            calculus — is noticeably thinner than everything before it. Strogatz
            touches on artificial intelligence and complex systems but loses some
            of the narrative clarity that makes the earlier chapters so compelling.
            It reads as though the book&apos;s main argument had already been
            made, and the last chapter was obliged to continue anyway. This is a
            minor complaint. Three hundred pages of what comes before it carry the
            weight easily.
          </p>

          {/* ── AUTHOR NOTE ── */}
          <div className="my-10 flex gap-5 rounded-xl border border-[var(--line)] bg-white px-6 py-5 sm:px-7">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#090b1a] font-serif text-base italic text-[#8b7fdb]">
              S
            </div>
            <div>
              <p className="font-sans text-sm font-medium text-[var(--ink)]">
                Steven Strogatz
              </p>
              <p className="mt-1 text-sm leading-relaxed text-[var(--ink-muted)]">
                Professor of Applied Mathematics at Cornell University. One of
                the most cited mathematicians in the world. Author of{" "}
                <em>Sync</em> and <em>The Joy of X</em>. William Dunham wrote of
                him: &ldquo;Strogatz is, at present, the best mathematician
                among writers and the best writer among mathematicians.&rdquo;
              </p>
            </div>
          </div>

          {/* ── RELATED LINKS ── */}
          <div className="mb-5 flex items-baseline gap-4 border-b border-[var(--line)] pb-3">
            <span className="shrink-0 font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              01
            </span>
            <h2 className="font-serif text-[1.05rem] font-medium leading-snug tracking-[0.01em] text-[var(--ink)] sm:text-[1.15rem]">
              If this book speaks to you, these will too
            </h2>
          </div>

          <div className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              {
                q: "What does it mean to really understand something?",
                href: "/articles/feynman-technique",
              },
              {
                q: "Why does math education keep producing students who know everything and understand nothing?",
                href: "/articles/feynman-math-education",
              },
              {
                q: "What is calculus, explained simply enough to actually grasp it?",
                href: "/tools/calculus-made-easy",
              },
              {
                q: "What happened when a state legislature tried to redefine π by law?",
                href: "/articles/indiana-pi-bill",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="rounded-xl border border-[var(--line)] bg-white px-5 py-5"
              >
                <ArticleProseLink
                  href={item.href}
                  className="font-serif text-sm italic leading-relaxed text-[var(--ink-muted)] article-euclid-link"
                >
                  {item.q}
                </ArticleProseLink>
              </div>
            ))}
          </div>

          {/* ── VERDICT ── */}
          <div className="mt-12 flex gap-5 rounded-xl border border-[var(--line)] bg-white px-6 py-6 sm:px-8 sm:py-7">
            <span className="shrink-0 pt-0.5 text-2xl leading-none tracking-widest text-[#8b7fdb]">
              ★★★★★
            </span>
            <div>
              <p className="font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
                In short
              </p>
              <p className="mt-2 font-serif text-base italic leading-relaxed text-[var(--ink-muted)] sm:text-[1.05rem]">
                Calculus is not a set of rules invented by two seventeenth-century
                rivals. It is the accumulated effort of twenty-three centuries of
                people trying to speak honestly about a world that never holds
                still. Strogatz tells that story with the warmth of someone who
                genuinely believes you should know it.
              </p>
            </div>
          </div>

          {/* ── FOOTNOTES ── */}
          <div className="mt-12 border-t border-[var(--line)] pt-6 font-mono text-[0.65rem] leading-[1.65] text-[var(--ink-muted)]">
            <p className="mb-3">
              ¹ William Dunham wrote: &ldquo;Strogatz is, at present, the best
              mathematician among writers and the best writer among
              mathematicians.&rdquo; This is not an exaggeration.
            </p>
            <p className="mb-3">
              ² Strogatz corresponded extensively with Cornell mathematics
              historian John Stillwell and other colleagues while writing the book.
              The footnotes carry traces of that research — returning to them after
              a first read is its own separate experience.
            </p>
            <p>
              ³ &ldquo;The Infinity Golem&rdquo; — Strogatz&apos;s term for the
              philosophical difficulty of conceiving infinity, the nemesis of the
              infinity principle. The tension running from Zeno&apos;s paradoxes
              through Cauchy and Weierstrass&apos;s epsilon-delta definitions is
              not easy to convey without technical machinery. Very few writers
              pull it off. Strogatz does.
            </p>
          </div>

          {/* ── FOOTER NOTE ── */}
          <p className="mt-10 text-xs leading-relaxed text-[var(--ink-muted)]">
            Steven Strogatz —{" "}
            <a
              href="https://amzn.to/4dkHD3z"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-[#8b7fdb]"
            >
              <em>
                Infinite Powers: How Calculus Reveals the Secrets of the
                Universe
              </em>
            </a>
            <br />
            Houghton Mifflin Harcourt, 2019 &nbsp;·&nbsp; abakcus.com
          </p>
        </article>
        <ArticleReadMore currentSlug="infinite-powers" />
      </div>
    </>
  );
}
