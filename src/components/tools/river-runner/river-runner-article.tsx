import type { ReactNode } from "react";
import { ArticleImageLightbox } from "@/components/articles/article-image-lightbox";
import { ArticleProseLink } from "@/components/articles/article-prose-link";
import { UnitCircleSectionReveal } from "@/components/articles/unit-circle/unit-circle-section-reveal";
import { PASTEL } from "@/data/pastel-palette";

const R2 = "https://pub-3775c49696ac49478c024f66a3dbe50d.r2.dev";
const HERO_IMAGE = `${R2}/River%20Runner.png`;
const SECOND_IMAGE = `${R2}/River%20Runner%202.png`;

function SectionHead({ title }: { title: string }) {
  return (
    <div className="mb-6 border-b border-[var(--line)] pb-3">
      <h2 className="font-serif text-[1.05rem] font-medium leading-snug tracking-[0.01em] text-[var(--ink)] sm:text-[1.15rem]">
        {title}
      </h2>
    </div>
  );
}

function PullQuote({ children, cite }: { children: ReactNode; cite?: string }) {
  return (
    <blockquote className="my-10 border-l-2 border-[var(--ink)] py-2 pl-6">
      <p className="text-lg italic leading-relaxed text-[var(--ink-muted)]">{children}</p>
      {cite && (
        <cite className="mt-2 block font-sans text-[0.6rem] not-italic uppercase tracking-[0.15em] text-[var(--ink-muted)]">
          — {cite}
        </cite>
      )}
    </blockquote>
  );
}

function CtaBlock() {
  return (
    <div className="my-8 flex flex-wrap items-center justify-between gap-4 border-l-4 border-[#3d6e8a] bg-[color-mix(in_srgb,var(--pastel-sky)_30%,white)] px-5 py-5">
      <div>
        <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-[var(--ink)]">
          River Runner — Sam Learner
        </p>
        <p className="mt-0.5 font-serif text-[0.92rem] italic text-[var(--ink-muted)]">
          Click anywhere in the world. Watch where water goes.
        </p>
      </div>
      <a
        href="https://river-runner.samlearner.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 border border-[#3d6e8a] px-5 py-2.5 font-sans text-[0.65rem] font-medium uppercase tracking-[0.18em] text-[#3d6e8a] transition-colors hover:bg-[#3d6e8a] hover:text-white"
      >
        Open the Map →
      </a>
    </div>
  );
}

