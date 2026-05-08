import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { SiteHeader } from "@/components/home/site-header";

const CANONICAL =
  "https://abakcus.com/articles/al-jaghmini-astronomy-manuscript";
const OG_IMAGE =
  "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/An%20Illustrated%20Astronomical%20Treatise%20by%20Mahmud%20ibn%20Muhammad%20al-Jaghmini.jpg";

export const metadata: Metadata = {
  title:
    "Al-Jaghmini's Al-Mulakhkhas: The Astronomy Textbook That Outlived an Empire — Abakcus",
  description:
    "Written one year before its author died in the Mongol conquest of Khwarazm, al-Jaghmini's astronomical treatise became the most widely copied Arabic astronomy textbook ever made — and survived to be hand-copied in Ottoman Anatolia 162 years later.",
  authors: [{ name: "Ali Kaya" }],
  keywords: [
    "al-Jaghmini",
    "al-Mulakhkhas fi al-Hayah",
    "Islamic astronomy manuscript",
    "Khwarazm astronomy",
    "Ayasoluk manuscript 1383",
    "history of astronomy",
    "medieval Islamic science",
    "Ptolemaic astronomy",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title:
      "Al-Jaghmini's Al-Mulakhkhas: The Astronomy Textbook That Outlived an Empire",
    description:
      "Written in Khwarazm the year before the Mongols destroyed it, copied by hand 162 years later in Ottoman Anatolia — and studied in classrooms for six more centuries.",
    url: CANONICAL,
    siteName: "Abakcus",
    type: "article",
    publishedTime: "2026-04-30",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 800,
        alt: "Illustrated pages from al-Jaghmini's Al-Mulakhkhas fi al-Hay'ah, Ayasoluk copy, 1383",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Al-Jaghmini's Al-Mulakhkhas: The Astronomy Textbook That Outlived an Empire",
    description:
      "Written in Khwarazm the year before the Mongols destroyed it, copied by hand 162 years later in Ottoman Anatolia — and studied in classrooms for six more centuries.",
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Al-Jaghmini's Al-Mulakhkhas: The Astronomy Textbook That Outlived an Empire",
  description:
    "Al-Jaghmini's astronomical treatise, written c. 1220–1221, became the most widely copied Arabic astronomy textbook and survived to be hand-copied in Ottoman Anatolia 162 years later.",
  datePublished: "2026-04-30",
  dateModified: "2026-04-30",
  author: {
    "@type": "Person",
    name: "Ali Kaya",
    url: "https://abakcus.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Abakcus",
    url: "https://abakcus.com",
  },
  image: OG_IMAGE,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": CANONICAL,
  },
  keywords:
    "al-Jaghmini, al-Mulakhkhas, Islamic astronomy, Khwarazm, history of science",
  articleSection: "History of Science · Islamic Astronomy",
};

