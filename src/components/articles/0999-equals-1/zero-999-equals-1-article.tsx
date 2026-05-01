import type { ReactNode } from "react";
import { ArticleProseLink } from "@/components/articles/article-prose-link";

/* ── step colors: each step gets its own pastel accent ── */
const STEP_COLORS = [
  { bg: "#EDE6D8", border: "#c4a06a", chip: "#7a5a2a" },   // 01 peach/warm
  { bg: "#D4E0EC", border: "#6a9abf", chip: "#2a5a7a" },   // 02 sky/blue
  { bg: "#D8E8DC", border: "#5a9a6a", chip: "#2a5a3a" },   // 03 lime/green
  { bg: "#E8D8E0", border: "#b87090", chip: "#7a2a4a" },   // 04 rose/pink
  { bg: "#E0E0F0", border: "#8880cc", chip: "#3a3080" },   // 05 lavender
] as const;

/* ── STEP BLOCK ── */
function StepBlock({
  num,
  label,
  children,
}: {
  num: number;
  label: string;
  children: ReactNode;
}) {
  const c = STEP_COLORS[(num - 1) % STEP_COLORS.length];
  return (
    <div
      className="my-8 overflow-hidden rounded-[var(--radius-card)] shadow-sm"
      style={{ backgroundColor: c.bg, borderLeft: `4px solid ${c.border}` }}
    >
      <div className="flex items-center gap-3 px-5 pt-5 pb-3">
        <span
          className="flex h-6 min-w-[1.5rem] items-center justify-center rounded px-2 font-mono text-[0.58rem] font-bold uppercase tracking-[0.1em] text-white"
          style={{ backgroundColor: c.chip }}
        >
          {String(num).padStart(2, "0")}
        </span>
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em]" style={{ color: c.chip }}>
          {label}
        </span>
      </div>
      <div
        className="mx-5 mb-5 rounded-lg px-5 py-4 font-mono text-[0.92rem] leading-[1.9]"
        style={{ backgroundColor: "rgba(255,255,255,0.55)", color: "#1a1814" }}
      >
        {children}
      </div>
    </div>
  );
}

/* ── ANNOTATION ── */
function Annotation({ children }: { children: ReactNode }) {
  return (
    <p className="mt-3 border-t border-black/10 pt-3 font-serif text-[0.8rem] italic leading-relaxed text-[var(--ink-muted)]">
      {children}
    </p>
  );
}

/* ── ASIDE NOTE ── */
function AsideNote({ label, children }: { label: string; children: ReactNode }) {
  return (
    <aside className="my-8 overflow-hidden rounded-r-xl border-l-[3px] border-[#6a9abf] bg-[color-mix(in_srgb,#D4E0EC_40%,white)] px-5 py-5 sm:px-6">
      <p className="mb-3 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-[#2a5a7a]">
        {label}
      </p>
      <div className="space-y-3 font-serif text-[0.93rem] leading-relaxed text-[var(--ink)]">
        {children}
      </div>
    </aside>
  );
}

/* ── RESULT BOX ── */
function ResultBox() {
  return (
    <div
      className="my-12 flex flex-col items-center gap-3 overflow-hidden rounded-[var(--radius-card)] px-6 py-10 shadow-sm"
      style={{ background: "linear-gradient(135deg, #E8D8E0 0%, #D4E0EC 100%)" }}
    >
      <p className="font-mono text-[clamp(1.8rem,7vw,2.8rem)] font-bold tracking-tight text-[var(--ink)]">
        0.999… = 1
      </p>
      <p className="font-serif text-[0.9rem] italic text-[var(--ink-muted)]">
        Not approximately. Exactly.
      </p>
      <div className="mt-2 h-px w-16 bg-[var(--line)]" />
      <p className="font-mono text-[0.7rem] tracking-[0.14em] text-[var(--ink-muted)]">
        ■&nbsp;&nbsp;Q.E.D.
      </p>
    </div>
  );
}

/* ── COMIC PANEL ── */
function ComicPanel() {
  const panels = [
    { speaker: "0.999…", line: "Oh god, it never ends…", bg: "#EDE6D8", border: "#c4a06a", chip: "#7a5a2a" },
    { speaker: "1", line: "Take it easy, bro. I got you.", bg: "#D8E8DC", border: "#5a9a6a", chip: "#2a5a3a" },
  ];
  return (
    <div className="my-10 grid grid-cols-2 gap-4">
      {panels.map(({ speaker, line, bg, border, chip }) => (
        <div
          key={speaker}
          className="rounded-[var(--radius-card)] px-5 py-5 shadow-sm"
          style={{ backgroundColor: bg, borderLeft: `3px solid ${border}` }}
        >
          <p className="mb-2 font-mono text-[0.55rem] uppercase tracking-[0.12em]" style={{ color: chip }}>
            {speaker}
          </p>
          <p className="font-serif text-[0.9rem] italic leading-relaxed text-[var(--ink)]">
            &ldquo;{line}&rdquo;
          </p>
        </div>
      ))}
    </div>
  );
}

