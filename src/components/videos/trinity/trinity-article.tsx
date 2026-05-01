import { ArticleProseLink } from "@/components/articles/article-prose-link";

const DARK = "#0f0e0c";
const DARK_SURFACE = "#1a1816";
const ASH = "#4a4540";
const ASH_DIM = "#7a7568";
const SEPIA = "#c8b89a";
const SEPIA_LIGHT = "#e8dfd0";

export function TrinityArticle() {
  return (
    <div className="text-[var(--ink)]">
      {/* ── HERO ── */}
      <header className="relative overflow-hidden pb-0" style={{ background: DARK }}>
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background: `radial-gradient(ellipse 90% 60% at 50% 40%, ${DARK} 0%, #050504 100%)`,
          }}
        />
        <div className="relative z-10 mx-auto max-w-[var(--page-max)] px-[var(--page-pad)]">
          <div className="flex flex-col items-center gap-8 py-16 text-center md:py-20">
            <p
              className="font-mono text-[0.62rem] uppercase tracking-[0.26em]"
              style={{ color: ASH_DIM }}
            >
              Video &nbsp;·&nbsp; Orbital Mechanics &nbsp;·&nbsp; 2015
            </p>
            <h1
              className="font-serif text-[clamp(2.8rem,9vw,6rem)] font-medium italic leading-[1.0] tracking-tight"
              style={{ color: "#f0ebe0" }}
            >
              Trinity
            </h1>
            <p
              className="max-w-md font-serif text-lg italic leading-relaxed"
              style={{ color: "rgba(200,184,154,0.6)" }}
            >
              Every nuclear detonation in human history, 1945–2010.
              Two thousand flashes on a map. Fourteen minutes.
            </p>
          </div>

          {/* ── PRIMARY VIDEO ── */}
          <div className="pb-10">
            <div
              className="overflow-hidden"
              style={{ boxShadow: "0 24px 60px -12px rgba(0,0,0,0.9)" }}
            >
              <div className="relative w-full bg-black" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://player.vimeo.com/video/135580602"
                  title="Trinity — Every nuclear detonation in history — Orbital Mechanics"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div
                className="flex items-center justify-between px-5 py-3"
                style={{ background: DARK_SURFACE }}
              >
                <span
                  className="font-mono text-[0.6rem] uppercase tracking-[0.12em]"
                  style={{ color: "rgba(200,184,154,0.35)" }}
                >
                  Trinity — Orbital Mechanics, 2015
                  &nbsp;·&nbsp; atmospheric: red
                  &nbsp;·&nbsp; underground: yellow
                  &nbsp;·&nbsp; underwater: blue
                </span>
                <a
                  href="https://vimeo.com/135580602"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[0.6rem] uppercase tracking-[0.12em] transition-opacity hover:opacity-80"
                  style={{ color: SEPIA }}
                >
                  Vimeo →
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── BODY ── */}
      <article className="mx-auto max-w-[680px] px-[var(--page-pad)] py-16">

        {/* Eyebrow */}
        <div
          className="mb-10 flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.18em]"
          style={{ color: ASH_DIM }}
        >
          <span>Video · Data Visualization · History</span>
          <span className="flex-1 border-t" style={{ borderColor: SEPIA_LIGHT }} />
        </div>

        {/* Drop-cap opener */}
        <div className="mb-6">
          <p
            className="text-[1.1rem] leading-[1.8]"
            style={{ color: "#3d3a30" }}
          >
            <span
              className="float-left mr-2 mt-1 font-serif font-medium italic leading-[0.82]"
              style={{ fontSize: "4.5rem", color: ASH }}
            >
              A
            </span>
            t 5:29 in the morning on July 16, 1945, in a stretch of New Mexico
            desert called <em>Jornada del Muerto</em> — Journey of the Dead Man —
            a plutonium bomb named the Gadget was detonated from a 100-foot steel
            tower. The flash was visible 160 miles away. The shockwave knocked
            observers to the ground at distances they had calculated to be safe.
            J. Robert Oppenheimer, watching from a bunker, said nothing for a
            long moment. Then the counting began.
          </p>
        </div>

        <p className="mb-6 text-[1.1rem] leading-[1.8]" style={{ color: "#3d3a30" }}>
          This visualization by the Canadian collective Orbital Mechanics —
          released in 2015 to mark the 70th anniversary of the Trinity test —
          plots every recorded nuclear detonation from that morning in New Mexico
          through to North Korea&rsquo;s tests in the late 2000s. Each flash is
          color-coded: atmospheric explosions in red, underground in yellow,
          underwater in blue. Each carries a label: date, country, yield,
          location. The video runs for about fourteen minutes. By the end of it,
          more than two thousand flashes have appeared on the map.
        </p>

        {/* Counts table */}
        <div
          className="mb-10 overflow-hidden border"
          style={{ borderColor: SEPIA }}
        >
          <div
            className="flex justify-between px-6 py-3.5 font-mono text-[0.625rem] uppercase tracking-[0.15em]"
            style={{ background: DARK, color: "rgba(200,184,154,0.45)" }}
          >
            <span>Nuclear Tests by Country — Approximate Record</span>
            <span>Total: 2,056+</span>
          </div>
          {[
            { country: "United States", count: "1,054", pct: 100 },
            { country: "Soviet Union", count: "715", pct: 68 },
            { country: "France", count: "210", pct: 20 },
            { country: "United Kingdom", count: "45", pct: 4 },
            { country: "China", count: "45", pct: 4 },
            { country: "Pakistan / North Korea", count: "~9", pct: 1 },
          ].map((row, i, arr) => (
            <div
              key={row.country}
              className="grid items-center gap-3 px-6 py-3"
              style={{
                gridTemplateColumns: "1fr 72px 80px",
                borderBottom: i < arr.length - 1 ? `1px solid ${SEPIA_LIGHT}` : "none",
              }}
            >
              <span className="font-serif italic text-sm" style={{ color: "#3d3a30" }}>
                {row.country}
              </span>
              <span className="text-right font-mono text-sm font-medium" style={{ color: "#1a1710" }}>
                {row.count}
              </span>
              <div
                className="h-1.5 rounded-full overflow-hidden"
                style={{ background: SEPIA_LIGHT }}
              >
                <div
                  className="h-full rounded-full"
                  style={{ width: `${row.pct}%`, background: ASH }}
                />
              </div>
            </div>
          ))}
        </div>

        <p className="mb-6 text-[1.1rem] leading-[1.8]" style={{ color: "#3d3a30" }}>
          The most striking thing about the visualization is not any single flash.
          It is the density. During the 1950s the map lights up with a frequency
          that looks almost casual — test after test after test across Nevada,
          across Kazakhstan, across the Pacific atolls. The pace of detonation in
          those years was roughly one every ten days. The United States alone
          conducted more than a thousand nuclear tests over the course of the Cold
          War. The Soviet Union conducted more than seven hundred. France tested in
          Algeria and then French Polynesia. The United Kingdom tested in
          Australia, on aboriginal land, without informing the people who lived there.
        </p>

        {/* Sidebar note */}
        <div
          className="float-right mb-6 ml-8 w-[190px] border p-4 text-sm italic leading-[1.55]"
          style={{ borderColor: SEPIA, color: ASH_DIM }}
        >
          <span
            className="mb-2 block font-mono text-[0.6rem] not-italic uppercase tracking-[0.1em]"
            style={{ color: ASH }}
          >
            —
          </span>
          The largest single detonation in the video — and in history — is the
          Soviet Union&rsquo;s Tsar Bomba, October 1961. Yield: 50 megatons. That is
          3,300 times the power of the bomb dropped on Hiroshima. Its fireball
          reached a diameter of eight kilometers. The shockwave circled the Earth
          three times.
        </div>

        {/* Pull quote */}
        <div
          className="my-12 border-l-[3px] pl-7"
          style={{ borderColor: ASH }}
        >
          <blockquote
            className="mb-3 font-serif text-[1.4rem] italic leading-[1.48]"
            style={{ color: "#1a1710" }}
          >
            The visualization does not editorialize. It does not need to. The
            accumulation is the argument.
          </blockquote>
          <cite
            className="font-mono text-[0.68rem] not-italic uppercase tracking-[0.1em]"
            style={{ color: ASH_DIM }}
          >
            On what the format achieves
          </cite>
        </div>

        {/* Section break */}
        <div
          className="my-12 flex items-center gap-4 font-mono text-sm"
          style={{ color: SEPIA }}
        >
          <span className="flex-1 border-t" style={{ borderColor: SEPIA_LIGHT }} />
          §
          <span className="flex-1 border-t" style={{ borderColor: SEPIA_LIGHT }} />
        </div>

        {/* Inset */}
        <div
          className="mb-10 border p-8"
          style={{ background: "#eee9e0", borderColor: SEPIA }}
        >
          <p
            className="mb-3 font-mono text-[0.625rem] uppercase tracking-[0.15em]"
            style={{ color: ASH_DIM }}
          >
            On the Format — What Data Visualization Does That Language Cannot
          </p>
          <p className="mb-4 text-base leading-relaxed" style={{ color: "#3d3a30" }}>
            A fact stated once is absorbed and filed. A fact stated two thousand
            times, in sequence, over fourteen minutes, on a map, does something
            different to the person receiving it. The visualization format makes
            the accumulation legible in a way that no table of numbers can. You
            watch the flashes multiply across Nevada and you understand — not
            intellectually but viscerally — that these were not rare events.
            They were routine.
          </p>
          <p className="text-base leading-relaxed" style={{ color: "#3d3a30" }}>
            Orbital Mechanics is a group of electronic musicians and visual
            artists. The piece was made to mark a 70th anniversary. It is one of
            several visualizations of the same data — Japanese artist{" "}
            <ArticleProseLink href="https://www.ctbto.org/specials/1945-1998-by-isao-hashimoto">
              Isao Hashimoto
            </ArticleProseLink>{" "}
            made an earlier version covering 1945 to 1998. What distinguishes
            Orbital Mechanics&rsquo; version is the sound design: a low, sustained
            electronic score that neither dramatizes nor distances, but holds the
            viewer at the precise register the subject requires.
          </p>
        </div>

        <p className="mb-6 text-[1.1rem] leading-[1.8]" style={{ color: "#3d3a30" }}>
          There is a moment in the video — roughly eight minutes in, during the
          most intense period of Cold War testing — when the map becomes difficult
          to read because there are too many simultaneous flashes. The Nevada Test
          Site and the Soviet test ranges at Semipalatinsk and Novaya Zemlya are
          lighting up in such close succession that the dots overlap. This is not
          a limitation of the visualization. It is its most precise statement. At
          the height of the arms race, the rate of detonation outpaced the
          capacity of a map to represent individual events.
        </p>

        <p className="mb-6 text-[1.1rem] leading-[1.8]" style={{ color: "#3d3a30" }}>
          The video ends with the most recent tests on record at the time of its
          production — North Korea, 2006 and 2009, two solitary flashes in the
          far east of the map, long after the others have stopped. The silence
          after them is different from the silence before the first flash. Before
          Trinity, there was simply no such thing. After North Korea&rsquo;s tests,
          there is the knowledge that the capability exists in nine countries and
          that the map could light up again.
        </p>

        <p className="mb-6 text-[1.1rem] leading-[1.8]" style={{ color: "#3d3a30" }}>
          The video has been described, widely, as chilling. It is. But the
          specific quality of the chill is worth naming: it is not the horror of
          a single event but the weight of a pattern. Two thousand flashes, each
          representing a deliberate human decision to detonate a nuclear device,
          is not an accident of history. It is a record of choices made, over
          seven decades, by governments acting in what they considered to be their
          national interest. The map shows where those interests were located.
          The count shows how many times they converged on the same conclusion.
        </p>

        {/* Footer rule */}
        <hr className="mb-8 mt-16 border-t" style={{ borderColor: SEPIA }} />
        <div
          className="flex justify-between font-mono text-[0.65rem] uppercase tracking-[0.08em]"
          style={{ color: ASH_DIM }}
        >
          <span>abakcus.com</span>
          <span>Video &nbsp;·&nbsp; Orbital Mechanics &nbsp;·&nbsp; 2015</span>
        </div>
      </article>
    </div>
  );
}
