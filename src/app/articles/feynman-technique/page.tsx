import type { Metadata } from "next";
import Link from "next/link";
import { ArticleReadMore } from "@/components/articles/article-read-more";
import { SiteHeader } from "@/components/home/site-header";

const CANONICAL = "https://abakcus.com/articles/feynman-technique";
const OG_IMAGE =
  "https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/Richard%20Feynman.webp";

export const metadata: Metadata = {
  title: "The Feynman Technique: A Complete Guide — Abakcus",
  description:
    "A complete guide to the Feynman Technique — the four-step learning method developed by Nobel Prize-winning physicist Richard Feynman. Learn how it works, why it works, and how to apply it to anything.",
  authors: [{ name: "Ali Kaya" }],
  keywords: [
    "Feynman Technique",
    "Feynman learning method",
    "how to learn anything",
    "active recall",
    "Richard Feynman",
    "study techniques",
    "four step learning",
    "teach to learn",
    "gap identification learning",
    "comprehension over memorization",
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: "The Feynman Technique: A Complete Guide",
    description:
      "A complete guide to the four-step learning method developed by Richard Feynman — how it works, why it works, and how to apply it to anything.",
    url: CANONICAL,
    siteName: "Abakcus",
    type: "article",
    publishedTime: "2026-04-18",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 800,
        alt: "Richard Feynman — the physicist behind the Feynman Technique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Feynman Technique: A Complete Guide",
    description:
      "A complete guide to the four-step learning method developed by Richard Feynman — how it works, why it works, and how to apply it to anything.",
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Feynman Technique: A Complete Guide",
  description:
    "A complete guide to the Feynman Technique — the four-step learning method that uses teaching as the deepest form of understanding.",
  datePublished: "2026-04-18",
  dateModified: "2026-04-18",
  author: {
    "@type": "Person",
    name: "Ali Kaya",
    url: "https://abakcus.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Abakcus",
    url: "https://abakcus.com",
  },
  image: OG_IMAGE,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": CANONICAL,
  },
  keywords:
    "Feynman Technique, learning method, active recall, Richard Feynman, study techniques",
  articleSection: "Learning · Cognition",
};

