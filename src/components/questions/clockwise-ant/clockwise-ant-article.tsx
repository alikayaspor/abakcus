import type { ReactNode } from "react";
import { ArticleProseLink } from "@/components/articles/article-prose-link";
import { UnitCircleSectionReveal } from "@/components/articles/unit-circle/unit-circle-section-reveal";
import { ClockwiseAntClocks } from "./clockwise-ant-clocks";
import { ClockwiseAntReveal } from "./clockwise-ant-reveal";

function SectionHead({ num, title }: { num: string; title: string }) {
  return (
    <div className="mb-6 flex items-baseline gap-4 border-b border-[var(--line)] pb-3">
      <span className="shrink-0 font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
        {num}
      </span>
      <h2 className="font-serif text-[1.05rem] font-medium leading-snug tracking-[0.01em] text-[var(--ink)] sm:text-[1.15rem]">
        {title}
      </h2>
    </div>
  );
}

function AsideNote({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="my-6 border-l-[3px] border-[var(--pastel-lime)] bg-[color-mix(in_srgb,var(--pastel-peach)_28%,white)] px-4 py-3 font-mono text-[0.75rem] leading-relaxed text-[var(--ink-muted)]">
      <strong className="text-[var(--ink)]">{title}</strong>
      <span className="mt-1 block font-serif text-[0.88rem] italic text-[var(--ink-muted)]">
        {children}
      </span>
    </div>
  );
}

