import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/home/site-header";
import { ArticleProseLink } from "@/components/articles/article-prose-link";
import { ArticleReadMore } from "@/components/articles/article-read-more";

export const metadata: Metadata = {
  title: "The Fractal Geometry of Nature — Benoît B. Mandelbrot",
  description:
    "Mandelbrot didn't just describe a new kind of mathematics. He gave the natural world a language it had always deserved.",
  openGraph: {
    title: "The Fractal Geometry of Nature — Benoît B. Mandelbrot",
    description:
      "Mandelbrot didn't just describe a new kind of mathematics. He gave the natural world a language it had always deserved.",
    images: [
      {
        url: "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/The%20Fractal%20Geometry%20of%20Nature%20%E2%80%94%20Benoi%CC%82t%20B.%20Mandelbrot.jpg",
        width: 800,
        height: 1000,
        alt: "The Fractal Geometry of Nature — Benoît B. Mandelbrot",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Fractal Geometry of Nature — Benoît B. Mandelbrot",
    description:
      "How do you describe the shape of a cloud? In 1982, Mandelbrot said: then let us build a new geometry.",
    images: [
      "https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/The%20Fractal%20Geometry%20of%20Nature%20%E2%80%94%20Benoi%CC%82t%20B.%20Mandelbrot.jpg",
    ],
  },
  alternates: {
    canonical: "/books/fractal-geometry-of-nature",
  },
};

export default function FractalGeometryPage() {
  return (
    <>
      <SiteHeader />

      {/* ── HERO ── */}
      <header className="relative overflow-hidden bg-[#100a1e] pb-0">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, #06030f 0%, #100a1e 100%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[var(--page-max)] px-[var(--page-pad)]">
          <div className="flex flex-col items-center gap-10 py-20 text-center md:flex-row md:gap-16 md:py-28 md:text-left">
            {/* Cover */}
            <div className="w-52 shrink-0 sm:w-64 md:w-72">
              <div
                className="relative overflow-hidden rounded-lg shadow-[0_32px_80px_-16px_rgba(0,0,0,0.8)]"
                style={{ aspectRatio: "3/4" }}
              >
                <Image
                  src="https://pub-20a4177bffe64c589df64f56f79e9127.r2.dev/The%20Fractal%20Geometry%20of%20Nature%20%E2%80%94%20Benoi%CC%82t%20B.%20Mandelbrot.jpg"
                  alt="The Fractal Geometry of Nature — Benoît B. Mandelbrot, W. H. Freeman 1982"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width:768px) 208px, 288px"
                />
              </div>
            </div>

            {/* Text */}
            <div className="max-w-xl">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-[#9b7fe8]">
                On the Book &nbsp;·&nbsp; 1982 &nbsp;·&nbsp; W. H. Freeman
              </p>
              <h1 className="mt-5 font-serif text-[clamp(2rem,6vw,4.2rem)] font-bold leading-[1.0] tracking-tight text-[#f5f0ee]">
                The Fractal
                <br />
                Geometry of{" "}
                <em className="text-[#9b7fe8]">Nature</em>
              </h1>
              <p className="mt-6 font-serif text-lg italic leading-relaxed text-[#8a7fa0]">
                A new geometry for a world that was never smooth.
              </p>
              <p className="mt-5 font-mono text-[0.68rem] uppercase tracking-[0.15em] text-[#46365e]">
                Benoît B. Mandelbrot&nbsp;/&nbsp;468 pages&nbsp;/&nbsp;∞
                coastline&nbsp;/&nbsp;1 new way of seeing
              </p>
              <a
                href="https://amzn.to/4mNq9Ba"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#7b5fc8] px-5 py-2.5 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white transition-opacity duration-200 hover:opacity-85"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                Buy on Amazon
              </a>
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
            content="The Fractal Geometry of Nature by Benoît B. Mandelbrot"
          />
          <meta itemProp="author" content="Abakcus" />

          {/* ── OPENING ── */}
          <p className="mb-14 border-b border-[var(--line)] pb-14 font-serif text-[1.45rem] italic leading-[1.5] text-[var(--ink)] sm:text-[1.65rem]">
            How would you describe the shape of a cloud?
          </p>

          {/* ── INTRO PROSE ── */}
          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            Not round. Not oval. Certainly not smooth. With the tools
            traditional geometry gives us — circles, triangles, planes — a
            cloud cannot be described. Neither can a mountain&apos;s silhouette.
            Nor the windings of a coastline, the arms of a snowflake,{" "}
            <ArticleProseLink
              href="/books/the-art-and-science-of-ernst-haeckel"
              className="article-euclid-link"
            >
              the branching of a vein
            </ArticleProseLink>
            , the path of a lightning bolt.
          </p>
          <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            In 1982, Benoît Mandelbrot said: then let us build a new geometry.
          </p>

          {/* ── SELF-SIMILARITY PANEL ── */}
          <div className="mb-10 overflow-hidden rounded-xl bg-[#0e0e14] px-7 py-8 sm:px-9">
            <p className="mb-6 font-sans text-[0.58rem] uppercase tracking-[0.18em] text-white/30">
              Self-similarity — the core idea
            </p>
            <div className="flex justify-center overflow-x-auto">
              <svg
                width="420"
                height="200"
                viewBox="0 0 420 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="max-w-full"
                aria-label="Sierpiński triangle illustrating self-similarity: every part resembles the whole"
              >
                {/* Large triangle */}
                <polygon
                  points="70,170 140,50 210,170"
                  fill="none"
                  stroke="rgba(91,63,168,0.9)"
                  strokeWidth="1.5"
                />
                {/* Mid triangles */}
                <polygon
                  points="70,170 105,110 140,170"
                  fill="none"
                  stroke="rgba(91,63,168,0.7)"
                  strokeWidth="1"
                />
                <polygon
                  points="140,170 175,110 210,170"
                  fill="none"
                  stroke="rgba(91,63,168,0.7)"
                  strokeWidth="1"
                />
                <polygon
                  points="105,110 140,50 175,110"
                  fill="none"
                  stroke="rgba(91,63,168,0.7)"
                  strokeWidth="1"
                />
                {/* Small triangles left */}
                <polygon
                  points="70,170 87,140 105,170"
                  fill="none"
                  stroke="rgba(123,95,200,0.55)"
                  strokeWidth="0.8"
                />
                <polygon
                  points="105,170 122,140 140,170"
                  fill="none"
                  stroke="rgba(123,95,200,0.55)"
                  strokeWidth="0.8"
                />
                <polygon
                  points="87,140 105,110 122,140"
                  fill="none"
                  stroke="rgba(123,95,200,0.55)"
                  strokeWidth="0.8"
                />
                {/* Small triangles right */}
                <polygon
                  points="140,170 157,140 175,170"
                  fill="none"
                  stroke="rgba(123,95,200,0.55)"
                  strokeWidth="0.8"
                />
                <polygon
                  points="175,170 192,140 210,170"
                  fill="none"
                  stroke="rgba(123,95,200,0.55)"
                  strokeWidth="0.8"
                />
                <polygon
                  points="157,140 175,110 192,140"
                  fill="none"
                  stroke="rgba(123,95,200,0.55)"
                  strokeWidth="0.8"
                />
                {/* Small triangles top */}
                <polygon
                  points="105,110 122,80 140,110"
                  fill="none"
                  stroke="rgba(123,95,200,0.55)"
                  strokeWidth="0.8"
                />
                <polygon
                  points="140,110 157,80 175,110"
                  fill="none"
                  stroke="rgba(123,95,200,0.55)"
                  strokeWidth="0.8"
                />
                <polygon
                  points="122,80 140,50 157,80"
                  fill="none"
                  stroke="rgba(123,95,200,0.55)"
                  strokeWidth="0.8"
                />
                {/* Arrow */}
                <line
                  x1="230"
                  y1="110"
                  x2="255"
                  y2="110"
                  stroke="rgba(255,255,255,0.25)"
                  strokeWidth="1"
                  strokeDasharray="3 2"
                />
                <polygon
                  points="255,107 261,110 255,113"
                  fill="rgba(255,255,255,0.25)"
                />
                {/* Smaller version on the right */}
                <polygon
                  points="290,155 325,95 360,155"
                  fill="none"
                  stroke="rgba(91,63,168,0.9)"
                  strokeWidth="1.5"
                />
                <polygon
                  points="290,155 307,125 325,155"
                  fill="none"
                  stroke="rgba(91,63,168,0.65)"
                  strokeWidth="0.9"
                />
                <polygon
                  points="325,155 342,125 360,155"
                  fill="none"
                  stroke="rgba(91,63,168,0.65)"
                  strokeWidth="0.9"
                />
                <polygon
                  points="307,125 325,95 342,125"
                  fill="none"
                  stroke="rgba(91,63,168,0.65)"
                  strokeWidth="0.9"
                />
                <polygon
                  points="290,155 298,140 307,155"
                  fill="none"
                  stroke="rgba(155,127,232,0.45)"
                  strokeWidth="0.7"
                />
                <polygon
                  points="307,155 315,140 325,155"
                  fill="none"
                  stroke="rgba(155,127,232,0.45)"
                  strokeWidth="0.7"
                />
                <polygon
                  points="325,155 333,140 342,155"
                  fill="none"
                  stroke="rgba(155,127,232,0.45)"
                  strokeWidth="0.7"
                />
                <polygon
                  points="342,155 351,140 360,155"
                  fill="none"
                  stroke="rgba(155,127,232,0.45)"
                  strokeWidth="0.7"
                />
                <polygon
                  points="298,140 307,125 315,140"
                  fill="none"
                  stroke="rgba(155,127,232,0.45)"
                  strokeWidth="0.7"
                />
                <polygon
                  points="333,140 342,125 351,140"
                  fill="none"
                  stroke="rgba(155,127,232,0.45)"
                  strokeWidth="0.7"
                />
                <polygon
                  points="315,125 325,110 333,125"
                  fill="none"
                  stroke="rgba(155,127,232,0.4)"
                  strokeWidth="0.7"
                />
                {/* Labels */}
                <text
                  x="140"
                  y="192"
                  fontFamily="Georgia,serif"
                  fontSize="10"
                  fill="rgba(255,255,255,0.35)"
                  textAnchor="middle"
                  fontStyle="italic"
                >
                  Sierpiński triangle
                </text>
                <text
                  x="325"
                  y="192"
                  fontFamily="Georgia,serif"
                  fontSize="10"
                  fill="rgba(255,255,255,0.35)"
                  textAnchor="middle"
                  fontStyle="italic"
                >
                  zoom in — same structure
                </text>
              </svg>
            </div>
            <p className="mt-5 text-center font-serif text-[0.82rem] italic leading-relaxed text-white/40">
              Every part resembles the whole. This is self-similarity — the
              heart of fractal geometry.
            </p>
          </div>

          {/* ── SECOND PROSE BLOCK ── */}
          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            Mandelbrot&apos;s proposition sounds almost childlike at first: many
            shapes in nature repeat themselves. Look at a mountain from far
            away, then from close up — similar roughness. Take a small section
            of a coastline, magnify it — similar curves. Break off one branch of
            a broccoli head — a miniature of the whole plant.
          </p>
          <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            This idea of &ldquo;self-similarity&rdquo; was not new to
            mathematics. But Mandelbrot took it from a curiosity and made it an
            instrument for describing the language of nature itself. And he gave
            it a name: <em>fractal</em>.
          </p>

          {/* ── COASTLINE BOX ── */}
          <div className="mb-10 rounded-xl border border-[var(--line)] bg-white px-7 py-7 sm:px-8 sm:py-8">
            <p className="mb-4 font-sans text-[0.58rem] uppercase tracking-[0.18em] text-[var(--ink-muted)]">
              Mandelbrot&apos;s most famous question
            </p>
            <p className="mb-6 font-serif text-[1.25rem] font-medium leading-[1.4] text-[var(--ink)] sm:text-[1.35rem]">
              How long is the coastline of Britain?
            </p>
            <div className="divide-y divide-[var(--line)]">
              {[
                {
                  scale: "100 km ruler",
                  desc: "Large bays and peninsulas measured — minor inlets missed entirely.",
                  len: "~2,800 km",
                  w: 3,
                },
                {
                  scale: "10 km ruler",
                  desc: "Smaller inlets captured. The line grows longer as detail increases.",
                  len: "~3,400 km",
                  w: 2,
                },
                {
                  scale: "1 km ruler",
                  desc: "Coves, rocks, tide pools — each curve adds length. No limit in sight.",
                  len: "~17,820 km",
                  w: 1,
                },
              ].map((row) => (
                <div
                  key={row.scale}
                  className="flex items-center gap-4 py-4 first:pt-0 last:pb-0"
                >
                  <div className="shrink-0">
                    <svg
                      width="36"
                      height="16"
                      viewBox="0 0 36 16"
                      aria-hidden="true"
                    >
                      <line
                        x1="0"
                        y1="8"
                        x2="36"
                        y2="8"
                        stroke="#5b3fa8"
                        strokeWidth={row.w}
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-sans text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-[#5b3fa8]">
                      {row.scale}
                    </p>
                    <p className="mt-0.5 font-serif text-sm italic leading-snug text-[var(--ink-muted)]">
                      {row.desc}
                    </p>
                  </div>
                  <p className="shrink-0 font-sans text-sm font-medium text-[var(--ink)]">
                    {row.len}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── THIRD PROSE BLOCK ── */}
          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            The answer depends on the scale you use. The smaller your ruler, the
            more curves you catch, and the longer the coastline grows — without
            limit. The coastline is, in a meaningful sense, infinitely long.
          </p>
          <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            This question is both perfectly simple and completely world-altering.
          </p>

          {/* ── PULL QUOTE ── */}
          <blockquote className="my-10 border-l-[3px] border-[#7b5fc8] py-1 pl-6">
            <p className="font-serif text-[1.2rem] italic leading-[1.65] text-[var(--ink)] sm:text-[1.3rem]">
              The book is not just a new branch of mathematics. It is a manifesto
              about how science sees — and misses — the world.
            </p>
          </blockquote>

          {/* ── DIVIDER ── */}
          <div className="my-10 flex items-center gap-4">
            <span className="h-px flex-1 bg-[var(--line)]" />
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
              §
            </span>
            <span className="h-px flex-1 bg-[var(--line)]" />
          </div>

          {/* ── FOURTH PROSE BLOCK ── */}
          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            Physics assumes smooth curves. Economic models assume neat
            distributions. But the real world is not smooth. The real world is
            jagged, fragile, irregular-looking — yet in possession of a deep
            order that{" "}
            <ArticleProseLink
              href="/books/oliver-byrne-euclid"
              className="article-euclid-link"
            >
              Euclid&apos;s tools
            </ArticleProseLink>{" "}
            were never built to measure.
          </p>
          <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            Do not be misled by the difficulty of some sections. Getting lost
            here is not a failure — it is almost part of the experience. Because
            just below a dense equation, there is always an image from nature: a
            satellite photograph of a river basin, a bronchial tree, a magnified
            corner of the Mandelbrot set. And that image keeps you turning pages
            when nothing else would.
          </p>

          {/* ── SECTION: FRACTALS IN NATURE ── */}
          <p className="mb-5 font-sans text-[0.58rem] uppercase tracking-[0.18em] text-[var(--ink-muted)]">
            Fractals in the natural world
          </p>

          <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              {
                name: "Trees & rivers",
                desc: "Branching patterns repeat at every scale — the small mirrors the large.",
                icon: (
                  <svg
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    aria-hidden="true"
                  >
                    <line
                      x1="20" y1="36" x2="20" y2="10"
                      stroke="#7b5fc8" strokeWidth="1.5" strokeLinecap="round"
                    />
                    <line
                      x1="20" y1="28" x2="12" y2="20"
                      stroke="#7b5fc8" strokeWidth="1.2" strokeLinecap="round"
                    />
                    <line
                      x1="20" y1="24" x2="28" y2="16"
                      stroke="#7b5fc8" strokeWidth="1.2" strokeLinecap="round"
                    />
                    <line
                      x1="12" y1="20" x2="7" y2="14"
                      stroke="#9b7fe8" strokeWidth="0.9" strokeLinecap="round"
                    />
                    <line
                      x1="12" y1="20" x2="10" y2="13"
                      stroke="#9b7fe8" strokeWidth="0.9" strokeLinecap="round"
                    />
                    <line
                      x1="28" y1="16" x2="33" y2="10"
                      stroke="#9b7fe8" strokeWidth="0.9" strokeLinecap="round"
                    />
                    <line
                      x1="28" y1="16" x2="30" y2="9"
                      stroke="#9b7fe8" strokeWidth="0.9" strokeLinecap="round"
                    />
                    <line
                      x1="20" y1="10" x2="17" y2="4"
                      stroke="#9b7fe8" strokeWidth="0.9" strokeLinecap="round"
                    />
                    <line
                      x1="20" y1="10" x2="23" y2="4"
                      stroke="#9b7fe8" strokeWidth="0.9" strokeLinecap="round"
                    />
                  </svg>
                ),
              },
              {
                name: "Snowflakes",
                desc: "Six-fold symmetry that repeats inward — structure within structure within structure.",
                icon: (
                  <svg
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    aria-hidden="true"
                  >
                    <circle cx="20" cy="20" r="14" stroke="#7b5fc8" strokeWidth="1" strokeDasharray="2 2" />
                    <circle cx="20" cy="20" r="9" stroke="#9b7fe8" strokeWidth="1" strokeDasharray="2 2" />
                    <circle cx="20" cy="20" r="5" stroke="#b5a0f0" strokeWidth="1" />
                    <circle cx="20" cy="20" r="2" fill="#7b5fc8" />
                    <line x1="20" y1="6" x2="20" y2="2" stroke="#7b5fc8" strokeWidth="0.8" />
                    <line x1="20" y1="34" x2="20" y2="38" stroke="#7b5fc8" strokeWidth="0.8" />
                    <line x1="6" y1="20" x2="2" y2="20" stroke="#7b5fc8" strokeWidth="0.8" />
                    <line x1="34" y1="20" x2="38" y2="20" stroke="#7b5fc8" strokeWidth="0.8" />
                  </svg>
                ),
              },
              {
                name: "Coastlines",
                desc: "Every zoom reveals new complexity. The length grows without end.",
                icon: (
                  <svg
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    aria-hidden="true"
                  >
                    <path d="M8 32 Q12 20 20 18 Q28 16 30 8" stroke="#7b5fc8" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                    <path d="M10 34 Q16 28 18 22 Q20 16 24 10" stroke="#9b7fe8" strokeWidth="1" strokeLinecap="round" fill="none" />
                    <path d="M14 36 Q18 30 20 25 Q22 20 26 15" stroke="#b5a0f0" strokeWidth="0.8" strokeLinecap="round" fill="none" />
                    <path d="M6 30 Q10 26 12 24 Q14 22 16 18" stroke="#9b7fe8" strokeWidth="0.8" strokeLinecap="round" fill="none" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div
                key={item.name}
                className="flex flex-col gap-3 rounded-xl border border-[var(--line)] bg-white px-5 py-5"
              >
                {item.icon}
                <p className="font-serif text-[0.95rem] font-medium text-[var(--ink)]">
                  {item.name}
                </p>
                <p className="text-sm leading-relaxed text-[var(--ink-muted)]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* ── MANDELBROT QUOTE ── */}
          <div className="mb-10 rounded-xl bg-[#5b3fa8] px-7 py-7 sm:px-8 sm:py-8">
            <p className="mb-4 font-serif text-[1.05rem] italic leading-[1.7] text-white/90 sm:text-[1.1rem]">
              &ldquo;Scientists study the world as it is; engineers create the
              world that never has been; yet poets imagine the world that ought
              to be. I believe I am all three.&rdquo;
            </p>
            <p className="font-sans text-[0.62rem] uppercase tracking-[0.16em] text-white/45">
              Benoît B. Mandelbrot &nbsp;·&nbsp; 2010
            </p>
          </div>

          {/* ── DIVIDER ── */}
          <div className="my-10 flex items-center gap-4">
            <span className="h-px flex-1 bg-[var(--line)]" />
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
              §
            </span>
            <span className="h-px flex-1 bg-[var(--line)]" />
          </div>

          {/* ── CLOSING PROSE ── */}
          <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            After reading this book, you step outside and something has shifted.
            You look at the branching of a tree, the edge of a cloud,{" "}
            <ArticleProseLink
              href="/tools/river-runner"
              className="article-euclid-link"
            >
              the bend of a river
            </ArticleProseLink>{" "}
            — and you see them differently. The world&apos;s appearance
            hasn&apos;t changed. But the language that describes it finally has
            a name.
          </p>

          {/* ── VERDICT ── */}
          <div className="mt-12 flex gap-5 rounded-xl border border-[var(--line)] bg-white px-6 py-6 sm:px-8 sm:py-7">
            <span className="shrink-0 pt-0.5 text-2xl leading-none tracking-widest text-[#7b5fc8]">
              ★★★★★
            </span>
            <div>
              <p className="font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
                In short
              </p>
              <p className="mt-2 font-serif text-base italic leading-relaxed text-[var(--ink-muted)] sm:text-[1.05rem]">
                Mandelbrot didn&apos;t write a textbook. He wrote a new way of
                seeing. Difficult in places, visionary throughout — and one of
                those rare books that genuinely changes what you notice when you
                look at the world.
              </p>
            </div>
          </div>

          {/* ── FOOTER NOTE ── */}
          <p className="mt-12 text-xs leading-relaxed text-[var(--ink-muted)]">
            Benoît B. Mandelbrot —{" "}
            <a
              href="https://amzn.to/4mNq9Ba"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-[#7b5fc8]"
            >
              <em>The Fractal Geometry of Nature</em>
            </a>
            <br />
            W. H. Freeman, 1982 &nbsp;·&nbsp; abakcus.com
          </p>
        </article>
        <ArticleReadMore currentSlug="fractal-geometry-of-nature" />
      </div>
    </>
  );
}
