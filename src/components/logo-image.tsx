type LogoImageProps = {
  variant?: "header" | "footer";
  /** LCP in header */
  priority?: boolean;
  className?: string;
};

/**
 * Brand mark: `/abakcus-logo.png` — transparent-background PNG, dark mark.
 * No CSS filters needed; the image renders directly on any background.
 */
export function LogoImage({
  variant = "header",
  priority = false,
  className = "",
}: LogoImageProps) {
  const size =
    variant === "header"
      ? "h-8 w-auto max-w-[min(88vw,15rem)] sm:h-9 sm:max-w-[min(92vw,19rem)] md:h-10 md:max-w-[min(94vw,22rem)]"
      : "h-7 w-auto max-w-[min(88vw,13rem)] sm:h-8 sm:max-w-[min(90vw,14rem)] md:h-9";

  return (
    <img
      src="/abakcus-logo.webp"
      alt="Abakcus"
      className={`block object-contain ${size} ${className}`}
      decoding="async"
      {...(priority ? { fetchPriority: "high" as const } : { loading: "lazy" as const })}
    />
  );
}
