import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/home/site-header";
import { ArticleProseLink } from "@/components/articles/article-prose-link";
import { ArticleReadMore } from "@/components/articles/article-read-more";

export const metadata: Metadata = {
  title: "When Einstein Walked with Gödel — A Walk at the Edge of Thought",
  description:
    "Jim Holt takes the biggest questions in mathematics, physics, and philosophy — and turns each one into a story worth losing sleep over.",
  openGraph: {
    title: "When Einstein Walked with Gödel — A Walk at the Edge of Thought",
    description:
      "Jim Holt takes the biggest questions in mathematics, physics, and philosophy — and turns each one into a story worth losing sleep over.",
    images: [
      {
        url: "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/When%20Einstein%20Walked%20with%20Go%CC%88del-%20Excursions%20to%20the%20Edge%20of%20Thought.jpg",
        width: 800,
        height: 1000,
        alt: "When Einstein Walked with Gödel — Jim Holt",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "When Einstein Walked with Gödel — A Walk at the Edge of Thought",
    description:
      "Essays on infinity, time, machines, and pi — told the way a great novelist writes about people.",
    images: [
      "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/When%20Einstein%20Walked%20with%20Go%CC%88del-%20Excursions%20to%20the%20Edge%20of%20Thought.jpg",
    ],
  },
  alternates: {
    canonical: "/books/when-einstein-walked-with-godel",
  },
};

export default function WhenEinsteinPage() {
  return (
    <>
      <SiteHeader />

      {/* ── HERO ── */}
      <header className="relative overflow-hidden bg-[#0d1b2a] pb-0">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, #060f1a 0%, #0d1b2a 100%)",
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
                  src="https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/When%20Einstein%20Walked%20with%20Go%CC%88del-%20Excursions%20to%20the%20Edge%20of%20Thought.jpg"
                  alt="When Einstein Walked with Gödel book cover — Jim Holt, Farrar Straus and Giroux 2018"
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
                On the Book &nbsp;·&nbsp; 2018 &nbsp;·&nbsp; Farrar, Straus and
                Giroux
              </p>
              <h1 className="mt-5 font-serif text-[clamp(2rem,6vw,4.2rem)] font-bold leading-[1.0] tracking-tight text-[#f5f0e8]">
                When Einstein
                <br />
                Walked with{" "}
                <em className="text-[#e8d44d]">Gödel</em>
              </h1>
              <p className="mt-6 font-serif text-lg italic leading-relaxed text-[#9aabb8]">
                Excursions to the edge of thought.
              </p>
              <p className="mt-5 font-mono text-[0.68rem] uppercase tracking-[0.15em] text-[#4a6070]">
                Jim Holt&nbsp;/&nbsp;385 pages&nbsp;/&nbsp;∞
                questions&nbsp;/&nbsp;0 easy answers
              </p>
              <a
                href="https://amzn.to/3QhXxE7"
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
            content="When Einstein Walked with Gödel by Jim Holt"
          />
          <meta itemProp="author" content="Abakcus" />

          {/* ── SCENE BLOCK ── */}
          <div className="mb-10 rounded-xl bg-[#0d1b2a] px-7 py-7 sm:px-8 sm:py-8">
            <p className="mb-4 font-sans text-[0.58rem] uppercase tracking-[0.18em] text-white/35">
              Princeton, 1933
            </p>
            <p className="font-serif text-[1.05rem] italic leading-[1.85] text-white/85 sm:text-[1.1rem]">
              Two men leave the Institute every morning at the same hour and
              begin walking, slowly. One is a physicist who has already given
              the world the theory of special relativity — hair wild in the
              wind, long since done with socks. The other is a logician who
              proved that mathematics can contradict itself, unsettling the very
              foundations of reason — withdrawn, prone to paranoia.{" "}
              <span className="text-[#e8d44d]">
                Einstein and Gödel walk for hours.
              </span>{" "}
              Nobody knows exactly what they talk about.
            </p>
          </div>

          {/* ── DROP-CAP INTRO ── */}
          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            <span
              className="float-left mr-2 mt-1 font-serif text-[4.5rem] font-bold leading-[0.78] text-[var(--ink)] sm:text-[5.2rem]"
              aria-hidden="true"
            >
              J
            </span>
            im Holt opens his book with that image. And it serves as a perfect
            metaphor for everything that follows: running two minds at once,
            watching how wildly different ideas can travel side by side down the
            same road.
          </p>
          <p className="clear-both mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            <em>When Einstein Walked with Gödel</em> is not, strictly speaking,
            a science book. A collection of philosophical essays is closer — but
            even that falls short. What Holt does is stranger and more
            thrilling: he takes mathematics, physics, and the sharpest edges of
            philosophy and tells each one like a story.
          </p>

          {/* ── PULL QUOTE ── */}
          <blockquote className="my-10 border-l-[3px] border-[#b5874a] py-1 pl-6">
            <p className="font-serif text-[1.2rem] italic leading-[1.65] text-[var(--ink)] sm:text-[1.3rem]">
              Most writers either oversimplify or lose you in the technical
              weeds. Holt does neither. He finds the ledge and keeps you on it.
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

          {/* ── QUESTIONS SECTION ── */}
          <div className="mb-5 flex items-baseline gap-4 border-b border-[var(--line)] pb-3">
            <span className="shrink-0 font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              01
            </span>
            <h2 className="font-serif text-[1.05rem] font-medium leading-snug tracking-[0.01em] text-[var(--ink)] sm:text-[1.15rem]">
              The questions Holt asks
            </h2>
          </div>

          <div className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              {
                q: "Are there different sizes of infinity — and does it matter?",
              },
              {
                q: "Could time itself be an illusion — as Gödel quietly suggested?",
              },
              {
                q: "Can a machine ever truly think — or only simulate thinking?",
              },
              {
                q: "Is there meaning hidden in the digits of pi — or only randomness?",
                href: "/book-lists/pi",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="rounded-xl border border-[var(--line)] bg-white px-5 py-5"
              >
                {item.href ? (
                  <ArticleProseLink
                    href={item.href}
                    className="font-serif text-sm italic leading-relaxed text-[var(--ink-muted)] article-euclid-link"
                  >
                    {item.q}
                  </ArticleProseLink>
                ) : (
                  <p className="font-serif text-sm italic leading-relaxed text-[var(--ink-muted)]">
                    {item.q}
                  </p>
                )}
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

          {/* ── ESSAYS SECTION ── */}
          <div className="mb-5 flex items-baseline gap-4 border-b border-[var(--line)] pb-3">
            <span className="shrink-0 font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              02
            </span>
            <h2 className="font-serif text-[1.05rem] font-medium leading-snug tracking-[0.01em] text-[var(--ink)] sm:text-[1.15rem]">
              Each chapter, a self-contained adventure
            </h2>
          </div>

          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            The book&apos;s greatest strength is that each chapter reads like a
            self-contained adventure. In the Cantor chapter, you watch a
            mathematician lose his mind trying to map the infinite. In the
            Turing chapter, you see why the question of whether a machine can
            &ldquo;think&rdquo; remains unanswered to this day. In the black
            holes chapter, Holt leads you to the darkest corners of physics —
            and then, each time, shows you the way back.
          </p>
          <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            There is always the feeling of a walk. Like Einstein and Gödel, you
            move alongside Holt. He asks, he thinks, he sometimes admits he
            isn&apos;t sure. That honesty is one of the main reasons the book
            earns your trust.
          </p>

          {/* ── AUTHOR NOTE ── */}
          <div className="my-10 flex gap-5 rounded-xl border border-[var(--line)] bg-white px-6 py-5 sm:px-7">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1a1a1a] font-serif text-base italic text-[#f5f0e8]">
              H
            </div>
            <div>
              <p className="font-sans text-sm font-medium text-[var(--ink)]">
                Jim Holt
              </p>
              <p className="mt-1 text-sm leading-relaxed text-[var(--ink-muted)]">
                Philosopher, essayist, and longtime contributor to{" "}
                <em>The New Yorker</em> and{" "}
                <em>The New York Review of Books</em>. Known for making the
                hardest ideas feel like conversations you didn&apos;t want to
                end.
              </p>
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

          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            One note: this is not a morning-coffee book. Read it in the evening
            quiet, or past midnight resisting sleep — but leave space between
            chapters to just sit with what you&apos;ve read. The questions Holt
            asks follow you after you close the page.
          </p>
          <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            Perhaps that&apos;s exactly what Einstein and Gödel felt on those
            long walks through Princeton: not the satisfaction of answers, but
            the pleasure of the question itself.
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
                Holt writes about the hardest ideas in science and philosophy
                the way a great novelist writes about people — with curiosity,
                warmth, and the gift of making you feel that the question
                belongs to you too.
              </p>
            </div>
          </div>

          {/* ── FOOTER NOTE ── */}
          <p className="mt-12 text-xs leading-relaxed text-[var(--ink-muted)]">
            Jim Holt —{" "}
            <a
              href="https://amzn.to/3QhXxE7"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-[#b5874a]"
            >
              <em>
                When Einstein Walked with Gödel: Excursions to the Edge of
                Thought
              </em>
            </a>
            <br />
            Farrar, Straus and Giroux, 2018 &nbsp;·&nbsp; abakcus.com
          </p>
        </article>
        <ArticleReadMore currentSlug="when-einstein-walked-with-godel" />
      </div>
    </>
  );
}
