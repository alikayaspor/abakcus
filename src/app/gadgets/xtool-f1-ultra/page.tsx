import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/home/site-header";
import { ArticleProseLink } from "@/components/articles/article-prose-link";

export const metadata: Metadata = {
  title: "xTool F1 Ultra — Dual Laser Engraver for STEM Classrooms",
  description:
    "The moment a student holds something they designed and made with their own hands — that moment changes everything. The xTool F1 Ultra is built around that fact.",
  openGraph: {
    title: "xTool F1 Ultra — Dual Laser Engraver for STEM Classrooms",
    description:
      "Two lasers, research-grade precision, and a design calm enough for daily classroom use.",
    images: [
      {
        url: "https://pub-f821ec2a41964e44873680b9d87ddf19.r2.dev/xTool%20F1%20Ultra.webp",
        width: 1200,
        height: 800,
        alt: "xTool F1 Ultra — dual laser engraver",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "xTool F1 Ultra — Dual Laser Engraver for STEM Classrooms",
    description:
      "20W fiber + 20W diode. Metal in the morning, wood in the afternoon — same machine, same desk.",
    images: [
      "https://pub-f821ec2a41964e44873680b9d87ddf19.r2.dev/xTool%20F1%20Ultra.webp",
    ],
  },
  alternates: {
    canonical: "/gadgets/xtool-f1-ultra",
  },
};

const SPECS = [
  { value: "10,000", unit: "mm/s", label: "Engraving speed" },
  { value: "220×220", unit: "mm", label: "Work area — largest in class" },
  { value: "0.03", unit: "mm", label: "Fiber spot size" },
  { value: "7", unit: "GB", label: "Internal storage" },
];

const USE_CASES = [
  {
    subject: "Physics & Engineering",
    title: "Circuit boards & prototypes",
    desc: "Engrave precise circuit diagrams onto real materials. Fabricate custom parts for engineering projects that go beyond paper.",
  },
  {
    subject: "Chemistry & Materials",
    title: "Material science in action",
    desc: "Work across metals, organics, and composites in a single session. The periodic table stops being a wall chart.",
  },
  {
    subject: "Design & Art",
    title: "3D curve engraving",
    desc: "Engrave on curved surfaces — rings, cylinders, custom objects. Geometry becomes something you make, not just study.",
  },
  {
    subject: "Computer Science",
    title: "Digital to physical",
    desc: "Import SVG, DXF, PNG files directly. The path from screen to object becomes short enough to feel like one step.",
  },
];

const FIELD_NOTES = [
  'At MIT\'s "How to Make (Almost) Anything" course, a student used the F1 Ultra to engrave circuit boards for microscopic QFN and BGA electronic components.',
  'Student Brian Huang created microscopic art samples for a "nanopoems" project — pushing the boundary between precision engineering and creative work.',
  "At FAB25, participants used the F1 Ultra to craft custom tiles assembled into a programmable robotic sculpture — blending cultural heritage with hands-on STEAM learning.",
  "The F1 Ultra is listed in MIT Center for Bits and Atoms' official tool inventory, validating its research-grade performance for next-generation digital fabrication.",
];

export default function XToolF1UltraPage() {
  return (
    <>
      <SiteHeader />

      {/* ── HERO ── */}
      <header className="grid grid-cols-1 overflow-hidden bg-[#f0ede8] md:grid-cols-[1fr_44%]">
        {/* LEFT — text */}
        <div className="flex items-center px-[clamp(1.5rem,6vw,4rem)] py-16 md:py-24">
          <div className="w-full max-w-lg">
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-[#0c0f14]/30">
              Gadgets &amp; Gear &nbsp;·&nbsp; STEM Education
            </p>
            <h1 className="mt-4 font-serif text-[clamp(2.2rem,5.5vw,4.2rem)] font-bold leading-[1.0] tracking-tight text-[#0c0f14]">
              xTool F1 Ultra
            </h1>
            <p className="mt-5 max-w-sm font-serif text-[1.05rem] italic leading-relaxed text-[#0c0f14]/45">
              The moment a student holds something they designed and made with their own hands — that moment changes everything.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[0.58rem] uppercase tracking-[0.14em]">
              <span className="text-[#c94d1a]">20W Fiber</span>
              <span className="text-[#0c0f14]/15">+</span>
              <span className="text-[#1d4ed8]">20W Diode</span>
              <span className="text-[#0c0f14]/15">/</span>
              <span className="text-[#0c0f14]/35">10,000 mm/s</span>
              <span className="text-[#0c0f14]/15">/</span>
              <span className="text-[#0c0f14]/35">220×220mm</span>
            </div>
            <a
              href="https://amzn.to/4tqrDnj"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0c0f14] px-5 py-2.5 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white transition-opacity hover:opacity-80"
            >
              Buy on Amazon ↗
            </a>
          </div>
        </div>
        {/* RIGHT — mix-blend-multiply on light bg: white disappears, machine floats */}
        <div className="flex items-center justify-center px-8 py-12 md:py-0">
          <Image
            src="https://pub-f821ec2a41964e44873680b9d87ddf19.r2.dev/xTool%20F1%20Ultra.webp"
            alt="xTool F1 Ultra — 20W fiber & 20W diode dual laser engraver"
            width={960}
            height={720}
            className="h-auto w-full max-w-xs object-contain mix-blend-multiply"
            priority
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
            A geometry diagram on a screen is one thing. That same diagram
            engraved into metal by a student&apos;s own hands is something else
            entirely.
          </p>

          {/* ── INTRO PROSE ── */}
          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            Abstract concepts become real the moment they can be touched.
            That&apos;s not a teaching philosophy — it&apos;s a simple fact
            about how understanding works. The{" "}
            <ArticleProseLink
              href="https://amzn.to/4tqrDnj"
              className="article-euclid-link"
            >
              xTool F1 Ultra
            </ArticleProseLink>{" "}
            is a tool built around that fact.
          </p>

          {/* ── PRODUCT IMAGE ── */}
          <figure className="mb-10 -mx-[var(--page-pad)]">
            <div className="flex items-center justify-center bg-[#e8e3db] py-10 px-8">
              <Image
                src="https://pub-f821ec2a41964e44873680b9d87ddf19.r2.dev/xTool%20F1%20Ultra.webp"
                alt="xTool F1 Ultra — 20W fiber & 20W diode dual laser engraver"
                width={960}
                height={720}
                className="h-auto w-full max-w-sm object-contain mix-blend-multiply"
                priority
              />
            </div>
            <figcaption className="mt-3 px-[var(--page-pad)] text-center font-sans text-xs text-[var(--ink-muted)]">
              xTool F1 Ultra — 20W fiber laser + 20W diode laser, 220×220mm work area
            </figcaption>
          </figure>
          <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            This is not simply &ldquo;more power&rdquo; — it is two different
            physical principles, two different families of materials, two
            different worlds operating from the same desk. In a STEM classroom,
            that means material science in the morning and organic surface work
            in the afternoon, on the same machine, the same day. It is the kind
            of range that recalls{" "}
            <ArticleProseLink
              href="/articles/specimens-fancy-turning"
              className="article-euclid-link"
            >
              Victorian ornamental turning
            </ArticleProseLink>{" "}
            — another era when precision machinery and artistry shared the same
            table.
          </p>

          {/* ── DUAL LASER PANEL ── */}
          <div className="mb-10 overflow-hidden rounded-xl bg-[#0c0f14] px-7 py-8 sm:px-9">
            <p className="mb-6 font-sans text-[0.58rem] uppercase tracking-[0.18em] text-white/30">
              Two lasers — two worlds
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Fiber */}
              <div className="rounded-lg border border-[#e85d26]/25 bg-[#e85d26]/10 px-5 py-5">
                <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#e85d26]">
                  Fiber Laser
                </p>
                <p className="mt-2 font-serif text-[2rem] font-bold leading-none text-white/90">
                  20W
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {["Metal", "Stone", "Ceramic"].map((m) => (
                    <span
                      key={m}
                      className="rounded-full border border-white/10 px-2 py-0.5 font-sans text-[0.65rem] text-white/55"
                    >
                      {m}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-xs leading-relaxed text-white/40">
                  Deep engraving, embossing, thin metal cutting. Cuts 0.4mm
                  brass, 0.3mm stainless steel. Spot size: 0.03 × 0.03mm.
                </p>
              </div>
              {/* Diode */}
              <div className="rounded-lg border border-[#2563eb]/25 bg-[#2563eb]/10 px-5 py-5">
                <p className="font-sans text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#6094f8]">
                  Diode Laser
                </p>
                <p className="mt-2 font-serif text-[2rem] font-bold leading-none text-white/90">
                  20W
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {["Wood", "Leather", "Acrylic", "Glass"].map((m) => (
                    <span
                      key={m}
                      className="rounded-full border border-white/10 px-2 py-0.5 font-sans text-[0.65rem] text-white/55"
                    >
                      {m}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-xs leading-relaxed text-white/40">
                  Cuts up to 15mm wood and 12mm acrylic. High-quality surface
                  engraving on organic and composite materials.
                </p>
              </div>
            </div>
          </div>

          {/* ── SPECS ── */}
          <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {SPECS.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-[var(--line)] bg-white px-4 py-4 text-center"
              >
                <p className="font-sans text-[1.25rem] font-medium leading-none text-[var(--ink)]">
                  {s.value}
                  <span className="ml-0.5 text-[0.65rem] font-semibold text-[#2563eb]">
                    {s.unit}
                  </span>
                </p>
                <p className="mt-1.5 text-xs leading-snug text-[var(--ink-muted)]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* ── PULL QUOTE ── */}
          <blockquote className="my-10 border-l-[3px] border-[#2563eb] py-1 pl-6">
            <p className="font-serif text-[1.2rem] italic leading-[1.65] text-[var(--ink)] sm:text-[1.3rem]">
              No waiting. No frustration. The student designs something, and
              five minutes later holds it. That momentum is everything.
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

          {/* ── SECOND PROSE ── */}
          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            10,000 mm/s speed matters not just as a specification — it matters
            because a student who designs something and holds the finished object
            five minutes later stays engaged in a way that a student who waits
            days never quite does. In project-based learning, momentum is the
            curriculum. Richard Feynman understood this: the{" "}
            <ArticleProseLink
              href="/articles/feynman-technique"
              className="article-euclid-link"
            >
              Feynman technique
            </ArticleProseLink>{" "}
            works because it forces you to produce, not just consume. The F1
            Ultra applies the same logic in three dimensions.
          </p>
          <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            The 220 × 220mm work area — the largest of any desktop fiber laser
            on the market — means group projects fit. Multiple students working
            on different components of the same surface, the same session. When{" "}
            <ArticleProseLink
              href="/books/oliver-byrne-euclid"
              className="article-euclid-link"
            >
              Euclid&apos;s propositions
            </ArticleProseLink>{" "}
            can be engraved at 1:1 scale onto a real surface, geometry stops
            being abstract.
          </p>

          {/* ── SECTION: USE CASES ── */}
          <div className="mb-5 flex items-baseline gap-4 border-b border-[var(--line)] pb-3">
            <span className="shrink-0 font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              01
            </span>
            <h2 className="font-serif text-[1.05rem] font-medium leading-snug tracking-[0.01em] text-[var(--ink)] sm:text-[1.15rem]">
              What students actually build
            </h2>
          </div>

          <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {USE_CASES.map((u) => (
              <div
                key={u.title}
                className="rounded-xl border border-[var(--line)] bg-white px-5 py-5"
              >
                <p className="font-sans text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-[#0ea57a]">
                  {u.subject}
                </p>
                <p className="mt-2 font-serif text-[0.95rem] font-medium text-[var(--ink)]">
                  {u.title}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--ink-muted)]">
                  {u.desc}
                </p>
              </div>
            ))}
          </div>

          {/* ── VIDEO EMBED ── */}
          <div className="mb-10">
            <div className="overflow-hidden rounded-xl" style={{ aspectRatio: "16/9" }}>
              <iframe
                src="https://www.youtube.com/embed/7IVH-XM_oCg"
                title="xTool F1 Ultra — product video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          {/* ── FIELD NOTES ── */}
          <div className="mb-10 overflow-hidden rounded-xl bg-[#0c0f14] px-7 py-7 sm:px-8 sm:py-8">
            <p className="mb-6 font-sans text-[0.58rem] uppercase tracking-[0.18em] text-white/30">
              In the field
            </p>
            <ul className="flex flex-col gap-5">
              {FIELD_NOTES.map((note, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-white/20" />
                  <p className="font-serif text-[0.95rem] italic leading-relaxed text-white/60 sm:text-base">
                    {i === 3 ? (
                      <>
                        The F1 Ultra is listed in{" "}
                        <ArticleProseLink
                          href="/articles/mit-1869"
                          className="article-euclid-link"
                        >
                          MIT
                        </ArticleProseLink>{" "}
                        Center for Bits and Atoms&apos; official tool inventory,
                        validating its research-grade performance for
                        next-generation digital fabrication.
                      </>
                    ) : (
                      note
                    )}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* ── SAFETY NOTE ── */}
          <div className="my-10 flex gap-5 rounded-xl border border-[var(--line)] bg-white px-6 py-5 sm:px-7">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--line)]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M8 2 L14 5 L14 9 C14 12 11 14.5 8 15 C5 14.5 2 12 2 9 L2 5 Z"
                  stroke="#82858f"
                  strokeWidth="1"
                  fill="none"
                  strokeLinejoin="round"
                />
                <line
                  x1="8"
                  y1="6"
                  x2="8"
                  y2="9"
                  stroke="#82858f"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
                <circle cx="8" cy="11" r="0.7" fill="#82858f" />
              </svg>
            </div>
            <div>
              <p className="font-sans text-sm font-medium text-[var(--ink)]">
                Built for classrooms
              </p>
              <p className="mt-1 font-serif text-sm italic leading-relaxed text-[var(--ink-muted)]">
                The enclosed casing and built-in airflow system make safe
                classroom use straightforward. The Education package includes
                the AP2 air purifier — no external venting required. Works in
                basement makerspaces, corner labs, anywhere. The touchscreen
                control panel and 7GB of internal storage mean students can run
                projects without a connected computer, which simplifies
                classroom management considerably.
              </p>
            </div>
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
          <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            Tools in STEM education come and go. Most are either too simple —
            students outgrow them in a semester — or too complex — teachers
            never quite feel confident with them. The F1 Ultra avoids both. It
            doesn&apos;t hide its power, but it doesn&apos;t overwhelm you with
            it either.
          </p>
          <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
            In the end, the question a STEM classroom needs to answer every day
            is a simple one: what did students make today? With the F1 Ultra in
            the room, the answer is always something real.
          </p>

          {/* ── VERDICT ── */}
          <div className="mt-12 flex items-start gap-5 rounded-xl border border-[var(--line)] bg-white px-6 py-6 sm:px-8 sm:py-7">
            <span className="mt-0.5 shrink-0 rounded-full bg-[#2563eb] px-3.5 py-1.5 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-white">
              Recommended
            </span>
            <div>
              <p className="font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
                In short
              </p>
              <p className="mt-2 font-serif text-base italic leading-relaxed text-[var(--ink-muted)] sm:text-[1.05rem]">
                Dual lasers, research-grade precision, and a design calm enough
                for daily classroom use. The F1 Ultra doesn&apos;t just belong
                in a makerspace — it changes what a makerspace can be.
              </p>
            </div>
          </div>

          {/* ── FOOTER NOTE ── */}
          <p className="mt-12 text-xs leading-relaxed text-[var(--ink-muted)]">
            xTool —{" "}
            <a
              href="https://amzn.to/4tqrDnj"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-[#2563eb]"
            >
              <em>F1 Ultra — 20W Fiber &amp; 20W Diode Dual Laser Engraver</em>
            </a>
            <br />
            xTool &nbsp;·&nbsp; abakcus.com
          </p>
        </article>
      </div>
    </>
  );
}
