import { ArticleProseLink } from "@/components/articles/article-prose-link";
import { ArticleImageLightbox } from "@/components/articles/article-image-lightbox";

const R2 = "https://pub-57855d8f88704d1cafba485f1b715e8d.r2.dev";
const HERO_IMG = "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/25%20Beautiful%20Math%20Documentaries%20to%20Make%20Students%20Love%20Mathematics.webp";

/* ── HERO IMAGE ── */
function HeroImage() {
  return (
    <figure className="mb-12 overflow-hidden rounded-[var(--radius-card)] p-3 shadow-[var(--shadow-card)] sm:-mx-8 sm:p-4 lg:-mx-16" style={{ backgroundColor: "#0d0b08" }}>
      <ArticleImageLightbox src={HERO_IMG} alt="25 Beautiful Math Documentaries — vintage TV screen with math documentary">
        <div className="w-full rounded-xl bg-black/20 p-1 sm:p-1.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={HERO_IMG}
            alt="25 Beautiful Math Documentaries — vintage TV screen with math documentary"
            className="mx-auto block h-auto w-full rounded-lg object-contain transition-transform duration-500 group-hover:scale-[1.01]"
            loading="eager"
            decoding="async"
            draggable={false}
          />
        </div>
      </ArticleImageLightbox>
    </figure>
  );
}

/* ── DOC ENTRY ── */
function DocEntry({
  num,
  title,
  tag,
  videoId,
  children,
}: {
  num: string;
  title: string;
  tag: string;
  videoId: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-[var(--line)] pb-4 pt-10">
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
      <div className="mb-6 space-y-4 border-l border-[var(--line-soft)] pl-5 font-serif text-[0.95rem] leading-[1.85] text-[var(--ink)]">
        {children}
      </div>
      <VideoEmbed id={videoId} title={title} />
    </div>
  );
}

/* ── PULL QUOTE ── */
function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-10 rounded-r-xl border-l-[3px] border-[var(--pastel-sky)] bg-[color-mix(in_srgb,var(--pastel-sky)_35%,white)] py-5 pl-6 pr-5">
      <p className="font-serif text-[1.05rem] italic leading-relaxed text-[var(--ink)]">
        {children}
      </p>
    </blockquote>
  );
}

