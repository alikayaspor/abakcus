import { ArticleImageLightbox } from "@/components/articles/article-image-lightbox";
import { ArticleProseLink } from "@/components/articles/article-prose-link";

const R2 = "https://pub-5aa87426ad334d0495bf29d914b5ce1b.r2.dev";
const HERO_IMAGE = `${R2}/taming%20the%20garden.jpeg`;

const BROWN = "#6b4c30";
const BROWN_DIM = "#5a3e26";

function Divider() {
  return (
    <div className="my-12 flex items-center gap-4">
      <span className="h-px flex-1 bg-[var(--line)]" />
      <span
        className="font-mono text-[0.6rem] uppercase tracking-[0.2em]"
        style={{ color: BROWN_DIM }}
      >
        §
      </span>
      <span className="h-px flex-1 bg-[var(--line)]" />
    </div>
  );
}

export function TamingTheGardenArticle() {
  return (
    <div className="text-[var(--ink)]">
      {/* ── HERO ── */}
      <header className="relative overflow-hidden bg-[#130d06] pb-0">
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, #0a0803 0%, #130d06 100%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[var(--page-max)] px-[var(--page-pad)]">
          <div className="flex flex-col items-center gap-8 py-16 text-center md:py-20">
            <p
              className="font-mono text-[0.62rem] uppercase tracking-[0.26em]"
              style={{ color: BROWN }}
            >
              Documentary &nbsp;·&nbsp; Salomé Jashi &nbsp;·&nbsp; Georgia · 2021
            </p>
            <h1 className="font-serif text-[clamp(2.4rem,7vw,4.8rem)] font-medium italic leading-[1.0] tracking-tight text-[#f5ede0]">
              Taming the Garden
            </h1>
            <p
              className="max-w-md font-serif text-lg italic leading-relaxed"
              style={{ color: "rgba(220,195,165,0.6)" }}
            >
              A tree on a barge, crossing the Black Sea. No explanation. Just the image.
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
                src="https://player.vimeo.com/video/501712377?title=0&byline=0&portrait=0"
                title="Taming the Garden — Salomé Jashi, 2021"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <p
            className="mt-3 pb-10 text-center font-mono text-[0.6rem] uppercase tracking-[0.14em]"
            style={{ color: "rgba(220,195,165,0.7)" }}
          >
            Taming the Garden — dir. Salomé Jashi, 2021 · 91 minutes
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
              background: "color-mix(in srgb, var(--pastel-peach) 55%, white)",
              color: BROWN_DIM,
            }}
          >
            Documentary
          </span>
          <span
            className="rounded-full px-2.5 py-0.5 font-mono text-[0.58rem] uppercase tracking-[0.14em]"
            style={{
              background: "color-mix(in srgb, var(--pastel-peach) 55%, white)",
              color: BROWN_DIM,
            }}
          >
            Salomé Jashi
          </span>
          <span className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
            Georgia · IDFA 2021 · 91 min
          </span>
        </div>

        {/* Drop-cap */}
        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          <span
            className="float-left mr-2 mt-1 font-serif text-[4.5rem] font-bold leading-[0.78] sm:text-[5.2rem]"
            style={{ color: BROWN_DIM }}
            aria-hidden="true"
          >
            S
          </span>
          alomé Jashi first saw the photograph by accident: a full-grown tree, ancient and
          enormous, standing upright on a flat barge moving slowly along the Black Sea coast. No
          person in frame. No visible reason. Just a tree on water, where trees do not belong,
          going somewhere it did not choose to go.
        </p>

        <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          She said it felt like something that should never have existed. She went to find out
          where it came from, and discovered that there were hundreds of them — trees up to
          fifteen floors tall, centuries old, pulled from village land all along Georgia&apos;s
          coastline and transported at extraordinary expense to the private estate of{" "}
          <strong>Bidzina Ivanishvili</strong>, the country&apos;s richest man and its former
          prime minister. She made a documentary about what she found.
        </p>

        {/* Hero image */}
        <figure className="my-10 overflow-hidden rounded-lg border border-[var(--line)]">
          <ArticleImageLightbox
            src={HERO_IMAGE}
            alt="Still from Taming the Garden — tree on a barge crossing the Black Sea"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_IMAGE}
              alt="Still from Taming the Garden — tree on a barge crossing the Black Sea"
              className="block w-full transition-transform duration-500 group-hover:scale-[1.01]"
              loading="eager"
              decoding="async"
              draggable={false}
            />
          </ArticleImageLightbox>
          <figcaption className="px-5 py-3 text-center font-serif text-sm italic text-[var(--ink-muted)]">
            A centuries-old tree on a barge, crossing the Black Sea coast — the image that started everything.
          </figcaption>
        </figure>

        {/* Sidebar + prose */}
        <div className="clear-both mb-8 border border-[var(--line)] px-5 py-4 sm:float-right sm:mb-4 sm:ml-8 sm:w-[220px] sm:px-4 sm:py-4">
          <span
            className="mb-2 block font-mono text-[0.6rem] uppercase tracking-[0.14em]"
            style={{ color: BROWN_DIM }}
          >
            —
          </span>
          <p className="font-serif text-[0.82rem] italic leading-[1.6] text-[var(--ink-muted)]">
            The film runs 91 minutes. Jashi shoots in long, static takes — the camera
            doesn&apos;t follow the action, it waits for the action to pass through its frame.
          </p>
        </div>

        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          Moving a tree that has grown for a century is not a simple transaction. To extract one
          of these trees from the ground, other trees must first be felled to clear the
          machinery&apos;s path. Electric cables have to be relocated. New roads are cut through
          mandarin orchards. The tree travels in an enormous ball of its own earth, sealed in a
          steel cage, loaded onto a purpose-built truck. The whole exercise is repeated, for each
          tree, dozens of times.
        </p>

        {/* Pull quote */}
        <blockquote
          className="clear-both my-10 border-l-[3px] py-1 pl-6"
          style={{ borderColor: BROWN_DIM }}
        >
          <p className="font-serif text-[1.2rem] italic leading-[1.65] text-[var(--ink)] sm:text-[1.3rem]">
            &ldquo;Peter Bradshaw called it a Fitzcarraldo operation —{" "}
            <em>une folie de grandeur</em> of staggering proportions. Herzog&apos;s madman
            wanted to drag a steamship over a mountain. Ivanishvili moves the mountain&apos;s
            trees to his garden.&rdquo;
          </p>
        </blockquote>

        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          The film does not present a simple story of theft. The trees are purchased — the
          landowners and communities are paid. In some cases, the money is substantial. Roads
          get built as part of the deal. There are scenes of genuine negotiation, of people
          weighing the sum offered against something harder to name. The Faustian quality of the
          exchange comes not from coercion but from the moment of settlement: when the trucks
          finally arrive and the thing a family has watched grow for generations begins to be
          pulled from the ground, the money in hand turns abstract and the loss becomes concrete.
        </p>

        <Divider />

        {/* The man who never appears inset */}
        <div
          className="my-10 border-l-4 border border-[var(--line)] px-7 py-6 sm:px-8 sm:py-7"
          style={{
            borderLeftColor: BROWN_DIM,
            background: "color-mix(in srgb, var(--pastel-peach) 22%, white)",
          }}
        >
          <p
            className="mb-5 font-mono text-[0.58rem] uppercase tracking-[0.18em]"
            style={{ color: BROWN_DIM }}
          >
            The Man Who Never Appears
          </p>
          <p className="mb-4 font-serif text-[0.97rem] leading-[1.8] text-[var(--ink-muted)] sm:text-[1.02rem]">
            Ivanishvili does not appear on screen. There is no interview, no confrontation, no
            moment where the film turns to face him directly. His garden appears near the end —
            manicured, enormous, serene — and the trees are there, apparently surviving their
            transplantation. The camera holds on it for a long time. Then the film ends.
          </p>
          <p className="font-serif text-[0.97rem] leading-[1.8] text-[var(--ink-muted)] sm:text-[1.02rem]">
            This restraint is the film&apos;s most deliberate formal choice and its most
            politically loaded one. Jashi refuses to personalise the story into a portrait of one
            man&apos;s excess — she insists instead on showing the mechanism as the subject. The
            man at the centre remains absent, which makes him feel, paradoxically,{" "}
            <em className="text-[var(--ink)]">more present.</em>
          </p>
        </div>

        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          Whole villages move through what Jashi captures as a kind of collective confusion —
          angry, desolate, and also oddly electrified by the spectacle of the extraction. Some
          people cry. Others photograph it on their phones. The tree disappears down the road and
          the village stands in a gap where something used to be.
        </p>

        <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          Ancient trees along a coastline are common land in the most literal sense — they
          predate every owner, every border, every transaction. Uprooting them and moving them
          behind a private wall is not eccentric. It is a definition of what power does when it
          has run out of ordinary things to acquire. If Jashi&apos;s patient camera and its
          subject — nature bent to private will — interests you, the{" "}
          <ArticleProseLink href="/articles/rambo-fox" className="article-euclid-link">
            story of Rambo the fox
          </ArticleProseLink>{" "}
          is another study in what wild things do when humans decide to rearrange them.
        </p>

        {/* Verdict */}
        <div
          className="mt-12 flex gap-5 rounded-xl border border-[var(--line)] px-6 py-6 sm:px-8 sm:py-7"
          style={{ background: "color-mix(in srgb, var(--pastel-peach) 18%, white)" }}
        >
          <span
            className="shrink-0 pt-0.5 text-2xl leading-none tracking-widest"
            style={{ color: BROWN_DIM }}
          >
            ★★★★★
          </span>
          <div>
            <p className="font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              In short
            </p>
            <p className="mt-2 font-serif text-base italic leading-relaxed text-[var(--ink-muted)] sm:text-[1.05rem]">
              A documentary that trusts the image completely. A tree on a barge, alone on water,
              going nowhere it chose to go. Ninety-one minutes of Jashi knowing she was right.
            </p>
          </div>
        </div>

        <p className="mt-12 text-xs leading-relaxed text-[var(--ink-muted)]">
          Taming the Garden (2021), dir. Salomé Jashi · Guardian review: Peter Bradshaw, January 25, 2022.
          &nbsp;·&nbsp; abakcus.com
        </p>
      </article>
    </div>
  );
}
