import type { ReactNode } from "react";
import { Fragment } from "react";
import { ArticleImageLightbox } from "@/components/articles/article-image-lightbox";
import { ArticleProseLink } from "@/components/articles/article-prose-link";
import { UnitCircleSectionReveal } from "@/components/articles/unit-circle/unit-circle-section-reveal";
import { PASTEL } from "@/data/pastel-palette";

const R2 = "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev";
const IMG = {
  hero: `${R2}/Kenneth%20Snelson%E2%80%99s%20Needle%20Tower.jpg`,
  img2: `${R2}/Kenneth%20Snelson%E2%80%99s%20Needle%20Tower%202.webp`,
  img3: `${R2}/Kenneth%20Snelson%E2%80%99s%20Needle%20Tower%203.webp`,
  img4: `${R2}/Kenneth%20Snelson%E2%80%99s%20Needle%20Tower%204.webp`,
  img5: `${R2}/Kenneth%20Snelson%E2%80%99s%20Needle%20Tower%205.jpg`,
};

/* ── SECTION HEAD ── */
function SectionHead({ title }: { title: string }) {
  return (
    <div className="mb-6 border-b border-[var(--line)] pb-3">
      <h2 className="font-serif text-[1.05rem] font-medium leading-snug tracking-[0.01em] text-[var(--ink)] sm:text-[1.15rem]">
        {title}
      </h2>
    </div>
  );
}

/* ── ARTICLE FIGURE ── */
function ArticleFigure({
  src,
  alt,
  caption,
  priority,
  pastel,
  credit,
}: {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  pastel: keyof typeof PASTEL;
  credit?: string;
}) {
  return (
    <figure
      className="my-10 overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-card)] sm:-mx-8 lg:-mx-16"
      style={{ backgroundColor: PASTEL[pastel] }}
    >
      <ArticleImageLightbox src={src} alt={alt} caption={caption}>
        <div className="w-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            className="mx-auto block h-auto w-full transition-transform duration-500 group-hover:scale-[1.015]"
            loading={priority ? "eager" : "lazy"}
            decoding="async"
          />
        </div>
      </ArticleImageLightbox>
      {(caption || credit) && (
        <div className="px-4 pb-4 pt-3 text-center">
          {caption && (
            <p className="font-serif text-sm italic leading-snug text-[var(--ink)]">
              {caption}
            </p>
          )}
          {credit && (
            <p className="mt-1 font-mono text-[0.55rem] uppercase tracking-[0.1em] text-[var(--ink-muted)]">
              {credit}
            </p>
          )}
        </div>
      )}
    </figure>
  );
}

/* ── STAT STRIP ── */
function StatStrip() {
  return (
    <figure className="my-10 grid grid-cols-3 gap-px overflow-hidden rounded-[var(--radius-card)] border border-[var(--line-soft)] bg-[var(--ink)] shadow-[var(--shadow-card)] sm:-mx-8 lg:-mx-16">
      {[
        { value: "60", label: "feet tall" },
        { value: "14″", label: "ground contact" },
        { value: "0", label: "tubes touching" },
      ].map((s) => (
        <div
          key={s.label}
          className="flex flex-col items-center gap-2 bg-[var(--ink)] px-4 py-8 text-center"
        >
          <span className="block font-mono text-[2rem] font-light leading-none text-[#e8e0d4]">
            {s.value}
          </span>
          <span className="mt-1 font-mono text-[0.56rem] uppercase tracking-[0.12em] text-[#8c7a62]">
            {s.label}
          </span>
        </div>
      ))}
    </figure>
  );
}

