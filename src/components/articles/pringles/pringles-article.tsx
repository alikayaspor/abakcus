import type { ReactNode } from "react";
import Image from "next/image";
import { ArticleProseLink } from "@/components/articles/article-prose-link";
import { UnitCircleSectionReveal } from "@/components/articles/unit-circle/unit-circle-section-reveal";
import { pringlesImages } from "@/data/pringles-images";
import { PASTEL } from "@/data/pastel-palette";

const PATENT_BAUR =
  "https://patents.google.com/patent/US3498798A/en";

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

function PringlesCompare() {
  const rows: [string, string][] = [
    [
      "Random curvature from frying. Each chip is geometrically unique. Stacking is impossible; chips must be packed loosely in air-filled bags.",
      "Precisely defined saddle curvature from mold pressing before frying. All chips are congruent. Stacking is deterministic and tight.",
    ],
    [
      "Contact between stacked chips is point-to-point or edge-to-edge. High stress concentrations. Breakage is nearly certain in transit.",
      "Contact between stacked chips is distributed across the full surface. Stress is diffuse. Breakage is structurally suppressed.",
    ],
    [
      "Packaging requires nitrogen flush and significant headspace to minimize chip-on-chip contact. Volume efficiency is low.",
      "Cylindrical canister with no headspace. Volume efficiency approaches the theoretical maximum for a curved convex shape.",
    ],
  ];
  return (
    <div className="my-10 overflow-hidden rounded-sm border border-[var(--line)]">
      <div className="grid grid-cols-1 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--pastel-sky)_28%,white)] sm:grid-cols-2">
        <div className="border-b border-[var(--line)] px-4 py-2.5 font-sans text-[0.58rem] uppercase tracking-[0.12em] text-[var(--ink-muted)] sm:border-b-0 sm:border-r">
          Traditional chip
        </div>
        <div className="px-4 py-2.5 font-sans text-[0.58rem] uppercase tracking-[0.12em] text-[var(--ink-muted)]">
          Pringles (hyperbolic paraboloid)
        </div>
      </div>
      {rows.map(([left, right], i) => (
        <div
          key={i}
          className="grid grid-cols-1 border-b border-[var(--line)] last:border-b-0 sm:grid-cols-2"
        >
          <div className="border-b border-[var(--line)] px-4 py-3.5 text-[0.9rem] leading-relaxed text-[var(--ink-muted)] sm:border-b-0 sm:border-r">
            {left}
          </div>
          <div className="px-4 py-3.5 text-[0.9rem] leading-relaxed text-[var(--ink-muted)]">
            {right}
          </div>
        </div>
      ))}
    </div>
  );
}

function FactoryVideo() {
  return (
    <figure className="my-12 overflow-hidden rounded-2xl border border-[var(--line-soft)] bg-[color-mix(in_srgb,var(--pastel-peach)_22%,white)] p-3 shadow-[var(--shadow-soft)] sm:p-4">
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black/10 ring-1 ring-[var(--line-soft)]">
        <iframe
          className="absolute inset-0 h-full w-full rounded-[inherit]"
          src="https://www.youtube.com/embed/muArKk7XCcU"
          title="How Pringles Are Made In Factory"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <figcaption className="mt-3 px-1 text-center font-serif text-sm italic leading-snug text-[var(--ink-muted)]">
        How Pringles Are Made In Factory — line from dough to stack.
      </figcaption>
    </figure>
  );
}

function TimelineItem({ title, children }: { title: string; children: ReactNode }) {
  return (
    <li className="relative border-l border-[var(--line)] pb-7 pl-8 last:pb-0 before:absolute before:left-[-4px] before:top-2 before:block before:h-2 before:w-2 before:rounded-full before:bg-[var(--ink)] before:content-['']">
      <span className="mb-1 block font-serif text-[0.92rem] font-medium text-[var(--ink)]">
        {title}
      </span>
      <span className="text-[0.9rem] leading-relaxed text-[var(--ink-muted)]">
        {children}
      </span>
    </li>
  );
}

