import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { ArticleProseLink } from "@/components/articles/article-prose-link";
import { SiteHeader } from "@/components/home/site-header";

const CANONICAL = "https://abakcus.com/articles/penrose-journal";
const OG_IMAGE =
  "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/Roger-Penroses-Beautiful-Journal-1024x678.jpg.webp";

export const metadata: Metadata = {
  title: "Inside Roger Penrose's Notebook | Abakcus",
  description:
    "Roger Penrose's personal notebooks contain handwritten pages of spinor algebra, twistor diagrams, Penrose tiling prototypes, and Cayley algebra — alongside programs for a 1978 calculator.",
  authors: [{ name: "Ali Kaya" }],
  alternates: { canonical: CANONICAL },
  keywords: [
    "Roger Penrose",
    "Penrose notebook",
    "Penrose tiling",
    "spinor algebra",
    "twistor theory",
    "Cayley algebra",
    "Penrose graphical notation",
    "mathematical physics notebook",
    "aperiodic tiling",
  ],
  openGraph: {
    title: "Inside Roger Penrose's Notebook",
    description:
      "Handwritten pages of spinor algebra, twistor diagrams, Penrose tiling prototypes, and Cayley algebra — alongside programs for a 1978 pocket calculator.",
    url: CANONICAL,
    siteName: "Abakcus",
    type: "article",
    publishedTime: "2026-04-15",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1024,
        height: 678,
        alt: "Roger Penrose's notebook — hyperbolic circle diagrams and Commodore P50 calculator code",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inside Roger Penrose's Notebook",
    description:
      "Spinor algebra, Penrose tilings, Cayley algebra, and a Commodore P50 calculator — four spreads from Roger Penrose's working notebooks.",
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Inside Roger Penrose's Notebook",
  description:
    "Roger Penrose's personal notebooks contain handwritten pages of spinor algebra, twistor diagrams, Penrose tiling prototypes, and Cayley algebra — alongside programs for a 1978 calculator.",
  datePublished: "2026-04-15",
  dateModified: "2026-04-15",
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
    "Roger Penrose, Penrose notebook, Penrose tiling, spinor algebra, twistor theory, Cayley algebra",
  articleSection: "Mathematics · Physics",
};

export default function PenroseJournalPage() {
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
              Physics · Mathematics · Roger Penrose · 6 min read
            </p>
            <h1 className="font-serif text-[clamp(2rem,6vw,3.5rem)] font-bold leading-tight tracking-tight text-[var(--ink)]">
              Inside Roger Penrose's notebook
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[var(--ink-muted)] font-serif italic">
              A set of photographs circulating online shows the handwritten notebooks of{" "}
              <strong className="text-[var(--ink)]">Sir Roger Penrose</strong> — Nobel laureate,
              inventor of twistor theory, and the person who corresponded with Escher and changed
              how we think about aperiodic tilings, black holes, and consciousness. The pages show
              him thinking, not publishing. There is a difference.
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-16">
            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              These photographs have been circulating online for years. They surfaced on a Tumblr
              page around a decade ago, which cited a British library archive as its source — but
              that page is gone, and so is the library link. When the images appeared on Hacker News
              in November 2023, the first question in the comments was: what is the source? Nobody
              could answer it definitively. The images link back to an Amazon author page. No
              original archive, no museum, no publication has been identified as the definitive
              source of these photographs.
            </p>
            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              If you know where these came from — which library, which exhibition, which book — we
              genuinely want to hear from you. The note at the bottom of this article has a contact
              address. We'd like to credit the right institution.
            </p>

            <div className="mb-8 bg-[var(--tonal)] border-l-4 border-[var(--line)] p-5 rounded">
              <strong className="block text-[var(--ink)] font-serif text-sm mb-2">
                A note on provenance
              </strong>
              <p className="font-sans text-xs text-[var(--ink-muted)] leading-relaxed italic">
                These photographs were first encountered on a Tumblr page approximately ten years
                ago. The Tumblr post cited a British library archive as its source. Both the Tumblr
                page and the library page are now offline. If you can identify the original source
                — a specific archive, collection, publication, or exhibition — please write to us
                at{" "}
                <a href="mailto:hello@abakcus.com" className="text-[var(--ink)] underline">
                  hello@abakcus.com
                </a>{" "}
                so we can credit it properly.
              </p>
            </div>
          </section>

          {/* First Spread */}
          <section className="mb-16">
            <figure className="mb-6 border border-[var(--line)] overflow-hidden rounded">
              <img
                src="https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/Roger-Penroses-Beautiful-Journal-1024x678.jpg.webp"
                alt="Hyperbolic circles and Commodore P50 calculator code"
                className="w-full block"
              />
              <figcaption className="bg-[var(--tonal)] border-t border-[var(--line)] px-5 py-2 font-sans text-xs tracking-widest text-[var(--ink-muted)] uppercase">
                Hyperbolic circles and Commodore P50 calculator code
              </figcaption>
            </figure>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The first spread stops you. On the left, two large red-ink diagrams of hyperbolic
              circles — the kind that appear in the theory of conformal mappings and in Penrose's
              long-running obsession with the geometry of complex space. Below them, a smaller
              dodecahedron sketch. Between the diagrams, fragments of equations relating to conformal
              transformations: <em>= tan½z</em>, references to continued fractions, limits as i
              approaches infinity.
            </p>
            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              On the right half of the spread: column after column of numbered instructions for a{" "}
              <strong>Commodore P50</strong> programmable calculator. This is a 1978 pocket device
              with a tiny keyboard and a programmable memory measured in dozens of steps. Penrose is
              writing routines to calculate prime factors and approximate <em>e</em> — "calculates{" "}
              <em>e</em>x (approximately), or more accurately, Σ xⁿ/n! on Commodore P50." The header
              adds: "very slow!"
            </p>

            <blockquote className="my-8 pl-6 border-l-2 border-[var(--ink)] text-lg italic leading-relaxed text-[var(--ink-muted)]">
              The Commodore P50 detail is not incidental. Penrose was using consumer electronics as
              a scratch pad for number theory. The gap between the red hyperbolic diagrams and the
              step-by-step calculator loops is not a gap at all — it's the same person exploring the
              same territory through different instruments.
            </blockquote>

            <p className="text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The Commodore P50 detail is not incidental. According to a comment on the Hacker News
              thread about these photographs, the Commodore P50 was a programmable calculator from
              1978. Penrose was using consumer electronics as a scratch pad for number theory. The
              gap between the red hyperbolic diagrams and the step-by-step calculator loops is not a
              gap at all — it's the same person exploring the same territory through different
              instruments.
            </p>
          </section>

          {/* Tiling Section */}
          <section className="mb-16">
            <h2 className="mb-6 font-sans text-xs uppercase tracking-[0.24em] text-[var(--ink-muted)]">
              The tiling pages
            </h2>

            <figure className="mb-6 border border-[var(--line)] overflow-hidden rounded">
              <img
                src="https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/Roger-Penroses-Beautiful-Journal-2-1-1024x678.jpg.webp"
                alt="Penrose tiling working sketches and algebraic machinery"
                className="w-full block"
              />
              <figcaption className="bg-[var(--tonal)] border-t border-[var(--line)] px-5 py-2 font-sans text-xs tracking-widest text-[var(--ink-muted)] uppercase">
                Penrose tiling working sketches and algebraic machinery
              </figcaption>
            </figure>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The second spread is the one that circulates most widely, and for good reason. The
              right half of the spread shows six hand-drawn tiling configurations — interlocking
              kite-and-dart shapes in blue and red, each variant slightly different, numbered and
              compared. These are working sketches of what would become{" "}
              <strong>Penrose tilings</strong>: the aperiodic patterns that tile the plane infinitely
              without ever repeating, exhibiting fivefold rotational symmetry that Euclidean geometry
              had previously ruled impossible for tilings.
            </p>
            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              Penrose discovered aperiodic tilings in 1974 — reducing the number of required tile
              shapes from the thousands that earlier researchers had needed, down to two. The tilings
              subsequently revealed that the geometry of quasicrystals — a form of matter whose
              existence was not confirmed until 1984 — had been sitting in Penrose's notebook a
              decade earlier.
            </p>
            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The left half of this spread shows the algebraic machinery behind the tilings:
              eigenvalue equations, substitution rules for inflation and deflation of tile shapes,
              binary transition matrices. The bottom of the page has two large tables of 0s and 1s —
              substitution matrices that encode how one generation of tiles generates the next. This
              is the formal structure underneath the visual patterns on the right. Both halves of the
              spread are the same work.
            </p>

            <div className="my-8 bg-[var(--tonal)] border-l-4 border-[var(--line)] p-5 rounded">
              <strong className="block text-[var(--ink)] font-serif text-sm mb-2">
                Related reading
              </strong>
              <p className="font-sans text-xs text-[var(--ink-muted)] leading-relaxed">
                Penrose's work on aperiodic tilings is a cornerstone of mathematical physics. See
                also:{" "}
                <ArticleProseLink href="/articles/unit-circle">
                  Unit Circle
                </ArticleProseLink>{" "}
                for more on geometric visualization.
              </p>
            </div>
          </section>

          {/* Polyhedra Section */}
          <section className="mb-16">
            <h2 className="mb-6 font-sans text-xs uppercase tracking-[0.24em] text-[var(--ink-muted)]">
              Polyhedra, spin networks, graphs
            </h2>

            <figure className="mb-6 border border-[var(--line)] overflow-hidden rounded">
              <img
                src="https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/Roger-Penroses-Beautiful-Journal-3-1-1024x682.jpg.webp"
                alt="Three-dimensional forms and combinatorial graph structures"
                className="w-full block"
              />
              <figcaption className="bg-[var(--tonal)] border-t border-[var(--line)] px-5 py-2 font-sans text-xs tracking-widest text-[var(--ink-muted)] uppercase">
                Three-dimensional forms and combinatorial graph structures
              </figcaption>
            </figure>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The third spread is the most exploratory. The left page is a study in three-dimensional
              forms: icosahedra, dodecahedra, and less standard polyhedra drawn from multiple angles.
              Several are sketched in rapid sequence — the same object rotated, or a related object
              derived from it. Alongside them, tightly wound spiral curves and what appear to be
              toroidal surfaces, drawn with the kind of repetitive hatching that comes from sitting
              with a problem long enough to fill the page around it.
            </p>
            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The right page shifts register. Two large graph diagrams with labeled nodes — lettered
              vertices connected by edges, the structure of a combinatorial object being worked out.
              Below them a table that looks like a matching or assignment problem: rows labeled P, Q,
              R, S, T, U; columns labeled with abbreviated names; cells filled with letters. This is
              the kind of object that appears in Penrose's work on spin networks — his 1971
              combinatorial approach to quantizing geometry, which later became foundational in loop
              quantum gravity.
            </p>
            <p className="text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              In the middle of the right page, almost incidentally:{" "}
              <strong>15 + 6 = 21</strong>. No context, no explanation. A number that mattered at
              that moment and was written down.
            </p>
          </section>

          {/* Cayley Section */}
          <section className="mb-16">
            <h2 className="mb-6 font-sans text-xs uppercase tracking-[0.24em] text-[var(--ink-muted)]">
              Cayley algebra and black holes
            </h2>

            <figure className="mb-6 border border-[var(--line)] overflow-hidden rounded">
              <img
                src="https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/Roger-Penroses-Beautiful-Journal-4-1-1024x677.jpg.webp"
                alt="Cayley algebra triality and black hole region sketches"
                className="w-full block"
              />
              <figcaption className="bg-[var(--tonal)] border-t border-[var(--line)] px-5 py-2 font-sans text-xs tracking-widest text-[var(--ink-muted)] uppercase">
                Cayley algebra triality and black hole region sketches
              </figcaption>
            </figure>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The fourth spread is the densest. Top left: a labeled graph titled "Cayley algebra
              triality" with the equation <em>𝔾 = 𝔾 = 𝔾 = 8</em>. This is the exceptional
              non-associative algebra — the octonions — whose triality symmetry has been a recurring
              object of fascination in mathematical physics. Below it, a larger node-and-edge diagram
              with numbered vertices, working out the structure of the Cayley algebra explicitly.
            </p>
            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The middle of the left page introduces Penrose's own graphical notation for spinors —
              the tensor diagram notation he invented in 1971, where lines represent indices and
              shapes represent tensors. The page shows the basic identities: how spinors multiply,
              what combinations vanish, what the Cayley product reduces to. The notation looks like a
              visual language, because it is one.
            </p>
            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The right half of the spread pivots completely. Rough diagrams labeled "spontaneous
              obs. points," "black hole region," "phase space (finite vol.)," with an unlabeled
              circle representing a black hole and an equation <em>S ~ A ~ m²</em> — the
              Bekenstein-Hawking entropy formula, relating a black hole's entropy to its surface
              area. Penrose shared the 1988 Wolf Prize with Stephen Hawking for the singularity
              theorems; these sketches are part of the same decades-long investigation into what
              happens at the boundary of spacetime.
            </p>

            <blockquote className="my-8 pl-6 border-l-2 border-[var(--ink)] text-lg italic leading-relaxed text-[var(--ink-muted)]">
              These notebooks show the sustained, lateral, material practice of someone who thinks
              with his hands on paper. The theory is being located, not illustrated.
            </blockquote>
          </section>

          {/* Conclusion */}
          <section className="mb-16">
            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              What these notebooks show, collectively, is not a genius in a single moment of insight.
              They show the sustained, lateral, material practice of someone who thinks with his
              hands on paper. The red-ink hyperbolic circles are not illustrations of a theory that
              already existed — they are the theory being located. The tiling sketches are not
              reproductions of a known result — they are the result being found. The spinor notation
              is not a diagram of an equation — it is a way of seeing an equation that makes certain
              moves possible and certain errors impossible.
            </p>
            <p className="text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              Penrose has described his own relationship to visual and spatial intuition throughout
              his career: in his books, in interviews, in the design of the notation that bears his
              name. The notebooks make that description concrete. This is what it looks like to think
              geometrically, over time, in ink.
            </p>
          </section>

          {/* Footer Note */}
          <div className="mt-16 pt-8 border-t border-[var(--line)] font-sans text-xs text-[var(--ink-muted)] leading-relaxed space-y-4">
            <p>
              Photographs source: unknown — originally cited to a British library archive, now
              offline. If you can identify the original source, please contact us at{" "}
              <a href="mailto:hello@abakcus.com" className="text-[var(--ink)] underline">
                hello@abakcus.com
              </a>
            </p>
            <p>
              References: Roger Penrose on Wikipedia ·{" "}
              <a
                href="https://en.wikipedia.org/wiki/Roger_Penrose"
                target="_blank"
                rel="noopener"
                className="text-[var(--ink)] underline"
              >
                en.wikipedia.org/wiki/Roger_Penrose
              </a>
              <br />
              Penrose graphical notation ·{" "}
              <a
                href="https://en.wikipedia.org/wiki/Penrose_graphical_notation"
                target="_blank"
                rel="noopener"
                className="text-[var(--ink)] underline"
              >
                Penrose graphical notation
              </a>
              <br />
              Penrose tiling ·{" "}
              <a
                href="https://en.wikipedia.org/wiki/Penrose_tiling"
                target="_blank"
                rel="noopener"
                className="text-[var(--ink)] underline"
              >
                Penrose tiling
              </a>
            </p>
          </div>
        </article>

        <ArticleReadMore currentSlug="penrose-journal" />
      </div>
    </>
  );
}
