import Link from "next/link";
import { ArticleProseLink } from "@/components/articles/article-prose-link";
import { ArticleImageLightbox } from "@/components/articles/article-image-lightbox";
import { PASTEL } from "@/data/pastel-palette";

const R2 = "https://pub-57855d8f88704d1cafba485f1b715e8d.r2.dev";

/* ── CHANNEL IMAGE ── */
function ChannelImage({
  src,
  alt,
  pastel,
}: {
  src: string;
  alt: string;
  pastel: keyof typeof PASTEL;
}) {
  return (
    <figure
      className="my-10 overflow-hidden rounded-[var(--radius-card)] p-3 shadow-[var(--shadow-card)] sm:-mx-8 sm:p-4 lg:-mx-16"
      style={{ backgroundColor: PASTEL[pastel] }}
    >
      <ArticleImageLightbox src={src} alt={alt}>
        <div className="w-full rounded-xl bg-white/30 p-1 sm:p-1.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            className="mx-auto block h-auto w-full rounded-lg object-contain transition-transform duration-500 group-hover:scale-[1.01]"
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        </div>
      </ArticleImageLightbox>
    </figure>
  );
}

/* ── CHANNEL ENTRY ── */
function ChannelEntry({
  num,
  name,
  tag,
  href,
  children,
}: {
  num: string;
  name: string;
  tag: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-[var(--line)] pt-10">
      <div className="mb-5 flex flex-wrap items-baseline gap-3">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
          {num}
        </span>
        <h2 className="font-serif text-[1.6rem] font-normal leading-tight tracking-[-0.01em] text-[var(--ink)]">
          {name}
        </h2>
        <span className="ml-auto rounded-sm border border-[var(--line-soft)] bg-[var(--tonal)] px-2.5 py-0.5 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-[var(--ink-muted)]">
          {tag}
        </span>
      </div>
      <div className="space-y-4 border-l border-[var(--line-soft)] pl-5 font-serif text-[0.95rem] leading-[1.85] text-[var(--ink)]">
        {children}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="!mt-3 inline-flex items-center gap-1 font-sans text-[0.7rem] tracking-[0.06em] text-[var(--ink-muted)] transition-colors hover:text-[var(--ink)] no-underline border-b border-[var(--line-soft)] pb-px"
        >
          {href.replace("https://", "")} ↗
        </a>
      </div>
    </div>
  );
}

/* ── PULL QUOTE ── */
function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-10 rounded-r-xl border-l-[3px] border-[var(--pastel-peach)] bg-[color-mix(in_srgb,var(--pastel-peach)_35%,white)] py-5 pl-6 pr-5">
      <p className="font-serif text-[1.05rem] italic leading-relaxed text-[var(--ink)]">
        {children}
      </p>
    </blockquote>
  );
}