function ToolInfo() {
  const cells: [string, ReactNode][] = [
    ["Built by", "Sam Learner"],
    ["Data", "USGS NHDPlus"],
    ["Coverage", "Global"],
    ["Type", "Interactive"],
    ["Year", "2021–2022"],
  ];

  return (
    <div className="my-8 overflow-x-auto rounded-sm border border-[var(--line)]">
      <div className="flex min-w-[420px] divide-x divide-[var(--line)]">
        {cells.map(([label, value]) => (
          <div key={label} className="flex-1 px-4 py-3">
            <p className="font-sans text-[0.52rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              {label}
            </p>
            <p className="mt-1 font-serif text-[0.92rem] leading-snug text-[var(--ink-muted)]">
              {value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroImage() {
  return (
    <figure
      className="my-10 overflow-hidden rounded-[var(--radius-card)] p-3 shadow-[var(--shadow-card)] sm:-mx-8 sm:p-4 lg:-mx-16"
      style={{ backgroundColor: PASTEL.sky }}
    >
      <ArticleImageLightbox
        src={HERO_IMAGE}
        alt="River Runner — interactive watershed map showing a raindrop's journey to the ocean"
      >
        <div className="w-full rounded-xl bg-white/30 p-1 sm:p-1.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_IMAGE}
            alt="River Runner — interactive watershed map showing a raindrop's journey to the ocean"
            className="mx-auto block h-auto w-full rounded-lg object-contain transition-transform duration-500 group-hover:scale-[1.01]"
            loading="eager"
            decoding="async"
            draggable={false}
          />
        </div>
      </ArticleImageLightbox>
      <figcaption className="mt-4 px-1 text-center font-serif text-sm italic leading-snug text-[var(--ink)]">
        River Runner traces any raindrop from where it lands to where water eventually takes it.
      </figcaption>
    </figure>
  );
}

function SecondImage() {
  return (
    <figure
      className="my-10 overflow-hidden rounded-[var(--radius-card)] p-3 shadow-[var(--shadow-card)] sm:-mx-8 sm:p-4 lg:-mx-16"
      style={{ backgroundColor: PASTEL.peach }}
    >
      <ArticleImageLightbox
        src={SECOND_IMAGE}
        alt="River Runner showing the path from our home to the Gulf of Mexico via the Mississippi"
      >
        <div className="w-full rounded-xl bg-white/30 p-1 sm:p-1.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={SECOND_IMAGE}
            alt="River Runner showing the path from our home to the Gulf of Mexico via the Mississippi"
            className="mx-auto block h-auto w-full rounded-lg object-contain transition-transform duration-500 group-hover:scale-[1.01]"
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        </div>
      </ArticleImageLightbox>
      <figcaption className="mt-4 px-1 text-center font-serif text-sm italic leading-snug text-[var(--ink)]">
        The raindrop that lands on our roof ends up in the Gulf of Mexico — via the Mississippi.
      </figcaption>
    </figure>
  );
}

type JourneyRowProps = {
  place: string;
  distance: string;
  children: ReactNode;
};

function JourneyRow({ place, distance, children }: JourneyRowProps) {
  return (
    <div className="grid grid-cols-1 gap-2 border-b border-[var(--line)] py-5 sm:grid-cols-[160px_1fr] sm:gap-4">
      <div className="pt-0.5">
        <p className="font-sans text-[0.6rem] font-medium uppercase tracking-[0.12em] text-[var(--ink-muted)]">
          {place}
        </p>
        <p className="mt-1 font-mono text-[0.78rem] font-medium text-[#3d6e8a]">{distance}</p>
      </div>
      <p className="text-[0.95rem] leading-[1.75] text-[var(--ink)]">{children}</p>
    </div>
  );
}

export function RiverRunnerArticle() {
  return (
    <UnitCircleSectionReveal>
      <div className="unit-circle-article text-[var(--ink)]">
        {/* Header */}
        <div className="mx-auto max-w-[780px] px-[var(--page-pad)] pb-6 pt-8 text-center sm:pb-8 sm:pt-10">
          <p className="mb-5 font-sans text-[0.62rem] uppercase leading-relaxed tracking-[0.24em] text-[var(--ink-muted)] sm:text-[0.65rem]">
            Data Visualization · Hydrology · Maps · Sam Learner
          </p>
          <h1 className="font-serif text-[clamp(2rem,6vw,3.1rem)] font-normal leading-[1.1] tracking-[-0.02em] text-[var(--ink)]">
            Every Raindrop Has a Destination
          </h1>
          <p className="mx-auto mt-6 max-w-[34rem] border-l-2 border-[var(--ink)] pl-5 text-left text-lg italic leading-relaxed text-[var(--ink-muted)] sm:text-xl">
            A map that answers a question most people never think to ask —
            and then refuses to let you stop asking it.
          </p>
          <div
            className="mx-auto mt-7 h-px w-14 bg-[var(--line)] sm:mt-8"
            aria-hidden
          />
        </div>

        <article className="mx-auto max-w-[min(48rem,100%)] px-[var(--page-pad)] pb-20 pt-2 sm:pb-28">
          <p className="intro-drop border-b border-[var(--line)] pb-8 text-lg leading-[1.82] text-[var(--ink)] sm:text-xl">
            Water doesn&apos;t wander. It follows a deterministic path set by
            topography, gravity, and the geometry of river networks — and it
            has been doing so without interruption since long before anyone
            thought to watch. What is new is the ability to watch.
          </p>

          <section data-uc-section className="mt-10">
            <SectionHead title="Try River Runner" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              River Runner, built by data analyst Sam Learner, lets you click
              anywhere on a map and trace the exact downstream journey of a
              raindrop landing at that point — from the moment it hits the
              ground to wherever water eventually takes it. It sounds like a
              small trick. It is not a small trick.
            </p>

            <CtaBlock />
            <ToolInfo />
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead title="The Unlikely Starting Point" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Learner&apos;s initial prompt was not hydrological. He was
              thinking about the Rocky Mountains — specifically, about the
              Continental Divide, and what it means that a ridge of high ground
              runs down the spine of North America splitting the continent&apos;s
              drainage in two. Rain falling a few feet to the east of the divide
              eventually reaches the Atlantic; a few feet to the west, the
              Pacific.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Living in Pittsburgh, at the point where the Allegheny and
              Monongahela rivers join to form the Ohio, he was already standing
              at one answer. The Ohio flows to the Mississippi; the Mississippi
              flows to the Gulf of Mexico. The visualization started as a simple
              trace of the continental divide&apos;s drainage and became, through
              iteration, a tool that works for any point on Earth.
            </p>

            <PullQuote cite="Sam Learner">
              &ldquo;You probably live upstream from a lot of other people.&rdquo;
            </PullQuote>
          </section>

          <HeroImage />

          <section data-uc-section className="mt-14">
            <SectionHead title="What the Data Actually Is" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The U.S. version runs on USGS NHDPlus data — the National
              Hydrography Dataset Plus, a comprehensive digital model of the
              country&apos;s waterways. Every named and unnamed stream, every
              river flowline, every connection between them is encoded in this
              dataset. The USGS&apos;s NLDI API handles the routing: given a
              coordinate, it finds the nearest flowline and traces the downstream
              path through the network.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              For the global version, released in early 2022, this infrastructure
              did not exist in usable form. Learner worked with the USGS water
              team and the Internet of Water to build it. The global back-end
              required constructing routing logic from scratch. The tool renders
              paths using Mapbox with 3D elevation data, which is what makes it
              feel less like reading a map and more like riding the current. The
              determinism of water — the way a single point on the map commits
              irrevocably to a single path — is the same quality that makes{" "}
              <ArticleProseLink href="/articles/unit-circle">
                a well-constructed diagram more honest than a paragraph
              </ArticleProseLink>
              .
            </p>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead title="Some Distances" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The numbers matter. They make concrete what watershed connectivity
              means in practice.
            </p>

            <div className="mt-6 border-t border-[var(--line)]">
              <JourneyRow place="Hiland, Wyoming" distance="3,400 miles">
                Powder River → Bighorn → Yellowstone → Missouri → Mississippi →
                Gulf of Mexico. Thirteen states. A raindrop on a Wyoming hillside
                takes the long way to the sea.
              </JourneyRow>
              <JourneyRow place="Custer, South Dakota" distance="2,600+ miles">
                Downstream through the Cheyenne River basin to the Missouri and
                the Mississippi. The Great Plains drain a vast, slow-moving
                territory.
              </JourneyRow>
              <JourneyRow place="Chengdu, China" distance="~2,000 miles">
                The Yangtze basin carries Sichuan rainfall to the East China Sea.
                One of the world&apos;s great river systems, visible in a single
                click.
              </JourneyRow>
              <JourneyRow place="Cochabamba, Bolivia" distance="3,000+ miles">
                Into the Amazon system and across the continent to the Atlantic.
                South America&apos;s drainage basin is the largest on Earth by
                discharge.
              </JourneyRow>
              <JourneyRow place="Tercan, Turkey" distance="2,867 km">
                The source of the Euphrates. Water from the eastern Anatolian
                plateau feeds the Fırat, passes through two countries&apos; worth
                of dams and reservoirs, and reaches the Persian Gulf as the Shatt
                al-Arab.
              </JourneyRow>
            </div>
          </section>

          <SecondImage />

          <section data-uc-section className="mt-14">
            <SectionHead title="The Upstream Problem" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The map&apos;s usefulness runs in both directions. Following water
              downstream shows you where a raindrop ends up. Following it
              upstream shows you who sent it. The same back-end data could power
              a complementary tool — a map that shows everyone upstream of a
              given point, which is to say, everyone whose land use and waste
              disposal eventually affects you.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              This is not an abstract concern. Fertilizer applied to fields in
              Minnesota and Montana enters the Missouri-Mississippi system and
              ends up in the Gulf of Mexico, where excess nitrogen feeds algal
              blooms that deplete oxygen and kill marine life — a dead zone that
              has persisted for decades. Plastic pellets discharged near
              factories in Central Europe can wash into the Danube and reach the
              Black Sea. A poorly lined landfill in one watershed can contaminate
              drinking water several states away. The map does not say any of
              this directly. It shows you the path, and the path says it. That
              quiet indirection is reminiscent of how{" "}
              <ArticleProseLink href="/articles/feynman-technique">
                the best teaching works
              </ArticleProseLink>{" "}
              — you arrive at the conclusion yourself, which is why it sticks.
            </p>

            <PullQuote cite="Sam Learner">
              &ldquo;What we put in a river or stream ends up in someone
              else&apos;s water.&rdquo;
            </PullQuote>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead title="What Makes It Work" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              River Runner is not the first watershed visualization, and it is
              not the most technically sophisticated. What it does differently
              is collapse the distance between curiosity and answer. You wonder
              about your backyard. You click. You watch. The question resolves
              in about thirty seconds and immediately generates three more
              questions: What about my parents&apos; house? What about that
              mountain I hiked last summer? What about the river I can see from
              this window?
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Learner spent weeks iterating on navigation smoothness specifically
              because a sluggish transition from click to animation breaks the
              spell. The 3D flythrough is not decorative — it gives spatial
              intuition to something that is otherwise just a list of river names
              and distances. You understand in your body that the water is going
              downhill, that it is covering real terrain, that the journey is
              long. There is also something precise about the question itself: not
              the basin, but this drop, from here, going there. The specificity
              is what lands — the same way that{" "}
              <ArticleProseLink href="/articles/inkala-sudoku">
                a puzzle with exactly one solution
              </ArticleProseLink>{" "}
              feels different from one with many.
            </p>
          </section>
        </article>
      </div>
    </UnitCircleSectionReveal>
  );
}
