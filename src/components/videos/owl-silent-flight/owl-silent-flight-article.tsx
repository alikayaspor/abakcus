import { ArticleProseLink } from "@/components/articles/article-prose-link";

const NAVY = "#2a3347";
const NAVY_DIM = "#1e2636";
const DARK = "#080d18";

const ADAPTATIONS = [
  {
    numeral: "I",
    title: "Leading-edge serrations",
    desc: "Comb-like projections along the front of the primary feathers break incoming airflow into smaller, quieter micro-turbulences before large acoustic vortices can form.",
  },
  {
    numeral: "II",
    title: "Trailing-edge fringes",
    desc: "The ragged, soft fringe at the back of each feather disperses wingtip vortices — the primary source of trailing-edge noise in all flying bodies, including aircraft.",
  },
  {
    numeral: "III",
    title: "Velvet down surface",
    desc: "A plush, velvety coating across the upper wing absorbs residual sound that neither serration nor fringe has already eliminated. A final layer of acoustic damping built into the feather itself.",
  },
];

function Divider() {
  return (
    <div className="my-12 flex items-center gap-4">
      <span className="h-px flex-1 bg-[var(--line)]" />
      <span
        className="font-mono text-[0.6rem] uppercase tracking-[0.2em]"
        style={{ color: NAVY_DIM }}
      >
        §
      </span>
      <span className="h-px flex-1 bg-[var(--line)]" />
    </div>
  );
}

