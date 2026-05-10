import Image from "next/image";
import { ArticleProseLink } from "@/components/articles/article-prose-link";

const POSTER =
  "https://pub-676f738e0a3948d19dc9defd954e36d5.r2.dev/Good%20Will%20Hunting.webp";

const FOREST = "#2a4a35";
const FOREST_DIM = "#1d3526";
const DARK = "#0b0f0c";
const DARK_SURFACE = "#101610";
const GOLD = "#8fb87a";

function MetaCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 border-r border-white/[0.07] px-4 py-3 last:border-r-0">
      <span
        className="font-mono text-[0.55rem] uppercase tracking-[0.18em]"
        style={{ color: "rgba(180,220,190,0.45)" }}
      >
        {label}
      </span>
      <span
        className="font-serif text-[0.9rem] italic"
        style={{ color: "rgba(235,248,238,0.82)" }}
      >
        {value}
      </span>
    </div>
  );
}

function Divider({ label }: { label: string }) {
  return (
    <div className="my-12 flex items-center gap-4">
      <span className="h-px flex-1 bg-[var(--line)]" />
      <span
        className="font-mono text-[0.58rem] uppercase tracking-[0.2em]"
        style={{ color: FOREST_DIM }}
      >
        {label}
      </span>
      <span className="h-px flex-1 bg-[var(--line)]" />
    </div>
  );
}

