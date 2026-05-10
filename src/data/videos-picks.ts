import { PASTEL } from "./pastel-palette";

export type VideoPick = {
  slug: string;
  title: string;
  dek: string;
  tag: string;
  href: string;
  image: string;
  pageColor: string;
};

export const videosPicks: VideoPick[] = [
  {
    slug: "good-will-hunting",
    title: "Good Will Hunting",
    dek: "A janitor at MIT solves a research-level math problem in chalk on a hallway wall. The film is entirely uninterested in the mathematics.",
    tag: "Film · Mathematics",
    href: "/videos/good-will-hunting",
    image:
      "https://pub-676f738e0a3948d19dc9defd954e36d5.r2.dev/Good%20Will%20Hunting.webp",
    pageColor: PASTEL.lime,
  },
  {
    slug: "stand-and-deliver",
    title: "Stand and Deliver",
    dek: "The testing board assumed they cheated. The students re-sat the exam. They passed again. This time no one said anything.",
    tag: "Film · Mathematics",
    href: "/videos/stand-and-deliver",
    image:
      "https://pub-676f738e0a3948d19dc9defd954e36d5.r2.dev/Stand%20And%20Deliver.jpg",
    pageColor: PASTEL.peach,
  },
  {
    slug: "kung-fu-motion-visualization",
    title: "Kung Fu Motion Visualization",
    dek: "Tobias Gremmler turned motion-capture data from Kung Fu masters into five moving sculptures. Veri heykel oldu; zaman kumaş, hız madde.",
    tag: "Data · Visualization",
    href: "/videos/the-physics-of-kung-fu",
    image:
      "https://pub-676f738e0a3948d19dc9defd954e36d5.r2.dev/Visualizing%20The%20Invisible%20Motions%20Of%20Kung%20Fu%202.webp",
    pageColor: PASTEL.lime,
  },
  {
    slug: "cymatics-nigel-stanford",
    title: "Cymatics: Sound Has a Shape",
    dek: "Nigel Stanford wrote the music last — after the physics decided the notes.",
    tag: "Physics · Music",
    href: "/videos/cymatics-nigel-stanford",
    image: "https://pub-676f738e0a3948d19dc9defd954e36d5.r2.dev/Cymatics.webp",
    pageColor: PASTEL.sky,
  },
  {
    slug: "taming-the-garden",
    title: "A tree on a barge, crossing the Black Sea",
    dek: "Salomé Jashi's documentary on a billionaire who collected ancient trees — uprooted, shipped, replanted.",
    tag: "Documentary",
    href: "/videos/taming-the-garden",
    image:
      "https://pub-5aa87426ad334d0495bf29d914b5ce1b.r2.dev/taming%20the%20garden.jpeg",
    pageColor: PASTEL.lavender,
  },
  {
    slug: "roberto-carlos-free-kick",
    title: "The Physics of Roberto Carlos's Free Kick",
    dek: "136 km/h, 14 revolutions per second. Four French physicists spent 13 years explaining what happened next.",
    tag: "Physics · Football",
    href: "/videos/roberto-carlos-free-kick",
    image:
      "https://pub-676f738e0a3948d19dc9defd954e36d5.r2.dev/Roberto%20Carlos%20Frekick.png",
    pageColor: PASTEL.rose,
  },
  {
    slug: "los-cronocrimenes",
    title: "Los Cronocrímenes",
    dek: "One nervous man. One hour. A bathtub full of white liquid. Nacho Vigalondo's trap is airtight.",
    tag: "Film · Movie",
    href: "/videos/los-cronocrimenes",
    image:
      "https://pub-676f738e0a3948d19dc9defd954e36d5.r2.dev/Los-Cronocrimenes.jpg",
    pageColor: PASTEL.lime,
  },
  {
    slug: "feynman-ode-to-a-flower",
    title: "Ode to a Flower",
    dek: "In two minutes, Feynman dismantles the idea that science strips nature of beauty. Understanding a flower doesn't subtract from it — it multiplies.",
    tag: "Video",
    href: "/videos/feynman-ode-to-a-flower",
    image:
      "https://pub-676f738e0a3948d19dc9defd954e36d5.r2.dev/Richard%20Feynman%20-%20Ode%20To%20A%20Flower.webp",
    pageColor: PASTEL.lime,
  },
  {
    slug: "rushmore-1998",
    title: "Rushmore",
    dek: "Max Fischer is failing every class. He is also the founder of eleven clubs. Wes Anderson's best argument that how you spend your attention is who you are.",
    tag: "Film · Movie",
    href: "/videos/rushmore-1998",
    image:
      "https://pub-676f738e0a3948d19dc9defd954e36d5.r2.dev/Rushmore.jpg",
    pageColor: PASTEL.rose,
  },
  {
    slug: "owl-silent-flight",
    title: "The Owl That Isn\u2019t There",
    dek: "Three overlapping noise-cancellation systems, sixty million years in the making. A bird crosses a field at night, and the air keeps its secret.",
    tag: "Video \u00b7 Nature",
    href: "/videos/owl-silent-flight",
    image: "https://img.youtube.com/vi/-WigEGNnuTE/maxresdefault.jpg",
    pageColor: PASTEL.sky,
  },
  {
    slug: "yuki-kawae",
    title: "A Drawing That Erases Itself",
    dek: "Yuki Kawae spends hours raking patterns into a sand garden in his apartment, then smooths them away. 23 minutes. No narration. The calculations stop.",
    tag: "Video · Meditation",
    href: "/videos/yuki-kawae",
    image:
      "https://pub-676f738e0a3948d19dc9defd954e36d5.r2.dev/Yuki%20Kawae%20zen%20garden.jpg",
    pageColor: PASTEL.peach,
  },
  {
    slug: "trinity",
    title: "Two Thousand Flashes on a Map",
    dek: "Every nuclear detonation in human history, 1945\u20132010. Fourteen minutes. The accumulation is the argument.",
    tag: "Video \u00b7 History",
    href: "/videos/trinity",
    image:
      "https://pub-676f738e0a3948d19dc9defd954e36d5.r2.dev/Trinity%20%E2%80%93%20Visualization%20of%20Nuclear%20Detonations.webp",
    pageColor: PASTEL.sky,
  },
  {
    slug: "okazaki-matchstick",
    title: "The Matchstick That Refused to Be Still",
    dek: "One object, one surface, no special effects. Tomohiro Okazaki turns the most resolved object in the world into a stop-motion study of transformation.",
    tag: "Video · Stop-Motion",
    href: "/videos/okazaki-matchstick",
    image:
      "https://pub-676f738e0a3948d19dc9defd954e36d5.r2.dev/Tomohiro%20Okazaki's%20Matches.png",
    pageColor: PASTEL.peach,
  },
];
