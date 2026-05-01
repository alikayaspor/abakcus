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
  {    slug: "headphones",
    title: "Sound that stays put",
    dek: "Wireless cans for deep work and long flights",
    readPercent: 37,
    href: "/gadgets",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&q=80",
    pageColor: PASTEL.lime,
  },
  {
    slug: "keyboard",
    title: "Quiet desk",
    dek: "Mechanical keys that still feel like a typewriter",
    readPercent: 82,
    href: "/gadgets",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=900&q=80",
    pageColor: PASTEL.sky,
  },
  {
    slug: "e-reader",
    title: "One pocket library",
    dek: "E-ink that reads like paper in any light",
    readPercent: 9,
    href: "/gadgets",
    image:
      "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=900&q=80",
    pageColor: PASTEL.peach,
  },
  {
    slug: "camera",
    title: "Pocket frame",
    dek: "A compact camera that still loves low light",
    readPercent: 88,
    href: "/gadgets",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77bf99?w=900&q=80",
    pageColor: PASTEL.rose,
  },
  {
    slug: "watch",
    title: "Time without noise",
    dek: "A watch that nudges, never shouts",
    readPercent: 45,
    href: "/gadgets",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&q=80",
    pageColor: PASTEL.lavender,
  },
];
