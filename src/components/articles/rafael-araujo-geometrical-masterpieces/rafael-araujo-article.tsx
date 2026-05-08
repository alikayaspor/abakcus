import { ArticleProseLink } from "@/components/articles/article-prose-link";
import { PASTEL } from "@/data/pastel-palette";

const R2 = "https://pub-57855d8f88704d1cafba485f1b715e8d.r2.dev";
const HERO_IMG = `${R2}/Rafael%20Araujo%E2%80%99s%20Geometrical%20Drawings.webp`;

/* ── IMAGE KEY HELPER ── */
const img = (key: string | number) =>
  `${R2}/Rafael%20Araujo%20Geometrical%20Drawings%20${key}.jpeg`;

/* ── PASTEL CYCLE ── */
const PASTEL_KEYS: (keyof typeof PASTEL)[] = [
  "lime",
  "sky",
  "rose",
  "peach",
  "lavender",
];

/* ── HERO IMAGE ── */
function HeroImage() {
  return (
    <figure
      className="mb-12 overflow-hidden rounded-[var(--radius-card)] p-3 shadow-[var(--shadow-card)] sm:-mx-8 sm:p-4 lg:-mx-16"
      style={{ backgroundColor: "#f5f0e5" }}
    >
      <div className="w-full rounded-xl bg-white/30 p-1 sm:p-1.5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_IMG}
          alt="Rafael Araujo's geometrical drawings — golden ratio spirals and helix constructions"
          className="mx-auto block h-auto w-full rounded-lg object-contain"
          loading="eager"
          decoding="async"
          draggable={false}
        />
      </div>
    </figure>
  );
}

/* ── DRAWING IMAGE ── */
function DrawingImage({
  src,
  alt,
  pastel,
  priority,
}: {
  src: string;
  alt: string;
  pastel: keyof typeof PASTEL;
  priority?: boolean;
}) {
  return (
    <figure
      className="my-7 overflow-hidden rounded-[var(--radius-card)] p-3 shadow-[var(--shadow-card)] sm:-mx-8 sm:p-4 lg:-mx-16"
      style={{ backgroundColor: PASTEL[pastel] }}
    >
      <div className="w-full rounded-xl bg-white/30 p-1 sm:p-1.5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="mx-auto block h-auto w-full rounded-lg object-contain"
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          draggable={false}
        />
      </div>
    </figure>
  );
}

/* ── DRAWING ENTRY ── */
function DrawingEntry({
  num,
  title,
  medium,
  imgKey,
  pastelIdx,
  priority,
  children,
}: {
  num: string;
  title: string;
  medium: string;
  imgKey: string | number;
  pastelIdx: number;
  priority?: boolean;
  children?: React.ReactNode;
}) {
  const pastel = PASTEL_KEYS[pastelIdx % PASTEL_KEYS.length];
  const src = img(imgKey);
  return (
    <div className="border-t border-[var(--line)] pt-10">
      <div className="mb-5 flex flex-wrap items-baseline gap-3">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
          {num}
        </span>
        <h2 className="font-serif text-[1.4rem] font-normal leading-tight tracking-[-0.01em] text-[var(--ink)]">
          {title}
        </h2>
        <span className="ml-auto rounded-sm border border-[var(--line-soft)] bg-[var(--tonal)] px-2.5 py-0.5 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-[var(--ink-muted)]">
          {medium}
        </span>
      </div>
      <DrawingImage
        src={src}
        alt={`${title} — Rafael Araujo`}
        pastel={pastel}
        priority={priority}
      />
      {children && (
        <div className="space-y-4 border-l border-[var(--line-soft)] pl-5 font-serif text-[0.95rem] leading-[1.85] text-[var(--ink)]">
          {children}
        </div>
      )}
    </div>
  );
}

