import Image from "next/image";
import { ArticleImageLightbox } from "@/components/articles/article-image-lightbox";
import { ArticleProseLink } from "@/components/articles/article-prose-link";
import { UnitCircleSectionReveal } from "@/components/articles/unit-circle/unit-circle-section-reveal";
import { indianaPiBillImages } from "@/data/indiana-pi-bill-images";
import { PASTEL, type PastelId } from "@/data/pastel-palette";

const SOURCE_IARA_PI_BILL =
  "https://www.in.gov/iara/from-the-vault-blog/vault-pi-bill/";
const SOURCE_JSTOR_HALLERBURG =
  "https://www.jstor.org/stable/2689499";

function IndianaFigure({
  src,
  alt,
  caption,
  priority,
  pastel,
  className,
  /** Vertical scans / photos: native aspect — no crop. */
  naturalHeight,
}: {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  pastel: PastelId;
  className?: string;
  naturalHeight?: boolean;
}) {
  return (
    <figure
      className={`overflow-hidden rounded-[var(--radius-card)] p-3 shadow-[var(--shadow-card)] sm:p-4 ${className ?? "my-10"}`}
      style={{ backgroundColor: PASTEL[pastel] }}
    >
      <ArticleImageLightbox src={src} alt={alt} caption={caption}>
        {naturalHeight ? (
          <div className="w-full rounded-xl bg-white/55 p-1 sm:p-1.5">
            {/* Native aspect — avoids cropping vertical bill scans */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              className="mx-auto block h-auto w-full max-w-full rounded-lg object-contain transition-transform duration-500 group-hover:scale-[1.01]"
              loading={priority ? "eager" : "lazy"}
              decoding="async"
              draggable={false}
            />
          </div>
        ) : (
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-white/55 sm:aspect-[3/2]">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width:768px) 100vw, min(680px, 90vw)"
              priority={priority}
            />
          </div>
        )}
      </ArticleImageLightbox>
      {caption ? (
        <figcaption className="mt-4 px-1 text-center font-serif text-sm italic leading-snug text-[var(--ink)]">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function SectionHead({ num, title }: { num: string; title: string }) {
  return (
    <div className="mb-6 flex items-baseline gap-4 border-b border-[var(--line)] pb-3">
      <span className="shrink-0 font-sans text-[0.58rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
        {num}
      </span>
      <h2 className="font-serif text-[1.05rem] font-medium leading-snug tracking-[0.01em] text-[var(--ink)] sm:text-[1.15rem]">
        {title}
      </h2>
    </div>
  );
}

function PiCompare() {
  return (
    <div className="my-10 grid grid-cols-1 gap-px border border-[var(--line)] bg-[var(--line)] sm:grid-cols-3">
      <div className="bg-[color-mix(in_srgb,var(--pastel-lime)_40%,white)] px-5 py-5 text-center">
        <span className="mb-1 block font-mono text-[1.6rem] leading-none tracking-tight text-[var(--ink)]">
          3.14159…
        </span>
        <p className="text-[0.78rem] italic leading-relaxed text-[var(--ink-muted)]">
          The actual value. Irrational, transcendental, non-negotiable.
        </p>
      </div>
      <div className="bg-[color-mix(in_srgb,var(--pastel-rose)_38%,white)] px-5 py-5 text-center">
        <span className="mb-1 block font-mono text-[1.6rem] leading-none tracking-tight text-[#7a3030] line-through">
          3.2
        </span>
        <p className="text-[0.78rem] italic leading-relaxed text-[var(--ink-muted)]">
          Goodwin&apos;s primary claim. The value the bill implicitly enacted.
        </p>
      </div>
      <div className="bg-[color-mix(in_srgb,var(--pastel-rose)_38%,white)] px-5 py-5 text-center">
        <span className="mb-1 block font-mono text-[1.6rem] leading-none tracking-tight text-[#7a3030] line-through">
          9.2376
        </span>
        <p className="text-[0.78rem] italic leading-relaxed text-[var(--ink-muted)]">
          Implied elsewhere in Goodwin&apos;s own paper. He didn&apos;t notice
          the contradiction.
        </p>
      </div>
    </div>
  );
}

export function IndianaPiBillArticle() {
  return (
    <UnitCircleSectionReveal>
      <div className="unit-circle-article text-[var(--ink)]">
        <div className="mx-auto max-w-[780px] px-[var(--page-pad)] pb-6 pt-8 text-center sm:pb-8 sm:pt-10">
          <p className="mb-5 font-sans text-[0.62rem] uppercase leading-relaxed tracking-[0.24em] text-[var(--ink-muted)] sm:text-[0.65rem]">
            History · Mathematics · 1897
          </p>
          <h1 className="font-serif text-[clamp(2rem,6vw,3.1rem)] font-normal leading-[1.1] tracking-[-0.02em] text-[var(--ink)]">
            The legislature that tried to vote on π
          </h1>
          <p className="mx-auto mt-6 max-w-[34rem] border-l-2 border-[var(--ink)] pl-5 text-left text-lg italic leading-relaxed text-[var(--ink-muted)] sm:text-xl">
            In 1897, the Indiana House of Representatives passed a bill that
            implicitly redefined the value of pi as 3.2. It passed 67–0. A
            mathematician happened to be in the building. The Senate laughed
            for half an hour and tabled it. Mathematics survived.
          </p>
          <div
            className="mx-auto mt-7 h-px w-14 bg-[var(--line)] sm:mt-8"
            aria-hidden
          />
        </div>

        <article className="mx-auto max-w-[min(48rem,100%)] px-[var(--page-pad)] pb-20 pt-2 sm:pb-28">
          <p className="intro-drop border-b border-[var(--line)] pb-8 text-lg leading-[1.82] text-[var(--ink)] sm:text-xl">
            You cannot legislate a circle — but you can try. The record is
            public, the vote was unanimous, and the ratio of circumference to
            diameter was never going to care.
          </p>

          <p className="mt-6 text-sm leading-relaxed text-[var(--ink-muted)]">
            Dates and archival detail below follow the{" "}
            <a
              href={SOURCE_IARA_PI_BILL}
              target="_blank"
              rel="noopener noreferrer"
              className="article-euclid-link"
            >
              Indiana State Archives &ldquo;From the Vault&rdquo; post on the
              Pi Bill (1897)
            </a>
            ; the legislative arc is also discussed in the scholarly literature,{" "}
            <a
              href={SOURCE_JSTOR_HALLERBURG}
              target="_blank"
              rel="noopener noreferrer"
              className="article-euclid-link"
            >
              including Hallerburg (1974)
            </a>
            .
          </p>

          <IndianaFigure
            src={indianaPiBillImages.hero}
            alt="The Indiana Pi Bill — House Bill document"
            caption="House Bill No. 246 — when π nearly became policy."
            priority
            pastel="peach"
            naturalHeight
          />

          <section data-uc-section className="mt-14">
            <SectionHead
              num="01"
              title="The problem with pi that nobody could solve"
            />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Pi is the ratio of a circle&apos;s circumference to its diameter.
              It&apos;s irrational — its decimal expansion goes on forever
              without repeating — and transcendental, meaning it cannot be the
              root of any polynomial equation with integer coefficients. The
              transcendence of pi, proved by Ferdinand von Lindemann in 1882,
              had one significant consequence: squaring the circle is
              impossible. You cannot, using only a compass and straightedge,
              construct a square with the same area as a given circle. It cannot
              be done. The proof is rigorous and complete. (
              <ArticleProseLink href="/articles/unit-circle">
                Elsewhere on Abakcus
              </ArticleProseLink>
              , we stick to the circle you can draw — but the constant is the
              same one.)
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              This had been suspected for centuries. Ancient Greek geometers
              treated it as an open problem. Archimedes approximated pi to within
              about 0.04% using inscribed and circumscribed polygons. By the 18th
              century, mathematicians had established that the task was almost
              certainly impossible even if they hadn&apos;t yet proved it. By
              1882, the impossibility was settled.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              None of this stopped Dr. Edward J. Goodwin of Solitude, Indiana.
            </p>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead num="02" title="Dr. Goodwin's discovery" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Goodwin was a physician, not a mathematician. In the late 1880s he
              became convinced he had solved the three classical problems of
              antiquity: squaring the circle, trisecting an angle, and
              duplicating the cube — all three of which had by then been formally
              proved impossible. He claimed the solution to squaring the circle
              had been revealed to him in March 1888. By whom, the record
              doesn&apos;t specify with precision.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              His calculations were internally inconsistent. Different passages in
              his work imply different values of pi: 3.2 in some places, 4 in
              others, and in one remarkable stretch of reasoning, approximately
              9.2376. The text was written in a style that mixed geometric
              diagrams, prose assertions, and conclusions that didn&apos;t follow
              from the premises in any traceable way.
            </p>

            <PiCompare />

            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              In 1894, Goodwin submitted his paper, titled &quot;Quadrature of
              the Circle,&quot; to the <em>American Mathematical Monthly</em>. It
              was published with the note &quot;published by request of the
              author&quot; — the journal&apos;s way of making clear that the
              editors had not reviewed or endorsed the content. It appeared
              anyway.
            </p>

            <IndianaFigure
              src={indianaPiBillImages.goodwinManuscript}
              alt="The Pi Bill as written by Dr. Goodwin — manuscript page"
              caption="The Pi Bill as written by Dr. Goodwin."
              pastel="sky"
              naturalHeight
            />

            <div className="my-8 border border-[var(--line)] px-5 py-4 font-mono text-[0.68rem] leading-relaxed text-[var(--ink-muted)]">
              Goodwin also copyright-protected his method, with the apparent
              intention of collecting royalties from other states and countries
              that adopted it. Indiana, as the site of the discovery, would
              receive the rights free of charge.
            </div>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead num="03" title="The bill" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              In January 1897, Goodwin persuaded Indiana state representative
              Taylor I. Record to introduce House Bill No. 246. Its official
              title: &quot;A Bill for an act introducing a new mathematical
              truth and offered as a contribution to education to be used only by
              the State of Indiana free of cost by paying any royalties whatever
              on the same, provided it is accepted and adopted by the official
              action of the Legislature of 1897.&quot;
            </p>

            <div className="my-10 bg-[color-mix(in_srgb,var(--pastel-lavender)_35%,white)] p-6 text-[0.88rem] leading-relaxed text-[var(--ink-muted)]">
              <span className="mb-3 block font-sans text-[0.56rem] uppercase tracking-[0.14em] text-[var(--ink-muted)]">
                From the bill&apos;s text
              </span>
              <p className="font-serif text-base font-medium text-[var(--ink)]">
                House Bill No. 246 — Indiana General Assembly, 1897
              </p>
              <p className="mt-3">
                The bill never states &quot;pi equals 3.2&quot; directly.
                Instead it contains statements such as: &quot;the ratio of the
                diameter and circumference is as five-fourths to four&quot; — which
                implies π = 16/5 = 3.2 — alongside other passages that imply
                different values entirely. The text is not so much wrong as it is
                incoherent: a sequence of geometrical claims that cannot all be
                simultaneously true.
              </p>
            </div>

            <IndianaFigure
              src={indianaPiBillImages.assemblyCover}
              alt="Cover sheet to the Indiana General Assembly file for the Pi Bill"
              caption="The cover sheet to the Indiana General Assembly file."
              pastel="lavender"
            />

            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The bill was referred first to the House Committee on Canals — a
              detail that has amused historians ever since, though the referral may
              have been procedural rather than sardonic. It was then sent to the
              Committee on Education, which recommended it favorably. Indiana&apos;s
              State Superintendent of Public Instruction apparently offered no
              objection.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              On February 6, 1897, the House suspended the rule requiring bills to
              be read on three separate days. House Bill No. 246 passed 67 to 0.
            </p>

            <blockquote className="my-8 border-l-2 border-[var(--ink)] py-1 pl-6 font-serif text-[1.2rem] italic leading-[1.5] text-[var(--ink-muted)]">
              Sixty-seven elected representatives voted unanimously to change the
              value of a mathematical constant. Not one voted against. Not one
              abstained.
            </blockquote>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead num="04" title="Professor Waldo" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Clarence Abiathar Waldo was head of the mathematics department at
              Purdue University. He happened to be at the Indiana statehouse on
              February 6th — the same day the bill passed the House — for
              unrelated reasons involving the university&apos;s budget
              appropriation.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Someone offered to introduce him to Dr. Goodwin. Waldo declined,
              saying he already knew as many crazy people as he cared to. He
              then read the bill.
            </p>

            <IndianaFigure
              src={indianaPiBillImages.waldo}
              alt="Professor Waldo and lawmakers — House Bill 246"
              caption="Professor Waldo spoke to lawmakers and persuaded them not to support House Bill #246."
              pastel="lime"
              naturalHeight
            />

            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Before the Senate vote, Waldo spent the evening briefing individual
              senators on the mathematical situation. He didn&apos;t need
              elaborate arguments. He needed to explain, to people who had not
              thought carefully about it before, that the ratio of a circle&apos;s
              circumference to its diameter is a fixed fact about geometry — not a
              policy choice, not a convention that could be updated by statute,
              not something Indiana had standing to modify. He appears to have
              made this point clearly enough. (
              <ArticleProseLink href="/articles/maxwell-warsaw">
                Equations on a wall
              </ArticleProseLink>{" "}
              are a different kind of public math — carved in stone, not voted
              on.)
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              When the bill came before the Senate, it was read aloud. The
              senators spent approximately half an hour discussing it —
              &quot;laughing,&quot; according to contemporary accounts. Senator
              Orrin Hubbell described it as &quot;utter folly.&quot; The bill was
              tabled indefinitely. It was never formally killed; it simply
              stopped moving. It remains, technically, pending.
            </p>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead num="05" title="How it happened" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The standard explanation is that the House members didn&apos;t
              understand mathematics well enough to spot the error. That&apos;s
              probably true of most of them. But it misses something: the bill was
              presented as a contribution to education, offered to Indiana free
              of charge, validated by publication in a mathematical journal
              (however nominally), and sponsored by a member in apparent good
              faith. Voting against it would have required either mathematical
              expertise or a willingness to publicly call a colleague&apos;s
              guest a fraud. Neither was the path of least resistance.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              There&apos;s also something structurally familiar about what
              happened. The bill&apos;s language was technically opaque — no
              legislator could easily verify whether its geometric claims were
              correct or not. The author had credentials (medical, not
              mathematical, but credentials). The bill was framed as an
              educational benefit. No organized opposition existed until Waldo
              appeared. The committee that reviewed it was not staffed with
              mathematicians.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The conditions that let House Bill No. 246 pass 67–0 are not
              specific to 1897 Indiana. They&apos;re the conditions under which
              non-experts routinely defer to confident claimants in domains they
              can&apos;t independently evaluate. The only thing unusual about this
              case is that the domain was mathematics, where the error could
              eventually be demonstrated without ambiguity — and that a
              mathematician happened to be in the building.
            </p>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead num="06" title="Aftermath — the short and long versions" />
            <ul className="relative m-0 list-none pl-0">
              <span
                className="absolute bottom-2 left-[5px] top-2 z-0 w-px bg-[var(--line)]"
                aria-hidden
              />
              {[
                {
                  y: "1894",
                  t: 'Goodwin publishes "Quadrature of the Circle"',
                  b: "Printed in the American Mathematical Monthly \"by request of the author.\" Not peer-reviewed. The journal adds no endorsement.",
                },
                {
                  y: "January 1897",
                  t: "House Bill No. 246 introduced",
                  b: "Referred first to the Committee on Canals, then to Education. Recommended favorably.",
                },
                {
                  y: "February 6, 1897",
                  t: "Passes the House, 67–0",
                  b: "Three-day reading rule suspended. No votes against. No abstentions. Forwarded to the Senate.",
                },
                {
                  y: "February 1897",
                  t: "Waldo briefs the Senate",
                  b: "Professor Waldo speaks to senators individually the evening before the Senate vote. The bill is read aloud in the chamber to considerable laughter.",
                },
                {
                  y: "February 12, 1897",
                  t: "Tabled indefinitely",
                  b: 'Senator Hubbell calls it "utter folly." The bill is shelved. It is never formally repealed because it was never formally enacted.',
                },
                {
                  y: "1916",
                  t: "Waldo publishes an account",
                  b: "His documentation appears in the Proceedings of the Indiana Academy of Science — the primary historical source for the Senate evening's details.",
                },
              ].map((row, i, arr) => (
                <li
                  key={row.y + row.t}
                  className={`relative pb-6 pl-8 ${i === arr.length - 1 ? "pb-0" : ""}`}
                >
                  <span
                    className={`absolute left-[2px] top-2 h-[7px] w-[7px] rounded-full ${
                      i === arr.length - 1 ? "bg-[var(--ink)]" : "bg-[var(--ink-muted)]"
                    }`}
                    aria-hidden
                  />
                  <span className="mb-1 block font-mono text-[0.58rem] uppercase tracking-[0.1em] text-[var(--ink-muted)]">
                    {row.y}
                  </span>
                  <span className="mb-1 block font-serif text-[0.92rem] font-medium text-[var(--ink)]">
                    {row.t}
                  </span>
                  <span className="text-[0.9rem] leading-relaxed text-[var(--ink-muted)]">
                    {row.b}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Goodwin continued to believe he had squared the circle. He died in
              1902, still convinced. His paper remains accessible in the archive of
              the <em>American Mathematical Monthly</em>. Waldo returned to Purdue
              and apparently never had to explain what he&apos;d been doing at the
              statehouse that particular afternoon.
            </p>
          </section>

          <section data-uc-section className="mt-14">
            <SectionHead num="07" title="What it is actually about" />
            <p className="text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The Indiana Pi Bill is usually told as a comedy — sixty-seven grown
              men voting to change the value of pi, saved at the last moment by a
              mathematician who happened to be passing through. That version is
              accurate as far as it goes.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              But what makes the story durable is the more uncomfortable version: a
              legislature operating entirely within normal procedures, in good
              faith, managed to nearly enact something mathematically absurd.
              Nobody was corrupt. Nobody was acting unusually. The committee did
              its job. The sponsor believed in what he was proposing. The House
              voted the way House committees expect them to vote on
              favorably-reported education bills.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              The rescue came not from the system working but from a single
              individual with domain expertise arriving by coincidence. If
              Waldo&apos;s budget hearing had been scheduled for a different week,
              the bill would have reached Governor James A. Mount for signature.
              Whether he would have signed it is unknown. The Governor was not a
              mathematician either.
            </p>
            <p className="mt-4 text-base leading-[1.85] text-[var(--ink)] sm:text-[1.05rem]">
              Pi would not have changed. The universe is not subject to Indiana
              statute. But Indiana&apos;s school system would have been legally
              required to teach a false value — and the error would have had to be
              corrected eventually, expensively, by someone willing to explain to
              the legislature that they had been wrong. That conversation,
              whenever it came, would not have been a comedy.
            </p>

            <p className="mt-10 border-t border-[var(--line-soft)] pt-8 text-sm leading-relaxed text-[var(--ink-muted)]">
              Elsewhere on Abakcus:{" "}
              <ArticleProseLink href="/articles/billingsley-euclid">
                Paper that stands up
              </ArticleProseLink>
              {" · "}
              <ArticleProseLink href="/articles/maxwell-warsaw">
                Four equations on a wall
              </ArticleProseLink>
              {" · "}
              <ArticleProseLink href="/articles/fibonacci-shelf">
                A shelf built on a sequence
              </ArticleProseLink>
              {" · "}
              <ArticleProseLink href="/book-lists/books-about-pi">
                Six books about π worth reading
              </ArticleProseLink>
            </p>
          </section>
        </article>

        <footer className="border-t border-[var(--line-soft)] px-[var(--page-pad)] py-10 text-center font-sans text-sm tracking-[0.12em] text-[var(--ink-muted)]">
          Indiana · 1897 · House Bill No. 246
        </footer>
      </div>
    </UnitCircleSectionReveal>
  );
}
