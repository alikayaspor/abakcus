import type { ReactNode } from "react";
import Image from "next/image";
import { ArticleImageLightbox } from "@/components/articles/article-image-lightbox";
import { ArticleProseLink } from "@/components/articles/article-prose-link";
import { UnitCircleSectionReveal } from "@/components/articles/unit-circle/unit-circle-section-reveal";
import { maxwellWarsawImages } from "@/data/maxwell-warsaw-images";
import { PASTEL, type PastelId } from "@/data/pastel-palette";

function MaxwellFigure({
  src,
  alt,
  caption,
  priority,
  pastel,
  className,
}: {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  pastel: PastelId;
  className?: string;
}) {
  return (
    <figure
      className={`overflow-hidden rounded-[var(--radius-card)] p-3 shadow-[var(--shadow-card)] sm:p-4 ${className ?? "my-10"}`}
      style={{ backgroundColor: PASTEL[pastel] }}
    >
      <ArticleImageLightbox src={src} alt={alt} caption={caption}>
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

function WallSchematic() {
  return (
    <div className="my-10 border border-[var(--line)] bg-[color-mix(in_srgb,var(--pastel-peach)_28%,white)] p-5 sm:p-6">
      <p className="mb-4 font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
        The wall — schematic rendering
      </p>
      <svg
        className="w-full max-w-[620px]"
        viewBox="0 0 620 280"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <rect
          x="10"
          y="10"
          width="600"
          height="260"
          rx="2"
          fill="#ddd6c8"
          stroke="#ccc5ba"
          strokeWidth="0.8"
        />
        <line
          x1="10"
          y1="95"
          x2="610"
          y2="95"
          stroke="#ccc5ba"
          strokeWidth="0.5"
        />
        <line
          x1="10"
          y1="180"
          x2="610"
          y2="180"
          stroke="#ccc5ba"
          strokeWidth="0.5"
        />
        <line
          x1="210"
          y1="10"
          x2="210"
          y2="270"
          stroke="#ccc5ba"
          strokeWidth="0.5"
        />
        <line
          x1="410"
          y1="10"
          x2="410"
          y2="270"
          stroke="#ccc5ba"
          strokeWidth="0.5"
        />
        <text
          x="105"
          y="58"
          textAnchor="middle"
          fill="#18150f"
          fontStyle="italic"
          style={{ fontFamily: "Georgia, ui-serif, serif", fontSize: 16 }}
        >
          ∯ B · dS = 0
        </text>
        <text
          x="105"
          y="82"
          textAnchor="middle"
          fill="#8f8880"
          style={{ fontFamily: "ui-monospace, monospace", fontSize: 9 }}
        >
          Gauss — magnetism
        </text>
        <text
          x="308"
          y="58"
          textAnchor="middle"
          fill="#18150f"
          fontStyle="italic"
          style={{ fontFamily: "Georgia, ui-serif, serif", fontSize: 16 }}
        >
          ∯ D · dS = Q
        </text>
        <text
          x="308"
          y="82"
          textAnchor="middle"
          fill="#8f8880"
          style={{ fontFamily: "ui-monospace, monospace", fontSize: 9 }}
        >
          Gauss — electricity
        </text>
        <text
          x="510"
          y="58"
          textAnchor="middle"
          fill="#18150f"
          fontStyle="italic"
          style={{ fontFamily: "Georgia, ui-serif, serif", fontSize: 15 }}
        >
          ∮ E · dl = −dΦ/dt
        </text>
        <text
          x="510"
          y="82"
          textAnchor="middle"
          fill="#8f8880"
          style={{ fontFamily: "ui-monospace, monospace", fontSize: 9 }}
        >
          Faraday
        </text>
        <text
          x="310"
          y="148"
          textAnchor="middle"
          fill="#18150f"
          fontStyle="italic"
          style={{ fontFamily: "Georgia, ui-serif, serif", fontSize: 15 }}
        >
          ∮ H · dl = J + dD/dt
        </text>
        <text
          x="310"
          y="168"
          textAnchor="middle"
          fill="#8f8880"
          style={{ fontFamily: "ui-monospace, monospace", fontSize: 9 }}
        >
          Ampère – Maxwell
        </text>
        <rect
          x="250"
          y="195"
          width="120"
          height="75"
          rx="1"
          fill="#c8c0b0"
          stroke="#ccc5ba"
          strokeWidth="0.8"
        />
        <text
          x="310"
          y="237"
          textAnchor="middle"
          fill="#8f8880"
          style={{ fontFamily: "ui-monospace, monospace", fontSize: 9 }}
        >
          entrance
        </text>
        <rect
          x="80"
          y="195"
          width="18"
          height="75"
          rx="1"
          fill="#c8c0b0"
          stroke="#ccc5ba"
          strokeWidth="0.5"
        />
        <rect
          x="520"
          y="195"
          width="18"
          height="75"
          rx="1"
          fill="#c8c0b0"
          stroke="#ccc5ba"
          strokeWidth="0.5"
        />
      </svg>
    </div>
  );
}

function EqBlock() {
  const rows: { left: ReactNode; right: string }[] = [
    {
      left: "∯ B · dS = 0",
      right:
        "No magnetic monopoles. Whatever enters a closed surface as magnetic flux, exits it. There is no source or sink of magnetic field lines — they always form closed loops.",
    },
    {
      left: (
        <>
          ∯ D · dS = Q<sub className="text-[0.75em]">enc</sub>
        </>
      ),
      right:
        "Electric field lines originate from charges. The total electric flux through a closed surface equals the total charge enclosed. Gauss's law.",
    },
    {
      left: (
        <>
          ∮ E · dl = −dΦ<sub className="text-[0.75em]">B</sub>/dt
        </>
      ),
      right:
        "A changing magnetic field induces an electric field. This is Faraday's law — the operating principle behind generators, transformers, and induction charging.",
    },
    {
      left: "∮ H · dl = J + dD/dt",
      right:
        "Current and changing electric fields produce magnetic fields. The second term — Maxwell's own addition — is what makes electromagnetic waves possible, and therefore light.",
    },
  ];

  return (
    <div className="my-10 overflow-hidden border border-[var(--line)]">
      <div className="border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--pastel-lavender)_35%,white)] px-5 py-2.5 font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
        The four equations — integral form
      </div>
      {rows.map((row, i) => (
        <div
          key={i}
          className="grid grid-cols-1 border-b border-[var(--line)] md:grid-cols-2 md:divide-x md:divide-[var(--line)] last:border-b-0"
        >
          <div className="flex items-center border-b border-[var(--line)] px-5 py-4 font-mono text-[0.85rem] leading-relaxed text-[var(--ink)] md:border-b-0">
            {row.left}
          </div>
          <div className="flex items-center px-5 py-4 text-[0.88rem] italic leading-relaxed text-[var(--ink-muted)]">
            {row.right}
          </div>
        </div>
      ))}
    </div>
  );
}

export function MaxwellWarsawArticle() {
  return (
    <UnitCircleSectionReveal>
      <div className="unit-circle-article text-[var(--ink)]">
        <div className="mx-auto max-w-[780px] px-[var(--page-pad)] pb-6 pt-8 text-center sm:pb-8 sm:pt-10">
          <p className="mb-5 font-sans text-[0.62rem] uppercase leading-relaxed tracking-[0.24em] text-[var(--ink-muted)] sm:text-[0.65rem]">
            Architecture · Mathematics · Physics
          </p>
          <h1 className="font-serif text-[clamp(2rem,6vw,3.1rem)] font-normal leading-[1.1] tracking-[-0.02em] text-[var(--ink)]">
            Four equations on a wall
          </h1>
          <p className="mx-auto mt-6 max-w-[34rem] border-l-2 border-[var(--ink)] pl-5 text-left text-lg italic leading-relaxed text-[var(--ink-muted)] sm:text-xl">
            Warsaw University carved Maxwell&apos;s equations into the facade of
            its physics library — in integral form, in stone, at street level.
            Most passersby don&apos;t know what they&apos;re looking at.
            That&apos;s fine. The wall doesn&apos;t care.
          </p>
          <div
            className="mx-auto mt-7 h-px w-14 bg-[var(--line)] sm:mt-8"
            aria-hidden
          />
        </div>

        <article className="mx-auto max-w-[min(48rem,100%)] px-[var(--page-pad)] pb-20 pt-2 sm:pb-28">
          <p className="intro-drop border-b border-[var(--line)] pb-8 text-lg leading-[1.82] text-[var(--ink)] sm:text-xl">
            Stone doesn&apos;t explain — it commits. On this building, the
            commitment is to four integrals and everything they imply, from
            radio to the color of sunlight.
          </p>

          <MaxwellFigure
            src={maxwellWarsawImages.hero}
            alt="Maxwell’s equations carved on the exterior of the Warsaw University physics library"
            caption="Integral form, human scale — electrodynamics as architecture."
            priority
            pastel="sky"
          />

          <section data-uc-section className="mt-14">
            <SectionHead num="01" title="What's on the wall" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              On the exterior of the physics library at Warsaw University, four
              equations are carved into the concrete in relief. They&apos;re
              large enough to read from the pavement. They&apos;ve been there
              since the building was constructed in the 1970s. They are not
              decorative in any abstract sense — they are the actual, complete,
              integral form of Maxwell&apos;s equations, the four relations that
              describe how electric and magnetic fields behave and interact.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Most university buildings put the institution&apos;s name above
              the door, or a motto, or nothing at all. Warsaw chose to put
              electrodynamics on the wall. The decision was made without
              apparent irony, and the equations have remained there ever since,
              accumulating decades of Warsaw weather.
            </p>
            <WallSchematic />
          </section>

          <MaxwellFigure
            src={maxwellWarsawImages.secondary}
            alt="Close view of Maxwell’s equations in stone on the Warsaw physics library"
            caption="Relief in concrete — weather, soot, and the same four lines since the 1970s."
            pastel="lavender"
          />

          <section data-uc-section className="mt-14">
            <SectionHead num="02" title="What the equations actually say" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Maxwell&apos;s equations are four statements about fields.
              Together they describe everything that can happen with electricity
              and magnetism: how charges generate electric fields, why magnetic
              monopoles don&apos;t exist, how a changing magnetic field induces an
              electric one, and how current and changing electric fields produce
              magnetic ones.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The version on the wall is the integral form — the one that
              describes behavior over surfaces and loops, rather than at
              individual points. It&apos;s the more physically intuitive
              formulation, and also the more visually substantial one. Each
              equation is a closed surface or line integral, which means each
              one comes with an integral sign and a circle through it, the
              typographic signature of a statement about the whole rather than
              the local.
            </p>

            <EqBlock />

            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              That last term deserves a moment. Before Maxwell, Ampère&apos;s
              law related magnetic fields to current but said nothing about
              changing electric fields. Maxwell added the displacement current
              term, and in doing so closed the equations into a self-consistent
              system. A consequence of that closure: the equations predict
              waves that propagate at a speed equal to the ratio of two
              electrical constants. When Maxwell computed that speed, it matched
              the measured speed of light. He had not set out to explain light.
              He ended up explaining light.
            </p>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead
              num="03"
              title="Why the integral form, specifically"
            />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Maxwell&apos;s equations have two standard forms: differential and
              integral. The differential form — using divergence and curl
              operators — is more compact and more general, the version you
              typically find in graduate textbooks. The integral form is older,
              more explicit, and in some ways more connected to the physical
              phenomena being described. It&apos;s also more legible on a wall.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Warsaw chose the integral form. This is a real choice, not a
              default. The differential form would fit on a smaller surface and
              reads as a tighter set of symbols. The integral form sprawls a
              little — each equation has more to it, more visual weight. Carved
              in stone at human scale, the equations read as statements. The
              integral signs, the closed surface symbols, the partial derivatives
              — they&apos;re all there, unhidden.
            </p>
            <blockquote className="my-8 border-l-2 border-[var(--ink)] py-1 pl-6 font-serif text-[1.2rem] italic leading-[1.5] text-[var(--ink-muted)]">
              The differential form is more elegant. The integral form is more
              honest about what the equations are actually doing.
            </blockquote>
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              There&apos;s also something appropriate about displaying the
              pre-vector, integral formulation on a building that predates the era
              when differential forms became the default pedagogy. These are the
              equations as physicists in the first half of the twentieth century
              would have written them — the form Maxwell himself would have
              recognized most readily, more or less. (
              <ArticleProseLink href="/articles/fibonacci-shelf">
                Geometry with a different kind of modularity
              </ArticleProseLink>{" "}
              lives elsewhere on this site — rectangles instead of fields.)
            </p>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead num="04" title="What the wall is saying, if anything" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Most institutions that put text on their buildings choose something
              intentionally vague: a founding date, a motto about knowledge or
              light, a coat of arms with a Latin phrase no one translates. These
              are signals of tradition, not content. They say: something
              important happened here, or aspires to happen here, without
              committing to anything specific.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Maxwell&apos;s equations are specific. They are not a sentiment.
              They are not an aspiration. They are a set of claims about how the
              physical world behaves — claims that have been verified to
              extraordinary precision for over a century and a half, claims that
              underlie every piece of electrical technology built since the 1860s.
              Putting them on the wall is a different kind of statement than
              putting a motto there. It&apos;s closer to putting a proof on the
              wall, or a theorem. (
              <ArticleProseLink href="/articles/billingsley-euclid">
                Another Abakcus piece
              </ArticleProseLink>{" "}
              asks what happens when you put Euclid on the page in English —
              flaps, folds, and the same insistence that abstraction meet matter.)
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Some universities put &quot;knowledge is power&quot; over their
              doors. Warsaw put the equations that make radio, radar, and fiber
              optics work. The difference in ambition is not subtle.
            </p>

            <div className="my-8 border border-[var(--line)] px-5 py-4 font-mono text-[0.68rem] leading-relaxed text-[var(--ink-muted)]">
              James Clerk Maxwell published the complete unified theory in 1865,
              in &quot;A Dynamical Theory of the Electromagnetic Field.&quot; He
              was 34. The four-equation formulation now standard was refined by
              Oliver Heaviside in the 1880s from Maxwell&apos;s original twenty
              equations.
            </div>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead num="05" title="The question of audience" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Who is the wall for? The honest answer is: mostly people who
              already know what the equations are. A student walking past who
              hasn&apos;t taken electrodynamics yet sees four lines of symbols
              with integral signs. They register &quot;mathematics&quot; and move
              on. Someone who has worked through Maxwell&apos;s equations looks
              at the same wall and sees something specific — they can name each
              equation, know what it says, recall where the tricky parts are in
              the derivations.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              In that sense, the wall functions more like a reference than an
              explanation. It doesn&apos;t teach. It marks. It says: the physics
              building is here, and the physics that governs electromagnetic
              phenomena is here with it, in stone, at street level, exposed to the
              same weather as everything else in Warsaw. (
              <ArticleProseLink href="/articles/unit-circle">
                Symbols you learn to read once
              </ArticleProseLink>{" "}
              — a different wall, same idea: pattern over rote.)
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              That&apos;s an unusual thing for a building to do. Most buildings
              try to communicate something to everyone. This one communicates
              something specific to a subset and implicitly acknowledges that the
              subset is small. There&apos;s a certain confidence in that — the
              equations don&apos;t need to be explained, and the building
              doesn&apos;t try to explain them. They&apos;re just there, the way a
              load-bearing wall is just there: structural, undecorated, doing
              the thing they do.
            </p>

            <p className="mt-12 border-t border-[var(--line-soft)] pt-8 text-sm leading-relaxed text-[var(--ink-muted)]">
              Elsewhere on Abakcus:{" "}
              <ArticleProseLink href="/articles/unit-circle">
                Unit circle
              </ArticleProseLink>
              {" · "}
              <ArticleProseLink href="/articles/billingsley-euclid">
                Paper that stands up
              </ArticleProseLink>
              {" · "}
              <ArticleProseLink href="/articles/rambo-fox">
                One fox. Four years.
              </ArticleProseLink>
            </p>
          </section>
        </article>

        <footer className="border-t border-[var(--line-soft)] px-[var(--page-pad)] py-10 text-center font-sans text-sm tracking-[0.12em] text-[var(--ink-muted)]">
          Warsaw · Physics · 1865 / 1970s
        </footer>
      </div>
    </UnitCircleSectionReveal>
  );
}
