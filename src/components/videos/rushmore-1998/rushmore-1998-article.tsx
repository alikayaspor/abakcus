import Image from "next/image";
import { ArticleProseLink } from "@/components/articles/article-prose-link";

const POSTER =
  "https://pub-676f738e0a3948d19dc9defd954e36d5.r2.dev/Rushmore.jpg";

const CRIMSON = "#9b2335";
const CRIMSON_DIM = "#7a1b2a";
const DARK = "#1a0a0c";
const DARK_SURFACE = "#211014";

function MetaCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 px-4 py-3 border-r border-white/[0.07] last:border-r-0">
      <span
        className="font-mono text-[0.55rem] uppercase tracking-[0.18em]"
        style={{ color: "rgba(220,180,185,0.45)" }}
      >
        {label}
      </span>
      <span
        className="font-serif text-[0.9rem] italic"
        style={{ color: "rgba(248,240,242,0.82)" }}
      >
        {value}
      </span>
    </div>
  );
}

function Divider() {
  return (
    <div className="my-12 flex items-center gap-4">
      <span className="h-px flex-1 bg-[var(--line)]" />
      <span
        className="font-mono text-[0.6rem] uppercase tracking-[0.2em]"
        style={{ color: CRIMSON_DIM }}
      >
        §
      </span>
      <span className="h-px flex-1 bg-[var(--line)]" />
    </div>
  );
}

const ACTIVITIES = [
  "Beekeepers Club — Founder & President",
  "Fencing Team — Captain",
  "Max Fischer Players — Founder, Director, Lead Playwright",
  "Yankee Review — Publisher",
  "French Club — President",
  "Stamp & Coin Club — President",
  "Astronomy Society — Founder",
  "Academic Decathlon — …and eight others",
];

