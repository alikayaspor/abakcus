import { ArticleProseLink } from "@/components/articles/article-prose-link";
import { UnitCircleSectionReveal } from "@/components/articles/unit-circle/unit-circle-section-reveal";
import { PASTEL } from "@/data/pastel-palette";

const HERO_IMAGE =
  "https://pub-3775c49696ac49478c024f66a3dbe50d.r2.dev/Your%20Name%20in%20Landsat.png";

const ABAKCUS_IMAGE =
  "https://pub-3775c49696ac49478c024f66a3dbe50d.r2.dev/Landsat%20Abakcus.png";

const RUST = "#8b3a1a";
const RUST_DIM = "#6b2d14";
const BLUE_EARTH = "#1a3a5c";

function SectionHead({ title }: { title: string }) {
  return (
    <div className="mb-6 border-b border-[var(--line)] pb-3">
      <h2 className="font-serif text-[1.05rem] font-medium leading-snug tracking-[0.01em] text-[var(--ink)] sm:text-[1.15rem]">
        {title}
      </h2>
    </div>
  );
}

function HeroImage() {
  return (
    <figure
      className="my-10 overflow-hidden rounded-[var(--radius-card)] p-3 shadow-[var(--shadow-card)] sm:-mx-8 sm:p-4 lg:-mx-16"
      style={{ backgroundColor: PASTEL.sky }}
    >
      <div className="w-full rounded-xl bg-white/30 p-1 sm:p-1.5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_IMAGE}
          alt="Your Name in Landsat — NASA's interactive satellite spelling tool"
          className="mx-auto block h-auto w-full rounded-lg object-contain"
          loading="eager"
          decoding="async"
          draggable={false}
        />
      </div>
      <figcaption className="mt-4 px-1 text-center font-serif text-sm italic leading-snug text-[var(--ink)]">
        NASA&apos;s <em>Your Name in Landsat</em> — type a name and each letter is filled with a real satellite photograph of Earth&apos;s surface.
      </figcaption>
    </figure>
  );
}

function AbakcusImage() {
  return (
    <figure
      className="my-10 overflow-hidden rounded-[var(--radius-card)] p-3 shadow-[var(--shadow-card)] sm:-mx-8 sm:p-4 lg:-mx-16"
      style={{ backgroundColor: "#0d1a2e" }}
    >
      <div className="w-full rounded-xl p-1 sm:p-1.5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={ABAKCUS_IMAGE}
          alt="ABAKCUS spelled in NASA Landsat satellite images"
          className="mx-auto block h-auto w-full rounded-lg object-contain"
          loading="lazy"
          decoding="async"
          draggable={false}
        />
      </div>
      <figcaption
        className="mt-4 px-1 text-center font-mono text-[0.65rem] uppercase tracking-[0.14em] leading-snug"
        style={{ color: "rgba(200,184,154,0.6)" }}
      >
        Each letter is a real Landsat image — forests, deserts, coastlines, riverbeds — pulled from 50+ years of Earth observation data.
      </figcaption>
    </figure>
  );
}

