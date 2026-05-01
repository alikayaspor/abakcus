import Image from "next/image";
import { ArticleImageLightbox } from "@/components/articles/article-image-lightbox";
import { ArticleProseLink } from "@/components/articles/article-prose-link";
import { UnitCircleSectionReveal } from "@/components/articles/unit-circle/unit-circle-section-reveal";
import { PASTEL, type PastelId } from "@/data/pastel-palette";

const IMG = {
  hero: "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/Dinara%20Kasko%20Geometrical%20Kinetic%20Tarts%20.jpg",
  two: "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/Dinara%20Kasko%20Geometrical%20Kinetic%20Tarts%202.jpg",
  three:
    "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/Dinara%20Kasko%20Geometrical%20Kinetic%20Tarts%203.jpg",
  four: "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/Dinara%20Kasko%20Geometrical%20Kinetic%20Tarts%204.jpeg",
};

const TARTS = [
  {
    num: "01",
    name: "White chocolate and red currant",
    layers: [
      "Streusel base",
      "Almond cream",
      "Strawberry–red currant confit",
      "White chocolate mousse",
    ],
  },
  {
    num: "02",
    name: "Blackberry and mascarpone",
    layers: [
      "Streusel base",
      "Almond sponge cake",
      "Blackberry–blueberry confit",
      "Blackberry mascarpone mousse",
    ],
  },
  {
    num: "03",
    name: "Cherry and yogurt mousse",
    layers: [
      "Streusel base",
      "Almond sponge cake",
      "Cherry confit",
      "Yogurt mousse",
    ],
  },
  {
    num: "04",
    name: "Valrhona chocolate and raspberry beer",
    layers: [
      "Chocolate streusel",
      "Chocolate sponge with raspberry beer",
      "Raspberry confit",
      "Valrhona chocolate mousse with meringue",
    ],
  },
];

const STEPS = [
  {
    n: "1",
    label: "Drawing to digital file",
    body: "Margulis's kinetic sculpture drawings were translated into coordinate files readable by CNC cutting software. Every blade edge curve was defined separately, with angle tolerances tight enough that a single degree of error would be visible in the final composition.",
  },
  {
    n: "2",
    label: "Casting chocolate sheets",
    body: "Red and white chocolate were poured into large flat sheets and set to the right hardness. Too soft and the CNC blade drags; too hard and the sheet fractures instead of cutting cleanly. The timing was its own technical problem.",
  },
  {
    n: "3",
    label: "CNC cutting at Garage Hub",
    body: "The CNC machine at Garage Hub — a maker space built by machine-obsessed friends — cut each sheet into numbered blade sections. Every piece was labeled. Assembly order was non-negotiable: an out-of-sequence blade collapses the visual logic of the entire composition.",
  },
  {
    n: "4",
    label: "Tart base and flavor layers",
    body: "While the chocolate architecture was being prepared, Kasko built the flavor foundations: streusel, almond sponge, fruit confit, and mousse. The finished body needed to be structurally stable enough to hold the chocolate sculpture without deformation.",
  },
  {
    n: "5",
    label: "Assembly and disappearance",
    body: "The numbered chocolate blades were assembled in sequence, reconstructing Margulis's geometry in edible form. Then it was eaten. The sculpture ceased to exist — which was the project completing itself, not ending.",
  },
];

