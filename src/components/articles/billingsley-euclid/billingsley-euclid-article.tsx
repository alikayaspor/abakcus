import type { ReactNode } from "react";
import Image from "next/image";
import { ArticleImageLightbox } from "@/components/articles/article-image-lightbox";
import { UnitCircleSectionReveal } from "@/components/articles/unit-circle/unit-circle-section-reveal";
import { billingsleyEuclidImages } from "@/data/billingsley-euclid-images";
import { PASTEL, type PastelId } from "@/data/pastel-palette";
import { BillingsleyPrismDemo } from "./billingsley-prism-demo";

const EUCLID_ELEMENTS_AMAZON = "https://amzn.to/4bUhZDo";

const BILLINGSLEY_1570_ARCHIVE =
  "https://archive.org/details/elementsgeometr00eucl/page/n3/mode/2up";

function EuclidElementsAffiliateLink() {
  return (
    <a
      href={EUCLID_ELEMENTS_AMAZON}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="article-euclid-link"
      aria-label="Euclid’s Elements on Amazon (opens in new tab)"
    >
      Euclid&apos;s <em>Elements</em>
    </a>
  );
}

function BillingsleyFigure({
  src,
  alt,
  caption,
  priority,
  pastel,
  className,
}: {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  pastel: PastelId;
  className?: string;
}) {
  return (
    <figure
      className={`overflow-hidden rounded-[var(--radius-card)] p-3 shadow-[var(--shadow-card)] sm:p-4 ${className ?? "my-10"}`}
      style={{ backgroundColor: PASTEL[pastel] }}
    >
      <ArticleImageLightbox src={src} alt={alt} caption={caption}>
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
      </ArticleImageLightbox>
      {caption ? (
        <figcaption className="mt-4 px-1 text-center font-serif text-sm italic leading-snug text-[var(--ink)]">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

/** Soft in-flow aside — replaces the old right column */
function BillingsleyAside({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <aside className="my-8 border-l-2 border-[var(--line)] py-0.5 pl-5 sm:pl-6">
      <p className="font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
        {label}
      </p>
      <div className="mt-2 text-[0.92rem] leading-relaxed text-[var(--ink-muted)] sm:text-[0.95rem]">
        {children}
      </div>
    </aside>
  );
}

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

function BillingsleyTimeline() {
  return (
    <div className="my-10 border-y border-[var(--line)] py-8">
      <p className="mb-6 font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
        How solid geometry reached the reader
      </p>
      <svg
        className="w-full"
        viewBox="0 0 560 260"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <line
          x1="80"
          y1="20"
          x2="80"
          y2="240"
          className="stroke-[var(--line)]"
          strokeWidth="1"
        />
        <circle cx="80" cy="40" r="4" className="fill-[var(--ink)]" />
        <text
          x="60"
          y="44"
          textAnchor="end"
          fill="var(--ink-muted)"
          style={{ fontFamily: "ui-monospace, monospace", fontSize: 10 }}
        >
          ~300 bc
        </text>
        <text
          x="96"
          y="38"
          fill="var(--ink)"
          style={{ fontFamily: "var(--font-serif)", fontSize: 13 }}
        >
          Euclid writes the Elements
        </text>
        <text
          x="96"
          y="52"
          fill="var(--ink-muted)"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 11,
            fontStyle: "italic",
          }}
        >
          Greek. No diagrams that fold.
        </text>

        <circle cx="80" cy="90" r="4" className="fill-[var(--ink)]" />
        <text
          x="60"
          y="94"
          textAnchor="end"
          fill="var(--ink-muted)"
          style={{ fontFamily: "ui-monospace, monospace", fontSize: 10 }}
        >
          ~900 ce
        </text>
        <text
          x="96"
          y="88"
          fill="var(--ink)"
          style={{ fontFamily: "var(--font-serif)", fontSize: 13 }}
        >
          Arabic translation
        </text>
        <text
          x="96"
          y="102"
          fill="var(--ink-muted)"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 11,
            fontStyle: "italic",
          }}
        >
          Preserved and extended. Still flat text.
        </text>

        <circle cx="80" cy="140" r="4" className="fill-[var(--ink)]" />
        <text
          x="60"
          y="144"
          textAnchor="end"
          fill="var(--ink-muted)"
          style={{ fontFamily: "ui-monospace, monospace", fontSize: 10 }}
        >
          ~1200
        </text>
        <text
          x="96"
          y="138"
          fill="var(--ink)"
          style={{ fontFamily: "var(--font-serif)", fontSize: 13 }}
        >
          Latin translations for Europe
        </text>
        <text
          x="96"
          y="152"
          fill="var(--ink-muted)"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 11,
            fontStyle: "italic",
          }}
        >
          Third language barrier added.
        </text>

        <circle cx="80" cy="200" r="6" className="fill-[var(--ink)]" />
        <text
          x="60"
          y="204"
          textAnchor="end"
          fill="var(--ink-muted)"
          style={{ fontFamily: "ui-monospace, monospace", fontSize: 10 }}
        >
          1570
        </text>
        <text
          x="96"
          y="196"
          fill="var(--ink)"
          style={{ fontFamily: "var(--font-serif)", fontSize: 14 }}
        >
          Billingsley: English + paper solids
        </text>
        <text
          x="96"
          y="212"
          fill="var(--ink-muted)"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 11,
            fontStyle: "italic",
          }}
        >
          For the first time, the shape lifts off the page.
        </text>

        <circle
          cx="80"
          cy="240"
          r="3"
          fill="none"
          className="stroke-[var(--line)]"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}