export function OwlSilentFlightArticle() {
  return (
    <div className="text-[var(--ink)]">
      {/* ── HERO ── */}
      <header className="relative overflow-hidden pb-0" style={{ background: DARK }}>
        <div
          className="absolute inset-0 opacity-85"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 50% 40%, ${DARK} 0%, #040812 100%)`,
          }}
        />
        <div className="relative z-10 mx-auto max-w-[var(--page-max)] px-[var(--page-pad)]">
          <div className="flex flex-col items-center gap-8 py-16 text-center md:py-20">
            <p
              className="font-mono text-[0.62rem] uppercase tracking-[0.26em]"
              style={{ color: NAVY }}
            >
              Video &nbsp;·&nbsp; BBC Natural World &nbsp;·&nbsp; Super Powered Owls
            </p>
            <h1 className="font-serif text-[clamp(2.4rem,7vw,4.8rem)] font-medium italic leading-[1.05] tracking-tight text-[#eef0f5]">
              The Owl<br />That Isn&apos;t There
            </h1>
            <p
              className="max-w-md font-serif text-lg italic leading-relaxed"
              style={{ color: "rgba(160,175,210,0.6)" }}
            >
              A bird crosses a field at night, and the air keeps its secret.
            </p>
          </div>
        </div>

        {/* ── VIDEO ── */}
        <div className="relative z-10 mx-auto max-w-[var(--page-max)] px-[var(--page-pad)] pb-0">
          <div
            className="overflow-hidden rounded-t-lg"
            style={{ boxShadow: "0 24px 60px -12px rgba(0,0,0,0.75)" }}
          >
            <div className="relative w-full bg-black" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/-WigEGNnuTE"
                title="The silent flight of an owl — BBC Natural World: Super Powered Owls"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <p
            className="mt-3 pb-10 text-center font-mono text-[0.6rem] uppercase tracking-[0.14em]"
            style={{ color: "rgba(160,175,210,0.7)" }}
          >
            The silent flight of an owl — BBC Natural World: Super Powered Owls
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
              background: "color-mix(in srgb, var(--pastel-sky) 55%, white)",
              color: NAVY_DIM,
            }}
          >
            Video
          </span>
          <span
            className="rounded-full px-2.5 py-0.5 font-mono text-[0.58rem] uppercase tracking-[0.14em]"
            style={{
              background: "color-mix(in srgb, var(--pastel-sky) 55%, white)",
              color: NAVY_DIM,
            }}
          >
            Nature · Physics
          </span>
          <span className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
            BBC Natural World
          </span>
        </div>

        {/* ── DROP-CAP ── */}
        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          <span
            className="float-left mr-2 mt-1 font-serif text-[4.5rem] font-bold leading-[0.78] sm:text-[5.2rem]"
            style={{ color: NAVY }}
            aria-hidden="true"
          >
            A
          </span>
          mouse hears everything. That is not an exaggeration — it is the ecological
          reality of being small, warm, and edible. Its ears swivel independently,
          triangulating sound with the precision of a directional antenna. It can hear
          a footfall at twenty meters. It has survived this long by hearing what is
          coming before it arrives. And then the owl arrives, and it doesn&apos;t hear
          anything at all. The last sound a field mouse ever hears is its own heartbeat.
        </p>

        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          This clip from BBC&apos;s <em>Natural World: Super Powered Owls</em> shows what that
          looks like in slow motion, through thermal imaging and high-speed camera work
          that reveals something the naked eye never could: a bird moving through air
          as though the air has agreed to stay quiet. Other birds of comparable size
          leave an audible signature — a push, a beat, a rush of displaced atmosphere.
          The owl leaves nothing. It passes through the frame and the{" "}
          <ArticleProseLink href="/videos/cymatics-nigel-stanford" className="article-euclid-link">
            sound equipment records only the ambient hiss of the field
          </ArticleProseLink>
          .
        </p>

        {/* ── PULL QUOTE ── */}
        <blockquote
          className="my-10 border-l-[3px] py-1 pl-6"
          style={{ borderColor: NAVY_DIM }}
        >
          <p className="font-serif text-[1.2rem] italic leading-[1.65] text-[var(--ink)] sm:text-[1.3rem]">
            &ldquo;The owl is not flying quietly. It is flying in a way that produces no sound to produce.&rdquo;
          </p>
          <cite className="mt-3 block font-mono text-[0.65rem] uppercase tracking-[0.12em] not-italic text-[var(--ink-muted)]">
            The distinction matters more than it sounds
          </cite>
        </blockquote>

        {/* ── SIDEBAR NOTE ── */}
        <div className="clear-both mb-8 border border-[var(--line)] px-5 py-4 sm:float-right sm:mb-4 sm:ml-8 sm:w-[220px] sm:px-4 sm:py-4">
          <span
            className="mb-2 block font-mono text-[0.6rem] uppercase tracking-[0.14em]"
            style={{ color: NAVY_DIM }}
          >
            —
          </span>
          <p className="font-serif text-[0.82rem] italic leading-[1.6] text-[var(--ink-muted)]">
            The physics of owl silence has been studied seriously since 1934, when British
            pilot and ornithologist Robert Rule Graham identified three wing structures
            that might explain it. More than ninety years later, researchers still cite
            his framework — and still disagree about which mechanism matters most.
          </p>
        </div>

        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          The mechanism is threefold and has been understood in outline since the 1930s,
          though its full physics is still being worked out. The leading edge of the
          owl&apos;s primary feathers carries comb-like serrations — tiny stiff projections
          that break incoming airflow into smaller turbulent streams before it can
          accumulate into the low-frequency noise that other wings generate. The
          trailing edge tapers into a ragged fringe that disperses vortices before
          they can shed as sound. And the entire upper surface of the wing is covered
          in a velvet-like down that absorbs whatever residual noise neither of the
          first two mechanisms caught. The owl has three independent noise-cancellation
          systems running simultaneously, all of them passive, all of them structural,
          none of them requiring any decision from the owl.
        </p>

        {/* ── ANATOMY BLOCK ── */}
        <div className="my-10 overflow-hidden border border-[var(--line)]">
          <div
            className="px-6 py-3.5 font-mono text-[0.6rem] uppercase tracking-[0.18em]"
            style={{ background: DARK, color: "rgba(160,175,210,0.6)" }}
          >
            Three Structures — One Silence
          </div>
          {ADAPTATIONS.map((item) => (
            <div
              key={item.numeral}
              className="grid grid-cols-[28px_1fr] gap-5 border-b border-[var(--line)] px-6 py-5 last:border-b-0"
            >
              <span
                className="pt-0.5 font-mono text-[0.7rem] font-medium"
                style={{ color: NAVY }}
              >
                {item.numeral}
              </span>
              <div>
                <p className="mb-1 font-serif text-[0.95rem] font-medium italic text-[var(--ink)]">
                  {item.title}
                </p>
                <p className="font-serif text-[0.9rem] leading-[1.65] text-[var(--ink-muted)]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          What makes this remarkable is not the sophistication of the engineering —
          though it is sophisticated — but the fact that it solves a problem most
          engineers only recently learned to think about. The aerospace industry began
          studying trailing-edge noise seriously in the 1970s. Owls evolved the solution
          somewhere around sixty million years ago. Researchers at UC Berkeley and Chiba
          University have recently published work on owl-inspired propeller geometries
          that reduce noise by measurable decibels while actually increasing aerodynamic
          efficiency — the owl, it turns out, did not trade silence for lift. It found
          a way to have both, which is the kind of solution that{" "}
          <ArticleProseLink href="/articles/pringles" className="article-euclid-link">
            embarrasses engineers because it suggests they were looking at the wrong tradeoff
          </ArticleProseLink>
          .
        </p>

        <Divider />

        {/* ── INSET: The Harder Question ── */}
        <div
          className="my-10 border-l-4 border border-[var(--line)] px-7 py-6 sm:px-8 sm:py-7"
          style={{
            borderLeftColor: NAVY_DIM,
            background: "color-mix(in srgb, var(--pastel-sky) 22%, white)",
          }}
        >
          <p
            className="mb-5 font-mono text-[0.58rem] uppercase tracking-[0.18em]"
            style={{ color: NAVY_DIM }}
          >
            The Harder Question
          </p>
          <p className="mb-4 font-serif text-[0.97rem] leading-[1.8] text-[var(--ink-muted)] sm:text-[1.02rem]">
            The three-structure explanation accounts for gliding flight reasonably well.
            But owls also flap. And when feathers move against each other, they produce
            frictional noise — solid against solid — that is entirely separate from
            aerodynamic noise. How the owl suppresses this during active flapping is
            still not fully understood. The velvet surface helps, acting as a cushion
            between feathers. But ornithologists suspect there are additional mechanisms
            that have not yet been identified.
          </p>
          <p className="font-serif text-[0.97rem] leading-[1.8] text-[var(--ink-muted)] sm:text-[1.02rem]">
            This is what makes the owl an ongoing research problem rather than a solved
            one: the easy version of the question — why is gliding silent — has a
            reasonably clean answer. The harder version — how is flapping also silent —
            does not.
          </p>
        </div>

        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          What the BBC footage adds to all of this is something research papers cannot:
          the experience of watching it happen at speed, in a real field, against a real
          night. The slow-motion playback shows the feathers doing their work —
          the trailing fringe spreading as the wing extends, the surface bending
          without stiffness. But it is the real-time pass that lands. The owl crosses
          the frame in under a second and the sound track doesn&apos;t change at all.
          The field stays exactly as quiet as it was before. That gap — between what
          you see and what you don&apos;t hear — is where sixty million years of refinement
          lives.
        </p>

        <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          There is a version of this story that ends with a lesson about biomimicry,
          wind turbines, and quieter aircraft. That version is true and worth telling.
          But the version worth watching first is simpler. It is the same thing{" "}
          <ArticleProseLink href="/articles/feynman-math-education" className="article-euclid-link">
            Feynman meant when he said science adds to the beauty of a flower
          </ArticleProseLink>
          {" "}— that comprehending the mechanism does not flatten the wonder.
          It deepens it. A bird crosses a field at night, and the air keeps its secret.
        </p>

        {/* ── VERDICT ── */}
        <div
          className="mt-12 flex gap-5 rounded-xl border border-[var(--line)] px-6 py-6 sm:px-8 sm:py-7"
          style={{
            background: "color-mix(in srgb, var(--pastel-sky) 18%, white)",
          }}
        >
          <span
            className="shrink-0 pt-0.5 text-2xl leading-none tracking-widest"
            style={{ color: NAVY_DIM }}
          >
            ★★★★★
          </span>
          <div>
            <p className="font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              In short
            </p>
            <p className="mt-2 font-serif text-base italic leading-relaxed text-[var(--ink-muted)] sm:text-[1.05rem]">
              Sixty million years of evolution, three overlapping noise-cancellation
              systems, and a mouse that never hears what&apos;s coming.
              Under a minute of footage. Worth every second.
            </p>
          </div>
        </div>

        {/* ── FOOTER ── */}
        <p className="mt-12 text-xs leading-relaxed text-[var(--ink-muted)]">
          <em>The Owl That Isn&apos;t There</em>
          &nbsp;·&nbsp; BBC Natural World: Super Powered Owls
          &nbsp;·&nbsp; abakcus.com
        </p>
      </article>
    </div>
  );
}
