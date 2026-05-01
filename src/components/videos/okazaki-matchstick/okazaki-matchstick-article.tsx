import { ArticleProseLink } from "@/components/articles/article-prose-link";

const RUST = "#c13b1b";
const RUST_DIM = "#8b3a1c";

function Divider() {
  return (
    <div className="my-12 flex items-center gap-5">
      <span className="h-px flex-1 bg-[var(--line)]" />
      {/* Decorative matchstick */}
      <svg
        width="48"
        height="12"
        viewBox="0 0 48 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect x="8" y="4.5" width="32" height="3" rx="1.5" fill="#b8895a" />
        <circle cx="6" cy="6" r="5" fill={RUST} />
      </svg>
      <span className="h-px flex-1 bg-[var(--line)]" />
    </div>
  );
}

export function OkazakiMatchstickArticle() {
  return (
    <div className="text-[var(--ink)]">
      {/* ── HERO ── */}
      <header className="relative overflow-hidden bg-[#1c1a14] pb-0">
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, #100e09 0%, #1c1a14 100%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[var(--page-max)] px-[var(--page-pad)]">
          <div className="flex flex-col items-center gap-8 py-16 text-center md:py-20">
            <p
              className="font-mono text-[0.62rem] uppercase tracking-[0.26em]"
              style={{ color: "#c8934a" }}
            >
              Video &nbsp;·&nbsp; Tomohiro Okazaki &nbsp;·&nbsp; Swimming Design · Tokyo
            </p>
            <h1 className="font-serif text-[clamp(2.4rem,7vw,4.8rem)] font-medium italic leading-[1.0] tracking-tight text-[#f7f3ec]">
              The Matchstick That<br />Refused to Be Still
            </h1>
            <p
              className="max-w-md font-serif text-lg italic leading-relaxed"
              style={{ color: "rgba(200,184,154,0.6)" }}
            >
              One object, one surface, no special effects — and an entire taxonomy of transformation.
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
                src="https://www.youtube.com/embed/2chQKSGowjg"
                title="Tomohiro Okazaki — Matchstick Stop-Motion"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <p
            className="mt-3 pb-10 text-center font-mono text-[0.6rem] uppercase tracking-[0.14em]"
            style={{ color: "rgba(200,184,154,0.7)" }}
          >
            Tomohiro Okazaki — stop-motion matchstick series
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
              color: RUST_DIM,
            }}
          >
            Video
          </span>
          <span
            className="rounded-full px-2.5 py-0.5 font-mono text-[0.58rem] uppercase tracking-[0.14em]"
            style={{
              background: "color-mix(in srgb, var(--pastel-peach) 55%, white)",
              color: RUST_DIM,
            }}
          >
            Stop-Motion
          </span>
          <span className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
            Tomohiro Okazaki · Swimming Design
          </span>
        </div>

        {/* Drop-cap */}
        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          <span
            className="float-left mr-2 mt-1 font-serif text-[4.5rem] font-bold italic leading-[0.78] sm:text-[5.2rem]"
            style={{ color: RUST }}
            aria-hidden="true"
          >
            A
          </span>
          matchstick is one of the most resolved objects in the world. It has one job.
          Its shape is the job: a rigid stick, a combustible tip, a fixed ratio between
          the two. There is no ambiguity in a matchstick. You hold one end, you strike the
          other, and the whole biography of the object is over in seconds. Tokyo-based
          graphic designer Tomohiro Okazaki looked at this and thought: what if it could bend?
        </p>

        <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          The videos are short — most run under thirty seconds — and almost entirely silent
          except for the sound of small things moving against wood. Okazaki films his
          arrangements on a bare wooden surface, which is not an accident: the warm grain of
          the board throws the red phosphorus tip into relief, making each match read as a
          character rather than an object. The background does not compete. It only witnesses.
        </p>

        {/* Sidebar + body */}
        <div className="clear-both mb-8 border border-[var(--line)] px-5 py-4 sm:float-right sm:mb-4 sm:ml-8 sm:w-[220px] sm:px-4 sm:py-4">
          <span
            className="mb-2 block font-mono text-[0.6rem] uppercase tracking-[0.14em]"
            style={{ color: RUST_DIM }}
          >
            —
          </span>
          <p className="font-serif text-[0.82rem] italic leading-[1.6] text-[var(--ink-muted)]">
            Okazaki started the series during the pandemic as a kind of disciplined play —
            a constraint-based practice that asks what a single, familiar object can be made
            to do when you have nothing but time and patience.
          </p>
        </div>

        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          What Okazaki actually does, technically, is cut and reposition. Frame by frame,
          he shaves slivers from the stick, attaches fragments, coaxes the illusion of
          fluidity from material that has none. The match that appears to loop into a knot
          is dozens of individual matches, each slightly different, each photographed once.
          The animation is assembled in the edit from stills. The smoothness you feel
          watching it — that sense of something genuinely bending — is entirely constructed.
          This is the craft hidden inside the charm.
        </p>

        <Divider />

        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          The instinct Okazaki is working with is older than stop-motion. It is the same
          instinct that makes people stack rocks by rivers, arrange twigs into temporary
          sculptures on a forest floor, or spend an afternoon rearranging objects on a desk
          until the composition feels right. The difference is that Okazaki documents the
          transformation — not the final state, but the movement between states. The subject
          of the video is never the match. It is the change.
        </p>

        {/* Pull quote */}
        <blockquote
          className="my-10 border-l-[3px] py-1 pl-6"
          style={{ borderColor: RUST }}
        >
          <p className="font-serif text-[1.2rem] italic leading-[1.65] text-[var(--ink)] sm:text-[1.3rem]">
            &ldquo;He likes to present the world in new ways&rdquo; — which is another
            way of saying he likes to make the familiar strange enough to see again.
          </p>
          <cite className="mt-3 block font-mono text-[0.65rem] uppercase tracking-[0.12em] not-italic text-[var(--ink-muted)]">
            Swimming Design bio, paraphrased
          </cite>
        </blockquote>

        {/* Constraint inset */}
        <div
          className="my-10 border-l-4 border border-[var(--line)] px-7 py-6 sm:px-8 sm:py-7"
          style={{
            borderLeftColor: RUST_DIM,
            background: "color-mix(in srgb, var(--pastel-peach) 22%, white)",
          }}
        >
          <p
            className="mb-5 font-mono text-[0.58rem] uppercase tracking-[0.18em]"
            style={{ color: RUST_DIM }}
          >
            On the Constraint
          </p>
          <p className="mb-4 font-serif text-[0.97rem] leading-[1.8] text-[var(--ink-muted)] sm:text-[1.02rem]">
            Constraints in art are not limitations. They are decisions made in advance that
            prevent a certain kind of paralysis. Okazaki&apos;s constraint — one object, one
            surface, no special effects — is what gives the work its coherence. You are never
            wondering what you&apos;re watching. You are only wondering what the match will do next.
          </p>
          <p className="font-serif text-[0.97rem] leading-[1.8] text-[var(--ink-muted)] sm:text-[1.02rem]">
            This is the paradox of constrained work: the narrower the frame, the larger the
            apparent freedom inside it. A stop-motion artist with every tool available must
            make a thousand decisions. Okazaki has already made the most important ones.
            He can spend the rest of his attention on{" "}
            <ArticleProseLink href="/articles/dinara-kasko-kinetic-tarts" className="article-euclid-link">
              the movement itself
            </ArticleProseLink>
            .
          </p>
        </div>

        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          There is something quietly philosophical about choosing matchsticks specifically.
          Other small objects exist — coins, buttons, paper clips, staples. But a match
          has directionality built in. It has a head and a body, a beginning and a potential
          end. It is the simplest possible narrative object: something that can ignite.
          When Okazaki makes a match curl into a circle, or separates the red tip and lets
          it drift away from the stick, he is playing with that latent story. What happens
          to the fire when the match is no longer a match?
        </p>

        <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          The videos accumulate into something. Each one is complete in itself — a single
          idea, executed cleanly, resolved in under a minute. But watched as a series,
          they start to feel like a taxonomy of transformation: what can a rigid thing
          become if you are patient enough, and precise enough, and willing to cut it
          into small enough pieces? The same question,{" "}
          <ArticleProseLink href="/videos/cymatics-nigel-stanford" className="article-euclid-link">
            asked of sound by Nigel Stanford
          </ArticleProseLink>
          , produces a completely different kind of answer — but the same quality of
          attention.
        </p>

        {/* Links */}
        <div className="mb-12 flex flex-wrap gap-6">
          <a
            href="https://www.instagram.com/oo_kk_aa/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.65rem] uppercase tracking-[0.12em]"
            style={{ color: RUST, borderBottom: `1px solid var(--line)`, paddingBottom: "2px" }}
          >
            Instagram →
          </a>
          <a
            href="http://www.swimmingdesign.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.65rem] uppercase tracking-[0.12em]"
            style={{ color: RUST, borderBottom: `1px solid var(--line)`, paddingBottom: "2px" }}
          >
            Swimming Design →
          </a>
        </div>

        {/* Verdict */}
        <div
          className="mt-12 flex gap-5 rounded-xl border border-[var(--line)] px-6 py-6 sm:px-8 sm:py-7"
          style={{ background: "color-mix(in srgb, var(--pastel-peach) 18%, white)" }}
        >
          <span
            className="shrink-0 pt-0.5 text-2xl leading-none tracking-widest"
            style={{ color: RUST_DIM }}
          >
            ★★★★★
          </span>
          <div>
            <p className="font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              In short
            </p>
            <p className="mt-2 font-serif text-base italic leading-relaxed text-[var(--ink-muted)] sm:text-[1.05rem]">
              One object, one surface, no special effects. What a single matchstick can become
              when you are patient enough, precise enough, and willing to cut it into small
              enough pieces.
            </p>
          </div>
        </div>

        <p className="mt-12 text-xs leading-relaxed text-[var(--ink-muted)]">
          Tomohiro Okazaki — Swimming Design · Tokyo
          &nbsp;·&nbsp; abakcus.com
        </p>
      </article>
    </div>
  );
}