export function ClockwiseAntArticle() {
  return (
    <UnitCircleSectionReveal>
      <div className="unit-circle-article text-[var(--ink)]">
        <div className="mx-auto max-w-[780px] px-[var(--page-pad)] pb-6 pt-8 text-center sm:pb-8 sm:pt-10">
          <p className="mb-5 font-sans text-[0.62rem] uppercase leading-relaxed tracking-[0.24em] text-[var(--ink-muted)] sm:text-[0.65rem]">
            Questions · Puzzle · Games Magazine, 1992
          </p>
          <h1 className="font-serif text-[clamp(2rem,6vw,3rem)] font-normal leading-[1.1] tracking-[-0.02em] text-[var(--ink)]">
            The clockwise ant
          </h1>
          <p className="mx-auto mt-6 max-w-[34rem] border-l-2 border-[var(--ink)] pl-5 text-left text-lg italic leading-relaxed text-[var(--ink-muted)] sm:text-xl">
            An ant climbs onto a clock face. The minute hand catches her twice.
            Between the two encounters, exactly 45 minutes pass. How long was she
            on the clock in total?
          </p>
          <div className="mx-auto mt-7 h-px w-14 bg-[var(--line)] sm:mt-8" aria-hidden />
        </div>

        <article className="mx-auto max-w-[min(48rem,100%)] px-[var(--page-pad)] pb-20 pt-2 sm:pb-28">
          <section data-uc-section className="mt-2">
            <SectionHead num="01" title="The problem" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              This puzzle comes from Argentinian puzzlist Jaime Poniachik,
              published in the February 1992 issue of <em>Games</em> magazine. It
              is short enough to state in three sentences, and just slippery enough
              that most people&apos;s first instinct leads them somewhere wrong.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              An ant crawls onto a clock face at the 6 mark, just as the minute
              hand is passing 12. She begins crawling counterclockwise around the
              face at a uniform speed. When the minute hand catches up with her,
              she reverses and crawls clockwise — same speed, opposite direction.
              Forty-five minutes after that first encounter, the minute hand
              catches her a second time, and she leaves. How much total time did
              she spend on the clock face?
            </p>
            <blockquote className="my-8 border-l-2 border-[var(--ink)] py-1 pl-5 font-serif text-[1.08rem] italic leading-snug text-[var(--ink-muted)] sm:text-[1.15rem]">
              The ant is faster than the minute hand. She laps it going one way,
              then gets caught coming back. The question is: how long did she
              travel before the first meeting?
            </blockquote>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead num="02" title="What&apos;s actually happening" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The key insight that the puzzle deliberately obscures: the ant is
              faster than the minute hand. She doesn&apos;t wait to be caught —
              she runs counterclockwise and the minute hand eventually catches up
              to her from behind. Then she turns and runs clockwise, and the hand
              catches her again 45 minutes later.
            </p>

            <ClockwiseAntClocks />

            <AsideNote title="The misdirection">
              The puzzle&apos;s original wording implied the ant was slower than
              the minute hand — that the hand &quot;catches&quot; her while she
              crawls away. In fact the ant is faster. She crawls counterclockwise
              and the hand catches up from behind because she has lapped it and is
              now approaching from the other side. The answer (54 minutes) is the
              same either way, but the mental picture changes completely.
            </AsideNote>
          </section>

          <section data-uc-section className="mt-14" id="sorular">
            <SectionHead num="03" title="Sorular" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Çözümü açmadan önce kısa bir durak: aşağıdaki sorular, bulmacanın neyi
              sorduğunu ve hangi bilinmeyenlerin önemli olduğunu netleştirir.
            </p>
            <ol className="mt-6 list-none space-y-4 rounded-[var(--radius-card)] border border-[var(--line-soft)] bg-[color-mix(in_srgb,var(--pastel-lavender)_22%,white)] p-5 sm:p-6">
              {[
                "Between the two encounters, how many minute marks does the minute hand travel? What does that tell you about the time elapsed?",
                "In that same interval, how many minute marks does the ant cover if she is moving clockwise and the hand catches her again? (Think in full laps plus remainder.)",
                "From the start until the first meeting, the ant starts at the 6 and the hand at 12. How many minute marks separate them along the direction the ant crawls first?",
                "Once you have a speed ratio between ant and hand, what single equation fixes the unknown time to the first encounter?",
              ].map((text, i) => (
                <li key={i} className="flex gap-3 text-[0.95rem] leading-relaxed text-[var(--ink)] sm:text-[1rem]">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded border border-[var(--line)] bg-white/80 font-sans text-[0.58rem] font-medium text-[var(--ink-muted)]">
                    {i + 1}
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ol>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead num="04" title="The solution" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Take a moment with it before reading on. The puzzle has one clean
              trick at its center, and it clicks satisfyingly when found. The key
              is to think about the two phases of the ant&apos;s journey in terms
              of minute marks covered — not angles or distances.
            </p>

            <ClockwiseAntReveal>
              <div className="space-y-6">
                <div className="border-b border-[var(--line)] pb-6">
                  <p className="font-sans text-[0.56rem] uppercase tracking-[0.1em] text-[var(--ink-muted)]">
                    Step 1 — Find the speed ratio
                  </p>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--ink-muted)] sm:text-base">
                    Between the two encounters, the minute hand traveled 45 minute
                    marks. In that same time, the ant traveled one full
                    circumference (60 marks) <em>plus</em> 45 marks — because she
                    was going clockwise and the hand caught her from behind after
                    lapping her.
                  </p>
                  <p className="mt-3 border-l-2 border-[var(--line)] pl-4 font-serif italic leading-relaxed text-[var(--ink)]">
                    Ant covered: 60 + 45 = 105 minute marks
                    <br />
                    Hand covered: 45 minute marks
                    <br />
                    Speed ratio = 45 / 105 = <strong>3 / 7</strong>
                  </p>
                </div>

                <div className="border-b border-[var(--line)] pb-6">
                  <p className="font-sans text-[0.56rem] uppercase tracking-[0.1em] text-[var(--ink-muted)]">
                    Step 2 — Solve for the first phase
                  </p>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--ink-muted)] sm:text-base">
                    Let <em>x</em> = minutes elapsed before the first encounter. In
                    those <em>x</em> minutes, the minute hand advanced <em>x</em>{" "}
                    minute marks from 12. The ant started at 6 (= 30 marks from 12)
                    and crawled counterclockwise, so she covered (30 − <em>x</em>)
                    marks to reach the same point as the hand.
                  </p>
                  <p className="mt-3 border-l-2 border-[var(--line)] pl-4 font-serif italic leading-relaxed text-[var(--ink)]">
                    Speed ratio: x / (30 − x) = 3 / 7
                    <br />
                    7x = 3(30 − x) → 10x = 90 → <strong>x = 9 minutes</strong>
                  </p>
                </div>

                <div className="border-b border-[var(--line)] pb-6">
                  <p className="font-sans text-[0.56rem] uppercase tracking-[0.1em] text-[var(--ink-muted)]">
                    Step 3 — Add it up
                  </p>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-[var(--ink-muted)] sm:text-base">
                    The ant arrived at t = 0 and departed at t = 9 + 45. Total time
                    on the clock face:
                  </p>
                  <p className="mt-3 border-l-2 border-[var(--line)] pl-4 font-serif italic leading-relaxed text-[var(--ink)]">
                    9 + 45 = <strong>54 minutes</strong>
                  </p>
                </div>

                <div className="flex flex-col gap-3 rounded-xl border border-[var(--line-soft)] bg-[color-mix(in_srgb,var(--pastel-sky)_32%,white)] p-4 sm:flex-row sm:items-baseline sm:gap-5 sm:p-5">
                  <span className="shrink-0 font-sans text-[0.56rem] uppercase tracking-[0.12em] text-[var(--ink-muted)]">
                    Answer
                  </span>
                  <p className="font-serif text-[1.05rem] leading-relaxed text-[var(--ink)] sm:text-[1.1rem]">
                    The ant spent <strong>54 minutes</strong> on the clock face.
                    The first encounter happened 9 minutes in; the second, 45
                    minutes after that.
                  </p>
                </div>
              </div>
            </ClockwiseAntReveal>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead num="05" title="Why the trick works" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The elegant move in this puzzle is measuring everything in minute
              marks rather than time. The clock face has 60 marks. The minute hand
              travels exactly one mark per minute. The ant&apos;s speed in marks
              per minute is unknown — that&apos;s what we need — but the ratio of
              speeds is accessible from the second phase of the journey, where we
              know both distances.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Between the two encounters, the hand moved 45 marks and the ant
              moved 105 marks. This 3:7 ratio is then imported into the first
              phase, where the ant and hand converge from opposite sides of a
              30-mark gap (from 12 to 6 going the short way clockwise). The ratio
              constrains how far each must have traveled to meet, and the equation
              resolves to x = 9.
            </p>
            <blockquote className="my-8 border-l-2 border-[var(--ink)] py-1 pl-5 font-serif text-[1.08rem] italic leading-snug text-[var(--ink-muted)] sm:text-[1.15rem]">
              The puzzle is a system of two unknowns with two constraints. The
              second phase gives you the ratio. The first phase gives you the sum.
              From those two facts, everything follows.
            </blockquote>
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Poniachik published this in 1992, and it has circulated steadily in
              puzzle collections since — partly because the answer (54 minutes) is
              specific enough to feel like a real answer, and partly because the
              counterintuitive speed relationship (the ant is faster, not slower)
              gives people something to argue about. The puzzle earns its place in
              the canon.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              If you&apos;re in the mood for the opposite problem — a grid that
              punishes patience in weeks instead of minutes — there&apos;s{" "}
              <ArticleProseLink href="/articles/inkala-sudoku">
                Arto Inkala&apos;s hardest Sudoku
              </ArticleProseLink>
              , where the difficulty is all in the empty cells.
            </p>
          </section>

          <footer className="mt-16 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--line)] pt-8 font-sans text-[0.58rem] uppercase tracking-[0.1em] text-[var(--ink-muted)]">
            <span>Abakcus · Questions</span>
            <span>Jaime Poniachik · Games Magazine · 1992</span>
          </footer>
        </article>
      </div>
    </UnitCircleSectionReveal>
  );
}
