import type { Metadata, Viewport } from "next";
import { PatreonNudgeDialog } from "@/components/site/patreon-nudge-dialog";
import { DM_Mono, DM_Sans, EB_Garamond, Fraunces } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const serif = Fraunces({
  subsets: ["latin"],
  variable: "--font-abakcus-serif",
  display: "swap",
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-abakcus-sans",
  display: "swap",
});

/** π book cover SVG (featured carousel) */
const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
  weight: ["400", "500"],
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-dm-mono",
  weight: ["300", "400"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://abakcus.com"),
  title: {
    default: "Abakcus — unexpected picks for curious minds",
    template: "%s · Abakcus",
  },
  description:
    "Math, science, education, and design: videos, tools, books, articles, lists, and gadgets — hand-picked, one calm place.",
  icons: {
    icon: "/abakcus-logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} ${ebGaramond.variable} ${dmMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full overflow-x-hidden bg-[var(--surface)] pb-[env(safe-area-inset-bottom,0px)] font-sans text-[var(--ink)] antialiased">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3N1ZM0WPPZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3N1ZM0WPPZ');
          `}
        </Script>
        {children}
        <PatreonNudgeDialog />
      </body>
    </html>
  );
}
