import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/home/site-header";
import { ArticleReadMore } from "@/components/articles/article-read-more";

export const metadata: Metadata = {
  title: "Lifelong Kindergarten — A Manifesto for Creative Learning",
  description:
    "Mitchel Resnick's Lifelong Kindergarten shows how creativity gets killed after kindergarten — and how to bring it back to life through Projects, Passion, Peers, and Play.",
  openGraph: {
    title: "Lifelong Kindergarten — A Manifesto for Creative Learning",
    description:
      "Mitchel Resnick's Lifelong Kindergarten shows how creativity gets killed after kindergarten — and how to bring it back to life through Projects, Passion, Peers, and Play.",
    images: [
      {
        url: "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/Lifelong%20Kindergarten-%20Cultivating%20Creativity%20Through%20Projects%2C%20Passion%2C%20Peers%2C%20and%20Play.jpg",
        width: 800,
        height: 1000,
        alt: "Lifelong Kindergarten — Mitchel Resnick",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lifelong Kindergarten — A Manifesto for Creative Learning",
    description:
      "Projects, Passion, Peers, Play. Resnick's framework for learning that never stops.",
    images: [
      "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/Lifelong%20Kindergarten-%20Cultivating%20Creativity%20Through%20Projects%2C%20Passion%2C%20Peers%2C%20and%20Play.jpg",
    ],
  },
  alternates: {
    canonical: "/books/lifelong-kindergarten",
  },
};

export default function LifelongKindergartenPage() {
  return (
    <>
      <SiteHeader />

      {/* ── HERO ── */}
      <header className="relative overflow-hidden bg-[#1a1a3c] pb-0">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, #12122a 0%, #1a1a3c 100%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[var(--page-max)] px-[var(--page-pad)]">
          <div className="flex flex-col items-center gap-10 py-20 text-center md:flex-row md:gap-16 md:py-28 md:text-left">
            {/* Cover */}
            <div className="w-52 shrink-0 sm:w-64 md:w-72">
              <div
                className="relative overflow-hidden rounded-lg shadow-[0_32px_80px_-16px_rgba(0,0,0,0.7)]"
                style={{ aspectRatio: "3/4" }}
              >
                <Image
                  src="https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/Lifelong%20Kindergarten-%20Cultivating%20Creativity%20Through%20Projects%2C%20Passion%2C%20Peers%2C%20and%20Play.jpg"
                  alt="Lifelong Kindergarten book cover — Mitchel Resnick, MIT Press 2017"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width:768px) 208px, 288px"
                />
              </div>
            </div>

            {/* Text */}
            <div className="max-w-xl">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-[#e8d44d]">
                On the Book &nbsp;·&nbsp; 2017 &nbsp;·&nbsp; MIT Press
              </p>
              <h1 className="mt-5 font-serif text-[clamp(2.4rem,7vw,4.8rem)] font-bold leading-[0.95] tracking-tight text-[#f5f0e8]">
                Lifelong
                <br />
                <em className="text-[#e8d44d]">Kindergarten</em>
              </h1>
              <p className="mt-6 font-serif text-lg italic leading-relaxed text-[#b0b0cc]">
                What if we never stopped learning the way
                <br className="hidden sm:block" />
                we did at five years old?
              </p>
              <p className="mt-5 font-mono text-[0.68rem] uppercase tracking-[0.15em] text-[#7a7090]">
                Mitchel Resnick&nbsp;/&nbsp;261 pages&nbsp;/&nbsp;4
                P&apos;s&nbsp;/&nbsp;∞ curiosity
              </p>
              <a
                href="https://amzn.to/4toKyPp"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#e8d44d] px-5 py-2.5 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#1a1a1a] transition-opacity duration-200 hover:opacity-85"
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
            content="Lifelong Kindergarten by Mitchel Resnick"
          />
          <meta itemProp="author" content="Abakcus" />

          {/* ── DROP-CAP INTRO ── */}
          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            <span
              className="float-left mr-2 mt-1 font-serif text-[4.5rem] font-bold leading-[0.78] text-[var(--ink)] sm:text-[5.2rem]"
              aria-hidden="true"
            >
              M
            </span>
            ithcel Resnick opens his book with a deceptively simple yet deeply
            unsettling question: Why are kindergarteners more creative than
            virtually anyone else who walks in and out of a school building?
          </p>
          <p className="clear-both mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            Because no one tells them they&apos;re wrong. No one expects a single
            correct answer. You build a block tower, it falls, you try again. You
            mix the paint incorrectly, an unexpected color appears, and you
            delight in it. Play is not the tool — it is the point. Then first
            grade arrives, and everything changes.
          </p>
          <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            Resnick is the founder of MIT Media Lab&apos;s Lifelong Kindergarten
            group — the team behind Scratch. But this is not a technology book.
          </p>

          {/* ── DIVIDER ── */}
          <div className="my-10 flex items-center gap-4 text-[var(--ink-muted)]">
            <span className="h-px flex-1 bg-[var(--line)]" />
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
              §
            </span>
            <span className="h-px flex-1 bg-[var(--line)]" />
          </div>

          {/* ── SCRATCH SECTION ── */}
          <div className="mb-5 flex items-baseline gap-4 border-b border-[var(--line)] pb-3">
            <span className="shrink-0 font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              01
            </span>
            <h2 className="font-serif text-[1.05rem] font-medium leading-snug tracking-[0.01em] text-[var(--ink)] sm:text-[1.15rem]">
              Not a technology book
            </h2>
          </div>

          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            Used by hundreds of millions of children worldwide to learn to code,
            Scratch is actually the tangible output of the ideas in this book.
            But Resnick&apos;s goal isn&apos;t software design — it&apos;s
            understanding how creativity gets killed, and showing how to revive
            it.
          </p>

          {/* Aside */}
          <aside className="my-8 rounded-xl bg-[var(--pastel-sky)] px-5 py-5 sm:px-6">
            <p className="font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              Context
            </p>
            <div className="mt-2 text-[0.92rem] leading-relaxed text-[var(--ink)] sm:text-[0.95rem]">
              Resnick leads the MIT Media Lab&apos;s Lifelong Kindergarten
              research group. Scratch — the visual programming language used by
              over 100 million children — was built as a direct embodiment of the
              principles in this book.
            </div>
          </aside>

          <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            The real thesis is quieter: the kindergarten approach to learning —
            building, experimenting, sharing — is not something children grow out
            of. It&apos;s something that gets taken from them.
          </p>

          {/* ── DIVIDER ── */}
          <div className="my-10 flex items-center gap-4 text-[var(--ink-muted)]">
            <span className="h-px flex-1 bg-[var(--line)]" />
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
              §
            </span>
            <span className="h-px flex-1 bg-[var(--line)]" />
          </div>

          {/* ── FOUR P'S ── */}
          <div className="mb-5 flex items-baseline gap-4 border-b border-[var(--line)] pb-3">
            <span className="shrink-0 font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              02
            </span>
            <h2 className="font-serif text-[1.05rem] font-medium leading-snug tracking-[0.01em] text-[var(--ink)] sm:text-[1.15rem]">
              The four pillars
            </h2>
          </div>

          <p className="mb-8 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            Resnick organizes his framework around four P&apos;s. They&apos;re
            not a sequential list — they form a spiral that feeds itself. Real
            learning deepens by cycling through this loop again and again.
          </p>

          {/* Four P grid */}
          <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              {
                num: "1st P",
                title: "Projects",
                desc: "Building something from A to Z yourself. Integrated making, not isolated exercises.",
              },
              {
                num: "2nd P",
                title: "Passion",
                desc: "Driven by intrinsic curiosity, not external rewards. What makes learning meaningful.",
              },
              {
                num: "3rd P",
                title: "Peers",
                desc: "Creating, sharing, and learning alongside others. Creativity rarely grows in isolation.",
              },
              {
                num: "4th P",
                title: "Play",
                desc: "A mental freedom where mistakes are normal and experimentation is encouraged.",
              },
            ].map((p) => (
              <div
                key={p.num}
                className="rounded-xl border border-[var(--line)] bg-white px-5 py-5 sm:px-6"
              >
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-[#b5874a]">
                  {p.num}
                </p>
                <p className="mt-2 font-serif text-[1.15rem] font-medium text-[var(--ink)]">
                  {p.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          {/* ── DIVIDER ── */}
          <div className="my-10 flex items-center gap-4 text-[var(--ink-muted)]">
            <span className="h-px flex-1 bg-[var(--line)]" />
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
              §
            </span>
            <span className="h-px flex-1 bg-[var(--line)]" />
          </div>

          {/* ── LOW FLOOR HIGH CEILING ── */}
          <div className="mb-5 flex items-baseline gap-4 border-b border-[var(--line)] pb-3">
            <span className="shrink-0 font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              03
            </span>
            <h2 className="font-serif text-[1.05rem] font-medium leading-snug tracking-[0.01em] text-[var(--ink)] sm:text-[1.15rem]">
              The book&apos;s most powerful concept
            </h2>
          </div>

          <p className="mb-8 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            Beyond the four P&apos;s, Resnick introduces a design principle that
            applies to classrooms, tools, and entire educational systems.
          </p>

          {/* Concept box */}
          <div className="mb-10 rounded-xl bg-[#1a1a1a] px-6 py-6 sm:px-8 sm:py-7">
            <p className="mb-5 font-sans text-[0.58rem] uppercase tracking-[0.18em] text-white/40">
              Design principle
            </p>
            {[
              {
                key: "Low floor",
                val: "Make it easy to start. The first step should never feel intimidating.",
              },
              {
                key: "High ceiling",
                val: "But don't cap it. Those who want to go deep, should be able to.",
              },
              {
                key: "Wide walls",
                val: "No single right path. Leave room for wildly different approaches.",
              },
            ].map((row) => (
              <div
                key={row.key}
                className="mb-4 flex gap-4 last:mb-0"
              >
                <p className="min-w-[100px] shrink-0 font-serif text-sm italic text-[#e8d44d]">
                  {row.key}
                </p>
                <p className="text-sm leading-relaxed text-white/70">
                  {row.val}
                </p>
              </div>
            ))}
          </div>

          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            Resnick applies this not just to Scratch — but to classroom design,
            lesson planning, and even to society itself. There were moments while
            reading where I had to stop and reach for a pen. Especially his
            writing on the difference between &ldquo;a child completing something
            from A to Z&rdquo; versus &ldquo;a child taking a small step from B to
            C.&rdquo; The first is learning. The second is passing a test.
          </p>
          <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            Resnick isn&apos;t angry — he&apos;s solutions-oriented. It&apos;s
            easy to complain; it&apos;s hard to provide dozens of real examples of
            what actually works. He does the latter. And that&apos;s what makes
            this book readable.
          </p>

          {/* ── DIVIDER ── */}
          <div className="my-10 flex items-center gap-4 text-[var(--ink-muted)]">
            <span className="h-px flex-1 bg-[var(--line)]" />
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
              §
            </span>
            <span className="h-px flex-1 bg-[var(--line)]" />
          </div>

          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            By the time you reach the last page, you realize something: Resnick
            isn&apos;t writing for children at all. He&apos;s writing for us
            adults — for those magnificent beings who were once kindergarteners.
            And here&apos;s the better news: that child is still here. Just a
            little dusty.
          </p>

          {/* ── VERDICT ── */}
          <div className="mt-12 flex gap-5 rounded-xl border border-[var(--line)] bg-white px-6 py-6 sm:px-8 sm:py-7">
            <span className="shrink-0 pt-0.5 text-2xl leading-none tracking-widest text-[#b5874a]">
              ★★★★★
            </span>
            <div>
              <p className="font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
                In short
              </p>
              <p className="mt-2 font-serif text-base italic leading-relaxed text-[var(--ink-muted)] sm:text-[1.05rem]">
                A rare combination: it both inspires and offers a concrete
                framework. Most creativity books only manage one. This one earns
                a permanent spot on the shelf.
              </p>
            </div>
          </div>

          {/* ── FOOTER NOTE ── */}
          <p className="mt-12 text-xs leading-relaxed text-[var(--ink-muted)]">
            Mitchel Resnick —{" "}
            <a
              href="https://amzn.to/4toKyPp"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-[#b5874a]"
            >
              <em>
                Lifelong Kindergarten: Cultivating Creativity through Projects,
                Passion, Peers, and Play
              </em>
            </a>
            <br />
            MIT Press, 2017 &nbsp;·&nbsp; abakcus.com
          </p>
        </article>
        <ArticleReadMore currentSlug="lifelong-kindergarten" />
      </div>
    </>
  );
}