/* ── MAIN EXPORT ── */
export function Zero999Equals1Article() {
  return (
    <article className="mx-auto max-w-[680px] px-[var(--page-pad)] py-16 text-[var(--ink)]">

      {/* ── HEADER ── */}
      <header className="mb-12 border-b border-[var(--line)] pb-10">
        <p className="mb-5 font-sans text-[0.65rem] uppercase leading-relaxed tracking-[0.18em] text-[var(--ink-muted)]">
          Mathematics · Proof · Real Analysis
        </p>
        <h1 className="font-serif text-[clamp(2rem,5vw,3rem)] font-normal leading-[1.2] text-[var(--ink)]">
          The Proof That 0.999… Is{" "}
          <em className="italic">Exactly</em> Equal to 1
        </h1>
        <p className="mt-7 border-l-[1.5px] border-[var(--line-soft)] pl-6 font-serif text-[1rem] italic leading-[1.85] text-[var(--ink-muted)]">
          It looks strange. It feels wrong. But 0.999… is not &ldquo;almost 1&rdquo; or
          &ldquo;approaching 1&rdquo; — it is exactly, precisely, completely 1. Here is the
          elegant geometric series proof that settles the matter.
        </p>
      </header>

      {/* ── OPENING PROSE ── */}
      <section className="mb-10 space-y-5 font-serif text-[0.95rem] leading-[1.9] text-[var(--ink)]">
        <p>
          Few mathematical facts produce as much discomfort as this one: the decimal 0.999…, with
          its infinite string of nines, is not a different number from 1. They are the same number
          — two representations of a single value. The discomfort usually comes from a subtle
          confusion between a number and its decimal expansion. 0.999… and 1 are no more
          &ldquo;different numbers&rdquo; than 1/2 and 2/4 are.
        </p>
        <p>
          The clearest way to see why is through the theory of geometric series. The argument takes
          five steps and requires nothing beyond high school algebra — it has something in common
          with the spirit of{" "}
          <ArticleProseLink href="/articles/sqrt2-irrational" className="article-euclid-link">
            the proof that √2 is irrational
          </ArticleProseLink>
          : a simple setup, a clean chain of logic, and a conclusion that feels impossible until
          it is obvious.
        </p>
      </section>

      {/* ── DIVIDER ── */}
      <div className="my-10 flex items-center gap-4">
        <span className="h-px flex-1 bg-[var(--line-soft)]" />
        <span className="font-serif text-lg text-[var(--ink-muted)]">§</span>
        <span className="h-px flex-1 bg-[var(--line-soft)]" />
      </div>

      {/* ── STEPS ── */}
      <StepBlock num={1} label="Write it as a sum">
        <p>0.999… = 0.9 + 0.09 + 0.009 + 0.0009 + …</p>
        <Annotation>Each term is one digit further to the right of the decimal point.</Annotation>
      </StepBlock>

      <StepBlock num={2} label="Express as fractions">
        <p>= 9/10 + 9/100 + 9/1000 + 9/10000 + …</p>
        <Annotation>
          The numerator is always 9; the denominator runs through powers of 10.
        </Annotation>
      </StepBlock>

      <StepBlock num={3} label="Factor out the common term">
        <p>= (9/10) · ( 1 + 1/10 + (1/10)² + (1/10)³ + … )</p>
        <Annotation>
          The expression in parentheses is a geometric series with first term 1 and ratio
          r&nbsp;=&nbsp;1/10.
        </Annotation>
      </StepBlock>

      <AsideNote label="Geometric Series">
        <p>
          A geometric series has the form a + ar + ar² + ar³ + … where each term is a fixed
          multiple r of the previous one. When |r|&nbsp;&lt;&nbsp;1, the series converges to a
          finite value: the sum equals <strong>1 / (1&nbsp;−&nbsp;r)</strong>.
        </p>
        <p>
          Here r&nbsp;=&nbsp;1/10, so the inner series sums to 1/(1&nbsp;−&nbsp;1/10)&nbsp;=
          &nbsp;10/9. This convergence is exactly what{" "}
          <ArticleProseLink href="/articles/billingsley-euclid" className="article-euclid-link">
            Euclid&rsquo;s methods for infinite quantities
          </ArticleProseLink>{" "}
          anticipated long before the notation existed to write it this cleanly.
        </p>
      </AsideNote>

      <StepBlock num={4} label="Apply the formula">
        <p>= (9/10) · ( 1 / (1 − 1/10) )</p>
        <p>= (9/10) · ( 1 / (9/10) )</p>
        <p>= (9/10) · (10/9)</p>
        <Annotation>Substituting r&nbsp;=&nbsp;1/10 into the geometric series formula.</Annotation>
      </StepBlock>

      <StepBlock num={5} label="Simplify">
        <p>= 90/90 = 1</p>
        <Annotation>Numerator and denominator cancel completely.</Annotation>
      </StepBlock>

      {/* ── RESULT ── */}
      <ResultBox />

      {/* ── WHY DOES THIS FEEL WRONG ── */}
      <div className="mt-14 space-y-5 font-serif text-[0.95rem] leading-[1.9] text-[var(--ink)]">
        <h2 className="font-sans text-[0.65rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
          Why does this feel wrong?
        </h2>
        <p>
          Our intuition insists there must be a gap — some infinitely small distance between 0.999…
          and 1. But in the real number system, two numbers are equal if and only if their
          difference is zero. The difference between 0.999… and 1 is not an incredibly small
          number: it is precisely zero. There is no gap, because there is no room for one.
        </p>
        <p>
          This is the same friction you feel the first time you learn that{" "}
          <ArticleProseLink href="/articles/indiana-pi-bill" className="article-euclid-link">
            a legislature once tried to redefine π by law
          </ArticleProseLink>
          : the result of mathematics does not depend on whether it feels comfortable. The real
          number system is not obligated to match our intuitions about infinitely long decimals.
        </p>
        <p>
          The{" "}
          <ArticleProseLink href="/articles/feynman-technique" className="article-euclid-link">
            Feynman Technique
          </ArticleProseLink>{" "}
          is built around exactly this distinction: knowing the name of something is not the same
          as understanding it. Most people who object to 0.999…&nbsp;=&nbsp;1 know what decimals
          are. They have not yet understood what infinity does to them.
        </p>
      </div>

      {/* ── COMIC ── */}
      <ComicPanel />

    </article>
  );
}
