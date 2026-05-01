import { PASTEL, PASTEL_ORDER } from "@/data/pastel-palette";
import { UNIT_CIRCLE_DIAGRAMS } from "./unit-circle-diagrams-data";
import {
  UnitCircleTableStep1,
  UnitCircleTableStep2,
  UnitCircleTableStep3,
  UnitCircleTableStep4,
} from "./unit-circle-article-tables";
import { UnitCircleDiagram } from "./unit-circle-diagram";
import { UnitCircleSectionReveal } from "./unit-circle-section-reveal";

const D = UNIT_CIRCLE_DIAGRAMS;

/** Same order as Featured picks — one pastel per diagram “card” */
const diagramPastel = [
  "sky",
  "lime",
  "peach",
  "rose",
  "lavender",
  "lime",
] as const;

const tips = [
  {
    n: "01",
    title: "Draw it repeatedly",
    body: "Five minutes of sketching does more than an hour of staring at a chart.",
  },
  {
    n: "02",
    title: "Say it out loud",
    body: '"Sine goes up, cosine goes down." It sounds obvious. That\'s the point.',
  },
  {
    n: "03",
    title: "Use color",
    body: "Blue for sine, red for cosine. Mark positive regions green, negative red.",
  },
  {
    n: "04",
    title: "Practice with radians",
    body: "Once degrees feel natural, rewrite using π/6, π/4, π/3. Same structure, new notation.",
  },
  {
    n: "05",
    title: "Test yourself",
    body: "Cover the values and reconstruct from scratch. You'll surprise yourself quickly.",
  },
  {
    n: "06",
    title: "Connect to geometry",
    body: "Think of it as a compass: every point is a direction. Spatial intuition beats rote memorization.",
  },
];