function ActivityBox() {
  const items = [
    "Look up the coordinates of each letter on Google Maps. Find where on Earth each photograph was taken.",
    "Ask: does this look like a forest, a desert, or a coastline? What colors do you see, and why might different places look different from space?",
    "Type everyone\u2019s name in the family. Print the results and hang them side by side. Do any letters repeat? Are they the same image or different ones?",
    "Challenge older children to guess which continent each letter might be from before looking it up. Then check.",
    "Ask: if a satellite is 700 km up, how does it see something as small as a river? That\u2019s a good excuse to talk about zoom, resolution, and light.",
    "Pick one letter, find its location on a map, and look at what\u2019s nearby. Is it a city? A national park? An ocean?",
  ];

  return (
    <div
      className="my-10 border border-[var(--line)] px-6 py-6 sm:px-7 sm:py-7"
      style={{ borderLeftWidth: "4px", borderLeftColor: RUST }}
    >
      <span
        className="mb-4 block font-mono text-[0.58rem] uppercase tracking-[0.18em]"
        style={{ color: RUST }}
      >
        Activity Ideas for Kids
      </span>
      <h3 className="mb-4 font-serif text-[1.05rem] font-medium italic text-[var(--ink)]">
        Turn it into an afternoon
      </h3>
      <p className="mb-4 font-serif text-[0.93rem] leading-[1.75] text-[var(--ink-muted)]">
        After the initial surprise wears off — and it always does wear off, usually around the third name they&apos;ve typed — here are some directions worth exploring together:
      </p>
      <ul className="mt-2 space-y-0 border-t border-[var(--line)]">
        {items.map((item) => (
          <li
            key={item.slice(0, 20)}
            className="relative border-b border-dotted border-[var(--line)] py-3 pl-5 font-serif text-[0.92rem] leading-[1.6] text-[var(--ink-muted)] last:border-b-0"
          >
            <span
              className="absolute left-0 top-3 text-[0.82rem]"
              style={{ color: RUST }}
              aria-hidden
            >
              →
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function HighlightBox() {
  return (
    <div
      className="my-10 border border-[var(--line)] px-6 py-6 sm:px-7"
      style={{ borderLeftWidth: "4px", borderLeftColor: BLUE_EARTH }}
    >
      <p className="font-serif text-[0.93rem] leading-[1.75] text-[var(--ink-muted)]">
        The tool supports the standard A–Z Latin alphabet. Names with non-Latin characters won&apos;t render, but most names transliterated to English work beautifully. The result can be downloaded as an image to share or print.
      </p>
      <p className="mt-4 font-serif text-[0.93rem] leading-[1.75] text-[var(--ink-muted)]">
        One small note for classroom use: the tool works entirely in the browser, requires no login, and is free. It loads quickly and needs no installation. A projector and a room full of curious kids is all the setup required.
      </p>
    </div>
  );
}

function CtaBlock() {
  return (
    <div
      className="my-8 flex flex-wrap items-center justify-between gap-4 border-l-4 px-5 py-5"
      style={{
        borderLeftColor: RUST_DIM,
        background: "color-mix(in srgb, var(--pastel-peach) 25%, white)",
      }}
    >
      <div>
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.15em]" style={{ color: RUST }}>
          Try It
        </p>
        <p className="mt-1 font-serif text-[0.95rem] italic text-[var(--ink-muted)]">
          Type your name — or your kid&apos;s name — and see what Earth has been holding onto all this time.
        </p>
      </div>
      <a
        href="https://science.nasa.gov/specials/your-name-in-landsat/"
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 border px-5 py-2.5 font-mono text-[0.62rem] uppercase tracking-[0.15em] transition-colors hover:bg-[#6b2d14] hover:text-white"
        style={{ borderColor: RUST_DIM, color: RUST_DIM }}
      >
        Open the Tool →
      </a>
    </div>
  );
}

export function YourNameInLandsatArticle() {
  return (
    <UnitCircleSectionReveal>
      <div className="unit-circle-article text-[var(--ink)]">
        {/* Header */}
        <div className="mx-auto max-w-[780px] px-[var(--page-pad)] pb-6 pt-8 text-center sm:pb-8 sm:pt-10">
          <p className="mb-5 font-sans text-[0.62rem] uppercase leading-relaxed tracking-[0.24em] text-[var(--ink-muted)] sm:text-[0.65rem]">
            NASA &amp; Interactive Science · Free &amp; Browser-Based · A–Z
          </p>
          <h1 className="font-serif text-[clamp(2rem,6vw,3.1rem)] font-normal leading-[1.1] tracking-[-0.02em] text-[var(--ink)]">
            Your Name,<br />Written by Earth
          </h1>
          <p className="mx-auto mt-6 max-w-[34rem] border-l-2 border-[var(--ink)] pl-5 text-left text-lg italic leading-relaxed text-[var(--ink-muted)] sm:text-xl">
            NASA has a tool that spells out your name using real Landsat satellite images of Earth&apos;s surface. Every letter is a real place. Every place has coordinates.
          </p>
          <div className="mx-auto mt-7 h-px w-14 bg-[var(--line)] sm:mt-8" aria-hidden />
        </div>

        <article className="mx-auto max-w-[min(48rem,100%)] px-[var(--page-pad)] pb-20 pt-2 sm:pb-28">

          <p
            className="intro-drop border-b border-[var(--line)] pb-8 text-lg leading-[1.82] text-[var(--ink)] sm:text-xl"
          >
            Type in your name. Watch the planet spell it back. Each letter is a photograph taken from 700 kilometers above the ground — a mountain ridge, a salt flat, a river bend that happens to look exactly like the letter you needed.
          </p>

          <HeroImage />

          <section data-uc-section className="mt-10">
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              NASA&apos;s <em>Your Name in Landsat</em> is one of those rare tools that works on everyone. Young children stare at it. Adults forward it without explanation. Science teachers have been known to open it in class just to watch what happens to the room.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The premise is disarmingly simple: type your name, and each letter is filled in with a real satellite image from the Landsat archive — an aerial photograph of Earth&apos;s surface that, from altitude, forms that shape naturally. The &ldquo;A&rdquo; in your name might be a volcanic crater in Iceland. The &ldquo;S&rdquo; might be a river delta in Southeast Asia. The coordinates are right there under each letter, in case you want to look it up.
            </p>
          </section>

          <AbakcusImage />

          <section data-uc-section className="mt-10">
            <SectionHead title="Where the Letters Come From" />

            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The Landsat program has been photographing Earth&apos;s land surface without interruption since July 23, 1972. Every 16 days, the satellite completes a full sweep of the planet. Nine Landsat satellites have done this in sequence, each one picking up where the last left off, building an archive that now spans more than half a century.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Within that archive, certain images contain shapes that resemble letters — not by design, but because mountain ranges, coastlines, dry riverbeds, and salt lakes don&apos;t consult the alphabet before deciding what form to take. NASA&apos;s team combed through this archive and assembled a library: one collection of real photographs for each letter from A to Z. When you type your name, the tool reaches into that library and pulls the images that spell it out.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Underneath each letter, you&apos;ll find a coordinate tag like{" "}
              <code
                className="font-mono text-[0.85em] px-1.5 py-0.5 border border-[var(--line)]"
                style={{ background: "color-mix(in srgb, var(--pastel-sky) 30%, white)" }}
              >
                40°41&apos;24&apos;&apos; N, 116°58&apos;03&apos;&apos; E
              </code>
              . That&apos;s not decoration. That&apos;s the actual location of the photograph. You can open a map and go there.
            </p>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead title="A Perfect Activity for Kids" />

            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              There&apos;s something genuinely magical about the moment a child sees their name written in satellite images of Earth. It isn&apos;t abstract science at that point — it&apos;s personal. Their name is somewhere out there on the planet, literally written into the landscape. The &ldquo;E&rdquo; in Emma is a glacier in Greenland. The &ldquo;O&rdquo; in Oscar might be a crater lake in Ethiopia.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              This makes the tool remarkably effective as an entry point for conversations you&apos;d otherwise struggle to start with young children.
            </p>

            <ActivityBox />
          </section>

          <blockquote
            className="my-10 border-t border-b border-[var(--line)] py-8 text-center font-serif text-[1.35rem] italic leading-[1.5] text-[var(--ink-muted)] sm:text-[1.5rem]"
            style={{ color: RUST }}
          >
            &ldquo;The planet has been photographed so many times, from so many angles, that it can now spell your name.&rdquo;
          </blockquote>

          <section data-uc-section className="mt-14">
            <SectionHead title="The Archive Behind the Magic" />

            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The reason this tool can exist at all is the sheer scale of what Landsat has collected. More than 50 years of systematic global coverage means Earth&apos;s surface has been photographed millions of times, under different seasons, different light conditions, different cloud cover. Within that many images, every letter shape is hiding somewhere.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              In 2008, NASA and the U.S. Geological Survey made the entire Landsat archive free and publicly accessible. That decision quietly transformed Earth observation science — researchers everywhere suddenly had decades of data available at no cost. The science that came out of that opening is still accumulating. But one very small downstream consequence, years later, is a tool that writes your child&apos;s name in photographs of the planet.
            </p>

            <HighlightBox />
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead title="Why This Kind of Thing Matters" />

            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Science communication has a persistent problem: the gap between &ldquo;this data exists&rdquo; and &ldquo;this data means something to me personally&rdquo; is hard to cross. Landsat&apos;s archive is an extraordinary resource — one of the most important environmental datasets ever assembled — but explaining why it matters to someone who has never thought about satellite imagery is genuinely difficult.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Tools like this one take a shortcut across that gap. They don&apos;t explain the science first and hope curiosity follows. They make it personal first, and let the science become the answer to questions that naturally arise. Why does that letter look greenish? Because it&apos;s a forest. How does the satellite see colors? Well, actually it sees more than colors — it sees wavelengths our eyes can&apos;t detect at all. And suddenly you&apos;re explaining multispectral imaging to a nine-year-old who asked the question themselves.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              That&apos;s the best version of science education. Not a lecture with a satellite image at the end — but a satellite image of your own name, and a conversation that unfolds from there. This is the same logic that runs through{" "}
              <ArticleProseLink href="/tools/river-runner" className="article-euclid-link">
                River Runner&apos;s raindrop traces
              </ArticleProseLink>
              {" "}or{" "}
              <ArticleProseLink href="/tools/seeing-theory" className="article-euclid-link">
                Seeing Theory&apos;s visual probability
              </ArticleProseLink>
              : make it personal first, and the science follows naturally.
            </p>

            <CtaBlock />
          </section>

          <footer className="mt-16 border-t border-[var(--line)] pt-6 font-mono text-[0.65rem] leading-[1.9] text-[var(--ink-muted)]">
            <p>
              Source:{" "}
              <a
                href="https://science.nasa.gov/specials/your-name-in-landsat/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-[var(--ink)]"
              >
                NASA Science — Your Name in Landsat
              </a>
              {" "}·{" "}
              <a
                href="https://science.nasa.gov/mission/landsat/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-[var(--ink)]"
              >
                Landsat Mission Overview
              </a>
            </p>
          </footer>

        </article>
      </div>
    </UnitCircleSectionReveal>
  );
}
