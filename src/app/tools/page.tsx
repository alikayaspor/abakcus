import type { Metadata } from "next";
import { ToolsArchive } from "@/components/articles/tools-archive";
import { SiteHeader } from "@/components/home/site-header";

export const metadata: Metadata = {
  title: "Tools — Abakcus",
  description:
    "Handpicked apps, sites, and interactive experiences from the open web — useful, odd, and worth bookmarking.",
};

export default function ToolsPage() {
  return (
    <div className="uc-page-bg min-h-screen">
      <SiteHeader />
      <ToolsArchive />
    </div>
  );
}