export default function AlJaghminiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <div className="uc-page-bg pb-4">
        <div className="mx-auto max-w-[var(--page-max)] px-[var(--page-pad)] pt-6">
          <Link
            href="/articles"
            className="inline-flex text-sm text-[var(--ink-muted)] underline-offset-4 hover:underline"
          >
            ← All articles
          </Link>
        </div>

        <article className="mx-auto max-w-[680px] px-[var(--page-pad)] py-16 text-[var(--ink)]">
          {/* Hero */}
          <div className="mb-12 pb-8 border-b border-[var(--line)]">
            <p className="mb-5 font-sans text-xs uppercase leading-relaxed tracking-[0.18em] text-[var(--ink-muted)]">
              History of Science · Islamic Astronomy · 1221 — 1383
            </p>
            <h1 className="font-serif text-[clamp(2rem,6vw,3.5rem)] font-bold leading-tight tracking-tight text-[var(--ink)]">
              The Astronomy Textbook That Outlived an Empire
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[var(--ink-muted)] font-serif italic">
              Written in Khwarazm the year before the Mongols destroyed it,
              copied by hand 162 years later in a newly Ottoman corner of
              Anatolia — and studied in classrooms across the Islamic world for
              six more centuries.
            </p>
          </div>

          {/* Meta */}
          <div className="mb-12 pb-8 border-b border-[var(--line)] flex flex-wrap gap-6 font-mono text-xs uppercase tracking-widest text-[var(--ink-muted)]">
            <span>Al-Jaghmini · c. 1220–1221</span>
            <span>Manuscripts · History of Science</span>
          </div>

          {/* Featured Image */}
          <figure className="mb-12 -mx-[var(--page-pad)] md:-mx-[calc((100vw-680px)/4)]">
            <img
              src="https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/An%20Illustrated%20Astronomical%20Treatise%20by%20Mahmud%20ibn%20Muhammad%20al-Jaghmini.jpg"
              alt="Illustrated pages from al-Jaghmini's Al-Mulakhkhas fi al-Hay'ah, Ayasoluk copy, 1383"
              className="w-full h-auto"
            />
            <figcaption className="text-center font-mono text-xs text-[var(--ink-muted)] uppercase tracking-widest mt-4 px-[var(--page-pad)]">
              Al-Jaghmini, <em>Al-Mulakhkhas fi al-Hay&apos;ah</em> · Ayasoluk copy, 1383
            </figcaption>
          </figure>

          {/* Lead */}
          <p className="mb-12 pb-8 border-b border-[var(--line)] text-lg font-semibold leading-relaxed text-[var(--ink)] sm:text-xl">
            The manuscript in the photographs was copied on a July day in 1383
            in a town called Ayasoluk, on the western edge of Anatolia. The text
            inside it had been written 162 years earlier, in a city that no
            longer existed. Between composition and this copy, an empire had
            risen, collapsed under the Mongol invasion, and been gradually
            replaced by another. The text survived all of it.
          </p>

          {/* Section 1 */}
          <section className="mb-16">
            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              <strong>
                Mahmud ibn Muhammad ibn &apos;Umar al-Jaghmini
              </strong>{" "}
              was a scholar from Khwarazm — the Central Asian empire centered on
              the Amu Darya river, which in the early thirteenth century was one
              of the most intellectually active regions in the Islamic world. He
              composed two works that became standard texts: a medical treatise
              condensing Ibn Sina&apos;s monumental <em>Canon</em>, and an
              astronomical compendium titled{" "}
              <em>Al-Mulakhkhas fi al-Hay&apos;ah al-Basita</em> —
              &ldquo;The Epitome of Plain Theoretical Astronomy.&rdquo; He died
              in 1221, the year the Mongol army under Genghis Khan swept through
              Khwarazm and erased the civilization that had produced him.
            </p>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The <em>Mulakhkhas</em> survived. More than survived: it became
              the most widely copied Arabic astronomy textbook ever written.
              Thousands of manuscript copies are known; the number of
              commentaries, supercommentaries, and translations into Persian and
              Turkish runs into the hundreds. It was taught in madrasas from
              Morocco to Samarkand until well into the nineteenth century.
              Whatever the Mongols destroyed, they did not destroy this.
            </p>

            {/* Fact strip */}
            <div className="my-10 grid grid-cols-3 divide-x divide-[var(--line)] border border-[var(--line)]">
              {[
                {
                  num: "1221",
                  label: "Year of composition & Mongol conquest of Khwarazm",
                },
                {
                  num: "162",
                  label: "Years between the author's death and this copy",
                },
                {
                  num: "25",
                  label: "Coloured astronomical diagrams in this manuscript",
                },
              ].map((f) => (
                <div key={f.num} className="px-4 py-5 text-center">
                  <div className="font-serif text-3xl font-bold text-[var(--ink)] leading-none mb-2">
                    {f.num}
                  </div>
                  <div className="font-mono text-[9px] uppercase tracking-[0.1em] text-[var(--ink-muted)] leading-snug">
                    {f.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-16">
            <h2 className="mb-4 font-serif text-2xl font-bold text-[var(--ink)]">
              What the Book Contains
            </h2>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The <em>Mulakhkhas</em> is, by design, an introduction — not an
              advanced treatise. Al-Jaghmini explicitly wrote it for students,
              stripping away the complex mathematical proofs that filled more
              sophisticated astronomical texts of his era. What remains is the
              theoretical framework: how the celestial and terrestrial worlds
              are structured, how the heavenly orbs move and relate to each
              other, and how their motions can be understood geometrically. The
              book is Ptolemaic — it accepts and explains the geocentric model
              of the cosmos — but it presents that model with exceptional
              clarity.
            </p>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The structure is compact: an introduction on the nature of simple
              and complex bodies, followed by two sections. The first covers the
              celestial sphere — the order of the planets, the Sun&apos;s
              motion, lunar phases, eclipses, and the geometry of orbits. The
              second turns to the Earth: geography, the division of the
              inhabited world into seven climatic zones, and the mathematical
              tools needed to understand terrestrial and celestial positions
              together, including elements of trigonometry and the foundations
              of judicial astrology.
            </p>

            <blockquote className="my-10 pl-6 border-l-2 border-[var(--ink)] text-lg italic leading-relaxed text-[var(--ink-muted)]">
              &ldquo;The work does not contain complex mathematical calculations
              — but it provides the theoretical framework within which such
              calculations can be understood.&rdquo;
              <cite className="block mt-3 font-mono text-xs not-italic uppercase tracking-[0.12em] text-[var(--ink-muted)]">
                — Library of Congress catalogue note on the Mulakhkhas
              </cite>
            </blockquote>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              This deliberate accessibility is what made the <em>Mulakhkhas</em>{" "}
              so durable. Harder texts required harder prerequisites.
              Al-Jaghmini&apos;s compendium could be used as the first serious
              encounter with astronomical theory, and students who outgrew it
              could move to one of the many commentaries. Good introductions are
              rarer than good treatises — they require not just knowledge but a
              specific kind of pedagogical judgment: knowing what to leave out.
              It is the same conviction that{" "}
              <Link
                href="/articles/feynman-math-education"
                target="_blank"
                rel="noopener noreferrer"
                className="article-euclid-link"
              >
                Feynman brought to mathematics education
              </Link>{" "}
              seven centuries later — that the first encounter with a subject
              should be honest, not technically exhausting.
            </p>
          </section>

          {/* Section 3 — diagrams */}
          <section className="mb-16">
            <h2 className="mb-4 font-serif text-2xl font-bold text-[var(--ink)]">
              Reading the Diagrams
            </h2>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The Ayasoluk copy contains 25 coloured diagrams, painted in the
              characteristic palette visible in the photographs: a deep
              terracotta red for the Moon in its phases, a muted green for the
              outer orbital bands, red-orange ink lines for the geometric
              constructions. Against the warm cream of the aged paper, the
              diagrams read as cosmological objects in their own right — not
              merely explanatory illustrations, but arguments made in colour and
              line. The effect is not unlike what{" "}
              <Link
                href="/articles/alejandro-guijarro-momentum"
                target="_blank"
                rel="noopener noreferrer"
                className="article-euclid-link"
              >
                Alejandro Guijarro found on physics blackboards
              </Link>{" "}
              at Oxford and Cambridge: scientific notation that transcends its
              own utility and becomes something else entirely.
            </p>

            {/* First additional image */}
            <figure className="mb-8 -mx-[var(--page-pad)] md:-mx-[calc((100vw-680px)/4)]">
              <img
                src="https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/An%20Illustrated%20Astronomical%20Treatise%20by%20Mahmud%20ibn%20Muhammad%20al-Jaghmini%203.jpg"
                alt="Solar eclipse diagram and lunar phase diagram from the Ayasoluk copy of al-Mulakhkhas, 1383"
                className="w-full h-auto"
              />
              <figcaption className="text-center font-mono text-xs text-[var(--ink-muted)] uppercase tracking-widest mt-4 px-[var(--page-pad)]">
                Solar eclipse (left) · Lunar phases (right) · Ayasoluk, 1383
              </figcaption>
            </figure>

            {/* Diagram annotation */}
            <div className="my-8 border border-[var(--line)] bg-[#EDE6D8]">
              <div className="px-5 py-4 border-b border-[var(--line)]">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--ink-muted)]">
                  What the diagrams show
                </span>
              </div>
              <div className="divide-y divide-[var(--line)]">
                {[
                  {
                    label: "Solar eclipse",
                    desc: "Left page, lower diagram. The Sun (large red disc at bottom) aligns with the Moon (white sphere) and the Earth behind it. Red radiating lines show the shadow cone cast during totality. The green band is the lunar orbital path.",
                  },
                  {
                    label: "Lunar phases",
                    desc: "Right page, upper diagram. Eight discs arranged around a circular orbit, each showing a different illumination state of the Moon — from new moon (fully dark) through crescent, quarter, gibbous, to full. The Sun is implied at centre-right.",
                  },
                  {
                    label: "Orbital geometry",
                    desc: "Lower spread, both pages. Concentric green and cream bands represent nested celestial spheres. Red geometric lines — radii, diameters, intersection arcs — illustrate the mathematical relationships between orbital paths.",
                  },
                  {
                    label: "Visual language",
                    desc: "The diagrams follow a consistent colour grammar: red for the Moon, green for orbital bands, red-orange for geometric construction lines. This system recurs across many surviving copies of the Mulakhkhas, suggesting a shared illustrative tradition passed between scribes.",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="grid grid-cols-[7rem_1fr] gap-x-4 px-5 py-4 items-start"
                  >
                    <span className="font-mono text-[9px] uppercase tracking-[0.08em] text-[#8b3a1e] pt-px leading-snug">
                      {item.label}
                    </span>
                    <p className="text-sm leading-relaxed text-[var(--ink)]">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Second additional image */}
            <figure className="mb-8 -mx-[var(--page-pad)] md:-mx-[calc((100vw-680px)/4)]">
              <img
                src="https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/An%20Illustrated%20Astronomical%20Treatise%20by%20Mahmud%20ibn%20Muhammad%20al-Jaghmini%202.jpg"
                alt="Orbital geometry diagrams from the Ayasoluk manuscript showing concentric celestial spheres"
                className="w-full h-auto"
              />
              <figcaption className="text-center font-mono text-xs text-[var(--ink-muted)] uppercase tracking-widest mt-4 px-[var(--page-pad)]">
                Orbital geometry · Nested celestial spheres · Naskh script, 15 lines per page
              </figcaption>
            </figure>
          </section>

          {/* Section 4 */}
          <section className="mb-16">
            <h2 className="mb-4 font-serif text-2xl font-bold text-[var(--ink)]">
              The Scribe and the Scriptorium
            </h2>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              At the end of the manuscript, on folio 29b, the scribe recorded
              himself. His name was{" "}
              <strong>Qutb al-Din ibn Muhammad al-Nakidi</strong>, and he
              completed the copy on July 18, 1383, in a place he called
              Ayathulugh — the Arabic rendering of Ayasoluk, now Selçuk in
              western Turkey, the town adjacent to the ruins of ancient Ephesus.
            </p>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The detail matters. In 1383, Ayasoluk had only recently come under
              Ottoman control. The region had been contested for decades —
              Byzantine, various Turkmen principalities, and finally Ottoman.
              The existence of a manuscript copy, carefully made with 25 coloured
              diagrams and signed by a named scribe, implies the existence of a
              functioning scriptorium. Not just a copy of a book, but an
              institution that could support the copying of books — a library,
              teachers, students, the infrastructure of learned culture — had
              already taken root in this frontier town within years of its coming
              under new rule.
            </p>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              This is almost certainly the earliest manuscript known to have
              been written and illustrated in Ayasoluk. As a piece of historical
              evidence, it is a small proof that intellectual continuity does
              not wait for political stability to fully resolve. One thinks of{" "}
              <Link
                href="/articles/zurich-notebook"
                target="_blank"
                rel="noopener noreferrer"
                className="article-euclid-link"
              >
                Einstein&apos;s Zurich notebook
              </Link>
              {" "}— another document made at a moment of transition, its pages
              containing the wrong turns and provisional solutions of a mind
              working toward something it could not yet fully see.
            </p>

            {/* Manuscript details box */}
            <div className="my-8 border border-[var(--line)] divide-y divide-[var(--line)]">
              <div className="px-5 py-4 bg-[#EDE6D8]">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--ink-muted)]">
                  Manuscript details
                </span>
              </div>
              {[
                { key: "Author", val: "Mahmud al-Jaghmini (d. 1221)" },
                { key: "Composed", val: "c. 1220–1221, Khwarazm" },
                {
                  key: "This copy",
                  val: "18 July 1383, Ayasoluk (Selçuk), Anatolia",
                },
                { key: "Scribe", val: "Qutb al-Din ibn Muhammad al-Nakidi" },
                { key: "Script", val: "Naskh, 15 lines per page" },
                { key: "Diagrams", val: "25 coloured astronomical illustrations" },
                { key: "Language", val: "Arabic" },
                { key: "Held at", val: "Sotheby's (documented)" },
              ].map((row) => (
                <div
                  key={row.key}
                  className="grid grid-cols-[7rem_1fr] gap-x-4 px-5 py-3 items-start text-sm"
                >
                  <span className="font-mono text-[9px] uppercase tracking-[0.05em] text-[var(--ink-muted)] pt-px">
                    {row.key}
                  </span>
                  <span className="text-[var(--ink)] leading-relaxed">
                    {row.val}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5 */}
          <section className="mb-16">
            <h2 className="mb-4 font-serif text-2xl font-bold text-[var(--ink)]">
              A Textbook&apos;s Afterlife
            </h2>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              What is it that makes a textbook last seven centuries? The{" "}
              <em>Mulakhkhas</em> was not the most sophisticated astronomical
              text of its era. Al-Jaghmini himself drew on older traditions,
              presenting a Ptolemaic system that had already been under active
              revision for a century by Islamic astronomers working on its
              internal inconsistencies. Later scholars — particularly those at
              the Samarkand observatory under Ulugh Beg in the fifteenth century
              — made advances that rendered parts of its model obsolete.
            </p>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              But the <em>Mulakhkhas</em> was not trying to be at the frontier.
              It was trying to be the threshold — the text that allowed a
              student to stand at the door of the discipline and see, clearly,
              what was inside. The same logic applies to{" "}
              <Link
                href="/articles/billingsley-euclid"
                target="_blank"
                rel="noopener noreferrer"
                className="article-euclid-link"
              >
                Henry Billingsley&apos;s 1570 English Euclid
              </Link>
              : a text made accessible to a wider audience, with folded paper
              models where proofs had been abstract, outlasts many of the more
              technically advanced works of its era precisely because it lowered
              the cost of entry.
            </p>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              Copies of the <em>Mulakhkhas</em> are preserved in libraries from
              Istanbul to Cairo, from the British Library to the Library of
              Congress. Each is a separate act of transmission — a scribe
              deciding that this text was worth their time, their ink, and their
              skill. The Ayasoluk copy, made in a newly Ottoman Anatolian town
              in the summer of 1383, is one of those acts. Its 25 coloured
              diagrams are not decorations. They are the visual argument for why
              the sky is ordered, and how we came to understand that order.
            </p>
          </section>

          {/* Source */}
          <div className="mt-16 pt-8 border-t border-[var(--line)]">
            <h3 className="mb-4 font-sans text-xs uppercase tracking-[0.24em] text-[var(--ink-muted)]">
              Source
            </h3>
            <p className="font-sans text-sm text-[var(--ink-muted)] leading-relaxed">
              <strong className="text-[var(--ink)]">
                Mahmud ibn Muhammad ibn &apos;Umar al-Jaghmini
              </strong>
              ,{" "}
              <em>Al-Mulakhkhas fi al-Hay&apos;ah al-Basita</em> (Compendium of
              Plain Astronomy), c. 1220–1221. The Ayasoluk copy (1383), copied
              by Qutb al-Din ibn Muhammad al-Nakidi, is documented at{" "}
              <a
                href="https://artsandculture.google.com/asset/an-illustrated-astronomical-treatise-by-mahmud-ibn-muhammad-al-jaghmini/ewESNbrCwD7npA"
                target="_blank"
                rel="noopener noreferrer"
                className="article-euclid-link"
              >
                Google Arts &amp; Culture
              </a>
              . For a critical edition and English translation, see: F. J. Ragep,{" "}
              <em>
                Jaghmīnī&apos;s Mulakhkhaṣ: An Islamic Introduction to Ptolemaic
                Astronomy
              </em>
              , Springer, 2016.
            </p>
          </div>
        </article>

        <ArticleReadMore currentSlug="al-jaghmini-astronomy-manuscript" />
      </div>
    </>
  );
}
