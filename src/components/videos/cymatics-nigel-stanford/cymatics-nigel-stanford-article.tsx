import { ArticleImageLightbox } from "@/components/articles/article-image-lightbox";
import { ArticleProseLink } from "@/components/articles/article-prose-link";

const R2 = "https://pub-676f738e0a3948d19dc9defd954e36d5.r2.dev";
const HERO_IMAGE = `${R2}/Cymatics.webp`;
const SECOND_IMAGE = `${R2}/Cymatics%202.jpg`;

const BLUE = "#2c4f6a";
const BLUE_DIM = "#1e3d55";

const EXPERIMENTS = [
  {
    label: "Chladni Plate",
    freq: "657 · 1565 · 932 · 3592 Hz",
    text: "Sand scattered on a thin metal plate attached to a speaker migrates to the nodal lines — the places where the plate is not vibrating. The shapes are called Chladni figures, after Ernst Chladni who mapped them with a violin bow in 1787.",
  },
  {
    label: "Standing Waves",
    freq: "50 · 100 Hz",
    text: "A petri dish filled with vodka is taped to a speaker. Low frequencies push the liquid into standing waves — interference patterns where peaks and troughs lock in place. Vodka rather than water: lower surface tension makes the patterns more pronounced.",
  },
  {
    label: "Frozen Water",
    freq: "25 Hz",
    text: "A speaker drives water through a hose at a frequency matched to the camera's frame rate of 25 fps. The water appears to freeze — a spiral suspended in mid-fall. Nothing is slowed down. The stroboscopic illusion is doing all the work.",
  },
  {
    label: "Ferrofluid",
    freq: "Electromagnetically triggered",
    text: "Magnetic ferrofluid poured into a tray, with three electromagnets underneath. Different keyboard notes switch one, two, or all three magnets on. The fluid spikes upward along field lines, forming spiny black crowns.",
  },
  {
    label: "Ruben's Tube",
    freq: "409 · 490 · 564 Hz",
    text: "A metal tube filled with flammable gas, perforated along its length. Audio frequencies create pressure standing waves inside the tube; where pressure is high, flames burn low; where pressure is low, flames burn high — a visible cross-section of a sound wave, written in fire.",
  },
];

function Divider() {
  return (
    <div className="my-12 flex items-center gap-4">
      <span className="h-px flex-1 bg-[var(--line)]" />
      <span
        className="font-mono text-[0.6rem] uppercase tracking-[0.2em]"
        style={{ color: BLUE_DIM }}
      >
        §
      </span>
      <span className="h-px flex-1 bg-[var(--line)]" />
    </div>
  );
}

