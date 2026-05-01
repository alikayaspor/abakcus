import type { ReactNode } from "react";
import { ArticleImageLightbox } from "@/components/articles/article-image-lightbox";
import { ArticleProseLink } from "@/components/articles/article-prose-link";
import { UnitCircleSectionReveal } from "@/components/articles/unit-circle/unit-circle-section-reveal";
import { PASTEL } from "@/data/pastel-palette";
import { InkalaSudokuGrid } from "./inkala-sudoku-grid";

const R2 = "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev";
const IMG_HERO = `${R2}/The%20World%E2%80%99s%20Hardest%20Sudoku%20by%20Arto%20Inkala.jpg.webp`;

function SectionHead({ title }: { title: string }) {
  return (
    <div className="mb-6 border-b border-[var(--line)] pb-3">
      <h2 className="font-serif text-[1.05rem] font-medium leading-snug tracking-[0.01em] text-[var(--ink)] sm:text-[1.15rem]">
        {title}
      </h2>
    </div>
  );
}

function PullQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="my-10 border-l-2 border-[var(--ink)] py-2 pl-6 text-lg italic leading-relaxed text-[var(--ink-muted)]">
      {children}
    </blockquote>
  );
}

function AsideNote({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="my-6 border-l-[3px] border-[var(--pastel-lavender)] bg-[color-mix(in_srgb,var(--pastel-peach)_22%,white)] px-4 py-3 font-mono text-[0.75rem] leading-relaxed text-[var(--ink-muted)]">
      <strong className="text-[var(--ink)]">{title}</strong>
      <span className="mt-1 block font-serif text-[0.88rem] italic text-[var(--ink-muted)]">
        {children}
      </span>
    </div>
  );
}

function HeroFigure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure
      className="my-10 overflow-hidden rounded-[var(--radius-card)] p-3 shadow-[var(--shadow-card)] sm:p-4"
      style={{ backgroundColor: PASTEL.lavender }}
    >
      <ArticleImageLightbox src={src} alt={alt} caption={caption}>
        <div className="w-full rounded-xl bg-white/60 p-1 sm:p-1.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            className="mx-auto block h-auto w-full rounded-lg object-contain transition-transform duration-500 group-hover:scale-[1.01]"
            loading="eager"
            decoding="async"
            draggable={false}
          />
        </div>
      </ArticleImageLightbox>
      <figcaption className="mt-4 px-1 text-center font-serif text-sm italic leading-snug text-[var(--ink)]">
        {caption}
      </figcaption>
    </figure>
  );
}

function StatStrip() {
  const cells: { label: string; value: string; note: string }[] = [
    {
      label: "Inkala 2012",
      value: "4.5%",
      note: "trivialization rate",
    },
    {
      label: "AI Escargot (2006)",
      value: "5.0%",
      note: "Inkala's earlier puzzle",
    },
    {
      label: 'Typical "extreme"',
      value: "5–30%",
      note: "most hard puzzles",
    },
    {
      label: "Beginner puzzle",
      value: "54",
      note: "clues given",
    },
  ];
  return (
    <figure className="my-8 overflow-hidden rounded-sm border border-[var(--line)] shadow-[var(--shadow-soft)]">
      <div className="grid grid-cols-1 divide-y divide-[var(--line)] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
        {cells.map((c) => (
          <div
            key={c.label}
            className="bg-[color-mix(in_srgb,var(--pastel-lavender)_12%,white)] px-4 py-4"
          >
            <p className="font-mono text-[0.52rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              {c.label}
            </p>
            <p className="mt-1 font-serif text-[1.2rem] text-[var(--ink)]">{c.value}</p>
            <p className="mt-0.5 font-mono text-[0.58rem] text-[var(--ink-muted)]">
              {c.note}
            </p>
          </div>
        ))}
      </div>
      <figcaption className="sr-only">
        Comparison of trivialization rates and clue counts for Sudoku puzzles.
      </figcaption>
    </figure>
  );
}

