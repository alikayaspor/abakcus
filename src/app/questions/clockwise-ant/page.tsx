import type { Metadata } from "next";
import Link from "next/link";
import { ClockwiseAntArticle } from "@/components/questions/clockwise-ant/clockwise-ant-article";
import { SiteHeader } from "@/components/home/site-header";

export const metadata: Metadata = {
  title: "The Clockwise Ant",
  description:
    "An ant on a clock face — two encounters, 45 minutes between them. How long was she on the clock? Jaime Poniachik, Games Magazine, 1992.",
};

export default function ClockwiseAntQuestionPage() {
  return (
    <>
      <SiteHeader />
      <div className="uc-page-bg pb-4">
        <div className="mx-auto max-w-[var(--page-max)] px-[var(--page-pad)] pt-6">
          <Link
            href="/questions"
            className="inline-flex text-sm text-[var(--ink-muted)] underline-offset-4 hover:underline"
          >
            ← Questions
          </Link>
        </div>
        <ClockwiseAntArticle />
      </div>
    </>
  );
}
