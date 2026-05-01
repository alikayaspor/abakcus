import type { Metadata } from "next";
import Link from "next/link";
import { PiBooksList } from "@/components/book-lists/pi-books-list";
import { SiteHeader } from "@/components/home/site-header";

export const metadata: Metadata = {
  title: "Six books that taught π how to misbehave",
  description:
    "A book list — Beckmann, Blatner, Posamentier & Lehmann, Cheng, Ziemska, Neuschwander — six ways into one number.",
};

export default function PiBooksListPage() {
  return (
    <>
      <SiteHeader />
      <div className="uc-page-bg pb-4">
        <div className="mx-auto max-w-[var(--page-max)] px-[var(--page-pad)] pt-6">
          <Link
            href="/"
            className="inline-flex text-sm text-[var(--ink-muted)] underline-offset-4 hover:underline"
          >
            ← Back to home
          </Link>
        </div>
        <PiBooksList />
      </div>
    </>
  );
}