/* ── VIDEO EMBED ── */
function VideoEmbed({ id, title }: { id: string; title: string }) {
  return (
    <figure className="mt-6 overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-card)] sm:-mx-8 lg:-mx-16">
      <div className="relative h-0 overflow-hidden bg-black" style={{ paddingBottom: "56.25%" }}>
        <iframe
          className="absolute inset-0 h-full w-full border-0"
          src={`https://www.youtube.com/embed/${id}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </figure>
  );
}

/* ── MAIN EXPORT ── */
export function MathDocumentariesArticle() {
  return (
    <article className="mx-auto max-w-[680px] px-[var(--page-pad)] py-16 text-[var(--ink)]">

      {/* ── HERO ── */}
      <header className="mb-12 border-b border-[var(--line)] pb-10">
        <p className="mb-5 font-sans text-[0.65rem] uppercase leading-relaxed tracking-[0.18em] text-[var(--ink-muted)]">
          Mathematics · Documentary
        </p>
        <h1 className="font-serif text-[clamp(2rem,5vw,3rem)] font-normal leading-[1.2] text-[var(--ink)]">
          25 Beautiful Math Documentaries to Make Students{" "}
          <em className="italic">Love</em> Mathematics
        </h1>
      </header>

      {/* ── HERO IMAGE ── */}
      <HeroImage />

      {/* ── INTRO ── */}
      <section className="mb-12 border-l-[1.5px] border-[var(--line-soft)] pl-7 font-serif text-[0.95rem] leading-[1.9] text-[var(--ink-muted)]">
        <p className="mb-5">
          Mathematics lives inside the loneliest of stories. Most great discoveries happen in a
          room with no one else present — on paper, inside a silence that can last years. Andrew
          Wiles worked for seven years without telling anyone. Paul Erdős never owned a home; he
          dragged a suitcase from colleague to colleague until the day he died. Maryam Mirzakhani
          filled her notebooks not with equations but with drawings, as though mathematics were a
          visual language only she could read.
        </p>
        <p className="mb-5">
          When you watch these people — really watch them — something shifts. You realize that what
          makes someone fall in love with mathematics is never the formulas. It&rsquo;s the
          obsession. The particular madness of chasing a question that doesn&rsquo;t have to give
          you anything back. The feeling, when something finally opens up, that is almost impossible
          to describe to anyone who hasn&rsquo;t felt it. Richard Feynman called it{" "}
          <ArticleProseLink href="/articles/feynman-technique" className="article-euclid-link">
            the pleasure of finding things out
          </ArticleProseLink>
          . These films are full of that pleasure.
        </p>
        <p className="mb-5">
          Every documentary on this list shows that other face of mathematics. Some are portraits,
          some are adventures, some are almost thrillers. But in all of them you sense the same
          thing: the person on screen isn&rsquo;t performing. They genuinely cannot stop.
        </p>

        <PullQuote>
          &ldquo;Open any one of them. The first ten minutes will tell you everything.&rdquo;
        </PullQuote>

        <p>
          For a classroom, or for a quiet evening alone. If you want to go deeper after watching,{" "}
          <ArticleProseLink
            href="/17-best-math-youtube-channels-to-study-mathematics"
            className="article-euclid-link"
          >
            there are channels built for exactly that
          </ArticleProseLink>
          .
        </p>
      </section>

      {/* ── DIVIDER ── */}
      <div className="my-12 flex items-center gap-4">
        <span className="h-px flex-1 bg-[var(--line-soft)]" />
        <span className="font-serif text-lg text-[var(--ink-muted)]">§</span>
        <span className="h-px flex-1 bg-[var(--line-soft)]" />
      </div>

      {/* ── DOCS ── */}
      <div className="space-y-0">

        <DocEntry num="01" title="A Trip to Infinity" tag="Infinity · Universe" videoId="CNFm_DzHDaE">
          <p>
            Thinking about infinity is like watching the brain fight itself. Mathematicians, particle
            physicists, and cosmologists gather here to do exactly that — and they pull the viewer
            along with them. Can infinities have different sizes? Is the universe genuinely infinite?
            The answers make the questions larger, not smaller.
          </p>
        </DocEntry>

        <DocEntry num="02" title="The Great Math Mystery" tag="Philosophy · Universe" videoId="Ivo47CUpmC4">
          <p>
            Is mathematics a human invention or the hidden language of the universe? Very few
            documentaries take this question seriously enough to sit with it. This one does. It asks
            why the laws of physics are mathematical at all — and never lets go of the
            &ldquo;why,&rdquo; which means it never lets go of you either.
          </p>
        </DocEntry>

        <DocEntry num="03" title="I Want to Be a Mathematician: Paul Halmos" tag="Portrait · Pedagogy" videoId="ONvYPldXoZs">
          <p>
            Paul Halmos was one of the rare mathematicians who understood how mathematics should be
            written and taught. This 44-minute film contains a rare interview — and it&rsquo;s
            candid in ways that academic portraits rarely are. Why someone chooses mathematics, how
            it feels to live inside it, what makes a proof beautiful. Hard to find a more honest
            source.
          </p>
        </DocEntry>

        <DocEntry num="04" title="Hunting the Hidden Dimension" tag="Fractal · Geometry" videoId="qABFYiYqXSU">
          <p>
            How do you measure a coastline? The closer you look, the longer it gets. Fractal
            geometry was born from exactly that paradox. This documentary follows Mandelbrot&rsquo;s
            strange discovery into mountains, clouds, circulatory systems, and the animation
            industry. For anyone who wants to see how mathematics hides in the places no one thinks
            to look — similar to how{" "}
            <ArticleProseLink href="/articles/geometry-behind-pringles" className="article-euclid-link">
              hyperbolic geometry hides in a crisp
            </ArticleProseLink>
            .
          </p>
        </DocEntry>

        <DocEntry num="05" title="Between the Folds" tag="Origami · Art" videoId="DiIr7du6Y3w">
          <p>
            What could paper folding have to do with mathematical proof? Most people who ask that
            question before watching this film understand the answer by the end of it. Ten artists
            and theoretical scientists who abandoned conventional careers to fold paper — but really,
            a film about what happens when you refuse to accept the walls between disciplines.
          </p>
        </DocEntry>

        <DocEntry num="06" title="Secrets of the Surface: Maryam Mirzakhani" tag="Portrait · Role Model" videoId="v0KDDz0s9JA">
          <p>
            Maryam Mirzakhani didn&rsquo;t write in her notebooks — she drew. In 2014 she became
            the first woman and the first Iranian to receive the Fields Medal, mathematics&rsquo;
            highest honour. This film enters her mathematical world while also tracing her path as an
            immigrant, a woman, and a student. A reminder that sometimes what makes someone love
            mathematics is simply seeing someone like themselves do it first.
          </p>
        </DocEntry>

        <DocEntry num="07" title="A Brilliant Madness: John Nash" tag="Portrait · Game Theory" videoId="6umPEeu5-8I">
          <p>
            At twenty, John Nash wrote a proof. That proof spent decades becoming a foundation of
            modern economic theory. Meanwhile, Nash spent those same decades in and out of
            psychiatric hospitals, nearly forgotten, believing he was receiving messages from aliens.
            He received the Nobel Prize in 1994, as he was just beginning to surface. One of the few
            films that holds mathematical genius and human fragility in the same frame at the same
            time.
          </p>
        </DocEntry>

        <DocEntry num="08" title="Taking the Long View: Shiing-Shen Chern" tag="Portrait · Bridges" videoId="pkeH-03PlJk">
          <p>
            Shiing-Shen Chern was one of the great geometers of the twentieth century. But this
            documentary is as much about what he built between people as what he built in
            mathematics — bridges between China and the West, between pure research and human
            connection. A man who carried the temperament of a classical Chinese sage and the mind
            of a modern mathematician in the same body.
          </p>
        </DocEntry>

        <DocEntry num="09" title="The Proof" tag="Fermat · Wiles" videoId="i0UTeQfnzfM">
          <p>
            Andrew Wiles wept on camera when he announced the solution to Fermat&rsquo;s Last
            Theorem. This documentary tells the road to that moment: seven years of secret work, an
            error, a crisis, and finally the solution. One of the most dramatic moments in the
            history of mathematics, edited almost like a thriller. Just as{" "}
            <ArticleProseLink href="/articles/marilyn-vos-savant" className="article-euclid-link">
              some mathematical truths arrive to a hostile room
            </ArticleProseLink>
            , Wiles&rsquo;s came to a tearful one.
          </p>
        </DocEntry>

        <DocEntry num="10" title="The Code" tag="Patterns · Nature" videoId="5RAtFSEkFho">
          <p>
            Marcus du Sautoy spends three episodes asking one question: what is the hidden code
            governing our world? From the architecture of veins to the geometry of the night sky, he
            shows that numbers are everywhere — and that this is not a coincidence. Du Sautoy&rsquo;s
            narration is among the best in this genre: it carries knowledge without crushing you
            under it.
          </p>
        </DocEntry>

        <DocEntry num="11" title="La Lettre Scellee du Soldat Doblin" tag="War · Loss" videoId="5mATqN8RKbc">
          <p>
            In 1940, as France fell, a French soldier burned his papers and took his own life in a
            barn. Years later he was identified as Vincent Doblin — an extraordinarily gifted young
            mathematician. Before he died, he had sealed his work in an envelope. It remained
            unopened for sixty years. When it was finally read in 2000, it revealed work decades
            ahead of its time. One of the saddest and strangest stories in the history of
            mathematics.
          </p>
        </DocEntry>

        <DocEntry num="12" title="Hard Problems: The Road to the IMO" tag="Olympiad · Youth" videoId="Kxi_uzPLqV0">
          <p>
            The world&rsquo;s hardest mathematics competition. Six American high school students.
            This documentary follows them through the preparation, the pressure, and the fear of
            failure. Mathematics experienced as a sport, young minds wrestling with impossible
            problems — gripping even for those who have never heard of the Mathematical Olympiad.
          </p>
        </DocEntry>

        <DocEntry num="13" title="Chaos: A Mathematical Adventure" tag="Chaos · Dynamics" videoId="c0gDLEHbYCk">
          <p>
            Why is the butterfly effect a genuine mathematical concept? How does chaos theory produce
            apparent randomness inside a deterministic universe? This nine-part series by Étienne
            Ghys and collaborators explains nonlinear dynamics through extraordinary visuals — from
            Poincaré to the Lorenz attractor. Each chapter stands alone, and each one moves
            something.
          </p>
        </DocEntry>

        <DocEntry num="14" title="Julia Robinson and Hilbert's Tenth Problem" tag="Portrait · Cold War" videoId="e4x9XKNAYjU">
          <p>
            Hilbert&rsquo;s tenth problem was posed in 1900 and remained open for seventy years.
            Julia Robinson spent decades on it. The solution, when it came, arrived through an
            unlikely collaboration between an American woman mathematician and a young Soviet
            colleague — at the height of the Cold War. This documentary is simultaneously the story
            of a mathematical problem, a friendship, and an era.
          </p>
        </DocEntry>

        <DocEntry num="15" title="The Story of 1" tag="Numbers · History" videoId="Z5dky0oEDo8">
          <p>
            From scratches on a bone to Roman numerals to the Arabic system we use today — Terry
            Jones narrates this journey with a style that is somehow both comic and genuinely
            illuminating. You learn why zero took so long to be invented, why the word
            &ldquo;bankrupt&rdquo; comes from a broken table in Italian courts, and why the number 1
            didn&rsquo;t have to be where everything started.
          </p>
        </DocEntry>

        <DocEntry num="16" title="The Secret Rules of Modern Living: Algorithms" tag="Algorithms · Everyday Life" videoId="hpyxmT6KSvw">
          <p>
            Marcus du Sautoy traces 2,000-year-old problem-solvers into the present: search engines,
            navigation, social media rankings — all mathematics. He shows how they work, but more
            importantly asks where they came from. A film that reminds you mathematics is not
            abstract. It is inside everything you touch before noon.
          </p>
        </DocEntry>

        <DocEntry num="17" title="M.C. Escher: Journey into Infinity" tag="Art · Geometry" videoId="fcDFJrhfyJk">
          <p>
            Escher was not a mathematician. But mathematicians have been moved to tears by his work
            — this is documented. Infinite staircases, interlocking birds and fish, impossible
            geometries — all produced with intuition and paper. In Robin Lutz&rsquo;s portrait,
            Stephen Fry reads Escher&rsquo;s own words. For anyone who wants to see exactly where{" "}
            <ArticleProseLink href="/articles/specimens-fancy-turning" className="article-euclid-link">
              mathematics and art find each other
            </ArticleProseLink>
            .
          </p>
        </DocEntry>

        <DocEntry num="18" title="The Colours of Infinity" tag="Mandelbrot · Fractal" videoId="CYrvSGTzUQE">
          <p>
            Presented by Arthur C. Clarke, this film enters the world of the Mandelbrot set —
            objects that could never have been seen without computers, yet generated by a formula of
            breathtaking simplicity. Infinite complexity from a single equation. The discovery has
            since spread into science, medicine, weather analysis, and economics. A film about the
            moment a mathematical object became visible for the first time.
          </p>
        </DocEntry>

        <DocEntry num="19" title="N Is a Number: A Portrait of Paul Erdős" tag="Portrait · Eccentricity" videoId="EGc6rE24YSw">
          <p>
            Paul Erdős had no home and no job. He traveled the world with a single suitcase, knocked
            on doors, and asked: &ldquo;Is your brain open?&rdquo; And people let him in — because
            working with Erdős was what mathematics felt like at its most alive. The most prolific
            mathematician in history, followed across four years and four countries. Like{" "}
            <ArticleProseLink href="/articles/penrose-journal" className="article-euclid-link">
              Roger Penrose&rsquo;s notebooks
            </ArticleProseLink>
            , what Erdős left behind reveals not just what he thought, but how his mind actually
            moved.
          </p>
        </DocEntry>

      </div>

      {/* ── FOOTER ── */}
      <footer className="mt-14 border-t border-[var(--line)] pt-8">
        <p className="font-serif text-[0.88rem] italic leading-relaxed text-[var(--ink-muted)]">
          Whichever of these you open first, you will notice something at some point: the person on
          screen is not there for the audience. They are there for the mathematics. That small
          difference changes everything.
        </p>
      </footer>

    </article>
  );
}