export function PringlesArticle() {
  return (
    <UnitCircleSectionReveal>
      <div className="unit-circle-article text-[var(--ink)]">
        <div className="mx-auto max-w-[780px] px-[var(--page-pad)] pb-6 pt-8 text-center sm:pb-8 sm:pt-10">
          <p className="mb-5 font-sans text-[0.62rem] uppercase leading-relaxed tracking-[0.24em] text-[var(--ink-muted)] sm:text-[0.65rem]">
            Geometry · Engineering · Snacks
          </p>
          <h1 className="font-serif text-[clamp(2rem,6vw,3rem)] font-normal leading-[1.1] tracking-[-0.02em] text-[var(--ink)]">
            The Geometry Behind Pringles
          </h1>
          <p className="mx-auto mt-6 max-w-[34rem] border-l-2 border-[var(--ink)] pl-5 text-left text-lg italic leading-relaxed text-[var(--ink-muted)] sm:text-xl">
            A Pringle is a hyperbolic paraboloid. This is not a coincidence or a
            marketing flourish. It is a load-bearing geometric fact — and it
            explains everything: the stack, the snap, the can, and why the bottom
            chip doesn&apos;t crumble.
          </p>
          <div
            className="mx-auto mt-7 h-px w-14 bg-[var(--line)] sm:mt-8"
            aria-hidden
          />
        </div>

        <article className="mx-auto max-w-[min(48rem,100%)] px-[var(--page-pad)] pb-20 pt-2 sm:pb-28">
          <p className="intro-drop border-b border-[var(--line)] pb-8 text-lg leading-[1.82] text-[var(--ink)] sm:text-xl">
            Curves that carry load show up in stadium roofs and in the{" "}
            <span className="whitespace-nowrap">snack aisle</span> — if you know
            where to look.
          </p>

          <p className="mt-6 text-sm leading-relaxed text-[var(--ink-muted)]">
            For more on patterns and proportions, see{" "}
            <ArticleProseLink href="/articles/fibonacci-shelf">
              Peng Wang&apos;s Fibonacci shelf
            </ArticleProseLink>
            ; for curves on a circle,{" "}
            <ArticleProseLink href="/articles/unit-circle">
              our unit circle
            </ArticleProseLink>
            ; for geometry in print,{" "}
            <ArticleProseLink href="/articles/billingsley-euclid">
              Billingsley&apos;s Euclid
            </ArticleProseLink>
            . For a notebook full of gravity and wrong turns,{" "}
            <ArticleProseLink href="/articles/zurich-notebook">
              Einstein&apos;s Zurich Notebook
            </ArticleProseLink>
            . And for another food object where geometry is the whole
            point,{" "}
            <ArticleProseLink href="/gadgets/chocolate-planets">
              Martin&apos;s Chocolatier&apos;s solar system in Belgian chocolate
            </ArticleProseLink>
            — nine planets, Jupiter the largest truffle because it is the
            largest planet.
          </p>

          <figure
            className="my-10 overflow-hidden rounded-[var(--radius-card)] p-3 shadow-[var(--shadow-card)] sm:p-4"
            style={{ backgroundColor: PASTEL.peach }}
          >
              <div className="w-full overflow-hidden rounded-xl">
                <Image
                  src={pringlesImages.hero}
                  alt="Geometry behind Pringles — hyperbolic paraboloid chip"
                  width={1200}
                  height={800}
                  className="h-auto w-full"
                  sizes="(max-width:768px) 100vw, min(680px, 90vw)"
                  priority
                />
              </div>
            <figcaption className="mt-4 px-1 text-center font-serif text-sm italic leading-snug text-[var(--ink)]">
              Geometry Behind Pringles — the hyperbolic paraboloid in the wild.
            </figcaption>
          </figure>

          <section data-uc-section className="mt-14">
            <SectionHead num="01" title="The problem Fredric Baur was actually solving" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              In the 1960s, Procter &amp; Gamble chemist Fredric Baur was handed a
              brief that sounds mundane and turned out to be geometrically
              exacting: build a chip that doesn&apos;t break in the bag. Traditional
              chips — sliced from whole potatoes, fried, tumbled into foil bags
              with a cushion of nitrogen — arrived at their destination as a
              mixture of intact chips and chips that had failed at some structural
              point during transit.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The failure mode was predictable. A flat or randomly curved chip has
              no preferred axis of stress. When packed in a bag with dozens of
              identical chips, it encounters pressure from unpredictable
              directions. The chip doesn&apos;t know where to be strong, so it
              isn&apos;t strong anywhere in particular.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Baur&apos;s solution was not to find a tougher chip material. It was
              to give the chip a shape that directed stress — one where the
              geometry itself did the structural work. The shape he arrived at was
              already well-known to architects, bridge engineers, and mathematicians.
              It is called a hyperbolic paraboloid.
            </p>

            <AsideNote title="Fredric Baur's patent, 1975">
              <a
                href={PATENT_BAUR}
                target="_blank"
                rel="noopener noreferrer"
                className="article-euclid-link"
              >
                US Patent 3,498,798
              </a>{" "}
              — &ldquo;Fabrication of Chip-Type Food Products.&rdquo; Baur&apos;s
              contribution was not just the chip shape but the entire system: dough
              formulation, mold geometry, stacking method, canister design. He
              was, as his obituary put it, &ldquo;buried in a Pringles can&rdquo; at
              his own request. His family honored this.
            </AsideNote>

            <figure className="my-10 overflow-hidden rounded-[var(--radius-card)] border border-[var(--line)] shadow-[var(--shadow-card)]">
                <Image
                  src="https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/Pringles%20Patent.png"
                  alt="Pringles US Patent 3,498,798 — Fredric Baur's original patent application drawings"
                  width={900}
                  height={1200}
                  className="h-auto w-full"
                  sizes="(max-width:768px) 100vw, min(680px, 90vw)"
                />
              <figcaption className="mt-3 px-1 text-center font-serif text-sm italic leading-snug text-[var(--ink-muted)]">
                US Patent 3,498,798 (Baur, 1975) — the original Pringles patent application.
              </figcaption>
            </figure>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead num="02" title="What a hyperbolic paraboloid actually is" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The term sounds formidable. The geometry is, once seen, immediately
              intuitive. Take a flat square sheet of paper. Hold two opposite
              corners and push them up; hold the other two corners and push them
              down. The shape you&apos;ve made — curving upward along one diagonal,
              downward along the other — is a hyperbolic paraboloid.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              More precisely: it is a doubly-ruled surface defined by an equation of
              the form below. The two negative terms guarantee opposite curvature in
              the x and y directions. Slice the surface parallel to the z-axis and
              you see parabolas. Slice it horizontally (parallel to the xy-plane)
              and you see hyperbolas. That is where both halves of the name come
              from.
            </p>

            <figure className="my-10 overflow-hidden rounded-sm border border-[var(--line)] bg-[color-mix(in_srgb,var(--pastel-peach)_28%,white)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/pringles-hyperbolic-paraboloid.svg"
                alt=""
                className="block w-full bg-[#e6e0d4]"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="border-t border-[var(--line)] bg-[color-mix(in_srgb,var(--pastel-peach)_18%,white)] px-4 py-2.5 font-sans text-[0.56rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
                The hyperbolic paraboloid — saddle surface · doubly-ruled · negative
                Gaussian curvature throughout
              </figcaption>
            </figure>

            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The key property is what differential geometers call negative
              Gaussian curvature. At every point on the surface, the two principal
              curvatures — the maximum and minimum — have opposite signs. The
              surface curves up in one direction and down in the perpendicular
              direction simultaneously. There is no way to bend flat paper into
              this shape without cutting it; the geometry cannot be flattened.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              This also makes it a saddle surface. The center point is,
              simultaneously, a local minimum when approached along one direction
              and a local maximum when approached at 90 degrees to that. This is the
              mathematical definition of a saddle point — the same concept that
              appears in multivariable calculus when finding critical points of
              functions of two variables.
            </p>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead num="03" title="Why this shape is structurally strong" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The structural properties of the hyperbolic paraboloid follow directly
              from its geometry. A flat sheet loaded from above deflects; the load
              concentrates at the center and the sheet bends, then breaks. A
              hyperbolic paraboloid under the same load distributes the force along
              its curves — the arch-like curvature in one direction transfers
              compression efficiently to the edges, while the opposing curvature
              provides tensile resistance that prevents the structure from inverting.
            </p>

            <blockquote className="my-10 border-l-2 border-[var(--ink)] py-2 pl-6 font-serif text-[1.1rem] italic leading-snug text-[var(--ink-muted)] sm:text-[1.15rem]">
              The opposing curvatures brace each other. The shape that looks
              structurally precarious — curves going two ways at once — is precisely
              the shape that makes the structure stable under load from any
              direction.
            </blockquote>

            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              This is why the same geometry that appears in a snack food also
              appears in the roofs of major buildings. The saddle surface is a
              natural compression structure: it routes load to its supports along
              paths of minimum energy, the way a hanging cable finds its catenary
              shape under gravity. Invert the catenary and you get an arch that
              stands in pure compression; the hyperbolic paraboloid is the
              two-dimensional generalization of this principle.
            </p>

            <AsideNote title="Architecture: the same shape at larger scale">
              The Scotiabank Saddledome in Calgary (1983) has a roof that is,
              geometrically, an enormous Pringle. So does the London Velodrome
              (2011). Felix Candela&apos;s concrete shell structures in Mexico —
              thin shells of 4 cm concrete spanning enormous spaces — use hyperbolic
              paraboloid geometry because a 4 cm slab that would collapse under its
              own weight as a flat sheet becomes self-supporting when given this
              curvature.
            </AsideNote>

            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              For a chip 2 mm thick spanning roughly 70 mm, these structural
              considerations are not academic. A flat chip of the same dimensions
              and dough composition would fail under the weight of ten chips stacked
              above it. The Pringle shape allows a stack of dozens — the entire
              can — to sit on the bottom chip without fracturing it.
            </p>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead num="04" title="The stackability constraint" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The second engineering requirement — stackability — adds a constraint
              that the geometry must satisfy simultaneously with the structural
              requirement. Two chips can be stacked only if each chip&apos;s surface
              is a constant vertical offset from the chip below it. In geometric
              terms: the surfaces must be congruent and the shape must tile itself
              in the direction normal to its mean plane.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              A randomly curved surface doesn&apos;t do this. Two potato chip halves
              with slightly different random curvature will rock against each other
              and leave large air gaps. The hyperbolic paraboloid, because it is
              described by a precise equation with fixed parameters, produces chips
              that are geometrically identical — and because the surface has a
              uniform curvature profile, identical chips nest at a constant
              separation.
            </p>

            <PringlesCompare />

            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The canister itself is a geometric consequence of the chip shape.
              Stacked hyperbolic paraboloids, because they are elliptical in plan
              view and uniform in spacing, form a column. That column fits
              naturally in a cylinder. The cylinder is rigid. The result is a
              packaging system where the geometry of the chip, the geometry of the
              stack, and the geometry of the container are mutually consistent —
              each determined by the same initial shape decision.
            </p>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead num="05" title="How the shape is manufactured" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The manufacturing process has to be compatible with the geometric
              requirements. A whole potato chip cannot be given a precise saddle
              shape; the irregular cellular structure of a potato slice doesn&apos;t
              allow precise geometric forming under a mold without tearing.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Pringles are not potato chips in the usual sense. They are
              potato-based chips: a dough made from dehydrated potato flakes, wheat
              starch, rice flour, and corn flour, mixed with water to a precise
              consistency, sheeted to a uniform thickness, and cut into oval blanks.
              These blanks are still flat and pliable.
            </p>

            <ul className="relative my-10 ml-1 list-none border-l border-[var(--line)] pl-8">
              <TimelineItem title="Forming on a saddle mold">
                The flat dough oval is placed on a convex saddle mold and a matching
                concave mold is pressed against it from above. The two molds are
                precisely machined to the target hyperbolic paraboloid geometry. The
                dough conforms to the mold shape while still pliable.
              </TimelineItem>
              <TimelineItem title="Frying while constrained">
                The shaped dough is transferred to a continuous fryer while held
                against the mold. The frying process simultaneously cooks the chip
                and sets the starch structure, freezing the saddle geometry in place.
                Without the mold constraint during frying, the chip would warp
                unpredictably.
              </TimelineItem>
              <TimelineItem title="Stacking and canning">
                After frying, seasoning, and cooling, chips are placed on a stacking
                belt that orients them consistently and feeds them into the
                cylindrical can. The orientation consistency is possible only because
                the chip shape is precise and repeatable.
              </TimelineItem>
            </ul>

            <FactoryVideo />

            <AsideNote title="The dough composition matters geometrically">
              The ratio of potato to grain flours affects the elastic modulus of the
              dough, which in turn affects how precisely it conforms to the mold and
              how much springback occurs after forming. The final chip geometry is a
              function not just of the mold shape but of the dough rheology.
              Baur&apos;s original patent specifies the composition in ranges that
              keep the springback small enough that the formed shape remains within
              tolerance.
            </AsideNote>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead num="06" title="The snap" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              There is a tactile property of Pringles that deserves its own section:
              the characteristic snap when you bite through one. This is not an
              accident of the dough composition, though the dough matters. It is a
              consequence of the geometry.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              A flat cracker, loaded by biting, flexes locally before fracturing.
              The fracture propagates slowly along a crack that finds the path of
              least resistance through the material. The sound is a soft crunch —
              many small fractures propagating sequentially.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              A hyperbolic paraboloid under biting load behaves differently. Because
              the structure has no neutral axis — every cross-section is either in
              compression or tension depending on orientation — the entire region
              near the bite point is uniformly stressed. When the material reaches
              its fracture threshold, it reaches it nearly simultaneously across a
              large area. The fracture propagates instantly, not sequentially.
            </p>

            <blockquote className="my-10 border-l-2 border-[var(--ink)] py-2 pl-6 font-serif text-[1.1rem] italic leading-snug text-[var(--ink-muted)] sm:text-[1.15rem]">
              The snap of a Pringle is the acoustic signature of a geometrically
              efficient fracture. The saddle shape ensures that stress concentrates
              nowhere — and is released everywhere at once.
            </blockquote>

            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              This is also why Pringles that have absorbed moisture snap less
              decisively. Water plasticizes the starch matrix, reducing the elastic
              modulus and allowing local flexure before fracture. The geometry is
              the same; the material has changed. The structural argument fails when
              the material&apos;s properties no longer support it.
            </p>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead num="07" title="A geometry that shows up everywhere" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The hyperbolic paraboloid was not invented for chips. It appears
              wherever the structural requirements of a surface — spanning, load
              distribution, minimal material — combine with a need for geometric
              precision and constructability.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The reason it keeps appearing is that it is a ruled surface: it can be
              constructed entirely from straight lines. Lay a series of straight
              boards across two curved beams and you can approximate a hyperbolic
              paraboloid closely. This is how Candela&apos;s thin concrete shells
              were built: by pouring concrete over straight wooden formwork arranged
              in a saddle pattern. The resulting shell is curved; the formwork was
              straight timber.
            </p>

            <AsideNote title="The ruled surface property">
              A ruled surface is one that, through every point, contains at least one
              straight line lying entirely on the surface. The hyperbolic paraboloid
              is doubly ruled: through every point pass two distinct families of
              straight lines. This makes it manufacturable from straight elements —
              important for concrete formwork, steel construction, and, less
              obviously, the precise alignment of chip molds in a production line.
            </AsideNote>

            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              This is the deeper reason the hyperbolic paraboloid appears in both a
              Chilean concrete roof and an American snack food: it sits at an unusual
              intersection of geometric elegance and practical constructability.
              The shape is analytically precise, structurally efficient, and
              physically manufacturable from straight-line elements. These three
              properties rarely coincide, and when they do, engineers find uses for
              the shape in contexts that appear to have nothing to do with each
              other.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Fredric Baur probably didn&apos;t think of his chip as an architectural
              structure. He was solving a packaging problem. But the solution he found
              was the same one Felix Candela found when he was building a church in
              Mexico City — because the geometry of efficient surface structures is
              not context-dependent. A hyperbolic paraboloid distributes load
              efficiently whether the load is a snow roof in Calgary or a stack of
              forty chips in Ohio.
            </p>
          </section>

          <section data-uc-section className="mt-14">
            <p className="rounded-lg border border-[var(--line)] bg-[color-mix(in_srgb,var(--pastel-lavender)_12%,white)] px-4 py-3 font-mono text-[0.68rem] leading-relaxed text-[var(--ink-muted)]">
              Source:{" "}
              <a
                href={PATENT_BAUR}
                target="_blank"
                rel="noopener noreferrer"
                className="article-euclid-link"
              >
                US Patent 3,498,798
              </a>{" "}
              (Baur, 1975) · Geometric analysis after Candela, F., &ldquo;Understanding
              the Hyperbolic Paraboloid,&rdquo; Architectural Record, 1958.
            </p>
          </section>
        </article>
      </div>
    </UnitCircleSectionReveal>
  );
}
