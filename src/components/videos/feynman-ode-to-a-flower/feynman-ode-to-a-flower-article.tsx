import { ArticleProseLink } from "@/components/articles/article-prose-link";

const GREEN = "#4a6741";
const GREEN_DIM = "#3a5433";

function Divider() {
  return (
    <div className="my-12 flex items-center gap-4">
      <span className="h-px flex-1 bg-[var(--line)]" />
      <span
        className="font-mono text-[0.6rem] uppercase tracking-[0.2em]"
        style={{ color: GREEN_DIM }}
      >
        §
      </span>
      <span className="h-px flex-1 bg-[var(--line)]" />
    </div>
  );
}

export function FeynmanOdeToAFlowerArticle() {
  return (
    <div className="text-[var(--ink)]">
      {/* ── HERO ── */}
      <header className="relative overflow-hidden bg-[#0d160b] pb-0">
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, #060d05 0%, #0d160b 100%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[var(--page-max)] px-[var(--page-pad)]">
          <div className="flex flex-col items-center gap-8 py-16 text-center md:py-20">
            <p
              className="font-mono text-[0.62rem] uppercase tracking-[0.26em]"
              style={{ color: GREEN }}
            >
              Video &nbsp;·&nbsp; Richard Feynman &nbsp;·&nbsp; 1981 / 2012
            </p>
            <h1 className="font-serif text-[clamp(2.4rem,7vw,4.8rem)] font-medium italic leading-[1.0] tracking-tight text-[#f0f5ef]">
              Ode to a Flower
            </h1>
            <p
              className="max-w-md font-serif text-lg italic leading-relaxed"
              style={{ color: "rgba(180,210,175,0.6)" }}
            >
              On whether understanding a flower destroys it — or multiplies it.
            </p>
          </div>
        </div>

        {/* ── VIDEO ── */}
        <div className="relative z-10 mx-auto max-w-[var(--page-max)] px-[var(--page-pad)] pb-0">
          <div
            className="overflow-hidden rounded-t-lg"
            style={{ boxShadow: "0 24px 60px -12px rgba(0,0,0,0.7)" }}
          >
            <div className="relative w-full bg-black" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://player.vimeo.com/video/55874553?title=0&byline=0&portrait=0"
                title="Richard Feynman — Ode to a Flower"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <p
            className="mt-3 pb-10 text-center font-mono text-[0.6rem] uppercase tracking-[0.14em]"
            style={{ color: "rgba(180,210,175,0.7)" }}
          >
            Richard Feynman — Ode to a Flower · BBC Fun to Imagine, 1981
          </p>
        </div>
      </header>

      {/* ── BODY ── */}
      <article className="mx-auto max-w-[720px] px-[var(--page-pad)] pt-16 pb-24">
        {/* Eyebrow pills */}
        <div className="mb-8 flex flex-wrap items-center gap-2">
          <span
            className="rounded-full px-2.5 py-0.5 font-mono text-[0.58rem] uppercase tracking-[0.14em]"
            style={{
              background: "color-mix(in srgb, var(--pastel-lime) 55%, white)",
              color: GREEN_DIM,
            }}
          >
            Video
          </span>
          <span
            className="rounded-full px-2.5 py-0.5 font-mono text-[0.58rem] uppercase tracking-[0.14em]"
            style={{
              background: "color-mix(in srgb, var(--pastel-lime) 55%, white)",
              color: GREEN_DIM,
            }}
          >
            Richard Feynman
          </span>
          <span className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
            Beauty · Science · Curiosity
          </span>
        </div>

        {/* ── DROP-CAP ── */}
        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          <span
            className="float-left mr-2 mt-1 font-serif text-[4.5rem] font-bold leading-[0.78] sm:text-[5.2rem]"
            style={{ color: GREEN_DIM }}
            aria-hidden="true"
          >
            T
          </span>
          here is a recurring argument about what science does to beauty. The version
          you hear most often goes something like this: to name a thing is to diminish it;
          to explain a mechanism is to drain it of wonder; to know what a rainbow is
          made of is to lose the feeling of standing under one. It is a seductive argument.
          It is also, Feynman thought, completely wrong — and he said so with a flower in mind.
        </p>

        <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          The clip is short. A minute and a half, maybe two. It comes from a longer
          BBC series called <em>Fun to Imagine</em>, recorded in 1981, and it circulates
          online in the way that things circulate when they keep striking people as true.
          In it, Feynman describes a conversation with an artist friend who believes that
          science strips the world of its beauty.{" "}
          <ArticleProseLink
            href="/articles/feynman-technique"
            className="article-euclid-link"
          >
            Feynman&apos;s response
          </ArticleProseLink>{" "}
          is patient, warm, and quietly devastating.
        </p>

        {/* ── TRANSCRIPT ── */}
        <div
          className="my-14 border-t border-b py-10"
          style={{ borderColor: "var(--line)" }}
        >
          <div className="mb-8 flex items-center gap-3">
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.18em] text-[var(--ink-muted)]">
              Feynman, in his own words
            </span>
            <span className="h-px flex-1 bg-[var(--line)]" />
          </div>
          <p className="font-serif text-[1.1rem] italic leading-[1.85] text-[var(--ink)] sm:text-[1.2rem]">
            I have a friend who&apos;s an artist and has sometimes taken a view which
            I don&apos;t agree with very well. He&apos;ll hold up a flower and say
            &ldquo;look how beautiful it is,&rdquo; and I&apos;ll agree. Then he says
            &ldquo;I as an artist can see how beautiful this is but you as a scientist
            take this all apart and it becomes a dull thing,&rdquo; and I think that{" "}
            <em style={{ color: GREEN_DIM }}>he&apos;s kind of nutty.</em>
          </p>
          <p className="mt-6 font-serif text-[1.1rem] italic leading-[1.85] text-[var(--ink)] sm:text-[1.2rem]">
            First of all, the beauty that he sees is available to other people and to
            me too, I believe… I can appreciate the beauty of a flower. At the same
            time,{" "}
            <em style={{ color: GREEN_DIM }}>
              I see much more about the flower than he sees.
            </em>{" "}
            I could imagine the cells in there, the complicated actions inside, which
            also have a beauty. I mean it&apos;s not just beauty at this dimension, at
            one centimeter; there&apos;s also beauty at smaller dimensions, the inner
            structure, also the processes. The fact that the colors in the flower evolved
            in order to attract insects to pollinate it is interesting; it means that
            insects can see the color. It adds a question: does this aesthetic sense also
            exist in the lower forms? Why is it aesthetic?
          </p>
          <p className="mt-6 font-serif text-[1.1rem] italic leading-[1.85] text-[var(--ink)] sm:text-[1.2rem]">
            All kinds of interesting questions which the science knowledge only{" "}
            <em style={{ color: GREEN_DIM }}>
              adds to the excitement, the mystery and the awe of a flower. It only adds.
            </em>{" "}
            I don&apos;t understand how it subtracts.
          </p>
        </div>

        {/* ── SIDEBAR + PROSE ── */}
        <div className="clear-both mb-8 border border-[var(--line)] px-5 py-4 sm:float-right sm:mb-4 sm:ml-8 sm:w-[220px] sm:px-4 sm:py-4">
          <span
            className="mb-2 block font-mono text-[0.6rem] uppercase tracking-[0.14em]"
            style={{ color: GREEN_DIM }}
          >
            —
          </span>
          <p className="font-serif text-[0.82rem] italic leading-[1.6] text-[var(--ink-muted)]">
            The clip is an excerpt from <em>Fun to Imagine</em>, a 1981 BBC documentary
            series in which Feynman walks through everyday phenomena — fire, rubber bands,
            magnets, mirrors — with the same disarming curiosity.
          </p>
        </div>

        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          The argument Feynman is pushing back against has a long pedigree. Keats called
          Newton out for &ldquo;unweaving the rainbow&rdquo; — breaking white light into a
          spectrum and, in doing so, supposedly emptying the sky of poetry. It is a
          beautiful grievance. The problem is that it assumes beauty has a fixed quantity:
          that you must choose between the arc of colors and the physics of refraction,
          between the flower and the cell. Feynman&apos;s entire point is that this is a
          false trade. The cell is also beautiful. The refraction is also beautiful.
          Understanding the mechanism does not cancel the experience — it layers it.
        </p>

        {/* ── PULL QUOTE ── */}
        <blockquote
          className="clear-both my-10 border-l-[3px] py-1 pl-6"
          style={{ borderColor: GREEN_DIM }}
        >
          <p className="font-serif text-[1.2rem] italic leading-[1.65] text-[var(--ink)] sm:text-[1.3rem]">
            &ldquo;It&apos;s not just beauty at this dimension, at one centimeter.
            There&apos;s also beauty at smaller dimensions.&rdquo;
          </p>
          <cite className="mt-3 block font-mono text-[0.65rem] uppercase tracking-[0.12em] not-italic text-[var(--ink-muted)]">
            Richard Feynman
          </cite>
        </blockquote>

        <Divider />

        {/* ── OPEN QUESTION INSET ── */}
        <div
          className="my-10 border-l-4 border border-[var(--line)] px-7 py-6 sm:px-8 sm:py-7"
          style={{
            borderLeftColor: GREEN_DIM,
            background: "color-mix(in srgb, var(--pastel-lime) 22%, white)",
          }}
        >
          <p
            className="mb-5 font-mono text-[0.58rem] uppercase tracking-[0.18em]"
            style={{ color: GREEN_DIM }}
          >
            The Question He Leaves Open
          </p>
          <p className="mb-4 font-serif text-[0.97rem] leading-[1.8] text-[var(--ink-muted)] sm:text-[1.02rem]">
            Feynman notes that flower colors evolved to attract insects — and then stops
            to ask whether insects experience something like aesthetics. Whether there is,
            in some minimal form, something it is like to be drawn to a color.
          </p>
          <p className="font-serif text-[0.97rem] leading-[1.8] text-[var(--ink-muted)] sm:text-[1.02rem]">
            He does not answer the question. He just leaves it there, open, in the middle
            of a two-minute clip about a flower. This is the move that separates curiosity
            as a performance from curiosity as an actual way of being in the world —{" "}
            <em className="text-[var(--ink)]">
              he finds the question more interesting than the answer would be.
            </em>{" "}
            It is the same instinct that drove him to{" "}
            <ArticleProseLink
              href="/articles/feynman-math-education"
              className="article-euclid-link"
            >
              walk into a classroom in Brazil
            </ArticleProseLink>{" "}
            and ask why the students could pass every exam without understanding
            anything.
          </p>
        </div>

        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          What makes the clip stick is not the argument — the argument is simple and
          correct — but the texture of how Feynman makes it. He is not defending science
          against art. He is genuinely puzzled that anyone would see them as competitors.
          The phrase &ldquo;I don&apos;t understand how it subtracts&rdquo; is not
          rhetorical. He actually doesn&apos;t understand. That bafflement is the whole
          video.
        </p>

        <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          There is something else worth noticing. Feynman says the artist&apos;s beauty
          is &ldquo;available to other people and to me too&rdquo; — meaning he does not
          claim science gives him a superior kind of seeing, only an additional one. He is
          not standing over the flower. He is standing beside it, at multiple scales at
          once, none of them crowding the others out. The one-centimeter flower and the
          cellular flower and the evolutionary flower and the entomological flower are all
          the same flower, all at the same time. That is not a reduction. That is a view
          from everywhere. It is, in a different register, what he describes in{" "}
          <ArticleProseLink
            href="/books/surely-youre-joking-mr-feynman"
            className="article-euclid-link"
          >
            <em>Surely You&apos;re Joking</em>
          </ArticleProseLink>{" "}
          as play — something that looks trivial and turns out to be the whole thing.
        </p>

        <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          Two minutes. A flower. A question about whether bees find things beautiful.
          Not a bad use of a Tuesday afternoon.
        </p>

        {/* ── VERDICT ── */}
        <div
          className="mt-12 flex gap-5 rounded-xl border border-[var(--line)] px-6 py-6 sm:px-8 sm:py-7"
          style={{ background: "color-mix(in srgb, var(--pastel-lime) 18%, white)" }}
        >
          <span
            className="shrink-0 pt-0.5 text-2xl leading-none tracking-widest"
            style={{ color: GREEN_DIM }}
          >
            ★★★★★
          </span>
          <div>
            <p className="font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              In short
            </p>
            <p className="mt-2 font-serif text-base italic leading-relaxed text-[var(--ink-muted)] sm:text-[1.05rem]">
              A two-minute argument against a grievance that has lasted three centuries.
              Feynman wins it by not arguing — only by being genuinely confused that
              anyone would disagree.
            </p>
          </div>
        </div>

        {/* ── FOOTER ── */}
        <p className="mt-12 text-xs leading-relaxed text-[var(--ink-muted)]">
          Richard Feynman — <em>Fun to Imagine</em>, BBC, 1981
          &nbsp;·&nbsp; abakcus.com
        </p>
      </article>
    </div>
  );
}
