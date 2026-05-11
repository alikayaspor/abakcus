import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/home/site-header";
import { ArticleProseLink } from "@/components/articles/article-prose-link";

const OG_IMAGE =
  "https://pub-f821ec2a41964e44873680b9d87ddf19.r2.dev/Bambu%20Lab%20P2S.jpg";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Bambu Lab P2S",
  description:
    "The P2S is the most capable 3D printer available at this price for hands-on STEM learning at home or in a classroom. Setup is fifteen minutes, first-layer calibration is automatic via LiDAR, and the software ecosystem is mature.",
  image: OG_IMAGE,
  brand: { "@type": "Brand", name: "Bambu Lab" },
  offers: {
    "@type": "Offer",
    price: "799",
    priceCurrency: "USD",
    url: "https://bambulab.com/en-us/p2s",
    availability: "https://schema.org/InStock",
  },
  review: {
    "@type": "Review",
    reviewBody:
      "Research consistently shows that children retain concepts significantly longer when they experience them physically. A 3D printer fills exactly that gap. The P2S makes this possible without requiring any engineering background from the person running it.",
    author: { "@type": "Organization", name: "Abakcus" },
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
  },
};

export const metadata: Metadata = {
  title: "Bambu Lab P2S — Geometry You Can Hold",
  description:
    "The Bambu Lab P2S is not just a printer — it's the tool that makes geometry tangible, brings engineering thinking to the kitchen table, and turns abstract math into something a child can hold.",
  keywords: [
    "Bambu Lab P2S",
    "3D printer STEM",
    "3D printer education",
    "CoreXY 3D printer",
    "hands-on math",
    "science education tools",
    "Pythagorean theorem model",
    "Fibonacci 3D print",
  ],
  openGraph: {
    title: "Bambu Lab P2S — Geometry You Can Hold",
    description:
      "Platonic solids, fractals, bridge load challenges, molecular structures. The P2S makes the abstract physical — fifteen minutes from unboxing to first print.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 800,
        alt: "Bambu Lab P2S — enclosed CoreXY 3D printer with AMS 2 Pro",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bambu Lab P2S — Geometry You Can Hold",
    description:
      "The P2S is the tool that makes the abstract tangible — Pythagoras, Fibonacci, bridge load capacity — right there on the table.",
    images: [OG_IMAGE],
  },
  alternates: {
    canonical: "/gadgets/bambu-lab-p2s",
  },
};

const ACTIVITIES = [
  {
    icon: "📐",
    subject: "Mathematics",
    desc: "Platonic solids, fractals, Voronoi diagrams, hyperbolic surfaces. Everything that lives on a chalkboard becomes something you can pass around the room.",
  },
  {
    icon: "🏗️",
    subject: "Engineering",
    desc: "Design a bridge, add weight until it fails. Which infill pattern holds the most load? Make a prediction with your kid, print it, test it, break it.",
  },
  {
    icon: "🔭",
    subject: "Science",
    desc: "Solar system to scale, molecular structures, crystal lattices, cross-sections of bones. The diagram in the textbook becomes an object in a hand.",
  },
];

const VERDICT = {
  good: [
    {
      label: "Makes the abstract physical",
      text: "Math and science concepts become objects. From the Pythagorean theorem to molecular geometry — if it can be described, it can be printed.",
    },
    {
      label: "Setup is genuinely easy",
      text: "Fifteen minutes. No engineering knowledge required. The touchscreen and new UI are a substantial improvement over the P1S.",
    },
    {
      label: "LiDAR on the first layer",
      text: "Automatic calibration keeps failure rates low. When every print attempt succeeds, children stay motivated to keep iterating.",
    },
  ],
  bad: [
    {
      label: "Multi-color waste",
      text: "Every color change purges filament. In complex multi-color prints with kids, material consumption adds up fast.",
    },
    {
      label: "Closed ecosystem",
      text: "Working outside Bambu Studio is increasingly difficult. The firmware tension with the open-source community is ongoing.",
    },
    {
      label: "Filament cost",
      text: "Frequent activity sessions burn through material quickly. Budget for ongoing filament as part of the total cost.",
    },
  ],
};

