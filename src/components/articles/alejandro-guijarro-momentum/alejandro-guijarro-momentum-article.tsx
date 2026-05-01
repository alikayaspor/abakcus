import { ArticleProseLink } from "@/components/articles/article-prose-link";
import { UnitCircleSectionReveal } from "@/components/articles/unit-circle/unit-circle-section-reveal";
import { PASTEL } from "@/data/pastel-palette";

const R2 = "https://pub-98e13baa8ca84d53b2e3ee903a8fce62.r2.dev";

const IMAGES = [
  { src: `${R2}/Alejandro%20Guijarro%20Physics%20Blackboards%201.jpg`,  caption: "Momentum — Cambridge, 2011" },
  { src: `${R2}/Alejandro%20Guijarro%20Physics%20Blackboards%202.jpg`,  caption: "Momentum — Oxford, 2011" },
  { src: `${R2}/Alejandro%20Guijarro%20Physics%20Blackboards%203.jpg`,  caption: "Momentum — Stanford, 2010" },
  { src: `${R2}/Alejandro%20Guijarro%20Physics%20Blackboards.jpg`,      caption: "Momentum — UC Berkeley, 2011" },
  { src: `${R2}/Alejandro%20Guijarro%20Physics%20Blackboards%205.jpg`,  caption: "Momentum — CERN, Geneva, 2012" },
  { src: `${R2}/Alejandro%20Guijarro%20Physics%20Blackboards%204.jpg`,  caption: "Momentum — SLAC, Stanford, 2010" },
  { src: `${R2}/Alejandro%20Guijarro%20Physics%20Blackboards%207.jpg`,  caption: "Momentum — MIT, 2011" },
  { src: `${R2}/Alejandro%20Guijarro%20Physics%20Blackboards%206.jpg`,  caption: "Momentum — Instituto de Física Corpuscular, Valencia, 2012" },
  { src: `${R2}/Alejandro%20Guijarro%20Physics%20Blackboards%208.jpg`,  caption: "Momentum — Cambridge II, 2011" },
  { src: `${R2}/Alejandro%20Guijarro%20Physics%20Blackboards%209.jpg`,  caption: "Momentum — Oxford II, 2011" },
  { src: `${R2}/Alejandro%20Guijarro%20Physics%20Blackboards%2010.jpg`, caption: "Momentum — Berkeley II, 2011" },
  { src: `${R2}/Alejandro%20Guijarro%20Physics%20Blackboards%2011.jpg`, caption: "Momentum — CERN II, 2012" },
  { src: `${R2}/Alejandro%20Guijarro%20Physics%20Blackboards%2012.jpg`, caption: "Momentum — Stanford II, 2010" },
  { src: `${R2}/Alejandro%20Guijarro%20Physics%20Blackboards%2013.jpg`, caption: "Momentum — Cambridge III, 2011" },
  { src: `${R2}/Alejandro%20Guijarro%20Physics%20Blackboards%2014.jpg`, caption: "Momentum — Oxford III, 2011" },
  { src: `${R2}/Alejandro%20Guijarro%20Physics%20Blackboards%2016.jpg`, caption: "Momentum — UC Berkeley III, 2012" },
  { src: `${R2}/Alejandro%20Guijarro%20Physics%20Blackboards%2017.jpg`, caption: "Momentum — CERN III, 2012" },
  { src: `${R2}/Alejandro%20Guijarro%20Physics%20Blackboards%2015.jpg`, caption: "Momentum — MIT II, 2012" },
  { src: `${R2}/Alejandro%20Guijarro%20Physics%20Blackboards%2018.jpg`, caption: "Momentum — Stanford III, 2012" },
  { src: `${R2}/Alejandro%20Guijarro%20Physics%20Blackboards%2019.jpg`, caption: "Momentum — Series overview, 2012" },
];

