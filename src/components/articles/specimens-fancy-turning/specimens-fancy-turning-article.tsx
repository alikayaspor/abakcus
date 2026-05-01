import { ArticleProseLink } from "@/components/articles/article-prose-link";
import { UnitCircleSectionReveal } from "@/components/articles/unit-circle/unit-circle-section-reveal";
import { PASTEL } from "@/data/pastel-palette";

const R2 = "https://pub-98e13baa8ca84d53b2e3ee903a8fce62.r2.dev";

const HERO = `${R2}/Specimens%20of%20Fancy%20Turning%2012.webp`;

const IMAGES = [
  { src: `${R2}/Specimens%20of%20Fancy%20Turning%202.webp`,  caption: "Specimens of Fancy Turning — Plate II" },
  { src: `${R2}/Specimens%20of%20Fancy%20Turning%203.webp`,  caption: "Specimens of Fancy Turning — Plate III" },
  { src: `${R2}/Specimens%20of%20Fancy%20Turning%205.webp`,  caption: "Specimens of Fancy Turning — Plate V" },
  { src: `${R2}/Specimens%20of%20Fancy%20Turning%2010.webp`, caption: "Specimens of Fancy Turning — Plate X" },
  { src: `${R2}/Specimens%20of%20Fancy%20Turning%2013.webp`, caption: "Specimens of Fancy Turning — Plate XIII" },
  { src: `${R2}/Specimens%20of%20Fancy%20Turning%2014.webp`, caption: "Specimens of Fancy Turning — Plate XIV" },
  { src: `${R2}/Specimens%20of%20Fancy%20Turning%2015.webp`, caption: "Specimens of Fancy Turning — Plate XV" },
  { src: `${R2}/Specimens%20of%20Fancy%20Turning%2017.webp`, caption: "Specimens of Fancy Turning — Plate XVII" },
  { src: `${R2}/Specimens%20of%20Fancy%20Turning%2018.webp`, caption: "Specimens of Fancy Turning — Plate XVIII" },
  { src: `${R2}/Specimens%20of%20Fancy%20Turning%2019.webp`, caption: "Specimens of Fancy Turning — Plate XIX" },
  { src: `${R2}/Specimens%20of%20Fancy%20Turning%2024.webp`, caption: "Specimens of Fancy Turning — Plate XXIV" },
  { src: `${R2}/Specimens%20of%20Fancy%20Turning%2029.webp`, caption: "Specimens of Fancy Turning — Plate XXIX" },
  { src: `${R2}/Specimens%20of%20Fancy%20Turning.webp`,      caption: "Specimens of Fancy Turning — Frontispiece" },
];

function SectionHead({ title }: { title: string }) {
  return (
    <div className="mb-6 border-b border-[var(--line)] pb-3">
      <h2 className="font-serif text-[1.05rem] font-medium leading-snug tracking-[0.01em] text-[var(--ink)] sm:text-[1.15rem]">
        {title}
      </h2>
    </div>
  );
}