export function InkalaSudokuArticle() {
  return (
    <UnitCircleSectionReveal>
      <div className="unit-circle-article text-[var(--ink)]">
        <div className="mx-auto max-w-[780px] px-[var(--page-pad)] pb-6 pt-8 text-center sm:pb-8 sm:pt-10">
          <p className="mb-5 font-sans text-[0.62rem] uppercase leading-relaxed tracking-[0.24em] text-[var(--ink-muted)] sm:text-[0.65rem]">
            Puzzle · Mathematics ·{" "}
            <time dateTime="2012-06-01">2012</time>
          </p>
          <h1 className="font-serif text-[clamp(2rem,6vw,3.1rem)] font-normal leading-[1.1] tracking-[-0.02em] text-[var(--ink)]">
            The world&apos;s hardest Sudoku — 23 clues, one solution, three months
            of work
          </h1>
          <p className="mx-auto mt-6 max-w-[34rem] border-l-2 border-[var(--ink)] pl-5 text-left text-lg italic leading-relaxed text-[var(--ink-muted)] sm:text-xl">
            Finnish mathematician <strong>Arto Inkala</strong> spent three months
            designing a Sudoku with a trivialization rate of 4.5%. One solver
            cracked it after 153 attempts over two months. Most don&apos;t crack it
            at all. Here&apos;s what that number means, and why the puzzle is
            what it is.
          </p>
          <div
            className="mx-auto mt-7 h-px w-14 bg-[var(--line)] sm:mt-8"
            aria-hidden
          />
        </div>

        <article className="mx-auto max-w-[min(48rem,100%)] px-[var(--page-pad)] pb-20 pt-2 sm:pb-28">
          <p className="intro-drop border-b border-[var(--line)] pb-8 text-lg leading-[1.82] text-[var(--ink)] sm:text-xl">
            A standard Sudoku has 81 cells. A beginner puzzle gives you around 54
            filled in. A hard one gives you 27 to 30. Arto Inkala&apos;s 2012
            puzzle gives you 23. But the count alone is not the point — minimum-clue
            Sudokus exist with only 17 filled cells and are solvable. What makes
            Inkala&apos;s puzzle different is not how many numbers are given. It is{" "}
            <em>which</em> numbers, and <em>where</em>.
          </p>

          <HeroFigure
            src={IMG_HERO}
            alt="The World's Hardest Sudoku by Arto Inkala — 9×9 grid with pastel-highlighted given digits on a beige background"
            caption="Inkala&apos;s 2012 puzzle as circulated in the press — 23 givens, one unique solution."
          />

          <section data-uc-section className="mt-14">
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The puzzle has exactly one solution. Finding it requires techniques
              that don&apos;t appear in any newspaper Sudoku: Death Blossom, Digit
              Forcing Chains, chains of inference that require tracking eight
              simultaneous constraint relationships across the grid. Most Sudoku
              solvers — human or algorithmic — stall out completely. The puzzle
              doesn&apos;t give you a foothold. Every move exposes just enough to
              make the next move look possible, then reveals it isn&apos;t.
            </p>

            <PullQuote>
              Inkala said the most difficult parts require thinking ten moves ahead,
              exploring permutations at each stage to eliminate all routes except
              one. A tree search through a forest with no trail markers.
            </PullQuote>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead title="The puzzle itself" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Below is Inkala&apos;s 2012 puzzle — the one he published in{" "}
              <em>The Daily Telegraph</em> and <em>The Sun</em>, the one that
              circulated under the headline &ldquo;world&apos;s hardest
              Sudoku.&rdquo; The 23 given cells are marked. The 58 empty ones are
              yours. (You can also try the{" "}
              <ArticleProseLink href="/questions/clockwise-ant">
                clockwise ant
              </ArticleProseLink>{" "}
              — a very different puzzle where the answer lands in under an hour if
              you see the trick.)
            </p>

            <InkalaSudokuGrid />

            <AsideNote title="The unique solution constraint">
              Every valid Sudoku must have exactly one solution — that&apos;s part
              of the definition. Puzzles with multiple solutions aren&apos;t
              Sudokus, they&apos;re incomplete constraints. Inkala&apos;s puzzle
              satisfies this: there is one arrangement of digits 1–9 that satisfies
              all rows, columns, and boxes simultaneously. The difficulty lies
              entirely in finding it without guessing, using only logical deduction.
            </AsideNote>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead title="How difficulty is actually measured" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Saying a Sudoku is &ldquo;hard&rdquo; is not a mathematical statement
              until you define a metric. The one used to evaluate Inkala&apos;s
              puzzle is the trivialization rate — a measure developed by Andrew
              Stuart at SudokuWiki.org. The concept: take every pair of empty cells
              in the puzzle. If logically filling one cell would trivialize
              (significantly simplify or make solvable) the other, that pair
              counts. The trivialization rate is the fraction of such pairs among
              all possible empty-cell pairs.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              A puzzle with a high trivialization rate has many such helpful pairs
              — filling one cell opens up many others. A puzzle with a low rate
              gives you almost nothing. Each logical step is isolated. Progress
              doesn&apos;t cascade.
            </p>

            <StatStrip />

            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              At 4.5%, Inkala&apos;s 2012 puzzle sits below his own earlier AI
              Escargot (5.0%) on this scale — meaning even by Inkala&apos;s own
              prior standard, the 2012 version is harder. The scoring isn&apos;t
              the only measure of difficulty and the puzzle community continues to
              debate it, but it provides a concrete basis for the claim: this
              puzzle offers fewer logical shortcuts than almost anything else in
              circulation.
            </p>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead title="Arto Inkala and the AI Escargot" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Inkala is a Finnish applied mathematician. He first came to public
              attention in 2006 with <strong>AI Escargot</strong> — named after
              his initials and the French word for snail, because the given
              numbers spiral across the grid in a snail-shell pattern. He described
              solving it as an &ldquo;intellectual culinary pleasure.&rdquo; The
              puzzle required him to test over one billion number combinations during
              construction.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              AI Escargot earned coverage in major newspapers and became the
              reference point for Sudoku difficulty for several years. Then in
              2012, Inkala published the puzzle above — and claimed it was harder.
              The puzzle community, which had already catalogued many puzzles
              harder than Escargot by 2006 standards, debated the claim. The debate
              continues. But in terms of the trivialization metric and media
              attention, the 2012 puzzle holds its ground.
            </p>

            <AsideNote title="The difficulty scale Inkala used">
              Inkala described his puzzle as scoring &ldquo;eleven&rdquo; on the
              standard five-star difficulty scale used by most publications — a
              deliberate overstatement of its position outside normal range. The
              Daily Telegraph, The Sun, and Metro all ran it in June 2012. The
              Guardian&apos;s crossword editor reportedly declined to publish it on
              the grounds that it was unsolvable by their readership.
            </AsideNote>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead title="153 attempts, two months" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The most-cited human solution story came from a commenter on
              SudokuWiki.org, who wrote: &ldquo;I just finished today, Sept 3. I
              began on July 2. It took me 153 tries before I got it.&rdquo;
              That&apos;s two months of returning to a single puzzle, starting over
              each time a contradiction appeared, keeping notes on which paths led
              where. 153 documented attempts before a clean solution.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              This is not unusual for the puzzle. Others report weeks. Some report
              giving up. Computer solvers handle it trivially through brute force
              — a machine can enumerate all possibilities in milliseconds — but
              the interesting question, the one the puzzle community cares about,
              is whether a logical deductive path exists: whether a human can solve
              it without ever guessing, using only constraint propagation.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The answer appears to be yes, but the path requires technique
              combinations that most solvers never encounter. Death Blossom involves
              identifying a cell where all candidates force the same value in
              another cell through separate chains. Digit Forcing Chains require
              tracing what must be true if a specific digit occupies a specific
              cell, then following that implication through five, seven, ten
              subsequent moves. These are not intuitive. They are algorithmic, and
              executing them by hand across a grid this sparse is what separates
              the puzzle from everything else in the category.
            </p>
          </section>

          <section data-uc-section className="mt-14">
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Inkala&apos;s puzzle is not the objectively hardest Sudoku that has
              ever been constructed — the puzzle community has documented grids
              with lower trivialization rates, found algorithmically. But it is the
              hardest Sudoku that has been published, named, and handed to humans
              to solve with a pen. That distinction matters. The difficulty of a
              puzzle is not only a property of the grid. It is a property of the
              grid in the hands of a person, with time, and without a computer.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The same patience tax shows up in other corners of mathematics —
              from{" "}
              <ArticleProseLink href="/articles/zurich-notebook">
                Einstein&apos;s Zurich notebook
              </ArticleProseLink>{" "}
              full of dead ends to{" "}
              <ArticleProseLink href="/articles/mit-1869">
                MIT&apos;s 1869 algebra exam
              </ArticleProseLink>
              , where the questions look innocent until you try to work them under
              exam conditions. Twenty-three numbers. One correct arrangement.
              Three months to design, two months for the fastest documented human
              solver to finish. The puzzle sits online. It is waiting.
            </p>
          </section>

          <p className="mt-12 border border-[var(--line)] px-5 py-4 font-mono text-[0.68rem] leading-relaxed text-[var(--ink-muted)]">
            Puzzle source:{" "}
            <a
              href="https://www.sudokuwiki.org/Arto_Inkala_Sudoku"
              target="_blank"
              rel="noopener noreferrer"
            >
              SudokuWiki.org — Arto Inkala Sudoku
            </a>
            {" · "}
            <a
              href="https://www.sudoku4adults.com/worlds-hardest-sudoku-puzzle-ai-escargot/"
              target="_blank"
              rel="noopener noreferrer"
            >
              AI Escargot (sudoku4adults.com)
            </a>
            {" · "}
            <a
              href="https://abcnews.go.com/blogs/headlines/2012/06/can-you-solve-the-hardest-ever-sudoku"
              target="_blank"
              rel="noopener noreferrer"
            >
              ABC News, 2012
            </a>
          </p>
        </article>
      </div>
    </UnitCircleSectionReveal>
  );
}
