/** Editorial copy for `/book-lists/pi` — six books about π (covers on R2). */

export type PiBookAside = {
  title: string;
  /** Trusted HTML (single <em> in one entry). */
  bodyHtml: string;
  /** Optional trailing internal link (renders with Next `Link`). */
  trailingLink?: { href: string; label: string };
};

export type PiBookEntry = {
  id: string;
  ordinal: string;
  title: string;
  authorLine: string;
  tags: string[];
  coverSrc: string;
  coverAlt: string;
  amazonUrl: string;
  paragraphs: string[];
  aside?: PiBookAside;
  /** Optional pull quote (book 2). */
  pull?: string;
  verdict: string;
};

const R2 = "https://pub-5aa87426ad334d0495bf29d914b5ce1b.r2.dev";

export const piBooksListHero = {
  kicker: "Book list — six entries on one number",
  title: "Six Books That Taught π How to Misbehave",
  sub:
    "Pi is irrational. It is transcendental. Its digits never repeat and no formula closes it down. These six books approach it the same way — from oblique angles, with different tools, refusing to settle for the tidy version. None of them are textbooks. All of them are worth your time.",
};

/** Decorative π digits — wraps in the box (no horizontal scroll). */
export const piDigitStrip =
  "3.141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481117450284102701938521105559644622948954930381964288109766593344612847564823378678316527120190914564856692346034861045432664821339360726024914127372458700660631558817488152092096282925409171536436789259036001133053054882046652138414695194151160943305727036575959195309218611738193261179310511854807446237996274956735188575272489122793818301194912983367336244065664308602139494639522473719070217986094370277053921717629317675238467481846766940513200056812714526356082778577134275778960917363717872146844090122495343014654958537105079227968925892354201995611212902196086403441815981362977477130996051870721134999999837297804995105973173281609631859502445945534690830264252230825334468503526193118817101000313783875288658753320838142061717766914730359825349042875546873115956286388235378759375195778185778053217122680663200102787693575870823802378619385142803777744699207907348546921937107280904899090600719204709283469989139094370237292331148086340370349665506534478680364731247750342407335145940514880292571527476849442448381956628534443919368403646153033567685990099009008835208817537876009424292756706706079196103056358557681282504133196356920566541387570085569019602983501766706283420601765351597936324136229887370699822203807313887130068072171822390987465218444803141503528589807218084590493271176889079840405806266801217300515336094765908895539640773585499115535106711310297890639769679448010482159732897484209480761691461091709987685294849368794137762067177290506679231353498197656052133491452966624391590897989308289976491800426631031192939002316487214694581386377842389528746228364789699551420994366851344278684833603503834502670337849857504334400193941215371184177278622819186508764934798577687648398524681659988616398118379156765575988912319251759637382149256088998863500765925727702789623170028818364773108070998791329544146597816492501275499983420022187232093676717675209424674684489933645494674645059304550305602243391629931491906359295376051576149306024977725745898887904407695088875578215495966797590599374435379640000063749562659606125092505795697805493445977105585036502473311697135177493167388149216103611996302515328597094193045473420828921913377475487367597060167838580316321585865490905581104829405921363430725357900655735500267325478621305174641332372784031424284884840505247606929499833271672389498477040739563179461278706433366391454605639450558885519553168301";

