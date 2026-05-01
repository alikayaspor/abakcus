import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { SiteHeader } from "@/components/home/site-header";

export const metadata: Metadata = {
  title:
    "Seeing Theory: A Visual Introduction to Probability and Statistics",
  description:
    "A Brown University student set out to make statistics feel like something you could see. The result won a Webby Award and changed how thousands of people understand probability.",
  keywords: [
    "Seeing Theory",
    "visual statistics",
    "probability visualization",
    "Daniel Kunin",
    "D3.js statistics",
    "interactive probability",
    "Brown University",
    "Webby Award education",
  ],
  openGraph: {
    title: "Seeing Theory: A Visual Introduction to Probability and Statistics",
    description:
      "A Brown University student set out to make statistics feel like something you could see. The result won a Webby Award and changed how thousands of people understand probability.",
    type: "article",
    images: [
      "https://pub-3775c49696ac49478c024f66a3dbe50d.r2.dev/Seeing%20Theory.png",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seeing Theory: Statistics You Can Watch Think",
    description:
      "A Brown University student set out to make statistics feel like something you could see. The result won a Webby Award.",
    images: [
      "https://pub-3775c49696ac49478c024f66a3dbe50d.r2.dev/Seeing%20Theory.png",
    ],
  },
};

export default function SeeingTheoryPage() {
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
              Interactive Tool · Statistics · D3.js
            </p>
            <h1 className="font-serif text-[clamp(2rem,6vw,3.5rem)] font-bold leading-tight tracking-tight text-[var(--ink)]">
              Seeing Theory
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[var(--ink-muted)] font-serif italic">
              A Brown University student decided that statistics was misunderstood
              because it was invisible. So he made it visible — and changed how
              a generation encounters probability.
            </p>
          </div>

          {/* Meta */}
          <div className="mb-12 pb-8 border-b border-[var(--line)] flex flex-wrap gap-6 font-mono text-xs uppercase tracking-widest text-[var(--ink-muted)]">
            <span>Daniel Kunin et al. · Brown University · 2017</span>
            <a
              href="https://seeing-theory.brown.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="article-euclid-link"
            >
              seeing-theory.brown.edu →
            </a>
          </div>

          {/* Featured Image */}
          <figure className="mb-12 -mx-[var(--page-pad)] md:-mx-[calc((100vw-680px)/4)]">
            <img
              src="https://pub-3775c49696ac49478c024f66a3dbe50d.r2.dev/Seeing%20Theory.png"
              alt="Seeing Theory — A Visual Introduction to Probability and Statistics by Daniel Kunin, Brown University"
              className="w-full h-auto"
            />
            <figcaption className="text-center font-mono text-xs text-[var(--ink-muted)] uppercase tracking-widest mt-4 px-[var(--page-pad)]">
              Seeing Theory — seeing-theory.brown.edu
            </figcaption>
          </figure>

          {/* Lead */}
          <p className="mb-12 pb-8 border-b border-[var(--line)] text-lg font-semibold leading-relaxed text-[var(--ink)] sm:text-xl">
            Statistics courses have a reputation problem. The concepts
            themselves — probability, inference, distributions — are not
            inherently opaque. They are descriptions of how the world behaves
            under uncertainty. The problem is that they are almost always taught
            through formulas alone, which is a bit like teaching swimming by
            handing someone a physics textbook.
          </p>

          {/* Body */}
          <section className="mb-16">
            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              <strong>Seeing Theory</strong> is a website built on a different
              premise: that the real barrier to understanding statistics is not
              mathematical difficulty but the absence of a mental image. If you
              can watch a probability distribution form in real time, if you can
              drag a parameter and see the curve respond, if you can build
              intuition through direct manipulation — the formulas that follow
              stop being obstacles and start being shorthand for things you
              already understand.
            </p>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The project was created by <strong>Daniel Kunin</strong> while he
              was an undergraduate at Brown University. He built the interactive
              visualizations using{" "}
              <a
                href="https://d3js.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="article-euclid-link"
              >
                D3.js
              </a>
              , the data visualization library written by Mike Bostock — a tool
              designed precisely for binding visual representations to data and
              making them respond to user interaction. The result, released in
              2017, won a Webby Award, was covered by Fast Company, Communication
              Arts, and SXSW, and was recognized by Brown University itself as an
              exemplary piece of educational work.
            </p>

            <blockquote className="my-10 pl-6 border-l-2 border-[var(--ink)] text-lg italic leading-relaxed text-[var(--ink-muted)]">
              &ldquo;The goal of this website is to make statistics more
              accessible through interactive visualizations.&rdquo;
              <cite className="block mt-3 font-mono text-xs not-italic uppercase tracking-[0.12em] text-[var(--ink-muted)]">
                — Daniel Kunin, Seeing Theory
              </cite>
            </blockquote>
          </section>

          {/* Six Chapters */}
          <section className="mb-16">
            <h2 className="mb-4 font-serif text-2xl font-bold text-[var(--ink)]">
              Six Chapters, One Argument
            </h2>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The site is organized into six chapters that trace a natural path
              through the field — from the first principles of probability to
              the applied machinery of regression analysis. Each chapter contains
              three subsections, and each subsection is a standalone interactive
              experience: you set parameters, you watch the mathematics move, and
              the concept arrives through the motion rather than through the
              explanation.
            </p>

            <div className="my-8 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[var(--line)] border border-[var(--line)]">
              {[
                {
                  num: "Chapter 1",
                  title: "Basic Probability",
                  topics: "Chance Events · Expectation · Variance",
                },
                {
                  num: "Chapter 2",
                  title: "Compound Probability",
                  topics: "Set Theory · Counting · Conditional Probability",
                },
                {
                  num: "Chapter 3",
                  title: "Probability Distributions",
                  topics:
                    "Random Variables · Discrete & Continuous · Central Limit Theorem",
                },
                {
                  num: "Chapter 4",
                  title: "Frequentist Inference",
                  topics: "Point Estimation · Interval Estimation · The Bootstrap",
                },
                {
                  num: "Chapter 5",
                  title: "Bayesian Inference",
                  topics: "Bayes' Theorem · Likelihood · Prior to Posterior",
                },
                {
                  num: "Chapter 6",
                  title: "Regression Analysis",
                  topics:
                    "Ordinary Least Squares · Correlation · Analysis of Variance",
                },
              ].map((ch) => (
                <div key={ch.num} className="p-5">
                  <span className="block font-mono text-[9px] uppercase tracking-[0.1em] text-[var(--ink-muted)] mb-2">
                    {ch.num}
                  </span>
                  <h3 className="font-serif text-base font-semibold text-[var(--ink)] mb-2">
                    {ch.title}
                  </h3>
                  <p className="font-sans text-xs leading-relaxed text-[var(--ink-muted)]">
                    {ch.topics}
                  </p>
                </div>
              ))}
            </div>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The progression is deliberate. It begins with the most elemental
              — what does it mean for an event to have a probability? — and
              builds through compound events, distributions, and inferential
              methods before arriving at regression. By the time you encounter
              Bayes' theorem in Chapter 5, you've already built, visually and
              intuitively, the machinery it depends on.
            </p>
          </section>

          {/* Why Visualization */}
          <section className="mb-16">
            <h2 className="mb-4 font-serif text-2xl font-bold text-[var(--ink)]">
              Why Visualization Changes the Experience
            </h2>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              Consider the Central Limit Theorem — one of the most important
              results in all of statistics, and one of the most counterintuitive.
              It says that regardless of the shape of a population's distribution,
              the distribution of sample means drawn from that population will
              approach a normal distribution as the sample size increases. In a
              textbook, this is a theorem with a proof. In Seeing Theory, you set
              the population distribution to whatever shape you want — skewed,
              bimodal, uniform — and watch the sampling distribution normalize
              before you as you increase the sample size. The theorem stops being
              a claim about the world and becomes something you've seen happen.
            </p>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The same holds for conditional probability, which is notoriously
              slippery when encountered abstractly. The visualization makes it
              spatial: you see which part of the probability space is being
              conditioned on, and how that changes the relative sizes of the
              remaining outcomes. The mistake that produces the famous Monty Hall
              confusion — failing to update probabilities when new information
              arrives — becomes much harder to make when you can watch the update
              happen geometrically. The principle is the same one that governs{" "}
              <Link
                href="/articles/sudoku-mathematics"
                target="_blank"
                rel="noopener noreferrer"
                className="article-euclid-link"
              >
                Sudoku's graph structure
              </Link>
              : a constraint that is invisible in the abstract becomes obvious
              the moment you draw it.
            </p>

            <div className="my-8 bg-[#D4E0EC] border-l-4 border-[#4a7fa8] p-6 rounded">
              <strong className="block font-mono text-[10px] uppercase tracking-[0.12em] text-[#4a7fa8] mb-2">
                On the tool
              </strong>
              <p className="font-sans text-sm text-[var(--ink-muted)] leading-relaxed italic">
                The site is built with D3.js, the JavaScript library for producing
                interactive, data-driven visualizations in the browser. D3 binds
                visual elements directly to data and allows them to respond
                smoothly to changes in parameters — which is precisely what makes
                Seeing Theory's manipulable diagrams feel live rather than static.
              </p>
            </div>
          </section>

          {/* The Team */}
          <section className="mb-16">
            <h2 className="mb-4 font-serif text-2xl font-bold text-[var(--ink)]">
              The Team
            </h2>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              Kunin was joined by three collaborators who helped bring the project
              to its final form.
            </p>

            <div className="my-8 grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[var(--line)] border border-[var(--line)]">
              {[
                { initials: "DK", name: "Daniel Kunin", role: "Creator & Design" },
                { initials: "JG", name: "Jingru Guo", role: "Visualization" },
                { initials: "TD", name: "Tyler Dae Devlin", role: "Development" },
                { initials: "DX", name: "Daniel Xiang", role: "Mathematics" },
              ].map((m) => (
                <div key={m.initials} className="p-5 text-center">
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--ink)] font-sans text-sm font-semibold text-white">
                    {m.initials}
                  </div>
                  <p className="font-serif text-sm font-semibold text-[var(--ink)]">
                    {m.name}
                  </p>
                  <p className="font-mono text-[9px] uppercase tracking-[0.08em] text-[var(--ink-muted)] mt-1">
                    {m.role}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Recognition */}
          <section className="mb-16">
            <h2 className="mb-4 font-serif text-2xl font-bold text-[var(--ink)]">
              Recognition
            </h2>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The project was received seriously from the moment of its release.
              It won the Information is Beautiful Awards, was selected by
              Communication Arts, and took a Webby Award in the Education
              category in 2018. It was recognized at SXSW. Fast Company covered
              it as a visual guide to statistics. The Cape and Islands public
              radio station ran a segment describing it as a website that would
              make you fall in love with the subject.
            </p>

            <div className="my-8 border border-[var(--line)]">
              <div className="px-5 py-3 bg-[#D4E0EC]">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--ink-muted)]">
                  Awards &amp; Press
                </span>
              </div>
              <div className="px-5 py-4 flex flex-wrap gap-2">
                {[
                  "Information is Beautiful Awards",
                  "Communication Arts",
                  "Webby Award — Education, 2018",
                  "SXSW Interactive Innovation Awards",
                  "Fast Company",
                  "The Next Web",
                  "Brown University",
                ].map((award) => (
                  <span
                    key={award}
                    className="font-mono text-[9px] uppercase tracking-[0.06em] text-[var(--ink)] border border-[var(--line)] px-3 py-1"
                  >
                    {award}
                  </span>
                ))}
              </div>
            </div>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              Beyond the awards, the site became part of how people actually teach
              and learn introductory statistics. It has been used in classrooms,
              recommended in syllabi, and shared across online communities wherever
              people try to make mathematical ideas legible to the people who need
              them most. A companion textbook was developed alongside the site
              — a draft is available for download — which gives the same material
              a more traditional written treatment for those who want the visual
              and the rigorous together. For a parallel approach applied to
              geometry,{" "}
              <Link
                href="/articles/billingsley-euclid"
                target="_blank"
                rel="noopener noreferrer"
                className="article-euclid-link"
              >
                Oliver Byrne's 1847 Euclid
              </Link>{" "}
              replaced every proof with a color diagram for exactly the same
              reason: to make abstract reasoning visible before the symbols arrive.
            </p>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The site is currently archived at its original URL at Brown
              University, meaning it remains accessible and fully functional as a
              reference. Everything built into it — the six chapters, the eighteen
              subsections, the interactive diagrams — continues to work exactly as
              Kunin designed it.
            </p>

            <p className="text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The case Seeing Theory makes, quietly and through demonstration
              rather than argument, is that understanding statistics is less about
              acquiring mathematical technique and more about developing a
              particular kind of intuition — one that lets you visualize
              randomness, feel the weight of a distribution, and grasp what it
              means when evidence changes what you should believe. The site
              doesn't just teach statistics. It teaches you what statistics looks
              like when it's working.
            </p>
          </section>

          {/* Source */}
          <div className="mt-16 pt-8 border-t border-[var(--line)]">
            <h3 className="mb-4 font-sans text-xs uppercase tracking-[0.24em] text-[var(--ink-muted)]">
              Visit
            </h3>
            <p className="font-sans text-sm text-[var(--ink-muted)] leading-relaxed">
              <strong className="text-[var(--ink)]">Seeing Theory</strong> is
              available at{" "}
              <a
                href="https://seeing-theory.brown.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="article-euclid-link"
              >
                seeing-theory.brown.edu
              </a>
              . Created by Daniel Kunin, Jingru Guo, Tyler Dae Devlin, and Daniel
              Xiang at Brown University. Built with{" "}
              <a
                href="https://d3js.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="article-euclid-link"
              >
                D3.js
              </a>
              . A companion textbook PDF is available for download on the site.
            </p>
          </div>
        </article>

        <ArticleReadMore currentSlug="seeing-theory" />
      </div>
    </>
  );
}