function SectionHead({ num, title }: { num: string; title: React.ReactNode }) {
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

function ArticleFigure({
  src,
  alt,
  caption,
  priority,
  pastel,
}: {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  pastel: PastelId;
}) {
  return (
    <figure
      className="my-10 overflow-hidden rounded-[var(--radius-card)] p-3 shadow-[var(--shadow-card)] sm:p-4"
      style={{ backgroundColor: PASTEL[pastel] }}
    >
      <ArticleImageLightbox src={src} alt={alt} caption={caption}>
        <div className="relative aspect-[3/2] w-full overflow-hidden rounded-xl bg-white/55">
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
      {caption && (
        <figcaption className="mt-4 px-1 text-center font-serif text-sm italic leading-snug text-[var(--ink)]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function PullQuote({
  quote,
  attr,
}: {
  quote: string;
  attr: string;
}) {
  return (
    <blockquote className="my-10 rounded-r-xl border-l-[4px] border-[#c8922a] bg-[var(--pastel-peach)] py-5 pl-6 pr-5">
      <p className="font-serif text-[1.2rem] italic leading-relaxed text-[var(--ink)]">
        &ldquo;{quote}&rdquo;
      </p>
      <p className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-[var(--ink-muted)]">
        — {attr}
      </p>
    </blockquote>
  );
}

export function DinaraKaskoArticle() {
  return (
    <UnitCircleSectionReveal>
      <div className="unit-circle-article text-[var(--ink)]">
        {/* ── HEADER ── */}
        <div className="mx-auto max-w-[780px] px-[var(--page-pad)] pb-6 pt-8 text-center sm:pb-8 sm:pt-10">
          <p className="mb-5 font-sans text-[0.62rem] uppercase leading-relaxed tracking-[0.24em] text-[var(--ink-muted)] sm:text-[0.65rem]">
            Design · Mathematics · Food · 2017
          </p>
          <h1 className="font-serif text-[clamp(2rem,6vw,3.1rem)] font-normal leading-[1.1] tracking-[-0.02em] text-[var(--ink)]">
            Dinara Kasko built edible sculpture.
            <br />
            Then served it.
          </h1>
          <p className="mx-auto mt-6 max-w-[34rem] border-l-2 border-[var(--ink)] pl-5 text-left text-lg italic leading-relaxed text-[var(--ink-muted)] sm:text-xl">
            Ukrainian pastry chef and architect Dinara Kasko collaborated with
            Miami artist José Margulis to turn kinetic sculpture into four edible
            tarts — CNC-cut chocolate blades, numbered and assembled in sequence,
            then eaten. The destruction was the point.
          </p>
          <div
            className="mx-auto mt-7 h-px w-14 bg-[var(--line)] sm:mt-8"
            aria-hidden
          />
        </div>

        <article className="mx-auto max-w-[min(48rem,100%)] px-[var(--page-pad)] pb-20 pt-2 sm:pb-28">
          {/* ── INTRO ── */}
          <p className="intro-drop border-b border-[var(--line)] pb-8 text-lg leading-[1.82] text-[var(--ink)] sm:text-xl">
            Kasko&apos;s approach to pastry did not come from a recipe book but
            from an architecture school drawing table. Trained in architecture
            and design in Ukraine — and later working as a 3D visualizer — she
            never stopped watching how surfaces break, how geometric forms hold
            light, how volume shifts with a change in viewpoint. The difference,
            eventually, was that she was using chocolate instead of plaster, and
            a CNC cutting machine instead of a drafting pen.
          </p>

          <p className="mt-6 text-sm leading-relaxed text-[var(--ink-muted)]">
            The project fits naturally alongside other Abakcus pieces that find
            rigorous mathematics in unexpected objects — from{" "}
            <ArticleProseLink href="/articles/pringles">
              the hyperbolic paraboloid hiding inside a Pringle
            </ArticleProseLink>{" "}
            to{" "}
            <ArticleProseLink href="/books/pasta-by-design">
              George Legendre&apos;s parametric equations for 92 pasta shapes
            </ArticleProseLink>
            . Here the geometry is more immediate: you can see it, then you eat
            it, then it is gone.
          </p>

          <ArticleFigure
            src={IMG.hero}
            alt="Dinara Kasko's geometrical kinetic tarts — CNC-cut chocolate blades assembled into kinetic sculpture on top of a tart"
            caption="One of four tarts from the kinetic series — the chocolate blades are numbered and assembled in exact sequence."
            priority
            pastel="rose"
          />

          {/* ── SECTION 01 ── */}
          <section data-uc-section className="mt-14">
            <SectionHead
              num="01"
              title="An installation-performance in a pastry kitchen"
            />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              This project was produced for a new issue of <em>SoGood Magazine</em>{" "}
              and came out of a collaboration with Miami-based artist José
              Margulis, whose sculptural practice involves stacking colorful
              plastic sheets into forms that shift depending on the viewer&apos;s
              angle. Kasko took those same spatial principles and made them
              edible. Four tarts. Four geometries. Four different flavors. Every
              element of Margulis&apos;s process — the numbering, the sequencing,
              the angle tolerances — was preserved, but now in chocolate.
            </p>

            <PullQuote
              quote="It had to be an installation-performance where the art was created by José and then transformed by me into an edible piece of art which would be later consumed — thus disappear."
              attr="Dinara Kasko"
            />

            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              That word — <em>disappear</em> — is doing a lot of work in how
              Kasko frames the project. Margulis&apos;s plastic sheets are
              permanent objects; they sit in galleries, they travel, they
              accumulate exhibition histories. The chocolate versions had an
              expiration date measured in minutes. The elaborateness of the
              construction was matched only by the completeness of its
              destruction. This is not incidental. It is the point.
            </p>

            {/* ── FACT BOX ── */}
            <div className="my-10 rounded-2xl bg-[var(--ink)] px-6 py-8 text-white shadow-[var(--shadow-card)]">
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.25em] text-[#c8922a]">
                Project Coordinates
              </p>
              <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-4">
                {[
                  { num: "4", label: "Distinct geometric tart designs" },
                  { num: "3", label: "Disciplines: sculpture, engineering, pastry" },
                  { num: "2017", label: "Produced for SoGood Magazine" },
                  { num: "∞", label: "Layer combinations — according to Margulis" },
                ].map((item) => (
                  <div key={item.num} className="border-t border-white/10 pt-4">
                    <p className="font-serif text-[2.6rem] font-bold leading-none text-[#c8922a]">
                      {item.num}
                    </p>
                    <p className="mt-2 font-serif text-[0.85rem] leading-snug text-white/55">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── SECTION 02 ── */}
          <section data-uc-section className="mt-14">
            <SectionHead
              num="02"
              title={
                <>
                  The anatomy of four tarts —{" "}
                  <em>color previews flavor</em>
                </>
              }
            />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Each tart operates on two separate architectural decisions: the
              geometric surface layer in chocolate and the flavor stack beneath
              it. Color previews flavor — red chocolate signals raspberry or
              blackberry; white signals vanilla cream. This color-taste
              correspondence is not accidental. Kasko is thinking about what it
              means to <em>read</em> a dessert before eating it.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The same principle applies in{" "}
              <ArticleProseLink href="/articles/fibonacci-shelf">
                Peng Wang&apos;s Fibonacci shelf
              </ArticleProseLink>{" "}
              — form encodes information before function delivers it. The
              geometry makes a promise. The structure is expected to honor it.
            </p>

            {/* ── TART CARDS ── */}
            <div className="my-10 overflow-hidden rounded-2xl bg-[var(--ink)] shadow-[var(--shadow-card)]">
              <p className="px-6 pt-6 font-mono text-[0.62rem] uppercase tracking-[0.25em] text-[#c8922a]">
                Four Tarts — Flavor Architecture
              </p>
              <div className="mt-4 grid grid-cols-1 divide-y divide-white/8 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                {TARTS.map((tart) => (
                  <div key={tart.num} className="px-6 py-6">
                    <span className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-[#c8922a]">
                      Tart № {tart.num}
                    </span>
                    <p className="mt-2 font-serif italic text-white">
                      {tart.name}
                    </p>
                    <ul className="mt-3 space-y-0.5">
                      {tart.layers.map((layer) => (
                        <li
                          key={layer}
                          className="relative pl-4 font-serif text-[0.88rem] text-white/55"
                        >
                          <span
                            className="absolute left-0 text-[#c8922a]/50"
                            aria-hidden
                          >
                            —
                          </span>
                          {layer}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <ArticleFigure
            src={IMG.two}
            alt="Close-up of the CNC-cut chocolate blade construction — numbered geometric pieces before assembly"
            caption="CNC-cut chocolate blades before assembly — each piece is numbered. Sequence is non-negotiable."
            pastel="peach"
          />

          {/* ── SECTION 03 ── */}
          <section data-uc-section className="mt-14">
            <SectionHead
              num="03"
              title={
                <>
                  José Margulis —{" "}
                  <em>geometry in infinite variation</em>
                </>
              }
            />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Margulis builds his sculptures by stacking colorful plastic,
              aluminum, and acrylic sheets so that the visual pattern changes
              entirely as the viewer shifts position. From one angle: a mountain
              ridge. Take five steps sideways and it becomes something else. This
              is kinetic art without motors — the motion exists in perception,
              not in the object itself. A technique sometimes called{" "}
              <em>virtual movement</em>: the object is still, the viewer moves,
              the form changes.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Kasko studied his original drawings before attempting a translation
              into chocolate. She was not only trying to reproduce the form; she
              was trying to preserve the perceptual shift — the way a slight
              change in viewing angle would reveal a new configuration. This
              required precise calculation of blade angles: one degree off and
              the illusion dissolves.
            </p>

            <PullQuote
              quote="It's a dream collaboration project. Can't think of a better cross-discipline one."
              attr="José Margulis"
            />

            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The logic is reminiscent of{" "}
              <ArticleProseLink href="/articles/billingsley-euclid">
                Henry Billingsley&apos;s 1570 paper fold-out solids
              </ArticleProseLink>{" "}
              — flat sheets engineered to become three-dimensional objects. The
              medium changes across four and a half centuries; the instinct to
              make geometry tangible does not.
            </p>
          </section>

          <ArticleFigure
            src={IMG.three}
            alt="Side view of a kinetic tart showing how chocolate blade angles create different visual patterns"
            caption="The angle-dependent visual effect — the geometry shifts depending on where you stand."
            pastel="lavender"
          />

          {/* ── SECTION 04 ── */}
          <section data-uc-section className="mt-14">
            <SectionHead
              num="04"
              title={<>From workshop <em>to table</em></>}
            />
            <p className="mb-8 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The technical side involved a sculptor, an engineer, and a pastry
              chef — each an expert in their domain, and the project requiring
              all three. Kasko&apos;s friends at Garage Hub, a local maker space
              built by machine enthusiasts, handled the CNC cutting.
            </p>

            {/* ── PROCESS STEPS ── */}
            <div className="-mx-1 space-y-0">
              {STEPS.map((step) => (
                <div
                  key={step.n}
                  className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-[var(--line)] py-5 last:border-b"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--ink)] font-serif text-[1rem] font-bold text-[#c8922a]">
                    {step.n}
                  </div>
                  <div>
                    <p className="font-serif font-bold text-[var(--ink)]">
                      {step.label}
                    </p>
                    <p className="mt-1.5 text-[0.92rem] leading-relaxed text-[var(--ink-muted)]">
                      {step.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* ── YOUTUBE VIDEO ── */}
            <figure className="my-10 overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
              <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                <iframe
                  src="https://www.youtube.com/embed/vR8uj5J75ac"
                  className="absolute inset-0 h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Dinara Kasko — Kinetic Tart Production Process"
                  loading="lazy"
                />
              </div>
              <figcaption className="bg-[var(--ink)] px-5 py-3 text-center font-mono text-[0.6rem] uppercase tracking-[0.12em] text-[#c8922a]">
                Kasko and the team at Garage Hub — CNC cutting chocolate sheets
              </figcaption>
            </figure>
          </section>

          {/* ── SECTION 05 ── */}
          <section data-uc-section className="mt-14">
            <SectionHead
              num="05"
              title={<>Why does <em>mathematics</em> taste good?</>}
            />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              In Kasko&apos;s framework, aesthetics and flavor have equal
              standing. Form is a kind of content: the geometry of the surface
              carries information about what is underneath, and that information
              should be accurate. The hard angular edges of the chocolate blades
              are in deliberate contrast to the yielding softness of the mousse
              below. Architecture&apos;s fundamental tension — structure must be
              both functional and formally honest — migrates into pastry.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              In other projects, Kasko uses Grasshopper — a visual algorithm
              editor built on top of Rhino, widely used in parametric
              architectural design — to generate molds algorithmically. The
              kinetic tart series uses a different logic: Margulis&apos;s organic
              drawings are the raw input, not a mathematical function. Forms that
              came from an artist&apos;s hand are transferred into chocolate via
              the precision of a cutting machine. That gap — between the
              hand-drawn and the numerically exact — is where the project lives.
            </p>

            {/* ── LAYER DIAGRAM SVG ── */}
            <figure
              className="my-10 overflow-hidden rounded-2xl p-6 shadow-[var(--shadow-soft)]"
              style={{ backgroundColor: PASTEL.peach }}
              aria-label="Tart № 02 layer cross-section diagram"
            >
              <p className="mb-6 text-center font-mono text-[0.62rem] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
                Tart № 02 — Layer Cross-Section
              </p>
              <svg
                viewBox="0 0 640 260"
                className="mx-auto block w-full max-w-[640px]"
                style={{ fontFamily: "'DM Mono', ui-monospace, monospace" }}
                role="img"
                aria-label="Cross-section showing chocolate blades, blackberry mascarpone mousse, blackberry-blueberry confit, almond sponge cake, and streusel base"
              >
                <defs>
                  <clipPath id="blade-clip">
                    <rect x="40" y="8" width="560" height="90" />
                  </clipPath>
                </defs>
                {/* Chocolate blades */}
                <g clipPath="url(#blade-clip)" fill="none" stroke="#c8922a" strokeWidth="1.2" opacity="0.75">
                  {[60,95,127,162,197,232,267,302,337,372,407,442,477,512,547].map((x, i) => {
                    const tops = [20,28,14,24,12,26,16,22,14,25,18,26,15,23,18];
                    const top = tops[i];
                    return (
                      <path
                        key={x}
                        d={`M${x},97 C${x-7},${97-30} ${x+7},${97-55} ${x+15},${top} C${x+8},${top+20} ${x-5},${97-30} ${x},97`}
                      />
                    );
                  })}
                </g>
                {/* Blade silhouette fill */}
                <path
                  d="M50,97 Q78,18 105,55 Q130,30 155,14 Q178,25 205,12 Q228,28 255,18 Q278,32 303,22 Q328,14 355,26 Q378,36 403,22 Q428,18 455,32 Q478,15 503,25 Q528,38 553,22 Q572,32 590,97 Z"
                  fill="#c8922a"
                  fillOpacity="0.10"
                  stroke="#c8922a"
                  strokeWidth="1.5"
                />
                {/* Mousse layer */}
                <rect x="50" y="97" width="540" height="55" fill="var(--pastel-rose)" fillOpacity="0.9" />
                <text x="320" y="129" fontSize="8.5" fill="var(--ink)" letterSpacing="1.5" textAnchor="middle">BLACKBERRY – MASCARPONE MOUSSE</text>
                {/* Confit layer */}
                <rect x="50" y="152" width="540" height="22" fill="#212324" fillOpacity="0.85" />
                <text x="320" y="167" fontSize="7.5" fill="#c8922a" letterSpacing="1.5" textAnchor="middle">BLACKBERRY – BLUEBERRY CONFIT</text>
                {/* Sponge layer */}
                <rect x="50" y="174" width="540" height="30" fill="var(--pastel-peach)" fillOpacity="0.9" />
                <text x="320" y="193" fontSize="8.5" fill="var(--ink)" letterSpacing="1.5" textAnchor="middle">ALMOND SPONGE CAKE</text>
                {/* Streusel layer */}
                <rect x="50" y="204" width="540" height="28" fill="#212324" fillOpacity="0.75" />
                <text x="320" y="222" fontSize="8.5" fill="#c8922a" letterSpacing="1.5" textAnchor="middle">STREUSEL</text>
                {/* Labels */}
                {[
                  [42, 52, "Chocolate"],
                  [42, 124, "Mousse"],
                  [42, 163, "Confit"],
                  [42, 189, "Sponge"],
                  [42, 218, "Base"],
                ].map(([lx, ly, label]) => (
                  <g key={String(label)}>
                    <line x1={Number(lx)} y1={Number(ly)} x2="14" y2={Number(ly)} stroke="#676767" strokeWidth="0.8" />
                    <text x="11" y={Number(ly) + 3} fontSize="7" fill="#676767" textAnchor="end">
                      {String(label)}
                    </text>
                  </g>
                ))}
              </svg>
              <figcaption className="mt-4 text-center font-mono text-[0.62rem] text-[var(--ink-muted)]">
                Tart № 02 — blackberry and mascarpone. Five structural layers beneath the chocolate architecture.
              </figcaption>
            </figure>

            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              What Kasko ultimately wants, she has said, is to expand the
              observer&apos;s definition of what a cake can be — through
              appearance first, through taste second. The appearance
              doesn&apos;t just decorate. It makes a claim. And the flavor is
              expected to honor it.
            </p>
          </section>

          <ArticleFigure
            src={IMG.four}
            alt="Final assembled kinetic tart with chocolate blade sculpture on top — ready to be served"
            caption="The completed tart — assembled, admired, and then eaten. Photographs are the only evidence it existed."
            pastel="lime"
          />

          {/* ── SECTION 06 ── */}
          <section data-uc-section className="mt-14">
            <SectionHead
              num="06"
              title={<>What, exactly, <em>was eaten?</em></>}
            />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The tarts were eaten. But the way Kasko narrates the act makes the
              question genuinely uncertain. Was it sculpture? Was it a spatial
              argument rendered in chocolate? Was it a demonstration that
              permanence is not a requirement for significance?
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Even asking the question shows something about where pastry is
              going as a discipline. Kasko, by making Margulis&apos;s abstract
              geometry into something with nutritional value, punctures the
              assumption that artworks exist only to be looked at. Consumption,
              here, is not a loss of value — it is the completion of the
              project.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              What remains are photographs. And the photographs are the only
              evidence that something this exact ever existed.
            </p>

            {/* ── AUTHOR NOTE ── */}
            <div className="mt-14 grid grid-cols-[auto_1fr] gap-5 rounded-2xl bg-[var(--pastel-rose)] p-6 shadow-[var(--shadow-soft)]">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[var(--ink)] font-serif text-[1.1rem] italic text-[#c8922a]">
                DK
              </div>
              <div>
                <p className="font-serif font-bold leading-snug text-[var(--ink)]">
                  Dinara Kasko
                </p>
                <p className="mt-0.5 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
                  Pastry Chef · Architect · 3D Visualizer · Ukraine
                </p>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-[var(--ink-muted)]">
                  Trained as an architect and interior designer in Kharkov
                  before shifting to pastry. Uses Grasshopper, Rhino, and
                  3D-printed molds to generate forms not possible through
                  traditional confectionery methods. Her work has appeared in
                  over 150 international publications. The kinetic tart series
                  was produced for{" "}
                  <em>SoGood Magazine</em> in collaboration with
                  Miami-based kinetic sculptor José Margulis.
                </p>
              </div>
            </div>

            {/* ── SOURCE NOTE ── */}
            <p className="mt-8 font-mono text-[0.6rem] uppercase tracking-[0.15em] text-[var(--ink-muted)]">
              Source:{" "}
              <a
                href="https://dinarakasko.com/posts"
                target="_blank"
                rel="noopener noreferrer"
                className="article-euclid-link normal-case"
              >
                dinarakasko.com
              </a>
            </p>
          </section>
        </article>
      </div>
    </UnitCircleSectionReveal>
  );
}