/* ── TENSEGRITY SVG DIAGRAM ── */
function TensegrityDiagram() {
  return (
    <figure className="my-10 overflow-hidden rounded-[var(--radius-card)] border border-[var(--line-soft)] bg-[#f0ece4] shadow-[var(--shadow-card)] sm:-mx-8 lg:-mx-16">
      <div className="flex flex-col items-center gap-3 px-6 py-8 sm:px-10">
        <svg
          viewBox="0 0 500 320"
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto w-full max-w-[500px]"
          aria-label="Two consecutive tensegrity layers: thick lines are compression tubes, dashed lines are tension cables, dots mark connection nodes"
        >
          <defs>
            <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill="#8c7a62" />
            </marker>
          </defs>

          {/* Layer labels */}
          <text x="30" y="60" fontFamily="'DM Mono', monospace" fontSize="9" fill="#8c7a62" letterSpacing="1">LAYER N+1  (rotated 60°)</text>
          <text x="30" y="220" fontFamily="'DM Mono', monospace" fontSize="9" fill="#8c7a62" letterSpacing="1">LAYER N</text>

          {/* Layer N: three tubes (compression) */}
          <line x1="190" y1="240" x2="270" y2="280" stroke="#3d3530" strokeWidth="5" strokeLinecap="round" />
          <line x1="310" y1="240" x2="230" y2="280" stroke="#3d3530" strokeWidth="5" strokeLinecap="round" />
          <line x1="175" y1="268" x2="325" y2="268" stroke="#3d3530" strokeWidth="5" strokeLinecap="round" />

          {/* Node dots layer N */}
          <circle cx="190" cy="240" r="5" fill="#8b4513" />
          <circle cx="310" cy="240" r="5" fill="#8b4513" />
          <circle cx="175" cy="268" r="5" fill="#8b4513" />
          <circle cx="325" cy="268" r="5" fill="#8b4513" />
          <circle cx="230" cy="280" r="5" fill="#8b4513" />
          <circle cx="270" cy="280" r="5" fill="#8b4513" />

          {/* Layer N+1: three tubes (rotated) */}
          <line x1="200" y1="80" x2="240" y2="48" stroke="#3d3530" strokeWidth="5" strokeLinecap="round" />
          <line x1="300" y1="80" x2="260" y2="48" stroke="#3d3530" strokeWidth="5" strokeLinecap="round" />
          <line x1="185" y1="62" x2="315" y2="62" stroke="#3d3530" strokeWidth="5" strokeLinecap="round" />

          {/* Node dots layer N+1 */}
          <circle cx="200" cy="80" r="5" fill="#8b4513" />
          <circle cx="300" cy="80" r="5" fill="#8b4513" />
          <circle cx="185" cy="62" r="5" fill="#8b4513" />
          <circle cx="315" cy="62" r="5" fill="#8b4513" />
          <circle cx="240" cy="48" r="5" fill="#8b4513" />
          <circle cx="260" cy="48" r="5" fill="#8b4513" />

          {/* Tension cables (thin dashed) connecting layers */}
          <line x1="190" y1="240" x2="200" y2="80" stroke="#8c7a62" strokeWidth="1" strokeDasharray="4,3" />
          <line x1="310" y1="240" x2="300" y2="80" stroke="#8c7a62" strokeWidth="1" strokeDasharray="4,3" />
          <line x1="230" y1="280" x2="240" y2="48" stroke="#8c7a62" strokeWidth="1" strokeDasharray="4,3" />
          <line x1="270" y1="280" x2="260" y2="48" stroke="#8c7a62" strokeWidth="1" strokeDasharray="4,3" />
          <line x1="175" y1="268" x2="185" y2="62" stroke="#8c7a62" strokeWidth="1" strokeDasharray="4,3" />
          <line x1="325" y1="268" x2="315" y2="62" stroke="#8c7a62" strokeWidth="1" strokeDasharray="4,3" />

          {/* Cross-cables within layers */}
          <line x1="190" y1="240" x2="325" y2="268" stroke="#c4b49a" strokeWidth="0.8" strokeDasharray="3,3" />
          <line x1="310" y1="240" x2="175" y2="268" stroke="#c4b49a" strokeWidth="0.8" strokeDasharray="3,3" />
          <line x1="270" y1="280" x2="175" y2="268" stroke="#c4b49a" strokeWidth="0.8" strokeDasharray="3,3" />

          {/* Legend */}
          <line x1="360" y1="170" x2="400" y2="170" stroke="#3d3530" strokeWidth="5" strokeLinecap="round" />
          <text x="408" y="174" fontFamily="'DM Mono', monospace" fontSize="9" fill="#3d3530">compression</text>
          <line x1="360" y1="190" x2="400" y2="190" stroke="#8c7a62" strokeWidth="1" strokeDasharray="4,3" />
          <text x="408" y="194" fontFamily="'DM Mono', monospace" fontSize="9" fill="#8c7a62">tension</text>
          <circle cx="380" cy="210" r="4" fill="#8b4513" />
          <text x="408" y="214" fontFamily="'DM Mono', monospace" fontSize="9" fill="#8b4513">node</text>
        </svg>
      </div>
      <figcaption className="border-t border-[var(--line-soft)] px-6 py-3 text-center font-mono text-[0.58rem] uppercase tracking-[0.1em] text-[var(--ink-muted)]">
        Two consecutive tensegrity layers · tubes do not touch · alternating rotation produces six-fold symmetry
      </figcaption>
    </figure>
  );
}

