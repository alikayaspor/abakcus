import type { Metadata } from "next";
import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/home/site-header";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import {
  PastaMiniCanvas,
  PastaVisualizer,
  genCappelletti,
  genCavatappi,
} from "@/components/books/pasta-by-design/pasta-canvases";

export const metadata: Metadata = {
  title: "Pasta by Design — An Architect Tamed the Noodle",
  description:
    "George Legendre's 2011 book Pasta by Design catalogues 92 pasta shapes using parametric equations. No recipes. Just mathematics, wireframes, and a family tree of noodles.",
  openGraph: {
    title: "Pasta by Design — An Architect Tamed the Noodle",
    description:
      "George Legendre's 2011 book Pasta by Design catalogues 92 pasta shapes using parametric equations. No recipes. Just mathematics, wireframes, and a family tree of noodles.",
    images: [
      {
        url: "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/Pasta%20by%20Design.jpg",
        width: 800,
        height: 1000,
        alt: "Pasta by Design — George L. Legendre",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pasta by Design — An Architect Tamed the Noodle",
    description:
      "92 shapes, 3 equations each, 2 trig functions. George Legendre's Pasta by Design is not a cookbook.",
    images: [
      "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/Pasta%20by%20Design.jpg",
    ],
  },
  alternates: {
    canonical: "/books/pasta-by-design",
  },
};

// ── Taxonomy table data ────────────────────────────────────────────────────

const PASTA_TABLE = [
  {
    name: "Spaghetti",
    category: "Lunga",
    shape: "Cylindrical solid",
    region: "Nationwide",
    sauce: "Clams, carbonara, aglio e olio",
  },
  {
    name: "Pappardelle",
    category: "Lunga",
    shape: "Flat wide ribbon",
    region: "Tuscany",
    sauce: "Wild boar ragù, hare",
  },
  {
    name: "Linguine",
    category: "Lunga",
    shape: "Flat elliptical strand",
    region: "Liguria, Naples",
    sauce: "Pesto genovese, seafood",
  },
  {
    name: "Penne rigate",
    category: "Corta",
    shape: "Ridged tube, angled cuts",
    region: "Rome, Campania",
    sauce: "Arrabbiata, amatriciana",
  },
  {
    name: "Fusilli",
    category: "Corta",
    shape: "Helical screw",
    region: "Campania",
    sauce: "Thick tomato, pesto",
  },
  {
    name: "Rigatoni",
    category: "Corta",
    shape: "Ridged large tube",
    region: "Rome",
    sauce: "Rich meat ragù, pajata",
  },
  {
    name: "Farfalle",
    category: "Corta",
    shape: "Ruffled edge, pinched centre",
    region: "Lombardy, Emilia",
    sauce: "Cream sauces, cold salads",
  },
  {
    name: "Cavatappi",
    category: "Corta",
    shape: "Hollow helicoidal tube",
    region: "Campania",
    sauce: "Thick tomato, baked dishes",
  },
  {
    name: "Ravioli",
    category: "Ripiena",
    shape: "Flat filled pillow",
    region: "Widespread",
    sauce: "Brown butter, sage",
  },
  {
    name: "Tortellini",
    category: "Ripiena",
    shape: "Folded toric ring",
    region: "Bologna, Modena",
    sauce: "Broth, cream",
  },
  {
    name: "Cappelletti",
    category: "Ripiena",
    shape: "Hat-shaped fold",
    region: "Romagna, Marche",
    sauce: "Broth, cream",
  },
  {
    name: "Agnolotti",
    category: "Ripiena",
    shape: "Folded half-moon",
    region: "Piedmont",
    sauce: "Roasting juices, butter",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────

export default function PastaByDesignPage() {
  return (
    <>
      <SiteHeader />

      {/* ── HERO ── */}
      <header className="relative overflow-hidden bg-[#1a1410] pb-0">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, #2a1f12 0%, #1a1410 100%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[var(--page-max)] px-[var(--page-pad)]">
          <div className="flex flex-col items-center gap-10 py-20 text-center md:flex-row md:gap-16 md:py-28 md:text-left">
            {/* Cover */}
            <div className="w-52 shrink-0 sm:w-64 md:w-72">
              <div
                className="relative overflow-hidden rounded-lg shadow-[0_32px_80px_-16px_rgba(0,0,0,0.7)]"
                style={{ aspectRatio: "3/4" }}
              >
                <Image
                  src="https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/Pasta%20by%20Design.jpg"
                  alt="Pasta by Design book cover — George L. Legendre, Thames & Hudson 2011"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width:768px) 208px, 288px"
                />
              </div>
            </div>

            {/* Text */}
            <div className="max-w-xl">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-[#c8922a]">
                On the Book &nbsp;·&nbsp; 2011 &nbsp;·&nbsp; Thames &amp; Hudson
              </p>
              <h1 className="mt-5 font-serif text-[clamp(2.8rem,8vw,5.5rem)] font-bold leading-[0.95] tracking-tight text-[#f5f0e8]">
                Pasta
                <br />
                <em className="text-[#c8922a]">by Design</em>
              </h1>
              <p className="mt-6 font-serif text-lg italic leading-relaxed text-[#b0a890]">
                An architect stayed late at the office in London,
                <br className="hidden sm:block" />
                ate pasta, and noticed something.
              </p>
              <p className="mt-5 font-mono text-[0.68rem] uppercase tracking-[0.15em] text-[#7a7060]">
                George L. Legendre&nbsp;/&nbsp;208 pages&nbsp;/&nbsp;92
                shapes&nbsp;/&nbsp;∞ equations
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* ── ARTICLE ── */}
      <div className="uc-page-bg pb-16">
        <div className="mx-auto max-w-[var(--page-max)] px-[var(--page-pad)] pt-6">
          <Link
            href="/"
            className="inline-flex text-sm text-[var(--ink-muted)] underline-offset-4 hover:underline"
          >
            ← Back to home
          </Link>
        </div>

        <article
          className="mx-auto max-w-[720px] px-[var(--page-pad)] pt-14 pb-20 text-[var(--ink)]"
          itemScope
          itemType="https://schema.org/Review"
        >
          <meta
            itemProp="itemReviewed"
            content="Pasta by Design by George L. Legendre"
          />
          <meta itemProp="author" content="Abakcus" />

          {/* ── DROP-CAP INTRO ── */}
          <p
            className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]"
            style={{}}
          >
            <span
              className="float-left mr-2 mt-1 font-serif text-[4.5rem] font-bold leading-[0.78] text-[var(--ink)] sm:text-[5.2rem]"
              aria-hidden="true"
            >
              I
            </span>
            n a London architecture office, late at night, two people are eating
            pasta. There&apos;s Chianti on the table — whether good or bad is
            unknown. George Legendre and his colleague Marco Guarnieri are
            looking at the same parametric equations they use during the day to
            define building facades. One of them says:{" "}
            <em>
              &ldquo;We&apos;re already doing this. For buildings. Why not for
              pasta?&rdquo;
            </em>
          </p>
          <p className="clear-both mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            The book came out of that question. Thames &amp; Hudson published it
            in 2011; it was translated into German the following year. The title
            is plain: <em>Pasta by Design.</em>
          </p>
          <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            But what&apos;s inside is anything but plain.
          </p>

          {/* ── DIVIDER ── */}
          <div className="my-10 flex items-center gap-4 text-[var(--ink-muted)]">
            <span className="h-px flex-1 bg-[var(--line)]" />
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
              §
            </span>
            <span className="h-px flex-1 bg-[var(--line)]" />
          </div>

          {/* ── NOT A COOKBOOK ── */}
          <div className="mb-5 flex items-baseline gap-4 border-b border-[var(--line)] pb-3">
            <span className="shrink-0 font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              01
            </span>
            <h2 className="font-serif text-[1.05rem] font-medium leading-snug tracking-[0.01em] text-[var(--ink)] sm:text-[1.15rem]">
              This is not a cookbook
            </h2>
          </div>

          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            Open the book and there are no recipes. None at all. Instead:
            photograph, equation, wireframe drawing, brief description. The same
            format repeated for each pasta shape, 92 times.
          </p>

          {/* Aside */}
          <aside className="my-8 rounded-xl bg-[var(--pastel-lime)] px-5 py-5 sm:px-6">
            <p className="font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              Design note
            </p>
            <div className="mt-2 text-[0.92rem] leading-relaxed text-[var(--ink)] sm:text-[0.95rem]">
              Legendre&apos;s choice was deliberate. &ldquo;Not a cookbook — a
              morphology book,&rdquo; he said in one interview. One Amazon
              reviewer expressed disappointment: &ldquo;No recipes at all!&rdquo;
              — which is actually the book&apos;s greatest achievement.
            </div>
          </aside>

          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            Each pasta page carries: what the shape is, where it&apos;s eaten,
            which sauce might work — but these are supplementary. The main
            subject is mathematical structure. Each shape is defined by three
            parametric equations using only two trigonometric functions: sine and
            cosine.
          </p>
          <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            From fusilli to cappelletti, from spaghetti to pappardelle — the
            same mathematical skeleton underlies them all. Legendre&apos;s claim:{" "}
            <span
              className="inline"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 60%, rgba(200,146,42,0.52) 60%)",
              }}
            >
              there is a geometric logic connecting all pasta shapes, and that
              logic can be written as a formula.
            </span>
          </p>

          {/* ── FACT BOX ── */}
          <div className="my-10 rounded-2xl bg-[var(--ink)] px-6 py-8 text-white shadow-[var(--shadow-card)]">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.25em] text-[#c8922a]">
              Pasta by Design — By the Numbers
            </p>
            <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-3">
              {[
                { num: "92", label: "Pasta shapes catalogued" },
                {
                  num: "3",
                  label: "Parametric equations defining each shape",
                },
                { num: "2", label: "Core functions used: sin and cos" },
                {
                  num: "208",
                  label: "Pages — 90 colour photos, 200+ illustrations",
                },
                { num: "4.3", label: "Amazon rating (44 reviews)" },
                { num: "2012", label: "Year of German translation" },
              ].map((item) => (
                <div
                  key={item.num}
                  className="border-t border-white/10 pt-4"
                >
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

          {/* ── PHYLOGENETICS ── */}
          <div className="mb-5 mt-14 flex items-baseline gap-4 border-b border-[var(--line)] pb-3">
            <span className="shrink-0 font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              02
            </span>
            <h2 className="font-serif text-[1.05rem] font-medium leading-snug tracking-[0.01em] text-[var(--ink)] sm:text-[1.15rem]">
              Phylogenetics — or treating pasta{" "}
              <em>like a living specimen</em>
            </h2>
          </div>

          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            Legendre borrowed a tool from biology to classify pasta shapes:{" "}
            <em>phylogenetics.</em> This is a method that maps morphological
            kinship relationships — similarities in form, structure, and origin
            — among living species. Normally used to measure the structural
            distance between whales and cows. Legendre used it to measure the
            geometric distance between rigatoni and penne.
          </p>
          <p className="mb-8 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            The result: the <em>family tree</em> diagram at the front of the
            book. 92 pasta shapes arranged on a tree according to their geometric
            properties — edge type, surface texture, cross-section shape, folding
            method. It shows that two pasta shapes that look entirely different
            may actually belong to the same mathematical class.
          </p>

          {/* PASTA FAMILY TREE SVG */}
          <figure className="-mx-4 my-10 overflow-hidden rounded-2xl bg-[color-mix(in_srgb,var(--pastel-peach)_36%,white)] px-4 py-8 shadow-[var(--shadow-soft)] sm:-mx-6 sm:px-8">
            <p className="mb-6 text-center font-mono text-[0.62rem] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
              Pasta Family Tree — Selected Branches
            </p>
            <svg
              viewBox="0 0 620 300"
              className="mx-auto w-full max-w-[620px]"
              aria-label="Simplified pasta family tree showing three branches: Lunga (long), Corta (short), and Ripiena (filled)"
              role="img"
              style={{ fontFamily: "'DM Mono', ui-monospace, monospace" }}
            >
              {/* Root */}
              <line x1="310" y1="20" x2="310" y2="48" stroke="#c8922a" strokeWidth="1.5" />
              <circle cx="310" cy="14" r="5" fill="#c8922a" />
              <text x="310" y="9" fill="#676767" textAnchor="middle" fontSize="7.5" letterSpacing="2">92 PASTA SHAPES</text>

              {/* Main branches */}
              <line x1="310" y1="48" x2="120" y2="78" stroke="#c8922a" strokeWidth="1.5" />
              <line x1="120" y1="78" x2="120" y2="102" stroke="#c8922a" strokeWidth="1" />
              <line x1="310" y1="48" x2="310" y2="102" stroke="#c8922a" strokeWidth="1.5" />
              <line x1="310" y1="48" x2="500" y2="78" stroke="#c8922a" strokeWidth="1.5" />
              <line x1="500" y1="78" x2="500" y2="102" stroke="#c8922a" strokeWidth="1" />

              {/* Category labels */}
              <rect x="58" y="102" width="124" height="22" fill="#212324" rx="2" />
              <text x="120" y="117" fill="#c8922a" textAnchor="middle" fontSize="8" letterSpacing="1.5">LUNGA / LONG</text>
              <rect x="248" y="102" width="124" height="22" fill="#212324" rx="2" />
              <text x="310" y="117" fill="#c8922a" textAnchor="middle" fontSize="8" letterSpacing="1.5">CORTA / SHORT</text>
              <rect x="438" y="102" width="124" height="22" fill="#212324" rx="2" />
              <text x="500" y="117" fill="#c8922a" textAnchor="middle" fontSize="8" letterSpacing="1.5">RIPIENA / FILLED</text>

              {/* LUNGA children */}
              <line x1="82" y1="124" x2="55" y2="150" stroke="#676767" strokeWidth="1" />
              <line x1="120" y1="124" x2="120" y2="150" stroke="#676767" strokeWidth="1" />
              <line x1="158" y1="124" x2="178" y2="150" stroke="#676767" strokeWidth="1" />
              <circle cx="55" cy="158" r="4" fill="none" stroke="#676767" strokeWidth="1" />
              <text x="55" y="173" fill="#676767" textAnchor="middle" fontSize="8.5">spaghetti</text>
              <circle cx="120" cy="158" r="4" fill="none" stroke="#676767" strokeWidth="1" />
              <text x="120" y="173" fill="#676767" textAnchor="middle" fontSize="8.5">linguine</text>
              <circle cx="178" cy="158" r="4" fill="none" stroke="#676767" strokeWidth="1" />
              <text x="178" y="173" fill="#676767" textAnchor="middle" fontSize="8.5">pappardelle</text>

              {/* CORTA children */}
              <line x1="272" y1="124" x2="250" y2="150" stroke="#676767" strokeWidth="1" />
              <line x1="310" y1="124" x2="310" y2="150" stroke="#676767" strokeWidth="1" />
              <line x1="348" y1="124" x2="370" y2="150" stroke="#676767" strokeWidth="1" />
              <circle cx="250" cy="158" r="4" fill="none" stroke="#676767" strokeWidth="1" />
              <text x="250" y="173" fill="#676767" textAnchor="middle" fontSize="8.5">penne</text>
              <circle cx="310" cy="158" r="4" fill="none" stroke="#676767" strokeWidth="1" />
              <text x="310" y="173" fill="#676767" textAnchor="middle" fontSize="8.5">fusilli</text>
              <circle cx="370" cy="158" r="4" fill="none" stroke="#676767" strokeWidth="1" />
              <text x="370" y="173" fill="#676767" textAnchor="middle" fontSize="8.5">rigatoni</text>

              {/* RIPIENA children */}
              <line x1="462" y1="124" x2="440" y2="150" stroke="#676767" strokeWidth="1" />
              <line x1="500" y1="124" x2="500" y2="150" stroke="#676767" strokeWidth="1" />
              <line x1="538" y1="124" x2="560" y2="150" stroke="#676767" strokeWidth="1" />
              <circle cx="440" cy="158" r="4" fill="none" stroke="#676767" strokeWidth="1" />
              <text x="440" y="173" fill="#676767" textAnchor="middle" fontSize="8.5">ravioli</text>
              <circle cx="500" cy="158" r="4" fill="none" stroke="#676767" strokeWidth="1" />
              <text x="500" y="173" fill="#676767" textAnchor="middle" fontSize="8.5">tortellini</text>
              <circle cx="560" cy="158" r="4" fill="none" stroke="#676767" strokeWidth="1" />
              <text x="560" y="173" fill="#676767" textAnchor="middle" fontSize="8.5">cappelletti</text>

              {/* Property tags */}
              <line x1="310" y1="180" x2="310" y2="196" stroke="#dadce0" strokeWidth="1" strokeDasharray="3,3" />
              <text x="310" y="208" fill="#676767" textAnchor="middle" fontSize="7" letterSpacing="1">GEOMETRIC PROPERTIES:</text>
              {[
                [38, "PLANAR"],
                [130, "HELICAL"],
                [222, "TORIC"],
                [314, "FOLDED"],
                [406, "TUBULAR"],
                [498, "RUFFLED EDGE"],
              ].map(([x, label]) => (
                <g key={String(label)}>
                  <rect x={Number(x) - 38} y="215" width="76" height="17" fill="#EDE6D8" rx="2" />
                  <text x={Number(x)} y="227" fill="#676767" textAnchor="middle" fontSize="7">
                    {String(label)}
                  </text>
                </g>
              ))}
              <text x="310" y="254" fill="#676767" textAnchor="middle" fontSize="7" letterSpacing="2">
                — simplified · source: Pasta by Design (Legendre, 2011) —
              </text>
            </svg>
            <figcaption className="mt-4 text-center font-mono text-[0.62rem] text-[var(--ink-muted)]">
              Simplified representation of Legendre&apos;s pasta family tree.
              Original uses phylogenetic branching for all 92 shapes.
            </figcaption>
          </figure>

          {/* Pappardelle breakout photo */}
          <figure className="my-14 -mx-4 sm:-mx-10 lg:-mx-20">
            <div className="relative w-full overflow-hidden rounded-2xl shadow-[var(--shadow-card)]" style={{ aspectRatio: "3/2" }}>
              <Image
                src="https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/Pasta%20by%20Design%20Pappardelle.jpg"
                alt="Pappardelle spread from Pasta by Design — book page showing parametric wireframe and the pasta itself"
                fill
                className="object-cover"
                sizes="(max-width:640px) 100vw, (max-width:1024px) 90vw, 960px"
              />
            </div>
            <figcaption className="mt-3 px-1 text-center font-mono text-[0.6rem] uppercase tracking-[0.18em] text-[var(--ink-muted)]">
              Pappardelle — flat wide ribbon &nbsp;·&nbsp; <em className="not-italic text-[#c8922a]">Pasta by Design</em> (Thames &amp; Hudson, 2011)
            </figcaption>
          </figure>

          {/* ── EQUATIONS ── */}
          <div className="mb-5 mt-14 flex items-baseline gap-4 border-b border-[var(--line)] pb-3">
            <span className="shrink-0 font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              03
            </span>
            <h2 className="font-serif text-[1.05rem] font-medium leading-snug tracking-[0.01em] text-[var(--ink)] sm:text-[1.15rem]">
              The equations —<em> which is the whole point</em>
            </h2>
          </div>

          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            Each pasta shape is defined by three equations: Π (Pi), Θ (Theta),
            and K, corresponding to the x, y, and z coordinates respectively.
            Parameters i and j take values over specific ranges; inside the
            equations you see only{" "}
            <Link href="/articles/unit-circle" target="_blank" rel="noopener noreferrer" className="article-euclid-link">
              sin and cos
            </Link>
            .
          </p>
          <p className="mb-8 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            Mathematically, this is parametric surface modelling. Architects use
            it to design building facades. Legendre applied the same system to
            his dinner. The geometry escapes the kitchen in other ways too —
            a{" "}
            <Link href="/articles/geometry-behind-pringles" target="_blank" rel="noopener noreferrer" className="article-euclid-link">
              Pringle chip is a hyperbolic paraboloid
            </Link>
            , shaped that way for the same structural reasons that keep
            thin-shell roofs standing.
          </p>

          {/* Equation cards */}
          <div className="space-y-4">
            {/* Cappelletti */}
            <div className="overflow-hidden rounded-2xl bg-[var(--pastel-peach)] shadow-[var(--shadow-card)]">
              <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
                <div className="px-6 py-6">
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
                    Cappelletti
                  </p>
                  <p className="mt-2 text-[0.88rem] leading-relaxed text-[var(--ink-muted)]">
                    A northern Italian Christmas tradition. Served in chicken
                    broth. The name means &ldquo;little hats.&rdquo;
                  </p>
                  <pre className="mt-4 overflow-x-auto rounded-lg bg-[var(--ink)] px-4 py-3 font-mono text-[0.65rem] leading-[1.9] text-[#c8922a]">
                    {`i = 0…40  j = 0…120\n\nΠ = (0.1+sin(3i/160·π))·cos(2.3j/120·π)\nΘ = (0.1+sin(3i/160·π))·sin(2.3j/120·π)\nK = 0.1+j/400+(0.3−0.231·i/40)·cos(i/20·π)`}
                  </pre>
                </div>
                <div className="flex items-center justify-center bg-white/55 p-4">
                  <PastaMiniCanvas
                    generator={genCappelletti}
                    width={200}
                    height={160}
                    className="block max-w-full"
                  />
                </div>
              </div>
            </div>

            {/* Cavatappi */}
            <div className="overflow-hidden rounded-2xl bg-[var(--pastel-lavender)] shadow-[var(--shadow-card)]">
              <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
                <div className="px-6 py-6">
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
                    Cavatappi
                  </p>
                  <p className="mt-2 text-[0.88rem] leading-relaxed text-[var(--ink-muted)]">
                    36 mm long hollow helicoidal tubes. The name means
                    &ldquo;corkscrew.&rdquo; Sauce gets inside and stays there.
                  </p>
                  <pre className="mt-4 overflow-x-auto rounded-lg bg-[var(--ink)] px-4 py-3 font-mono text-[0.65rem] leading-[1.9] text-[#c8922a]">
                    {`i = 0…70  j = 0…150\n\nΠ = (3+2·cos(i/35·π)+0.1·cos(2i/7·π))·cos(j/30·π)\nΘ = (3+2·cos(i/35·π)+0.1·cos(2i/7·π))·sin(j/30·π)\nK = 3+2·sin(i/35·π)+0.1·sin(2i/7·π)+j/6`}
                  </pre>
                </div>
                <div className="flex items-center justify-center bg-white/55 p-4">
                  <PastaMiniCanvas
                    generator={genCavatappi}
                    width={200}
                    height={160}
                    className="block max-w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Agnolotti breakout photo */}
          <figure className="my-14 -mx-4 sm:-mx-10 lg:-mx-20">
            <div className="relative w-full overflow-hidden rounded-2xl shadow-[var(--shadow-card)]" style={{ aspectRatio: "3/2" }}>
              <Image
                src="https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/Pasta%20by%20Design%20Agnolotti.jpg"
                alt="Agnolotti spread from Pasta by Design — book page showing parametric wireframe and the pasta itself"
                fill
                className="object-cover"
                sizes="(max-width:640px) 100vw, (max-width:1024px) 90vw, 960px"
              />
            </div>
            <figcaption className="mt-3 px-1 text-center font-mono text-[0.6rem] uppercase tracking-[0.18em] text-[var(--ink-muted)]">
              Agnolotti — folded half-moon, Piedmont &nbsp;·&nbsp; <em className="not-italic text-[#c8922a]">Pasta by Design</em> (Thames &amp; Hudson, 2011)
            </figcaption>
          </figure>

          {/* ── PULL QUOTE ── */}
          <blockquote className="my-10 rounded-r-xl border-l-[4px] border-[#c8922a] bg-[var(--pastel-lavender)] py-5 pl-6 pr-5">
            <p className="font-serif text-[1.2rem] italic leading-relaxed text-[var(--ink)]">
              &ldquo;Seeing mathematics in fusilli makes perfect sense today.
              Programmers talk about beautiful code, and designers use math to
              create organic shapes.&rdquo;
            </p>
            <p className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-[var(--ink-muted)]">
              — Paola Antonelli, MoMA Curator of Design &amp; Architecture
              (foreword)
            </p>
          </blockquote>

          {/* ── QUIET ARGUMENT ── */}
          <div className="mb-5 mt-14 flex items-baseline gap-4 border-b border-[var(--line)] pb-3">
            <span className="shrink-0 font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              04
            </span>
            <h2 className="font-serif text-[1.05rem] font-medium leading-snug tracking-[0.01em] text-[var(--ink)] sm:text-[1.15rem]">
              The book&apos;s <em>quiet argument</em>
            </h2>
          </div>

          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            There is also this: Italian nonnas who have been making pasta for
            centuries already knew — without calculation — all the geometry
            Legendre spent years computing in a London office. Knowledge that
            lived in their hands, he formalised into symbols.
          </p>
          <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            Is that an injustice? Perhaps. But it is also one of the oldest
            problems in the history of mathematics: the conversion of intuitive
            knowledge into symbolic knowledge. Turning a point into a line, a
            line into an equation. In a way, Legendre paid the nonnas a
            compliment — he found their shapes so beautiful he wanted to make
            them permanent.{" "}
            <Link href="/articles/billingsley-euclid" target="_blank" rel="noopener noreferrer" className="article-euclid-link">
              Henry Billingsley had the same instinct in 1570
            </Link>{" "}
            — his English Euclid came with paper fold-out solids you could hold
            in your hand.
          </p>

          {/* ── DIVIDER ── */}
          <div className="my-10 flex items-center gap-4">
            <span className="h-px flex-1 bg-[var(--line)]" />
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
              §
            </span>
            <span className="h-px flex-1 bg-[var(--line)]" />
          </div>

          {/* ── MIT SECTION ── */}
          <div className="my-12 -mx-4 overflow-hidden rounded-2xl bg-[var(--pastel-lime)] px-6 py-12 shadow-[var(--shadow-soft)] sm:-mx-6 sm:px-10">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
              MIT Media Lab · 2017 · Tangible Media Group
            </p>

            <div className="mb-5 mt-4 flex items-baseline gap-4 border-b border-[var(--line)] pb-3">
              <span className="shrink-0 font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
                05
              </span>
              <h2 className="font-serif text-[1.05rem] font-medium leading-snug tracking-[0.01em] text-[var(--ink)] sm:text-[1.15rem]">
                Flat sheets that become{" "}
                <em>pasta in water</em>
              </h2>
            </div>

            <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
              A 2017 project at MIT's{" "}
              <Link
                href="https://news.mit.edu/2017/researchers-engineer-shape-shifting-noodles-0525"
                target="_blank"
                rel="noopener noreferrer"
                className="article-euclid-link"
              >
                Tangible Media Group
              </Link>
              {" "}took the parametric logic of Legendre's book somewhere entirely
              different: instead of describing pasta shapes mathematically, the
              team built pasta that{" "}
              <em>assembles its own shape</em> when submerged in water.
            </p>
            <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
              The mechanism is simple. A flat two-layer film of gelatin — top
              layer denser than the bottom — curls when wet, because the layers
              absorb water at different rates. By printing thin strips of edible
              cellulose onto the surface in specific patterns, the researchers
              could control exactly where and how much the film bent. The result:
              flat discs that spring into macaroni, rotini, saddle shapes, flowers
              — whatever the cellulose pattern dictates.
            </p>

            {/* Vimeo embed */}
            <figure className="my-8 overflow-hidden rounded-2xl shadow-[var(--shadow-card)]">
              <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                <iframe
                  src="https://player.vimeo.com/video/199408741?byline=0&portrait=0&title=0"
                  className="absolute inset-0 h-full w-full border-0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Transformative Appetite — MIT Tangible Media Group, 2017"
                />
              </div>
              <figcaption className="bg-[var(--ink)] px-5 py-3 text-center font-mono text-[0.6rem] uppercase tracking-[0.12em] text-[#c8922a]">
                Transformative Appetite — MIT Tangible Media Group, 2017
              </figcaption>
            </figure>

            <blockquote className="my-8 rounded-r-xl border-l-[4px] border-[#c8922a] bg-white/70 py-5 pl-6 pr-5">
              <p className="font-serif text-[1.15rem] italic leading-relaxed text-[var(--ink)]">
                &ldquo;We thought maybe in the future our shape-changing food
                could be packed flat and save space.&rdquo;
              </p>
              <p className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-[var(--ink-muted)]">
                — Wen Wang, MIT Media Lab
              </p>
            </blockquote>

            <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
              The practical argument: a box of conventional macaroni is 67 percent
              air by volume. Flat sheets stack efficiently, take less packaging,
              ship for less. The team called it &ldquo;the pasta
              manufacturer&apos;s IKEA model&rdquo; — pass the compression savings
              to the consumer.
            </p>
            <p className="mb-4 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
              Legendre catalogued pasta geometry. MIT&apos;s Tangible Media Group went
              one step further and made the geometry{" "}
              <em>dynamic</em> — shape as behaviour, not just form. The
              connection is more than metaphorical: both projects treat pasta as a
              design problem first, a food problem second.
            </p>
          </div>

          {/* ── TAXONOMY TABLE ── */}
          <div className="mb-5 mt-14 flex items-baseline gap-4 border-b border-[var(--line)] pb-3">
            <span className="shrink-0 font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              06
            </span>
            <h2 className="font-serif text-[1.05rem] font-medium leading-snug tracking-[0.01em] text-[var(--ink)] sm:text-[1.15rem]">
              A working taxonomy
            </h2>
          </div>

          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            Selected shapes from Legendre&apos;s catalogue, mapped by category,
            geometric profile, regional origin, and canonical sauce pairing.
          </p>

          <div className="-mx-4 my-8 overflow-x-auto sm:-mx-6">
            <table className="w-full min-w-[600px] border-collapse font-serif text-[0.88rem]">
              <thead>
                <tr className="bg-[var(--ink)]">
                  {["Name", "Category", "Shape", "Region", "Best with"].map(
                    (h) => (
                      <th
                        key={h}
                        className="px-4 py-3 text-left font-mono text-[0.58rem] font-normal uppercase tracking-[0.18em] text-[#c8922a]"
                      >
                        {h}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {PASTA_TABLE.map((row, i) => (
                  <tr
                    key={row.name}
                    className={
                      i % 2 === 0
                        ? "border-b border-[var(--line)]"
                        : "border-b border-[var(--line)] bg-[var(--pastel-peach)]"
                    }
                  >
                    <td className="px-4 py-3 font-serif font-bold italic text-[var(--ink)]">
                      {row.name}
                    </td>
                    <td className="px-4 py-3">
                      <span className="inline-block rounded bg-[var(--pastel-sky)] px-2 py-0.5 font-mono text-[0.58rem] uppercase tracking-[0.08em] text-[var(--ink)]">
                        {row.category}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-[var(--ink-muted)]">
                      {row.shape}
                    </td>
                    <td className="px-4 py-3 text-[var(--ink-muted)]">
                      {row.region}
                    </td>
                    <td className="px-4 py-3 text-[var(--ink-muted)]">
                      {row.sauce}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── INTERACTIVE VISUALIZER ── */}
          <div className="my-12">
            <PastaVisualizer />
          </div>

          {/* ── WHO SHOULD READ ── */}
          <div className="mb-5 mt-14 flex items-baseline gap-4 border-b border-[var(--line)] pb-3">
            <span className="shrink-0 font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              07
            </span>
            <h2 className="font-serif text-[1.05rem] font-medium leading-snug tracking-[0.01em] text-[var(--ink)] sm:text-[1.15rem]">
              Who should read this book?
            </h2>
          </div>

          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            No one and everyone. The honest answer: if you&apos;re looking for
            recipes, you&apos;re at the wrong shelf. If you want to understand
            how pasta engineering works, why some shapes hold sauce and why others
            don&apos;t — the book explains those too, but as footnotes.
          </p>
          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            The real audience sits at the intersection of any of these:
            mathematicians, architects, designers, data visualisation
            practitioners, Montessori teachers, and pasta enthusiasts who
            don&apos;t mind being a little peculiar — the same breed that finds{" "}
            <Link href="/articles/fibonacci-shelf" target="_blank" rel="noopener noreferrer" className="article-euclid-link">
              a shelf built on the Fibonacci sequence
            </Link>{" "}
            perfectly reasonable as furniture.
          </p>
          <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            One Amazon reviewer loaded the equations into Mathematica and started
            spinning the 3D shapes on screen — children who saw it all said
            &ldquo;let me try that!&rdquo; That is one of the finest things a
            book can achieve.
          </p>

          {/* ── AUTHOR CARD ── */}
          <div className="my-10 grid grid-cols-[auto_1fr] gap-5 rounded-2xl bg-[var(--pastel-peach)] p-6 shadow-[var(--shadow-soft)]">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-[var(--ink)] font-serif text-[1.3rem] italic text-[#c8922a]">
              GL
            </div>
            <div>
              <p className="font-serif font-bold leading-snug text-[var(--ink)]">
                George L. Legendre
              </p>
              <p className="mt-0.5 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
                Architect · Writer · Harvard GSD Professor
              </p>
              <p className="mt-3 text-[0.9rem] leading-relaxed text-[var(--ink-muted)]">
                Founding partner of IJP Architects. Specialist in complex
                surfaces. Graduated from Harvard GSD in 1994, later taught at
                ETH Zurich, Princeton, and the AA School of Architecture. The
                firm&apos;s signature works include the Henderson Waves bridge in
                Singapore (300 metres) and the steel Equinox sculpture in
                Birmingham. <em>Pasta by Design</em> is part of a research series
                exploring the intersection of mathematics and design.
              </p>
            </div>
          </div>

          {/* ── BOOK DETAILS ── */}
          <div className="my-10 grid grid-cols-1 gap-6 overflow-hidden rounded-2xl bg-[var(--ink)] px-6 py-8 text-white sm:grid-cols-2">
            <div>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-[#c8922a]">
                Book Details
              </p>
              <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-[0.88rem]">
                {[
                  ["Title", "Pasta by Design"],
                  ["Author", "George L. Legendre"],
                  ["Publisher", "Thames & Hudson"],
                  ["Year", "2011"],
                  ["Pages", "208"],
                  ["ISBN", "978-0-500-51580-0"],
                ].map(([dt, dd]) => (
                  <Fragment key={dt}>
                    <dt className="font-mono text-[0.58rem] uppercase tracking-[0.1em] text-white/45">
                      {dt}
                    </dt>
                    <dd className="text-white/75">
                      {dd}
                    </dd>
                  </Fragment>
                ))}
              </dl>
            </div>
            <div>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-[#c8922a]">
                Reviews
              </p>
              <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-[0.88rem]">
                {[
                  ["MoMA", "Foreword by Paola Antonelli"],
                  ["Amazon", "4.3 / 5 (44 reviews)"],
                  ["Wallpaper*", "Editors' Pick, 2011"],
                  ["German ed.", "2012, DVA Verlag"],
                ].map(([dt, dd]) => (
                  <Fragment key={dt}>
                    <dt className="font-mono text-[0.58rem] uppercase tracking-[0.1em] text-white/45">
                      {dt}
                    </dt>
                    <dd className="text-white/75">
                      {dd}
                    </dd>
                  </Fragment>
                ))}
              </dl>
            </div>
          </div>

          {/* ── FOOTER ── */}
          <div className="mt-16 border-t border-[var(--line)] pt-6 font-mono text-[0.6rem] uppercase tracking-[0.15em] text-[var(--ink-muted)]">
            Abakcus &nbsp;·&nbsp; Mathematics &amp; Design &nbsp;·&nbsp; 2024
            &nbsp;·&nbsp; abakcus.com
          </div>
        </article>
        <ArticleReadMore currentSlug="pasta-by-design" />
      </div>
    </>
  );
}