/* ── FACTS ROW ── */
function FactsRow() {
  const facts = [
    { number: "40+", label: "Years of hand-drawn geometric illustration" },
    { number: "~100h", label: "Time to complete a single artwork" },
    { number: "φ", label: "1.618… — the Golden Ratio behind every piece" },
  ];
  return (
    <div className="my-10 grid grid-cols-3 gap-4">
      {facts.map((f) => (
        <div
          key={f.number}
          className="rounded-lg border border-[#e8d03a] px-4 py-5 text-center"
          style={{ backgroundColor: "#ffe566" }}
        >
          <div className="font-serif text-[1.8rem] font-bold leading-none text-[var(--ink)]">
            {f.number}
          </div>
          <div className="mt-2 font-sans text-[0.72rem] leading-snug text-[var(--ink-muted)]">
            {f.label}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── BOOK CTA ── */
function BookCta() {
  return (
    <a
      href="https://amzn.to/4u8DrdR"
      target="_blank"
      rel="noopener noreferrer"
      className="my-12 flex items-start gap-5 rounded-lg border border-[var(--line)] bg-[var(--tonal)] p-5 no-underline transition-colors hover:border-[var(--ink-muted)]"
    >
      <div className="flex h-[100px] w-[80px] flex-shrink-0 items-center justify-center rounded border border-[var(--line)] bg-[var(--bg)] text-3xl">
        📐
      </div>
      <div>
        <div className="mb-1 font-sans text-[0.625rem] font-semibold uppercase tracking-[0.1em] text-[var(--ink-muted)]">
          Book Recommendation
        </div>
        <div className="mb-2 font-serif text-base font-bold leading-snug text-[var(--ink)]">
          Golden Ratio Coloring Book by Artist Rafael Araujo
        </div>
        <div className="font-sans text-[0.83rem] leading-relaxed text-[var(--ink-muted)]">
          25 hand-drawn illustrations on thick acid-free paper. Printed in Verona, Italy. A meditative
          encounter with the mathematics of nature — and a beautiful object in its own right.
        </div>
        <span className="mt-3 inline-block rounded bg-[var(--ink)] px-3.5 py-1.5 font-sans text-[0.7rem] font-semibold text-[var(--bg)]">
          View on Amazon →
        </span>
      </div>
    </a>
  );
}

/* ── VIDEO EMBED ── */
function VideoEmbed() {
  return (
    <div className="my-10">
      <p className="mb-3 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[var(--ink-muted)]">
        TED Talk — Rafael Araujo
      </p>
      <div
        className="overflow-hidden rounded-lg border border-[var(--line)]"
        style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}
      >
        <iframe
          src="https://www.youtube.com/embed/sxwCBTD-8f8"
          title="Rafael Araujo TED Talk"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0,
          }}
        />
      </div>
      <p className="mt-3 font-serif text-[0.78rem] italic leading-relaxed text-[var(--ink-muted)]">
        Araujo&rsquo;s TED Talk on how he uses the Golden Ratio and pure geometry to recreate the
        hidden mathematical order of nature — entirely by hand.
      </p>
    </div>
  );
}

/* ── MAIN EXPORT ── */
export function RafaelAraujoArticle() {
  return (
    <article className="mx-auto max-w-[680px] px-[var(--page-pad)] py-16 text-[var(--ink)]">

      {/* ── HEADER ── */}
      <header className="mb-12 border-b border-[var(--line)] pb-10">
        <p className="mb-5 font-sans text-[0.65rem] uppercase leading-relaxed tracking-[0.18em] text-[var(--ink-muted)]">
          Mathematics · Art · Golden Ratio
        </p>
        <h1 className="font-serif text-[clamp(2rem,5vw,3rem)] font-normal leading-[1.2] text-[var(--ink)]">
          Rafael Araujo&rsquo;s 20+ Mesmerizing{" "}
          <em className="italic">Geometrical Masterpieces</em>
        </h1>
        <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-[var(--line)] bg-[var(--tonal)] px-4 py-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--ink)] font-sans text-[0.6rem] font-bold text-[var(--bg)]">
            AK
          </div>
          <span className="font-sans text-[0.72rem] text-[var(--ink-muted)]">
            Ali Kaya
          </span>
          <span className="h-3 w-px bg-[var(--line)]" />
          <time dateTime="2026-05-05" className="font-sans text-[0.72rem] text-[var(--ink-muted)]">
            May 5, 2026
          </time>
        </div>
      </header>

      {/* ── HERO IMAGE ── */}
      <HeroImage />

      {/* ── INTRO ── */}
      <section className="mb-10 border-l-[1.5px] border-[var(--line-soft)] pl-7 font-serif text-[0.95rem] leading-[1.9] text-[var(--ink-muted)]">
        <p>
          To celebrate Rafael Araujo&rsquo;s talent and vision, we have curated a selection of his
          most stunning illustrations — showcasing the elegance and intricacy of the Golden Ratio,
          drawn entirely by hand.
        </p>
      </section>

      {/* ── PROSE I ── */}
      <section className="mb-10 space-y-5 font-serif text-[0.95rem] leading-[1.9] text-[var(--ink)]">
        <p>
          <a
            href="https://www.rafael-araujo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="article-euclid-link"
          >
            Rafael Araujo
          </a>{" "}
          is a Venezuelan architect and illustrator who has spent more than four decades doing
          something that should not be possible: producing drawings of breathtaking mathematical
          precision entirely by hand. No CAD software. No digital tools. Just a lamp for light, a
          ruler, a compass, and a protractor — and a patience that borders on the superhuman.
        </p>
        <p>
          By incorporating the{" "}
          <ArticleProseLink href="/articles/alejandro-guijarro-momentum" className="article-euclid-link">
            golden spiral
          </ArticleProseLink>{" "}
          and helixes into his compositions, Araujo establishes a harmonious blend of science and
          art, using these structures as the foundational skeleton for his stunning depictions of
          shells, butterflies, and flowers. The result is a collection of drawings where vivid
          natural elements sit on top of their geometric guiding lines — the scaffolding left
          deliberately visible, like the steel frame of a cathedral left exposed for all to admire.
        </p>

        <blockquote className="my-6 border-l-[3px] border-[var(--ink)] bg-[var(--tonal)] py-3 pl-6 pr-4">
          <p className="font-serif text-[1.05rem] italic text-[var(--ink)]">
            &ldquo;Through the thorough use of geometry, I try to attain and worship the platonic
            perfection of Nature.&rdquo;
          </p>
        </blockquote>

        <p>
          This is not a metaphor. Araujo literally constructs nature from mathematics outward. He
          begins with the numbers — Phi, the Fibonacci sequence, the properties of the double helix
          — and builds the organic form on top of them. A shell is not drawn as a shell; it is{" "}
          <em>derived</em> from a spiral, the way a theorem is derived from an axiom.
        </p>
      </section>

      {/* ── FACTS ROW ── */}
      <FactsRow />

      {/* ── PROSE II: NO ROOM FOR ERROR ── */}
      <section className="mb-10 space-y-5 font-serif text-[0.95rem] leading-[1.9] text-[var(--ink)]">
        <h2 className="font-serif text-[1.2rem] font-semibold tracking-[-0.01em] text-[var(--ink)]">
          No Room for Error
        </h2>
        <p>
          Every line Araujo lays down in ink is permanent. There is no undo.{" "}
          <strong className="font-bold text-[var(--ink)]">
            &ldquo;Working by hand, with ink on canvas, my main concern is to be aware of what
            I&rsquo;m always doing. Errors are paid dearly.&rdquo;
          </strong>{" "}
          A single misplaced arc in hour ninety-seven of a hundred-hour drawing means starting over.
          This awareness gives his work a quality that no algorithm can replicate: the quiet tension
          of a human being holding complete concentration across an enormous span of time.
        </p>
        <p>
          Araujo has cited M.C. Escher as an early inspiration — both artists share an obsession
          with perspective, mathematical structure, and the uncanny space where logic produces
          beauty. But where Escher bent reality into impossible architecture, Araujo holds the
          mirror up to nature and shows us that the impossible is already there, hiding in a
          nautilus shell.
        </p>
      </section>

      {/* ── VIDEO ── */}
      <VideoEmbed />

      {/* ── PROSE III: GEOMETRY OF GROWTH ── */}
      <section className="mb-10 space-y-5 font-serif text-[0.95rem] leading-[1.9] text-[var(--ink)]">
        <h2 className="font-serif text-[1.2rem] font-semibold tracking-[-0.01em] text-[var(--ink)]">
          The Geometry of Growth
        </h2>
        <p>
          At the heart of Araujo&rsquo;s practice is the Golden Ratio — the number Phi (φ ≈ 1.618),
          which appears with remarkable regularity in the proportions of living things. Sunflower
          seed arrangements, nautilus shells, the branching of trees, the spacing of leaves on a
          stem: all reflect what botanists call <em>phyllotaxis</em>, the tendency of organic
          structures to grow in patterns governed by the Fibonacci sequence. Araujo&rsquo;s
          illustrations do not merely depict these structures — they re-enact the mathematics that
          generates them.
        </p>
        <p>
          What makes his work visually arresting is precisely the decision to leave the construction
          lines in the final piece. A Blue Morpho butterfly sits at the center of an intricate web
          of spirals, cones, and helixes — the geometry that &ldquo;explains&rdquo; the butterfly
          visible all around it. The viewer encounters the organism and its mathematical genesis
          simultaneously. In the same spirit that{" "}
          <ArticleProseLink href="/24-beautiful-physics-poster-designs-that-inspire-you" className="article-euclid-link">
            physics posters make abstract equations beautiful
          </ArticleProseLink>
          , Araujo&rsquo;s drawings make the invisible mathematics of nature visible.
        </p>
      </section>

      {/* ── GALLERY DIVIDER ── */}
      <div className="my-10 flex items-center gap-4">
        <span className="h-px flex-1 bg-[var(--line-soft)]" />
        <span className="font-sans text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[var(--ink-muted)]">
          A Selection of Masterpieces
        </span>
        <span className="h-px flex-1 bg-[var(--line-soft)]" />
      </div>

      {/* ── DRAWINGS ── */}
      <div className="space-y-0">

        <DrawingEntry num="01" title="Nautilus Cross Section" medium="ink on paper" imgKey="12" pastelIdx={0} priority>
          <p>
            The chambers of a nautilus shell follow a perfect logarithmic spiral — each one a fixed
            proportion of the last, governed by Phi. Araujo draws the cross-section from the spiral
            outward, building the shell the way nature builds it: one ratio at a time.
          </p>
        </DrawingEntry>

        <DrawingEntry num="02" title="45 Degrees Cone Shell 2" medium="golden ratio proportions · ink on canvas" imgKey="123" pastelIdx={1} />

        <DrawingEntry num="03" title="Murex" medium="spiral construction · ink on paper" imgKey="16" pastelIdx={2} />

        <DrawingEntry num="04" title="Blue Stripes Shell" medium="ink on paper, 2015" imgKey="5" pastelIdx={3} />

        <DrawingEntry num="05" title="Semi-Flat Shell" medium="ink + acrylic on canvas" imgKey="17" pastelIdx={4} />

        <DrawingEntry num="06" title="45 Degrees' Shell" medium="growth sequence · ink on paper" imgKey="21" pastelIdx={0} />

        <DrawingEntry num="07" title="Blue Spikes' Shell" medium="ink on paper" imgKey="22" pastelIdx={1} />

        <DrawingEntry num="08" title="Flat Shell" medium="ink on paper" imgKey="8" pastelIdx={2} />

        <DrawingEntry num="09" title="Golden Shell" medium="pencil and ink on paper" imgKey="11" pastelIdx={3} />

        <DrawingEntry num="10" title="Phoebis Triple Helix" medium="ink + acrylic on canvas, 2015" imgKey="1" pastelIdx={4}>
          <p>
            The defining image of Araujo&rsquo;s practice: a Phoebis butterfly suspended at the
            convergence of a triple helix. The insect&rsquo;s symmetry is not assumed — it is
            proved, step by step, by the geometric armature surrounding it.
          </p>
        </DrawingEntry>

        <DrawingEntry num="11" title="Slim Cone Double Helix" medium="ink on paper, 2015" imgKey="2" pastelIdx={0}>
          <p>
            Monarch butterflies arranged along two interlocking helices inside a cone. The
            geometry dictates where each insect sits — the spiral is not decorative, it is
            the structure.
          </p>
        </DrawingEntry>

        <DrawingEntry num="12" title="Morpho Sequence 1" medium="ink on paper" imgKey="3" pastelIdx={1} />

        <DrawingEntry num="13" title="Monarch Water Mirror" medium="Fibonacci growth sequence · ink on paper" imgKey="6" pastelIdx={2}>
          <p>
            Phyllotaxis is the phenomenon by which plants arrange their leaves, seeds, or florets in
            Fibonacci patterns. Araujo&rsquo;s hand-plotted version makes the underlying grid
            explicit — the dots are not decoration, they are data points in a spiral sequence.
          </p>
        </DrawingEntry>

      </div>

      {/* ── PROSE: COLORING BOOK ── */}
      <section className="mt-14 space-y-5 border-t border-[var(--line)] pt-12 font-serif text-[0.95rem] leading-[1.9] text-[var(--ink)]">
        <h2 className="font-serif text-[1.2rem] font-semibold tracking-[-0.01em] text-[var(--ink)]">
          The Coloring Book That Invites You In
        </h2>
        <p>
          In 2016, Araujo took his work one step further by publishing his{" "}
          <a
            href="https://amzn.to/4u8DrdR"
            target="_blank"
            rel="noopener noreferrer"
            className="article-euclid-link"
          >
            <em>Golden Ratio Coloring Book</em>
          </a>{" "}
          — a collection of 25 hand-drawn illustrations printed on thick, acid-free 9.8 × 9.8 inch
          paper, designed to be colored in by the reader. The book was printed in Verona, Italy, and
          each page is printed on one side only, to prevent bleed-through from watercolors, gouache,
          markers, or gel pens.
        </p>
        <p>
          The concept is elegant: Araujo supplies the geometry and the line work; you supply the
          color and the time. Every illustration includes a grayscale guide to help readers
          understand how to build up depth and shadow. In this way, the coloring book becomes
          something closer to an apprenticeship — a way of learning to see the Golden Ratio by
          actually following its lines with your own hand.
        </p>
      </section>

      {/* ── BOOK CTA ── */}
      <BookCta />

      {/* ── CLOSING PROSE ── */}
      <section className="space-y-5 font-serif text-[0.95rem] leading-[1.9] text-[var(--ink)]">
        <h2 className="font-serif text-[1.2rem] font-semibold tracking-[-0.01em] text-[var(--ink)]">
          A Spiritual Connection to Nature&rsquo;s Code
        </h2>
        <p>
          For Araujo, the Golden Ratio is not merely a compositional device — it is a philosophical
          stance. His deliberate choice to leave construction lines visible in finished works is a
          declaration: these are not just beautiful objects, they are transparent about how beauty
          works. The scaffolding is the art.
        </p>
        <p>
          In an age where stunning digital imagery can be generated in seconds, there is something
          quietly radical about a man at a drafting table in Caracas, spending a hundred hours laying
          down ink with a compass and a protractor — producing images that look, to the untrained
          eye, like output from a supercomputer. The images invite you to look twice. And then, if
          you are paying attention, to look at the natural world itself with new eyes.
        </p>
        <p>
          You can explore Araujo&rsquo;s full body of work at his{" "}
          <a
            href="https://www.rafael-araujo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="article-euclid-link"
          >
            official website
          </a>
          , and bring his geometry into your own hands with the{" "}
          <a
            href="https://amzn.to/4u8DrdR"
            target="_blank"
            rel="noopener noreferrer"
            className="article-euclid-link"
          >
            Golden Ratio Coloring Book
          </a>
          . For more mathematical artistry, don&rsquo;t miss{" "}
          <ArticleProseLink href="/articles/billingsley-euclid" className="article-euclid-link">
            Oliver Byrne&rsquo;s color-coded Euclid
          </ArticleProseLink>{" "}
          — another example of mathematics made radically, visually alive.
        </p>
      </section>

    </article>
  );
}
