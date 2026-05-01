import type { ReactNode } from "react";
import Image from "next/image";
import { ArticleImageLightbox } from "@/components/articles/article-image-lightbox";
import { ArticleProseLink } from "@/components/articles/article-prose-link";
import { UnitCircleSectionReveal } from "@/components/articles/unit-circle/unit-circle-section-reveal";
import { zurichNotebookImages } from "@/data/zurich-notebook-images";
import { PASTEL, type PastelId } from "@/data/pastel-palette";

/** John D. Norton — Einstein’s Zurich Notebook (facsimile links & commentary) */
const SOURCE_NORTON_ZURICH =
  "https://sites.pitt.edu/~jdnorton/Goodies/Zurich_Notebook/#For_More";

function ZurichFigure({
  src,
  alt,
  caption,
  priority,
  pastel,
  className,
  naturalHeight,
}: {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  pastel: PastelId;
  className?: string;
  naturalHeight?: boolean;
}) {
  return (
    <figure
      className={`overflow-hidden rounded-[var(--radius-card)] p-3 shadow-[var(--shadow-card)] sm:p-4 ${className ?? "my-10"}`}
      style={{ backgroundColor: PASTEL[pastel] }}
    >
      <ArticleImageLightbox src={src} alt={alt} caption={caption}>
        {naturalHeight ? (
          <div className="w-full rounded-xl bg-white/55 p-1 sm:p-1.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              className="mx-auto block h-auto w-full max-w-full rounded-lg object-contain transition-transform duration-500 group-hover:scale-[1.01]"
              loading={priority ? "eager" : "lazy"}
              decoding="async"
              draggable={false}
            />
          </div>
        ) : (
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-white/55 sm:aspect-[3/2]">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width:768px) 100vw, min(680px, 90vw)"
              priority={priority}
            />
          </div>
        )}
      </ArticleImageLightbox>
      {caption ? (
        <figcaption className="mt-4 px-1 text-center font-serif text-sm italic leading-snug text-[var(--ink)]">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

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

function DeNote({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="my-6 border-l-[3px] border-[var(--line)] bg-[color-mix(in_srgb,var(--pastel-peach)_45%,white)] px-4 py-3 font-mono text-[0.75rem] leading-relaxed text-[var(--ink-muted)]">
      <strong className="text-[var(--ink)]">{title}</strong>
      <span className="mt-1 block font-serif text-[0.88rem] italic text-[var(--ink-muted)]">
        {children}
      </span>
    </div>
  );
}

function PageBlock({
  header,
  children,
}: {
  header: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-10 overflow-hidden rounded-sm border border-[var(--line)]">
      <div className="border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--pastel-peach)_35%,white)] px-5 py-2.5 font-sans text-[0.56rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
        {header}
      </div>
      <div className="bg-[color-mix(in_srgb,var(--pastel-peach)_22%,white)] px-5 py-4 text-[0.9rem] leading-[1.75] text-[var(--ink-muted)]">
        {children}
      </div>
    </div>
  );
}

function GeodesicCompare() {
  return (
    <div className="my-10 overflow-hidden border border-[var(--line)]">
      <div className="grid grid-cols-1 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--pastel-peach)_30%,white)] sm:grid-cols-2">
        <div className="border-b border-[var(--line)] px-4 py-2.5 font-sans text-[0.58rem] uppercase tracking-[0.12em] text-[var(--ink-muted)] sm:border-b-0 sm:border-r">
          Classical physics (this page)
        </div>
        <div className="px-4 py-2.5 font-sans text-[0.58rem] uppercase tracking-[0.12em] text-[var(--ink-muted)]">
          General relativity (the goal)
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="border-b border-[var(--line)] px-4 py-3.5 text-[0.9rem] leading-relaxed text-[var(--ink-muted)] sm:border-b-0 sm:border-r">
          A mass moves freely in 3D space, constrained to a 2D curved surface.
        </div>
        <div className="border-b border-[var(--line)] px-4 py-3.5 text-[0.9rem] leading-relaxed text-[var(--ink-muted)] sm:border-b-0">
          A mass moves freely in spacetime — it is in free fall, acted on by
          gravity through spacetime curvature.
        </div>
      </div>
      <div className="grid grid-cols-1 border-t border-[var(--line)] sm:grid-cols-2">
        <div className="border-b border-[var(--line)] px-4 py-3.5 text-[0.9rem] leading-relaxed text-[var(--ink-muted)] sm:border-b-0 sm:border-r">
          Its trajectory on the surface is a geodesic: the curve of shortest
          length.
        </div>
        <div className="px-4 py-3.5 text-[0.9rem] leading-relaxed text-[var(--ink-muted)]">
          Its trajectory through spacetime is a geodesic: the curve of extremal
          spacetime interval.
        </div>
      </div>
    </div>
  );
}

function IllusionParadoxSvg() {
  return (
    <div className="my-10 border border-[var(--line)] bg-[color-mix(in_srgb,var(--pastel-peach)_22%,white)] p-6 sm:p-7">
      <p className="mb-5 font-sans text-[0.56rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
        The 64=65 area paradox — where the unit hides
      </p>
      <svg
        className="h-auto w-full max-w-[620px]"
        viewBox="0 0 620 280"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <style type="text/css">{`
          .znb-il  { font-family: ui-monospace, monospace; fill: #8c8680; font-size: 10px; }
          .znb-ilb { font-family: Georgia, ui-serif, serif; fill: #16120c; font-size: 13px; font-style: italic; }
          .znb-iln { font-family: ui-monospace, monospace; fill: #45403a; font-size: 11px; font-weight: 400; }
        `}</style>
        <g transform="translate(20,20)">
          <rect
            width="160"
            height="160"
            fill="#e6e0d4"
            stroke="#c9c2b4"
            strokeWidth="0.8"
          />
          <line
            x1="20"
            y1="0"
            x2="20"
            y2="160"
            stroke="#c9c2b4"
            strokeWidth="0.3"
          />
          <line
            x1="40"
            y1="0"
            x2="40"
            y2="160"
            stroke="#c9c2b4"
            strokeWidth="0.3"
          />
          <line
            x1="60"
            y1="0"
            x2="60"
            y2="160"
            stroke="#c9c2b4"
            strokeWidth="0.3"
          />
          <line
            x1="80"
            y1="0"
            x2="80"
            y2="160"
            stroke="#c9c2b4"
            strokeWidth="0.3"
          />
          <line
            x1="100"
            y1="0"
            x2="100"
            y2="160"
            stroke="#c9c2b4"
            strokeWidth="0.3"
          />
          <line
            x1="120"
            y1="0"
            x2="120"
            y2="160"
            stroke="#c9c2b4"
            strokeWidth="0.3"
          />
          <line
            x1="140"
            y1="0"
            x2="140"
            y2="160"
            stroke="#c9c2b4"
            strokeWidth="0.3"
          />
          <line
            x1="0"
            y1="20"
            x2="160"
            y2="20"
            stroke="#c9c2b4"
            strokeWidth="0.3"
          />
          <line
            x1="0"
            y1="40"
            x2="160"
            y2="40"
            stroke="#c9c2b4"
            strokeWidth="0.3"
          />
          <line
            x1="0"
            y1="60"
            x2="160"
            y2="60"
            stroke="#c9c2b4"
            strokeWidth="0.3"
          />
          <line
            x1="0"
            y1="80"
            x2="160"
            y2="80"
            stroke="#c9c2b4"
            strokeWidth="0.3"
          />
          <line
            x1="0"
            y1="100"
            x2="160"
            y2="100"
            stroke="#c9c2b4"
            strokeWidth="0.3"
          />
          <line
            x1="0"
            y1="120"
            x2="160"
            y2="120"
            stroke="#c9c2b4"
            strokeWidth="0.3"
          />
          <line
            x1="0"
            y1="140"
            x2="160"
            y2="140"
            stroke="#c9c2b4"
            strokeWidth="0.3"
          />
          <line
            x1="0"
            y1="100"
            x2="60"
            y2="100"
            stroke="#16120c"
            strokeWidth="1.5"
          />
          <line
            x1="60"
            y1="100"
            x2="160"
            y2="0"
            stroke="#16120c"
            strokeWidth="1.5"
          />
          <line
            x1="0"
            y1="160"
            x2="100"
            y2="60"
            stroke="#16120c"
            strokeWidth="1.5"
          />
          <line
            x1="100"
            y1="60"
            x2="160"
            y2="60"
            stroke="#16120c"
            strokeWidth="1.5"
          />
          <text x="80" y="176" textAnchor="middle" className="znb-il">
            8
          </text>
          <text x="-12" y="84" textAnchor="middle" className="znb-il">
            8
          </text>
          <text x="80" y="190" textAnchor="middle" className="znb-iln">
            8 × 8 = 64
          </text>
        </g>
        <text x="204" y="135" className="znb-ilb" fontSize="20">
          →
        </text>
        <g transform="translate(228,65)">
          <rect
            width="260"
            height="100"
            fill="#e6e0d4"
            stroke="#c9c2b4"
            strokeWidth="0.8"
          />
          {[20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240].map(
            (x) => (
              <line
                key={`v-${x}`}
                x1={x}
                y1="0"
                x2={x}
                y2="100"
                stroke="#c9c2b4"
                strokeWidth="0.3"
              />
            ),
          )}
          {[20, 40, 60, 80].map((y) => (
            <line
              key={`h-${y}`}
              x1="0"
              y1={y}
              x2="260"
              y2={y}
              stroke="#c9c2b4"
              strokeWidth="0.3"
            />
          ))}
          <line
            x1="0"
            y1="38.5"
            x2="260"
            y2="41.5"
            stroke="#45403a"
            strokeWidth="1.2"
            strokeDasharray="5,3"
          />
          <text x="130" y="-8" textAnchor="middle" className="znb-il">
            13
          </text>
          <text x="274" y="54" textAnchor="start" className="znb-il">
            5
          </text>
          <text x="130" y="118" textAnchor="middle" className="znb-iln">
            13 × 5 = 65 (?)
          </text>
          <rect
            x="0"
            y="38.5"
            width="260"
            height="3"
            fill="#45403a"
            fillOpacity="0.12"
          />
          <text x="130" y="135" textAnchor="middle" className="znb-il">
            ↑ the hidden parallelogram: 1 unit of area
          </text>
        </g>
        <text x="310" y="230" textAnchor="middle" className="znb-il">
          The two diagonal slopes are 2/5 and 3/8.
        </text>
        <text x="310" y="244" textAnchor="middle" className="znb-il">
          They look equal. They are not. The gap along
        </text>
        <text x="310" y="258" textAnchor="middle" className="znb-il">
          the reassembly seam accounts for the extra unit.
        </text>
      </svg>
    </div>
  );
}

function AttemptsTimeline() {
  const item =
    "relative mb-7 pb-0 last:mb-0 before:absolute before:left-[-2.125rem] before:top-2 before:block before:h-2 before:w-2 before:rounded-full before:bg-[var(--ink)] before:content-['']";
  return (
    <ul className="relative my-10 list-none border-l border-[var(--line)] pl-8">
      <li className={item}>
        <span className="mb-1 block font-serif text-[0.92rem] font-medium text-[var(--ink)]">
          Attempt 1: the harmonic coordinate condition
        </span>
        <span className="text-[0.9rem] leading-relaxed text-[var(--ink-muted)]">
          The section heading says everything:{" "}
          <em>Nochmalige Berechnung des Ebenentensors</em> — &ldquo;Once again
          the computation of the surface tensor.&rdquo; Einstein applies what we
          now call the harmonic coordinate condition (Δφ = 0) to restrict the
          coordinate system to one where the Newtonian limit can be recovered.
          It works. He writes at the bottom of the page:{" "}
          <em>Resultat sicher.</em> — &ldquo;The result is certain.&rdquo; Then,
          on the very next page, examining static fields as a special case, he
          makes an assumption — that in the Newtonian-limit coordinates, only
          the g<sub>44</sub> component of the metric varies — that is simply
          wrong. The harmonic condition vanishes from the notebook and never
          returns.
        </span>
      </li>
      <li className={item}>
        <span className="mb-1 block font-serif text-[0.92rem] font-medium text-[var(--ink)]">
          Attempt 2: a reduced Ricci tensor
        </span>
        <span className="text-[0.9rem] leading-relaxed text-[var(--ink-muted)]">
          He writes down a reduced form of the Ricci tensor as a new
          &ldquo;presumed gravitation tensor&rdquo; with broad covariance,
          imposing a new coordinate condition to recover the Newtonian limit.
          This approach generates a dispute among historians: the majority view
          holds that Einstein inserted this condition as a new physical
          assumption, fatally restricting the theory&apos;s covariance; Norton
          holds a minority view that Einstein saw it as a free coordinate choice,
          then rejected it for other reasons. Whatever the correct
          interpretation, the proposal does not survive the page.
        </span>
      </li>
      <li className={item}>
        <span className="mb-1 block font-serif text-[0.92rem] font-medium text-[var(--ink)]">
          Attempt 3: coordinate restriction by tensor condition
        </span>
        <span className="text-[0.9rem] leading-relaxed text-[var(--ink-muted)]">
          Rather than stipulating a coordinate condition directly, Einstein asks
          that the coordinate restriction be expressed as a requirement that a
          certain quantity transform as a tensor. He can then show that the
          resulting expression has Newtonian form. This approach is ingenious. It
          also does not survive many pages.
        </span>
      </li>
    </ul>
  );
}

export function ZurichNotebookArticle() {
  return (
    <UnitCircleSectionReveal>
      <div className="unit-circle-article text-[var(--ink)]">
        <div className="mx-auto max-w-[780px] px-[var(--page-pad)] pb-6 pt-8 text-center sm:pb-8 sm:pt-10">
          <p className="mb-5 font-sans text-[0.62rem] uppercase leading-relaxed tracking-[0.24em] text-[var(--ink-muted)] sm:text-[0.65rem]">
            Document study · Physics · History · 1912
          </p>
          <h1 className="font-serif text-[clamp(2rem,6vw,3.1rem)] font-normal leading-[1.1] tracking-[-0.02em] text-[var(--ink)]">
            The notebook where general relativity didn&apos;t work yet
          </h1>
          <p className="mx-auto mt-6 max-w-[34rem] border-l-2 border-[var(--ink)] pl-5 text-left text-lg italic leading-relaxed text-[var(--ink-muted)] sm:text-xl">
            Einstein&apos;s Zurich Notebook is a small brown journal from the
            winter of 1912–13. It contains the first sustained attempt to derive
            the field equations of general relativity. On the back cover, in the
            same handwriting, is the 64=65 area illusion. He was trying to figure
            out where the trick was.
          </p>
          <div
            className="mx-auto mt-7 h-px w-14 bg-[var(--line)] sm:mt-8"
            aria-hidden
          />
        </div>

        <article className="mx-auto max-w-[min(48rem,100%)] px-[var(--page-pad)] pb-20 pt-2 sm:pb-28">
          <p className="intro-drop border-b border-[var(--line)] pb-8 text-lg leading-[1.82] text-[var(--ink)] sm:text-xl">
            Between special relativity and November 1915 lies a notebook — half
            thermal physics, half gravitation — where the right mathematics
            appears, then gets set aside for the wrong reasons.
          </p>

          <p className="mt-6 text-sm leading-relaxed text-[var(--ink-muted)]">
            Narrative, page references, and facsimile links follow John D.
            Norton&apos;s{" "}
            <a
              href={SOURCE_NORTON_ZURICH}
              target="_blank"
              rel="noopener noreferrer"
              className="article-euclid-link"
            >
              Einstein&apos;s Zurich Notebook
            </a>{" "}
            (University of Pittsburgh), including the &ldquo;For more&rdquo;
            section with archive URLs and further reading.
          </p>

          <ZurichFigure
            src={zurichNotebookImages.hero}
            alt="Einstein’s Zurich Notebook — brown cover, archival photograph"
            caption="The Zurich Notebook — archival photograph."
            priority
            pastel="lavender"
            naturalHeight
          />

          <section data-uc-section className="mt-14">
            <SectionHead num="01" title="What Einstein was trying to do" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Newton&apos;s gravity is a force acting at a distance: two masses
              pull each other with a strength that falls off as the square of the
              separation. The formula is exact enough to predict planetary
              orbits, tides, and the return of comets. No experiment contested it
              for two centuries.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Einstein contested the picture underneath the formula. Forces
              acting instantaneously across empty space sat badly with him even
              before special relativity — and after 1905, the discomfort became a
              logical problem. Special relativity said nothing travels faster than
              light. Newton&apos;s gravity was instantaneous. The two theories
              couldn&apos;t both be right.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              His replacement was geometric. Gravity, in Einstein&apos;s
              revision, is not a force at all. It is the curvature of spacetime
              produced by mass. The Earth doesn&apos;t pull the Moon toward it; it
              warps the geometry of the space around it, and the Moon follows the
              straightest available path through that warped geometry. The path
              closes back on itself — what we call an orbit — not because
              something is pulling, but because straight lines in curved space are
              curves.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              This insight arrived around 1907. Writing it down as a precise,
              self-consistent mathematical theory took eight more years. The
              Zurich Notebook covers the most intense stretch of that effort: a
              period of roughly six months, beginning in late summer 1912, when
              Einstein moved from Prague to Zurich to take up a position at ETH.
            </p>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead num="02" title="The physical object" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The notebook surfaced among Einstein&apos;s papers when he died in
              Princeton in 1955. It is small and brown, roughly the size of a
              paperback. It has two front covers because Einstein used it from both
              ends simultaneously — a habit that gives the document a slightly
              disorienting quality when read cover to cover.
            </p>

            <PageBlock header="The two covers — what each end says">
              <p className="mb-3">
                <strong>Dukas end</strong> — On one cover, Einstein&apos;s
                secretary Helen Dukas typed a label: &ldquo;Notes for lecture on
                Relativity, probably Zuerich.&rdquo; Inside this cover, against
                all expectation, are recreational mathematical puzzles: a railway
                shunting problem and the 64=65 area illusion. Then
                Minkowski&apos;s four-dimensional spacetime formalism. Then,
                without warning, the line element of general relativity.
              </p>
              <p className="mb-0">
                <strong>&ldquo;Relativität&rdquo; end</strong> — The opposite cover
                has &ldquo;Relativität&rdquo; in Einstein&apos;s own handwriting.
                Inside, nine pages of statistical-thermal physics — the Planck
                formula, the 1909 fluctuation formula. Then a heading:
                &ldquo;Gravitation.&rdquo; The serious work resumes and the two
                halves eventually meet in the notebook&apos;s physical middle.
              </p>
            </PageBlock>

            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The notebook is held at the Albert Einstein Archives at Hebrew
              University in Jerusalem and has been fully digitized. The
              gravitational sections were first analyzed in depth by John Norton
              in 1984. A complete scholarly edition, including facsimile,
              transcription, and commentary, was published as part of the
              multi-volume <em>Genesis of General Relativity</em> project
              (Springer, 2007), edited by Jürgen Renn and collaborators.
            </p>

            <ZurichFigure
              src={zurichNotebookImages.spread2}
              alt="Open pages of Einstein’s Zurich Notebook — handwriting and calculations"
              caption="Pages from the notebook — gravitation meets thermal physics."
              pastel="peach"
              naturalHeight
            />
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead
              num="03"
              title="The 64=65 illusion, and the question it raises"
            />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Before the field equations, before the metric tensor, before any of
              the physics — there are doodles. Inside the &ldquo;Relativität&rdquo;
              cover, Einstein sketched two recreational puzzles. One involves the
              shunting of railway cars on branching tracks, a classic
              combinatorial puzzle. The other is the 64=65 area paradox.
            </p>

            <IllusionParadoxSvg />

            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The trick: cut an 8×8 square into four pieces along two diagonal
              lines, then reassemble the pieces into a 13×5 rectangle. The square
              has area 64; the rectangle has area 65. One unit of area has
              apparently been conjured from nothing.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The fallacy is geometric. The two diagonal cuts have slopes of 2/5
              and 3/8 — which look identical on a hand-drawn grid but are not
              equal. When the pieces are reassembled, they don&apos;t fit together
              flush. A thin parallelogram runs the length of the apparent seam,
              invisible to a casual eye, containing exactly the missing unit of
              area. The &ldquo;diagonal&rdquo; across the rectangle is not
              actually straight: it bends very slightly at the joint.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Einstein knew the puzzle was wrong. He sketched it trying to locate
              where the deception lay. John Norton, who has studied the notebook
              more carefully than anyone, notes that the question this leaves —
              why was Einstein working through this puzzle at all, and who was he
              planning to show it to — remains unanswered. His sons Hans Albert and
              Eduard were ten and seven at the time.
            </p>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead
              num="04"
              title="The warmup: electrodynamics in four dimensions"
            />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The facing page — directly opposite the puzzle sketches — contains
              serious physics. Einstein lays out Minkowski&apos;s four-dimensional
              spacetime approach, starting with the four coordinates (x, y, z,
              ict) = (x₁, x₂, x₃, x₄) and working through scalar products,
              four-vectors, six-vectors, and the operations defined on them. This
              is Einstein reacquainting himself with the mathematical machinery of
              special relativity before attempting to extend it. (
              <ArticleProseLink href="/articles/maxwell-warsaw">
                Maxwell on a wall in Warsaw
              </ArticleProseLink>{" "}
              is a different kind of monument — but the same lineage.)
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The development continues for thirteen pages — electrodynamics,
              thermal physics, the invariant scalar for a material particle. It is
              thorough and unhurried. Then, without transition or announcement, the
              notebook turns a corner.
            </p>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead
              num="05"
              title="The line element — written for the first time"
            />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              At the top of a page, with no preamble, appears the expression that
              defines the geometry of curved spacetime:
            </p>

            <PageBlock header="The line element — what it says">
              <p className="mb-3">
                <strong>
                  ds² = Σ G<sub>μν</sub> dx<sub>μ</sub> dx<sub>ν</sub>
                </strong>
              </p>
              <p className="mb-3">
                This expression defines how to measure the spacetime interval
                between two nearby events. In flat spacetime the coefficients{" "}
                G<sub>μν</sub> reduce to a simple diagonal matrix. If they don&apos;t
                — if the metric is not flat — then the geometry is curved, and that
                curvature is gravity. Finding how source masses determine the
                coefficients G<sub>μν</sub> (the metric tensor) is the central
                problem of the entire notebook.
              </p>
              <p className="mb-0">
                Norton&apos;s assessment: this is quite possibly the first time
                Einstein wrote this expression anywhere. He used capital G for the
                coefficients initially, shifting to lowercase g within a few pages
                — the notation that became standard in all subsequent work.
              </p>
            </PageBlock>

            <ZurichFigure
              src={zurichNotebookImages.spread3}
              alt="Einstein’s Zurich Notebook — line element and gravitation calculations"
              caption="Line element and early gravitation work — the turn from flat to curved."
              pastel="sky"
              naturalHeight
            />

            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The lower half of the same page already attempts to do something
              with this expression. Einstein chooses a &ldquo;Spezialfall&rdquo;
              — a special case — where the metric is nearly flat, with only the{" "}
              G<sub>44</sub> = c² component deviating from its
              special-relativistic value. He tries to apply the gravitational
              field equation from his 1912 static-field theory. It&apos;s
              rudimentary. He knows it.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              On the facing page, he asks what Norton calls a beginner&apos;s
              question: looking at the coordinate divergence of the metric tensor,
              he writes in the margin — &ldquo;Ist dies invariant?&rdquo; — is this
              invariant? Does the expression remain the same if you change the
              coordinate system? The computation that follows immediately shows
              that it is not. He moves on.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              What is conspicuously absent from these early pages is any sign of
              the Ricci-Levi-Civita tensor calculus — the modern mathematical
              toolkit for handling curved spacetime. Instead Einstein is using
              older methods due to Beltrami, working out what invariant quantities
              can be constructed from a scalar φ. He is doing the best he can with
              the tools he has, but the right tools aren&apos;t in his hands yet.
            </p>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead
              num="06"
              title="The geodesic page — a classical detour that hits the target"
            />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Three pages later, one of the most remarkable pages in the notebook
              appears. Einstein sets aside the general theory and works through a
              standard problem in classical physics: if a mass moves freely but is
              constrained to the surface of a curved object, what path does it
              trace on that surface? The answer, derived via the calculus of
              variations, is the geodesic — the curve of shortest distance on the
              surface.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The result is, as Norton puts it, eerily close to the central idea
              of general relativity:
            </p>

            <GeodesicCompare />

            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Einstein is working through the classical case with variational
              calculus, deriving the condition δ∫ds = 0. He is, in essence,
              practicing the mathematical structure that his new theory would
              require — but in a familiar, safe arena. Tilman Sauer was the first
              historian to identify what Einstein was actually doing on this
              page; Norton notes that until Sauer pointed it out, it was virtually
              impossible to see.
            </p>

            <blockquote className="my-10 border-l-2 border-[var(--ink)] py-2 pl-6 font-serif text-[1.15rem] italic leading-snug text-[var(--ink-muted)] sm:text-[1.2rem]">
              He was one page away from the central idea of his own theory,
              working it out in a context where the answer was already known, as
              if rehearsing a move before making it in the real game.
            </blockquote>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead
              num="07"
              title={'“Stimmt” — and the moment it was earned'}
            />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              We flip the notebook and start from the other end. After nine pages
              of thermal physics — Planck formula, fluctuation calculations — a
              new heading appears: &ldquo;Gravitation.&rdquo; The work from this
              side dives immediately into conservation of energy and momentum for
              matter in curved spacetime.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Einstein starts from the geodesic equation — the equation of motion
              for a freely-falling point mass, written as an Euler-Lagrange
              equation — and applies it to a cloud of non-interacting dust
              particles in free fall. He arrives at what we now recognize as the
              condition that the covariant divergence of the stress-energy tensor{" "}
              T<sub>μν</sub> must vanish. This is a fundamental requirement of the
              theory.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              But Einstein isn&apos;t sure his derivation is valid. The operator
              acting on T<sub>μν</sub> might or might not be generally covariant —
              invariant under coordinate change. To test it, he replaces{" "}
              T<sub>μν</sub> with the metric tensor g<sub>μν</sub> and asks
              whether the result is zero or transforms as a four-vector (as it
              should, if the operator is covariant). It comes out zero.
            </p>

            <DeNote title="Stimmt.">
              &ldquo;Correct.&rdquo; — written at the bottom of the page. Einstein
              had just derived one of the basic covariant operators of tensor
              calculus through pure physical reasoning, without knowing
              that&apos;s what he was doing.
            </DeNote>

            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Norton&apos;s comment on this moment: &ldquo;If Einstein was feeling
              a little smug, he had every right to it.&rdquo; He had used an
              argument rooted in physics to generate a mathematical result that
              Ricci and Levi-Civita had arrived at from the opposite direction, by
              pure formalism. The smugness was warranted.
            </p>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead
              num="08"
              title="The missing tool: Grossmann and the Riemann tensor"
            />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The pages that follow the <em>Stimmt</em> moment are increasingly
              elaborate. Einstein searches for invariant quantities by examining
              the determinant G of the metric tensor, probing it for combinations
              that might serve as a gravitational field tensor. He identifies a
              &ldquo;hypothesized gravitation tensor&rdquo; —{" "}
              <em>vermutlicher Gravitationstensor</em>. The machinery is getting
              heavy, but something is still absent.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              What&apos;s missing is the Riemann curvature tensor — the fourth-rank
              object from which, as every modern relativist knows, the
              gravitational field equations can be almost directly read off.
              Without it, Einstein is trying to build a cathedral without the
              keystone. The Ricci-Levi-Civita tensor calculus, which provides
              systematic methods for generating invariants from the metric
              tensor&apos;s derivatives, is nowhere in the notebook&apos;s early
              pages.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Then it appears. On a later page, at the top, Einstein writes the
              formula for the Riemann tensor in the old &ldquo;four-index
              symbol&rdquo; notation, (iκ,lm). Next to it, in the margin, are
              three words:
            </p>

            <DeNote title="Grossmann tensor fourth rank">
              No translation needed. Marcel Grossmann, Einstein&apos;s
              schoolfriend and now his colleague at ETH, had gone to the library
              looking for mathematics that could handle arbitrary coordinate
              systems. He found Ricci and Levi-Civita&apos;s 1901 paper and
              brought it to Einstein. The annotation records the handoff without
              ceremony.
            </DeNote>

            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Einstein had the right tool. He contracted the fourth-rank Riemann
              tensor to produce the second-rank Ricci tensor. For this to work as a
              gravitational tensor, it had to reduce to the Newtonian form in the
              weak-field limit — and that required three of its four second-order
              derivative terms to vanish.
            </p>

            <DeNote title="Sollte verschwinden.">
              &ldquo;Should vanish.&rdquo; — written next to the three problematic
              terms. This phrase marks the beginning of the notebook&apos;s central
              struggle.
            </DeNote>

            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Getting those three terms to vanish without destroying the rest of the
              structure would occupy the remaining pages of the notebook — and
              ultimately fail.
            </p>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead num="09" title="Three attempts and a retreat" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The battle with those unwanted terms produced pages of increasingly
              labored calculation. One computation was cut off mid-page with the
              annotation:
            </p>

            <DeNote title="Zu umständlich.">
              &ldquo;Too involved.&rdquo; — the frustrated notation of someone who
              has lost the thread in a forest of symbols.
            </DeNote>

            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Einstein tried three distinct strategies to recover the Newtonian
              limit from the Riemann tensor:
            </p>

            <AttemptsTimeline />

            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              By mid-1913, the notebook ends in what Norton calls &ldquo;complete
              capitulation.&rdquo; Einstein and Grossmann publish the
              &ldquo;Entwurf&rdquo; paper — gravitational field equations of
              unknown and probably limited covariance, not derived from the
              Riemann tensor. The notebook contains a summary of the Entwurf
              derivation written with unusual neatness across two facing pages, as
              if transcribed later from another source, after the result was
              already settled.
            </p>

            <DeNote title="Spezialfall wahrscheinlich unrichtig.">
              &ldquo;Special case probably incorrect.&rdquo; — the annotation
              that closes the harmonic-condition attempt and signals the collapse.
              Written at the bottom of the page that seemed, moments earlier, to
              have solved the problem.
            </DeNote>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead num="10" title="The two years that followed" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              With the Entwurf equations published, Einstein entered what Norton
              describes as &ldquo;a darkness in which he would wander restlessly
              and with increasing discomfort for over two years.&rdquo; He knew
              something was wrong. He couldn&apos;t find what.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The correct equations were within reach the whole time. The Riemann
              tensor approach that the notebook had repeatedly attempted and
              abandoned was, in fact, the right approach. The stumbling block — the
              assumption that only g<sub>44</sub> varies in the Newtonian limit —
              was simply wrong, and once that assumption was dropped, the path to
              the correct equations opened.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              In November 1915, in a four-week sprint that Einstein described as
              the most intense intellectual effort of his life, he returned to the
              Riemann tensor and found the generally covariant field equations. The
              gravitational field equations of general relativity — which the
              Zurich Notebook had been reaching toward, and failing to reach, for
              sixty-odd pages — were submitted to the Prussian Academy on November
              25, 1915.
            </p>

            <blockquote className="my-10 border-l-2 border-[var(--ink)] py-2 pl-6 font-serif text-[1.15rem] italic leading-snug text-[var(--ink-muted)] sm:text-[1.2rem]">
              The correct answer was on the page in 1912. Einstein had the Riemann
              tensor. He had the contraction to the Ricci tensor. He had the
              Newtonian-limit requirement. He rejected it because of a wrong
              assumption about static fields — an assumption he wouldn&apos;t
              identify as wrong for three more years.
            </blockquote>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead num="11" title="What the notebook actually shows" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The published papers of general relativity present a finished
              argument: clean, tightly structured, pointing inexorably to the
              correct conclusion. The Zurich Notebook shows what the argument
              looked like before it was an argument — while it was still a series
              of attempts, reversals, wrong turnings, and recoveries.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The notation changes mid-notebook as Einstein learns better tools.
              Calculations are cut off with &ldquo;too involved&rdquo; and
              restarted from different angles. The word <em>Stimmt</em> appears on
              a good page; <em>wahrscheinlich unrichtig</em> on a bad one. The
              Entwurf derivation is copied in neatly at the end, as if to put a
              clean face on a process that had been anything but clean.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Norton&apos;s framing is precise: Einstein had circled the correct
              equations in 1912, recognized them as candidates, and then
              rejected them on the basis of a physical argument that seemed
              compelling at the time. He was not making a mathematical error. He
              was making a physical judgment — that the Newtonian limit required the
              metric to take a certain form in weak fields — that turned out to be
              incorrect. The mathematics was fine. The physics assumption
              wasn&apos;t.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              This is the thing the notebook makes concrete: even in the most
              consequential piece of theoretical physics produced in the twentieth
              century, the path from idea to equations was not a sequence of
              insights but a sequence of attempts, most of which failed. The 64=65
              puzzle is on the same cover as the first written-down line element of
              general relativity. Both are the work of the same mind, in the same
              few months, on the same pages — one unsolved, one barely started,
              both staring at a deception they couldn&apos;t quite locate. (
              <ArticleProseLink href="/articles/unit-circle">
                The unit circle
              </ArticleProseLink>{" "}
              is a different kind of curve — but the same stubborn habit of hiding
              what you think you see.)
            </p>
          </section>

          <footer className="mt-16 flex flex-col gap-2 border-t border-[var(--line)] pt-8 font-sans text-[0.58rem] uppercase tracking-[0.1em] text-[var(--ink-muted)] sm:flex-row sm:items-center sm:justify-between">
            <span>
              Source:{" "}
              <a
                href={SOURCE_NORTON_ZURICH}
                target="_blank"
                rel="noopener noreferrer"
                className="article-euclid-link normal-case tracking-normal"
              >
                J. D. Norton, University of Pittsburgh
              </a>
              {" · "}
              Zurich · 1912–1913 · Albert Einstein Archives, Hebrew University
            </span>
          </footer>
        </article>
      </div>
    </UnitCircleSectionReveal>
  );
}
