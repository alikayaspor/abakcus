import { ArticlesCurated } from "./articles-curated";
import { BooksShelf } from "./books-shelf";
import { Cta } from "./cta";
import { FeaturedCarousel } from "./featured-carousel";
import { GadgetsContinue } from "./gadgets-continue";
import { Hero } from "./hero";
import { HomeQuestions } from "./home-questions";
import { HomeVideos } from "./home-videos";
import { InternetToolsGrid } from "./internet-tools-grid";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <FeaturedCarousel />
        <ArticlesCurated />
        <HomeVideos />
        <GadgetsContinue />
        <BooksShelf />
        <HomeQuestions />
        <InternetToolsGrid />
        <Cta />
      </main>
      <SiteFooter />
    </>
  );
}
