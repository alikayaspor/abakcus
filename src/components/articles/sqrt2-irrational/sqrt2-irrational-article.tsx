import type { ReactNode } from "react";
import Image from "next/image";
import { ArticleImageLightbox } from "@/components/articles/article-image-lightbox";
import { ArticleProseLink } from "@/components/articles/article-prose-link";
import { UnitCircleSectionReveal } from "@/components/articles/unit-circle/unit-circle-section-reveal";
import { PASTEL } from "@/data/pastel-palette";

const R2 = "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev";
const IMG_HERO = `${R2}/The%20Proof%20of%20Square%20Root%20of%202%20Irrational.webp`;

/* ── SECTION HEADER ── */
function SectionHead({ title }: { title: string }) {
  return (
    <div className="mb-6 border-b border-[var(--line)] pb-3">
      <h2 className="font-serif text-[1.05rem] font-medium leading-snug tracking-[0.01em] text-[var(--ink)] sm:text-[1.15rem]">
        {title}
      </h2>
    </div>
  );
}

/* ── HERO IMAGE ── */
function ArticleFigure({
  src,
  alt,
  caption,
  priority,
  pastel,
}: {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  pastel: keyof typeof PASTEL;
}) {
  return (
    <figure
      className="my-10 overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-card)] sm:-mx-8 lg:-mx-16"
      style={{ backgroundColor: PASTEL[pastel] }}
    >
      <ArticleImageLightbox src={src} alt={alt} caption={caption}>
        <div className="w-full overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            className="mx-auto block h-auto w-full transition-transform duration-500 group-hover:scale-[1.015]"
            loading={priority ? "eager" : "lazy"}
            decoding="async"
          />
        </div>
      </ArticleImageLightbox>
      {caption && (
        <figcaption className="px-4 pb-4 pt-3 text-center font-serif text-sm italic leading-snug text-[var(--ink)]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/* ── PROOF WALKTHROUGH BLOCK ── */
function ProofBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="my-8 overflow-hidden rounded-[var(--radius-card)] border border-[var(--line-soft)] border-l-[3px] border-l-[var(--pastel-rose)] bg-[var(--surface)] px-5 py-5 shadow-sm sm:px-6">
      <p className="mb-4 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
        {title}
      </p>
      <div className="space-y-3 text-[0.95rem] leading-relaxed text-[var(--ink)]">
        {children}
      </div>
    </div>
  );
}

/* ── ASIDE NOTE ── */
function AsideNote({ children }: { children: ReactNode }) {
  return (
    <aside className="my-8 border-l-2 border-[var(--line)] py-1 pl-5">
      <p className="text-[0.88rem] italic leading-relaxed text-[var(--ink-muted)]">
        {children}
      </p>
    </aside>
  );
}

/* ── MAIN COMPONENT ── */
export function Sqrt2IrrationalArticle() {
  return (
    <UnitCircleSectionReveal>
      <div className="unit-circle-article text-[var(--ink)]">

        {/* ── HEADER ── */}
        <div className="mx-auto max-w-[780px] px-[var(--page-pad)] pb-6 pt-8 text-center sm:pb-8 sm:pt-10">
          <p className="mb-5 font-sans text-[0.62rem] uppercase leading-relaxed tracking-[0.24em] text-[var(--ink-muted)] sm:text-[0.65rem]">
            Number Theory · Proof · Well-Ordering Principle
          </p>
          <h1 className="font-serif text-[clamp(2rem,6vw,3.1rem)] font-normal leading-[1.1] tracking-[-0.02em] text-[var(--ink)]">
            A Number That Cannot Be the Smallest
          </h1>
          <p className="mx-auto mt-6 max-w-[34rem] border-l-2 border-[var(--ink)] pl-5 text-left text-lg italic leading-relaxed text-[var(--ink-muted)] sm:text-xl">
            Most proofs that √2 is irrational require knowing something about
            even numbers. This one requires knowing only that every nonempty set
            of natural numbers has a smallest element — and then it finds a
            contradiction in that smallest element itself.
          </p>
          <div className="mx-auto mt-7 h-px w-14 bg-[var(--line)] sm:mt-8" aria-hidden />
        </div>

        <article className="mx-auto max-w-[min(48rem,100%)] px-[var(--page-pad)] pb-20 pt-2 sm:pb-28">

          {/* ── HERO IMAGE ── */}
          <ArticleFigure
            src={IMG_HERO}
            alt="A visual proof that the square root of 2 is irrational, using the well-ordering principle"
            caption="A proof that √2 is irrational — using nothing but a smallest natural number and the contradiction waiting inside it."
            priority
            pastel="lavender"
          />

          {/* ── STEP BY STEP ── */}
          <div className="mt-12">
            <SectionHead title="Step by step" />

            <p className="text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              We assume √2 is rational and look for a contradiction. If √2 = p/q
              for some integers p, q, then multiplying both sides by q gives
              q√2 = p, an integer. So the set S = &#123; N ∈ ℕ : N√2 ∈ ℕ &#125; is
              nonempty — q is in it. By the well-ordering principle, S has a
              smallest element k.
            </p>

            <p className="mt-5 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              Now consider the number k(√2 &minus; 1). Two things are true about it
              simultaneously, and together they are fatal.
            </p>

            <ProofBlock title="The two facts">
              <p>
                <strong>Fact 1: k(√2 &minus; 1) is in S.</strong> Multiply it by √2:
              </p>
              <p className="my-3 text-center font-serif text-[1.05rem] italic">
                k(√2 &minus; 1) &middot; √2 = 2k &minus; k√2
              </p>
              <p>
                Both k and k√2 are integers by assumption, so 2k &minus; k√2 is an
                integer. This means k(√2 &minus; 1) &middot; √2 ∈ ℕ, which is exactly
                the condition for membership in S.
              </p>
              <p>
                <strong>Fact 2: k(√2 &minus; 1) &lt; k.</strong> Since √2 &lt; 2, we have
                √2 &minus; 1 &lt; 1, so k(√2 &minus; 1) &lt; k.
              </p>
              <p>
                An element of S that is strictly smaller than the smallest element
                of S. The assumption that √2 ∈ ℚ must be false.
              </p>
            </ProofBlock>
          </div>

          {/* ── WHY THIS PROOF IS DIFFERENT ── */}
          <div className="mt-12">
            <SectionHead title="Why this proof is different" />

            <p className="text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The classical proof — the one in{" "}
              <ArticleProseLink href="/articles/billingsley-euclid">
                Euclid
              </ArticleProseLink>
              {" "}— writes √2 = p/q in lowest terms, squares both sides, and
              derives that both p and q must be even, contradicting the
              lowest-terms assumption. It works, but it requires the machinery
              of common factors and reduced fractions.
            </p>

            <p className="mt-5 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              This proof needs none of that. It never writes √2 as a fraction. It
              never mentions even numbers. The only arithmetic it uses is that
              1 &lt; √2 &lt; 2 — which follows from 1² = 1 and 2² = 4 — and that
              the difference of two integers is an integer. Everything else is the
              well-ordering principle doing its job.
            </p>

            <AsideNote>
              The well-ordering principle is equivalent to the principle of
              mathematical induction. Taking one as an axiom lets you prove the
              other as a theorem. Here, well-ordering does the work that in other
              proofs induction would do: it manufactures the minimal counterexample
              that a descent argument then destroys.
            </AsideNote>

            <p className="mt-5 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              A proof that proceeds by structure rather than by calculation tends
              to be one you understand rather than merely remember — the
              distinction the{" "}
              <ArticleProseLink href="/articles/feynman-technique">
                Feynman Technique
              </ArticleProseLink>
              {" "}is built around. Once you have seen why the descent is
              unavoidable, the result is obvious. Before you see it, no amount of
              arithmetic makes it feel necessary.
            </p>

            <p className="mt-5 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The Pythagoreans discovered that √2 is irrational — that the
              diagonal of the unit square cannot be expressed as a ratio of whole
              numbers — and reportedly found it disturbing enough to suppress.
              They were not the last to want mathematics to behave differently:
              the{" "}
              <ArticleProseLink href="/articles/indiana-pi-bill">
                Indiana Pi Bill of 1897
              </ArticleProseLink>
              {" "}attempted to settle the value of π by legislative vote.
              The proof above answers its own question with rather more finality
              than any bill could. If such a ratio existed, there would have to be
              a first natural number witnessing it. There isn&apos;t.
            </p>
          </div>

        </article>
      </div>
    </UnitCircleSectionReveal>
  );
}
