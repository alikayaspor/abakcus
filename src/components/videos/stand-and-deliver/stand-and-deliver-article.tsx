import Image from "next/image";
import { ArticleProseLink } from "@/components/articles/article-prose-link";

const POSTER =
  "https://pub-676f738e0a3948d19dc9defd954e36d5.r2.dev/Stand%20And%20Deliver.jpg";

const RUST = "#8b3a2a";
const RUST_DIM = "#6a2a1a";
const GOLD = "#c9a84c";
const DARK = "#140a06";
const DARK_SURFACE = "#1c0e09";

function MetaCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 border-r border-white/[0.07] px-4 py-3 last:border-r-0">
      <span
        className="font-mono text-[0.55rem] uppercase tracking-[0.18em]"
        style={{ color: "rgba(220,180,160,0.45)" }}
      >
        {label}
      </span>
      <span
        className="font-serif text-[0.9rem] italic"
        style={{ color: "rgba(248,240,235,0.82)" }}
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
        style={{ color: RUST_DIM }}
      >
        {label}
      </span>
      <span className="h-px flex-1 bg-[var(--line)]" />
    </div>
  );
}

export function StandAndDeliverArticle() {
  return (
    <div className="text-[var(--ink)]">
      {/* ── HERO ── */}
      <header className="relative overflow-hidden pb-0" style={{ background: DARK }}>
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 90% 70% at 55% 50%, ${DARK} 0%, #080200 100%)`,
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
                  aspectRatio: "3/4",
                  boxShadow:
                    "0 40px 100px -20px rgba(0,0,0,0.85), 0 0 0 1px rgba(139,58,42,0.25)",
                }}
              >
                <Image
                  src={POSTER}
                  alt="Stand and Deliver — Ramón Menéndez, 1988"
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
                style={{ color: RUST }}
              >
                Film &nbsp;·&nbsp; Biographical Drama &nbsp;·&nbsp; 1988 &nbsp;·&nbsp; USA
              </p>

              <h1 className="mt-4 font-serif text-[clamp(2rem,6vw,4rem)] font-medium italic leading-[1.05] tracking-tight text-[#f7f0ec]">
                The Testing Board
                <br />
                Assumed They Cheated
              </h1>

              <p
                className="mt-3 font-mono text-[0.75rem] tracking-[0.06em]"
                style={{ color: "rgba(220,175,155,0.5)" }}
              >
                Dir. Ramón Menéndez
              </p>

              <p
                className="mt-5 font-serif text-base italic leading-relaxed sm:text-lg"
                style={{ color: "rgba(228,200,188,0.65)" }}
              >
                Edward James Olmos &nbsp;·&nbsp; Lou Diamond Phillips &nbsp;·&nbsp; Rosanna DeSoto
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="https://www.imdb.com/title/tt0094027/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] transition-opacity duration-200 hover:opacity-80"
                  style={{ background: RUST_DIM, color: "#f7f0ec" }}
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
                    background: "rgba(139,58,42,0.18)",
                    color: "rgba(240,200,185,0.85)",
                    border: "1px solid rgba(139,58,42,0.3)",
                  }}
                >
                  89% Rotten Tomatoes
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── META STRIP ── */}
        <div
          className="relative z-10 border-t"
          style={{ background: DARK_SURFACE, borderColor: "rgba(139,58,42,0.12)" }}
        >
          <div className="mx-auto max-w-[var(--page-max)] px-[var(--page-pad)]">
            <div
              className="grid grid-cols-2 divide-x sm:grid-cols-4"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}
            >
              <MetaCell label="Director" value="Ramón Menéndez" />
              <MetaCell label="Year" value="1988" />
              <MetaCell label="Budget" value="$800,000" />
              <MetaCell label="Box Office" value="$14,000,000" />
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
                src="https://www.youtube.com/embed/NeBBnYTV3-s"
                title="Stand and Deliver (1988) — Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <p
            className="mt-3 text-center font-mono text-[0.6rem] uppercase tracking-[0.14em]"
            style={{ color: "rgba(220,175,155,0.6)" }}
          >
            Stand and Deliver — trailer, 1988
          </p>
        </div>
      </header>

      {/* ── ARTICLE BODY ── */}
      <article
        className="mx-auto max-w-[720px] px-[var(--page-pad)] pt-16 pb-24"
        itemScope
        itemType="https://schema.org/Review"
      >
        <meta itemProp="itemReviewed" content="Stand and Deliver directed by Ramón Menéndez" />
        <meta itemProp="author" content="Abakcus" />

        {/* Eyebrow tags */}
        <div className="mb-8 flex flex-wrap items-center gap-2">
          {["Film", "Mathematics", "Education"].map((tag) => (
            <span
              key={tag}
              className="rounded-full px-2.5 py-0.5 font-mono text-[0.58rem] uppercase tracking-[0.14em]"
              style={{
                background: "color-mix(in srgb, #e8d0c4 55%, white)",
                color: RUST_DIM,
              }}
            >
              {tag}
            </span>
          ))}
          <span className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
            Ramón Menéndez &nbsp;·&nbsp; 1988
          </span>
        </div>

        {/* ── P1: ESCALANTE ── */}
        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          <span
            className="float-left mr-2 mt-1 font-serif text-[4.5rem] font-bold leading-[0.78] sm:text-[5.2rem]"
            style={{ color: RUST }}
            aria-hidden="true"
          >
            J
          </span>
          aime Escalante had already taught mathematics and physics in Bolivia for twelve
          years when he came to the United States. His credentials were in Spanish —
          no one recognized them. He worked factory jobs while teaching himself English
          and earning a second degree. He was forty-three years old when he walked into
          Garfield High School in East Los Angeles in 1974. The school was on the verge
          of losing its accreditation. Most of his students couldn&apos;t handle
          fractions. A vice principal reprimanded him for arriving too early, then again
          for leaving too late, then once more for raising funds without administrative
          permission.
        </p>

        {/* ── P2: THE FILM'S COMPRESSION ── */}
        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          The film tells this man&apos;s story — but softens certain edges to do it.
          Watching <em>Stand and Deliver</em>, you can feel where the compression happens.
          Escalante&apos;s first calculus class was in 1978; the film collapses the whole
          arc into a single school year. His students&apos; success on the AP exam was
          not a one-time miracle — the program grew over years, hundreds of students
          passed, Garfield eventually became one of the most successful AP Calculus
          programs in the country. None of that is in the film, because no sequel was
          made.
        </p>

        {/* ── PULL QUOTE 1 ── */}
        <blockquote
          className="my-10 border-l-[3px] py-1 pl-6"
          style={{ borderColor: RUST }}
        >
          <p className="font-serif text-[1.2rem] italic leading-[1.55] sm:text-[1.3rem]" style={{ color: RUST }}>
            Eighteen students passed the exam. The Educational Testing Service called
            almost immediately: the scores were invalidated. The reason given was that
            the answers were too similar to one another. In other words, they had studied
            together.
          </p>
        </blockquote>

        {/* ── P3: THE TESTING BOARD ── */}
        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          It is worth naming what the testing board did: when eighteen Latino students
          from East Los Angeles passed one of the most rigorous math exams in the country
          with high scores, the first response was not congratulation but suspicion. The
          logic — the answers were too correct, therefore something was wrong — had its
          own long history.{" "}
          <ArticleProseLink
            href="/articles/marilyn-vos-savant"
            className="article-euclid-link"
          >
            Marilyn vos Savant had encountered a version of it
          </ArticleProseLink>
          : give a right answer that surprises people, and a certain kind of institution
          reaches for doubt before it reaches for congratulation. The
          &ldquo;answers were too similar&rdquo; rationale could have been applied to
          any class that had studied together. Escalante agreed to let his students
          re-sit the exam — for their sake and for the program&apos;s future. They took
          it again. They passed again. This time no one said anything.
        </p>

        {/* ── P4: OLMOS ── */}
        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          Edward James Olmos gained forty pounds for the role, had his hair thinned, and
          spent eighteen months shadowing Escalante. Some of the film&apos;s most quoted
          lines — <em>&ldquo;You burros have math in your blood&rdquo;</em> — were taken
          directly from Escalante&apos;s actual classroom. Olmos received an Academy
          Award nomination for Best Actor; had Dustin Hoffman not been in{" "}
          <em>Rain Man</em> that same year, he would very likely have won. The film was
          made for $800,000 and grossed $14 million. It began as a PBS project, picked
          up by Warner Bros. after a festival screening.
        </p>

        <Divider label="the politics inside the math" />

        {/* ── P5: PROGRAM COLLAPSE ── */}
        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          What the film doesn&apos;t say — but historians do — is that
          Escalante&apos;s program eventually became a victim of its own success. As it
          grew, as outside attention increased, tensions with colleagues and school
          administration grew alongside it. Escalante left Garfield in 1991. Not a quiet
          retirement — he was worn down. The calculus program shrank rapidly after he
          left. No film covered this part, because this part isn&apos;t motivational.
          It&apos;s structural.
        </p>

        {/* ── P6: AP CALCULUS AS A DOOR ── */}
        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          The AP Calculus exam is a peculiar object. In the United States, students who
          pass it can place out of calculus in college — the exam functions as a door
          into higher education. Escalante understood that door well, because when he
          arrived in America it had been closed to him. He told his students plainly:
          math is the great equalizer. Unlike other subjects, your accent, your name,
          and the name of your neighborhood don&apos;t affect whether your answer is
          correct. Two plus two is four in East Los Angeles too.{" "}
          <ArticleProseLink
            href="/articles/feynman-math-education"
            className="article-euclid-link"
          >
            Feynman made the same argument from a different direction
          </ArticleProseLink>
          : the subject itself is indifferent to the person holding the pencil.
        </p>

        {/* ── PULL QUOTE 2 ── */}
        <blockquote
          className="my-10 border-l-[3px] py-1 pl-6"
          style={{ borderColor: GOLD }}
        >
          <p className="font-serif text-[1.2rem] italic leading-[1.55] sm:text-[1.3rem]" style={{ color: "#7a5a20" }}>
            &ldquo;Math is the great equalizer.&rdquo; Escalante didn&apos;t prove it
            with a slogan. He proved it with calculus.
          </p>
        </blockquote>

        {/* ── P7: STRUCTURAL ── */}
        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          The film is still worth watching — but it deserves to be watched without the
          &ldquo;inspirational teacher movie&rdquo; label attached. The real story is
          this: students who worked hard were assumed to be cheating; the program was
          ground down as it grew; the man behind it had unrecognized credentials and
          started over at forty-three. These are not poster-quote materials. They are
          structural problems — and Escalante didn&apos;t solve them by tearing the
          structure down. He went through it. With calculus.
        </p>

        {/* ── P8: ESCALANTE'S END ── */}
        <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          Escalante died in 2010. In his final years he faced serious financial
          difficulty; money had to be raised to cover his cancer treatment. Cast members
          from the film and former students organized a fundraising campaign. A
          commemorative stamp was issued in his likeness. A memorial service was held on
          the front steps of Garfield High School.
        </p>

        {/* ── FOOTNOTES ── */}
        <div className="mb-12 border-t border-[var(--line)] pt-6">
          <p className="mb-3 font-mono text-[0.65rem] leading-[1.65] text-[var(--ink-muted)]">
            ¹ Escalante described the film as &ldquo;ninety percent truth, ten percent
            drama.&rdquo; The most significant omission, he said, was time: the success
            shown in the film took considerably longer to achieve than a single school
            year.
          </p>
          <p className="font-mono text-[0.65rem] leading-[1.65] text-[var(--ink-muted)]">
            ² The film is used as classroom material in many American high schools.
            According to Olmos, some students watch it more than once before graduating.
            That fact is simultaneously a testament to the film and a mild indictment of
            the curriculum.
          </p>
        </div>

        {/* ── VERDICT ── */}
        <div
          className="mt-2 flex gap-5 rounded-xl border border-[var(--line)] px-6 py-6 sm:px-8 sm:py-7"
          style={{ background: "color-mix(in srgb, #e8d0c4 18%, white)" }}
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
              The most important math film ever made — not because it&apos;s accurate,
              but because it&apos;s honest about what the subject can actually do for
              a person who has been told it isn&apos;t for them.
            </p>
          </div>
        </div>

        {/* ── RELATED ── */}
        <div className="mt-14 border-t border-[var(--line)] pt-10">
          <p className="mb-5 font-mono text-[0.58rem] uppercase tracking-[0.2em] text-[var(--ink-muted)]">
            Also on Abakcus
          </p>
          <p className="text-base leading-relaxed sm:text-[1.05rem] sm:leading-[1.85]">
            For the other film on this site that puts education at the center and refuses
            the easy reading,{" "}
            <ArticleProseLink
              href="/videos/rushmore-1998"
              className="article-euclid-link"
            >
              Rushmore
            </ArticleProseLink>
            . And for the argument Escalante was making with a blackboard — that the
            subject itself doesn&apos;t care who you are — Richard Feynman made the same
            case in print:{" "}
            <ArticleProseLink
              href="/articles/feynman-math-education"
              className="article-euclid-link"
            >
              what Feynman thought math education was getting wrong
            </ArticleProseLink>
            .
          </p>
        </div>

        {/* ── FOOTER NOTE ── */}
        <p className="mt-12 text-xs leading-relaxed text-[var(--ink-muted)]">
          <a
            href="https://www.imdb.com/title/tt0094027/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-[var(--ink)]"
          >
            <em>Stand and Deliver</em>
          </a>
          &nbsp;·&nbsp; Dir. Ramón Menéndez &nbsp;·&nbsp; USA, 1988
          &nbsp;·&nbsp; abakcus.com
        </p>
      </article>
    </div>
  );
}