export function GoodWillHuntingArticle() {
  return (
    <div className="text-[var(--ink)]">
      {/* ── HERO ── */}
      <header className="relative overflow-hidden pb-0" style={{ background: DARK }}>
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 90% 70% at 55% 50%, ${DARK} 0%, #030805 100%)`,
            opacity: 0.9,
          }}
        />

        <div className="relative z-10 mx-auto max-w-[var(--page-max)] px-[var(--page-pad)]">
          <div className="flex flex-col items-center gap-10 py-16 text-center md:flex-row md:items-start md:gap-16 md:py-24 md:text-left">

            {/* Poster */}
            <div className="w-44 shrink-0 sm:w-56 md:w-64">
              <div
                className="overflow-hidden rounded-sm"
                style={{
                  boxShadow:
                    "0 40px 100px -20px rgba(0,0,0,0.85), 0 0 0 1px rgba(42,74,53,0.3)",
                }}
              >
                <Image
                  src={POSTER}
                  alt="Good Will Hunting — Gus Van Sant, 1997"
                  width={400}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>

            {/* Title block */}
            <div className="max-w-xl">
              <p
                className="font-mono text-[0.62rem] uppercase tracking-[0.26em]"
                style={{ color: FOREST }}
              >
                Film &nbsp;·&nbsp; Drama &nbsp;·&nbsp; 1997 &nbsp;·&nbsp; USA
              </p>

              <h1 className="mt-4 font-serif text-[clamp(2rem,6vw,4rem)] font-medium italic leading-[1.05] tracking-tight text-[#edf8f0]">
                How Do You Like
                <br />
                Them Apples?
              </h1>

              <p
                className="mt-3 font-mono text-[0.75rem] tracking-[0.06em]"
                style={{ color: "rgba(180,220,190,0.5)" }}
              >
                Dir. Gus Van Sant
              </p>

              <p
                className="mt-5 font-serif text-base italic leading-relaxed sm:text-lg"
                style={{ color: "rgba(210,240,218,0.65)" }}
              >
                Matt Damon &nbsp;·&nbsp; Robin Williams &nbsp;·&nbsp; Ben Affleck &nbsp;·&nbsp; Minnie Driver &nbsp;·&nbsp; Stellan Skarsgård
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="https://www.imdb.com/title/tt0119217/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] transition-opacity duration-200 hover:opacity-80"
                  style={{ background: FOREST_DIM, color: "#edf8f0" }}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  View on IMDb
                </a>
                <span
                  className="inline-flex items-center rounded-full px-4 py-2 font-mono text-[0.65rem] uppercase tracking-[0.14em]"
                  style={{
                    background: "rgba(42,74,53,0.22)",
                    color: "rgba(210,240,218,0.85)",
                    border: "1px solid rgba(42,74,53,0.35)",
                  }}
                >
                  2 Academy Awards
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── META STRIP ── */}
        <div
          className="relative z-10 border-t"
          style={{ background: DARK_SURFACE, borderColor: "rgba(42,74,53,0.14)" }}
        >
          <div className="mx-auto max-w-[var(--page-max)] px-[var(--page-pad)]">
            <div
              className="grid grid-cols-2 divide-x sm:grid-cols-4"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}
            >
              <MetaCell label="Director" value="Gus Van Sant" />
              <MetaCell label="Year" value="1997" />
              <MetaCell label="Screenplay" value="Damon & Affleck" />
              <MetaCell label="Box Office" value="$225,000,000" />
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
                src="https://www.youtube.com/embed/8nslUbsj5mc"
                title="Good Will Hunting (1997) — Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <p
            className="mt-3 text-center font-mono text-[0.6rem] uppercase tracking-[0.14em]"
            style={{ color: "rgba(180,220,190,0.6)" }}
          >
            Good Will Hunting — 1997
          </p>
        </div>
      </header>

      {/* ── ARTICLE BODY ── */}
      <article
        className="mx-auto max-w-[720px] px-[var(--page-pad)] pt-16 pb-24"
        itemScope
        itemType="https://schema.org/Review"
      >
        <meta itemProp="itemReviewed" content="Good Will Hunting directed by Gus Van Sant" />
        <meta itemProp="author" content="Abakcus" />

        {/* Eyebrow tags */}
        <div className="mb-8 flex flex-wrap items-center gap-2">
          {["Film", "Mathematics", "Psychology"].map((tag) => (
            <span
              key={tag}
              className="rounded-full px-2.5 py-0.5 font-mono text-[0.58rem] uppercase tracking-[0.14em]"
              style={{
                background: "color-mix(in srgb, #c8e8d0 55%, white)",
                color: FOREST_DIM,
              }}
            >
              {tag}
            </span>
          ))}
          <span className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
            Gus Van Sant &nbsp;·&nbsp; 1997
          </span>
        </div>

        {/* ── P1 ── */}
        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          <span
            className="float-left mr-2 mt-1 font-serif text-[4.5rem] font-bold leading-[0.78] sm:text-[5.2rem]"
            style={{ color: FOREST }}
            aria-hidden="true"
          >
            T
          </span>
          he problem is written on a blackboard in the hallway at MIT. Professor Gerald
          Lambeau posts it there — something from algebraic graph theory — as a challenge
          to his graduate students. He expects it to take them a semester. It takes an
          anonymous janitor about five minutes. Will Hunting mops the floors at one of
          the most selective universities in the world and solves research-level
          mathematics in secret, on his lunch break, in chalk, on a wall.
        </p>

        {/* ── P2 ── */}
        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          The setup of <em>Good Will Hunting</em> is, on its face, a fantasy — the hidden
          genius revealed by a single audacious act. But the film isn't really interested
          in the mathematics.{" "}
          <ArticleProseLink href="/articles/mit-1869" className="article-euclid-link">
            MIT's entrance exams have always been predicated on the idea that mathematical
            ability can be identified and cultivated
          </ArticleProseLink>
          . The film asks a harder question: what do you do when that ability is present
          but the person carrying it has no interest in being cultivated?
        </p>

        {/* ── P3 ── */}
        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          Will Hunting grew up in South Boston, moved through foster homes, and has a
          criminal record. Lambeau finds him, arranges to keep him out of prison on
          condition that he work on mathematics and see a therapist. The therapist —
          Sean Maguire, played by Robin Williams — is also from Southie. He is the only
          person in the film who doesn't want anything from Will. He's not trying to
          redirect talent. He's trying to reach a person.
        </p>

        {/* ── PULL QUOTE 1 ── */}
        <blockquote
          className="my-10 border-l-[3px] py-1 pl-6"
          style={{ borderColor: FOREST }}
        >
          <p className="font-serif text-[1.2rem] italic leading-[1.55] sm:text-[1.3rem]" style={{ color: FOREST }}>
            The mathematics is never the point. It's the proof of something the film
            wants to say about what we do with people who fall outside the systems we've
            built to accommodate them.
          </p>
        </blockquote>

        {/* ── P4 ── */}
        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          The screenplay, written by Damon and Affleck when they were in their
          mid-twenties, won the Academy Award for Best Original Screenplay. It's worth
          noting what's in it: not a single scene where Will actually struggles with a
          math problem. He never has to work. The problems are trivial to him, the way
          breathing is trivial. The struggle is everything else — connection, trust,
          leaving, the version of safety that looks like staying in South Boston forever.
          The film understands that mathematical talent solves precisely none of those
          problems.
        </p>

        <Divider label="the therapist from southie" />

        {/* ── P5 ── */}
        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          Robin Williams won the Academy Award for Best Supporting Actor for his
          portrayal of Sean Maguire. It's a quiet performance — most of it is listening.
          The famous scene on the bench in the Public Garden, where Maguire tells Will
          "it's not your fault," and repeats it, and watches something collapse — is not
          about mathematics at all. It's about what happens when someone is confronted
          with unconditional acknowledgment for the first time. The film earns that scene
          because it has spent ninety minutes establishing why Will would resist it.
        </p>

        {/* ── P6 ── */}
        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          Maguire's method is not technique. He doesn't use a system.{" "}
          <ArticleProseLink href="/articles/feynman-technique" className="article-euclid-link">
            The Feynman Technique is built around the idea that you can teach yourself
            anything by explaining it simply
          </ArticleProseLink>
          . Maguire works from a different direction entirely: the thing Will needs to
          learn cannot be written down, cannot be explained, and definitely cannot be
          self-taught. It requires another person. That's the film's actual argument.
        </p>

        {/* ── P7 ── */}
        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          Gus Van Sant directs the film with very little visible style, which is the
          right decision. The screenplay is so dense with character that any directorial
          imposition would have smothered it. The camera watches. The light is flat and
          real — South Boston in winter looks like South Boston in winter. The hallways
          at MIT look like hallways. The film doesn't romanticize the academy or the
          neighborhood. Both are just places Will moves through.
        </p>

        <Divider label="the math, briefly" />

        {/* ── P8 ── */}
        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          The blackboard problem Lambeau posts is not fictional. It's drawn from a real
          branch of combinatorics — specifically from the theory of graph homeomorphisms
          and adjacency matrices. The film underplays this detail deliberately. What
          matters is not what the problem is, but that Will solves it without being
          asked, without an audience, and without signing his name. The anonymity is the
          tell: Will wants the problem solved more than he wants credit for solving it.
        </p>

        {/* ── P9 ── */}
        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          This is the same quality that makes the film worth watching twice.{" "}
          <ArticleProseLink href="/articles/feynman-math-education" className="article-euclid-link">
            Feynman's argument about math education — that the pleasure of the subject
            is intrinsic and not dependent on recognition
          </ArticleProseLink>{" "}
          — is something Will already knows. His problem with mathematics is not that
          it's difficult. His problem is that doing it publicly hands him over to
          institutions he doesn't trust: universities, government programs, research
          careers. The choice not to perform is its own kind of statement.
        </p>

        {/* ── P10 ── */}
        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          Compare this to{" "}
          <ArticleProseLink href="/videos/stand-and-deliver" className="article-euclid-link">
            the students in <em>Stand and Deliver</em>
          </ArticleProseLink>
          : Escalante's class wanted in, and the institution's first response was
          suspicion. Will is already in — Lambeau is handing him the door — and his
          first response is disinterest. Both films are about the gap between what the
          institution offers and what the person actually needs. They just approach
          from opposite sides of the gate.
        </p>

        {/* ── PULL QUOTE 2 ── */}
        <blockquote
          className="my-10 border-l-[3px] py-1 pl-6"
          style={{ borderColor: GOLD }}
        >
          <p className="font-serif text-[1.2rem] italic leading-[1.55] sm:text-[1.3rem]" style={{ color: "#5a7a42" }}>
            &ldquo;You wasted all those years trying to be angry at me. I think you've
            been angry at yourself.&rdquo; — Sean Maguire
          </p>
        </blockquote>

        {/* ── P11 ── */}
        <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          The film ends without resolving the mathematical question. Lambeau doesn't get
          his prodigy. The government agency doesn't get its analyst. Will drives to
          California to find a girl. It's the correct ending — not triumphant, not
          tragic, just human. The last thing we see is an empty apartment and a note
          that says <em>I had to go see about a girl.</em> Two thousand miles of
          highway. No chalkboard at the other end.
        </p>

        {/* ── FOOTNOTES ── */}
        <div className="mb-12 border-t border-[var(--line)] pt-6">
          <p className="mb-3 font-mono text-[0.65rem] leading-[1.65] text-[var(--ink-muted)]">
            ¹ Damon and Affleck originally wrote the script as a spec thriller — Will
            was recruited by the NSA, and the tone was considerably darker. The version
            that reached Gus Van Sant had been rewritten several times. Rob Reiner and
            Castle Rock pushed for a version focused entirely on the psychological
            relationship, which ultimately won out.
          </p>
          <p className="font-mono text-[0.65rem] leading-[1.65] text-[var(--ink-muted)]">
            ² The film was made for approximately $10 million and grossed $225 million
            worldwide. It launched both Damon and Affleck as major film actors and
            produced one of the most quoted speeches in American cinema history — the
            "it's not your fault" scene, which Williams improvised in part.
          </p>
        </div>

        {/* ── VERDICT ── */}
        <div
          className="mt-2 flex gap-5 rounded-xl border border-[var(--line)] px-6 py-6 sm:px-8 sm:py-7"
          style={{ background: "color-mix(in srgb, #c8e8d0 18%, white)" }}
        >
          <span
            className="shrink-0 pt-0.5 text-2xl leading-none tracking-widest"
            style={{ color: FOREST_DIM }}
          >
            ★★★★★
          </span>
          <div>
            <p className="font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              In short
            </p>
            <p className="mt-2 font-serif text-base italic leading-relaxed text-[var(--ink-muted)] sm:text-[1.05rem]">
              A film about mathematics that is entirely uninterested in mathematics.
              It uses genius as a premise and then spends two hours asking what on
              earth you're supposed to do with one — and who gets to decide.
            </p>
          </div>
        </div>

        {/* ── RELATED ── */}
        <div className="mt-14 border-t border-[var(--line)] pt-10">
          <p className="mb-5 font-mono text-[0.58rem] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
            Also on Abakcus
          </p>
          <p className="text-base leading-relaxed sm:text-[1.05rem] sm:leading-[1.85]">
            For the film that puts math on trial from the other direction — students who
            work hard and are assumed to be cheating — see{" "}
            <ArticleProseLink href="/videos/stand-and-deliver" className="article-euclid-link">
              Stand and Deliver
            </ArticleProseLink>
            . And if you want to read what self-teaching actually looks like as a
            practice,{" "}
            <ArticleProseLink href="/tools/calculus-made-easy" className="article-euclid-link">
              Calculus Made Easy
            </ArticleProseLink>{" "}
            — Silvanus Thompson's 1910 book, free online — is the closest thing to what
            Will Hunting is presumably doing alone in his apartment at night.
          </p>
        </div>
      </article>
    </div>
  );
}
