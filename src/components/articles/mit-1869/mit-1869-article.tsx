import type { ReactNode } from "react";
import { ArticleImageLightbox } from "@/components/articles/article-image-lightbox";
import { ArticleProseLink } from "@/components/articles/article-prose-link";
import { UnitCircleSectionReveal } from "@/components/articles/unit-circle/unit-circle-section-reveal";
import { PASTEL } from "@/data/pastel-palette";

const R2 = "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev";
const IMG_EXAM    = `${R2}/MIT%27s%201869%20algebra%20entrance%20exam.png`;
const IMG_ANS_1   = `${R2}/MIT%E2%80%99s%20algebra%20entrance%20exam%20answers.jpg`;
const IMG_ANS_2   = `${R2}/MIT%E2%80%99s%20algebra%20entrance%20exam%20answers%202.jpg`;

const SOURCE_ALUM_SLICE =
  "https://alum.mit.edu/slice/could-you-have-gotten-mit-1869";

function SectionHead({ title }: { title: string }) {
  return (
    <div className="mb-6 border-b border-[var(--line)] pb-3">
      <h2 className="font-serif text-[1.05rem] font-medium leading-snug tracking-[0.01em] text-[var(--ink)] sm:text-[1.15rem]">
        {title}
      </h2>
    </div>
  );
}

function PullQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="my-10 border-l-2 border-[var(--ink)] py-2 pl-6 text-lg italic leading-relaxed text-[var(--ink-muted)]">
      {children}
    </blockquote>
  );
}

function AsideNote({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="my-6 border-l-[3px] border-[var(--pastel-sky)] bg-[color-mix(in_srgb,var(--pastel-peach)_25%,white)] px-4 py-3 font-mono text-[0.75rem] leading-relaxed text-[var(--ink-muted)]">
      <strong className="text-[var(--ink)]">{title}</strong>
      <span className="mt-1 block font-serif text-[0.88rem] italic text-[var(--ink-muted)]">
        {children}
      </span>
    </div>
  );
}

function ExamFigure({
  src,
  alt,
  caption,
  priority,
}: {
  src: string;
  alt: string;
  caption: string;
  priority?: boolean;
}) {
  return (
    <figure
      className="my-10 overflow-hidden rounded-[var(--radius-card)] p-3 shadow-[var(--shadow-card)] sm:p-4"
      style={{ backgroundColor: PASTEL.peach }}
    >
      <ArticleImageLightbox src={src} alt={alt} caption={caption}>
        <div className="w-full rounded-xl bg-white/60 p-1 sm:p-1.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            className="mx-auto block h-auto w-full rounded-lg object-contain transition-transform duration-500 group-hover:scale-[1.01]"
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            draggable={false}
          />
        </div>
      </ArticleImageLightbox>
      <figcaption className="mt-4 px-1 text-center font-serif text-sm italic leading-snug text-[var(--ink)]">
        {caption}
      </figcaption>
    </figure>
  );
}

function ThenNowInfographic() {
  const cols: {
    label: string;
    value: string;
    sub: string;
  }[] = [
    {
      label: "1869 entering class",
      value: "~15–20",
      sub: "students total",
    },
    {
      label: "2024 entering class",
      value: "~1,100",
      sub: "from ~26,000 applicants",
    },
    {
      label: "1869 tuition",
      value: "$100",
      sub: "per year",
    },
    {
      label: "2024 tuition",
      value: "$63,000",
      sub: "per year (before aid)",
    },
  ];
  return (
    <figure className="my-8 overflow-hidden rounded-sm border border-[#d8d4cc] bg-[#f5f0e8] shadow-[var(--shadow-soft)]">
      <div className="grid grid-cols-2 divide-x divide-y divide-[#d8d4cc] md:grid-cols-4 md:divide-y-0">
        {cols.map((c) => (
          <div key={c.label} className="flex flex-col gap-2 px-4 py-5 text-left">
            <p className="font-mono text-[0.5rem] font-normal uppercase leading-snug tracking-[0.14em] text-[var(--ink-muted)]">
              {c.label}
            </p>
            <p className="font-serif text-[clamp(1.35rem,3.5vw,1.85rem)] font-normal leading-none tracking-[-0.02em] text-[var(--ink)]">
              {c.value}
            </p>
            <p className="font-mono text-[0.65rem] font-normal normal-case leading-snug tracking-[0.02em] text-[var(--ink-muted)]">
              {c.sub}
            </p>
          </div>
        ))}
      </div>
      <figcaption className="sr-only">
        Comparison of MIT entering class size and annual tuition in 1869 versus
        2024.
      </figcaption>
    </figure>
  );
}