/* ── PULL QUOTE ── */
function PullQuote({ quote, attr }: { quote: string; attr: string }) {
  return (
    <blockquote className="my-10 rounded-r-xl border-l-[4px] border-[var(--pastel-peach)] bg-[color-mix(in_srgb,var(--pastel-peach)_30%,white)] py-5 pl-6 pr-5">
      <p className="font-serif text-[1.05rem] italic leading-relaxed text-[var(--ink)]">
        &ldquo;{quote}&rdquo;
      </p>
      <p className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-[var(--ink-muted)]">
        — {attr}
      </p>
    </blockquote>
  );
}

/* ── ASIDE NOTE ── */
function AsideNote({ children }: { children: ReactNode }) {
  return (
    <aside className="my-8 border-l-2 border-[var(--line)] py-1 pl-5">
      <p className="text-[0.88rem] italic leading-relaxed text-[var(--ink-muted)]">
        {children}
      </p>
    </aside>
  );
}

/* ── VIDEO EMBED ── */
function VideoEmbed({ id, title, caption }: { id: string; title: string; caption: string }) {
  return (
    <figure className="my-10 overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-card)] sm:-mx-8 lg:-mx-16">
      <div className="relative h-0 overflow-hidden bg-[var(--ink)]" style={{ paddingBottom: "56.25%" }}>
        <iframe
          className="absolute inset-0 h-full w-full border-0"
          src={`https://www.youtube.com/embed/${id}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <figcaption className="border-t border-[var(--line-soft)] bg-[var(--surface)] px-4 py-3 text-right font-mono text-[0.56rem] uppercase tracking-[0.1em] text-[var(--ink-muted)]">
        {caption}
      </figcaption>
    </figure>
  );
}

/* ── OBJECT DETAILS ── */
function ObjectDetails() {
  const rows: [string, ReactNode][] = [
    ["Artist", "Kenneth Snelson (American, 1927–2016)"],
    ["Title", <em key="t">Needle Tower</em>],
    ["Year", "1968"],
    ["Material", "Aluminum tubes, stainless steel cables"],
    ["Height", "26.5 m (approx. 60 ft)"],
    ["Location", "Hirshhorn Museum and Sculpture Garden, Washington, D.C."],
    ["Acquired", "Gift of Joseph Hirshhorn, 1974"],
  ];
  return (
    <figure className="my-10 overflow-hidden rounded-[var(--radius-card)] border border-[var(--line-soft)] bg-[var(--surface)] shadow-[var(--shadow-card)]">
      <p className="border-b border-[var(--line-soft)] px-5 py-3 font-mono text-[0.6rem] uppercase tracking-[0.15em] text-[var(--ink-muted)]">
        Object Information
      </p>
      <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 px-5 py-5">
        {rows.map(([dt, dd]) => (
          <Fragment key={String(dt)}>
            <dt className="font-mono text-[0.62rem] uppercase tracking-[0.1em] text-[var(--ink-muted)] self-baseline pt-[0.15rem]">
              {dt}
            </dt>
            <dd className="font-serif text-[0.95rem] leading-snug text-[var(--ink)]">
              {dd}
            </dd>
          </Fragment>
        ))}
      </dl>
    </figure>
  );
}

/* ── MAIN ARTICLE ── */
export function NeedleTowerArticle() {
  return (
    <UnitCircleSectionReveal>
      <div className="unit-circle-article text-[var(--ink)]">

        {/* ── HEADER ── */}
        <div className="mx-auto max-w-[780px] px-[var(--page-pad)] pb-6 pt-8 text-center sm:pb-8 sm:pt-10">
          <p className="mb-5 font-sans text-[0.62rem] uppercase leading-relaxed tracking-[0.24em] text-[var(--ink-muted)] sm:text-[0.65rem]">
            Sculpture &amp; Mathematics · Kenneth Snelson · 1968
          </p>
          <h1 className="font-serif text-[clamp(2rem,6vw,3.1rem)] font-normal leading-[1.1] tracking-[-0.02em] text-[var(--ink)]">
            Kenneth Snelson&apos;s Needle Tower: 60 Feet, Zero Contact
          </h1>
          <p className="mx-auto mt-6 max-w-[34rem] border-l-2 border-[var(--ink)] pl-5 text-left text-lg italic leading-relaxed text-[var(--ink-muted)] sm:text-xl">
            Kenneth Snelson&apos;s <em>Needle Tower</em> stands 60 feet tall on
            14 inches of ground contact. No aluminum tube inside it touches
            another aluminum tube. The whole thing holds up because of what
            isn&apos;t there.
          </p>
          <div className="mx-auto mt-7 h-px w-14 bg-[var(--line)] sm:mt-8" aria-hidden />
        </div>

        <article className="mx-auto max-w-[min(48rem,100%)] px-[var(--page-pad)] pb-20 pt-2 sm:pb-28">

          {/* ── HERO IMAGE ── */}
          <ArticleFigure
            src={IMG.hero}
            alt="Kenneth Snelson's Needle Tower at the Hirshhorn Museum, Washington D.C."
            priority
            pastel="peach"
          />

          {/* ── INTRO ── */}
          <p className="intro-drop border-b border-[var(--line)] pb-8 text-lg leading-[1.82] text-[var(--ink)] sm:text-xl">
            The tower has been standing outside the Hirshhorn Museum in
            Washington, D.C. since 1968. It tapers as it rises, each layer of
            tubes slightly smaller than the last, until at a certain height the
            structure simply appears to dissolve into the sky. People who walk
            past it on the way from the Air and Space Museum stop. The question
            they ask is always the same: how does that stay up?
          </p>

          <p className="mt-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
            The answer is tensegrity — a word Snelson&apos;s teacher Buckminster
            Fuller coined from &ldquo;tension&rdquo; and &ldquo;integrity,&rdquo; though Snelson himself
            preferred a different term: floating compression. The tubes push
            outward. The cables pull inward. Neither element is connected to a
            like element. Every tube floats, suspended in a network of wires
            that hold it precisely where the geometry requires it to be. Remove
            one cable and the whole system redistributes force. The structure
            doesn&apos;t have weak points in the conventional sense — it has a global
            equilibrium that either holds or doesn&apos;t.
          </p>

          {/* ── STAT STRIP ── */}
          <StatStrip />

          {/* ── HOW A LAYER WORKS ── */}
          <div className="mt-12">
            <SectionHead title="How a Layer Works" />

            <p className="text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              Each level of the tower is built from three aluminum tubes
              arranged symmetrically and held by cables threaded through their
              ends. Three is not an arbitrary number — it is the minimum required
              to create a stable closed system under these constraints. Two tubes
              would collapse into a plane; four would be overconstrained. Three,
              arranged at 120° to each other and connected to the layer above
              and below, gives the geometry its rigidity.
            </p>

            <p className="mt-5 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              Successive layers alternate direction: one set of three rotates
              clockwise, the next counterclockwise. This is what produces the
              six-pointed star visible when you stand underneath and look up.
              Snelson did not design the star. It is a consequence of the
              construction — the geometry outputs it, unsolicited.
            </p>
          </div>

          {/* ── DIAGRAM ── */}
          <TensegrityDiagram />

          {/* ── IMAGE 2 ── */}
          <ArticleFigure
            src={IMG.img2}
            alt="Detail of Needle Tower tensegrity structure, aluminum tubes and steel cables"
            caption="Detail — aluminum tubes under compression, suspended in their cage of stainless steel cable."
            pastel="sky"
          />

          {/* ── FLOATING COMPRESSION ── */}
          <div className="mt-12">
            <SectionHead title="Floating Compression" />

            <p className="text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              Snelson arrived at the principle in 1948 as a student at Black
              Mountain College, where he was studying under Fuller. He built a
              small prototype — a tabletop model using wooden sticks and thread
              — that demonstrated the idea. Fuller saw it, recognized what it
              was, and named it. There is a long dispute about credit that does
              not need to be rehearsed here. What is not disputed is the
              physical fact: the structure works.
            </p>

            <p className="mt-5 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              Snelson&apos;s preferred term, floating compression, describes the
              experience of the tubes more accurately than Fuller&apos;s coinage.
              Each tube is suspended in space by the cables around it. It floats
              there, under compression, pushing against the network that holds
              it. The network holds because of the tubes. The tubes float because
              of the network. The circularity is not a logical problem — it is
              the mechanism.
            </p>
          </div>

          <PullQuote
            quote="Tensegrity describes a closed structural system composed of a set of three or more elongate compression struts within a network of tension tendons, the combined parts mutually supportive in such a way that the struts do not touch one another, but press outwardly against nodal points in the tension network to form a firm, triangulated, prestressed, tension and compression unit."
            attr="Kenneth Snelson"
          />

          {/* ── IMAGE 3 ── */}
          <ArticleFigure
            src={IMG.img3}
            alt="Kenneth Snelson's Needle Tower, view from below showing six-pointed star pattern"
            caption="Looking up through the tower — the six-pointed star is a structural by-product, not a design decision."
            pastel="lime"
          />

          {/* ── WHAT HAPPENS WHEN IT BREAKS ── */}
          <div className="mt-12">
            <SectionHead title="What Happens When It Breaks" />

            <p className="text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              For the first several years the tower stood outside the Hirshhorn,
              nothing required maintenance. Then, gradually, the thin wires
              connecting nodes began to fray. Wind loads distributed unevenly
              over time. Individual cables snapped. The museum replaced them
              piece by piece, not always correctly. Eventually the top portion
              deteriorated enough that Snelson replaced it himself — partly to
              fix it, and partly so the museum&apos;s staff could watch and learn
              how it was done. Very few people in the world know how to
              reassemble a tensegrity structure of this complexity once it is
              taken apart.
            </p>

            <p className="mt-5 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              In 2010 the museum started laying the tower on its side whenever
              wind forecasts approached hurricane strength. The video below shows
              the conservation crew raising it back into position after the 2010
              restoration — fifteen people managing a 60-foot structure that,
              when lying down, becomes clear just how improbable it is that it
              stands at all.
            </p>
          </div>

          {/* ── VIDEO ── */}
          <VideoEmbed
            id="xDNohDRWTvU"
            title="Installation of Kenneth Snelson's Needle Tower — Hirshhorn Museum"
            caption="Hirshhorn Museum — raising Needle Tower after 2010 conservation · source: Smithsonian Institution"
          />

          {/* ── IMAGE 4 ── */}
          <ArticleFigure
            src={IMG.img4}
            alt="Kenneth Snelson's Needle Tower in the Hirshhorn Museum sculpture garden"
            pastel="rose"
          />

          {/* ── THE SIX-POINTED STAR ── */}
          <div className="mt-12">
            <SectionHead title="The Six-Pointed Star" />

            <p className="text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              If you walk up to the tower and look straight up from directly
              beneath it, you see something that stops people. The alternating
              three-tube layers, rotated against each other, produce an
              apparently infinite recession of six-pointed stars shrinking toward
              a vanishing point. The pattern has no symbolic intent. Snelson was
              explicit about this: the geometry outputs a Star of David as a
              side effect of using three tubes per layer with alternating
              rotation. Any religious or mystical reading is the viewer&apos;s
              contribution, not the sculptor&apos;s.
            </p>

            <p className="mt-5 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The pattern is mathematically inevitable given the constraints.
              Three tubes at 120° separation, alternating left and right helical
              modules — the visual result follows from the arithmetic with no
              room for variation. You could not build this tower with this method
              and get a different pattern from below. The same logic governs the{" "}
              <ArticleProseLink href="/articles/specimens-fancy-turning">
                ornamental turning specimens of the Victorian era
              </ArticleProseLink>
              : once you set the parameters, the geometry has only one output.
              The star is load-bearing.
            </p>

            <AsideNote>
              Snelson describes weaving as the &ldquo;mother of tensegrity.&rdquo; Over-under,
              the most basic operation in textile construction, is structurally
              identical to the logic of floating compression: each element held
              in place by the elements that cross it, none requiring a fixed
              anchor. The Needle Tower is, in this reading, a very tall and very
              thin piece of fabric standing on end.
            </AsideNote>

            <p className="mt-5 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              A second version, <em>Needle Tower II</em>, completed in 1968 and
              standing 30 meters tall, has been in the sculpture garden of the
              Kröller-Müller Museum in Otterlo, the Netherlands since 1971. The
              two towers are not identical — the proportions differ — but the
              structural logic is the same. Both are still standing. The same
              question — how does a structure carry load with almost nothing? —
              is what makes the bridge design challenge so useful on a{" "}
              <ArticleProseLink
                href="/gadgets/bambu-lab-p2s"
                className="article-euclid-link"
              >
                Bambu Lab P2S
              </ArticleProseLink>
              : print it, add weight until it fails, revise.
            </p>
          </div>

          {/* ── IMAGE 5 ── */}
          <ArticleFigure
            src={IMG.img5}
            alt="Kenneth Snelson's Needle Tower II at the Kröller-Müller Museum, Otterlo"
            caption="Needle Tower II (1968) — Kröller-Müller Museum, Otterlo, Netherlands."
            credit="Photo: zoom.nl"
            pastel="lavender"
          />

          {/* ── OBJECT DETAILS ── */}
          <ObjectDetails />

        </article>
      </div>
    </UnitCircleSectionReveal>
  );
}
