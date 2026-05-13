import { ArticleProseLink } from "@/components/articles/article-prose-link";
import { PASTEL } from "@/data/pastel-palette";

const R2 = "https://pub-57855d8f88704d1cafba485f1b715e8d.r2.dev";
const HERO_IMG = "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/24%20Beautiful%20Physics%20Poster%20Designs%20Inspire%20You.webp";

/* ── HERO IMAGE ── */
function HeroImage() {
  return (
    <figure className="mb-12 overflow-hidden rounded-[var(--radius-card)] p-3 shadow-[var(--shadow-card)] sm:-mx-8 sm:p-4 lg:-mx-16" style={{ backgroundColor: "#0e0c09" }}>
      <div className="w-full rounded-xl bg-black/20 p-1 sm:p-1.5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HERO_IMG}
          alt="24 Beautiful Physics Poster Designs — three glowing posters on a dark gallery wall"
          className="mx-auto block h-auto w-full rounded-lg object-contain"
          loading="eager"
          decoding="async"
          draggable={false}
        />
      </div>
    </figure>
  );
}

/* ── POSTER IMAGE ── */
function PosterImage({
  src,
  alt,
  pastel,
  priority,
}: {
  src: string;
  alt: string;
  pastel: keyof typeof PASTEL;
  priority?: boolean;
}) {
  return (
    <figure
      className="my-7 overflow-hidden rounded-[var(--radius-card)] p-3 shadow-[var(--shadow-card)] sm:-mx-8 sm:p-4 lg:-mx-16"
      style={{ backgroundColor: PASTEL[pastel] }}
    >
      <div className="w-full rounded-xl bg-white/30 p-1 sm:p-1.5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="mx-auto block h-auto w-full rounded-lg object-contain"
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          draggable={false}
        />
      </div>
    </figure>
  );
}

/* ── POSTER ENTRY ── */
function PosterEntry({
  num,
  title,
  tag,
  children,
}: {
  num: string;
  title: string;
  tag: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-[var(--line)] pt-10">
      <div className="mb-5 flex flex-wrap items-baseline gap-3">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
          {num}
        </span>
        <h2 className="font-serif text-[1.4rem] font-normal leading-tight tracking-[-0.01em] text-[var(--ink)]">
          {title}
        </h2>
        <span className="ml-auto rounded-sm border border-[var(--line-soft)] bg-[var(--tonal)] px-2.5 py-0.5 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-[var(--ink-muted)]">
          {tag}
        </span>
      </div>
      <div className="space-y-4 border-l border-[var(--line-soft)] pl-5 font-serif text-[0.95rem] leading-[1.85] text-[var(--ink)]">
        {children}
      </div>
    </div>
  );
}