export function BillingsleyEuclidArticle() {
  return (
    <UnitCircleSectionReveal>
      <div className="unit-circle-article text-[var(--ink)]">
        <div className="mx-auto max-w-[780px] px-[var(--page-pad)] pb-6 pt-8 text-center sm:pb-8 sm:pt-10">
          <p className="mb-5 font-sans text-[0.62rem] uppercase leading-relaxed tracking-[0.24em] text-[var(--ink-muted)] sm:text-[0.65rem]">
            History · Mathematics · Object study — 1570
          </p>
          <h1 className="font-serif text-[clamp(2rem,6vw,3.2rem)] font-normal leading-[1.1] tracking-[-0.02em] text-[var(--ink)]">
            Paper that stands up
          </h1>
          <p className="mx-auto mt-6 max-w-[32rem] text-left text-lg italic leading-relaxed text-[var(--ink-muted)] sm:text-xl">
            Henry Billingsley translated <EuclidElementsAffiliateLink /> into
            English and glued three-dimensional shapes to the pages. Four
            hundred and fifty-five years later, we&apos;re still pretending
            this is a new idea.
          </p>
          <div
            className="mx-auto mt-7 h-px w-14 bg-[var(--line)] sm:mt-8"
            aria-hidden
          />
        </div>

        <article className="mx-auto max-w-[min(48rem,100%)] px-[var(--page-pad)] pb-20 pt-2 sm:pb-28">
          <p className="intro-drop border-b border-[var(--line)] pb-8 text-lg leading-[1.82] text-[var(--ink)] sm:text-xl">
            The first English <em>Elements</em> — and the first time a reader
            could lift a solid off the page. Four centuries later, the trick
            still lands.
          </p>

          <BillingsleyFigure
            src={billingsleyEuclidImages.cover}
            alt="Henry Billingsley’s 1570 English edition of Euclid’s Elements"
            caption="The first English Elements — paper, type, and the promise of solids."
            priority
            pastel="peach"
          />

          <BillingsleyAside label="The edition">
            <p className="text-[var(--ink)]">
              <a
                href={BILLINGSLEY_1570_ARCHIVE}
                target="_blank"
                rel="noopener noreferrer"
                className="article-euclid-link"
                aria-label="The Elements of Geometrie (1570) on Internet Archive — opens in new tab"
              >
                <em>The Elements of Geometrie</em> — Henry Billingsley, 1570.
              </a>{" "}
              The first English translation of Euclid, 928 pages, with a
              preface by John Dee.
            </p>
          </BillingsleyAside>

          <section data-uc-section className="mt-14">
                <SectionHead
                  num="01"
                  title="The problem with describing a solid"
                />
                <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
                  There are two ways to explain a tetrahedron. The first is
                  words: &quot;A solid figure contained by four equal and
                  equilateral triangles.&quot; The second is to put one in
                  someone&apos;s hand. The first method was the only option for
                  roughly two thousand years of mathematical education. Euclid
                  wrote in Greek. The Arabs translated him. The Europeans
                  translated the Arabs. By the time a geometry student in Tudor
                  England sat down with the text, they were already two
                  translations removed from the original, reading Latin they
                  barely spoke, trying to picture shapes no one had shown them.
                </p>
                <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
                  This was the standard. No one considered it a problem. It was
                  just how learning worked: you read until you understood, or
                  you gave up.
                </p>
              </section>

              <section data-uc-section className="mt-14">
                <SectionHead num="02" title="What Billingsley actually did" />
                <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
                  In 1570, Henry Billingsley published the first English
                  translation of <EuclidElementsAffiliateLink />. That alone was
                  significant — it meant English speakers could approach the
                  text without needing Greek or Latin as prerequisites. The
                  language barrier, for many the first and only barrier, was
                  gone.
                </p>
                <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
                  But Billingsley went further. For the sections covering
                  three-dimensional geometry — Books XI through XIII — he
                  attached folded paper flaps to the pages. Those three books are
                  where solid geometry lives — and where a flat page fails first.
                  Readers could lift the flaps, fold them
                  into shapes, and hold the actual solid described in the
                  proposition.
                </p>

                <BillingsleyFigure
                  src={billingsleyEuclidImages.spread2}
                  alt="Open spread from Billingsley’s 1570 Elements showing solid geometry"
                  caption="Books XI–XIII — where the page stops pretending to be flat."
                  pastel="sky"
                />

                <BillingsleyPrismDemo />

                <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
                  This was not a gimmick. The flaps were precisely constructed to
                  illustrate specific propositions. When a proof referred to the
                  angles of a triangular pyramid, you could hold that pyramid
                  and trace the angles with your finger. The abstraction became
                  an object. The object made the abstraction obvious.
                </p>
              </section>

              <section data-uc-section className="mt-14">
                <SectionHead
                  num="03"
                  title="The timeline of getting geometry across"
                />
                <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
                  The text had traveled Greek → Arabic → Latin; Billingsley&apos;s
                  was the first edition to carry the full argument into English
                  — so readers no longer needed three languages to reach the
                  mathematics.
                </p>
                <BillingsleyTimeline />
                <BillingsleyFigure
                  src={billingsleyEuclidImages.spread3}
                  alt="Historical spread from Billingsley’s Euclid with diagrams"
                  caption="The chain from Greek to English — still one book thick."
                  pastel="lavender"
                />
              </section>

              <section data-uc-section className="mt-14">
                <SectionHead num="04" title="Why it worked" />
                <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
                  The hardest thing in mathematics is not calculation. It&apos;s
                  visualization — being asked to hold a three-dimensional
                  object in your mind when no such object exists in front of you.
                  Most people who fail at geometry fail here, not at the logic
                  itself. They follow the proof step by step and lose the
                  picture.
                </p>
                <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
                  Billingsley understood this. Not in the language of cognitive
                  science, obviously, but as a practical matter: the propositions
                  in Books XI–XIII deal with things you can&apos;t really see in
                  a flat diagram. A cube, a pyramid, a dodecahedron — these are
                  spatial objects. Showing them in projection on a page is
                  already a compromise. Letting readers fold and hold the actual
                  form is closer to the real thing than any diagram can be.
                </p>

                <blockquote className="my-8 border-l-2 border-[var(--ink)] py-1 pl-6 font-serif text-[1.25rem] italic leading-[1.45] text-[var(--ink-muted)]">
                  Reading about a cube is one thing. Having a cube assemble
                  itself in your hands is another. The gap between those two
                  experiences is where most mathematical education still gets
                  lost.
                </blockquote>

                <BillingsleyFigure
                  src={billingsleyEuclidImages.plate4}
                  alt="Plate or diagram from Billingsley’s 1570 Elements"
                  caption="Projection on the page — a compromise Billingsley tried to fold away."
                  pastel="rose"
                />

                <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
                  When you hold a shape, you stop translating. You&apos;re not
                  converting words into a mental image; the image is already
                  there, in your hands. The cognitive load drops, and the proof
                  steps into a space that makes sense.
                </p>
              </section>

              <section data-uc-section className="mt-14">
                <SectionHead
                  num="05"
                  title="The comparison we keep refusing to make"
                />
                <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
                  Every few years, someone announces that augmented reality, or
                  3D printing, or virtual reality will finally fix mathematics
                  education. The language is always forward-looking:
                  &quot;immersive,&quot; &quot;spatial,&quot; &quot;embodied
                  learning.&quot; As if the idea of putting a solid object in
                  front of a student is a recent breakthrough that required a
                  billion-dollar device to discover.
                </p>

                <div className="my-8 overflow-x-auto">
                  <table className="w-full min-w-[520px] border-collapse text-[0.88rem]">
                    <thead>
                      <tr>
                        <th className="border-b border-[var(--line)] px-4 py-2 text-left font-sans text-[0.6rem] font-normal uppercase tracking-[0.12em] text-[var(--ink-muted)]">
                          Method
                        </th>
                        <th className="border-b border-[var(--line)] px-4 py-2 text-left font-sans text-[0.6rem] font-normal uppercase tracking-[0.12em] text-[var(--ink-muted)]">
                          Year
                        </th>
                        <th className="border-b border-[var(--line)] px-4 py-2 text-left font-sans text-[0.6rem] font-normal uppercase tracking-[0.12em] text-[var(--ink-muted)]">
                          Cost
                        </th>
                        <th className="border-b border-[var(--line)] px-4 py-2 text-left font-sans text-[0.6rem] font-normal uppercase tracking-[0.12em] text-[var(--ink-muted)]">
                          What the student holds
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border-b border-[var(--line)] px-4 py-3 font-medium text-[var(--ink)]">
                          Billingsley&apos;s pop-up flaps
                        </td>
                        <td className="border-b border-[var(--line)] px-4 py-3 text-[var(--ink-muted)]">
                          1570
                        </td>
                        <td className="border-b border-[var(--line)] px-4 py-3 text-[var(--ink-muted)]">
                          a few shillings
                        </td>
                        <td className="border-b border-[var(--line)] px-4 py-3 text-[var(--ink-muted)]">
                          a folded paper solid, labeled with the proposition&apos;s
                          letters
                        </td>
                      </tr>
                      <tr>
                        <td className="border-b border-[var(--line)] px-4 py-3 font-medium text-[var(--ink)]">
                          3D-printed geometry models
                        </td>
                        <td className="border-b border-[var(--line)] px-4 py-3 text-[var(--ink-muted)]">
                          2010s
                        </td>
                        <td className="border-b border-[var(--line)] px-4 py-3 text-[var(--ink-muted)]">
                          $200–2,000
                        </td>
                        <td className="border-b border-[var(--line)] px-4 py-3 text-[var(--ink-muted)]">
                          a plastic solid, usually unlabeled
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 font-medium text-[var(--ink)]">
                          AR headset
                        </td>
                        <td className="px-4 py-3 text-[var(--ink-muted)]">
                          2020s
                        </td>
                        <td className="px-4 py-3 text-[var(--ink-muted)]">
                          $3,500+
                        </td>
                        <td className="px-4 py-3 text-[var(--ink-muted)]">
                          a projected solid, which you cannot actually touch
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
                  The irony is that Billingsley&apos;s version wins on the most
                  important criterion: the student&apos;s hands are in contact
                  with the shape. AR projections are not. A headset shows you a
                  tetrahedron floating in space; Billingsley&apos;s flap puts
                  one in your palm. Four hundred years of technological progress
                  and we&apos;ve managed to make it more expensive and less
                  tactile.
                </p>

                <div className="my-8 border border-[var(--line)] px-5 py-4 font-sans text-[0.7rem] leading-relaxed text-[var(--ink-muted)]">
                  Roughly a hundred copies survive in institutional and private
                  collections worldwide; several still have flaps that fold. The
                  1570 edition is held at the Bodleian Library in Oxford — among
                  the copies where the paper still behaves as Billingsley
                  intended.
                </div>
              </section>

              <section data-uc-section className="mt-14">
                <SectionHead
                  num="06"
                  title="What it tells us about the book itself"
                />
                <BillingsleyFigure
                  src={billingsleyEuclidImages.detail5}
                  alt="Detail of Billingsley’s 1570 Elements — binding or page edge"
                  caption="928 pages, a famous preface, and flaps easy to overlook."
                  pastel="lime"
                />
                <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
                  The <em>Elements</em> is one of the most printed books in
                  history — second only to the Bible by some counts. Most editions
                  present it as a monument: authoritative, austere, not to be
                  tampered with. Billingsley tampered with it. He added English,
                  added prefaces, added pop-up geometry. He treated it as a
                  teaching tool rather than a sacred text, which is precisely
                  what Euclid intended it to be.
                </p>
                <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
                  The decision to translate it into English was already a
                  democratic gesture: geometry for people who don&apos;t read
                  Latin. The paper flaps extended that gesture further: geometry
                  for people who can&apos;t picture solids from descriptions
                  alone. Which is most people. Billingsley seems to have known
                  this.
                </p>
                <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
                  The book ran to 928 pages. It included a preface by the
                  mathematician John Dee, who used the occasion to argue, at
                  length, that mathematics was the foundation of all other
                  knowledge. The pop-up flaps are in the back. In all the fuss
                  about Dee&apos;s preface, they&apos;re easy to overlook. They
                  shouldn&apos;t be.
                </p>
              </section>

              <section data-uc-section className="mt-14">
                <SectionHead num="07" title="The actual lesson" />
                <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
                  We keep asking: how do we make mathematics more accessible?
                  The question usually leads toward technology, toward
                  interactivity, toward novelty. Billingsley&apos;s answer was
                  simpler: remove the barriers between the student and the thing
                  being described. Language is a barrier. Abstraction is a
                  barrier. A flat diagram of a solid is a barrier. Remove them
                  when you can.
                </p>
                <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
                  He couldn&apos;t remove all of them. A 16th-century book was
                  still a book; you had to read it. But where the text described
                  something three-dimensional, he put something three-dimensional
                  in the reader&apos;s hands. That&apos;s the whole trick. It
                  doesn&apos;t need a headset.
                </p>
                <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
                  Billingsley wasn&apos;t trying to make mathematics entertaining.
                  He was trying to make it clear. The pop-up flaps aren&apos;t a
                  flourish — they&apos;re a solution to a specific problem: how
                  do you show someone a shape that a flat page can&apos;t
                  adequately represent? You fold one and attach it. Done. The
                  elegance is in the simplicity of the answer, not in the
                  question.
                </p>
              </section>
        </article>

        <footer className="border-t border-[var(--line-soft)] px-[var(--page-pad)] py-10 text-center font-sans text-sm tracking-[0.12em] text-[var(--ink-muted)]">
          History · Mathematics · 1570 — Henry Billingsley&apos;s Euclid
        </footer>
      </div>
    </UnitCircleSectionReveal>
  );
}