function PullQuote({ quote, attr }: { quote: string; attr: string }) {
  return (
    <blockquote className="my-10 rounded-r-xl border-l-[4px] border-[var(--pastel-rose)] bg-[color-mix(in_srgb,var(--pastel-rose)_20%,white)] py-5 pl-6 pr-5">
      <p className="font-serif text-[1.15rem] italic leading-relaxed text-[var(--ink)]">
        &ldquo;{quote}&rdquo;
      </p>
      <p className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-[var(--ink-muted)]">
        — {attr}
      </p>
    </blockquote>
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

function StatsPanel() {
  return (
    <figure className="my-8 grid grid-cols-3 gap-px overflow-hidden rounded-sm border border-[var(--line-soft)] bg-[var(--line-soft)]">
      {[
        { value: "1891", label: "Year of publication" },
        { value: "∞", label: "Theoretically possible forms" },
        { value: "0", label: "Freehand marks" },
      ].map((s) => (
        <div key={s.label} className="flex flex-col items-center gap-2 bg-[var(--surface)] px-3 py-6 text-center">
          <span className="block font-serif text-[2rem] font-medium leading-none text-[var(--ink)]">{s.value}</span>
          <span className="mt-1 font-mono text-[0.58rem] uppercase tracking-[0.08em] text-[var(--ink-muted)]">{s.label}</span>
        </div>
      ))}
    </figure>
  );
}

/** Single gallery image — natural aspect ratio, no click-to-zoom */
function GalleryImage({
  src,
  alt,
  caption,
  priority,
  pastel,
}: {
  src: string;
  alt: string;
  caption: string;
  priority?: boolean;
  pastel: keyof typeof PASTEL;
}) {
  return (
    <figure
      className="overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-card)]"
      style={{ backgroundColor: PASTEL[pastel] }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="block h-auto w-full"
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
      <figcaption className="px-4 py-3 text-center font-mono text-[0.58rem] uppercase tracking-[0.1em] text-[var(--ink-muted)]">
        {caption}
      </figcaption>
    </figure>
  );
}

export function SpecimensFancyTurningArticle() {
  return (
    <UnitCircleSectionReveal>
      <div className="unit-circle-article text-[var(--ink)]">

        {/* ── HEADER ── */}
        <div className="mx-auto max-w-[780px] px-[var(--page-pad)] pb-6 pt-8 text-center sm:pb-8 sm:pt-10">
          <p className="mb-5 font-sans text-[0.62rem] uppercase leading-relaxed tracking-[0.24em] text-[var(--ink-muted)] sm:text-[0.65rem]">
            Mathematics · Craft · Victorian England · 1891
          </p>
          <h1 className="font-serif text-[clamp(2rem,6vw,3.1rem)] font-normal leading-[1.1] tracking-[-0.02em] text-[var(--ink)]">
            The Patterns No Hand Could Have Drawn
          </h1>
          <p className="mx-auto mt-6 max-w-[34rem] border-l-2 border-[var(--ink)] pl-5 text-left text-lg italic leading-relaxed text-[var(--ink-muted)] sm:text-xl">
            Victorian ornamental turning produced spirograph-like geometric forms
            of extraordinary precision — not drawn, not sculpted, but calculated
            by a machine that ran on mathematics. <em>Specimens of Fancy Turning</em>{" "}
            is the catalog of what that machine could prove.
          </p>
          <div className="mx-auto mt-7 h-px w-14 bg-[var(--line)] sm:mt-8" aria-hidden />
        </div>

        <article className="mx-auto max-w-[min(48rem,100%)] px-[var(--page-pad)] pb-20 pt-2 sm:pb-28">

          {/* ── HERO IMAGE ── */}
          <div className="my-10 sm:-mx-8 lg:-mx-16">
            <GalleryImage
              src={HERO}
              alt="Specimens of Fancy Turning — ornamental lathe work, geometric pattern"
              caption="Specimens of Fancy Turning — Plate XII"
              priority
              pastel="rose"
            />
          </div>

          {/* ── INTRO ── */}
          <p className="intro-drop border-b border-[var(--line)] pb-8 text-lg leading-[1.82] text-[var(--ink)] sm:text-xl">
            These are not drawings. No hand traced these arcs. No compass defined
            these curves. The symmetry you are looking at — exact, radial, recursive,
            obsessive — was produced by a lathe. The craftsman set the parameters.
            The machine did the geometry.
          </p>

          <p className="mt-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
            <em>Specimens of Fancy Turning</em> is a Victorian publication that
            documents what was possible on an ornamental turning lathe equipped with
            a geometric chuck — a mechanical apparatus of extraordinary ingenuity
            that attached to the spindle and caused the workpiece to trace compound
            epicyclic paths as the lathe rotated. The resulting forms look, to a
            contemporary eye, like output from a Spirograph or the plots of a
            parametric equation. They are, in essence, both. They are also entirely
            physical objects: turned in ivory, hardwood, and metal, polished and
            exhibited as demonstrations of the practitioner&apos;s mastery.
          </p>

          <p className="mt-5 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
            The Victorian era produced a remarkable overlap between mathematical
            recreation and artisanal craft. The ornamental lathe — descended from the
            rose engines and spiral chucks of seventeenth-century court workshops —
            became the preferred instrument of that overlap. To own one was expensive.
            To operate one well required patience, mechanical aptitude, and a
            working understanding of geometry. The practitioners who mastered it
            formed societies, published catalogs, and exchanged specimens. This book
            is one of those catalogs.
          </p>

          {/* ── IMAGES 1–2 ── */}
          <div className="my-10 flex flex-col gap-4 sm:-mx-8 lg:-mx-16">
            <GalleryImage
              src={IMAGES[0]!.src}
              alt={IMAGES[0]!.caption}
              caption={IMAGES[0]!.caption}
              pastel="peach"
            />
            <GalleryImage
              src={IMAGES[1]!.src}
              alt={IMAGES[1]!.caption}
              caption={IMAGES[1]!.caption}
              pastel="lavender"
            />
          </div>

          {/* ── THE GEOMETRIC CHUCK ── */}
          <div className="mt-12">
            <SectionHead title="The Geometric Chuck" />

            <p className="text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The geometric chuck is a mechanical computer. It consists of a series
              of graduated wheels arranged concentrically — each offset from the last
              by a selectable angle, each rotating at a ratio determined by its gear
              count relative to the wheel below it. When the lathe spindle turns, the
              workpiece traces not a simple circle but a compound path: the sum of
              all those offset rotations simultaneously. The cutting tool, fixed in
              space, records each passage of the workpiece surface as a groove.
              After many revolutions, the accumulated grooves form a pattern.
            </p>

            <p className="mt-5 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The patterns produced this way are mathematically identical to the
              family of curves known as epitrochoids and hypotrochoids — the same
              curves that a Spirograph generates, the same curves that describe the
              orbits of planets in the Ptolemaic model of the solar system, the same
              curves that appear in Fourier analysis as the superposition of rotating
              vectors. The Victorian craftsman did not describe them in those terms.
              He described them as specimens: catalogued, classified, and valued for
              their visual complexity. But the mathematics was there regardless.
            </p>

            <p className="mt-5 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              John Jacob Holtzapffel, whose five-volume <em>Turning and Mechanical
              Manipulation</em> (1843&ndash;1884) remains the definitive technical
              reference for ornamental turning, devoted hundreds of pages to the
              geometric chuck alone — its construction, its adjustment, its range of
              possible outputs. The fourth volume, posthumously completed by his son
              Charles, exhaustively catalogs possible chuck combinations and the
              forms they produce. <em>Specimens of Fancy Turning</em> is the
              visual counterpart: not instruction, but demonstration.
            </p>
          </div>

          <StatsPanel />

          {/* ── IMAGES 3–4 ── */}
          <div className="my-10 flex flex-col gap-4 sm:-mx-8 lg:-mx-16">
            <GalleryImage
              src={IMAGES[2]!.src}
              alt={IMAGES[2]!.caption}
              caption={IMAGES[2]!.caption}
              pastel="sky"
            />
            <GalleryImage
              src={IMAGES[3]!.src}
              alt={IMAGES[3]!.caption}
              caption={IMAGES[3]!.caption}
              pastel="rose"
            />
          </div>

          <PullQuote
            quote="The patterns produced by the geometric chuck are not approximations. Each pass of the cutting tool follows the same path as every other pass. There is no drift, no variation, no human error. The machine is incapable of imprecision."
            attr="J.J. Holtzapffel, Turning and Mechanical Manipulation, Vol. IV"
          />

          {/* ── WHAT THE EYE SEES ── */}
          <div className="mt-12">
            <SectionHead title="What the Eye Sees" />

            <p className="text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              Look at any plate in this catalog for long enough and you begin to feel
              the depth of it — not physical depth, but mathematical depth. The eye
              follows a curve and expects it to close, and it does, but only after
              passing through a complexity that seems, for a moment, unresolvable.
              Then it resolves. The entire form snaps into legibility: a rose window,
              a mandala, a lattice, a thing with a name you don&apos;t quite have.
              And then you notice it is also something else from a different angle.
            </p>

            <p className="mt-5 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              This is not an accident. The geometric chuck is specifically designed
              to produce forms that sit at the edge of perceptual resolution — complex
              enough to reward sustained looking, structured enough to eventually
              yield their order. The craftsman chooses his parameters knowingly.
              The number of petals in the resulting rosette, the degree of their
              interlacement, the depth of the cuts, the secondary pattern left at
              the intersections — all of these follow directly from the arithmetic
              of the gear ratios selected. To produce a particular specimen is to
              solve a geometric problem by selecting the right numbers, then letting
              the machine run.
            </p>
          </div>

          {/* ── IMAGES 5–6 ── */}
          <div className="my-10 flex flex-col gap-4 sm:-mx-8 lg:-mx-16">
            <GalleryImage
              src={IMAGES[4]!.src}
              alt={IMAGES[4]!.caption}
              caption={IMAGES[4]!.caption}
              pastel="peach"
            />
            <GalleryImage
              src={IMAGES[5]!.src}
              alt={IMAGES[5]!.caption}
              caption={IMAGES[5]!.caption}
              pastel="lavender"
            />
          </div>

          {/* ── THE CATALOG AS ARGUMENT ── */}
          <div className="mt-12">
            <SectionHead title="The Catalog as Argument" />

            <p className="text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              Publications like <em>Specimens of Fancy Turning</em> served a specific
              purpose within the ornamental turning community: they demonstrated range.
              Each plate was evidence that the form shown was achievable — that a
              craftsman with the right equipment and sufficient skill could reproduce
              it. The existence of the catalog was simultaneously a challenge and a
              proof. Here is what is possible. Here is the space of forms that the
              discipline commands.
            </p>

            <p className="mt-5 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              In this sense the book operates very much like the{" "}
              <ArticleProseLink href="/articles/billingsley-euclid">
                first English edition of Euclid&apos;s Elements
              </ArticleProseLink>
              {" "}— as a demonstration that certain things can be proven, set down
              for those who follow. The ornamental turner, like the geometer, works
              within strict constraints: the rules of the machine, the properties
              of the material, the logic of the gear ratios. Within those constraints,
              the space of achievable forms is nonetheless vast. The catalog
              charts a portion of that space. It does not exhaust it.
            </p>

            <p className="mt-5 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              There is also something quietly subversive about a crafts publication
              that looks exactly like mathematics. The Victorian art
              establishment drew a firm line between fine art (produced by inspired
              individuals) and decorative art (produced by skilled craftsmen
              following rules). Ornamental turning sat uncomfortably across that line.
              It required genuine skill, genuine knowledge, genuine aesthetic judgment.
              But its outputs were also, in a precise sense, computed results.
              The craftsman&apos;s creativity lay in problem selection, not in
              freehand expression. These specimens are what happens when you apply
              a theorem to ivory.
            </p>
          </div>

          {/* ── IMAGES 7–8 ── */}
          <div className="my-10 flex flex-col gap-4 sm:-mx-8 lg:-mx-16">
            <GalleryImage
              src={IMAGES[6]!.src}
              alt={IMAGES[6]!.caption}
              caption={IMAGES[6]!.caption}
              pastel="sky"
            />
            <GalleryImage
              src={IMAGES[7]!.src}
              alt={IMAGES[7]!.caption}
              caption={IMAGES[7]!.caption}
              pastel="rose"
            />
          </div>

          <Divider />

          {/* ── THE MATERIAL ── */}
          <div className="mt-12">
            <SectionHead title="The Material Problem" />

            <p className="text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              Ivory was the prestige material of ornamental turning. It is dense,
              uniform, and takes a fine cut without tearing. The geometric chuck
              produces forms that the material needs to hold faithfully: thin walls,
              sharp ridges, deep undercuts, latticed structures where the remaining
              material is thinner than a matchstick. Ivory tolerates this. Hardwoods
              — boxwood, ebony, lignum vitae — tolerate it somewhat less. Metal
              tolerates it least. Many of the finest ornamental turning specimens
              are fragile objects. They exist only because ivory is nearly as strong
              in section as it is in bulk, and because the completed specimens were
              treated as display objects, placed under glass, never handled.
            </p>

            <p className="mt-5 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The patterns in this catalog are photographed flat, as two-dimensional
              images. But the original specimens are three-dimensional: turned from a
              disc or a cylinder, with the pattern cut into the face, the edges, or
              both. In person, the depth of cut creates a play of shadow that the
              flat image suppresses. The mathematical structure that is legible in the
              photograph becomes, in the object, also a tactile and optical
              phenomenon. These are objects that reward touch as well as sight.
              The Victorian collector who placed them under glass was preventing
              exactly the engagement the craftsman had designed them for.
            </p>
          </div>

          {/* ── IMAGES 9–10 ── */}
          <div className="my-10 flex flex-col gap-4 sm:-mx-8 lg:-mx-16">
            <GalleryImage
              src={IMAGES[8]!.src}
              alt={IMAGES[8]!.caption}
              caption={IMAGES[8]!.caption}
              pastel="peach"
            />
            <GalleryImage
              src={IMAGES[9]!.src}
              alt={IMAGES[9]!.caption}
              caption={IMAGES[9]!.caption}
              pastel="lavender"
            />
          </div>

          {/* ── WHAT THE MACHINE CANNOT DO ── */}
          <div className="mt-12">
            <SectionHead title="What the Machine Cannot Do" />

            <p className="text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The geometric chuck cannot make a mistake. It cannot make a choice.
              Given a configuration of gear ratios and offsets, it produces exactly
              one pattern, every time, without deviation. This is its power and its
              limitation. The craftsman&apos;s intelligence lies entirely in the
              configuration — in knowing what gear ratios will produce what visual
              result, in having the spatial imagination to predict the output from
              the parameters, in knowing which combinations are worth the cutting time
              and which will produce a form already in the catalog.
            </p>

            <p className="mt-5 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              This places ornamental turning in an unusual epistemological position:
              it is a practice in which all the craft lies in setup and none in
              execution. The actual cutting can be done by anyone who can turn a
              handwheel at consistent speed. The skill is in knowing what to set up.
              This is not so different from programming. The programmer who writes a
              generative algorithm that produces beautiful outputs is doing the same
              thing: all the creativity is in the parameters, the constraints, the
              structure. The machine runs. The machine cannot be wrong. The machine
              cannot be right, either. Only the person who configured it can be either.
            </p>

            <p className="mt-5 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The specimens in this catalog are the output of that process. They are
              beautiful — unmistakably, almost aggressively beautiful — but the
              beauty is not the craftsman&apos;s achievement in the way that a
              painted canvas is a painter&apos;s achievement. The beauty was latent
              in the mathematics. The craftsman found it. That is a different and
              perhaps more interesting thing to have done.
            </p>
          </div>

          {/* ── IMAGES 11–12 ── */}
          <div className="my-10 flex flex-col gap-4 sm:-mx-8 lg:-mx-16">
            <GalleryImage
              src={IMAGES[10]!.src}
              alt={IMAGES[10]!.caption}
              caption={IMAGES[10]!.caption}
              pastel="sky"
            />
            <GalleryImage
              src={IMAGES[11]!.src}
              alt={IMAGES[11]!.caption}
              caption={IMAGES[11]!.caption}
              pastel="rose"
            />
          </div>

          {/* ── THE LAST IMAGE ── */}
          <div className="my-10 sm:-mx-8 lg:-mx-16">
            <GalleryImage
              src={IMAGES[12]!.src}
              alt={IMAGES[12]!.caption}
              caption={IMAGES[12]!.caption}
              pastel="peach"
            />
          </div>

          {/* ── CLOSING ── */}
          <div className="mt-12">
            <SectionHead title="The Space of Possible Forms" />

            <p className="text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              Holtzapffel estimated that his geometric chuck, in its various
              configurations, could produce several thousand distinct patterns.
              In practice, the number is much larger — the number of possible
              gear-ratio combinations is combinatorially vast, and each combination
              produces a unique curve. The catalog you are looking at contains a
              small selection. Each plate was chosen because of its visual quality,
              its technical difficulty, or its novelty within the tradition.
              The vast majority of possible forms were never cut, never documented,
              never seen.
            </p>

            <p className="mt-5 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              This is the strange melancholy of combinatorial art: the space of
              possible works is incomparably larger than the space of actual works.
              Every Spirograph set contains more curves than any child will ever
              draw.{" "}
              <ArticleProseLink href="/articles/billingsley-euclid">
                Euclid&apos;s Elements
              </ArticleProseLink>{" "}
              contains the seeds of theorems that were not proven for two thousand
              years after it was written. The geometric chuck has, implied within its
              mechanism, forms that no one has yet cut — forms that are, in a
              meaningful sense, already determined by the mathematics, waiting only
              for someone to turn the wheel and let the machine find them.
            </p>

            <p className="mt-5 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              <em>Specimens of Fancy Turning</em> is a record of a small number of
              those discoveries. The book is beautiful. The objects it documents are
              more beautiful. But the most interesting thing about both the book and
              the objects is what they imply about a space that neither can contain:
              the full extent of what the mathematics will produce, most of which no
              one will ever see.
            </p>
          </div>

          <Divider />

          {/* ── ARTIST BIO ASIDE ── */}
          <aside
            className="mt-12 rounded-[var(--radius-card)] border border-[var(--line-soft)] p-6"
            style={{ backgroundColor: PASTEL.rose + "33" }}
          >
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              About
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--ink)]">
              <em>Specimens of Fancy Turning</em> is a Victorian-era catalog
              documenting the range of patterns achievable on an ornamental turning
              lathe equipped with a geometric chuck. Ornamental turning was a
              mathematically precise form of craft practiced primarily by gentleman
              amateurs and professional turners in Britain and continental Europe
              throughout the eighteenth and nineteenth centuries. The geometric chuck,
              which produces epicyclic curves by combining concentric offset rotating
              wheels, was the most technically demanding attachment used in the
              discipline. Specimens were typically turned in ivory, boxwood, or metal.
              The tradition survives today in the Society of Ornamental Turners,
              founded in 1948.
            </p>
          </aside>

        </article>
      </div>
    </UnitCircleSectionReveal>
  );
}
