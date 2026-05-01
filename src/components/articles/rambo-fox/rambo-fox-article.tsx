import Image from "next/image";
import Link from "next/link";
import { ArticleImageLightbox } from "@/components/articles/article-image-lightbox";
import { UnitCircleSectionReveal } from "@/components/articles/unit-circle/unit-circle-section-reveal";
import { ramboFoxImages } from "@/data/rambo-fox-images";
import { PASTEL, type PastelId } from "@/data/pastel-palette";

const WIKI_RAMBO_FOX = "https://en.wikipedia.org/wiki/Rambo_(fox)";

function RamboFigure({
  src,
  alt,
  caption,
  priority,
  pastel,
  className,
}: {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  pastel: PastelId;
  className?: string;
}) {
  return (
    <figure
      className={`overflow-hidden rounded-[var(--radius-card)] p-3 shadow-[var(--shadow-card)] sm:p-4 ${className ?? "my-10"}`}
      style={{ backgroundColor: PASTEL[pastel] }}
    >
      <ArticleImageLightbox src={src} alt={alt} caption={caption}>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-white/55 sm:aspect-[3/2]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width:768px) 100vw, min(680px, 90vw)"
            priority={priority}
          />
        </div>
      </ArticleImageLightbox>
      {caption ? (
        <figcaption className="mt-4 px-1 text-center font-serif text-sm italic leading-snug text-[var(--ink)]">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function SectionHead({ num, title }: { num: string; title: string }) {
  return (
    <div className="mb-6 flex items-baseline gap-4 border-b border-[var(--line)] pb-3">
      <span className="shrink-0 font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
        {num}
      </span>
      <h2 className="font-serif text-[1.05rem] font-medium leading-snug tracking-[0.01em] text-[var(--ink)] sm:text-[1.15rem]">
        {title}
      </h2>
    </div>
  );
}

function EnclosureDiagram() {
  return (
    <div className="my-10 border border-[var(--line)] bg-[color-mix(in_srgb,var(--pastel-peach)_28%,white)] p-5 sm:p-6">
      <p className="mb-4 font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
        Territory concession — how the project changed
      </p>
      <svg
        className="w-full max-w-[520px]"
        viewBox="0 0 520 240"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <rect
          x="20"
          y="20"
          width="220"
          height="200"
          rx="2"
          fill="none"
          stroke="#4a4540"
          strokeWidth="1.2"
        />
        <rect x="21" y="21" width="218" height="198" rx="2" fill="#dfd8cb" />
        <rect
          x="55"
          y="60"
          width="150"
          height="120"
          rx="2"
          fill="#e9e3d8"
          stroke="#4a4540"
          strokeWidth="1"
        />
        <text
          x="30"
          y="38"
          fill="#918b82"
          style={{ fontFamily: "ui-monospace, monospace", fontSize: 10 }}
        >
          5,800 ha — original enclosure
        </text>
        <text
          x="28"
          y="200"
          fill="#8b2020"
          style={{ fontFamily: "ui-monospace, monospace", fontSize: 10 }}
        >
          Rambo&apos;s territory
        </text>
        <text
          x="70"
          y="108"
          fill="#4a4540"
          style={{
            fontFamily: "Georgia, ui-serif, serif",
            fontSize: 12,
            fontStyle: "italic",
          }}
        >
          second
        </text>
        <text
          x="70"
          y="124"
          fill="#4a4540"
          style={{
            fontFamily: "Georgia, ui-serif, serif",
            fontSize: 12,
            fontStyle: "italic",
          }}
        >
          safe zone
        </text>
        <text
          x="70"
          y="140"
          fill="#4a4540"
          style={{ fontFamily: "ui-monospace, monospace", fontSize: 10 }}
        >
          built for bilbies
        </text>
        <line
          x1="260"
          y1="120"
          x2="295"
          y2="120"
          stroke="#cec8be"
          strokeWidth="1"
        />
        <polygon points="295,116 303,120 295,124" fill="#cec8be" />
        <rect
          x="305"
          y="55"
          width="195"
          height="130"
          rx="2"
          fill="none"
          stroke="#cec8be"
          strokeWidth="0.8"
        />
        <text
          x="315"
          y="76"
          fill="#918b82"
          style={{ fontFamily: "ui-monospace, monospace", fontSize: 10 }}
        >
          original plan
        </text>
        <text
          x="315"
          y="92"
          fill="#4a4540"
          style={{
            fontFamily: "Georgia, ui-serif, serif",
            fontSize: 12,
            fontStyle: "italic",
          }}
        >
          clear entire area,
        </text>
        <text
          x="315"
          y="108"
          fill="#4a4540"
          style={{
            fontFamily: "Georgia, ui-serif, serif",
            fontSize: 12,
            fontStyle: "italic",
          }}
        >
          reintroduce bilbies
        </text>
        <line
          x1="315"
          y1="120"
          x2="490"
          y2="120"
          stroke="#cec8be"
          strokeWidth="0.5"
          strokeDasharray="3,2"
        />
        <text
          x="315"
          y="138"
          fill="#8b2020"
          style={{ fontFamily: "ui-monospace, monospace", fontSize: 10 }}
        >
          what actually happened
        </text>
        <text
          x="315"
          y="155"
          fill="#4a4540"
          style={{
            fontFamily: "Georgia, ui-serif, serif",
            fontSize: 12,
            fontStyle: "italic",
          }}
        >
          build a fence
        </text>
        <text
          x="315"
          y="171"
          fill="#4a4540"
          style={{
            fontFamily: "Georgia, ui-serif, serif",
            fontSize: 12,
            fontStyle: "italic",
          }}
        >
          inside the fence
        </text>
      </svg>
    </div>
  );
}

export function RamboFoxArticle() {
  return (
    <UnitCircleSectionReveal>
      <div className="unit-circle-article text-[var(--ink)]">
        <div className="mx-auto max-w-[780px] px-[var(--page-pad)] pb-6 pt-8 text-center sm:pb-8 sm:pt-10">
          <p className="mb-5 font-sans text-[0.62rem] uppercase leading-relaxed tracking-[0.24em] text-[var(--ink-muted)] sm:text-[0.65rem]">
            Wildlife · Australia · Case study
          </p>
          <h1 className="font-serif text-[clamp(2rem,6vw,3.4rem)] font-normal leading-[1.1] tracking-[-0.02em] text-[var(--ink)]">
            One fox. Four years. Zero apologies.
          </h1>
          <p className="mx-auto mt-6 max-w-[34rem] text-left text-lg italic leading-relaxed text-[var(--ink-muted)] sm:text-xl">
            A multi-million dollar conservation project cleared 5,800 hectares
            of predators. Almost. One fox — a single, approximately
            seven-kilogram animal — survived everything they threw at him,
            rewrote the project plan, and was never caught.
          </p>
          <div
            className="mx-auto mt-7 h-px w-14 bg-[var(--line)] sm:mt-8"
            aria-hidden
          />
        </div>

        <article className="mx-auto max-w-[min(48rem,100%)] px-[var(--page-pad)] pb-20 pt-2 sm:pb-28">
          <p className="intro-drop border-b border-[var(--line)] pb-8 text-lg leading-[1.82] text-[var(--ink)] sm:text-xl">
            The fence held. The baits failed. The cameras kept seeing the same
            pair of ears. For four and a half years, one outlier fox treated a
            conservation reserve like a final exam he intended to pass.
          </p>

          <RamboFigure
            src={ramboFoxImages.hero}
            alt="Red fox in Australian bush, camera-trap style"
            caption="Pilliga — predator-proof fence, imperfect scorecard."
            priority
            pastel="peach"
          />

          <section data-uc-section className="mt-14">
            <SectionHead num="01" title="The plan was solid" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              In the Pilliga forest of New South Wales, conservation scientists
              built a predator-proof fence enclosing 5,800 hectares. The logic
              was straightforward: seal the perimeter, remove every feral cat
              and fox from inside, then reintroduce the native species —
              bilbies, bettongs, quolls — that had been driven to extinction or
              near-extinction in the region. It was expensive, it was
              methodical, and it had worked in similar projects elsewhere.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Within a year, they had cleared the enclosure. Every predator
              they&apos;d detected was gone. The fence was holding. They were
              ready to move to the next phase.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Except one animal had not been removed. He had simply not been
              caught.
            </p>
          </section>

          <RamboFigure
            src={ramboFoxImages.secondary}
            alt="Fox in grass — Rambo, Pilliga conservation area"
            caption="One animal, years of avoidance — not luck, something like inference."
            pastel="lime"
          />

          <section data-uc-section className="mt-14">
            <SectionHead num="02" title="How Rambo became Rambo" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The scientists named him{" "}
              <a
                href={WIKI_RAMBO_FOX}
                target="_blank"
                rel="noopener noreferrer"
                className="article-euclid-link"
              >
                Rambo
              </a>
              . It was not meant as a compliment. It was an acknowledgment that
              the standard playbook — traps, baits, dogs, stakeouts — was not
              working on this particular animal, and that something more unusual
              was happening.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The working theory is that Rambo&apos;s wariness was learned rather
              than innate. He is believed to have watched his mother caught in a
              trap and witnessed a sibling take poison bait. Whether or not that
              specific biography is accurate, the behavioral outcome was clear:
              he had developed an unusually precise model of human hunting
              methods and an unusually strong reluctance to engage with
              anything that fit that model.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              He didn&apos;t avoid traps by luck. He navigated around them
              consistently, over years, at a rate that ruled out chance. He had
              learned the signature of a threat and generalized it reliably.
              That&apos;s not instinct — that&apos;s something closer to
              inference.
            </p>
            <p className="mt-4 text-sm italic leading-relaxed text-[var(--ink-muted)]">
              Names, dates, and tallies here track the public record collated in
              the Wikipedia article on{" "}
              <a
                href={WIKI_RAMBO_FOX}
                target="_blank"
                rel="noopener noreferrer"
                className="article-euclid-link not-italic"
              >
                Rambo (fox)
              </a>{" "}
              and the sources it cites.
            </p>
            <blockquote className="my-8 border-l-2 border-[var(--ink)] py-1 pl-6 font-serif text-[1.2rem] italic leading-[1.5] text-[var(--ink-muted)]">
              He didn&apos;t just become cautious. He became, as far as the
              scientists could tell, a student of the specific ways humans try
              to catch foxes.
            </blockquote>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead num="03" title="The numbers" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Over four and a half years, the project threw its full arsenal at
              a single fox. The tally, when it was eventually reported, reads
              less like a field note and more like a failure resume:
            </p>
            <div className="my-8 grid grid-cols-1 gap-px border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
              {[
                {
                  n: "10,400",
                  label: "Traps set",
                  desc: "Spring-loaded cages distributed across the enclosure. Rambo appears to have treated them as navigational landmarks.",
                },
                {
                  n: "3,500",
                  label: "Poison baits",
                  desc: "Every one declined. Not occasionally — every single time, for four and a half years.",
                },
                {
                  n: "73",
                  label: "Night stakeouts",
                  desc: "Trained personnel, night vision, complete silence. He never appeared during a stakeout.",
                },
                {
                  n: "55",
                  label: "Days of scent-tracking dogs",
                  desc: "Specialist tracking animals bred over centuries for exactly this purpose. He lost them every time.",
                },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-[color-mix(in_srgb,var(--pastel-peach)_35%,white)] p-5 sm:p-6"
                >
                  <span className="block font-mono text-[2rem] leading-none tracking-tight text-[var(--ink)]">
                    {s.n}
                  </span>
                  <span className="mt-2 block font-sans text-[0.6rem] uppercase tracking-[0.12em] text-[var(--ink-muted)]">
                    {s.label}
                  </span>
                  <p className="mt-2 text-[0.85rem] italic leading-relaxed text-[var(--ink-muted)]">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The cumulative cost of this effort was never published separately,
              but it was embedded in a project that ran to several million
              dollars. A meaningful fraction of that money was spent, directly or
              indirectly, on one fox who was not interested in being caught.
            </p>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead num="04" title="How the project adapted" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Here is what makes the Rambo case genuinely strange, beyond the
              raw numbers: he didn&apos;t just survive. He caused a
              restructuring of the entire conservation project around his
              continued presence.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              You cannot release bilbies into an enclosure that contains a fox
              who has spent years perfecting his hunting technique under low-prey
              conditions. The bilbies would be gone within weeks. So the
              scientists, faced with a project that couldn&apos;t proceed as
              designed, built a second, smaller secure zone inside the main one — a
              sanctuary within the sanctuary — specifically to exclude the one
              animal they couldn&apos;t remove.
            </p>
            <EnclosureDiagram />
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The project didn&apos;t fail exactly — the bilbies were eventually
              reintroduced, in the inner zone, and the conservation goals were
              partially met. But the original plan had assumed a cleared
              enclosure. What they ended up with was a cleared enclosure
              containing one unclearable apex predator, plus a smaller clean
              zone surrounded by him. Rambo had effectively been given the rest.
            </p>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead num="05" title="Science vs. fox — the scorecard" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              It would be easy to frame this as a story about science failing.
              That&apos;s not quite right. The scientists documented everything,
              adapted methodically, and achieved partial success. The project
              produced useful data about individual animal behavior and the
              limits of standard eradication protocols. What they couldn&apos;t
              do was catch the fox. Those are different things.
            </p>
            <div className="my-8 overflow-hidden border border-[var(--line)]">
              <div className="grid grid-cols-2 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--pastel-lavender)_40%,white)]">
                <span className="border-r border-[var(--line)] px-4 py-3 font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
                  Science tried
                </span>
                <span className="px-4 py-3 font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
                  What happened
                </span>
              </div>
              {[
                [
                  "Spring-loaded cage traps, 10,400 placements",
                  "Avoided without exception",
                ],
                [
                  "Sodium fluoroacetate (1080) poison baits",
                  "Declined every time",
                ],
                [
                  "73 nights of manned stakeouts with night vision",
                  "Did not appear on any stakeout night",
                ],
                [
                  "55 days of trained scent-tracking dogs",
                  "Evaded consistently",
                ],
                [
                  "Aerial surveillance, camera traps, motion sensors",
                  "Documented, never caught",
                ],
                [
                  "Rebuilt the project around his presence",
                  "Rambo remained at large",
                ],
              ].map(([a, b], i) => (
                <div
                  key={i}
                  className="grid grid-cols-2 border-b border-[var(--line)] last:border-b-0"
                >
                  <div className="border-r border-[var(--line)] px-4 py-3 text-[0.88rem] leading-relaxed text-[var(--ink)]">
                    {a}
                  </div>
                  <div className="px-4 py-3 text-[0.88rem] italic leading-relaxed text-[#8b2020]">
                    {b}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead num="06" title="How it ended — or didn't" />
            <ul className="relative m-0 list-none pl-0">
              <span
                className="absolute bottom-2 left-[5px] top-2 z-0 w-px bg-[var(--line)]"
                aria-hidden
              />
              {[
                {
                  y: "2017",
                  t: "Rambo first identified as a persistent holdout",
                  b: "All other predators have been removed. Trail cameras confirm one fox is still present and active.",
                },
                {
                  y: "2017–2021",
                  t: "Four and a half years of eradication attempts",
                  b: "Traps, baits, dogs, stakeouts. The project logs document each failed attempt. The fox is seen regularly but never caught.",
                },
                {
                  y: "2019",
                  t: "Second inner sanctuary constructed",
                  b: "Scientists concede the broader enclosure and build a smaller exclusion zone for native species reintroduction.",
                },
                {
                  y: "2022",
                  t: "Rambo disappears during flooding",
                  b: "Severe flooding hits the Pilliga region. Rambo's camera detections cease. He is presumed dead. His body is never found.",
                },
              ].map((row, i, arr) => (
                <li
                  key={row.y}
                  className={`relative pb-6 pl-8 ${i === arr.length - 1 ? "pb-0" : ""}`}
                >
                  <span
                    className={`absolute left-[2px] top-2 h-[7px] w-[7px] rounded-full ${
                      i === arr.length - 1 ? "bg-[var(--ink)]" : "bg-[var(--ink-muted)]"
                    }`}
                    aria-hidden
                  />
                  <span className="mb-1 block font-mono text-[0.58rem] uppercase tracking-[0.1em] text-[var(--ink-muted)]">
                    {row.y}
                  </span>
                  <span className="mb-1 block font-serif text-[0.92rem] font-medium text-[var(--ink)]">
                    {row.t}
                  </span>
                  <span className="text-[0.88rem] leading-relaxed text-[var(--ink-muted)]">
                    {row.b}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The absence of a body is, practically speaking, just an absence of
              a body — foxes don&apos;t leave convenient carcasses. But it does
              mean the story has no definitive ending, which feels appropriate for
              an animal who spent four years refusing to give the scientists
              anything definitive.
            </p>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead num="07" title="What the case actually shows" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Conservation biology operates on models: population-level behavior,
              average trap uptake rates, standard bait acceptance figures. These
              models work well when applied to populations. They break down when
              confronted with a single individual whose behavior sits at the
              extreme tail of the distribution — an animal who, by chance or by
              learning or by some combination, falls entirely outside the
              statistical envelope the models were built on. (
              <Link
                href="/articles/unit-circle"
                className="text-[var(--ink)] underline decoration-[var(--line)] underline-offset-[0.2em] transition-colors hover:decoration-[var(--ink)]"
              >
                On Abakcus, we talk about another kind of pattern
              </Link>{" "}
              — one you draw on a circle instead of a landscape.)
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Rambo wasn&apos;t supernatural. He was an outlier. The problem is
              that conservation fencing projects don&apos;t have a reliable
              protocol for outliers, because outliers, by definition, don&apos;t
              behave the way the protocol assumes. You can&apos;t design a trap
              that catches every possible fox. You can only design one that
              catches most foxes. Most is usually good enough. In this case, it
              wasn&apos;t.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The broader point is uncomfortable but not particularly surprising:
              complex adaptive systems — animals, ecosystems, populations —
              generate individuals that defy the models built to predict them. The
              models aren&apos;t wrong. They just can&apos;t account for every
              fox.
            </p>
            <blockquote className="my-8 border-l-2 border-[var(--ink)] py-1 pl-6 font-serif text-[1.2rem] italic leading-[1.5] text-[var(--ink-muted)]">
              The scientists were not outwitted in any deep sense. They were
              simply confronted with the fact that &quot;most animals&quot; and
              &quot;this animal&quot; are not the same thing.
            </blockquote>
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The Pilliga project ultimately succeeded in establishing a breeding
              population of bilbies. The science worked. One fox, in one
              enclosure, for four and a half years, also worked — at a completely
              different problem, with completely different tools, against
              significantly better-funded opposition. Both of those things are
              true at the same time.
            </p>
            <p className="mt-10 border-t border-[var(--line-soft)] pt-8 text-sm leading-relaxed text-[var(--ink-muted)]">
              Elsewhere on Abakcus:{" "}
              <Link
                href="/articles/fibonacci-shelf"
                className="font-medium text-[var(--ink)] underline decoration-[var(--line)] underline-offset-[0.2em] hover:decoration-[var(--ink)]"
              >
                A shelf built on a sequence
              </Link>
              {" · "}
              <Link
                href="/articles/billingsley-euclid"
                className="font-medium text-[var(--ink)] underline decoration-[var(--line)] underline-offset-[0.2em] hover:decoration-[var(--ink)]"
              >
                Paper that stands up
              </Link>
              {" — "}
              slow reads, different terrains.
            </p>
          </section>
        </article>

        <footer className="border-t border-[var(--line-soft)] px-[var(--page-pad)] py-10 text-center font-sans text-sm tracking-[0.12em] text-[var(--ink-muted)]">
          Wildlife · Australia · Pilliga · 2017–2022
        </footer>
      </div>
    </UnitCircleSectionReveal>
  );
}
