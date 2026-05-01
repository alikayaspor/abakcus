import Link from "next/link";
import type { ComponentProps } from "react";

type ArticleProseLinkProps = ComponentProps<typeof Link>;

/** In-article cross-links: opens in a new tab; hover style from `globals.css`. */
export function ArticleProseLink(props: ArticleProseLinkProps) {
  return <Link {...props} target="_blank" rel="noopener noreferrer" />;
}