export default function FeynmanTechniquePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <div className="uc-page-bg pb-4">
        <div className="mx-auto max-w-[var(--page-max)] px-[var(--page-pad)] pt-6">
          <Link
            href="/articles"
            className="inline-flex text-sm text-[var(--ink-muted)] underline-offset-4 hover:underline"
          >
            ← All articles
          </Link>
        </div>

        <article className="mx-auto max-w-[680px] px-[var(--page-pad)] py-16 text-[var(--ink)]">
          {/* Hero */}
          <div className="mb-12 pb-8 border-b border-[var(--line)]">
            <p className="mb-5 font-sans text-xs uppercase leading-relaxed tracking-[0.18em] text-[var(--ink-muted)]">
              Learning · Cognition · Study Methods
            </p>
            <h1 className="font-serif text-[clamp(2rem,6vw,3.5rem)] font-bold leading-tight tracking-tight text-[var(--ink)]">
              The Feynman Technique
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[var(--ink-muted)] font-serif italic">
              A complete guide to the learning method that turns the act of teaching into the deepest form of understanding
            </p>
          </div>

          {/* Meta */}
          <div className="mb-12 pb-8 border-b border-[var(--line)] flex flex-wrap gap-6 font-mono text-xs uppercase tracking-widest text-[var(--ink-muted)]">
            <span>Richard Feynman · Nobel Prize 1965</span>
            <span>Four steps · Any subject</span>
          </div>

          {/* Featured Image */}
          <figure className="mb-12 -mx-[var(--page-pad)] md:-mx-[calc((100vw-680px)/4)]">
            <img 
              src="https://pub-df7a29ac929f4b26b7322c861440d59d.r2.dev/Richard%20Feynman.webp" 
              alt="Richard Feynman" 
              className="w-full h-auto"
            />
          </figure>

          {/* Table of Contents */}
          <nav className="mb-12 bg-[#D4E0EC] border-l-4 border-[#2a5a3a] p-6 rounded">
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-[var(--ink-muted)] mb-4">
              Contents
            </h3>
            <ol className="space-y-2 font-sans text-sm text-[var(--ink-muted)] list-decimal list-inside">
              <li><a href="#who" className="text-[var(--ink)] hover:text-[var(--ink-muted)] underline">Who Was Richard Feynman?</a></li>
              <li><a href="#what" className="text-[var(--ink)] hover:text-[var(--ink-muted)] underline">What Is the Feynman Technique?</a></li>
              <li><a href="#steps" className="text-[var(--ink)] hover:text-[var(--ink-muted)] underline">The Four Steps, in Full</a></li>
              <li><a href="#why" className="text-[var(--ink)] hover:text-[var(--ink-muted)] underline">Why It Actually Works</a></li>
              <li><a href="#knowing" className="text-[var(--ink)] hover:text-[var(--ink-muted)] underline">Knowing vs. Knowing the Name</a></li>
              <li><a href="#proscons" className="text-[var(--ink)] hover:text-[var(--ink-muted)] underline">Strengths and Limitations</a></li>
              <li><a href="#apply" className="text-[var(--ink)] hover:text-[var(--ink-muted)] underline">How to Apply It Today</a></li>
            </ol>
          </nav>

          {/* Intro */}
          <section className="mb-16">
            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              Most study advice is about what to do <em>after</em> you understand something: flashcards, summaries, spaced repetition. The Feynman Technique is different. It is a method for building understanding in the first place — and for exposing, with uncomfortable precision, exactly where you think you understand something but don't.
            </p>
            <p className="text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The technique takes its name from one of the most unusual minds of the twentieth century. Understanding where it came from helps explain why it works.
            </p>
          </section>

          {/* Who */}
          <section className="mb-16" id="who">
            <h2 className="mb-4 font-serif text-2xl font-bold text-[var(--ink)]">
              Who Was Richard Feynman?
            </h2>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              Richard Phillips Feynman (1918–1988) was an American theoretical physicist who won the Nobel Prize in Physics in 1965 for his work on quantum electrodynamics. He pioneered the path integral formulation of quantum mechanics, introduced Feynman diagrams as a bookkeeping tool for particle interactions, and made foundational contributions to the theory of superfluidity and parton physics. He played a central role in the Manhattan Project and served on the Rogers Commission investigating the Space Shuttle Challenger disaster.
            </p>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              He was, in short, operating at the absolute frontier of human knowledge in some of the most technically demanding fields that exist.
            </p>

            <blockquote className="my-8 pl-6 border-l-2 border-[var(--ink)] text-lg italic leading-relaxed text-[var(--ink-muted)]">
              "There's no miracle people. It just happens they got interested in this thing and they learned all this stuff. There's just people."
            </blockquote>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              Despite this, Feynman described himself as an ordinary person who studied hard. That combination — extraordinary depth of knowledge and genuine intellectual humility — shaped everything about how he thought and taught. He was named "The Smartest Man in the World" by Omni Magazine in 1979, but what made him stand out among scientists was less his raw intelligence than his insistence on understanding things from first principles, in simple language, from scratch.
            </p>

            <div className="my-10 bg-[#E0E0F0] border-l-4 border-[#6b2a6b] p-6 rounded">
              <strong className="block text-[var(--ink)] font-serif text-base mb-2">
                The Notebook Principle
              </strong>
              <p className="font-sans text-sm text-[var(--ink-muted)] leading-relaxed">
                Feynman's instinct was not to review what he knew but to map what he <em>didn't</em> know — and then fill those gaps through active reconstruction, not passive re-reading. Like physicists before him, <Link href="/articles/penrose-journal" target="_blank" rel="noopener noreferrer" className="article-euclid-link">he kept notebooks</Link> of questions more than answers. This instinct is the seed of the Feynman Technique.
              </p>
            </div>
          </section>

          {/* What */}
          <section className="mb-16" id="what">
            <h2 className="mb-4 font-serif text-2xl font-bold text-[var(--ink)]">
              What Is the Feynman Technique?
            </h2>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The Feynman Technique is a four-step process for learning any concept — regardless of field, complexity, or prior knowledge. Its central premise is that the ability to explain something in simple terms, to someone with no background in the subject, is the most reliable test of whether you actually understand it.
            </p>

            <div className="my-8 bg-[#D8E8DC] border-t-4 border-[#2a5a3a] p-6 rounded">
              <strong className="block text-[var(--ink)] font-serif text-base mb-2">Definition</strong>
              <p className="font-sans text-sm text-[var(--ink)] leading-relaxed">
                The Feynman Technique is a learning method that uses the act of teaching — to a child, a rubber duck, or a blank page — as a mechanism for identifying gaps in understanding and forcing genuine comprehension over surface memorization.
              </p>
            </div>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              This is not the same as summarizing. A summary restates what you have read; it can be produced without understanding. The Feynman method requires you to reconstruct the idea from the inside out, in language stripped of jargon, in a form a twelve-year-old could follow. Understanding a concept deeply, rather than knowing its name, is what lets you <Link href="/articles/sudoku-mathematics" target="_blank" rel="noopener noreferrer" className="article-euclid-link">recognize patterns in complex systems</Link>. The moment your explanation stalls — the moment you reach for a technical term you cannot actually define, or skip a logical step because you are not sure how to justify it — you have found a gap. That gap is what you study next.
            </p>

            <blockquote className="my-8 pl-6 border-l-2 border-[var(--ink)] text-lg italic leading-relaxed text-[var(--ink-muted)]">
              "The first principle is that you must not fool yourself — and you are the easiest person to fool."
            </blockquote>
          </section>

          {/* Steps */}
          <section className="mb-16" id="steps">
            <h2 className="mb-4 font-serif text-2xl font-bold text-[var(--ink)]">
              The Four Steps, in Full
            </h2>

            <p className="mb-10 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              Here is a summary of the four steps before we go deeper into each one.
            </p>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {[
                { num: "01", title: "Choose a concept", desc: "Pick a topic small enough to cover on one or two pages. Write it at the top of a blank sheet. This act alone forces specificity.", bg: "#D8E8DC", border: "#2a5a3a" },
                { num: "02", title: "Teach it to a child", desc: "Write out everything you know as if explaining it to a sixth-grader. No jargon allowed. If you cannot define a term, you don't understand it.", bg: "#D4E0EC", border: "#2a3a7a" },
                { num: "03", title: "Identify gaps & return", desc: "Where your explanation stalls — that is where your knowledge is weakest. Go back to source material. Fill the gap. Try again.", bg: "#E8D8E0", border: "#8b3a2a" },
                { num: "04", title: "Simplify & use analogies", desc: "Once you can explain fluently, strip it further. Replace complexity with analogies. A good analogy is compression of genuine understanding.", bg: "#EDE6D8", border: "#6b5a45" }
              ].map((step, i) => (
                <div key={i} className="border-4 p-6 bg-white" style={{ borderColor: step.border }}>
                  <div className="text-4xl font-bold mb-2 font-serif" style={{ color: step.border }}>
                    {step.num}
                  </div>
                  <h4 className="font-serif text-lg font-semibold text-[var(--ink)] mb-3">
                    {step.title}
                  </h4>
                  <p className="font-sans text-sm text-[var(--ink-muted)] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Cycle Diagram SVG */}
            <div className="my-12 flex justify-center">
              <figure className="w-full">
                <svg viewBox="0 0 560 320" width="560" height="320" className="w-full max-w-2xl mx-auto">
                  <rect width="560" height="320" fill="var(--tonal)" rx="4" />

                  {/* Center label */}
                  <text x="280" y="152" textAnchor="middle" className="font-serif text-sm font-bold fill-[var(--ink)]">
                    THE
                  </text>
                  <text x="280" y="170" textAnchor="middle" className="font-serif text-sm font-bold fill-[var(--ink)]">
                    FEYNMAN
                  </text>
                  <text x="280" y="188" textAnchor="middle" className="font-serif text-sm font-bold fill-[var(--ink)]">
                    CYCLE
                  </text>

                  {/* Arrows */}
                  <path d="M 230 72 Q 280 50 330 72" fill="none" stroke="var(--line)" strokeWidth="1.5" markerEnd="url(#arr)" />
                  <path d="M 398 140 Q 420 185 398 230" fill="none" stroke="var(--line)" strokeWidth="1.5" markerEnd="url(#arr)" />
                  <path d="M 330 278 Q 280 298 230 278" fill="none" stroke="var(--line)" strokeWidth="1.5" markerEnd="url(#arr)" />
                  <path d="M 162 230 Q 140 185 162 140" fill="none" stroke="var(--line)" strokeWidth="1.5" markerEnd="url(#arr)" />

                  <defs>
                    <marker id="arr" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                      <path d="M0,0 L0,6 L8,3 z" fill="var(--line)" />
                    </marker>
                  </defs>

                  {/* Step 1 */}
                  <rect x="80" y="52" width="130" height="72" fill="white" stroke="#8b3a2a" strokeWidth="1.5" rx="2" />
                  <rect x="80" y="52" width="130" height="4" fill="#8b3a2a" rx="2" />
                  <text x="145" y="80" textAnchor="middle" className="font-mono text-xs fill-[#8b3a2a]">
                    STEP 01
                  </text>
                  <text x="145" y="96" textAnchor="middle" className="font-serif text-sm fill-[var(--ink)] italic">
                    Choose Concept
                  </text>

                  {/* Step 2 */}
                  <rect x="350" y="52" width="130" height="72" fill="white" stroke="#2a5a3a" strokeWidth="1.5" rx="2" />
                  <rect x="350" y="52" width="130" height="4" fill="#2a5a3a" rx="2" />
                  <text x="415" y="80" textAnchor="middle" className="font-mono text-xs fill-[#2a5a3a]">
                    STEP 02
                  </text>
                  <text x="415" y="96" textAnchor="middle" className="font-serif text-sm fill-[var(--ink)] italic">
                    Teach a Child
                  </text>

                  {/* Step 3 */}
                  <rect x="350" y="216" width="130" height="72" fill="white" stroke="#2a3a7a" strokeWidth="1.5" rx="2" />
                  <rect x="350" y="216" width="130" height="4" fill="#2a3a7a" rx="2" />
                  <text x="415" y="244" textAnchor="middle" className="font-mono text-xs fill-[#2a3a7a]">
                    STEP 03
                  </text>
                  <text x="415" y="260" textAnchor="middle" className="font-serif text-sm fill-[var(--ink)] italic">
                    Find the Gaps
                  </text>

                  {/* Step 4 */}
                  <rect x="80" y="216" width="130" height="72" fill="white" stroke="#6b2a6b" strokeWidth="1.5" rx="2" />
                  <rect x="80" y="216" width="130" height="4" fill="#6b2a6b" rx="2" />
                  <text x="145" y="244" textAnchor="middle" className="font-mono text-xs fill-[#6b2a6b]">
                    STEP 04
                  </text>
                  <text x="145" y="260" textAnchor="middle" className="font-serif text-sm fill-[var(--ink)] italic">
                    Simplify
                  </text>
                </svg>
                <figcaption className="text-center font-mono text-xs text-[var(--ink-muted)] uppercase tracking-widest mt-4">
                  The four steps form a loop — not a checklist
                </figcaption>
              </figure>
            </div>

            <h3 className="mb-4 font-serif text-lg font-semibold italic text-[var(--ink)]">Step 1: Choose a Concept</h3>
            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The first move is deceptively simple: pick up a blank page and write the subject at the top. But this act carries real weight. It forces you to be specific. You cannot Feynman-technique "economics" — both are too large. You can Feynman-technique <em>elasticity of demand</em> or <em>gradient descent</em>. Specificity is where learning begins.
            </p>

            <h3 className="mb-4 font-serif text-lg font-semibold italic text-[var(--ink)]">Step 2: Teach It to a Child</h3>
            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              Write out everything you know as if explaining to a twelve-year-old. Not a precocious one — a regular one. The audience constraint is load-bearing: it prevents you from hiding behind technical language. When you simplify an idea to its essence, you demonstrate understanding. Only then.
            </p>

            <h3 className="mb-4 font-serif text-lg font-semibold italic text-[var(--ink)]">Step 3: Identify Gaps and Return to the Source</h3>
            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              As you write, you will hit patches of fog. You will reach for a word you cannot define. You will find gaps between concepts you thought were connected. These are not failures — they are the technique working. Mark every place you falter, then return to source material and fill that specific gap. Iterate until your explanation flows without interruption.
            </p>

            <h3 className="mb-4 font-serif text-lg font-semibold italic text-[var(--ink)]">Step 4: Simplify and Create Analogies</h3>
            <p className="text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              Once you can explain fluently, strip it further. Every field has specialized vocabulary that obscures understanding. If you cannot say what a term means in ordinary words, you have only memorized its label. The final element is analogy — compression of genuine understanding. When you find an analogy that works, you have identified the structural essence of the concept.
            </p>
          </section>

          {/* Why */}
          <section className="mb-16" id="why">
            <h2 className="mb-4 font-serif text-2xl font-bold text-[var(--ink)]">
              Why It Actually Works
            </h2>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The Feynman Technique is not a trick or a hack. It works because it engages several cognitive mechanisms that passive reading and rote memorization bypass entirely.
            </p>

            <h3 className="mb-4 font-serif text-lg font-semibold italic text-[var(--ink)]">Active Recall vs. Passive Recognition</h3>
            <p className="mb-8 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              When you read a textbook, your brain recognizes information as familiar. Recognition is easy. Retrieval — reconstructing the information from memory without external prompts — is significantly harder and more effective at consolidating memory. The Feynman method forces retrieval at every step.
            </p>

            <h3 className="mb-4 font-serif text-lg font-semibold italic text-[var(--ink)]">The Illusion of Explanatory Depth</h3>
            <p className="mb-8 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              Cognitive scientists describe a robust finding: people consistently overestimate how well they understand complex systems. The Feynman Technique punctures this illusion by making you produce an explanation rather than recognize one. The gap between what you thought you knew and what you can articulate is the precise gap between familiarity and understanding.
            </p>

            <h3 className="mb-4 font-serif text-lg font-semibold italic text-[var(--ink)]">Compression and Transfer</h3>
            <p className="text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              When you simplify an idea to its essence and encode it in an analogy, you compress it. Compressed knowledge transfers more readily. Feynman's understanding of physics was so compressed — so reduced to fundamental principles — that he could approach unfamiliar problems without needing to have seen them before.
            </p>
          </section>

          {/* Knowing */}
          <section className="mb-16" id="knowing">
            <h2 className="mb-4 font-serif text-2xl font-bold text-[var(--ink)]">
              Knowing vs. Knowing the Name
            </h2>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              Feynman's father taught his son a distinction that shaped everything. You can know the name of a bird in every language and still know nothing about the bird. You will only know something about people — what they call it.
            </p>

            <blockquote className="my-8 pl-6 border-l-2 border-[var(--ink)] text-base italic leading-relaxed text-[var(--ink-muted)]">
              "See that bird? It's a brown-throated thrush, but in Germany it's called a halzenfugel, and in Chinese they call it a chung ling, and even if you know all those names for it, you still know nothing about the bird. You only know something about people: what they call the bird."
            </blockquote>

            <p className="mb-10 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              This distinction is the philosophical engine of the Feynman Technique. Most education is primarily the acquisition of labels — as any <Link href="/articles/mit-1869" target="_blank" rel="noopener noreferrer" className="article-euclid-link">entrance exam</Link> will reveal. The Feynman method asks you to confront what things actually are.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-8 bg-[var(--line)] border border-[var(--line)]">
              <div className="bg-[#D8E8DC] p-6">
                <h5 className="font-sans text-xs uppercase tracking-[0.2em] text-[#2a5a3a] mb-4">Knowing the Name</h5>
                <ul className="space-y-2 text-sm text-[var(--ink-muted)]">
                  <li>You can reproduce the definition</li>
                  <li>You recognize the term when you see it</li>
                  <li>You can pass a multiple-choice test</li>
                  <li>You get stuck when asked "why?"</li>
                  <li>You cannot generate examples</li>
                  <li>You cannot apply in new contexts</li>
                  <li>Confidence collapses under questioning</li>
                </ul>
              </div>
              <div className="bg-[#E8D8E0] p-6">
                <h5 className="font-sans text-xs uppercase tracking-[0.2em] text-[#8b3a2a] mb-4">Knowing the Thing</h5>
                <ul className="space-y-2 text-sm text-[var(--ink-muted)]">
                  <li>You can reconstruct from scratch</li>
                  <li>You can explain to a non-expert</li>
                  <li>You answer "why" questions fluently</li>
                  <li>You generate your own examples</li>
                  <li>You apply to unfamiliar problems</li>
                  <li>You identify limits and exceptions</li>
                  <li>Confidence is stable under questioning</li>
                </ul>
              </div>
            </div>

            <p className="text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              This is why jargon is so dangerous as a learning crutch. If you can hide behind technical vocabulary without defining it, you never discover that you cannot define it. Feynman's method strips all such hiding places away.
            </p>
          </section>

          {/* Pros/Cons */}
          <section className="mb-16" id="proscons">
            <h2 className="mb-4 font-serif text-2xl font-bold text-[var(--ink)]">
              Strengths and Limitations
            </h2>

            <p className="mb-10 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The Feynman Technique is powerful. It is not universal. Understanding when to use it — and when not to — is itself an application of the kind of clear thinking it cultivates.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="border border-[var(--line)] border-t-4 border-t-[#2a5a3a] p-6 bg-[#D8E8DC]">
                <h4 className="font-sans text-xs uppercase tracking-[0.18em] text-[#2a5a3a] mb-4">Strengths</h4>
                <ul className="space-y-2 text-sm text-[var(--ink-muted)]">
                  <li>Exposes gaps immediately and specifically</li>
                  <li>Forces active recall over recognition</li>
                  <li>Builds genuine comprehension</li>
                  <li>Develops communication skills</li>
                  <li>Works for any subject with mechanisms</li>
                  <li>Creates transferable knowledge</li>
                  <li>Iterative by design</li>
                  <li>Requires only a blank page</li>
                </ul>
              </div>
              <div className="border border-[var(--line)] border-t-4 border-t-[var(--rust)] p-6 bg-[#EDE6D8]">
                <h4 className="font-sans text-xs uppercase tracking-[0.18em] text-[var(--rust)] mb-4">Limitations</h4>
                <ul className="space-y-2 text-sm text-[var(--ink-muted)]">
                  <li>Time-intensive — not for cramming</li>
                  <li>Poorly suited to pure memorization</li>
                  <li>Requires honest self-assessment</li>
                  <li>Less effective for procedural knowledge</li>
                  <li>Requires adequate source material</li>
                  <li>Not a replacement for practice</li>
                </ul>
              </div>
            </div>

            <p className="text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              A useful heuristic: if a subject has an underlying mechanism — if there is a <em>why</em> behind the <em>what</em> — the Feynman Technique applies. For most academic subjects, most professional knowledge, and most intellectual endeavors worth pursuing, the mechanism exists.
            </p>
          </section>

          {/* Apply */}
          <section className="mb-16" id="apply">
            <h2 className="mb-4 font-serif text-2xl font-bold text-[var(--ink)]">
              How to Apply It Today
            </h2>

            <p className="mb-10 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The practical implementation is straightforward. The difficulty is the honesty it demands.
            </p>

            <h3 className="mb-6 font-serif text-lg font-semibold italic text-[var(--ink)]">A Practical Routine</h3>

            <div className="space-y-3 mb-10">
              <div className="border border-[var(--line)] border-l-4 border-l-[#2a5a3a] bg-[#D8E8DC]">
                <button className="w-full text-left px-6 py-4 font-serif text-base hover:shadow-sm transition flex justify-between items-center">
                  <span>Before a study session — how to set up</span>
                  <span className="font-mono text-sm">▶</span>
                </button>
                <div className="hidden px-6 py-4 border-t border-[#2a5a3a] bg-white text-sm leading-relaxed text-[var(--ink)]">
                  Choose one concept. Write it at the top of a blank page. Do not look at your notes yet. Write everything you already know — your current mental model. This is your baseline. It will show you exactly what you have and what you are missing before you even open the textbook.
                </div>
              </div>

              <div className="border border-[var(--line)] border-l-4 border-l-[#2a3a7a] bg-[#D4E0EC]">
                <button className="w-full text-left px-6 py-4 font-serif text-base hover:shadow-sm transition flex justify-between items-center">
                  <span>During a study session — how to use the source material</span>
                  <span className="font-mono text-sm">▶</span>
                </button>
                <div className="hidden px-6 py-4 border-t border-[#2a3a7a] bg-white text-sm leading-relaxed text-[var(--ink)]">
                  Read actively. When you encounter something that explains a gap you identified, pause and reconstruct your explanation. Close the book and try to explain what you just read. Use the source material to fill specific gaps, not to acquire a comprehensive transcript.
                </div>
              </div>

              <div className="border border-[var(--line)] border-l-4 border-l-[#8b3a2a] bg-[#E8D8E0]">
                <button className="w-full text-left px-6 py-4 font-serif text-base hover:shadow-sm transition flex justify-between items-center">
                  <span>After a study session — the review test</span>
                  <span className="font-mono text-sm">▶</span>
                </button>
                <div className="hidden px-6 py-4 border-t border-[#8b3a2a] bg-white text-sm leading-relaxed text-[var(--ink)]">
                  Close everything. Blank page. Write the concept. Explain it from scratch using simple language. If your explanation flows, you have understood it. If it stalls, you have found tomorrow's study target. Review these completed explanations periodically.
                </div>
              </div>
            </div>

            <h3 className="mb-6 font-serif text-lg font-semibold italic text-[var(--ink)]">The Notebook Habit</h3>

            <p className="mb-6 text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              Feynman's "Notebook of Things I Don't Know About" is worth taking seriously as a habit. The premise inverts normal note-taking: instead of recording what you have learned, you record what you have not yet understood. A clearly mapped ignorance is actionable.
            </p>

            <p className="text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              Keep a notebook with one section per subject. Each section contains the concepts you are working on, your explanation drafts, and the gaps you have identified. Revisit it every few weeks. You will find that gaps you could not explain have closed, and new gaps — more sophisticated ones — have opened. That progression is what learning actually looks like.
            </p>

            <blockquote className="my-8 pl-6 border-l-2 border-[var(--ink)] text-base italic leading-relaxed text-[var(--ink-muted)]">
              "When you know something, the labels are unimportant because it's not necessary to keep it in the box it came in."
            </blockquote>

            <p className="text-base leading-relaxed text-[var(--ink)] sm:text-lg">
              The Feynman Technique does not make hard things easy. It makes hard things honest. The difficulty does not disappear — you simply stop being able to fool yourself about whether you have actually met it. That is what understanding requires: not a shortcut around the difficulty, but the willingness to face it plainly, without the camouflage of borrowed vocabulary, and stay there until it yields.
            </p>
          </section>

          {/* Sources */}
          <div className="mt-16 pt-8 border-t border-[var(--line)]">
            <h3 className="mb-4 font-sans text-xs uppercase tracking-[0.24em] text-[var(--ink-muted)]">
              Sources & References
            </h3>
            <p className="font-sans text-sm text-[var(--ink-muted)] leading-relaxed space-y-2">
              <span className="block">
                James Gleick — <em>Genius: The Life and Science of Richard Feynman</em> (1992)
              </span>
              <span className="block">
                Richard Feynman — <em>Surely You're Joking, Mr. Feynman!</em> (1985)
              </span>
              <span className="block">
                National Training Laboratories — Learning Pyramid & retention methodology
              </span>
            </p>
          </div>
        </article>

        <ArticleReadMore currentSlug="feynman-technique" />
      </div>
    </>
  );
}
