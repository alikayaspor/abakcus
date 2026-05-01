import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { SiteHeader } from "@/components/home/site-header";

export const metadata: Metadata = {
  title: "The Fry Universe — The Geometry of French Fries",
  description:
    "A 3D scrollytelling tool that explains why you prefer one fry shape over another — and reveals that your preference is, at bottom, a geometry question.",
  keywords: [
    "Fry Universe",
    "french fry geometry",
    "surface to volume ratio",
    "scrollytelling",
    "3D visualization",
    "Chris Williams",
    "food science",
    "crispiness mathematics",
  ],
  openGraph: {
    title: "The Fry Universe — The Geometry of French Fries",
    description:
      "A 3D scrollytelling tool that explains why you prefer one fry shape over another. The answer is a surface-to-volume ratio.",
    type: "article",
    images: [
      "https://pub-3775c49696ac49478c024f66a3dbe50d.r2.dev/The%20Fry%20Universe.webp",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Fry Universe — The Geometry of French Fries",
    description:
      "A 3D scrollytelling tool that explains why you prefer one fry shape over another. The answer is geometry.",
    images: [
      "https://pub-3775c49696ac49478c024f66a3dbe50d.r2.dev/The%20Fry%20Universe.webp",
    ],
  },
};

export default function FryUniversePage() {
  return (
    <>
      <SiteHeader />
      <div className="uc-page-bg pb-4">
        <div className="mx-auto max-w-[var(--page-max)] px-[var(--page-pad)] pt-6">
          <Link
            href="/"
            className="inline-flex text-sm text-[var(--ink-muted)] underline-offset-4 hover:underline"
          >
            ← Back to home
          </Link>
        </div>

        <article className="mx-auto max-w-[680px] px-[var(--page-pad)] py-16 text-[var(--ink)]">
          {/* Hero */}
          <div className="mb-12 pb-8 border-b border-[var(--line)]">
            <p className="mb-5 font-sans text-xs uppercase leading-relaxed tracking-[0.18em] text-[var(--ink-muted)]">
              Interactive Tool · Geometry · Food Science
            </p>
            <h1 className="font-serif text-[clamp(2rem,6vw,3.5rem)] font-bold leading-tight tracking-tight text-[var(--ink)]">
              The Fry Universe
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[var(--ink-muted)] font-serif italic">
              You have preferences about french fries. Strong ones, probably,
              even if you have never tried to justify them. Chris Williams built
              a tool that explains exactly why — and the answer turns out to be
              a geometry problem you have been solving unconsciously your whole life.
            </p>
          </div>

          {/* Meta */}
          <div className="mb-12 pb-8 border-b border-[var(--line)] flex flex-wrap gap-6 font-mono text-xs uppercase tracking-widest text-[var(--ink-muted)]">
            <span>Chris Williams · 2024</span>
            <a
              href="https://www.chris-williams.me/fry-universe"
              target="_blank"
              rel="noopener noreferrer"
              className="article-euclid-link"
            >
              chris-williams.me/fry-universe →
            </a>
          </div>

          {/* Featured Image */}
          <figure className="mb-12 -mx-[var(--page-pad)] md:-mx-[calc((100vw-680px)/4)]">
            <img
              src="https://pub-3775c49696ac49478c024f66a3dbe50d.r2.dev/The%20Fry%20Universe.webp"
              alt="The Fry Universe — 3D visualization of french fry shapes by Chris Williams"
              className="w-full h-auto"
            />
            <figcaption className="text-center font-mono text-xs text-[var(--ink-muted)] uppercase tracking-widest mt-4 px-[var(--page-pad)]">
              The Fry Universe — chris-williams.me/fry-universe
            </figcaption>
          </figure>

          {/* Lead */}
          <p className="mb-12 pb-8 border-b border-[var(--line)] text-lg font-semibold leading-relaxed text-[var(--ink)] sm:text-xl">
            The central claim of <em>The Fry Universe</em> is disarmingly
            simple: your preference for a particular fry type is, in large part,
            a preference for a particular ratio between crispy exterior and soft
            interior. That ratio is a direct consequence of the shape's surface
            area relative to its volume. Change the shape, change the ratio.
            Change the ratio, change what you feel about the fry.
          </p>

          {/* Body */}
          <section className="mb-16">
            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              <strong>The Fry Universe</strong> is a short scrollytelling piece —
              interactive, 3D-modeled, unhurried — that walks through the major
              fry shapes and explains what the geometry is actually doing. The
              format is a{" "}
              <a
                href="https://www.chris-williams.me/fry-universe"
                target="_blank"
                rel="noopener noreferrer"
                className="article-euclid-link"
              >
                single scrollable page
              </a>{" "}
              where 3D models rotate and respond as you move, each shape
              introduced in sequence with its geometric properties shown directly.
            </p>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The mechanics are straightforward once stated. A thin shoestring
              fry has an enormous surface area relative to its volume: almost the
              entire fry is close to the hot oil, which means almost the entire
              fry becomes crust. A steak fry is the opposite — a large interior
              protected by a thinner shell of crispiness, like a potato that has
              barely been persuaded to participate in the frying process.
            </p>

            <blockquote className="my-10 pl-6 border-l-2 border-[var(--ink)] text-lg italic leading-relaxed text-[var(--ink-muted)]">
              &ldquo;The question &lsquo;what is your favorite fry?&rsquo; turns out to be
              a geometry question in disguise.&rdquo;
              <cite className="block mt-3 font-mono text-xs not-italic uppercase tracking-[0.12em] text-[var(--ink-muted)]">
                — The implication of the whole tool
              </cite>
            </blockquote>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              A crinkle cut increases surface area beyond what a simple cylinder
              would have — which is why crinkle cuts are crunchier than their
              thickness suggests. A waffle fry is an engineering solution to the
              problem of wanting something simultaneously thick enough to hold
              its shape and complex enough to crisp in interesting ways. Curly
              fries, with their spiral geometry, have more surface area than a
              straight cut of the same diameter. That is the reason so many
              people prefer them, and have never once thought about why.
            </p>
          </section>

          {/* Surface-to-Volume comparison */}
          <section className="mb-16">
            <h2 className="mb-4 font-serif text-2xl font-bold text-[var(--ink)]">
              Six Shapes, One Ratio
            </h2>
            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The tool walks through six canonical fry shapes, presenting each
              as a 3D model and mapping its surface-to-volume ratio visually.
              The ordering is not random — it follows the ratio from highest to
              lowest, which maps almost perfectly onto most people&rsquo;s intuitions
              about crispiness.
            </p>

            <div className="my-8 divide-y divide-[var(--line)] border border-[var(--line)]">
              {[
                { name: "Shoestring", ratio: "Very high", pct: 96 },
                { name: "Curly", ratio: "High", pct: 88 },
                { name: "Crinkle-cut", ratio: "High", pct: 78 },
                { name: "Waffle", ratio: "Medium", pct: 74 },
                { name: "Standard cut", ratio: "Medium", pct: 54 },
                { name: "Steak fry", ratio: "Low", pct: 28 },
              ].map((fry) => (
                <div
                  key={fry.name}
                  className="grid items-center gap-4 px-6 py-4"
                  style={{ gridTemplateColumns: "140px 1fr 70px" }}
                >
                  <span className="font-serif italic text-[var(--ink-soft)] text-sm">
                    {fry.name}
                  </span>
                  <div className="h-2 rounded-full bg-[var(--line)] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[var(--ink)]"
                      style={{ width: `${fry.pct}%` }}
                    />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--ink-muted)] text-right">
                    {fry.ratio}
                  </span>
                </div>
              ))}
              <p className="px-6 py-3 font-mono text-[10px] uppercase tracking-widest text-[var(--ink-muted)] bg-[var(--bg-soft,#f7f3ec)]">
                Approximate — based on 3D geometric modeling of fry cross-sections
              </p>
            </div>
          </section>

          {/* Scrollytelling section */}
          <section className="mb-16">
            <h2 className="mb-4 font-serif text-2xl font-bold text-[var(--ink)]">
              On Scrollytelling as a Format
            </h2>
            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The fry shapes need to be seen in three dimensions to make sense —
              a waffle fry described in text is a different object from a waffle
              fry rotated slowly in front of you. This is a small thing to do
              well. Most web tools that deploy 3D modeling for a light subject
              produce something that feels either overwrought or half-finished.
              Williams&rsquo;s piece is neither. It is proportionate — it uses exactly
              as much technology as the argument requires, and no more.
            </p>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              What makes the tool interesting beyond its immediate subject is the
              question it implies about taste preferences in general. Underneath
              memory and culture is a layer of pure physics: heat transfer rates,
              moisture gradients, the relationship between surface area and crust
              formation. Your preference for curly fries over steak fries is
              yours. It is also a straightforward consequence of how you are
              built and how oil and heat behave at a certain temperature.
            </p>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The tool takes about five minutes to work through and leaves you
              with a framework you will find yourself applying at every fast food
              counter for the rest of your life. That is a modest ambition
              executed without waste — which is, oddly, exactly what a good
              french fry is.
            </p>
          </section>

          {/* CTA */}
          <div className="mb-16 border border-[var(--line)] p-8">
            <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--ink-muted)]">
              Interactive Tool
            </p>
            <p className="mb-3 font-serif text-xl font-bold text-[var(--ink)] italic">
              The Fry Universe 🍟
            </p>
            <p className="mb-6 text-sm leading-relaxed text-[var(--ink-muted)]">
              3D scrollytelling visualization of fry shapes, surface-to-volume
              ratios, and the geometry of crispiness. By Chris Williams.
            </p>
            <a
              href="https://www.chris-williams.me/fry-universe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[var(--ink)] px-6 py-3 font-mono text-[10.5px] uppercase tracking-[0.1em] text-[var(--cream,#f7f3ec)] transition-opacity hover:opacity-80"
            >
              Open the Tool →
            </a>
          </div>

          {/* Footer */}
          <hr className="border-t border-[var(--line)] mb-8" />
          <div className="flex justify-between font-mono text-[10.5px] uppercase tracking-[0.08em] text-[var(--ink-muted)]">
            <span>abakcus.com</span>
            <span>Tool</span>
          </div>
        </article>
      </div>

      <ArticleReadMore currentSlug="fry-universe" />
    </>
  );
}
