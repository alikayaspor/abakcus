import { ArticleImageLightbox } from "@/components/articles/article-image-lightbox";
import { ArticleProseLink } from "@/components/articles/article-prose-link";

const R2_VIDEO = "https://pub-676f738e0a3948d19dc9defd954e36d5.r2.dev";
const HERO_IMG = `${R2_VIDEO}/Visualizing%20The%20Invisible%20Motions%20Of%20Kung%20Fu%202.webp`;

const GREEN = "#4a6741";
const GREEN_DIM = "#3a5433";

const STILLS = [
  {
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/dd3e1848361039.5895ea294c650.jpg",
    alt: "Kung Fu Motion Visualization — particle flow variation",
  },
  {
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/5abd7948361039.5895ea294a1c5.jpg",
    alt: "Kung Fu Motion Visualization — geometric mesh variation",
  },
  {
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/88a55248361039.5895ea294b53f.jpg",
    alt: "Kung Fu Motion Visualization — fractal surface variation",
  },
  {
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/9856e948361039.5895ea294bd7c.jpg",
    alt: "Kung Fu Motion Visualization — smoke trail variation",
  },
];

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

export function KungFuMotionArticle() {
  return (
    <div className="text-[var(--ink)]">
      {/* ── HERO ── */}
      <header className="relative overflow-hidden bg-[#0a150d] pb-0">
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, #050d07 0%, #0a150d 100%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[var(--page-max)] px-[var(--page-pad)]">
          <div className="flex flex-col items-center gap-8 py-16 text-center md:py-20">
            <p
              className="font-mono text-[0.62rem] uppercase tracking-[0.26em]"
              style={{ color: GREEN }}
            >
              Data Visualization &nbsp;·&nbsp; Tobias Gremmler &nbsp;·&nbsp; 2016
            </p>
            <h1 className="font-serif text-[clamp(2.4rem,7vw,4.8rem)] font-medium italic leading-[1.0] tracking-tight text-[#f0f5ef]">
              Kung Fu Motion Visualization
            </h1>
            <p
              className="max-w-md font-serif text-lg italic leading-relaxed"
              style={{ color: "rgba(180,210,175,0.6)" }}
            >
              Five visual languages for the same strike — MOCAP data turned into moving sculpture.
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
                src="https://player.vimeo.com/video/163153865?title=0&byline=0&portrait=0"
                title="Kung Fu Motion Visualization — Tobias Gremmler"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <p
            className="mt-3 pb-10 text-center font-mono text-[0.6rem] uppercase tracking-[0.14em]"
            style={{ color: "rgba(180,210,175,0.7)" }}
          >
            Tobias Gremmler — Kung Fu Motion Visualization · Vimeo, 2016
          </p>
        </div>
      </header>

      {/* ── BODY ── */}
      <article className="mx-auto max-w-[720px] px-[var(--page-pad)] pt-16 pb-24">
        {/* Tag pills */}
        <div className="mb-8 flex flex-wrap items-center gap-2">
          <span
            className="rounded-full px-2.5 py-0.5 font-mono text-[0.58rem] uppercase tracking-[0.14em]"
            style={{
              background: "color-mix(in srgb, var(--pastel-lime) 55%, white)",
              color: GREEN_DIM,
            }}
          >
            Data Visualization
          </span>
          <span
            className="rounded-full px-2.5 py-0.5 font-mono text-[0.58rem] uppercase tracking-[0.14em]"
            style={{
              background: "color-mix(in srgb, var(--pastel-lime) 55%, white)",
              color: GREEN_DIM,
            }}
          >
            Motion Capture
          </span>
          <span className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
            Tobias Gremmler · IGA Hong Kong
          </span>
        </div>

        {/* Drop-cap */}
        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          <span
            className="float-left mr-2 mt-1 font-serif text-[4.5rem] font-bold leading-[0.78] sm:text-[5.2rem]"
            style={{ color: GREEN_DIM }}
            aria-hidden="true"
          >
            S
          </span>
          eeing movement is easy. Understanding it is something else entirely. When a Kung Fu
          master extends an arm, the eye registers a single instant — fast, precise, deliberate.
          But inside that instant, space, velocity, time, direction, and the geometry of the body
          are operating simultaneously, none of it separable by the naked eye.
        </p>

        <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          <strong>Tobias Gremmler</strong> asked a different question:{" "}
          <em>What do I see if I rebuild that movement from its data outward?</em> The answer
          turned out to be not a video, but something closer to a series of moving sculptures —
          each one a different grammar for the same physical event. The result was commissioned by
          the International Guoshu Association (IGA) in Hong Kong for an exhibition on the legacy
          of Hakka martial arts.
        </p>

        {/* Sidebar + body */}
        <div className="clear-both mb-8 border border-[var(--line)] px-5 py-4 sm:float-right sm:mb-4 sm:ml-8 sm:w-[220px] sm:px-4 sm:py-4">
          <span
            className="mb-2 block font-mono text-[0.6rem] uppercase tracking-[0.14em]"
            style={{ color: GREEN_DIM }}
          >
            —
          </span>
          <p className="font-serif text-[0.82rem] italic leading-[1.6] text-[var(--ink-muted)]">
            Gremmler captured the performances using MOCAP technology, measuring every movement
            in terms of space, time, and velocity. That raw data was then translated into five
            distinct visual languages.
          </p>
        </div>

        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          In some variations, the trace of a limb becomes a flowing trail of dust particles, each
          grain carrying the memory of a specific point in the motion. In others, the body is
          replaced entirely by a shifting geometric scaffold — a skeleton that has stepped outside
          itself, filling the surrounding space with its own logic. Elsewhere, fractal surfaces
          wrap around each strike like fabric woven by momentum, expanding outward as the force
          dissipates.
        </p>

        {/* Pull quote */}
        <blockquote
          className="clear-both my-10 border-l-[3px] py-1 pl-6"
          style={{ borderColor: GREEN_DIM }}
        >
          <p className="font-serif text-[1.2rem] italic leading-[1.65] text-[var(--ink)] sm:text-[1.3rem]">
            &ldquo;Visualizing the invisible is always fascinating, and motion visualizations
            have been created even in pre-digital times — with light, photography, costumes,
            or paintings.&rdquo;
          </p>
          <cite className="mt-3 block font-mono text-[0.65rem] uppercase tracking-[0.12em] not-italic text-[var(--ink-muted)]">
            Tobias Gremmler
          </cite>
        </blockquote>

        <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          This is not new territory for Gremmler. His 2003 book{" "}
          <em>Grids for the Dynamic Images</em> laid out the historical foundations of motion
          visualization long before this project existed. What the Kung Fu work does is push
          that thinking into its most refined form yet — five variations that each isolate a
          different dimension of what movement actually is.
        </p>

        <Divider />

        {/* Stills grid */}
        <div className="my-10">
          <p
            className="mb-5 font-mono text-[0.58rem] uppercase tracking-[0.18em]"
            style={{ color: GREEN_DIM }}
          >
            Five visual languages — stills
          </p>
          <div className="grid grid-cols-2 gap-3">
            {STILLS.map((s) => (
              <figure key={s.src} className="overflow-hidden rounded-lg border border-[var(--line)]">
                <ArticleImageLightbox src={s.src} alt={s.alt}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.src}
                    alt={s.alt}
                    className="block w-full transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                </ArticleImageLightbox>
              </figure>
            ))}
          </div>
        </div>

        {/* Data as sculpture inset */}
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
            Data as Sculpture
          </p>
          <p className="font-serif text-[0.97rem] leading-[1.8] text-[var(--ink-muted)] sm:text-[1.02rem]">
            MOCAP data usually disappears into a finished product — it serves animation in games
            or film, then vanishes behind the surface it was used to build. Gremmler does the
            opposite: he makes the data the subject. The underlying mathematical reality of
            movement becomes the thing you are looking at, not the thing hidden beneath what you
            are looking at.
          </p>
        </div>

        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          Bruce Lee wrote: <em>&ldquo;You put water in a cup, it becomes the cup. You put water
          into a bottle, it becomes the bottle. Water can flow, or it can crash.&rdquo;</em> That
          duality runs through every frame of this project. Some moments in the masters&rsquo;
          sequences surge and drift; others detonate outward. Gremmler&rsquo;s five variations
          each catch a different quality — the same movement, read through five different questions.
        </p>

        <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          The result sits at the edge of sports biomechanics and abstract data art, without quite
          belonging to either. There is no argument being made, no explanation being offered. Just
          movement — and the structure that was always inside it. For more of this kind of
          science-made-visible,{" "}
          <ArticleProseLink href="/videos/cymatics-nigel-stanford" className="article-euclid-link">
            Nigel Stanford&apos;s Cymatics
          </ArticleProseLink>{" "}
          does much the same for sound.
        </p>

        {/* Verdict */}
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
              Five visual languages for the same physical event. Movement stopped, measured,
              and rebuilt from the data out. It turns out the structure was there all along.
            </p>
          </div>
        </div>

        <p className="mt-12 text-xs leading-relaxed text-[var(--ink-muted)]">
          Tobias Gremmler — Kung Fu Motion Visualization · IGA Hong Kong, 2016
          &nbsp;·&nbsp; abakcus.com
        </p>
      </article>
    </div>
  );
}