export function Mit1869Article() {
  return (
    <UnitCircleSectionReveal>
      <div className="unit-circle-article text-[var(--ink)]">
        <div className="mx-auto max-w-[780px] px-[var(--page-pad)] pb-6 pt-8 text-center sm:pb-8 sm:pt-10">
          <p className="mb-5 font-sans text-[0.62rem] uppercase leading-relaxed tracking-[0.24em] text-[var(--ink-muted)] sm:text-[0.65rem]">
            Mathematics · History · June 7, 1869
          </p>
          <h1 className="font-serif text-[clamp(2rem,6vw,3.1rem)] font-normal leading-[1.1] tracking-[-0.02em] text-[var(--ink)]">
            MIT&apos;s 1869 algebra entrance exam — seven questions that
            haven&apos;t changed
          </h1>
          <p className="mx-auto mt-6 max-w-[34rem] border-l-2 border-[var(--ink)] pl-5 text-left text-lg italic leading-relaxed text-[var(--ink-muted)] sm:text-xl">
            Seven questions, June 7, 1869. Find the value when e = 8, simplify
            a fraction, solve a two-variable system. The language is old and
            the handwriting fancy — but the actual difficulty? Pretty much the
            same as high school algebra today.
          </p>
          <div
            className="mx-auto mt-7 h-px w-14 bg-[var(--line)] sm:mt-8"
            aria-hidden
          />
        </div>

        <article className="mx-auto max-w-[min(48rem,100%)] px-[var(--page-pad)] pb-20 pt-2 sm:pb-28">
          <p className="intro-drop border-b border-[var(--line)] pb-8 text-lg leading-[1.82] text-[var(--ink)] sm:text-xl">
            The questions a kid had to answer to get into MIT 157 years ago are
            the same questions kids answer today. What changed isn&apos;t the
            math — it&apos;s everything else.
          </p>

          <ExamFigure
            src={IMG_EXAM}
            alt="MIT's 1869 algebra entrance exam — seven questions dated June 7, 1869"
            caption="MIT's 1869 algebra entrance exam. Institute Archives & Special Collections."
            priority
          />

          <section data-uc-section className="mt-14">
            <SectionHead title="The exam is real" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              You can find it in the MIT Institute Archives &amp; Special
              Collections. Seven questions, one page, dated June 7, 1869. It
              covers the MIT entrance exam for the academic year 1869–1870 —
              the first year the institute required a formal qualifying test at
              all. Before that, admission to MIT was essentially open.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The school opened in 1865, just after the Civil War, with 15
              students. Tuition was $100 for the year. The &ldquo;conditions
              for admission&rdquo; in the 1865 catalogue required only that
              candidates be at least sixteen years old and demonstrate a
              &ldquo;competent training&rdquo; in arithmetic, geometry,
              English, and the &ldquo;rudiments of French.&rdquo; Legible
              handwriting, the catalogue added, was &ldquo;particularly
              important.&rdquo;
            </p>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead title="Why no exam until 1869" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              MIT was four years old and desperate for tuition revenue. The
              object of the test wasn&apos;t to whittle down a massive applicant
              pool — it was simply to ensure incoming students could handle the
              coursework. In 1867, faculty had already found it &ldquo;necessary
              to ask parents of some incompetent and inattentive students to
              withdraw them from the school.&rdquo; The exam was a floor, not a
              filter.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              By 1869, the French requirement and the handwriting requirement had
              both been dropped. Algebra had been added. The MIT Corporation
              decided that incoming students should sit formal qualifying exams
              in English, Geometry, Arithmetic, and Algebra. The algebra section
              is what went viral on Reddit in 2024, accumulating over 37,000
              upvotes and 1,800 comments — mostly people marvelling at how
              straightforward it looks.
            </p>

            <AsideNote title="The school in 1869">
              MIT was eight years old, running out of money, and teaching
              classes in a rented building in Boston&apos;s Back Bay. Its
              founding faculty member, Charles Eliot, had just left to become
              president of Harvard — the same year this exam was administered.
              The school was informally called &ldquo;Boston Tech.&rdquo;
            </AsideNote>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead title="The seven questions" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              All seven questions are what any contemporary high school student
              would recognise as standard algebra. Question 1 substitutes a
              value and evaluates an expression with roots — the kind of
              substitution exercise that{" "}
              <ArticleProseLink href="/articles/unit-circle">
                underpins angle evaluation on the unit circle
              </ArticleProseLink>{" "}
              as much as it did MIT entrance exams. Questions 2 and 5 ask for
              algebraic simplification. Question 3 involves polynomial
              multiplication and division. Question 4 reduces a fraction with
              variable terms. Questions 6 and 7 are equations to solve.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Question 7 — &ldquo;Solve 7x − 5y = 24, 4x − 3y = 11&rdquo; — is
              a two-variable system of linear equations. It appears in
              essentially the same form in every algebra textbook currently in
              use. The answer sheet, also preserved in the MIT archives, shows
              the working: multiply the first equation by 3, the second by 5,
              subtract, get x = 17 and y = 19. Clean, mechanical, unchanged.
            </p>

            <PullQuote>
              What MIT was testing in 1869 isn&apos;t what MIT tests today. But
              the algebra itself is identical. The questions didn&apos;t get
              harder. Everything around them did.
            </PullQuote>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead title="The answers, in 19th-century handwriting" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The MIT Archives note that the answer sheet was completed by a
              20th-century person and &ldquo;won&apos;t always match those that
              might have been given by 19th century applicants.&rdquo; This is a
              detail worth pausing on: there is no original answer sheet from
              1869 applicants. We have the questions, but not the answers that
              passed or failed. The archive is reconstructed.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The handwriting on the answer sheet is elegant and deliberate in
              a way that fills the page differently from modern working — tighter
              spacing, the algebraic notation slightly different in style. But
              the mathematics is identical to what a calculator-less 21st-century
              student would produce with a pen and paper.
            </p>

            <ExamFigure
              src={IMG_ANS_1}
              alt="MIT 1869 algebra entrance exam answer sheet, page 1 — handwritten solutions"
              caption="Answer sheet, page 1. MIT Archives & Special Collections — completed by a 20th-century hand; working style may differ from 1869 convention."
            />
            <ExamFigure
              src={IMG_ANS_2}
              alt="MIT 1869 algebra entrance exam answer sheet, page 2 — questions 6 and 7"
              caption="Answer sheet, page 2. Questions 6 and 7 — the linear equation and the simultaneous system."
            />
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead title="Then vs. now — what actually changed" />
            <ThenNowInfographic />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The exam wasn&apos;t designed to find the best students in the
              country. It was designed to find students who wouldn&apos;t fail
              out. The bar was: can you handle this? Not: are you one of the top
              4% of applicants in the country? The mathematics of the test
              reflected that purpose. Seven questions that establish a baseline,
              not a ranking. The same seven questions, 157 years later, do
              something completely different — they sort among tens of thousands
              of applicants who can all already answer them.
            </p>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead title="The Reddit reaction, and what it missed" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              When the exam surfaced on Reddit in late 2024, the most common
              response was &ldquo;I could have gotten into MIT in 1870.&rdquo; A
              few commenters pushed back: this was only the algebra section; the
              full exam included English, Geometry, and Arithmetic too; and there
              were no calculators, so everything was done by hand.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              One observation that landed: the questions were designed to require
              almost no calculation — they test algebraic manipulation, not
              arithmetic fluency. That&apos;s a deliberate choice that still
              informs how algebra is taught. The questions didn&apos;t get
              harder. The competition did.
            </p>

            <PullQuote>
              The deeper thing about this exam is not that MIT&apos;s standards
              were lower in 1869. It&apos;s that the foundational vocabulary of
              algebra was already settled enough by then to function as an
              entrance requirement. And 157 years later, it still is.
            </PullQuote>

            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              A student sitting the 1869 MIT entrance exam today would need no
              explanation of what any question is asking. The notation is
              slightly archaic, the square root symbol is written differently,
              but the underlying mathematics is identical. The same durability
              shows up elsewhere in the history of mathematical documents —
              in{" "}
              <ArticleProseLink href="/articles/billingsley-euclid">
                Henry Billingsley&apos;s 1570 English translation of Euclid
              </ArticleProseLink>
              , a book that still teaches the same geometry Euclid wrote. The
              medium ages. The mathematics doesn&apos;t.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              In 1897, Indiana&apos;s legislature tried to make the mathematics
              comply with legislation instead. The{" "}
              <ArticleProseLink href="/articles/indiana-pi-bill">
                Indiana Pi Bill
              </ArticleProseLink>{" "}
              passed the House 67–0 before a mathematician stopped it. The 1869
              MIT exam is the opposite impulse: mathematics as the fixed point,
              and everything else — admissions, tuition, selectivity — arranged
              around it.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              What changed is who gets to take the test, how many people apply,
              and what the test is used to decide. The questions are the same.
              The exam is completely different.
            </p>
          </section>

          <p className="mt-12 border border-[var(--line)] px-5 py-4 font-mono text-[0.68rem] leading-relaxed text-[var(--ink-muted)]">
            Source:{" "}
            <a
              href={SOURCE_ALUM_SLICE}
              target="_blank"
              rel="noopener noreferrer"
            >
              MIT Alumni — &ldquo;Could you have gotten into MIT in
              1869?&rdquo;
            </a>
            {" · "}
            MIT Institute Archives &amp; Special Collections.
          </p>
        </article>
      </div>
    </UnitCircleSectionReveal>
  );
}