export function Rushmore1998Article() {
  return (
    <div className="text-[var(--ink)]">
      {/* ── CINEMATIC HERO ── */}
      <header className="relative overflow-hidden pb-0" style={{ background: DARK }}>
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 90% 70% at 55% 50%, ${DARK} 0%, #0b0305 100%)`,
            opacity: 0.9,
          }}
        />

        <div className="relative z-10 mx-auto max-w-[var(--page-max)] px-[var(--page-pad)]">
          <div className="flex flex-col items-center gap-10 py-16 text-center md:flex-row md:items-start md:gap-16 md:py-24 md:text-left">

            {/* Poster */}
            <div className="w-44 shrink-0 sm:w-56 md:w-64">
              <div
                className="relative overflow-hidden rounded-sm"
                style={{
                  aspectRatio: "2/3",
                  boxShadow:
                    "0 40px 100px -20px rgba(0,0,0,0.85), 0 0 0 1px rgba(155,35,53,0.18)",
                }}
              >
                <Image
                  src={POSTER}
                  alt="Rushmore — Wes Anderson, 1998"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width:768px) 176px, 256px"
                />
              </div>
            </div>

            {/* Title block */}
            <div className="max-w-xl">
              <p
                className="font-mono text-[0.62rem] uppercase tracking-[0.26em]"
                style={{ color: CRIMSON }}
              >
                Film &nbsp;·&nbsp; Movie &nbsp;·&nbsp; 1998 &nbsp;·&nbsp; USA
              </p>

              <h1 className="mt-4 font-serif text-[clamp(2.8rem,8vw,5rem)] font-medium leading-[1.0] tracking-tight text-[#f7f0f1] italic">
                Rushmore
              </h1>

              <p
                className="mt-3 font-mono text-[0.75rem] tracking-[0.06em]"
                style={{ color: "rgba(220,180,185,0.5)" }}
              >
                Dir. Wes Anderson
              </p>

              <p
                className="mt-5 font-serif text-base italic leading-relaxed sm:text-lg"
                style={{ color: "rgba(228,200,205,0.65)" }}
              >
                Jason Schwartzman &nbsp;·&nbsp; Bill Murray &nbsp;·&nbsp; Olivia Williams
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="https://www.imdb.com/title/tt0128445/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] transition-opacity duration-200 hover:opacity-80"
                  style={{ background: CRIMSON_DIM, color: "#f7f0f1" }}
                >
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  View on IMDb
                </a>
                <a
                  href="https://amzn.to/48vO7uO"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] transition-opacity duration-200 hover:opacity-80"
                  style={{
                    background: "rgba(155,35,53,0.18)",
                    color: "rgba(240,200,205,0.85)",
                    border: "1px solid rgba(155,35,53,0.3)",
                  }}
                >
                  Watch on Amazon →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── META STRIP ── */}
        <div
          className="relative z-10 border-t"
          style={{
            background: DARK_SURFACE,
            borderColor: "rgba(155,35,53,0.12)",
          }}
        >
          <div className="mx-auto max-w-[var(--page-max)] px-[var(--page-pad)]">
            <div
              className="grid grid-cols-2 divide-x sm:grid-cols-4"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}
            >
              <MetaCell label="Director" value="Wes Anderson" />
              <MetaCell label="Year" value="1998" />
              <MetaCell label="IMDb" value="7.6 / 10" />
              <MetaCell label="Runtime" value="93 min" />
            </div>
          </div>
        </div>

        {/* ── TRAILER ── */}
        <div className="relative z-10 mx-auto max-w-[var(--page-max)] px-[var(--page-pad)] pb-10 pt-6">
          <div
            className="overflow-hidden rounded-lg"
            style={{ boxShadow: "0 24px 60px -12px rgba(0,0,0,0.7)" }}
          >
            <div className="relative w-full bg-black" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/6ZVdXXG3KN8"
                title="Rushmore (1998) — Official Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <p
            className="mt-3 text-center font-mono text-[0.6rem] uppercase tracking-[0.14em]"
            style={{ color: "rgba(220,180,185,0.7)" }}
          >
            Rushmore — official trailer, 1998
          </p>
        </div>
      </header>

      {/* ── ARTICLE BODY ── */}
      <article
        className="mx-auto max-w-[720px] px-[var(--page-pad)] pt-16 pb-24"
        itemScope
        itemType="https://schema.org/Review"
      >
        <meta itemProp="itemReviewed" content="Rushmore directed by Wes Anderson" />
        <meta itemProp="author" content="Abakcus" />

        {/* Eyebrow tags */}
        <div className="mb-8 flex flex-wrap items-center gap-2">
          <span
            className="rounded-full px-2.5 py-0.5 font-mono text-[0.58rem] uppercase tracking-[0.14em]"
            style={{
              background: "color-mix(in srgb, var(--pastel-rose) 55%, white)",
              color: CRIMSON_DIM,
            }}
          >
            Film
          </span>
          <span
            className="rounded-full px-2.5 py-0.5 font-mono text-[0.58rem] uppercase tracking-[0.14em]"
            style={{
              background: "color-mix(in srgb, var(--pastel-rose) 55%, white)",
              color: CRIMSON_DIM,
            }}
          >
            Movie
          </span>
          <span className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
            Wes Anderson &nbsp;·&nbsp; 1998
          </span>
        </div>

        {/* ── DROP-CAP OPEN ── */}
        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          <span
            className="float-left mr-2 mt-1 font-serif text-[4.5rem] font-bold leading-[0.78] sm:text-[5.2rem]"
            style={{ color: CRIMSON }}
            aria-hidden="true"
          >
            M
          </span>
          ax Fischer is failing every class at Rushmore Academy. He is also the founder of
          the Beekeepers Club, the Fencing Team, the Astronomy Society, the Yankee Review,
          the Max Fischer Players, and eleven other organizations. He is not a bad student.
          He is a student who has decided, without quite articulating it, that the school
          exists for him rather than the other way around. This distinction matters more
          than any grade.
        </p>

        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          <em>Rushmore</em> is Wes Anderson&apos;s second film, made in 1998 and co-written with Owen
          Wilson. It stars Jason Schwartzman in his debut as Max, Bill Murray as Herman Blume — a
          wealthy industrialist who is in the slow process of disappearing from his own life —
          and Olivia Williams as Rosemary Cross, a first-grade teacher at the school whom both
          of them fall for. The love triangle is the plot. But what the film is actually about
          is something older and stranger: the question of what it means to be a person who
          cares more than is reasonable about the things he cares about.
        </p>

        {/* ── YEARBOOK BLOCK ── */}
        <div className="my-10 overflow-hidden border border-[var(--line)]">
          <div
            className="px-6 py-3.5 font-mono text-[0.6rem] uppercase tracking-[0.18em]"
            style={{ background: DARK, color: "rgba(220,180,185,0.6)" }}
          >
            Max Fischer — Rushmore Academy — Extracurricular Activities
          </div>
          {ACTIVITIES.map((activity, i) => (
            <div
              key={i}
              className="flex gap-4 border-b border-[var(--line)] px-6 py-2.5 last:border-b-0"
            >
              <span className="w-5 shrink-0 pt-0.5 font-mono text-[0.65rem] text-[var(--ink-muted)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-serif text-[0.95rem] italic text-[var(--ink-soft)]">
                {activity}
              </span>
            </div>
          ))}
        </div>

        <Divider />

        {/* ── SIDEBAR NOTE ── */}
        <div className="clear-both mb-8 border border-[var(--line)] px-5 py-4 sm:float-right sm:mb-4 sm:ml-8 sm:w-[220px] sm:px-4 sm:py-4">
          <span
            className="mb-2 block font-mono text-[0.6rem] uppercase tracking-[0.14em]"
            style={{ color: CRIMSON_DIM }}
          >
            —
          </span>
          <p className="font-serif text-[0.82rem] italic leading-[1.6] text-[var(--ink-muted)]">
            Anderson shot the film at his own high school — St. John&apos;s School in
            Houston, Texas. He delivered directions to Bill Murray in a whisper on
            the first day of shooting, afraid the actor would shoot him down. Murray
            later wrote Anderson a blank check when Disney refused to fund a helicopter shot.
          </p>
        </div>

        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          The film is structured in five acts, like a play — which is appropriate, because Max
          experiences his entire life as a production he is directing. Every problem is a
          staging challenge. Every rival is a cast member who has gone off-script.
          When he is expelled from Rushmore and enrolled in public school, he does not
          crumble. He builds a new theater and begins rehearsals. The school is not
          the point. The making is the point.
        </p>

        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          This is where <em>Rushmore</em> quietly earns its place among films about education —
          not because it is a film about a good teacher (though Rosemary Cross is one,
          even in her grief), but because it asks what school is actually for.
          Max is failing by every institutional metric. He cannot pass Latin. But he{" "}
          <em>saved</em> Latin — it was being cut from the curriculum, and he fought to
          keep it — which is the kind of paradox that most school systems are not designed
          to process. It is very close to what{" "}
          <ArticleProseLink href="/articles/feynman-math-education" className="article-euclid-link">
            Richard Feynman kept arguing
          </ArticleProseLink>{" "}
          about: that genuine care for a subject and formal success within a subject are
          not the same thing, and a system that cannot tell them apart is not measuring
          what it thinks it is measuring.
        </p>

        {/* ── PULL QUOTE ── */}
        <blockquote
          className="my-10 border-l-[3px] py-1 pl-6"
          style={{ borderColor: CRIMSON_DIM }}
        >
          <p className="font-serif text-[1.2rem] italic leading-[1.65] text-[var(--ink)] sm:text-[1.3rem]">
            &ldquo;I saved Latin. What did you ever do?&rdquo;
          </p>
          <cite className="mt-3 block font-mono text-[0.65rem] uppercase tracking-[0.12em] not-italic text-[var(--ink-muted)]">
            Max Fischer to Herman Blume — Rushmore, 1998
          </cite>
        </blockquote>

        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          Herman Blume is the film&apos;s other education. He is what happens when you stop
          caring about the things you care about — when competence replaces passion so
          gradually and completely that you can no longer remember which came first.
          He is rich, successful, and entirely absent. His twin sons ignore him. He
          smokes in the school swimming pool at a student event and watches the children
          with the expression of a man observing weather. When he meets Max, something
          in him wakes up that he had filed away under &ldquo;adolescence.&rdquo; Max irritates him,
          impresses him, and reminds him — in no particular order — that having opinions
          about things is not actually embarrassing.
        </p>

        {/* ── INSET: On Teaching, Sideways ── */}
        <div
          className="my-10 border-l-4 border border-[var(--line)] px-7 py-6 sm:px-8 sm:py-7"
          style={{
            borderLeftColor: CRIMSON_DIM,
            background: "color-mix(in srgb, var(--pastel-rose) 22%, white)",
          }}
        >
          <p
            className="mb-5 font-mono text-[0.58rem] uppercase tracking-[0.18em]"
            style={{ color: CRIMSON_DIM }}
          >
            On Teaching, Sideways
          </p>
          <p className="mb-4 font-serif text-[0.97rem] leading-[1.8] text-[var(--ink-muted)] sm:text-[1.02rem]">
            Rosemary Cross teaches first grade. She is kind, composed, and carrying a
            private loss — her husband, who died young — that gives her a stillness
            the rest of the film keeps circling without quite landing on. She is not
            the inspirational teacher cinema has codified: no desk-standing, no
            breakthrough speeches, no moment where the difficult student finally
            understands.
          </p>
          <p className="font-serif text-[0.97rem] leading-[1.8] text-[var(--ink-muted)] sm:text-[1.02rem]">
            What she does instead is more interesting. She takes Max seriously enough
            to tell him the truth. Not cruelly, but clearly: he is fifteen, she is
            an adult, the thing he feels is real but the situation is not possible.
            Most teacher characters either dismiss the student or enable them. She does
            neither. She holds the line with enough gentleness that Max can eventually
            find the line himself.
          </p>
        </div>

        <Divider />

        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          Anderson and Wilson&apos;s screenplay operates on the principle that small specific
          details carry more weight than grand gestures. Both Max and Blume underline
          things they find important — Max in a hymn book, Blume in his chapel speech.
          This single visual rhyme, noticed only if you&apos;re paying attention, tells you
          everything about why these two people find each other. They are both people
          who underline things. In a world that mostly skims, this is enough. It is the
          same instinct that drives{" "}
          <ArticleProseLink href="/articles/feynman-technique" className="article-euclid-link">
            the Feynman technique
          </ArticleProseLink>
          : if you cannot explain it simply, you found the edge of what you actually know,
          and that edge is worth marking.
        </p>

        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          The soundtrack — British Invasion tracks by The Kinks, The Who, Cat Stevens,
          The Faces — does not comment on the action in the way film scores usually do.
          It plays as if it is the music Max has in his head: slightly too grand for the
          circumstances, perfectly suited to how he experiences them. The famous final
          scene, where Max and Rosemary dance to &ldquo;Ooh La La&rdquo; by The Faces, works
          because by that point the film has earned the feeling that the music and the
          moment belong to each other. The lyrics —{" "}
          <em>I wish that I knew what I know now, when I was younger</em> — do not belong
          to Max. They belong to everyone watching him.
        </p>

        <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          <em>Rushmore</em> holds a 90% on Rotten Tomatoes and an IMDb rating of 7.6. It launched
          Schwartzman&apos;s career and gave Bill Murray a second one. It won Anderson the
          Independent Spirit Award for Best Director. The Criterion Collection put it out,
          which is the film industry&apos;s way of saying: this one, specifically, is worth
          keeping. It is a film about the stubborn dignity of caring about things —
          a quality{" "}
          <ArticleProseLink href="/videos/los-cronocrimenes" className="article-euclid-link">
            the best films quietly share
          </ArticleProseLink>
          , regardless of genre or budget.
        </p>

        {/* ── VERDICT ── */}
        <div
          className="mt-12 flex gap-5 rounded-xl border border-[var(--line)] px-6 py-6 sm:px-8 sm:py-7"
          style={{
            background: "color-mix(in srgb, var(--pastel-rose) 18%, white)",
          }}
        >
          <span
            className="shrink-0 pt-0.5 text-2xl leading-none tracking-widest"
            style={{ color: CRIMSON_DIM }}
          >
            ★★★★★
          </span>
          <div>
            <p className="font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              In short
            </p>
            <p className="mt-2 font-serif text-base italic leading-relaxed text-[var(--ink-muted)] sm:text-[1.05rem]">
              Ninety-three minutes. A student who fails everything and saves the thing he loves.
              Wes Anderson&apos;s best argument that how you spend your attention is who you are.
            </p>
          </div>
        </div>

        {/* ── FOOTER NOTE ── */}
        <p className="mt-12 text-xs leading-relaxed text-[var(--ink-muted)]">
          <a
            href="https://www.imdb.com/title/tt0128445/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-[var(--ink)]"
          >
            <em>Rushmore</em>
          </a>
          &nbsp;·&nbsp; Dir. Wes Anderson &nbsp;·&nbsp; USA, 1998
          &nbsp;·&nbsp; abakcus.com
        </p>
      </article>
    </div>
  );
}