export function CymaticsNigelStanfordArticle() {
  return (
    <div className="text-[var(--ink)]">
      {/* ── HERO ── */}
      <header className="relative overflow-hidden bg-[#070d1a] pb-0">
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, #040810 0%, #070d1a 100%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[var(--page-max)] px-[var(--page-pad)]">
          <div className="flex flex-col items-center gap-8 py-16 text-center md:py-20">
            <p
              className="font-mono text-[0.62rem] uppercase tracking-[0.26em]"
              style={{ color: BLUE }}
            >
              Physics · Music &nbsp;·&nbsp; Nigel Stanford &nbsp;·&nbsp; 2014
            </p>
            <h1 className="font-serif text-[clamp(2.4rem,7vw,4.8rem)] font-medium italic leading-[1.0] tracking-tight text-[#eef2f8]">
              Cymatics: Sound Has a Shape
            </h1>
            <p
              className="max-w-md font-serif text-lg italic leading-relaxed"
              style={{ color: "rgba(160,190,220,0.6)" }}
            >
              Nigel Stanford wrote the music last — after the physics decided the notes.
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
                src="https://player.vimeo.com/video/111593305?title=0&byline=0&portrait=0"
                title="Cymatics — Nigel Stanford, 2014"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <p
            className="mt-3 pb-10 text-center font-mono text-[0.6rem] uppercase tracking-[0.14em]"
            style={{ color: "rgba(160,190,220,0.7)" }}
          >
            Cymatics — Nigel Stanford, dir. Shahir Daud · Solar Echoes, 2014
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
              color: BLUE_DIM,
            }}
          >
            Physics
          </span>
          <span
            className="rounded-full px-2.5 py-0.5 font-mono text-[0.58rem] uppercase tracking-[0.14em]"
            style={{
              background: "color-mix(in srgb, var(--pastel-sky) 55%, white)",
              color: BLUE_DIM,
            }}
          >
            Music
          </span>
          <span className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
            Nigel Stanford · Shahir Daud · Solar Echoes
          </span>
        </div>

        {/* Drop-cap */}
        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          <span
            className="float-left mr-2 mt-1 font-serif text-[4.5rem] font-bold leading-[0.78] sm:text-[5.2rem]"
            style={{ color: BLUE_DIM }}
            aria-hidden="true"
          >
            T
          </span>
          here is a version of music that never reaches your ears. It lives in the sand on a
          metal plate, in the standing waves of vodka in a petri dish, in the momentarily frozen
          spiral of water from a garden hose. New Zealand musician Nigel Stanford spent months
          finding this version of music — not composing to it, but composing <em>from</em> it.
        </p>

        <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          The result is <em>Cymatics</em>, a music video that reverses the usual relationship
          between sound and image. The images did not illustrate the music. The music was written
          to fit the images — or rather, to fit the physics that generated them. Most music videos
          are afterthoughts; Stanford&apos;s process was the opposite: identify the experiment,
          understand its physics, figure out which frequency produces the most interesting shape,
          then write a note for that frequency.
        </p>

        {/* Sidebar */}
        <div className="clear-both mb-8 border border-[var(--line)] px-5 py-4 sm:float-right sm:mb-4 sm:ml-8 sm:w-[220px] sm:px-4 sm:py-4">
          <span
            className="mb-2 block font-mono text-[0.6rem] uppercase tracking-[0.14em]"
            style={{ color: BLUE_DIM }}
          >
            —
          </span>
          <p className="font-serif text-[0.82rem] italic leading-[1.6] text-[var(--ink-muted)]">
            <strong className="font-semibold not-italic text-[var(--ink)]">Musician:</strong>
            {" "}Nigel Stanford
            <br /><strong className="font-semibold not-italic text-[var(--ink)]">Director:</strong>
            {" "}Shahir Daud
            <br /><strong className="font-semibold not-italic text-[var(--ink)]">Album:</strong>
            {" "}Solar Echoes
            <br /><strong className="font-semibold not-italic text-[var(--ink)]">Year:</strong>
            {" "}2014
          </p>
        </div>

        {/* Pull quote */}
        <blockquote
          className="clear-both my-10 border-l-[3px] py-1 pl-6"
          style={{ borderColor: BLUE_DIM }}
        >
          <p className="font-serif text-[1.2rem] italic leading-[1.65] text-[var(--ink)] sm:text-[1.3rem]">
            &ldquo;The music was written last.&rdquo;
          </p>
          <cite className="mt-3 block font-mono text-[0.65rem] uppercase tracking-[0.12em] not-italic text-[var(--ink-muted)]">
            Nigel Stanford
          </cite>
        </blockquote>

        {/* First image */}
        <figure className="my-10 overflow-hidden rounded-lg border border-[var(--line)]">
          <ArticleImageLightbox
            src={HERO_IMAGE}
            alt="Chladni plate pattern — sand forming geometric shapes on a vibrating metal plate"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={HERO_IMAGE}
              alt="Chladni plate pattern — sand forming geometric shapes on a vibrating metal plate"
              className="block w-full transition-transform duration-500 group-hover:scale-[1.01]"
              loading="lazy"
              decoding="async"
              draggable={false}
            />
          </ArticleImageLightbox>
          <figcaption className="px-5 py-3 text-center font-serif text-sm italic text-[var(--ink-muted)]">
            Sand on a Chladni plate migrates to the nodal lines — the places where the surface is not vibrating.
          </figcaption>
        </figure>

        <Divider />

        {/* Five experiments inset */}
        <div
          className="my-10 border-l-4 border border-[var(--line)] px-7 py-6 sm:px-8 sm:py-7"
          style={{
            borderLeftColor: BLUE_DIM,
            background: "color-mix(in srgb, var(--pastel-sky) 22%, white)",
          }}
        >
          <p
            className="mb-6 font-mono text-[0.58rem] uppercase tracking-[0.18em]"
            style={{ color: BLUE_DIM }}
          >
            The Five Experiments
          </p>
          <div className="divide-y divide-[var(--line)]">
            {EXPERIMENTS.map((e) => (
              <div key={e.label} className="py-5 first:pt-0 last:pb-0">
                <div className="mb-1 flex flex-wrap items-baseline gap-3">
                  <span
                    className="font-mono text-[0.65rem] font-semibold uppercase tracking-[0.12em]"
                    style={{ color: BLUE_DIM }}
                  >
                    {e.label}
                  </span>
                  <span className="font-mono text-[0.58rem] text-[var(--ink-muted)]">{e.freq}</span>
                </div>
                <p className="font-serif text-[0.92rem] leading-[1.75] text-[var(--ink-muted)]">
                  {e.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Second image */}
        <figure className="my-10 overflow-hidden rounded-lg border border-[var(--line)]">
          <ArticleImageLightbox
            src={SECOND_IMAGE}
            alt="Ferrofluid spiking upward along magnetic field lines, forming black crowns"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={SECOND_IMAGE}
              alt="Ferrofluid spiking upward along magnetic field lines, forming black crowns"
              className="block w-full transition-transform duration-500 group-hover:scale-[1.01]"
              loading="lazy"
              decoding="async"
              draggable={false}
            />
          </ArticleImageLightbox>
          <figcaption className="px-5 py-3 text-center font-serif text-sm italic text-[var(--ink-muted)]">
            Ferrofluid spikes along electromagnetic field lines — each keyboard note a different magnetic configuration.
          </figcaption>
        </figure>

        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          The word &ldquo;cymatics&rdquo; was coined by Hans Jenny, a Swiss physician who spent
          the 1960s photographing and filming the effects of vibration on liquids, powders, and
          pastes. The patterns he found were not decorative accidents — they are deterministic: a
          given frequency applied to a given medium in a given geometry will produce the same
          pattern every time. The shapes are solutions to the wave equation, made visible.
        </p>

        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          Toward the end of the video, Stanford puts on a chain mail suit and keeps working while
          a Tesla coil fires bolts of electricity at him. The suit is a Faraday cage — a
          conductive enclosure that routes current around, not through, the body inside. It is
          the same principle that protects aircraft from lightning. In the context of the video
          it reads as spectacle. In the context of the physics, it is just another demonstration:
          electromagnetic fields, like sound waves, can be shaped by the right material geometry.
        </p>

        <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          What makes the video worth watching is not the spectacle — though the ferrofluid and
          the Tesla coil are genuinely striking — but the underlying claim that sound and geometry
          are not separate categories. A frequency is a number. A number, applied to physics,
          produces a shape. The shape can be beautiful. None of this requires mysticism; the wave
          equation is enough. The same instinct — that abstraction and beauty point at each other
          —{" "}
          <ArticleProseLink href="/articles/billingsley-euclid" className="article-euclid-link">
            drove Oliver Byrne to print Euclid in color in 1847
          </ArticleProseLink>
          .
        </p>

        {/* Verdict */}
        <div
          className="mt-12 flex gap-5 rounded-xl border border-[var(--line)] px-6 py-6 sm:px-8 sm:py-7"
          style={{ background: "color-mix(in srgb, var(--pastel-sky) 18%, white)" }}
        >
          <span
            className="shrink-0 pt-0.5 text-2xl leading-none tracking-widest"
            style={{ color: BLUE_DIM }}
          >
            ★★★★★
          </span>
          <div>
            <p className="font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              In short
            </p>
            <p className="mt-2 font-serif text-base italic leading-relaxed text-[var(--ink-muted)] sm:text-[1.05rem]">
              A music video where the physics wrote the music. Five experiments, five solutions to
              the wave equation — all made visible in sand, vodka, water, fire, and iron.
            </p>
          </div>
        </div>

        <p className="mt-12 text-xs leading-relaxed text-[var(--ink-muted)]">
          Nigel Stanford — Cymatics · Solar Echoes, 2014 · dir. Shahir Daud
          &nbsp;·&nbsp; abakcus.com
        </p>
      </article>
    </div>
  );
}
