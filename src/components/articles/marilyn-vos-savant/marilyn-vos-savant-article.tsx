import type { ReactNode } from "react";
import Image from "next/image";
import { ArticleImageLightbox } from "@/components/articles/article-image-lightbox";
import { ArticleProseLink } from "@/components/articles/article-prose-link";
import { UnitCircleSectionReveal } from "@/components/articles/unit-circle/unit-circle-section-reveal";
import { PASTEL } from "@/data/pastel-palette";

const R2 = "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev";
const IMG = {
  hero: `${R2}/Ask%20Marilyn.webp`,
  marilyn: `${R2}/Marilyn%20vos%20Savant.webp`,
  montyHall: `${R2}/Monty%20Hall%20in%20Let%E2%80%99s%20Make%20a%20Deal%20in%201963.webp`,
  hero2: `${R2}/Ask%20Marilyn%202.webp`,
};

function SectionHead({ title }: { title: string }) {
  return (
    <div className="mb-6 border-b border-[var(--line)] pb-3">
      <h2 className="font-serif text-[1.05rem] font-medium leading-snug tracking-[0.01em] text-[var(--ink)] sm:text-[1.15rem]">
        {title}
      </h2>
    </div>
  );
}

function ArticleFigure({
  src,
  alt,
  caption,
  priority,
  pastel,
  aspect = "aspect-[3/2]",
  bleed = false,
  fit = "cover",
  noPad = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  pastel: keyof typeof PASTEL;
  /** Pass "natural" to let the image render at its own height with no letterboxing */
  aspect?: string | "natural";
  bleed?: boolean;
  fit?: "cover" | "contain";
  /** Remove internal padding so image fills the card edge-to-edge */
  noPad?: boolean;
}) {
  const isNatural = aspect === "natural";
  const padClass = noPad ? "" : "p-3 sm:p-4";
  return (
    <figure
      className={`my-10 overflow-hidden rounded-[var(--radius-card)] ${padClass} shadow-[var(--shadow-card)]${bleed ? " sm:-mx-8 lg:-mx-16" : ""}`}
      style={{ backgroundColor: PASTEL[pastel] }}
    >
      <ArticleImageLightbox src={src} alt={alt} caption={caption}>
        {isNatural ? (
          <div className={`w-full overflow-hidden${noPad ? "" : " rounded-xl"}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              className={`mx-auto block h-auto w-full transition-transform duration-500 group-hover:scale-[1.02]${noPad ? "" : " rounded-xl"}`}
              loading={priority ? "eager" : "lazy"}
              decoding="async"
            />
          </div>
        ) : (
          <div className={`relative ${aspect} w-full overflow-hidden bg-white/55${noPad ? "" : " rounded-xl"}`}>
            <Image
              src={src}
              alt={alt}
              fill
              className={`${
                fit === "contain" ? "object-contain" : "object-cover"
              } transition-transform duration-500 group-hover:scale-[1.02]`}
              sizes="(max-width:768px) 100vw, min(760px, 95vw)"
              priority={priority}
            />
          </div>
        )}
      </ArticleImageLightbox>
      {caption && (
        <figcaption className="mt-4 px-4 pb-4 text-center font-serif text-sm italic leading-snug text-[var(--ink)]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function PullQuote({ quote, attr }: { quote: string; attr: string }) {
  return (
    <blockquote className="my-10 rounded-r-xl border-l-[4px] border-[var(--pastel-lavender)] bg-[color-mix(in_srgb,var(--pastel-lavender)_30%,white)] py-5 pl-6 pr-5">
      <p className="font-serif text-[1.2rem] italic leading-relaxed text-[var(--ink)]">
        &ldquo;{quote}&rdquo;
      </p>
      <p className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-[var(--ink-muted)]">
        — {attr}
      </p>
    </blockquote>
  );
}

function LetterBlock({ quote, sig }: { quote: string; sig: string }) {
  return (
    <blockquote className="my-6 border-l-[3px] border-[#9e3a1f] bg-[color-mix(in_srgb,var(--pastel-rose)_22%,white)] px-5 py-4">
      <p className="font-serif text-[0.95rem] italic leading-relaxed text-[var(--ink)]">
        &ldquo;{quote}&rdquo;
      </p>
      <p className="mt-3 font-mono text-[0.58rem] uppercase tracking-[0.12em] text-[#9e3a1f]">
        — {sig}
      </p>
    </blockquote>
  );
}

function NoteBox({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="my-6 border border-[var(--line-soft)] bg-[color-mix(in_srgb,var(--pastel-lavender)_18%,white)] px-5 py-4">
      <p className="mb-1 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
        {title}
      </p>
      <p className="font-serif text-[0.88rem] italic leading-relaxed text-[var(--ink-muted)]">
        {children}
      </p>
    </aside>
  );
}

function StatPanel() {
  return (
    <figure className="my-8 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-[var(--line-soft)] bg-[var(--line-soft)]">
      {[
        { value: "~10,000", label: "Letters received" },
        { value: "92%", label: "Said she was wrong" },
      ].map((s) => (
        <div
          key={s.label}
          className="flex flex-col items-center gap-2 bg-[var(--surface)] px-4 py-6 text-center"
        >
          <span className="block font-serif text-[2.2rem] font-medium leading-none text-[var(--ink)]">
            {s.value}
          </span>
          <span className="mt-1 font-mono text-[0.58rem] uppercase tracking-[0.08em] text-[var(--ink-muted)]">
            {s.label}
          </span>
        </div>
      ))}
    </figure>
  );
}

function DoorDiagram() {
  return (
    <figure className="my-10 overflow-hidden rounded-xl border border-[var(--line-soft)] bg-[color-mix(in_srgb,var(--pastel-sky)_14%,white)] p-5">
      <svg
        viewBox="0 0 540 200"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto w-full max-w-[540px]"
        aria-label="Three-door diagram: Door 1 is your choice, Door 2 is the switch option, Door 3 has been opened to reveal a goat"
      >
        {/* Door 1 — your choice */}
        <rect x="30" y="30" width="120" height="140" rx="2" fill="#ede9e1" stroke="#2a2118" strokeWidth="1.5" />
        <text x="90" y="115" fontFamily="Georgia, serif" fontSize="26" fill="#2a2118" textAnchor="middle" fontStyle="italic">1</text>
        <rect x="30" y="155" width="120" height="18" fill="#2a2118" />
        <text x="90" y="168" fontFamily="monospace" fontSize="9" fill="#f5f1eb" textAnchor="middle" letterSpacing=".05em">YOUR CHOICE</text>

        {/* Door 2 — switch option */}
        <rect x="210" y="30" width="120" height="140" rx="2" fill="#ede9e1" stroke="#2a2118" strokeWidth="1.5" />
        <text x="270" y="115" fontFamily="Georgia, serif" fontSize="26" fill="#2a2118" textAnchor="middle" fontStyle="italic">2</text>
        <rect x="210" y="155" width="120" height="18" fill="#8b6f47" />
        <text x="270" y="168" fontFamily="monospace" fontSize="9" fill="#f5f1eb" textAnchor="middle" letterSpacing=".05em">SWITCH?</text>

        {/* Door 3 — opened by host */}
        <rect x="390" y="30" width="120" height="140" rx="2" fill="#c4b49a" stroke="#2a2118" strokeWidth="1.5" />
        <text x="450" y="95" fontSize="42" textAnchor="middle">🐐</text>
        <rect x="390" y="155" width="120" height="18" fill="#9e3a1f" />
        <text x="450" y="168" fontFamily="monospace" fontSize="9" fill="#f5f1eb" textAnchor="middle" letterSpacing=".05em">OPENED BY HOST</text>
      </svg>
      <figcaption className="mt-3 text-center font-serif text-sm italic text-[var(--ink-muted)]">
        You chose Door 1. The host — who knows what is behind every door — reveals a goat behind Door 3. Do you switch?
      </figcaption>
    </figure>
  );
}

function VideoEmbed() {
  return (
    <figure className="my-10 overflow-hidden rounded-2xl border border-[var(--line-soft)] bg-[color-mix(in_srgb,var(--pastel-lavender)_18%,white)] p-3 shadow-[var(--shadow-soft)] sm:p-4">
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-[#0a0c10] ring-1 ring-[var(--line-soft)]">
        <iframe
          className="absolute inset-0 h-full w-full rounded-[inherit]"
          src="https://www.youtube.com/embed/ggDQXlinbME"
          title="The Monty Hall Problem — Vox"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <figcaption className="mt-3 px-1 text-center font-serif text-sm italic leading-snug text-[var(--ink-muted)]">
        Vox on the Monty Hall problem and the story behind vos Savant&apos;s 1990 column — with Zachary Crockett, whose Priceonomics piece brought it wide attention.
      </figcaption>
    </figure>
  );
}

const SCENARIOS = [
  { car: "Door 1", choice: "Door 1", host: "Door 2 or 3", switchTo: "Door 3 or 2", win: false },
  { car: "Door 1", choice: "Door 2", host: "Door 3",       switchTo: "Door 1",       win: true  },
  { car: "Door 1", choice: "Door 3", host: "Door 2",       switchTo: "Door 1",       win: true  },
  { car: "Door 2", choice: "Door 1", host: "Door 3",       switchTo: "Door 2",       win: true  },
  { car: "Door 2", choice: "Door 2", host: "Door 1 or 3", switchTo: "Door 3 or 1", win: false },
  { car: "Door 2", choice: "Door 3", host: "Door 1",       switchTo: "Door 2",       win: true  },
  { car: "Door 3", choice: "Door 1", host: "Door 2",       switchTo: "Door 3",       win: true  },
  { car: "Door 3", choice: "Door 2", host: "Door 1",       switchTo: "Door 3",       win: true  },
  { car: "Door 3", choice: "Door 3", host: "Door 1 or 2", switchTo: "Door 2 or 1", win: false },
];

function ScenariosTable() {
  return (
    <figure className="my-10 overflow-x-auto rounded-sm border border-[var(--line-soft)]">
      <table className="w-full border-collapse text-[0.82rem]">
        <thead>
          <tr className="bg-[var(--ink)] text-[var(--surface)]">
            {["Car Behind", "You Choose", "Host Opens", "You Switch To", "Result"].map((h) => (
              <th
                key={h}
                className="px-3 py-2.5 text-left font-mono text-[0.6rem] font-normal uppercase tracking-[0.1em]"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {SCENARIOS.map((row, i) => (
            <tr
              key={i}
              className={i % 2 === 0 ? "bg-[color-mix(in_srgb,var(--pastel-lavender)_10%,white)]" : "bg-[var(--surface)]"}
            >
              <td className="px-3 py-2 font-serif">{row.car}</td>
              <td className="px-3 py-2 font-serif">{row.choice}</td>
              <td className="px-3 py-2 font-serif text-[var(--ink-muted)]">{row.host}</td>
              <td className="px-3 py-2 font-serif">{row.switchTo}</td>
              <td
                className={`px-3 py-2 font-mono text-[0.65rem] font-medium uppercase tracking-[0.08em] ${
                  row.win ? "text-[#2a6e3f]" : "text-[#9e3a1f]"
                }`}
              >
                {row.win ? "Win" : "Lose"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <figcaption className="border-t border-[var(--line-soft)] bg-[var(--surface)] px-4 py-2.5 font-serif text-[0.8rem] italic text-[var(--ink-muted)]">
        All nine equally likely scenarios when you <strong className="font-semibold not-italic text-[var(--ink)]">always switch</strong>. Six wins, three losses — a 2/3 win rate.
      </figcaption>
    </figure>
  );
}

function Divider() {
  return (
    <div className="my-10 flex items-center gap-4" aria-hidden>
      <div className="h-px flex-1 bg-[var(--line-soft)]" />
      <span className="font-mono text-[0.65rem] tracking-[0.4em] text-[var(--ink-muted)]">· · ·</span>
      <div className="h-px flex-1 bg-[var(--line-soft)]" />
    </div>
  );
}

export function MarilynVosSavantArticle() {
  return (
    <UnitCircleSectionReveal>
      <div className="unit-circle-article text-[var(--ink)]">
        {/* ── HEADER ── */}
        <div className="mx-auto max-w-[780px] px-[var(--page-pad)] pb-6 pt-8 text-center sm:pb-8 sm:pt-10">
          <p className="mb-5 font-sans text-[0.62rem] uppercase leading-relaxed tracking-[0.24em] text-[var(--ink-muted)] sm:text-[0.65rem]">
            Probability · History · 1990
          </p>
          <h1 className="font-serif text-[clamp(2rem,6vw,3.1rem)] font-normal leading-[1.1] tracking-[-0.02em] text-[var(--ink)]">
            The Woman Who Was Right
          </h1>
          <p className="mx-auto mt-6 max-w-[34rem] border-l-2 border-[var(--ink)] pl-5 text-left text-lg italic leading-relaxed text-[var(--ink-muted)] sm:text-xl">
            In 1990, Marilyn vos Savant answered a probability puzzle correctly.
            Nearly 10,000 people — many of them academics — wrote in to tell her
            she was wrong. She was not wrong.
          </p>
          <div className="mx-auto mt-7 h-px w-14 bg-[var(--line)] sm:mt-8" aria-hidden />
        </div>

        <article className="mx-auto max-w-[min(48rem,100%)] px-[var(--page-pad)] pb-20 pt-2 sm:pb-28">

          {/* ── HERO IMAGE ── */}
          <ArticleFigure
            src={IMG.hero}
            alt="Ask Marilyn column in Parade magazine"
            caption="Parade&apos;s &ldquo;Ask Marilyn&rdquo; column — 36 years of logic puzzles, probability problems, and reader mail."
            priority
            pastel="lavender"
            aspect="natural"
            noPad
            bleed
          />

          {/* ── INTRO ── */}
          <p className="intro-drop border-b border-[var(--line)] pb-8 text-lg leading-[1.82] text-[var(--ink)] sm:text-xl">
            On September 9, 1990, a reader named Craig Whitaker sent a question to{" "}
            <em>Parade</em> magazine&apos;s &ldquo;Ask Marilyn&rdquo; column. The question was
            short. It concerned a game show, three doors, a car, and two goats. Marilyn
            vos Savant, the column&apos;s author and the holder of the highest recorded IQ
            in the Guinness Book of World Records, answered in two sentences. What followed
            was one of the most remarkable episodes in the public history of mathematics.
          </p>

          <p className="mt-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
            The puzzle has since become famous enough to carry its own name — the Monty
            Hall Problem — though the problem itself is considerably older than the
            controversy. What made 1990 different was not the puzzle, but the woman who
            answered it, and the people who disagreed. It belongs in the same company as{" "}
            <ArticleProseLink href="/articles/indiana-pi-bill">
              the Indiana legislature that tried to redefine the value of π by statute
            </ArticleProseLink>{" "}
            — famous cases where experts and institutions were publicly, confidently, and
            completely wrong about mathematics.
          </p>

          {/* ── WHO WAS MARILYN ── */}
          <div className="mt-12">
            <SectionHead title="Who Was Marilyn vos Savant?" />

            <p className="text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              Born Marilyn Mach on August 11, 1946, in St. Louis, Missouri, she grew up in
              a family of modest means — both grandfathers were coal miners, her parents ran
              a bar and grill. By the time she was ten, she had reportedly read through the
              entire <em>Encyclopædia Britannica.</em>
            </p>

            <p className="mt-5 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              That same year, she was administered the Stanford-Binet Intelligence Scale,
              a test normed for children. The result came back at 228 — her measured mental
              age was 22 years and 10 months, her actual age just 10. This figure, submitted
              to the Guinness Book of World Records alongside a later Mega Test result of
              186, earned her a listing as the person with the highest recorded IQ on the
              planet.
            </p>

            <NoteBox title="A note on the number 228">
              The score comes from a ratio formula designed for children, applied to a test
              from 1937. Most psychometricians consider it incomparable to modern deviation
              IQ. The same score, converted to adult norms, would fall closer to 132. Vos
              Savant herself has said that attempts to measure intelligence are
              &ldquo;useless.&rdquo; The 228 made headlines. The caveat did not.
            </NoteBox>

            <p className="text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The Guinness category was retired in 1990 — they concluded IQ tests were too
              unreliable to designate a single record holder. By then, vos Savant had
              already established her column. &ldquo;Ask Marilyn&rdquo; launched in 1986;
              each week, readers submitted logic puzzles, mathematical problems, and
              philosophical dilemmas, and she answered them. The column would run until
              2022, for 36 years.
            </p>
          </div>

          {/* ── MARILYN PORTRAIT ── */}
          <ArticleFigure
            src={IMG.marilyn}
            alt="Marilyn vos Savant portrait"
            caption="Marilyn vos Savant, author of Parade&apos;s &ldquo;Ask Marilyn&rdquo; column from 1986 to 2022."
            pastel="peach"
            aspect="natural"
            noPad
            bleed
          />

          {/* ── A PROBLEM WITH THREE DOORS ── */}
          <div className="mt-12">
            <SectionHead title="A Problem with Three Doors" />

            <p className="text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The puzzle Whitaker submitted had appeared before, in various forms. Joseph
              Bertrand&apos;s box paradox dates to 1889. Martin Gardner described a
              structurally identical scenario in <em>Scientific American</em> in 1959,
              noting presciently that &ldquo;in no other branch of mathematics is it so
              easy for experts to blunder as in probability theory.&rdquo; In 1975, UC
              Berkeley statistician Steve Selvin formalized the three-door version in a
              letter to <em>The American Statistician</em> and called it the Monty Hall
              Problem, after the host of <em>Let&apos;s Make a Deal.</em> Nobody argued
              with Selvin.
            </p>

            <p className="mt-5 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The setup: three doors. Behind one is a car. Behind the other two are goats.
              You choose a door — say Door 1. The host, who knows what is behind every door,
              opens one of the other doors to reveal a goat — say Door 3. He then asks:
              would you like to switch to Door 2, or keep Door 1?
            </p>

            <DoorDiagram />

            <p className="text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The intuitive answer is that two doors remain, so the odds are 50–50. This is
              wrong. Vos Savant&apos;s answer was precise:
            </p>

            <PullQuote
              quote="Yes; you should switch. The first door has a 1/3 chance of winning, but the second door has a 2/3 chance."
              attr="Marilyn vos Savant, Parade, September 9, 1990"
            />

            <p className="text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The key is what the host&apos;s action tells you. When you first picked Door 1,
              the probability that the car was behind it was 1/3. That probability does not
              change simply because the host opens another door. The remaining 2/3
              probability — the probability that the car was behind one of the two doors you
              didn&apos;t pick — now collapses entirely onto Door 2, because the host has
              eliminated Door 3. Switching wins 2 out of every 3 games. Staying wins only
              1 out of 3.
            </p>
          </div>

          {/* ── MONTY HALL IMAGE ── */}
          <ArticleFigure
            src={IMG.montyHall}
            alt="Monty Hall hosting Let's Make a Deal in 1963"
            caption="Monty Hall hosting Let's Make a Deal in 1963 — the show that gave the probability puzzle its name."
            pastel="sky"
            aspect="natural"
            noPad
            bleed
          />

          {/* ── ALL POSSIBLE SCENARIOS ── */}
          <div className="mt-12">
            <SectionHead title="All Possible Scenarios" />

            <p className="text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              One clean way to see it: enumerate every possible game where you always switch.
              There are nine equally likely starting configurations.
            </p>

            <ScenariosTable />

            <p className="text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              Six wins. Three losses. Switching is correct two-thirds of the time. The math
              is not in dispute. It never was, really — the dispute was about whether vos
              Savant, specifically, was allowed to be right. It is a pattern familiar from
              science education research:{" "}
              <ArticleProseLink href="/articles/feynman-technique">
                the gap between knowing the name of something and actually understanding it
              </ArticleProseLink>{" "}
              is where most confident errors live.
            </p>
          </div>

          <Divider />

          {/* ── THE LETTERS ── */}
          <div className="mt-2">
            <SectionHead title="The Letters" />

            <p className="text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              About 10,000 of them arrived. Nearly 1,000 were signed by people with PhDs.
              The majority — roughly 92 percent — told her she was wrong. Many did not stop
              at disagreement.
            </p>

            <LetterBlock
              quote="You blew it, and you blew it big! Since you seem to have difficulty grasping the basic principle at work here, I'll explain. After the host reveals a goat, you now have a one-in-two chance of being correct. Whether you change your selection or not, the odds are the same. There is enough mathematical illiteracy in this country, and we don't need the world's highest IQ propagating more. Shame!"
              sig="Scott Smith, Ph.D. — University of Florida"
            />

            <LetterBlock
              quote="May I suggest that you obtain and refer to a standard textbook on probability before you try to answer a question of this type again?"
              sig="Charles Reid, Ph.D. — University of Florida"
            />

            <LetterBlock
              quote="You are utterly incorrect about the game show question, and I hope this controversy will call some public attention to the serious national crisis in mathematical education. How many irate mathematicians are needed to get you to change your mind?"
              sig="E. Ray Bobo, Ph.D. — Georgetown University"
            />

            <LetterBlock
              quote="You are the goat!"
              sig="Glenn Calkins — Western State College"
            />

            <LetterBlock
              quote="Maybe women look at math problems differently than men."
              sig="Don Edwards — Sunriver, Oregon"
            />

            <StatPanel />

            <p className="text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              She was forced to write three follow-up columns. Even after doing so — clearly,
              with worked examples — some correspondents refused to update. One man wrote
              back nearly a year later: &ldquo;I still think you&apos;re wrong. There is
              such a thing as female logic.&rdquo;
            </p>

            <p className="mt-5 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              None of the men who had written equally confident, equally wrong corrections
              to Steve Selvin in 1975 had received a single hostile reply. This fact was
              not lost on anyone paying attention.
            </p>
          </div>

          {/* ── SECOND ASK MARILYN IMAGE ── */}
          <ArticleFigure
            src={IMG.hero2}
            alt="Ask Marilyn column clipping showing the Monty Hall question"
            caption="The September 9, 1990 column — and the three follow-ups vos Savant was forced to write in response to the backlash."
            pastel="rose"
            aspect="natural"
            noPad
            bleed
          />

          {/* ── THE EXPERIMENT ── */}
          <div className="mt-12">
            <SectionHead title="The Experiment" />

            <p className="text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              Vos Savant&apos;s solution was ultimately proved the only way it could be
              proved to people unwilling to follow a mathematical argument: she asked them
              to run the experiment. She invited schoolteachers to conduct it with their
              classes. Students folded paper, flipped coins, simulated the game hundreds
              of times. The results were, as she put it, close to unanimous.
            </p>

            <p className="mt-5 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              Over the following two years, acceptance shifted. The percentage of general
              readers agreeing with her rose from 8 to 56. Among academics, it moved from
              35 to 71. Computer simulations confirmed the result. The problem was
              eventually renamed, informally, &ldquo;Marilyn and the Goats.&rdquo;
            </p>

            <p className="mt-5 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              Among those who changed their minds was Robert Sachs, a math professor at
              George Mason University, who had written to tell her she &ldquo;blew
              it&rdquo; and offered to help her understand. He later sent a second letter.
              &ldquo;After removing my foot from my mouth I&apos;m now eating humble
              pie,&rdquo; he wrote. &ldquo;I vowed as penance to answer all the people
              who wrote to castigate me. It&apos;s been an intense professional
              embarrassment.&rdquo;
            </p>
          </div>

          <Divider />

          {/* ── WHY IS THIS PROBLEM HARD ── */}
          <div className="mt-2">
            <SectionHead title="Why Is This Problem Hard?" />

            <p className="text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The standard explanation is that the host&apos;s action is not random. He
              always opens a losing door — he never reveals the car. This means his choice
              carries information. When the host opens Door 3, he is telling you, in
              effect, that if the car is behind Door 2, he was forced to open Door 3. The
              non-randomness of his action is what shifts the probability.
            </p>

            <p className="mt-5 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              A useful restatement: imagine 100 doors. You pick Door 1. The host opens 98
              of the other 99, revealing goats behind all of them, leaving only your door
              and Door 100 closed. Would you switch? The probability that the car is behind
              Door 100 is now 99/100. The principle is identical in the three-door case —
              scaled down to numbers that, unfortunately, allow the brain to tell itself a
              comfortable story about 50–50. This is comparable to how our visual intuition
              fails with{" "}
              <ArticleProseLink href="/articles/billingsley-euclid">
                Euclid&apos;s proof that prime numbers never run out
              </ArticleProseLink>
              {" "}— the conclusion seems impossible until you follow the logic step by step.
            </p>

            <p className="mt-5 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              Stanford statistician Persi Diaconis put it plainly: &ldquo;Our brains are
              just not wired to do probability problems very well, so I&apos;m not
              surprised there were mistakes.&rdquo; Vos Savant herself had anticipated
              this in a follow-up column — the strict answer requires knowing that the host
              always opens a losing door <em>on purpose.</em>{" "}
              &ldquo;Anything else,&rdquo; she wrote, &ldquo;is a different question.&rdquo;
            </p>

            <p className="mt-5 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The problem also illustrates something that recurs across mathematics
              education: conditional probability is genuinely unintuitive, and even{" "}
              <ArticleProseLink href="/articles/sudoku-mathematics">
                puzzles that look simple on the surface
              </ArticleProseLink>{" "}
              conceal layers of combinatorial structure that resist casual reasoning.
            </p>
          </div>

          {/* ── VIDEO ── */}
          <div className="mt-12">
            <SectionHead title="Watch the Story" />
            <VideoEmbed />
          </div>

          <Divider />

          {/* ── AFTER THE GOATS ── */}
          <div className="mt-2">
            <SectionHead title="After the Goats" />

            <p className="text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              Vos Savant continued writing &ldquo;Ask Marilyn&rdquo; until 2022. She
              returned to probability and logic repeatedly over the decades, and the column
              generated other famous controversies — including a structurally similar
              problem about the sex of puppies, and a disputed 1993 book questioning
              Andrew Wiles&apos;s proof of Fermat&apos;s Last Theorem, for which she later
              issued a retraction.
            </p>

            <p className="mt-5 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The Monty Hall episode remains the one she is best known for, partly because
              the mathematics is genuinely counterintuitive, and partly because the
              response revealed something uncomfortable about how expertise and gender
              interacted in 1990 — and, arguably, continue to interact. The problem was
              not new. The answer was not new. The person who wrote it down was a woman,
              and that, apparently, was new enough.
            </p>

            <p className="mt-5 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The car was behind Door 2. It always was.
            </p>
          </div>

          {/* ── FOOTNOTE ── */}
          <footer className="mt-14 border-t border-[var(--line-soft)] pt-6 font-serif text-[0.82rem] italic leading-relaxed text-[var(--ink-muted)]">
            Sources: Marilyn vos Savant, <em>Parade</em>, September 9, 1990 and
            subsequent columns; Zachary Crockett, &ldquo;The Time Everyone
            &lsquo;Corrected&rsquo; the World&apos;s Smartest Woman,&rdquo;
            Priceonomics, 2015; Steve Selvin, <em>The American Statistician</em>,
            1975; <em>New York Times</em>, July 21, 1991.
          </footer>
        </article>
      </div>
    </UnitCircleSectionReveal>
  );
}