function SectionHead({ title }: { title: string }) {
  return (
    <div className="mb-6 border-b border-[var(--line)] pb-3">
      <h2 className="font-serif text-[1.05rem] font-medium leading-snug tracking-[0.01em] text-[var(--ink)] sm:text-[1.15rem]">
        {title}
      </h2>
    </div>
  );
}

function PullQuote({ quote, attr }: { quote: string; attr: string }) {
  return (
    <blockquote className="my-10 rounded-r-xl border-l-[4px] border-[var(--pastel-sky)] bg-[color-mix(in_srgb,var(--pastel-sky)_20%,white)] py-5 pl-6 pr-5">
      <p className="font-serif text-[1.15rem] italic leading-relaxed text-[var(--ink)]">
        &ldquo;{quote}&rdquo;
      </p>
      <p className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-[var(--ink-muted)]">
        — {attr}
      </p>
    </blockquote>
  );
}

function Divider() {
  return (
    <div className="my-10 flex items-center gap-4" aria-hidden>
      <div className="h-px flex-1 bg-[var(--line-soft)]" />
      <span className="font-mono text-[0.65rem] tracking-[0.4em] text-[var(--ink-muted)]">· · ·</span>
      <div className="h-px flex-1 bg-[var(--line-soft)]" />
    </div>
  );
}

function StatsPanel() {
  return (
    <figure className="my-8 grid grid-cols-3 gap-px overflow-hidden rounded-sm border border-[var(--line-soft)] bg-[var(--line-soft)]">
      {[
        { value: "3", label: "Years shooting" },
        { value: "8+", label: "Institutions" },
        { value: "1:1", label: "Print-to-board scale" },
      ].map((s) => (
        <div key={s.label} className="flex flex-col items-center gap-2 bg-[var(--surface)] px-3 py-6 text-center">
          <span className="block font-serif text-[2rem] font-medium leading-none text-[var(--ink)]">{s.value}</span>
          <span className="mt-1 font-mono text-[0.58rem] uppercase tracking-[0.08em] text-[var(--ink-muted)]">{s.label}</span>
        </div>
      ))}
    </figure>
  );
}