export default function BambuLabP2SPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />

      {/* ── HERO ── */}
      <header className="grid grid-cols-1 overflow-hidden bg-[#0a0908] md:grid-cols-[1fr_44%]">
        {/* LEFT — dark text panel */}
        <div className="flex items-center bg-[#0a0908] px-[clamp(1.5rem,6vw,4rem)] py-16 md:py-24">
          <div className="w-full max-w-lg">
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-white/30">
              Gadgets &amp; Gear &nbsp;·&nbsp; STEM Education
            </p>
            <h1 className="mt-4 font-serif text-[clamp(2.2rem,5.5vw,4.2rem)] font-bold leading-[1.0] tracking-tight text-[#f0ede8]">
              Bambu Lab P2S
            </h1>
            <p className="mt-5 max-w-sm font-serif text-[1.05rem] italic leading-relaxed text-white/45">
              The P2S is a printer, yes. But it&apos;s also the tool that makes
              the abstract tangible — Pythagoras, Fibonacci, bridge load
              capacity — right there on the table.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[0.58rem] uppercase tracking-[0.14em]">
              <span className="text-[#f0c030]">CoreXY Enclosed</span>
              <span className="text-white/20">+</span>
              <span className="text-[#6aabcc]">LiDAR Calibration</span>
              <span className="text-white/20">/</span>
              <span className="text-white/40">15 min setup</span>
              <span className="text-white/20">/</span>
              <span className="text-white/40">$799</span>
            </div>
            <a
              href="https://bambulab.com/en-us/p2s"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#f0c030] px-5 py-2.5 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-[#111210] transition-opacity hover:opacity-85"
            >
              Bambu Lab Official ↗
            </a>
          </div>
        </div>
        {/* RIGHT — radial mask crops dark bg, machine floats */}
        <div className="flex items-center justify-center bg-[#0a0908] px-4 py-12 md:py-0">
          <Image
            src={OG_IMAGE}
            alt="Bambu Lab P2S — enclosed CoreXY 3D printer with AMS 2 Pro multi-color system"
            width={960}
            height={960}
            className="h-auto w-full max-w-md object-contain"
            style={{
              maskImage:
                "radial-gradient(ellipse 72% 80% at 55% 50%, black 42%, transparent 78%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 72% 80% at 55% 50%, black 42%, transparent 78%)",
            }}
            priority
            sizes="(max-width:768px) 100vw, 44vw"
          />
        </div>
      </header>

      <div className="uc-page-bg pb-16">
        <div className="mx-auto max-w-[var(--page-max)] px-[var(--page-pad)] pt-6">
          <Link
            href="/"
            className="inline-flex text-sm text-[var(--ink-muted)] underline-offset-4 hover:underline"
          >
            ← Back to home
          </Link>
        </div>

        <article className="mx-auto max-w-[720px] px-[var(--page-pad)] pt-14 pb-20 text-[var(--ink)]">

          {/* ── OPENING ── */}
          <p className="mb-14 border-b border-[var(--line)] pb-14 font-serif text-[1.45rem] italic leading-[1.5] text-[var(--ink)] sm:text-[1.65rem]">
            Explaining the Pythagorean theorem is one thing. Handing a child the
            three squares built on each side of a right triangle is another.
          </p>

          {/* ── ACTIVITIES GRID ── */}
          <div className="mb-14 overflow-hidden rounded-xl bg-[#0a0908]">
            <div className="border-b border-white/8 px-6 pt-6 pb-4">
              <p className="font-mono text-[0.56rem] uppercase tracking-[0.2em] text-white/30">
                What gets printed
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3">
              {ACTIVITIES.map((a, i) => (
                <div
                  key={a.subject}
                  className={`px-6 py-6 ${i < 2 ? "sm:border-r border-white/8" : ""} ${i > 0 ? "border-t sm:border-t-0 border-white/8" : ""}`}
                >
                  <span className="mb-4 block text-[1.6rem]" aria-hidden>
                    {a.icon}
                  </span>
                  <p className="mb-2 font-mono text-[0.58rem] uppercase tracking-[0.18em] text-[#f0c030]">
                    {a.subject}
                  </p>
                  <p className="font-mono text-[0.62rem] leading-[1.65] text-white/45">
                    {a.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── PROSE 1 ── */}
          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            Research consistently shows that children retain concepts
            significantly longer when they experience them both visually and
            physically — not just by reading. A 3D printer fills exactly that
            gap. The P2S makes that possible without requiring any engineering
            background from the person running it.
          </p>

          {/* ── STAT ROW ── */}
          <div className="my-10 grid grid-cols-3 divide-x divide-[var(--line)] border-y border-[var(--line)]">
            {[
              { num: "15min", label: "From unboxing to first print" },
              {
                num: "70%",
                label: "More extrusion force than the P1S",
              },
              {
                num: "$799",
                label: "With AMS 2 Pro — LiDAR and touchscreen included",
              },
            ].map(({ num, label }) => (
              <div key={num} className="px-4 py-8 text-center">
                <span className="block font-serif text-[2rem] font-bold leading-none text-[#c89818] sm:text-[2.4rem]">
                  {num}
                </span>
                <p className="mt-2 font-mono text-[0.54rem] uppercase leading-[1.55] tracking-[0.1em] text-[var(--ink-muted)]">
                  {label}
                </p>
              </div>
            ))}
          </div>

          {/* ── PROSE 2 ── */}
          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            Thingiverse and Printables have hundreds of thousands of free files.
            But the real power isn&apos;t there — it&apos;s in a child designing
            something and watching it exist. TinkerCAD is free, runs in a
            browser, and gives an eight-year-old enough tools to model their own
            name in three dimensions in under ten minutes. Sending it to the P2S
            is one click. Something happens in that process: the child produces a
            result. They aren&apos;t watching, they aren&apos;t completing a
            worksheet — something comes into being. That distinction is not small.
          </p>

          {/* ── PULL QUOTE ── */}
          <blockquote className="my-10 border-l-[3px] border-[#c89818] py-1 pl-6 font-serif text-[1.15rem] italic leading-[1.5] text-[var(--ink)]">
            The bridge design challenge is a classic engineering activity: find
            the structure that carries the most load using the least material.
            With the P2S, the iteration cycle shrinks from days to minutes.
            Predict, print, test, revise.
          </blockquote>

          {/* ── PROSE 3 ── */}
          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            One of the harder abstractions in middle school math is the
            relationship between surface area and volume — why two objects with
            identical volumes can have completely different surface areas.
            Putting a sphere and a cube of equal volume in a student&apos;s
            hands and asking them to measure dissolves the abstraction. Holding
            a{" "}
            <ArticleProseLink
              href="/articles/fibonacci-shelf"
              className="article-euclid-link"
            >
              Fibonacci spiral
            </ArticleProseLink>{" "}
            is different from seeing one. Understanding why{" "}
            <ArticleProseLink
              href="/articles/geometry-behind-pringles"
              className="article-euclid-link"
            >
              Voronoi patterns appear on a giraffe&apos;s coat, in atomic
              structure, and in the cross-section of a bone
            </ArticleProseLink>{" "}
            becomes a different kind of question when the pattern is a physical
            object rather than a slide.
          </p>

          {/* ── PROSE 4 ── */}
          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            The machine itself teaches things too. The P2S&apos;s LiDAR sensor
            maps the print surface by measuring the reflection angle of light —
            that alone is a lesson: how distance can be calculated from a beam,
            how robotic vehicles navigate their environments, how the Mars rovers
            see the ground beneath them. The servo extruder samples filament
            resistance twenty thousand times per second, detecting jams in real
            time. These are printer features, yes — but they are also control
            systems, feedback loops, real-time data processing. Engineering
            thinking is built on exactly these concepts, and here they are
            running in a box on your desk.
          </p>

          {/* ── NOTE BLOCK ── */}
          <div className="my-10 border-l-[3px] border-[#c89818] py-1 pl-6">
            <p className="mb-2 font-mono text-[0.55rem] uppercase tracking-[0.2em] text-[#c89818]">
              Note
            </p>
            <p className="text-[0.92rem] leading-[1.75] text-[var(--ink-muted)]">
              In January 2025, Bambu Lab pushed a firmware update that
              restricted third-party software from communicating directly with
              the printer. Tools like OrcaSlicer were affected. If you&apos;re
              working with Bambu Studio — which is more than sufficient for STEM
              activities with kids — this doesn&apos;t touch you. Worth knowing
              before buying if your workflow depends on open-source tooling.
            </p>
          </div>

          {/* ── VERDICT ── */}
          <div className="mt-14 border-t-2 border-[#c89818] pt-10">
            <p className="mb-4 font-mono text-[0.58rem] uppercase tracking-[0.22em] text-[#c89818]">
              Verdict
            </p>
            <p className="mb-8 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
              The P2S is the most capable tool available at this price for
              hands-on STEM learning at home or in a classroom. Setup is fifteen
              minutes, first-layer calibration is automatic, and the software
              ecosystem is mature. Go in knowing the firmware situation and the
              chances of regret are low.
            </p>

            <div className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {VERDICT.good.map((v) => (
                <div
                  key={v.label}
                  className="rounded-xl border border-[var(--line)] bg-white p-5"
                >
                  <p className="mb-2 font-mono text-[0.52rem] uppercase tracking-[0.16em] text-[#c89818]">
                    ↑ {v.label}
                  </p>
                  <p className="font-mono text-[0.65rem] leading-[1.6] text-[var(--ink-muted)]">
                    {v.text}
                  </p>
                </div>
              ))}
              {VERDICT.bad.map((v) => (
                <div
                  key={v.label}
                  className="rounded-xl border border-[var(--line)] bg-white p-5"
                >
                  <p className="mb-2 font-mono text-[0.52rem] uppercase tracking-[0.16em] text-[#c83828]">
                    ↓ {v.label}
                  </p>
                  <p className="font-mono text-[0.65rem] leading-[1.6] text-[var(--ink-muted)]">
                    {v.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://bambulab.com/en-us/p2s"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] px-5 py-2.5 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white transition-opacity hover:opacity-80"
              >
                Bambu Lab Official ↗
              </a>
              <p className="font-mono text-[0.65rem] text-[var(--ink-muted)]">
                Standalone{" "}
                <strong className="font-semibold text-[var(--ink)]">
                  $799
                </strong>{" "}
                · AMS 2 Pro Combo ~$849
              </p>
            </div>
          </div>

          {/* ── RELATED ── */}
          <div className="mt-16 border-t border-[var(--line)] pt-10">
            <p className="mb-5 font-mono text-[0.58rem] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
              Also on Abakcus
            </p>
            <p className="text-base leading-relaxed sm:text-[1.05rem] sm:leading-[1.85]">
              If the P2S builds things up, the{" "}
              <ArticleProseLink
                href="/gadgets/xtool-f1-ultra"
                className="article-euclid-link"
              >
                xTool F1 Ultra
              </ArticleProseLink>{" "}
              marks them — 20W fiber plus 20W diode, research-grade precision
              on metal and wood from one desk. And for the structures that come
              off the printer:{" "}
              <ArticleProseLink
                href="/articles/snelson-needle-tower"
                className="article-euclid-link"
              >
                Kenneth Snelson&apos;s Needle Tower
              </ArticleProseLink>{" "}
              is the same question the bridge challenge asks — how does a
              structure carry load with almost nothing?
            </p>
          </div>

        </article>
      </div>
    </>
  );
}
