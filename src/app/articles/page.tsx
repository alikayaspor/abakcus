import type { Metadata } from "next";
import { ArticlesArchive } from "@/components/articles/articles-archive";
import { SiteHeader } from "@/components/home/site-header";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "All long reads — curated essays on science, math, history, and the open web.",
};

export default function ArticlesPage() {
  return (
    <div className="uc-page-bg min-h-screen">
      <SiteHeader />
      <ArticlesArchive />
    </div>
  );
}
