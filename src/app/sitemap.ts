import type { MetadataRoute } from "next";

const BASE = "https://abakcus.com";

function url(path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]): MetadataRoute.Sitemap[number] {
  return { url: `${BASE}${path}`, lastModified: new Date(), changeFrequency, priority };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Home
    url("/", 1.0, "daily"),

    // Index pages
    url("/articles", 0.9, "weekly"),
    url("/books", 0.9, "weekly"),
    url("/videos", 0.9, "weekly"),
    url("/tools", 0.9, "weekly"),
    url("/questions", 0.9, "weekly"),
    url("/newsletter", 0.8, "monthly"),

    // Stand-alone collection pages
    url("/rafael-araujo-geometrical-masterpieces", 0.8, "monthly"),
    url("/17-best-math-youtube-channels-to-study-mathematics", 0.8, "monthly"),
    url("/24-beautiful-physics-poster-designs-that-inspire-you", 0.8, "monthly"),
    url("/25-beautiful-math-documentaries-to-love-math", 0.8, "monthly"),
    url("/book-lists/pi", 0.8, "monthly"),

    // Articles
    url("/articles/0999-equals-1", 0.7, "monthly"),
    url("/articles/al-jaghmini-astronomy-manuscript", 0.7, "monthly"),
    url("/articles/alejandro-guijarro-momentum", 0.7, "monthly"),
    url("/articles/billingsley-euclid", 0.7, "monthly"),
    url("/articles/dinara-kasko-kinetic-tarts", 0.7, "monthly"),
    url("/articles/erich-dieckmann-metal-tube-chair", 0.7, "monthly"),
    url("/articles/feynman-math-education", 0.7, "monthly"),
    url("/articles/feynman-technique", 0.7, "monthly"),
    url("/articles/fibonacci-shelf", 0.7, "monthly"),
    url("/articles/indiana-pi-bill", 0.7, "monthly"),
    url("/articles/inkala-sudoku", 0.7, "monthly"),
    url("/articles/magritte-blank-signature", 0.7, "monthly"),
    url("/articles/marilyn-vos-savant", 0.7, "monthly"),
    url("/articles/maxwell-warsaw", 0.7, "monthly"),
    url("/articles/mit-1869", 0.7, "monthly"),
    url("/articles/penrose-journal", 0.7, "monthly"),
    url("/articles/pinocchio", 0.7, "monthly"),
    url("/articles/pringles", 0.7, "monthly"),
    url("/articles/rambo-fox", 0.7, "monthly"),
    url("/articles/snelson-needle-tower", 0.7, "monthly"),
    url("/articles/specimens-fancy-turning", 0.7, "monthly"),
    url("/articles/sqrt2-irrational", 0.7, "monthly"),
    url("/articles/sudoku-mathematics", 0.7, "monthly"),
    url("/articles/unit-circle", 0.7, "monthly"),
    url("/articles/zurich-notebook", 0.7, "monthly"),

    // Books
    url("/books/islamic-geometric-patterns-eric-broug", 0.7, "monthly"),
    url("/books/fractal-geometry-of-nature", 0.7, "monthly"),
    url("/books/geometry-of-pasta", 0.7, "monthly"),
    url("/books/lifelong-kindergarten", 0.7, "monthly"),
    url("/books/oliver-byrne-euclid", 0.7, "monthly"),
    url("/books/pasta-by-design", 0.7, "monthly"),
    url("/books/surely-youre-joking-mr-feynman", 0.7, "monthly"),
    url("/books/introduction-to-mathematical-philosophy", 0.7, "monthly"),
    url("/books/the-art-and-science-of-ernst-haeckel", 0.7, "monthly"),
    url("/books/when-einstein-walked-with-godel", 0.7, "monthly"),

    // Tools
    url("/tools/your-name-in-landsat", 0.7, "monthly"),
    url("/tools/barbara-iweins-katalog", 0.7, "monthly"),
    url("/tools/killed-by-google", 0.7, "monthly"),
    url("/tools/mushroom-color-atlas", 0.7, "monthly"),
    url("/tools/river-runner", 0.7, "monthly"),
    url("/tools/fry-universe", 0.7, "monthly"),
    url("/tools/seeing-theory", 0.7, "monthly"),

    // Gadgets
    url("/gadgets/bambu-lab-p2s", 0.7, "monthly"),
    url("/gadgets/chocolate-planets", 0.7, "monthly"),
    url("/gadgets/hagoromo-chalk", 0.7, "monthly"),
    url("/gadgets/xtool-f1-ultra", 0.7, "monthly"),

    // Questions
    url("/questions/clockwise-ant", 0.7, "monthly"),

    // Videos
    url("/videos/cymatics-nigel-stanford", 0.7, "monthly"),
    url("/videos/feynman-ode-to-a-flower", 0.7, "monthly"),
    url("/videos/los-cronocrimenes", 0.7, "monthly"),
    url("/videos/okazaki-matchstick", 0.7, "monthly"),
    url("/videos/owl-silent-flight", 0.7, "monthly"),
    url("/videos/roberto-carlos-free-kick", 0.7, "monthly"),
    url("/videos/stand-and-deliver", 0.7, "monthly"),
    url("/videos/rushmore-1998", 0.7, "monthly"),
    url("/videos/taming-the-garden", 0.7, "monthly"),
    url("/videos/the-physics-of-kung-fu", 0.7, "monthly"),
    url("/videos/trinity", 0.7, "monthly"),
    url("/videos/yuki-kawae", 0.7, "monthly"),
  ];
}
