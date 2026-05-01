import { ArticleProseLink } from "@/components/articles/article-prose-link";

const SAND = "#b8a880";
const SAND_DIM = "#8a7d60";
const DARK = "#1a1710";
const DARK_SURFACE = "#252218";
const RUST = "#8b3a1c";

function SandDivider() {
  return (
    <div className="relative my-12 h-8 overflow-hidden">
      {[4, 10, 16, 22, 28].map((top) => (
        <span
          key={top}
          className="absolute left-0 right-0 h-px"
          style={{ top, background: "#e8dfd0" }}
        />
      ))}
      <span
        className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: "#8a8078",
          boxShadow: "-24px 0 0 #c8b89a, 24px 0 0 #c8b89a",
        }}
      />
    </div>
  );
}

export function YukiKawaeArticle() {
  return (
    <div className="text-[var(--ink)]">
      {/* ── HERO ── */}
      <header className="relative overflow-hidden pb-0" style={{ background: DARK }}>
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background: `radial-gradient(ellipse 90% 60% at 50% 40%, ${DARK} 0%, #0e0d09 100%)`,
          }}
        />
        <div className="relative z-10 mx-auto max-w-[var(--page-max)] px-[var(--page-pad)]">
          <div className="flex flex-col items-center gap-8 py-16 text-center md:py-20">
            <p
              className="font-mono text-[0.62rem] uppercase tracking-[0.26em]"
              style={{ color: SAND_DIM }}
            >
              Video &nbsp;·&nbsp; Yuki Kawae &nbsp;·&nbsp; Zen Garden
            </p>
            <h1
              className="font-serif text-[clamp(2.4rem,7vw,4.8rem)] font-medium italic leading-[1.05] tracking-tight"
              style={{ color: "#f0ebe0" }}
            >
              A Drawing<br />That Erases Itself
            </h1>
            <p
              className="max-w-md font-serif text-lg italic leading-relaxed"
              style={{ color: "rgba(200,184,154,0.6)" }}
            >
              A rake moves through sand for 23 minutes. By the end, nothing remains.
              That is the whole argument.
            </p>
          </div>
        </div>

        {/* ── PRIMARY VIDEO (23 min) ── */}
        <div className="relative z-10 mx-auto max-w-[var(--page-max)] px-[var(--page-pad)] pb-10">
          <div
            className="overflow-hidden rounded-t-lg"
            style={{ boxShadow: "0 24px 60px -12px rgba(0,0,0,0.8)" }}
          >
            <div className="relative w-full bg-black" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/wxflcCxqebU"
                title="Yuki Kawae — Zen Garden Patterns"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div
              className="flex items-center justify-between px-5 py-3"
              style={{ background: DARK_SURFACE }}
            >
              <span
                className="font-mono text-[0.6rem] uppercase tracking-[0.12em]"
                style={{ color: "rgba(200,184,154,0.45)" }}
              >
                Yuki Kawae — Zen Garden &nbsp;·&nbsp; 23 min
              </span>
              <a
                href="https://www.youtube.com/watch?v=PBjGf5-hAPM"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[0.6rem] uppercase tracking-[0.12em] transition-colors"
                style={{ color: "rgba(200,184,154,0.55)", borderBottom: "1px solid rgba(200,184,154,0.2)" }}
              >
                3h 40min version →
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ── BODY ── */}
      <article className="mx-auto max-w-[720px] px-[var(--page-pad)] pb-24 pt-16">
        {/* Tag pills */}
        <div className="mb-8 flex flex-wrap items-center gap-2">
          <span
            className="rounded-full px-2.5 py-0.5 font-mono text-[0.58rem] uppercase tracking-[0.14em]"
            style={{ background: "#eee9e0", color: SAND_DIM }}
          >
            Video
          </span>
          <span
            className="rounded-full px-2.5 py-0.5 font-mono text-[0.58rem] uppercase tracking-[0.14em]"
            style={{ background: "#eee9e0", color: SAND_DIM }}
          >
            Meditation · Design
          </span>
          <span className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
            Yuki Kawae
          </span>
        </div>

        {/* ── DROP-CAP ── */}
        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          <span
            className="float-left mr-2 mt-1 font-serif text-[4.5rem] font-bold leading-[0.78] sm:text-[5.2rem]"
            style={{ color: SAND }}
            aria-hidden="true"
          >
            T
          </span>
          he video ends and the garden is gone. Not archived, not photographed for
          a portfolio, not preserved behind glass — gone, raked smooth, returned to
          a blank field of white sand ready for the next pattern. Whatever Yuki Kawae
          spent hours drawing with a small rake across a coffee-table-sized box in his
          Bay Area apartment is already gone by the time you finish watching it.
          This is not an oversight. It is the whole argument.
        </p>

        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          Kawae is a designer by training, and his Zen garden practice began in 2019 as a
          personal answer to a professional problem. He was, as he described it later,
          overwhelmed by tasks and expectations — the grinding arithmetic of daily life
          in which everything is either urgent or overdue. He turned to gardening first,
          the larger outdoor kind: pruning, watering, repotting. And then he noticed something.
          While his hands were in the soil, the calculations stopped. Not paused, not
          muted — stopped. He had found the off switch, and it was made of dirt.
        </p>

        {/* ── SIDEBAR NOTE ── */}
        <div className="clear-both mb-8 border border-[var(--line)] px-5 py-4 sm:float-right sm:mb-4 sm:ml-8 sm:w-[220px] sm:px-4 sm:py-4">
          <span
            className="mb-2 block font-mono text-[0.6rem] uppercase tracking-[0.14em]"
            style={{ color: SAND_DIM }}
          >
            —
          </span>
          <p className="font-serif text-[0.82rem] italic leading-[1.6] text-[var(--ink-muted)]">
            Each video requires hours of work before a single frame is filmed: conceptual
            planning, rake design and production, pattern practice, revisions. What you
            watch in 23 minutes represents a process that may have taken an entire day.
          </p>
        </div>

        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          Without outdoor space for a garden, he built a sand garden instead — a shallow
          wooden box, a set of small rakes of his own design, a bag of fine white sand.
          The scale is domestic, almost absurdly so: this is an object that fits on a
          coffee table, in an apartment, in a city full of coffee tables. But the
          practice that emerged from it is not domestic at all. Kawae composes patterns
          with the attention of someone working at full size — circles that ring small
          stones, lines that cross and generate new shapes at their intersections,
          fractals that build outward from a single groove in the sand. Each movement
          is committed. There is no undo.
        </p>

        {/* ── GIF ── */}
        <div className="my-10 overflow-hidden rounded-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://pub-676f738e0a3948d19dc9defd954e36d5.r2.dev/Yuki%20Kawae%20Zen%20Garden.gif"
            alt="Yuki Kawae raking patterns into a zen sand garden"
            className="w-full"
            loading="lazy"
            decoding="async"
          />
          <p
            className="bg-[#eee9e0] px-4 py-2.5 font-mono text-[0.58rem] uppercase tracking-[0.12em]"
            style={{ color: "#8a8078" }}
          >
            Each rake pass is a committed decision — no undo in sand
          </p>
        </div>

        {/* ── PULL QUOTE ── */}
        <blockquote
          className="my-10 border-l-[3px] py-1 pl-6"
          style={{ borderColor: SAND }}
        >
          <p className="font-serif text-[1.2rem] italic leading-[1.65] text-[var(--ink)] sm:text-[1.3rem]">
            &ldquo;All the zen garden patterns are not permanent, and they get erased to
            start a new one. It is temporary like many things in life.&rdquo;
          </p>
          <cite className="mt-3 block font-mono text-[0.65rem] uppercase tracking-[0.12em] not-italic text-[var(--ink-muted)]">
            Yuki Kawae
          </cite>
        </blockquote>

        <SandDivider />

        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          The 23-minute video above is not a tutorial. There is no narration, no
          on-screen text, no explanation of technique. You watch a rake move through
          sand. That is the entire content. The effect — which is real, and
          reproducible, and confirmed by the 3-hour-and-40-minute version that exists
          for people who want more of it — is something close to the experience Kawae
          describes: the calculations slow down. You stop tallying. The rake moves,
          the pattern grows, and the part of your brain that was tabulating unfinished
          tasks finds it has nothing left to tabulate. The{" "}
          <ArticleProseLink href="/videos/okazaki-matchstick" className="article-euclid-link">
            same quality appears in stop-motion work that demands total presence
          </ArticleProseLink>
          {" "}— the medium forces the mind into the moment.
        </p>

        {/* ── INSET ── */}
        <div className="my-10 border border-[#c8b89a] bg-[#eee9e0] px-8 py-7">
          <p
            className="mb-3.5 font-mono text-[0.62rem] uppercase tracking-[0.15em]"
            style={{ color: "#8a8078" }}
          >
            On the 3-Hour Version
          </p>
          <p className="mb-4 text-[0.97rem] leading-[1.75] text-[var(--ink-muted)]">
            There is a version of this video that runs for three hours and forty minutes.
            It exists because people asked for it — because 23 minutes was not always
            enough. This is worth sitting with for a moment: there is an audience,
            apparently large enough to justify the production, for which watching a rake
            move through sand for nearly four hours is a reasonable use of an afternoon.
          </p>
          <p className="text-[0.97rem] leading-[1.75] text-[var(--ink-muted)]">
            This says something about the video. It also says something about the afternoons.
          </p>
        </div>

        {/* ── COMPACT 3h40 EMBED ── */}
        <div className="mt-6 overflow-hidden rounded-lg border border-[var(--line)]">
          <div className="relative w-full bg-black" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/PBjGf5-hAPM"
              title="Yuki Kawae — Zen Garden Patterns (3h 40min extended version)"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p
            className="bg-[#eee9e0] px-4 py-2.5 font-mono text-[0.58rem] uppercase tracking-[0.12em]"
            style={{ color: "#8a8078" }}
          >
            Extended version &nbsp;·&nbsp; 3 hours 40 min
          </p>
        </div>

        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          Kawae has spoken about what the practice taught him: that most of what feels
          permanent is not, and that most of what feels urgent shares that quality with
          the pattern in the sand — compelling while it exists, irrelevant once it&apos;s
          smoothed away. This is not a new observation. Buddhist thought has been making
          it for two and a half thousand years. What Kawae adds is a proof of concept
          at coffee-table scale: a sand garden that fits in an apartment, a rake you
          can hold in one hand, and a practice that requires nothing except the willingness
          to draw something you will immediately erase. It sits in the same tradition as{" "}
          <ArticleProseLink href="/videos/taming-the-garden" className="article-euclid-link">
            art made with the assumption of its own disappearance
          </ArticleProseLink>
          .
        </p>

        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          The patterns themselves are not incidental. Kawae approaches them as a designer:
          there is planning before the rake touches the sand, there are revisions when
          a line goes wrong, there is a visual logic to how one shape generates the next.
          The work is precise without being rigid. The sand accepts the rake and gives back
          something the rake alone could not have predicted — a texture, a shadow, a
          small irregularity around a stone that becomes the most interesting part of
          the composition. Kawae says he often ends up with a completely different pattern
          than the one he intended. He seems to consider this a feature. Which is another
          way of saying that{" "}
          <ArticleProseLink href="/articles/dinara-kasko-kinetic-tarts" className="article-euclid-link">
            the process overrides the plan
          </ArticleProseLink>
          {" "}— and that sometimes this is the only honest way to work.
        </p>

        {/* ── EXTERNAL LINKS ── */}
        <div className="mt-10 flex flex-wrap gap-6 border-t border-[#e8dfd0] pt-8">
          <a
            href="https://www.yukikawae.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border-b border-[#e8dfd0] pb-0.5 font-mono text-[0.68rem] uppercase tracking-[0.1em] transition-colors hover:border-current"
            style={{ color: RUST }}
          >
            yukikawae.com →
          </a>
          <a
            href="https://www.yukikawae.com/boxconstruction"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border-b border-[#e8dfd0] pb-0.5 font-mono text-[0.68rem] uppercase tracking-[0.1em] transition-colors hover:border-current"
            style={{ color: RUST }}
          >
            Build your own →
          </a>
          <a
            href="https://www.instagram.com/yukikawae/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border-b border-[#e8dfd0] pb-0.5 font-mono text-[0.68rem] uppercase tracking-[0.1em] transition-colors hover:border-current"
            style={{ color: RUST }}
          >
            Instagram →
          </a>
        </div>
      </article>
    </div>
  );
}
