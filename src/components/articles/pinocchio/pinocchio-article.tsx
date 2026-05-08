import type { ReactNode } from "react";
import Image from "next/image";
import { ArticleImageLightbox } from "@/components/articles/article-image-lightbox";
import { ArticleProseLink } from "@/components/articles/article-prose-link";
import { PinocchioForceChart } from "@/components/articles/pinocchio/pinocchio-force-chart";
import { UnitCircleSectionReveal } from "@/components/articles/unit-circle/unit-circle-section-reveal";
import { pinocchioImages } from "@/data/pinocchio-images";
import { PASTEL, type PastelId } from "@/data/pastel-palette";

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
    <div className="my-6 border-l-[3px] border-[var(--pastel-sky)] bg-[color-mix(in_srgb,var(--pastel-peach)_28%,white)] px-4 py-3 font-mono text-[0.75rem] leading-relaxed text-[var(--ink-muted)]">
      <strong className="text-[var(--ink)]">{title}</strong>
      <span className="mt-1 block font-serif text-[0.88rem] italic text-[var(--ink-muted)]">
        {children}
      </span>
    </div>
  );
}

function PinocchioFigure({
  src,
  alt,
  caption,
  priority,
  pastel,
  naturalHeight,
}: {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  pastel: PastelId;
  naturalHeight?: boolean;
}) {
  return (
    <figure
      className="my-10 overflow-hidden rounded-[var(--radius-card)] p-3 shadow-[var(--shadow-card)] sm:p-4"
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

function EqBlock({
  title,
  lines,
}: {
  title: string;
  lines: { text: string; highlight?: boolean }[];
}) {
  return (
    <div className="my-8 overflow-hidden rounded-sm border border-[var(--line)]">
      <div className="border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--pastel-peach)_32%,white)] px-5 py-2.5 font-sans text-[0.56rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
        {title}
      </div>
      <div className="bg-[color-mix(in_srgb,var(--pastel-lime)_12%,white)] px-6 py-5 font-serif text-base italic leading-[2.1] text-[var(--ink-muted)]">
        {lines.map((line, i) => (
          <span
            key={i}
            className={`block ${line.highlight ? "font-medium text-[var(--ink)]" : ""}`}
          >
            {line.text}
          </span>
        ))}
      </div>
    </div>
  );
}

export function PinocchioArticle() {
  return (
    <UnitCircleSectionReveal>
      <div className="unit-circle-article text-[var(--ink)]">
        <div className="mx-auto max-w-[780px] px-[var(--page-pad)] pb-6 pt-8 text-center sm:pb-8 sm:pt-10">
          <p className="mb-5 font-sans text-[0.62rem] uppercase leading-relaxed tracking-[0.24em] text-[var(--ink-muted)] sm:text-[0.65rem]">
            Physics · Folklore · 2014
          </p>
          <h1 className="font-serif text-[clamp(2rem,6vw,3.1rem)] font-normal leading-[1.1] tracking-[-0.02em] text-[var(--ink)]">
            Pinocchio could only tell 13 lies before his head killed him
          </h1>
          <p className="mx-auto mt-6 max-w-[34rem] border-l-2 border-[var(--ink)] pl-5 text-left text-lg italic leading-relaxed text-[var(--ink-muted)] sm:text-xl">
            A 2014 paper from the{" "}
            <em>Journal of Interdisciplinary Science Topics</em> calculated
            exactly how many consecutive lies a wooden puppet could tell before
            the exponential growth of his nose shifted his centre of mass far
            enough to snap his oak neck. The answer is 13. The nose would be
            208 metres long.
          </p>
          <div
            className="mx-auto mt-7 h-px w-14 bg-[var(--line)] sm:mt-8"
            aria-hidden
          />
        </div>

        <article className="mx-auto max-w-[min(48rem,100%)] px-[var(--page-pad)] pb-20 pt-2 sm:pb-28">
          <p className="intro-drop border-b border-[var(--line)] pb-8 text-lg leading-[1.82] text-[var(--ink)] sm:text-xl">
            A growing nose is a lever. By the thirteenth lie, the physics wins
            — and the fairy tale ends on a spreadsheet.
          </p>

          <p className="mt-6 text-sm leading-relaxed text-[var(--ink-muted)]">
            On Abakcus, this sits next to other stories that put serious tools on
            unlikely questions — from{" "}
            <ArticleProseLink href="/articles/pringles">
              the geometry of a Pringle
            </ArticleProseLink>{" "}
            to{" "}
            <ArticleProseLink href="/articles/indiana-pi-bill">
              the Indiana legislature&apos;s attempt to vote on π
            </ArticleProseLink>
            . Here, π shows up quietly in the neck model — not as politics, but
            as circumference.
          </p>

          <PinocchioFigure
            src={pinocchioImages.hero}
            alt="Classic illustration of Pinocchio with an elongated nose"
            caption="The image everyone pictures — long before the 208-metre limit."
            priority
            pastel="peach"
          />

          <section data-uc-section className="mt-14">
            <SectionHead
              num="01"
              title="The paper that nobody asked for, and everyone needed"
            />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              In 2014, Steffan Llewellyn of the University of Leicester submitted
              a paper to the{" "}
              <em>Journal of Interdisciplinary Science Topics</em> under the
              title &ldquo;How many lies could Pinocchio tell before it became
              lethal?&rdquo; The journal — which exists specifically to publish
              rigorous analyses of questions nobody actually needed answered —
              accepted it. The paper runs two pages, includes two graphs, and
              reaches a precise conclusion through Newtonian mechanics applied
              to an Italian children&apos;s character.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The setup is straightforward: Pinocchio&apos;s nose grows when he
              lies. Disney&apos;s version, working from Carlo Collodi&apos;s 1883
              original, shows the nose doubling in length with each lie. The
              paper asks what happens to the structural load on Pinocchio&apos;s
              neck as this process continues. The head and neck are modelled as a
              lever system. The nose is a cylinder of oak. The neck is a column
              of oak. The physics is real. The subject is a puppet.
            </p>

            <div className="my-10 border-l-2 border-[var(--ink)] py-2 pl-6 text-lg italic leading-relaxed text-[var(--ink-muted)]">
              The paper concludes that Pinocchio&apos;s nose seemingly deposits
              mass from nowhere. It flags this as extraordinary, then moves on.
            </div>

            <PinocchioFigure
              src={pinocchioImages.paper1}
              alt="Journal cover page: How many lies could Pinocchio tell before it became lethal"
              caption="The paper as published — title page, Leicester, 2014."
              pastel="lime"
              naturalHeight
            />
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead
              num="02"
              title="What Pinocchio is made of, and why it matters"
            />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The material choice is disputed in the source literature — the
              original novel never specifies the wood. Llewellyn resolves this
              by assuming oak, a reasonable default for Italian carpentry in the
              1880s. This gives a density of approximately 750 kg/m³. The
              mechanical properties of oak are well-documented: its compression
              strength is 1,150 psi, or roughly 7.9 × 10<sup>6</sup> N/m².
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The head is modelled as a sphere of radius 11 cm — anatomically
              plausible for a puppet. The nose starts at 1 inch (2.54 cm) in
              length and 2 cm in diameter, and doubles in length with each lie
              while maintaining constant density. The neck is treated as a
              cylinder, with the circumference of an average human neck used as
              the reference: 0.4 m.
            </p>

            <EqBlock
              title="Maximum force the neck can sustain"
              lines={[
                { text: "Circumference = 2πr" },
                { text: "r = 0.4 / 2π = 0.0637 m" },
                { text: "Force = Pressure × Area" },
                { text: "Force = (7.9 × 10⁶) × π(0.0637²)" },
                { text: "Force ≈ 1 × 10⁵ N", highlight: true },
              ]}
            />

            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              One hundred thousand newtons. That is the maximum downward force
              Pinocchio&apos;s neck can sustain before compression failure —
              before, in the paper&apos;s careful phrasing, &ldquo;the supporting
              neck snaps.&rdquo; This is the number Llewellyn spends the rest of
              the paper trying to reach through successive doublings of the
              nose. The same circumference–radius relationship underpins how we
              read angles and lengths on the{" "}
              <ArticleProseLink href="/articles/unit-circle">
                unit circle
              </ArticleProseLink>
              — here, applied to a neck.
            </p>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead
              num="03"
              title="The lever system, and why the nose is worse than its weight"
            />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              A growing nose is not simply a weight problem. It is a torque
              problem. The head and neck form a lever, with the neck muscles
              providing the upward force at the back of the skull to
              counterbalance the weight acting at the centre of mass of the
              combined head-and-nose system. As the nose extends forward, the
              centre of mass of the whole assembly shifts toward the front of
              the face. The lever arm lengthens. The required upward force at
              the neck increases accordingly — and this happens faster than the
              weight of the nose alone would suggest.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The initial mass of the head is calculated as follows: a sphere of
              radius 0.11 m, oak density 750 kg/m³, gives a head mass of 4.18
              kg. The initial nose — 2.54 cm long, 1 cm radius — has a mass of
              0.006 kg. Negligible. The initial force applied by the head-nose
              system to the neck is 4.51 N. Against a failure threshold of
              100,000 N, Pinocchio has considerable margin.
            </p>

            <AsideNote title="The centre of mass calculation">
              CoM = (M<sub>H</sub> × x<sub>H</sub> + M<sub>N</sub> × x
              <sub>N</sub>) / (M<sub>H</sub> + M<sub>N</sub>). With the
              head&apos;s centre at 0.11 m and the initial nose centre at 0.1227
              m, the combined centre of mass is 0.11 m — almost unchanged. The
              nose is too small to matter. This changes with extraordinary speed
              after lie 10.
            </AsideNote>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead
              num="04"
              title="The exponential nature of the problem"
            />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The nose doubles with each lie. This means the growth is
              exponential, not linear. The first several lies change nothing of
              structural consequence. By lie 7, the nose is 163 cm long — still
              manageable. By lie 10, it is 13 metres. By lie 12, it is 52
              metres and the force applied to the neck has reached approximately
              10,000 N — one tenth of the failure threshold.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Lie 13 is the catastrophic one. The nose reaches 208 metres in
              length. The mass of the nose — doubling with each lie under the
              paper&apos;s cylindrical model — becomes overwhelming. The total
              downward force
              applied to the neck crosses 100,000 N. The neck fails.
            </p>

            <div className="my-8 overflow-x-auto rounded-sm border border-[var(--line)]">
              <table className="w-full min-w-[520px] border-collapse text-[0.88rem]">
                <thead>
                  <tr className="border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--pastel-peach)_30%,white)]">
                    <th className="px-3 py-2 text-left font-sans text-[0.56rem] font-normal uppercase tracking-[0.12em] text-[var(--ink-muted)]">
                      Lie #
                    </th>
                    <th className="px-3 py-2 text-left font-sans text-[0.56rem] font-normal uppercase tracking-[0.12em] text-[var(--ink-muted)]">
                      Nose length
                    </th>
                    <th className="px-3 py-2 text-left font-sans text-[0.56rem] font-normal uppercase tracking-[0.12em] text-[var(--ink-muted)]">
                      Nose mass (kg)
                    </th>
                    <th className="px-3 py-2 text-left font-sans text-[0.56rem] font-normal uppercase tracking-[0.12em] text-[var(--ink-muted)]">
                      Force on neck (N)
                    </th>
                    <th className="px-3 py-2 text-left font-sans text-[0.56rem] font-normal uppercase tracking-[0.12em] text-[var(--ink-muted)]">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["0", "2.54 cm", "0.006", "4.51", "Fine"],
                    ["1", "5.08 cm", "0.048", "4.98", "Fine"],
                    ["3", "20.3 cm", "0.77", "9.04", "Fine"],
                    ["5", "81.3 cm", "12.4", "53.8", "Fine"],
                    ["7", "3.25 m", "198", "812", "Fine"],
                    ["10", "26.1 m", "12,700", "49,500", "Dangerous"],
                    ["12", "104 m", "50,900", "99,400", "Critical"],
                  ].map(([a, b, c, d, e]) => (
                    <tr key={a} className="border-b border-[var(--line)]">
                      <td className="px-3 py-3 font-mono text-[0.72rem] text-[var(--ink-muted)]">
                        {a}
                      </td>
                      <td className="px-3 py-3 text-[var(--ink-muted)]">{b}</td>
                      <td className="px-3 py-3 text-[var(--ink-muted)]">{c}</td>
                      <td className="px-3 py-3 text-[var(--ink-muted)]">{d}</td>
                      <td className="px-3 py-3 text-[var(--ink-muted)]">{e}</td>
                    </tr>
                  ))}
                  <tr className="font-medium text-[var(--ink)]">
                    <td className="px-3 py-3 font-mono text-[0.72rem]">13</td>
                    <td className="px-3 py-3">208 m</td>
                    <td className="px-3 py-3">203,800</td>
                    <td className="px-3 py-3">~100,000+</td>
                    <td className="px-3 py-3">Neck snaps</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The centre of mass, which started effectively at the centre of the
              head (0.11 m from the neck), has shifted to approximately 85 metres
              in front of Pinocchio&apos;s face by lie 13. The lever arm is 85
              metres long. The weight at the end of it is the equivalent of a
              large truck. The neck of a puppet, however well made, does not
              survive this.
            </p>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead
              num="05"
              title="The shape of the failure curve"
            />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The relationship between number of lies and force on the neck is
              exponential with an inflection that makes the danger almost
              invisible until it is too late. Lies one through ten produce forces
              that remain comfortably below the failure threshold. The doubling
              happens silently in the background. Then, in three lies, the force
              goes from one tenth of threshold to past threshold. There is no
              warning slope. There is a cliff.
            </p>

            <div className="my-8 overflow-hidden rounded-sm border border-[var(--line)] bg-[color-mix(in_srgb,var(--pastel-lime)_10%,white)]">
              <div className="border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--pastel-peach)_25%,white)] px-5 py-2.5 font-sans text-[0.56rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
                Force on Pinocchio&apos;s neck vs. number of lies — exponential
                growth to structural failure
              </div>
              <div className="p-3 sm:p-4">
                <PinocchioForceChart />
              </div>
            </div>

            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The shape is characteristic of all exponential processes: a long,
              deceptively flat beginning, followed by a nearly vertical rise.
              Had the nose grown linearly — say, by a fixed amount per lie
              rather than doubling — Pinocchio could have continued for centuries.
              Doubling is what makes it lethal at thirteen.
            </p>

            <PinocchioFigure
              src={pinocchioImages.paper2}
              alt="Second page of the Pinocchio lethal lies paper with graphs"
              caption="From the paper — graphs that match the cliff in the model."
              pastel="sky"
              naturalHeight
            />
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead
              num="06"
              title="What the paper doesn't address, and what that means"
            />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Llewellyn is careful to note that the paper does not address where
              Pinocchio&apos;s nose mass comes from. Each lie doubles the nose
              length; under the cylindrical model (constant radius), volume —
              and mass — double with each lie. By lie 13, the nose has
              accumulated over 200,000 kg — the mass of several loaded freight
              cars — from a 6-gram starting point. The paper flags this as
              &ldquo;extraordinary&rdquo; and declines to speculate further.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              This is the correct scientific approach. The paper is not a paper
              about the metaphysics of wooden puppet anatomy. It is a paper about
              structural mechanics, and it holds the problematic assumptions
              constant while solving the mechanics correctly. The nose deposits
              mass from nowhere; this is stipulated; given this stipulation, here
              is when the neck breaks.
            </p>

            <AsideNote title="The nose geometry assumption">
              The nose is modelled as a cylinder maintaining constant radius (1
              cm) while the length doubles. This means the volume — and therefore
              mass — doubles with each lie, not increases by a factor of eight.
              The cubic scaling would only apply if all three dimensions grew
              proportionally. Llewellyn&apos;s version is more conservative: mass
              doubles, not octuples, with each lie. The cliff at lie 13 would
              arrive sooner under the alternative assumption.
            </AsideNote>

            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The paper also declines to address where Pinocchio manages to form
              new nose material — whether from the air, from metabolic processes,
              or from some violation of conservation laws specific to enchanted
              carpentry. The conclusion notes only that this &ldquo;unique
              ability can be of great concern for the puppet, and lengthy,
              extensive lies are advised against, for the health and well-being of
              Pinocchio.&rdquo; This is the entire practical recommendation. It
              is, under the circumstances, sound advice.
            </p>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead
              num="07"
              title="Why this paper exists, and what it represents"
            />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The <em>Journal of Interdisciplinary Science Topics</em> is a
              course-based publication at the University of Leicester, designed
              to teach undergraduate students how to construct a scientific
              argument and submit it for peer review. The assignment is
              deliberately open: take any question and apply physics to it. The
              questions that emerge — whether the Death Star could destroy a
              planet, how many calories Jack Sparrow burns in a sword fight,
              whether Batman could survive his cape glide — are chosen for
              tractability, not gravity.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              What makes Llewellyn&apos;s paper good, within its genre, is the
              precision of the mechanics. The lever system is correctly modelled.
              The centre-of-mass calculation is properly weighted. The failure
              criterion uses real material data for real oak. The exponential
              growth is applied consistently. The result — 13 lies, 208-metre
              nose, 85-metre centre-of-mass displacement — follows from the
              assumptions with no mathematical errors.
            </p>

            <div className="my-10 border-l-2 border-[var(--ink)] py-2 pl-6 text-lg italic leading-relaxed text-[var(--ink-muted)]">
              The question is absurd. The method is sound. This is, arguably,
              exactly what undergraduate physics education is for: learning to
              apply rigorous tools to any problem, including problems that
              don&apos;t exist.
            </div>

            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              There is also something genuine in the result. Exponential growth
              that seems harmless for ten steps, then becomes catastrophic in
              three, is not a phenomenon unique to wooden noses. It appears in
              compound interest, in epidemic spread, in feedback loops of every
              kind — and in sequences that look innocent until they aren&apos;t,
              a theme we touch in pieces from the{" "}
              <ArticleProseLink href="/articles/fibonacci-shelf">
                Fibonacci shelf
              </ArticleProseLink>{" "}
              to the{" "}
              <ArticleProseLink href="/book-lists/books-about-pi">
                six-book shelf on π
              </ArticleProseLink>
              . The intuition that Pinocchio&apos;s nose is probably fine after
              ten lies — the intuition that misses the cliff — is the same
              intuition that misreads exponential processes in every domain.
              Llewellyn&apos;s puppet is a clean, memorable illustration of why
              that intuition fails.
            </p>
          </section>

          <p className="mt-12 border border-[var(--line)] px-5 py-4 font-mono text-[0.68rem] leading-relaxed text-[var(--ink-muted)]">
            Source: Llewellyn, S. (2014). &ldquo;How many lies could Pinocchio
            tell before it became lethal?&rdquo;{" "}
            <em>Journal of Interdisciplinary Science Topics</em>, University of
            Leicester, 25/03/2014.
          </p>
        </article>
      </div>
    </UnitCircleSectionReveal>
  );
}
