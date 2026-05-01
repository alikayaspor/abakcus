import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/home/site-header";
import { ArticleProseLink } from "@/components/articles/article-prose-link";
import { ArticleReadMore } from "@/components/articles/article-read-more";

const COVER =
  "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/Surely%20You%E2%80%99re%20Joking%2C%20Mr.%20Feynman!%20by%20Richard%20Feynman.jpg";

export const metadata: Metadata = {
  title: "Surely You're Joking, Mr. Feynman! — Richard P. Feynman",
  description:
    "Not the story of a Nobel-winning physicist — the story of a man who cracked safes, played bongo drums professionally, and approached every single one with identical seriousness.",
  openGraph: {
    title: "Surely You're Joking, Mr. Feynman! — Richard P. Feynman",
    description:
      "Not the story of a Nobel-winning physicist — the story of a man who cracked safes, played bongo drums professionally, and approached every single one with identical seriousness.",
    images: [
      {
        url: COVER,
        width: 800,
        height: 1200,
        alt: "Surely You're Joking, Mr. Feynman! — Richard P. Feynman",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Surely You're Joking, Mr. Feynman! — Richard P. Feynman",
    description:
      "A wobbling plate, cracked safes, bongo drums — and then the Nobel. The book that proves curiosity is a rigorous enough occupation on its own.",
    images: [COVER],
  },
  alternates: {
    canonical: "/books/surely-youre-joking-mr-feynman",
  },
};

export default function SurelyYoureJokingPage() {
  return (
    <>
      <SiteHeader />

      {/* ── HERO ── */}
      <header className="relative overflow-hidden bg-[#160e05] pb-0">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, #0a0702 0%, #160e05 100%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[var(--page-max)] px-[var(--page-pad)]">
          <div className="flex flex-col items-center gap-10 py-20 text-center md:flex-row md:gap-16 md:py-28 md:text-left">
            {/* Cover */}
            <div className="w-52 shrink-0 sm:w-64 md:w-72">
              <div
                className="relative overflow-hidden rounded-lg shadow-[0_32px_80px_-16px_rgba(0,0,0,0.8)]"
                style={{ aspectRatio: "2/3" }}
              >
                <Image
                  src={COVER}
                  alt="Surely You're Joking, Mr. Feynman! book cover — Richard P. Feynman, W. W. Norton 1985"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width:768px) 208px, 288px"
                />
              </div>
            </div>

            {/* Text */}
            <div className="max-w-xl">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-[#c8833a]">
                On the Book &nbsp;·&nbsp; 1985 &nbsp;·&nbsp; W. W. Norton &amp;
                Company
              </p>
              <h1 className="mt-5 font-serif text-[clamp(2rem,6vw,4.2rem)] font-bold leading-[1.0] tracking-tight text-[#f5f0e8]">
                <em>Surely You&apos;re</em>
                <br />
                <em>Joking,</em>
                <br />
                <em className="text-[#c8833a]">Mr. Feynman!</em>
              </h1>
              <p className="mt-6 font-serif text-lg italic leading-relaxed text-[#9a8878]">
                Adventures of a curious character.
              </p>
              <p className="mt-5 font-mono text-[0.68rem] uppercase tracking-[0.15em] text-[#4a3a2a]">
                Richard P. Feynman&nbsp;/&nbsp;352 pages&nbsp;/&nbsp;∞
                curiosity&nbsp;/&nbsp;1 Nobel
              </p>
              <a
                href="https://amzn.to/4tIAfpu"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#c8833a] px-5 py-2.5 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#1a0e05] transition-opacity duration-200 hover:opacity-85"
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
            content="Surely You're Joking, Mr. Feynman! by Richard P. Feynman"
          />
          <meta itemProp="author" content="Abakcus" />

          {/* ── DROP-CAP INTRO ── */}
          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            <span
              className="float-left mr-2 mt-1 font-serif text-[4.5rem] font-bold leading-[0.78] text-[var(--ink)] sm:text-[5.2rem]"
              aria-hidden="true"
            >
              T
            </span>
            he most common mistake people make about Feynman is calling him
            &ldquo;a fascinating physicist.&rdquo; The description is accurate
            and dangerously incomplete at the same time. Yes, he was a
            Nobel-winning architect of quantum electrodynamics — but this book
            is not about that Feynman. It is about the man who cracked safes at
            Los Alamos to drive security officers to the edge of sanity, played
            bongo drums professionally in a nightclub, learned samba in Brazil,
            earned a certificate in auto body repair, and approached every single
            one of these things with identical seriousness.
          </p>

          {/* ── PULL QUOTE 1 ── */}
          <blockquote className="my-10 border-l-[3px] border-[#c8833a] py-1 pl-6">
            <p className="font-serif text-[1.2rem] italic leading-[1.65] text-[var(--ink)] sm:text-[1.3rem]">
              &ldquo;I want to understand physics, and the only way to do that
              is to do everything.&rdquo;
            </p>
            <cite className="mt-3 block font-mono text-[0.65rem] uppercase tracking-[0.12em] not-italic text-[var(--ink-muted)]">
              A paraphrase of the book&apos;s animating spirit
            </cite>
          </blockquote>

          {/* ── SIDEBAR NOTE as block on mobile, styled ── */}
          <div className="clear-both mb-8 border border-[var(--line)] px-5 py-4 sm:float-right sm:mb-4 sm:ml-8 sm:w-[220px] sm:px-4 sm:py-4">
            <span className="mb-2 block font-mono text-[0.6rem] uppercase tracking-[0.14em] text-[#c8833a]">
              —
            </span>
            <p className="font-serif text-[0.82rem] italic leading-[1.6] text-[var(--ink-muted)]">
              The book wasn&apos;t written by Feynman — it was spoken by him.
              His physicist friend Ralph Leighton recorded and compiled years of
              stories. That difference is felt on every page.
            </p>
          </div>

          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            The title is already a manifesto.{" "}
            <em>Surely You&apos;re Joking</em> — the phrase was spoken by the
            faculty wife at a Princeton tea party after Feynman answered the
            question &ldquo;Do you want lemon or milk?&rdquo; with &ldquo;Both,
            please.&rdquo; He spent the rest of his life hearing that sentence.
            His choices were never the expected ones, and he never seemed to
            notice that they were supposed to be.
          </p>

          {/* ── DIVIDER ── */}
          <div className="clear-both my-10 flex items-center gap-4">
            <span className="h-px flex-1 bg-[var(--line)]" />
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
              §
            </span>
            <span className="h-px flex-1 bg-[var(--line)]" />
          </div>

          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            Why has this book been read by hundreds of thousands of engineers,
            mathematicians, designers, painters, and doctors — many of whom cite
            it as something that changed how they move through the world? The
            answer, I think, is this: Feynman demonstrated that{" "}
            <em>curiosity is a rigorous enough occupation on its own.</em> In an
            era saturated with productivity discourse — deep work, focused
            output, deliberate practice — curiosity is typically sold as a
            luxury, something you earn after the real work is done. Feynman
            reversed that hierarchy completely. And then he won the Nobel Prize.
          </p>

          {/* ── SCENE BLOCK ── */}
          <div className="mb-10 overflow-hidden rounded-xl bg-[#160e05] px-7 py-7 sm:px-8 sm:py-8">
            <p className="mb-4 font-sans text-[0.58rem] uppercase tracking-[0.18em] text-white/35">
              A Scene
            </p>
            <p className="mb-4 font-serif text-[1.05rem] italic leading-[1.85] text-white/80 sm:text-[1.1rem]">
              Feynman notices a plate wobbling in the Cornell cafeteria. The
              precession frequency is exactly twice the spin frequency. Nobody
              asked him to look at this. It has no practical application. He
              spends hours working out the relationship — purely because, as he
              puts it, it{" "}
              <span className="text-[#c8833a]">
                &ldquo;looked amusing.&rdquo;
              </span>
            </p>
            <p className="mb-4 font-serif text-[1.05rem] italic leading-[1.85] text-white/80 sm:text-[1.1rem]">
              A few years later, the same equations feed directly into his work
              on quantum electrodynamics — the work that earns him the Nobel
              Prize.
            </p>
            <p className="font-serif text-[1.05rem] italic leading-[1.85] text-white/60 sm:text-[1.1rem]">
              The chapter ends: &ldquo;That&apos;s what I got from playing
              around.&rdquo;
            </p>
          </div>

          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            Most readers shelve this as memoir. But it is a disguised
            epistemology — a radical argument about how knowledge is actually
            For Feynman, truly understanding something meant{" "}
            <ArticleProseLink
              href="/articles/feynman-technique"
              className="article-euclid-link"
            >
              reinventing it from scratch
            </ArticleProseLink>
            . Not knowing the formula; deriving it.
            This is why he taught the same course differently every single year,
            rebuilding each argument from first principles, finding a new path
            to the same destination every time. His lectures on physics became a
            monument not because he explained things clearly, but because the
            thinking inside them was visibly alive.
          </p>

          <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            One of the least discussed but most unsettling sections of the book
            is Feynman&apos;s time in Brazil. He teaches physics in Rio for a
            spell, and gradually realizes that his students can answer every
            question on every exam — and understand essentially nothing. The
            educational system has severed the connection between words and
            objects so completely that students know the name of every fish
            without ever having seen water.{" "}
            <ArticleProseLink
              href="/articles/feynman-math-education"
              className="article-euclid-link"
            >
              He said this in the 1950s.
            </ArticleProseLink>{" "}
            It describes a classroom somewhere near you today.
          </p>

          {/* ── DIVIDER ── */}
          <div className="my-10 flex items-center gap-4">
            <span className="h-px flex-1 bg-[var(--line)]" />
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
              §
            </span>
            <span className="h-px flex-1 bg-[var(--line)]" />
          </div>

          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            What made Feynman extraordinary was not his intelligence — history
            is full of intelligent people nobody remembers. What made him
            Feynman was that he never fully left childhood. Cracking locks,
            picking safes, outwitting systems, wrong-footing expectations: all
            of it runs on the same fuel —{" "}
            <em>
              they say that&apos;s how it works, so let&apos;s actually check.
            </em>{" "}
            That question is the engine of both his physics and his life. He
            never bothered to keep them separate.
          </p>

          <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            Recommend this book to anyone who uses expertise as a wall. Anyone
            who says &ldquo;that&apos;s not my field&rdquo; while meaning
            &ldquo;that&apos;s not safe to be curious about.&rdquo; Anyone who
            has ever felt that the serious work and the interesting work are two
            different things that must be kept apart. Feynman never built that
            wall. He learned biology, made paintings good enough to sell,
            exploited security gaps instead of reporting them, and joined a
            group of Mexican performers who guessed professions from city names.
            He did all of this after the Nobel.
          </p>

          {/* ── PULL QUOTE 2 ── */}
          <blockquote className="my-10 border-l-[3px] border-[#c8833a] py-1 pl-6">
            <p className="font-serif text-[1.2rem] italic leading-[1.65] text-[var(--ink)] sm:text-[1.3rem]">
              &ldquo;There are no unimportant questions. Only minds that have
              decided in advance what matters.&rdquo;
            </p>
            <cite className="mt-3 block font-mono text-[0.65rem] uppercase tracking-[0.12em] not-italic text-[var(--ink-muted)]">
              An inference from how Feynman worked
            </cite>
          </blockquote>

          <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            One last thing: this book will not teach you anything directly. You
            will not learn to solve Feynman&apos;s equations, crack his locks,
            or improve your bongo playing. But when you close it, you will find
            it difficult not to notice that there are wobbling plates everywhere
            — and to wonder, just for a moment, what might happen if you stared
            at one long enough. Very few books manage that.
          </p>

          {/* ── VERDICT ── */}
          <div className="mt-12 flex gap-5 rounded-xl border border-[var(--line)] bg-white px-6 py-6 sm:px-8 sm:py-7">
            <span className="shrink-0 pt-0.5 text-2xl leading-none tracking-widest text-[#c8833a]">
              ★★★★★
            </span>
            <div>
              <p className="font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
                In short
              </p>
              <p className="mt-2 font-serif text-base italic leading-relaxed text-[var(--ink-muted)] sm:text-[1.05rem]">
                Feynman spoke it, Leighton wrote it down. But this is not a
                memoir — it is a document of what happens when curiosity is
                treated as the only serious work there is.
              </p>
            </div>
          </div>

          {/* ── FOOTER NOTE ── */}
          <p className="mt-12 text-xs leading-relaxed text-[var(--ink-muted)]">
            Richard P. Feynman —{" "}
            <a
              href="https://amzn.to/4tIAfpu"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-[#c8833a]"
            >
              <em>
                Surely You&apos;re Joking, Mr. Feynman!: Adventures of a
                Curious Character
              </em>
            </a>
            <br />
            W. W. Norton &amp; Company, 1985 &nbsp;·&nbsp; abakcus.com
          </p>
        </article>
        <ArticleReadMore currentSlug="surely-youre-joking-mr-feynman" />
      </div>
    </>
  );
}