/* ── MAIN EXPORT ── */
export function PhysicsPostersArticle() {
  return (
    <article className="mx-auto max-w-[680px] px-[var(--page-pad)] py-16 text-[var(--ink)]">

      {/* ── HEADER ── */}
      <header className="mb-12 border-b border-[var(--line)] pb-10">
        <p className="mb-5 font-sans text-[0.65rem] uppercase leading-relaxed tracking-[0.18em] text-[var(--ink-muted)]">
          Physics · Poster Design
        </p>
        <h1 className="font-serif text-[clamp(2rem,5vw,3rem)] font-normal leading-[1.2] text-[var(--ink)]">
          24 Beautiful Physics Poster Designs{" "}
          <em className="italic">That Inspire You</em>
        </h1>
      </header>

      {/* ── HERO IMAGE ── */}
      <HeroImage />

      {/* ── INTRO ── */}
      <section className="mb-12 border-l-[1.5px] border-[var(--line-soft)] pl-7 font-serif text-[0.95rem] leading-[1.9] text-[var(--ink-muted)]">
        <p className="mb-5">
          Physics is abstract — but that doesn&rsquo;t mean it&rsquo;s invisible. Universal
          gravitation lifts you out of bed every morning. Electromagnetism keeps your phone screen
          lit. Entropy is responsible for your coffee going cold.
        </p>
        <p className="mb-5">
          2046 Print Shop designed these 24 posters with one goal: to turn physics concepts into
          beautiful objects. The kind that hang on a classroom wall or study room and catch your eye
          every single day. The subjects are large — dark matter, quantum mechanics, string theory —
          but the presentation is clear. Each one holds a single concept on a single page. In the
          same spirit that{" "}
          <ArticleProseLink href="/articles/alejandro-guijarro-momentum" className="article-euclid-link">
            Alejandro Guijarro turned physics blackboards into gallery photographs
          </ArticleProseLink>
          , these posters treat the language of physics as something worth looking at.
        </p>
        <p>
          Below, we wrote what each poster is about — not in 2046&rsquo;s words, but in ours.
        </p>
      </section>

      {/* ── DIVIDER ── */}
      <div className="my-12 flex items-center gap-4">
        <span className="h-px flex-1 bg-[var(--line-soft)]" />
        <span className="font-serif text-lg text-[var(--ink-muted)]">§</span>
        <span className="h-px flex-1 bg-[var(--line-soft)]" />
      </div>

      {/* ── POSTERS ── */}
      <div className="space-y-0">

        <PosterEntry num="01" title="String Theory" tag="Strings · Dimensions">
          <PosterImage
            src={`${R2}/String%20Theory.jpg`}
            alt="String Theory physics poster design by 2046 Print Shop"
            pastel="lime"
            priority
          />
          <p>
            Why is the universe so precisely calibrated? String theory approaches the question this
            way: perhaps everything — every particle, every force — is made of tiny vibrating
            strings. At the smallest layer of matter, strings are playing, and the universe is an
            instrument.
          </p>
        </PosterEntry>

        <PosterEntry num="02" title="Quantum Mechanics" tag="Subatomic · Probability">
          <PosterImage
            src={`${R2}/Quantum%20Mechanics.jpg`}
            alt="Quantum Mechanics physics poster design by 2046 Print Shop"
            pastel="sky"
          />
          <p>
            Where is an electron? Until you look — nowhere, or everywhere. Quantum mechanics
            describes how the laws of physics become something entirely different at the subatomic
            scale. Newton&rsquo;s beautiful clockwork universe comes apart here.
          </p>
        </PosterEntry>

        <PosterEntry num="03" title="Universal Gravitation" tag="Newton · Force">
          <PosterImage
            src={`${R2}/Universal%20Gravitation.jpg`}
            alt="Universal Gravitation physics poster design by 2046 Print Shop"
            pastel="rose"
          />
          <p>
            Newton&rsquo;s law is simple and merciless: everything with mass in the universe pulls
            at everything else. An apple, a planet, a galaxy. The force weakens as distance grows —
            but it never quite reaches zero.
          </p>
        </PosterEntry>

        <PosterEntry num="04" title="Thermodynamics 0" tag="Equilibrium · Temperature">
          <PosterImage
            src={`${R2}/Thermodynamics%2000.jpg`}
            alt="Thermodynamics zeroth law physics poster design by 2046 Print Shop"
            pastel="peach"
          />
          <p>
            The zeroth law seems almost obvious: if two systems are each in equilibrium with a
            third, they are in equilibrium with each other. The entire logic of temperature
            measurement rests on this single, unremarkable sentence.
          </p>
        </PosterEntry>

        <PosterEntry num="05" title="Thermodynamics 1" tag="Energy · Conservation">
          <PosterImage
            src={`${R2}/THermodynamics%2001.jpg`}
            alt="Thermodynamics first law physics poster design by 2046 Print Shop"
            pastel="lavender"
          />
          <p>
            Heat is a form of energy. And energy cannot be created or destroyed — only transformed.
            The first law is that clear. But inside that clarity lives a large truth: the universe
            runs without shortcuts. Everything has a cost.
          </p>
        </PosterEntry>

        <PosterEntry num="06" title="Thermodynamics 2" tag="Entropy · Direction">
          <PosterImage
            src={`${R2}/Thermodynamics%2002.jpg`}
            alt="Thermodynamics second law physics poster design by 2046 Print Shop"
            pastel="lime"
          />
          <p>
            Order moves toward disorder on its own. Disorder does not move toward order on its own.
            The second law is the one that gives the universe its direction. Coffee cools, ice melts,
            everything scatters. You can resist this law. You cannot repeal it.
          </p>
        </PosterEntry>

        <PosterEntry num="07" title="Thermodynamics 3" tag="Absolute Zero · Limit">
          <PosterImage
            src={`${R2}/Thermodynamics%2003.jpg`}
            alt="Thermodynamics third law physics poster design by 2046 Print Shop"
            pastel="sky"
          />
          <p>
            As you approach absolute zero, everything stops — vibrations slow, entropy reaches its
            minimum. The third law describes this. And it adds: reaching absolute zero is not
            actually possible. The floor exists; you just can&rsquo;t touch it.
          </p>
        </PosterEntry>

        <PosterEntry num="08" title="Dark Matter" tag="Invisible · Gravity">
          <PosterImage
            src={`${R2}/Dark%20Matter.jpg`}
            alt="Dark Matter physics poster design by 2046 Print Shop"
            pastel="rose"
          />
          <p>
            Roughly eighty percent of the matter in the universe is invisible to us. It
            doesn&rsquo;t reflect, emit, or absorb light. But look at the gravitational behavior
            around galaxies and it&rsquo;s clearly there. Dark matter is the universe&rsquo;s
            largest blank.
          </p>
        </PosterEntry>

        <PosterEntry num="09" title="Dark Energy" tag="Expansion · Unknown">
          <PosterImage
            src={`${R2}/Dark%20Energy.jpg`}
            alt="Dark Energy physics poster design by 2046 Print Shop"
            pastel="peach"
          />
          <p>
            We knew the universe was expanding. What we didn&rsquo;t expect was that it was
            accelerating. Something is pushing the expansion. We call it dark energy. It makes up
            roughly seventy percent of the universe&rsquo;s total energy — and we have no idea what
            it is.
          </p>
        </PosterEntry>

        <PosterEntry num="10" title="Gravity" tag="Space-Time · Curvature">
          <p>
            Why does gravity exist? Newton found the formula. Einstein explained the reason: large
            masses bend space-time, and objects move along that curve. The geometry of space-time is
            why the apple falls. Several of the{" "}
            <ArticleProseLink href="/25-beautiful-math-documentaries-to-love-math" className="article-euclid-link">
              best physics and mathematics documentaries
            </ArticleProseLink>{" "}
            return to this concept — because it never quite stops surprising you.
          </p>
        </PosterEntry>

        <PosterEntry num="11" title="Electromagnetism" tag="Force · Light">
          <PosterImage
            src={`${R2}/Electromagnetism.jpg`}
            alt="Electromagnetism physics poster design by 2046 Print Shop"
            pastel="lavender"
          />
          <p>
            One of the four fundamental forces — and electricity and magnetism are just two faces of
            the same thing. It holds atoms together, forms molecules, produces light.
            Electromagnetism is the invisible glue holding the world in one piece.
          </p>
        </PosterEntry>

        <PosterEntry num="12" title="Strong Force" tag="Nuclear · Binding">
          <PosterImage
            src={`${R2}/Strong%20Force.jpg`}
            alt="Strong Force physics poster design by 2046 Print Shop"
            pastel="lime"
          />
          <p>
            Protons inside an atomic nucleus repel each other — same charge. So why doesn&rsquo;t
            the nucleus fly apart? Because of the strong force. A hundred times more powerful than
            electromagnetism, trillions of times stronger than gravity. Matter exists because of
            this force.
          </p>
        </PosterEntry>

        <PosterEntry num="13" title="Weak Force" tag="Radioactivity · Decay">
          <PosterImage
            src={`${R2}/Weak%20Force.jpg`}
            alt="Weak Force physics poster design by 2046 Print Shop"
            pastel="sky"
          />
          <p>
            The name is misleading — it&rsquo;s far stronger than gravity. The radioactivity that
            powers nuclear reactors is driven by the weak force. It can disassemble matter. It just
            does it at extremely short range, inside the atom itself.
          </p>
        </PosterEntry>

        <PosterEntry num="14" title="Multiverse" tag="Cosmology · Parallel">
          <PosterImage
            src={`${R2}/Multiverse.jpg`}
            alt="Multiverse physics poster design by 2046 Print Shop"
            pastel="rose"
          />
          <p>
            Our universe may not be the only one. A significant number of theoretical physicists
            argue that ours is just one of countless universes, each with its own physical constants
            and laws. The multiverse — unproven, but impossible to put down.
          </p>
        </PosterEntry>

        <PosterEntry num="15" title="Supersymmetry" tag="Standard Model · Partners">
          <PosterImage
            src={`${R2}/Supersymetry.jpg`}
            alt="Supersymmetry physics poster design by 2046 Print Shop"
            pastel="peach"
          />
          <p>
            A proposed symmetry that fills the holes in the Standard Model: every particle has a
            &ldquo;superpartner.&rdquo; It&rsquo;s the only known mathematical symmetry that can be
            added to Einstein&rsquo;s relativity without contradiction. No experimental evidence yet
            — but theoretically, it&rsquo;s very hard to let go.
          </p>
        </PosterEntry>

        <PosterEntry num="16" title="Electromagnetic Induction" tag="Faraday · Generators">
          <PosterImage
            src={`${R2}/Electromagnetic%20Induction.jpg`}
            alt="Electromagnetic Induction physics poster design by 2046 Print Shop"
            pastel="lavender"
          />
          <p>
            A changing magnetic field produces an electric current. Faraday discovered this in 1831.
            Since that day, every electric generator, every motor, every transformer has been built
            on this principle. Every time you use electrical energy, it starts here.
          </p>
        </PosterEntry>

        <PosterEntry num="17" title="Alternating Current" tag="Tesla · AC Power">
          <PosterImage
            src={`${R2}/Alternating%20Current.jpg`}
            alt="Alternating Current physics poster design by 2046 Print Shop"
            pastel="lime"
          />
          <p>
            Tesla and Westinghouse fought Edison&rsquo;s direct current and won. In AC, electrons
            oscillate back and forth, reversing direction dozens of times per second. The world runs
            on the winner of that battle.
          </p>
        </PosterEntry>

        <PosterEntry num="18" title="Electromagnetic Radiation" tag="Spectrum · Waves">
          <p>
            Visible light, radio waves, X-rays, gamma rays — all the same family. Electromagnetic
            radiation is energy traveling as waves, different frequencies obeying the same physics.
            The sunlight hitting your window and your microwave oven are distant relatives. There is
            something quietly extraordinary about{" "}
            <ArticleProseLink href="/videos/cymatics-nigel-stanford" className="article-euclid-link">
              watching waves made visible
            </ArticleProseLink>
            .
          </p>
        </PosterEntry>

        <PosterEntry num="19" title="Special Relativity" tag="Space-Time · Einstein">
          <PosterImage
            src={`${R2}/Special%20Relativity.jpg`}
            alt="Special Relativity physics poster design by 2046 Print Shop"
            pastel="sky"
          />
          <p>
            In 1905, Einstein said: space and time are not independent. They are two faces of a
            single fabric. Approach the speed of light and time slows, lengths contract. Physics
            never looked the same again.
          </p>
        </PosterEntry>

        <PosterEntry num="20" title="General Relativity" tag="Gravity · Geometry">
          <PosterImage
            src={`${R2}/General%20Relativity.jpg`}
            alt="General Relativity physics poster design by 2046 Print Shop"
            pastel="rose"
          />
          <p>
            Special relativity&rsquo;s sequel, ten years later. This time Einstein explained
            gravity: large masses bend space-time, and even light follows that curvature. Black
            holes, gravitational waves — all were predictions of general relativity before they were
            observations. You can watch the theory being assembled in real time in Einstein&rsquo;s{" "}
            <ArticleProseLink href="/articles/zurich-notebook">
              Zurich Notebook
            </ArticleProseLink>
            , where the field equations emerge across dozens of pages of trial and error.
          </p>
        </PosterEntry>

        <PosterEntry num="21" title="Entropy" tag="Disorder · Arrow of Time">
          <PosterImage
            src={`${R2}/Entropy.jpg`}
            alt="Entropy physics poster design by 2046 Print Shop"
            pastel="peach"
          />
          <p>
            A room is easy to scatter, hard to tidy. Entropy measures exactly that tendency: systems
            move toward disorder. It&rsquo;s the heart of the second law of thermodynamics. And
            it&rsquo;s also the reason time flows in only one direction. Marcus du Sautoy&rsquo;s
            documentary <em>The Code</em> — part of our{" "}
            <ArticleProseLink href="/25-beautiful-math-documentaries-to-love-math" className="article-euclid-link">
              list of beautiful math and science documentaries
            </ArticleProseLink>{" "}
            — returns to this idea again and again.
          </p>
        </PosterEntry>

        <PosterEntry num="22" title="Laws of Motion #1" tag="Inertia · Newton">
          <PosterImage
            src={`${R2}/Laws%20of%20Motion%20%231.jpg`}
            alt="Newton's First Law of Motion physics poster design by 2046 Print Shop"
            pastel="lavender"
          />
          <p>
            The law of inertia: an object in motion stays in motion, a stationary object stays still
            — unless a force intervenes. An object launched into space, with nothing ahead of it,
            continues forever. Feynman argued in his{" "}
            <ArticleProseLink href="/articles/feynman-math-education">
              lectures on physics education
            </ArticleProseLink>{" "}
            that this law is far stranger than it sounds — it took Newton to notice that rest and
            constant motion are the same state.
          </p>
        </PosterEntry>

        <PosterEntry num="23" title="Laws of Motion #2" tag="F = ma · Newton">
          <PosterImage
            src={`${R2}/Laws%20of%20Motion%20%232.jpg`}
            alt="Newton's Second Law of Motion physics poster design by 2046 Print Shop"
            pastel="lime"
          />
          <p>
            F{"\u00a0"}={"\u00a0"}ma. Force equals mass times acceleration. Newton&rsquo;s
            most-used law. It explains how much force it takes to accelerate a car, how a rocket
            gains speed. Three letters, most of classical mechanics. Richard Feynman called the
            pleasure of understanding laws like these{" "}
            <ArticleProseLink href="/articles/feynman-technique" className="article-euclid-link">
              the pleasure of finding things out
            </ArticleProseLink>
            .
          </p>
        </PosterEntry>

        <PosterEntry num="24" title="Laws of Motion #3" tag="Action · Reaction">
          <PosterImage
            src={`${R2}/Laws%20of%20Motion%20%233.jpg`}
            alt="Newton's Third Law of Motion physics poster design by 2046 Print Shop"
            pastel="sky"
          />
          <p>
            For every action there is an equal and opposite reaction. When you push against the
            floor, the floor pushes back. A rocket exhausts gas downward; the rocket goes up.
            Newton&rsquo;s third law is one of the first things taught in physics — and one of the
            deepest things it says.
          </p>
        </PosterEntry>

      </div>

      {/* ── FOOTER ── */}
      <footer className="mt-14 border-t border-[var(--line)] pt-8">
        <p className="font-serif text-[0.88rem] italic leading-relaxed text-[var(--ink-muted)]">
          2046 Print Shop designed these for a classroom. But what they actually did was turn
          physics concepts into objects. Something hanging on a wall behaves differently from
          something sitting in a book.
        </p>
      </footer>

    </article>
  );
}