/* ── MAIN EXPORT ── */
export function MathYouTubeChannelsArticle() {
  return (
    <article className="mx-auto max-w-[680px] px-[var(--page-pad)] py-16 text-[var(--ink)]">

      {/* ── HERO ── */}
      <header className="mb-12 border-b border-[var(--line)] pb-10">
        <p className="mb-5 font-sans text-[0.65rem] uppercase leading-relaxed tracking-[0.18em] text-[var(--ink-muted)]">
          Mathematics · YouTube
        </p>
        <h1 className="mb-8 font-serif text-[clamp(2rem,5vw,3rem)] font-normal leading-[1.2] text-[var(--ink)]">
          Five Channels That Make You{" "}
          <em className="italic text-[var(--ink)]">Love</em> Mathematics
        </h1>
        <figure
          className="overflow-hidden rounded-[var(--radius-card)] p-3 shadow-[var(--shadow-card)] sm:-mx-8 sm:p-4 lg:-mx-16"
          style={{ backgroundColor: "#111009" }}
        >
          <ArticleImageLightbox
            src={`${R2}/Five%20Channels%20That%20Make%20You%20Love%20Mathematics.png`}
            alt="Five Channels That Make You Love Mathematics — vintage TV displaying mathematical equations"
          >
            <div className="w-full rounded-xl bg-black/20 p-1 sm:p-1.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${R2}/Five%20Channels%20That%20Make%20You%20Love%20Mathematics.png`}
                alt="Five Channels That Make You Love Mathematics — vintage TV displaying mathematical equations"
                className="mx-auto block h-auto w-full rounded-lg object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                loading="eager"
                decoding="async"
                draggable={false}
              />
            </div>
          </ArticleImageLightbox>
        </figure>
      </header>

      {/* ── INTRO ── */}
      <section className="mb-12 border-l-[1.5px] border-[var(--line-soft)] pl-7 font-serif text-[0.95rem] leading-[1.9] text-[var(--ink-muted)]">
        <p className="mb-5">
          In 1994, Andrew Wiles announced that he had solved a problem that had gone unsolved for
          358 years. Fermat&rsquo;s Last Theorem. Most of the journalists in the room had no idea
          what it meant. But everyone noticed that Wiles was crying. On camera, mid-sentence, his
          voice breaking. A man who had worked alone for years, telling almost no one — and it was
          finally over.
        </p>
        <p className="mb-5">
          Mathematics has a side that looks nothing like what most of us experienced in school. From
          the outside, it looks like formulas to memorize, exams to survive, symbols standing on a
          board that seem to belong to someone else&rsquo;s world. From the inside, it&rsquo;s
          something else entirely: questions worth chasing for a lifetime, problems that swallow
          hours whole, and{" "}
          <ArticleProseLink
            href="/articles/feynman-technique"
            className="article-euclid-link"
          >
            a particular kind of relief when something finally clicks
          </ArticleProseLink>{" "}
          — felt physically, not just understood.
        </p>
        <p className="mb-5">
          Every channel on this list shares one preoccupation: showing that mathematics doesn&rsquo;t
          look the way it looks from the outside. Some do it with animations. Some with a pen and
          brown paper. Some from a classroom where students ask the wrong questions in exactly the
          right ways. But in all of them you sense the same thing — that the person talking genuinely
          believes in what they&rsquo;re showing you. None of these channels were built around the
          idea of teaching mathematics. They were built by people who loved it first, and only then
          turned the camera on.
        </p>

        <PullQuote>
          &ldquo;The person talking isn&rsquo;t there for you. They&rsquo;re there for the subject.
          That small difference changes everything.&rdquo;
        </PullQuote>

        <p>
          A fair warning: if you open any of these channels intending to watch just one video,
          don&rsquo;t be surprised to find yourself still there half an hour later.
        </p>
      </section>

      {/* ── DIVIDER ── */}
      <div className="my-12 flex items-center gap-4">
        <span className="h-px flex-1 bg-[var(--line-soft)]" />
        <span className="font-serif text-lg text-[var(--ink-muted)]">§</span>
        <span className="h-px flex-1 bg-[var(--line-soft)]" />
      </div>

      {/* ── CHANNELS ── */}
      <div className="space-y-0">

        {/* 01 — Numberphile */}
        <ChannelEntry
          num="01"
          name="Numberphile"
          tag="Numbers · Curiosity"
          href="https://www.youtube.com/@numberphile"
        >
          <p>Brady Haran is a journalist. Not a mathematician. And that&rsquo;s precisely what makes Numberphile different from everything else.</p>
          <p>
            In each video, Haran sits down with a mathematician and asks a single question: can you
            explain this to me? Brown paper comes out, a pen appears, and someone from Cambridge or
            Oxford starts getting lost inside numbers. Why 42 is so peculiar. The existence of
            infinities of different sizes. The strange regularity hiding inside{" "}
            <ArticleProseLink href="/articles/sqrt2-irrational" className="article-euclid-link">
              the distribution of prime numbers
            </ArticleProseLink>
            . The topics are chosen so that every one of them leaves you thinking: I never thought
            about this before, and now I can&rsquo;t think about anything else.
          </p>
          <p>
            Numberphile&rsquo;s secret isn&rsquo;t production — it&rsquo;s selection. A journalist
            who knows which questions are worth asking, paired with a mathematician who still finds
            the answers genuinely exciting. Everything else follows.
          </p>
        </ChannelEntry>

        <ChannelImage
          src={`${R2}/Numberphile.png`}
          alt="Numberphile YouTube channel"
          pastel="sky"
        />

        {/* 02 — 3Blue1Brown */}
        <ChannelEntry
          num="02"
          name="3Blue1Brown"
          tag="Visualization · Intuition"
          href="https://www.youtube.com/@3blue1brown"
        >
          <p>
            Grant Sanderson believes in something: that genuinely understanding a piece of
            mathematics is a completely different experience from memorizing a formula. To prove it,
            he taught himself to write animations.
          </p>
          <p>
            The videos on 3Blue1Brown are built around making abstraction visible. What is a
            derivative — not symbolically, but as something that moves? What is a Fourier transform
            actually doing? What does the determinant of a matrix mean{" "}
            <ArticleProseLink href="/articles/unit-circle" className="article-euclid-link">
              geometrically
            </ArticleProseLink>
            ? Most textbooks answer these questions with definitions. Sanderson builds each one from
            scratch, spending hours on animations, until the viewer reaches the moment: I should have
            always seen it this way.
          </p>
          <p>
            The channel&rsquo;s name looks arbitrary until you learn that Sanderson has one blue eye
            and one brown. A small detail — but it says something about the kind of person who finds
            meaning in everything, including his own name.
          </p>
        </ChannelEntry>

        <ChannelImage
          src={`${R2}/3Blue1Brown.png`}
          alt="3Blue1Brown YouTube channel"
          pastel="lavender"
        />

        {/* 03 — Eddie Woo */}
        <ChannelEntry
          num="03"
          name="Eddie Woo"
          tag="Classroom · Human"
          href="https://www.youtube.com/@misterwootube"
        >
          <p>
            Eddie Woo is a high school teacher. The reason he started his channel in 2012 is not
            remarkable: a student was sick and missing class, so he set up a camera to record the
            lessons. Then he never stopped.
          </p>
          <p>
            Woo&rsquo;s videos aren&rsquo;t polished. The audio is imperfect, the whiteboard is
            worn, student voices drift in from the background. But Woo does one thing exceptionally
            well: he turns wrong answers into the lesson. When a student misunderstands something, he
            pauses. He asks, &ldquo;interesting — why did you think that?&rdquo; And then he builds
            the correct idea out of the misunderstanding itself. Watching this happen is more
            instructive than any{" "}
            <ArticleProseLink href="/articles/feynman-technique" className="article-euclid-link">
              textbook chapter on pedagogy
            </ArticleProseLink>{" "}
            could be.
          </p>
          <p>
            Especially for anyone who grew up thinking a great mathematics teacher was something
            other people got.
          </p>
        </ChannelEntry>

        <ChannelImage
          src={`${R2}/Eddie%20Woo.png`}
          alt="Eddie Woo YouTube channel"
          pastel="rose"
        />

        {/* 04 — Socratica */}
        <ChannelEntry
          num="04"
          name="Socratica"
          tag="University · Depth"
          href="https://www.youtube.com/@Socratica"
        >
          <p>Socratica is for the people who keep asking: what comes after this?</p>
          <p>
            Where most resources stop — at the end of secondary school mathematics — Socratica
            continues. Abstract algebra, number theory, topology: subjects that usually live inside
            thick university textbooks or impenetrable academic papers. Socratica translates them
            into short, carefully made videos. Nothing is skipped. Every definition is stated. Every
            example is chosen deliberately. Each step rests on the one before it. If{" "}
            <ArticleProseLink href="/articles/sqrt2-irrational" className="article-euclid-link">
              the irrationality of √2
            </ArticleProseLink>{" "}
            once felt like a trick, here it becomes a consequence.
          </p>
          <p>
            The tone is quieter than most channels here — less dramatic, more methodical. But
            that&rsquo;s not a weakness. Some things are understood not through excitement, but
            through patience. Socratica knows the difference.
          </p>
        </ChannelEntry>

        <ChannelImage
          src={`${R2}/Socratica.png`}
          alt="Socratica YouTube channel"
          pastel="peach"
        />

        {/* 05 — Khan Academy */}
        <ChannelEntry
          num="05"
          name="Khan Academy"
          tag="Foundation · Reliable"
          href="https://www.youtube.com/user/khanacademy"
        >
          <p>
            In 2004, Sal Khan started recording videos to help a cousin who lived far away. When the
            cousin said she preferred the videos to the live sessions, he understood something:
            perhaps everyone could learn this way. Khan Academy is now one of the largest free
            educational platforms on earth.
          </p>
          <p>
            What separates Khan Academy from everything else on this list is its nature: it
            isn&rsquo;t a place for discovery, it&rsquo;s infrastructure. From basic arithmetic to
            differential equations, everything is here — step by step, patiently, with nothing
            assumed and nothing skipped. For returning to a topic you haven&rsquo;t touched in
            years, for going back to the point where something{" "}
            <ArticleProseLink href="/articles/mit-1869" className="article-euclid-link">
              stopped making sense
            </ArticleProseLink>
            , or for starting entirely from scratch — it remains the most reliable address there is.
          </p>
          <p>
            No spectacle. But there&rsquo;s a reason it&rsquo;s still here after more than twenty
            years.
          </p>
        </ChannelEntry>

        <ChannelImage
          src={`${R2}/Khan%20Academy.png`}
          alt="Khan Academy YouTube channel"
          pastel="lime"
        />

      </div>

      {/* ── FOOTER NOTE ── */}
      <footer className="mt-14 border-t border-[var(--line)] pt-8">
        <p className="font-serif text-[0.88rem] italic leading-relaxed text-[var(--ink-muted)]">
          Whichever of these channels you open first, you&rsquo;ll notice the same thing at some
          point: the person talking isn&rsquo;t there for you. They&rsquo;re there for the subject.
          That small difference changes everything.
        </p>
      </footer>

    </article>
  );
}