export function UnitCircleArticle() {
  return (
    <UnitCircleSectionReveal>
      <div className="unit-circle-article text-[var(--ink)]">
        <div className="mx-auto max-w-[780px] px-[var(--page-pad)] pb-6 pt-8 text-center sm:pb-8 sm:pt-10">
          <p className="mb-5 font-sans text-[0.62rem] uppercase leading-relaxed tracking-[0.24em] text-[var(--ink-muted)] sm:text-[0.65rem]">
            Mathematics · Trigonometry · Geometry
          </p>
          <h1 className="font-serif text-[clamp(2rem,6vw,3.5rem)] font-bold leading-[1.08] tracking-tight text-[var(--ink)]">
            How to Memorize
            <br />
            the Unit Circle
            <br />
            <em className="not-italic text-[var(--ink-muted)]">Easily</em>
          </h1>
          <p className="mx-auto mt-5 max-w-[34rem] text-lg leading-relaxed text-[var(--ink-muted)] sm:mt-6 sm:text-xl">
            Not a chart to memorize — a pattern to understand. Once you see it, you never forget it.
          </p>
          <div className="mx-auto mt-7 h-px w-14 bg-[var(--line)] sm:mt-8" aria-hidden />
        </div>

        <article className="mx-auto max-w-[680px] px-[var(--page-pad)] pb-20 pt-2 sm:pb-28">
          <p className="intro-drop border-b border-[var(--line)] pb-8 text-lg leading-[1.82] text-[var(--ink)] sm:text-xl">
            If you&apos;ve ever sat in a trigonometry class and felt your brain go blank staring at the
            unit circle, you&apos;re not alone. Angles, coordinates, Greek letters — it looks designed
            to confuse. But here&apos;s the secret: the unit circle doesn&apos;t require brute-force
            memorization. Once you understand the pattern behind it, you can reconstruct the whole
            thing from scratch, anytime, anywhere.
          </p>

          <section data-uc-section className="mt-14">
            <span className="mb-2 block font-sans text-[0.72rem] uppercase tracking-[0.3em] text-[var(--ink-muted)]">
              The Core Idea
            </span>
            <h2 className="font-serif text-[1.65rem] font-bold leading-snug tracking-tight text-[var(--ink)] sm:text-[1.9rem]">
              What the Unit Circle Actually Is
            </h2>
            <p className="mt-4 text-base leading-[1.78] text-[var(--ink)] sm:text-[1.05rem]">
              The unit circle is a circle of radius 1, centered at the origin. Every point on it
              corresponds to an angle, and the coordinates of that point are exactly the cosine and sine
              of the angle — nothing more.
            </p>
            <p className="mt-4 text-base leading-[1.78] text-[var(--ink)] sm:text-[1.05rem]">
              Know the coordinates, you know everything: sine, cosine, and tangent (which is just sine
              divided by cosine).
            </p>
            <UnitCircleDiagram
              svg={D[0].svg}
              caption={D[0].caption}
              pastel={diagramPastel[0]}
            />
          </section>

          <section data-uc-section className="mt-16">
            <span className="mb-2 block font-sans text-[0.72rem] uppercase tracking-[0.3em] text-[var(--ink-muted)]">
              Step 1
            </span>
            <h2 className="font-serif text-[1.65rem] font-bold leading-snug tracking-tight text-[var(--ink)] sm:text-[1.9rem]">
              Draw the Framework
            </h2>
            <p className="mt-4 text-base leading-[1.78] text-[var(--ink)] sm:text-[1.05rem]">
              Start with a small table: two columns, five rows. Label the columns <em>sin</em> and{" "}
              <em>cos</em>. Write these five angles down the side:
            </p>
            <p className="mt-4 text-base font-semibold leading-relaxed text-[var(--ink)] sm:text-[1.05rem]">
              0° = 0 · 30° = π/6 · 45° = π/4 · 60° = π/3 · 90° = π/2
            </p>
            <p className="mt-4 text-base leading-[1.78] text-[var(--ink)] sm:text-[1.05rem]">
              These five angles unlock the entire circle. Everything else is derived from them.
            </p>
            <UnitCircleTableStep1 pastel={diagramPastel[1]} />
          </section>

          <section data-uc-section className="mt-16">
            <span className="mb-2 block font-sans text-[0.72rem] uppercase tracking-[0.3em] text-[var(--ink-muted)]">
              Step 2
            </span>
            <h2 className="font-serif text-[1.65rem] font-bold leading-snug tracking-tight text-[var(--ink)] sm:text-[1.9rem]">
              Write the Denominators: All 2s
            </h2>
            <p className="mt-4 text-base leading-[1.78] text-[var(--ink)] sm:text-[1.05rem]">
              In every single cell of both columns, write a denominator of <strong>2</strong>. Every
              sine and cosine value in the first quadrant has a denominator of 2. It&apos;s so simple
              you&apos;d never notice it just copying from a textbook.
            </p>
            <UnitCircleTableStep2 pastel={diagramPastel[2]} />
          </section>

          <section data-uc-section className="mt-16">
            <span className="mb-2 block font-sans text-[0.72rem] uppercase tracking-[0.3em] text-[var(--ink-muted)]">
              Step 3
            </span>
            <h2 className="font-serif text-[1.65rem] font-bold leading-snug tracking-tight text-[var(--ink)] sm:text-[1.9rem]">
              Add the Square Roots: Count Up, Count Down
            </h2>
            <p className="mt-4 text-base leading-[1.78] text-[var(--ink)] sm:text-[1.05rem]">
              Here is the elegant trick. In the{" "}
              <strong className="font-semibold text-[var(--uc-sin)]">sine column</strong>, count{" "}
              <em>up</em> from 0 to 4, one per row. In the{" "}
              <strong className="font-semibold text-[var(--uc-cos)]">cosine column</strong>, count{" "}
              <em>down</em> from 4 to 0. Place each number under a square root sign.
            </p>
            <blockquote className="my-8 border-l-[3px] border-[var(--line)] py-1 pl-6 font-serif text-lg italic leading-relaxed text-[var(--ink-muted)]">
              Sine climbs from zero to four. Cosine descends from four to zero. That&apos;s the whole
              pattern.
            </blockquote>
            <UnitCircleTableStep3 pastel={diagramPastel[3]} />
          </section>

          <section data-uc-section className="mt-16">
            <span className="mb-2 block font-sans text-[0.72rem] uppercase tracking-[0.3em] text-[var(--ink-muted)]">
              Step 4
            </span>
            <h2 className="font-serif text-[1.65rem] font-bold leading-snug tracking-tight text-[var(--ink)] sm:text-[1.9rem]">
              Simplify &amp; Read Off the Values
            </h2>
            <p className="mt-4 text-base leading-[1.78] text-[var(--ink)] sm:text-[1.05rem]">
              Some values simplify immediately: √0 = 0, √1 = 1, √4 = 2. The others — √2 and √3 —
              stay as they are. The complete first quadrant:
            </p>
            <UnitCircleTableStep4 pastel={diagramPastel[4]} />
            <p className="mt-6 text-base leading-[1.78] text-[var(--ink)] sm:text-[1.05rem]">
              Notice that the two columns are mirror images of each other — what sine does at 30°,
              cosine does at 60°. They are the same numbers, just swapped.
            </p>
          </section>

          <section data-uc-section className="mt-16">
            <span className="mb-2 block font-sans text-[0.72rem] uppercase tracking-[0.3em] text-[var(--ink-muted)]">
              Step 5
            </span>
            <h2 className="font-serif text-[1.65rem] font-bold leading-snug tracking-tight text-[var(--ink)] sm:text-[1.9rem]">
              Mirror to the Other Quadrants
            </h2>
            <p className="mt-4 text-base leading-[1.78] text-[var(--ink)] sm:text-[1.05rem]">
              The other three quadrants are reflections of the first, with sign changes only. The
              magnitudes stay identical — only the ± flips.
            </p>
            <UnitCircleDiagram
              svg={D[1].svg}
              caption={D[1].caption}
              pastel={diagramPastel[5]}
            />
            <p className="mt-6 text-base leading-[1.78] text-[var(--ink)] sm:text-[1.05rem]">
              For example: 150° is in Quadrant II, reference angle 30°. So sin 150° = +½ and cos 150° =
              −√3/2. You only changed the sign — the values came straight from your first-quadrant
              table.
            </p>
          </section>

          <section data-uc-section className="mt-16">
            <span className="mb-2 block font-sans text-[0.72rem] uppercase tracking-[0.3em] text-[var(--ink-muted)]">
              Why It Works
            </span>
            <h2 className="font-serif text-[1.65rem] font-bold leading-snug tracking-tight text-[var(--ink)] sm:text-[1.9rem]">
              Your Brain Loves Patterns
            </h2>
            <p className="mt-4 text-base leading-[1.78] text-[var(--ink)] sm:text-[1.05rem]">
              Random numbers are hard to hold. But patterns stick. Once you see that every sine and
              cosine in the first quadrant is simply a permutation of √0, √1, √2, √3, √4 — all
              divided by 2 — everything clicks into place.
            </p>
            <p className="mt-4 text-base leading-[1.78] text-[var(--ink)] sm:text-[1.05rem]">
              You&apos;re not memorizing the unit circle anymore. You&apos;re rebuilding it.
              That&apos;s a completely different cognitive task, and a much easier one.
            </p>
          </section>

          <section data-uc-section className="mt-16">
            <span className="mb-2 block font-sans text-[0.72rem] uppercase tracking-[0.3em] text-[var(--ink-muted)]">
              Practice
            </span>
            <h2 className="font-serif text-[1.65rem] font-bold leading-snug tracking-tight text-[var(--ink)] sm:text-[1.9rem]">
              Six Ways to Lock It In
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {tips.map((tip, i) => (
                <div
                  key={tip.n}
                  className="flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-black/5 p-5 shadow-[var(--shadow-soft)]"
                  style={{
                    backgroundColor: PASTEL[PASTEL_ORDER[i % PASTEL_ORDER.length]],
                  }}
                >
                  <div className="rounded-xl bg-white/50 p-4">
                    <span className="font-serif text-3xl font-bold leading-none text-[var(--ink-muted)]">
                      {tip.n}
                    </span>
                    <span className="mt-3 block font-serif text-sm font-bold text-[var(--ink)]">
                      {tip.title}
                    </span>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">{tip.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section
            data-uc-section
            className="mt-16 rounded-[var(--radius-card)] border border-black/5 px-6 py-10 text-[var(--ink)] sm:px-10 sm:py-12"
            style={{ backgroundColor: PASTEL.lavender }}
          >
            <h3 className="font-serif text-xs font-normal uppercase tracking-[0.18em] text-[var(--ink-muted)]">
              In Short
            </h3>
            <ul className="mt-6 space-y-3 font-serif text-[1.02rem] leading-snug">
              <li className="flex gap-3">
                <span className="mt-1 shrink-0 text-[var(--ink-muted)]" aria-hidden>
                  ◆
                </span>
                <span>All denominators are 2. Always.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 shrink-0 text-[var(--ink-muted)]" aria-hidden>
                  ◆
                </span>
                <span>Sine counts up: √0, √1, √2, √3, √4 — divided by 2.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 shrink-0 text-[var(--ink-muted)]" aria-hidden>
                  ◆
                </span>
                <span>Cosine counts down: √4, √3, √2, √1, √0 — divided by 2.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 shrink-0 text-[var(--ink-muted)]" aria-hidden>
                  ◆
                </span>
                <span>Other quadrants: same values, different signs.</span>
              </li>
            </ul>
          </section>

          <p className="mt-14 text-base leading-[1.78] text-[var(--ink)] sm:text-[1.05rem]">
            Once you see the pattern, trigonometry stops being a list of rules and starts being a
            language you understand. The unit circle is not a table to survive — it&apos;s a structure
            to admire.
          </p>
        </article>

        <footer className="border-t border-[var(--line-soft)] px-[var(--page-pad)] py-10 text-center font-sans text-sm tracking-[0.12em] text-[var(--ink-muted)]">
          Mathematics · Trigonometry · Geometry
        </footer>
      </div>
    </UnitCircleSectionReveal>
  );
}
