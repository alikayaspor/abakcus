import { PASTEL } from "./pastel-palette";

export type GadgetPick = {
  slug: string;
  title: string;
  dek: string;
  /** 0–100 — shown as “N% READ” */
  readPercent: number;
  href: string;
  image: string;
  pageColor: string;
};

/** Placeholder “continue reading” style rows — gadgets & gear */
export const gadgetsPicks: GadgetPick[] = [
  {
    slug: "author-clock",
    title: "Author Clock",
    dek: "A desk clock that tells time through literary quotes. E-paper display, white oak housing, brass base. It raised nearly a million dollars on Kickstarter and is sold at MoMA.",
    readPercent: 100,
    href: "/gadgets/author-clock",
    image:
      "https://pub-f821ec2a41964e44873680b9d87ddf19.r2.dev/Author%20Clock.jpg",
    pageColor: PASTEL.peach,
  },
  {
    slug: "bambu-lab-p2s",
    title: "Bambu Lab P2S",
    dek: "Platonic solids, Fibonacci spirals, bridge load tests. The printer that makes abstract math something a child can hold.",
    readPercent: 100,
    href: "/gadgets/bambu-lab-p2s",
    image:
      "https://pub-f821ec2a41964e44873680b9d87ddf19.r2.dev/Bambu%20Lab%20P2S.jpg",
    pageColor: PASTEL.sky,
  },
  {
    slug: "chocolate-planets",
    title: "Martin's Chocolatier Chocolate Planets",
    dek: "Nine handmade Belgian truffles. Eight planets plus the Sun. Zero Pluto.",
    readPercent: 100,
    href: "/gadgets/chocolate-planets",
    image:
      "https://pub-f821ec2a41964e44873680b9d87ddf19.r2.dev/Martins%20Chocolatier%20Luxury%20Chocolate%20Planets.webp",
    pageColor: PASTEL.lavender,
  },
  {    slug: "xtool-f1-ultra",
    title: "xTool F1 Ultra",
    dek: "Two lasers, one desk. Fiber for metal, diode for wood — both at research-grade precision.",
    readPercent: 100,
    href: "/gadgets/xtool-f1-ultra",
    image:
      "https://pub-f821ec2a41964e44873680b9d87ddf19.r2.dev/xTool%20F1%20Ultra.webp",
    pageColor: PASTEL.sky,
  },
  {
    slug: "hagoromo-chalk",
    title: "Hagoromo Fulltouch Chalk",
    dek: "A Stanford professor cleared Amazon overnight. It was just chalk. Or was it?",
    readPercent: 100,
    href: "/gadgets/hagoromo-chalk",
    image:
      "https://pub-f821ec2a41964e44873680b9d87ddf19.r2.dev/Hagoromo%20Chalk.jpg",
    pageColor: PASTEL.lime,
  },
];