/** Single gallery image — natural aspect ratio, fills card, no click-to-zoom */
function GalleryImage({
  src,
  alt,
  caption,
  priority,
  pastel,
}: {
  src: string;
  alt: string;
  caption: string;
  priority?: boolean;
  pastel: keyof typeof PASTEL;
}) {
  return (
    <figure
      className="overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-card)]"
      style={{ backgroundColor: PASTEL[pastel] }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="block h-auto w-full"
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
      <figcaption className="px-4 py-3 text-center font-mono text-[0.58rem] uppercase tracking-[0.1em] text-[var(--ink-muted)]">
        {caption}
      </figcaption>
    </figure>
  );
}

// Cycle through pastels so adjacent cards differ
const PASTEL_CYCLE: (keyof typeof PASTEL)[] = ["sky", "peach", "lavender", "lime", "rose"];

export function AlejandroGuijarroMomentumArticle() {
  return (
    <UnitCircleSectionReveal>
      <div className="unit-circle-article text-[var(--ink)]">

        {/* ── HEADER ── */}
        <div className="mx-auto max-w-[780px] px-[var(--page-pad)] pb-6 pt-8 text-center sm:pb-8 sm:pt-10">
          <p className="mb-5 font-sans text-[0.62rem] uppercase leading-relaxed tracking-[0.24em] text-[var(--ink-muted)] sm:text-[0.65rem]">
            Photography · Science · Art · 2010–2012
          </p>
          <h1 className="font-serif text-[clamp(2rem,6vw,3.1rem)] font-normal leading-[1.1] tracking-[-0.02em] text-[var(--ink)]">
            The Equations That Forgot They Were Equations
          </h1>
          <p className="mx-auto mt-6 max-w-[34rem] border-l-2 border-[var(--ink)] pl-5 text-left text-lg italic leading-relaxed text-[var(--ink-muted)] sm:text-xl">
            Alejandro Guijarro spent three years photographing quantum mechanics blackboards
            at Cambridge, Stanford, Oxford, CERN, and Berkeley. The result is
            Momentum — a series that asks whether science and abstraction were
            ever really different things.
          </p>
          <div className="mx-auto mt-7 h-px w-14 bg-[var(--line)] sm:mt-8" aria-hidden />
        </div>

        <article className="mx-auto max-w-[min(48rem,100%)] px-[var(--page-pad)] pb-20 pt-2 sm:pb-28">

          {/* ── FIRST TWO IMAGES — FULL BLEED, STACKED ── */}
          <div className="my-10 flex flex-col gap-4 sm:-mx-8 lg:-mx-16">
            <GalleryImage
              src={IMAGES[0]!.src}
              alt={IMAGES[0]!.caption}
              caption={IMAGES[0]!.caption}
              priority
              pastel="sky"
            />
            <GalleryImage
              src={IMAGES[1]!.src}
              alt={IMAGES[1]!.caption}
              caption={IMAGES[1]!.caption}
              pastel="peach"
            />
          </div>

          {/* ── INTRO ── */}
          <p className="intro-drop border-b border-[var(--line)] pb-8 text-lg leading-[1.82] text-[var(--ink)] sm:text-xl">
            The lecture is over. The physicist has collected their notes and left the room.
            On the blackboard behind them: a surface dense with chalk — operators, Greek
            letters, arrows connecting states, a half-erased wave function, a diagram that
            might be a Feynman diagram or might be something else entirely. Within the
            hour, a caretaker will wipe it clean.
          </p>

          <p className="mt-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
            Alejandro Guijarro arrived in between. Born in Madrid in 1979, trained at the
            Royal College of Art in London, he spent roughly three years doing exactly this
            — traveling to the quantum mechanics departments of the world&apos;s most
            prestigious universities and photographing their blackboards immediately after
            lectures. No staging, no physicists, no context. Just the board, a large-format
            camera, and whatever the previous hour had deposited there. The resulting series
            is called <em>Momentum.</em>
          </p>

          <p className="mt-5 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
            It sits in a tradition of art that treats scientific thinking as visual
            material. The{" "}
            <ArticleProseLink href="/articles/billingsley-euclid">
              geometric diagrams in Euclid&apos;s Elements
            </ArticleProseLink>{" "}
            are drawings before they are proofs. The notebook pages of
            Roger Penrose are indistinguishable, at a glance, from abstract
            expressionism. Guijarro&apos;s photographs make this latent connection explicit
            by doing almost nothing — he photographs what was already there and hangs it on
            a gallery wall.
          </p>

          <StatsPanel />

          {/* ── THE INSTITUTIONS ── */}
          <div className="mt-12">
            <SectionHead title="The Institutions" />

            <p className="text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              Guijarro traveled to the places where the hardest thinking in physics
              currently happens. Cambridge, Oxford, Stanford, UC Berkeley, SLAC National
              Accelerator Laboratory, CERN in Geneva, the Instituto de Física Corpuscular
              in Valencia, and MIT. He entered these rooms with a single operating
              principle: minimum interference. No detail of the lecture hall appears in
              the photographs. The blackboard frame is cropped out. What remains is only
              the surface — the layered record of the hour before.
            </p>
          </div>

          {/* ── IMAGES 3–4 ── */}
          <div className="my-10 flex flex-col gap-4 sm:-mx-8 lg:-mx-16">
            <GalleryImage src={IMAGES[2]!.src} alt={IMAGES[2]!.caption} caption={IMAGES[2]!.caption} pastel="lavender" />
            <GalleryImage src={IMAGES[3]!.src} alt={IMAGES[3]!.caption} caption={IMAGES[3]!.caption} pastel="lime" />
          </div>

          <PullQuote
            quote="Before he walks into a lecture hall Guijarro has no idea what he will find. He begins by recording the blackboard with the minimum of interference. No detail of the lecture hall is included, the blackboard frame is removed and we are left with a surface charged with abstract equations."
            attr="Alejandro Guijarro, Artist Statement"
          />

          {/* ── WHAT QUANTUM MECHANICS LOOKS LIKE ── */}
          <div className="mt-12">
            <SectionHead title="What Quantum Mechanics Looks Like" />

            <p className="text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The photographs divide roughly into two types. Some boards are dense with
              notation — equations chase each other across every inch of available surface,
              colors clash where different lecturers have added to the same session, diagrams
              interrupt strings of symbols, words appear suddenly amid pure mathematics.
              These boards document the physical texture of a working physics lecture:
              not elegant, not clean, but alive. They have much in common with the
              annotated working papers behind something like the{" "}
              <ArticleProseLink href="/articles/inkala-sudoku">
                Inkala Sudoku
              </ArticleProseLink>
              {" "}— knowledge as evidence of effort, not performance of ease.
            </p>

            <p className="mt-5 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              Others have been erased — not cleanly, but substantially. What remains is the
              chalk dust of the act itself: broad arcs left by the eraser, ghost traces of
              equations that barely survived, layers of previous sessions showing through
              the grey-green haze. Guijarro&apos;s own best photograph, as he described
              it to The Guardian, is one of these: a Cambridge board wiped by a caretaker
              who had no idea he was making anything. The marks look, as Guijarro put it,
              like Cy Twombly or Jackson Pollock. He showed the photograph to the caretaker
              afterward. The caretaker was surprised.
            </p>
          </div>

          {/* ── IMAGES 5–6 ── */}
          <div className="my-10 flex flex-col gap-4 sm:-mx-8 lg:-mx-16">
            <GalleryImage src={IMAGES[4]!.src} alt={IMAGES[4]!.caption} caption={IMAGES[4]!.caption} pastel="rose" />
            <GalleryImage src={IMAGES[5]!.src} alt={IMAGES[5]!.caption} caption={IMAGES[5]!.caption} pastel="sky" />
          </div>

          {/* ── THE SCALE DECISION ── */}
          <div className="mt-12">
            <SectionHead title="The Scale Decision" />

            <p className="text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              One technical choice determines the entire experience of seeing these works in
              person: Guijarro prints every photograph at exactly the same size as the
              original blackboard. When you stand in front of <em>Cambridge I, 2011</em>{" "}
              in a gallery, you are standing exactly as close to it as a student in the
              front row would have been. The scale is not approximate — it is measured and
              reproduced precisely.
            </p>

            <p className="mt-5 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              A large institutional blackboard can run two meters wide. Printed at that
              scale, the chalk marks are actual size. The hand that made them becomes
              present in a way that a standard print does not allow. You are not looking at
              a record of the board. You are, in some functional sense, looking at the board.
            </p>

            <p className="mt-5 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The gallery format then does something strange: the blackboard, now a framed
              photograph hung on a white wall in clean light, has become a painting.
              Visitors who do not know what they are looking at often assume they are
              looking at a painting. The confusion is appropriate. That is precisely the
              territory <em>Momentum</em> inhabits.
            </p>
          </div>

          {/* ── IMAGES 7–8 ── */}
          <div className="my-10 flex flex-col gap-4 sm:-mx-8 lg:-mx-16">
            <GalleryImage src={IMAGES[6]!.src} alt={IMAGES[6]!.caption} caption={IMAGES[6]!.caption} pastel="peach" />
            <GalleryImage src={IMAGES[7]!.src} alt={IMAGES[7]!.caption} caption={IMAGES[7]!.caption} pastel="lavender" />
          </div>

          <Divider />

          {/* ── THE PALIMPSEST PROBLEM ── */}
          <div className="mt-2">
            <SectionHead title="The Palimpsest Problem" />

            <p className="text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              A palimpsest is a manuscript from which an earlier text has been scraped away
              and written over. The earlier text, never quite gone, bleeds through the new
              one. Every blackboard in the <em>Momentum</em> series is a palimpsest. The
              boards at Cambridge and Oxford and CERN are not erased between every use —
              layers accumulate. A faint equation from last week sits beneath a definitive
              one from this morning. The eraser does not erase so much as redistribute.
              Chalk is moved; some stays.
            </p>

            <p className="mt-5 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              As critic Francis Hodgson observed, this makes the blackboards formally
              identical to the scientific process they record. Science advances by
              revision — by writing over what no longer works while leaving traces of why
              it had to go. The boards do not document finished knowledge. They document
              knowledge in the act of correcting itself. The{" "}
              <ArticleProseLink href="/articles/mit-1869">
                algebra problems MIT set in 1869
              </ArticleProseLink>{" "}
              are still recognizably the same questions — but the blackboards they were
              worked out on vanished within the hour.
            </p>
          </div>

          {/* ── IMAGES 9–10 ── */}
          <div className="my-10 flex flex-col gap-4 sm:-mx-8 lg:-mx-16">
            <GalleryImage src={IMAGES[8]!.src} alt={IMAGES[8]!.caption} caption={IMAGES[8]!.caption} pastel="lime" />
            <GalleryImage src={IMAGES[9]!.src} alt={IMAGES[9]!.caption} caption={IMAGES[9]!.caption} pastel="rose" />
          </div>

          {/* ── EQUATIONS AS ABSTRACT MARKS ── */}
          <div className="mt-12">
            <SectionHead title="Equations as Abstract Marks" />

            <p className="text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              There is a question the series refuses to resolve: are these photographs of
              meaningful marks or abstract marks? The answer is clearly both, and the
              refusal to choose between them is where the work lives.
            </p>

            <p className="mt-5 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              A physicist looking at a board from the Stanford linear accelerator program
              reads specific things. The notation has meaning. The errors matter. The
              relationship between one symbol and the next is either correct or incorrect.
              For the physicist, these are not abstract marks at all.
            </p>

            <p className="mt-5 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              For everyone else, they are nothing but marks. The density, color, pressure,
              and layering of chalk on a dark surface. The way the eraser&apos;s arc creates
              a landscape-like sweep across the lower third. The way multicolored chalk turns
              a board that could be a map into something that could be a painting by Basquiat
              — a comparison the gallery notes for <em>Momentum</em> make explicitly,
              alongside Twombly. The photographs hold both readings simultaneously.
              Neither cancels the other.
            </p>
          </div>

          {/* ── IMAGES 11–14 ── */}
          <div className="my-10 flex flex-col gap-4 sm:-mx-8 lg:-mx-16">
            <GalleryImage src={IMAGES[10]!.src} alt={IMAGES[10]!.caption} caption={IMAGES[10]!.caption} pastel="sky" />
            <GalleryImage src={IMAGES[11]!.src} alt={IMAGES[11]!.caption} caption={IMAGES[11]!.caption} pastel="peach" />
            <GalleryImage src={IMAGES[12]!.src} alt={IMAGES[12]!.caption} caption={IMAGES[12]!.caption} pastel="lavender" />
            <GalleryImage src={IMAGES[13]!.src} alt={IMAGES[13]!.caption} caption={IMAGES[13]!.caption} pastel="rose" />
          </div>

          <PullQuote
            quote="These are not works that pretend to hold any kind of objective truth. Stripped of their wrapping, they are photographs of large drawings. Yet the process of finding, documenting and collecting them has a transmutational effect."
            attr="Alejandro Guijarro"
          />

          {/* ── THE CHALLENGE OF FINDING BLACKBOARDS ── */}
          <div className="mt-12">
            <SectionHead title="The Challenge of Finding Blackboards" />

            <p className="text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              An unexpected practical difficulty: blackboards are disappearing. By the time
              Guijarro began this project, many physics departments had migrated to
              whiteboards or interactive screens. He found boards primarily in two places
              — lecture theatres that had not yet been renovated, and the private offices
              of senior researchers who had specifically requested them.
            </p>

            <p className="mt-5 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              Working physicists who still use blackboards tend to use them for a particular
              kind of thinking: the sustained, non-digital kind that involves standing up,
              moving, erasing, and reconsidering. Some of the physicists Guijarro
              approached were puzzled by the project. They did not consider what they had
              written to be important — certainly not important enough to photograph. They
              did not see it as art. They saw it as yesterday&apos;s work, now superseded.
              Guijarro photographed it anyway.
            </p>
          </div>

          {/* ── IMAGES 15–18 ── */}
          <div className="my-10 flex flex-col gap-4 sm:-mx-8 lg:-mx-16">
            <GalleryImage src={IMAGES[14]!.src} alt={IMAGES[14]!.caption} caption={IMAGES[14]!.caption} pastel="lime" />
            <GalleryImage src={IMAGES[15]!.src} alt={IMAGES[15]!.caption} caption={IMAGES[15]!.caption} pastel="sky" />
            <GalleryImage src={IMAGES[16]!.src} alt={IMAGES[16]!.caption} caption={IMAGES[16]!.caption} pastel="peach" />
            <GalleryImage src={IMAGES[17]!.src} alt={IMAGES[17]!.caption} caption={IMAGES[17]!.caption} pastel="lavender" />
          </div>

          <Divider />

          {/* ── WHAT THE PHOTOGRAPHS ACTUALLY ARE ── */}
          <div className="mt-2">
            <SectionHead title="What the Photographs Actually Are" />

            <p className="text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The cleanest description of <em>Momentum</em> is also the one Guijarro
              offers himself: they are photographs of large drawings, made by people who did
              not know they were drawing. The physicist wrote in chalk on a black surface,
              moved through the material problem at hand, and left. Photography intervened
              and reclassified it. A crime scene becomes a document. A face becomes a
              portrait. A lecture becomes a painting. The conversion is irreversible.
            </p>

            <p className="mt-5 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              That gap — between the maker&apos;s intention and the final meaning of the
              mark — is where <em>Momentum</em> permanently resides. Three years of travel,
              careful measurement, and precise printing to land in a space that quantum
              mechanics itself might recognize: the meaning depends entirely on the observer.
            </p>
          </div>

          {/* ── FINAL TWO IMAGES ── */}
          <div className="my-10 flex flex-col gap-4 sm:-mx-8 lg:-mx-16">
            <GalleryImage src={IMAGES[18]!.src} alt={IMAGES[18]!.caption} caption={IMAGES[18]!.caption} pastel="rose" />
            <GalleryImage src={IMAGES[19]!.src} alt={IMAGES[19]!.caption} caption={IMAGES[19]!.caption} pastel="lime" />
          </div>

          {/* ── ARTIST BIO ── */}
          <aside className="mt-10 border border-[var(--line-soft)] bg-[color-mix(in_srgb,var(--pastel-sky)_10%,white)] px-5 py-5">
            <p className="mb-2 font-mono text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
              About the Artist
            </p>
            <p className="font-serif text-[0.9rem] leading-relaxed text-[var(--ink-muted)]">
              Alejandro Guijarro was born in Madrid in 1979. He received an MA in
              photography from the Royal College of Art, London, in 2010. He lives and
              works in London and Madrid. His influences include Cy Twombly and Mark
              Rothko. <em>Momentum</em> was his first solo series and remains his most
              widely exhibited work. The series was first shown at the Tristan Hoare
              Gallery, London, October 2012.
            </p>
          </aside>

          {/* ── FOOTNOTE ── */}
          <footer className="mt-10 border-t border-[var(--line-soft)] pt-6 font-serif text-[0.82rem] italic leading-relaxed text-[var(--ink-muted)]">
            Sources: Alejandro Guijarro, Artist Statement; Francis Hodgson, extended essay on <em>Momentum</em>; The Guardian; PhotoEspaña exhibition catalogue.
          </footer>
        </article>

      </div>
    </UnitCircleSectionReveal>
  );
}