export const piBooksEntries: PiBookEntry[] = [
  {
    id: "beckmann",
    ordinal: "01 of 06",
    title: "A History of π",
    authorLine: "Petr Beckmann · 1970",
    tags: ["History", "Opinionated", "Numerate readers"],
    coverSrc: `${R2}/A%20History%20of%20Pi%20by%20Petr%20Beckmann.jpg`,
    coverAlt: "Cover: A History of π by Petr Beckmann",
    amazonUrl: "https://amzn.to/4tCHA9X",
    paragraphs: [
      'Petr Beckmann was a Czech electrical engineer who fled the communist regime for the University of Colorado, and he never learned to keep his opinions to himself. This turns out to be the best thing that ever happened to a book about π. His chapter on ancient Rome is titled "The Roman Pest." He calls the Inquisition the work of "insane religious fanatics." He describes people who distrust mathematics as "intellectual cripples." The book was published in 1970 and somehow never stopped being readable.',
      "The core argument is that the history of π traces the history of human freedom. When societies permitted free inquiry — ancient Greece, the Islamic Golden Age, the Enlightenment — the digits accumulated. When they didn't — Rome, the medieval Church, modern authoritarianism — the digits stalled. Beckmann holds π like a mirror and watches civilization either advance or embarrass itself in the reflection.",
      "The mathematics is real. Euler's derivation of the Basel problem, Lindemann's proof of transcendence, Archimedes' polygon method — Beckmann does the actual math, not a summary of the math. If equations make you close a book, this is not your book. If they make you lean forward, this is exactly your book.",
    ],
    aside: {
      title: "The Indiana incident",
      bodyHtml:
        "In 1897, the Indiana General Assembly nearly passed a bill that would have legally defined π as approximately 3.2. The bill cleared the House. It died in the Senate only because a Purdue mathematician happened to be present that day and quietly convinced senators it would embarrass the state. Beckmann does not let this go lightly.",
      trailingLink: { href: "/articles/indiana-pi-bill", label: "The full story" },
    },
    verdict:
      "Readers who want their mathematics served with a political argument and a barely concealed fury. Beckmann is funnier than he intends to be and more serious than he lets on.",
  },
  {
    id: "blatner",
    ordinal: "02 of 06",
    title: "The Joy of π",
    authorLine: "David Blatner · 1997",
    tags: ["Visual", "Trivia", "Accessible"],
    coverSrc: `${R2}/The%20Joy%20of%20Pi%20by%20David%20Blatner.jpg`,
    coverAlt: "Cover: The Joy of π by David Blatner",
    amazonUrl: "https://amzn.to/4toPrrs",
    paragraphs: [
      "This is a book designed to be left on a table. It is small, typographically handsome, and built from fragments — narratives interrupted by sidebars, cartoons, mnemonic devices, historical digressions, and one million digits of π running through the margins like a quiet river no one can trace to its source. You do not read it cover to cover. You fall into it sideways.",
      "Blatner's actual contribution is tone. He is interested in the obsession as much as the number — the Chudnovsky brothers who calculated eight billion digits on a homemade supercomputer assembled in their apartment, the mnemonists who memorized thousands of decimal places for reasons they struggle to explain, the legislators who tried to round it off by statute. The book is essentially a portrait gallery of people who could not leave π alone.",
    ],
    pull:
      "The digits after the decimal point never fall into a pattern. This is not a flaw in π. It is the thing about π. Blatner understands that this is the story: not the answer, but the impossibility of closing the question.",
    aside: {
      title: "The Chudnovsky formula",
      bodyHtml:
        "David and Gregory Chudnovsky built a supercomputer from mail-order parts in their Manhattan apartment to compute π. The machine was so large it required removing a wall. Gregory was too ill to leave the apartment. They calculated to over eight billion digits. Neither of them was sure why, exactly, but they kept going.",
    },
    verdict:
      "Anyone who wants to understand π's cultural afterlife — why a transcendental number became an object of devotion, humor, and competitive memorization — without sitting through a derivation.",
  },
  {
    id: "posamentier",
    ordinal: "03 of 06",
    title: "π: A Biography of the World's Most Mysterious Number",
    authorLine: "Alfred S. Posamentier & Ingmar Lehmann · 2004",
    tags: ["Comprehensive", "Historical", "Applications"],
    coverSrc: `${R2}/Pi-%20A%20Biography%20of%20the%20World%E2%80%99s%20Most%20Mysterious%20Number%20by%20Alfred%20S.%20Posamentier.jpg`,
    coverAlt: "Cover: π: A Biography of the World's Most Mysterious Number",
    amazonUrl: "https://amzn.to/41dGZPP",
    paragraphs: [
      "If Beckmann is the polemicist and Blatner the journalist, Posamentier and Lehmann are the educators — and they know what they're doing. This is the most thorough of the lay introductions to π: the history from Babylon to the present, the proofs rendered accessibly, the applications traced through statistics, navigation, and physics. A Nobel laureate wrote the afterword. The book earns that.",
      "What makes it worth singling out is its treatment of π as a mathematical object rather than only a historical one. The chapters on approximation methods — continued fractions, infinite products, integral representations — go places the other popular books don't. Posamentier has spent decades teaching mathematics and it shows: the explanations are economical without being dishonest.",
      "The biography framing is not entirely metaphorical. π genuinely has a life history — periods of stasis, sudden leaps, the moment transcendence was finally proved in 1882 by Ferdinand von Lindemann. Posamentier gives that story the space it deserves without losing the reader in technical machinery.",
    ],
    aside: {
      title: "Transcendence, 1882",
      bodyHtml:
        "Lindemann proved that π is transcendental — meaning it cannot be the root of any polynomial with rational coefficients. This settled, permanently, the ancient problem of squaring the circle: it is provably impossible, not merely very hard. Mathematicians had spent two thousand years working on an impossible problem and never knew it.",
    },
    verdict:
      "Readers who want the complete picture — history, mathematics, and applications — in a single volume that doesn't condescend. The most useful of the six books on this list if you want to actually understand what π is.",
  },
  {
    id: "cheng",
    ordinal: "04 of 06",
    title: "How to Bake π",
    authorLine: "Eugenia Cheng · 2015",
    tags: ["Category theory", "Conceptual", "Wide audience"],
    coverSrc: `${R2}/How%20to%20Bake%20Pi%20by%20Eugenia%20Cheng.png`,
    coverAlt: "Cover: How to Bake π by Eugenia Cheng",
    amazonUrl: "https://amzn.to/47KFKLF",
    paragraphs: [
      "This book is not really about π. The title is a misdirection — a pun on pie, a hook for readers who might otherwise walk past a book about category theory. But the misdirection is honest: Cheng uses food as a genuine pedagogical device, not a decoration, and the result is a book that actually explains what mathematics is for, which is rarer and harder than it sounds.",
      "Category theory is the mathematics of mathematics — the study of structure itself, abstracted from any particular domain. It is not a topic that usually survives contact with a general audience. Cheng makes it survive by insisting on examples that are concrete and slightly absurd: why béchamel sauce is like the number 5, what custard teaches us about mathematical difficulty, how the question of whether a tomato is a fruit is a question about category membership.",
      "The argument running through the book is that mathematics is not about computation. It is about understanding why things are true, and what kind of truth mathematical truth is. This is a philosophical claim, and Cheng makes it carefully, with humor, and without sacrificing rigor where it counts.",
    ],
    aside: {
      title: "The category theory provocation",
      bodyHtml:
        'Category theory was dismissed as "abstract nonsense" when Eilenberg and Mac Lane introduced it in 1945. The dismissal stuck as a nickname long after the field had proved indispensable in algebraic topology, logic, and theoretical computer science. Cheng treats "abstract nonsense" not as an insult but as an accurate and affectionate description of what mathematicians actually do.',
    },
    verdict:
      "Readers who have always suspected mathematics was about something more than calculation, and wanted someone to explain what. Also: people who cook.",
  },
  {
    id: "ziemska",
    ordinal: "05 of 06",
    title: "Mandelbrot the Magnificent",
    authorLine: "Liz Ziemska · 2017",
    tags: ["Novella", "Magical realism", "WWII"],
    coverSrc: `${R2}/Mandelbrot%20the%20Magnificent-%20A%20Novella.jpg`,
    coverAlt: "Cover: Mandelbrot the Magnificent by Liz Ziemska",
    amazonUrl: "https://amzn.to/3PTaEeM",
    paragraphs: [
      "This is the only fiction on the list, and it is the strangest book here. Liz Ziemska takes the childhood of Benoit Mandelbrot — born in Warsaw in 1924, his family fleeing to France ahead of the Nazi invasion, hiding in Vichy-occupied Tulle — and weaves fractal geometry into it as magic. Young Benoit discovers that the equations he studies do not merely describe space; they can hide people inside it. The Hausdorff dimension becomes a refuge.",
      "The novella is short — 120 pages — and its tone is controlled. Ziemska does not over-explain the mathematics and she does not over-dramatize the danger. The war is present in the way it is present in occupied France: as a bureaucratic pressure that is also a threat of annihilation, ordinary until it isn't. Mandelbrot's genius is dangerous because it makes him visible. His mother tells him to do well on his exams, but not too well. He cannot help himself.",
      'The Kabbalistic elements — the sefirot, the idea of God as infinity — are woven in without being forced. Ziemska treats Mandelbrot\'s mathematical vision and his inherited Jewish metaphysics as continuous, which is a defensible reading of what fractals actually are: patterns that repeat across scales, without end, the way Ein Sof ("no end") describes the infinite in mystical tradition.',
    ],
    aside: {
      title: "The real Mandelbrot",
      bodyHtml:
        "Benoit Mandelbrot did survive Nazi occupation in France, largely by continuing to study. He coined the word \"fractal\" in 1975. He spent most of his career at IBM Research, which gave him computational tools that pure mathematicians didn't have. He died in 2010 at eighty-five, having spent his last years writing his memoir, which he titled — without irony — <em>The Fractalist</em>.",
    },
    verdict:
      "Readers who want mathematics inside a story rather than alongside one. The Washington Post called it a gut punch. That is not wrong, though the blow is quiet and takes a few pages to land.",
  },
  {
    id: "neuschwander",
    ordinal: "06 of 06",
    title: "Sir Cumference and the First Round Table",
    authorLine: "Cindy Neuschwander · 1997",
    tags: ["Children", "Picture book", "Geometry"],
    coverSrc: `${R2}/Sir%20Cumference%20and%20the%20First%20Round%20Table-%20A%20Math%20Adventure%20by%20Cindy%20Neuschwander.jpg`,
    coverAlt: "Cover: Sir Cumference and the First Round Table",
    amazonUrl: "https://amzn.to/4vgjWRU",
    paragraphs: [
      'The names: Sir Cumference. Lady Di of Ameter. Their son Radius. The carpenter Geo of Metry. This is either the worst pun in the history of mathematics education or the best, and the answer depends entirely on whether you are eight years old. If you are, it is probably the best. The geometry concepts embedded in the Arthurian wordplay are genuine — circumference, diameter, radius — and the story delivers them without ever calling them vocabulary.',
      "A conference table causes chaos until the geometry works out. The round table that results is the same one that makes all knights equal — the mathematical solution and the political solution are the same solution. It is a children's book, so it does not dwell on this. But it is there, and it is not an accident.",
      "This entry earns its place on a list of books about π because it represents something the other five books cannot: the moment before someone has decided they don't like mathematics. Neuschwander works in that window. The books in this series have been in classrooms for over twenty-five years. Some of the children who read Sir Cumference went on to read Beckmann. The pipeline is real.",
    ],
    aside: {
      title: "On the value of a well-timed pun",
      bodyHtml:
        "The Sir Cumference series eventually grew to eighteen books, each one embedding a different geometric concept in a medieval adventure. The formula doesn't vary much. It doesn't need to. At age seven, encountering the word \"circumference\" as the name of a knight is precisely the kind of mnemonic hook that persists for decades. Neuschwander knows what she is doing.",
    },
    verdict:
      "Children ages six to ten, or adults who want to give a child the best possible first introduction to the idea that mathematics has characters, plots, and jokes. Read it aloud. The puns work better spoken.",
  },
];
