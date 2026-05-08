import { PASTEL } from "./pastel-palette";

/** Single card background for the whole section (WePresent-style pale panel) */
export const INTERNET_TOOLS_CARD_COLOR = PASTEL.sky;

export type InternetToolPick = {
  slug: string;
  /** Wide cards span ~65%; narrow ~35% — controls image aspect */
  layout: "wide" | "narrow";
  title: string;
  dek: string;
  href: string;
  image: string;
};

/** Four-up masonry-style row: wide | narrow, then narrow | wide */
export const internetToolsPicks: InternetToolPick[] = [
  {
    slug: "river-runner",
    layout: "wide",
    title: "Every Raindrop Has a Destination",
    dek: "Click anywhere in the world and watch where water goes — from hilltop to ocean",
    href: "/tools/river-runner",
    image:
      "https://pub-3775c49696ac49478c024f66a3dbe50d.r2.dev/River%20Runner.png",
  },
  {
    slug: "barbara-iweins-katalog",
    layout: "narrow",
    title: "12,795 Objects, One Life",
    dek: "Barbara Iweins photographed everything she owns. The spreadsheet knows things she didn't.",
    href: "/tools/barbara-iweins-katalog",
    image:
      "https://pub-3775c49696ac49478c024f66a3dbe50d.r2.dev/Barbara%20Iweins%20Katalog.png",
  },
  {
    slug: "killed-by-google",
    layout: "narrow",
    title: "299 Products. One Graveyard.",
    dek: "Google has retired 299 products since 2006. The pattern is not random.",
    href: "/tools/killed-by-google",
    image:
      "https://pub-3775c49696ac49478c024f66a3dbe50d.r2.dev/Killed%20by%20Google.png",
  },
  {
    slug: "seeing-theory",
    layout: "wide",
    title: "Statistics You Can Watch Think",
    dek: "A Brown University student made probability visible — and changed how a generation understands statistics.",
    href: "/tools/seeing-theory",
    image:
      "https://pub-3775c49696ac49478c024f66a3dbe50d.r2.dev/Seeing%20Theory.png",
  },
  {    slug: "fry-universe",
    layout: "wide",
    title: "Your Favorite Fry Is a Geometry Problem",
    dek: "A 3D scrollytelling tool that walks through every major fry shape and explains exactly why you prefer it. The answer is a surface-to-volume ratio.",
    href: "/tools/fry-universe",
    image:
      "https://pub-3775c49696ac49478c024f66a3dbe50d.r2.dev/The%20Fry%20Universe.webp",
  },
  {    slug: "mushroom-color-atlas",
    layout: "narrow",
    title: "The Color the Forest Already Had",
    dek: "825 colors, 40+ dye mushrooms. Julie Beeler’s atlas of natural color that exists only because a specific fungus grew in a specific place.",
    href: "/tools/mushroom-color-atlas",
    image:
      "https://pub-3775c49696ac49478c024f66a3dbe50d.r2.dev/Mushroom%20Color%20Atlas.webp",
  },

  {
    slug: "your-name-in-landsat",
    layout: "wide",
    title: "Your Name, Written by Earth",
    dek: "NASA spells out your name using real Landsat satellite images of Earth's surface. Every letter is a real place with coordinates.",
    href: "/tools/your-name-in-landsat",
    image:
      "https://pub-3775c49696ac49478c024f66a3dbe50d.r2.dev/Your%20Name%20in%20Landsat.png",
  },
];
