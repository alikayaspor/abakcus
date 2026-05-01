import { ArticleProseLink } from "@/components/articles/article-prose-link";

const CRIMSON = "#7a2c38";
const CRIMSON_DIM = "#631f2a";

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

const STATS = [
  { label: "Ball speed", value: "136 km/h", sub: "≈ 85 mph at kick" },
  { label: "Spin rate", value: "~14 RPS", sub: "revolutions/sec" },
  { label: "Distance", value: "35 m", sub: "from goal" },
  { label: "Force applied", value: "320 N", sub: "at 9.84°" },
];

export function RobertoCarlosArticle() {
  return (
    <div className="text-[var(--ink)]">
      {/* ── HERO ── */}
      <header className="relative overflow-hidden bg-[#150608] pb-0">
        <div
          className="absolute inset-0 opacity-80"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 40%, #0d0305 0%, #150608 100%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[var(--page-max)] px-[var(--page-pad)]">
          <div className="flex flex-col items-center gap-8 py-16 text-center md:py-20">
            <p
              className="font-mono text-[0.62rem] uppercase tracking-[0.26em]"
              style={{ color: CRIMSON }}
            >
              Physics · Football &nbsp;·&nbsp; Magnus Effect &nbsp;·&nbsp; June 3, 1997
            </p>
            <h1 className="font-serif text-[clamp(2.4rem,7vw,4.8rem)] font-medium italic leading-[1.0] tracking-tight text-[#f5ecea]">
              The Free Kick That Took 13 Years to Explain
            </h1>
            <p
              className="max-w-md font-serif text-lg italic leading-relaxed"
              style={{ color: "rgba(220,175,180,0.6)" }}
            >
              136 km/h, 14 revolutions per second, 35 metres. The physics took until 2010.
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
                src="https://www.youtube.com/embed/m57cimnJ7fc"
                title="Football physics: the impossible free kick — TED-Ed"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <p
            className="mt-3 pb-10 text-center font-mono text-[0.6rem] uppercase tracking-[0.14em]"
            style={{ color: "rgba(220,175,180,0.7)" }}
          >
            Football physics: the impossible free kick — TED-Ed · Erez Garty
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
              background: "color-mix(in srgb, var(--pastel-rose) 55%, white)",
              color: CRIMSON_DIM,
            }}
          >
            Physics
          </span>
          <span
            className="rounded-full px-2.5 py-0.5 font-mono text-[0.58rem] uppercase tracking-[0.14em]"
            style={{
              background: "color-mix(in srgb, var(--pastel-rose) 55%, white)",
              color: CRIMSON_DIM,
            }}
          >
            Football
          </span>
          <span className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
            Tournoi de France · Lyon · 1997
          </span>
        </div>

        {/* Drop-cap */}
        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          <span
            className="float-left mr-2 mt-1 font-serif text-[4.5rem] font-bold leading-[0.78] sm:text-[5.2rem]"
            style={{ color: CRIMSON_DIM }}
            aria-hidden="true"
          >
            O
          </span>
          n June 3, 1997, <strong>Roberto Carlos</strong> struck a football at 136 km/h from
          35 metres, spinning at roughly 14 revolutions per second. The ball flew wide of the
          wall, appeared to be heading into the stands, and then bent sharply left and hit the
          inside of the post. The goalkeeper didn&apos;t move.
        </p>

        <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          The match was the opening game of the <em>Tournoi de France</em> — a four-team
          friendly France organised as a rehearsal for the 1998 World Cup. The scoreline was
          forgotten immediately. Twenty years later, Roberto Carlos told ESPN Brasil:{" "}
          <em>&ldquo;To be honest, until this day I don&apos;t know how I did that.&rdquo;</em>{" "}
          He added that he never attempted the same kick again, because he knew he could never
          repeat it.
        </p>

        {/* Stats grid */}
        <div
          className="my-10 overflow-hidden rounded-lg border border-[var(--line)]"
        >
          <div className="grid grid-cols-2 divide-x divide-y divide-[var(--line)] sm:grid-cols-4 sm:divide-y-0">
            {STATS.map((s) => (
              <div key={s.label} className="px-5 py-4">
                <p
                  className="mb-1 font-mono text-[0.55rem] uppercase tracking-[0.14em]"
                  style={{ color: CRIMSON_DIM }}
                >
                  {s.label}
                </p>
                <p className="font-serif text-xl font-bold text-[var(--ink)]">{s.value}</p>
                <p className="mt-0.5 font-mono text-[0.58rem] text-[var(--ink-muted)]">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pull quote */}
        <blockquote
          className="clear-both my-10 border-l-[3px] py-1 pl-6"
          style={{ borderColor: CRIMSON_DIM }}
        >
          <p className="font-serif text-[1.2rem] italic leading-[1.65] text-[var(--ink)] sm:text-[1.3rem]">
            &ldquo;He also said: &lsquo;I never tried to kick like that again, because I know
            I would never have scored.&rsquo; The physics confirms this.&rdquo;
          </p>
        </blockquote>

        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          The Magnus effect is named after German physicist Heinrich Magnus, who described it in
          1852. But Isaac Newton had noticed it two centuries earlier — watching tennis players at
          Cambridge in 1670, he observed that a spinning ball curved in the direction of its spin.
          The mechanism: when a ball spins in flight, one side of the ball moves in the same
          direction as the surrounding air and one side moves against it. The pressure differential
          pushes the ball toward the low-pressure side — which is the direction of the spin.
        </p>

        <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          For Roberto Carlos&apos;s kick: the ball was struck on its lower-right corner and spun
          counterclockwise. The ball was pushed down and to the left — directly toward the goal.
          The effect was small at first. As the ball slowed, the pressure differential became more
          dominant and the curve tightened. The 35-metre distance was critical: it was long enough
          for the full spiral trajectory to develop. From 20 metres, the kick would have gone wide.
        </p>

        <Divider />

        {/* Magnus diagram */}
        <div className="my-10 overflow-hidden rounded-lg border border-[var(--line)]">
          <div
            className="border-b border-[var(--line)] px-5 py-3 font-mono text-[0.58rem] uppercase tracking-[0.14em]"
            style={{ color: CRIMSON_DIM, background: "color-mix(in srgb, var(--pastel-rose) 18%, white)" }}
          >
            Magnus effect — pressure differential on a spinning ball
          </div>
          <svg
            viewBox="0 0 680 320"
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
            className="block"
            style={{ background: "var(--tonal)" }}
          >
            <defs>
              <style>{`.mono-lbl { font-family: 'DM Mono', monospace; fill: #45403a; }`}</style>
              <marker id="arr-fwd" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                <path d="M2 1L8 5L2 9" fill="none" stroke="#45403a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </marker>
              <marker id="arr-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                <path d="M2 1L8 5L2 9" fill="none" stroke="#8c3a2a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </marker>
              <marker id="arr-blu" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                <path d="M2 1L8 5L2 9" fill="none" stroke="#2a4a6c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </marker>
            </defs>
            <circle cx="200" cy="160" r="52" fill="#dad3c5" stroke="#45403a" strokeWidth="1.5" />
            <path d="M 200 120 A 40 40 0 0 1 240 160" fill="none" stroke="#45403a" strokeWidth="1.2" strokeDasharray="3 2" markerEnd="url(#arr-fwd)" />
            <text className="mono-lbl" x="200" y="164" textAnchor="middle" fontSize="9" letterSpacing="0.5">SPIN →</text>
            <line x1="44" y1="160" x2="138" y2="160" stroke="#45403a" strokeWidth="1.5" markerEnd="url(#arr-fwd)" />
            <text className="mono-lbl" x="90" y="148" textAnchor="middle" fontSize="9">ball motion</text>
            <line x1="490" y1="90" x2="270" y2="90" stroke="#8c3a2a" strokeWidth="1" markerEnd="url(#arr-red)" opacity="0.7" />
            <line x1="490" y1="108" x2="270" y2="108" stroke="#8c3a2a" strokeWidth="1" markerEnd="url(#arr-red)" opacity="0.5" />
            <line x1="490" y1="75" x2="270" y2="75" stroke="#8c3a2a" strokeWidth="0.7" markerEnd="url(#arr-red)" opacity="0.35" />
            <text className="mono-lbl" x="530" y="93" fontSize="9" fill="#8c3a2a">← air vs. spin</text>
            <text className="mono-lbl" x="530" y="79" fontSize="9" fill="#8c3a2a" opacity="0.7">HIGH PRESSURE</text>
            <line x1="270" y1="220" x2="490" y2="220" stroke="#2a4a6c" strokeWidth="1" markerEnd="url(#arr-blu)" opacity="0.7" />
            <line x1="270" y1="236" x2="490" y2="236" stroke="#2a4a6c" strokeWidth="1" markerEnd="url(#arr-blu)" opacity="0.5" />
            <line x1="270" y1="248" x2="490" y2="248" stroke="#2a4a6c" strokeWidth="0.7" markerEnd="url(#arr-blu)" opacity="0.35" />
            <text className="mono-lbl" x="530" y="223" fontSize="9" fill="#2a4a6c">air + spin →</text>
            <text className="mono-lbl" x="530" y="245" fontSize="9" fill="#2a4a6c" opacity="0.7">LOW PRESSURE</text>
            <line x1="200" y1="215" x2="200" y2="268" stroke="#16120c" strokeWidth="2.5" markerEnd="url(#arr-fwd)" />
            <text className="mono-lbl" x="215" y="258" fontSize="9" fontWeight="500" fill="#16120c">Magnus force</text>
            <text className="mono-lbl" x="215" y="272" fontSize="9" fill="#45403a">(ball curves down/left)</text>
            <text className="mono-lbl" x="340" y="295" textAnchor="middle" fontSize="9" fill="#8c8680">F_Magnus = (π/2) · r³ · ρ · ω × v</text>
          </svg>
        </div>

        {/* 2010 paper inset */}
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
            The Paper That Settled the Argument
          </p>
          <p className="mb-4 font-serif text-[0.97rem] leading-[1.8] text-[var(--ink-muted)] sm:text-[1.02rem]">
            In September 2010 — thirteen years after the goal — four French scientists published
            &ldquo;The spinning ball spiral&rdquo; in the{" "}
            <em>New Journal of Physics</em>. Guillaume Dupeux, Anne Le Goff, David Quéré and
            Christophe Clanet used plastic balls in water to isolate the pure Magnus spiral and
            produced a general equation for any spinning sphere.
          </p>
          <p className="font-serif text-[0.97rem] leading-[1.8] text-[var(--ink-muted)] sm:text-[1.02rem]">
            Their key insight: the ball&apos;s path is not just a simple curve — it is a spiral that
            tightens continuously. The &ldquo;sudden bend&rdquo; that fooled Barthez was the end of
            a trajectory that had been curving the whole time. The nonlinear geometry of the spiral
            made it{" "}
            <em className="text-[var(--ink)]">invisible until the last moment.</em>
          </p>
        </div>

        {/* Trajectory diagram */}
        <div className="my-10 overflow-hidden rounded-lg border border-[var(--line)]">
          <div
            className="border-b border-[var(--line)] px-5 py-3 font-mono text-[0.58rem] uppercase tracking-[0.14em]"
            style={{ color: CRIMSON_DIM, background: "color-mix(in srgb, var(--pastel-rose) 18%, white)" }}
          >
            Roberto Carlos free kick trajectory — bird&apos;s eye view · Lyon · June 3, 1997
          </div>
          <svg
            viewBox="0 0 680 340"
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
            className="block"
            style={{ background: "var(--tonal)" }}
          >
            <defs>
              <style>{`.mono-t { font-family: 'DM Mono', monospace; }`}</style>
              <marker id="a2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                <path d="M2 1L8 5L2 9" fill="none" stroke="#16120c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </marker>
              <marker id="a3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                <path d="M2 1L8 5L2 9" fill="none" stroke="#8c8680" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </marker>
            </defs>
            <rect x="260" y="20" width="160" height="60" rx="1" fill="none" stroke="#c9c2b4" strokeWidth="0.8" />
            <rect x="300" y="20" width="80" height="12" rx="1" fill="none" stroke="#45403a" strokeWidth="2" />
            <text className="mono-t" x="340" y="50" textAnchor="middle" fill="#45403a" fontSize="9" letterSpacing="0.5">GOAL</text>
            <rect x="296" y="148" width="36" height="14" rx="1" fill="#8c8680" opacity="0.7" />
            <text className="mono-t" x="314" y="158" textAnchor="middle" fill="#f0ebe0" fontSize="7.5">WALL</text>
            <circle cx="340" cy="300" r="6" fill="#16120c" />
            <text className="mono-t" x="340" y="322" textAnchor="middle" fill="#45403a" fontSize="8.5">Roberto Carlos</text>
            <line x1="310" y1="145" x2="310" y2="302" stroke="#c9c2b4" strokeWidth="0.5" strokeDasharray="3 3" />
            <text className="mono-t" x="296" y="230" textAnchor="end" fill="#8c8680" fontSize="8">35 m</text>
            <path d="M 340 300 Q 395 200 380 130 Q 370 60 305 30" fill="none" stroke="#16120c" strokeWidth="2.2" strokeLinecap="round" />
            <line x1="310" y1="32" x2="303" y2="28" stroke="#16120c" strokeWidth="2" markerEnd="url(#a2)" />
            <path d="M 340 300 Q 400 230 430 80" fill="none" stroke="#8c8680" strokeWidth="1" strokeDasharray="5 4" strokeLinecap="round" />
            <text className="mono-t" x="440" y="72" fill="#8c8680" fontSize="8">without spin</text>
            <text className="mono-t" x="440" y="84" fill="#8c8680" fontSize="8">(goes wide)</text>
            <circle cx="340" cy="36" r="4" fill="#8c8680" opacity="0.6" />
            <text className="mono-t" x="358" y="39" fill="#45403a" fontSize="8">Barthez (didn&apos;t move)</text>
            <text className="mono-t" x="270" y="14" textAnchor="middle" fill="#45403a" fontSize="8">inside of post</text>
            <path d="M 350 290 A 12 12 0 0 0 328 290" fill="none" stroke="#45403a" strokeWidth="1" markerEnd="url(#a2)" />
            <text className="mono-t" x="375" y="294" fill="#45403a" fontSize="8">spin ↺</text>
          </svg>
        </div>

        <p className="mb-6 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          The tolerance window for all the required variables simultaneously is vanishingly small.
          Too fast, and the ball doesn&apos;t curve enough. Too slow, and it hooks too early. Too
          much spin and it curves wide. Too little and it passes the wall but goes over the goal.
          The 35-metre distance was not chosen — it was where the free kick was awarded. Everything
          that made the kick work was the product of a specific physical situation that cannot be
          recreated through planning.
        </p>

        <p className="mb-10 text-base leading-relaxed sm:text-[1.1rem] sm:leading-[1.85]">
          Isaac Newton first noticed the Magnus effect in 1670. Heinrich Magnus formalized it in
          1852. Christophe Clanet and colleagues modelled it as a spiral in 2010. The experiment
          that made all three of them relevant to the same goal happened on a June evening in Lyon
          from a free kick that nobody asked Roberto Carlos to take the way he took it. He just
          kicked it, and{" "}
          <ArticleProseLink href="/articles/feynman-technique" className="article-euclid-link">
            physics did the rest
          </ArticleProseLink>
          .
        </p>

        {/* Verdict */}
        <div
          className="mt-12 flex gap-5 rounded-xl border border-[var(--line)] px-6 py-6 sm:px-8 sm:py-7"
          style={{ background: "color-mix(in srgb, var(--pastel-rose) 18%, white)" }}
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
              A goal explained in principle by Newton, formalised by Magnus, and finally modelled
              as a spiral in 2010. The man who kicked it still doesn&apos;t know how he did it.
            </p>
          </div>
        </div>

        {/* References */}
        <div className="mt-14 border-t border-[var(--line)] pt-8 font-sans text-xs leading-relaxed text-[var(--ink-muted)] space-y-2">
          <p><strong className="text-[var(--ink)]">Sources</strong></p>
          <p>
            Dupeux, Le Goff, Quéré &amp; Clanet — &ldquo;The spinning ball spiral,&rdquo;{" "}
            <em>New Journal of Physics</em>, Sept. 2010 &nbsp;·&nbsp;
            Croxford, Best &amp; Duggan — &ldquo;Roberto Carlos&apos;s Impossible Free Kick,&rdquo;{" "}
            <em>Journal of Physics Special Topics</em>, Univ. of Leicester, Nov. 2017
          </p>
        </div>
      </article>
    </div>
  );
}
