import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { site } from "./site";
import { Reveal } from "./components/Reveal";
import "./globals.css";

/**
 * The app's own faces, subset to Latin from the files it ships (all three are OFL; the licences
 * travel with them in `app/fonts`). Literata is the editorial voice, Mynerve is the icon's hand
 * and nothing else, Caveat is what a reader writes in a margin.
 */
const literata = localFont({
  src: "./fonts/Literata.woff",
  weight: "200 900",
  variable: "--font-serif",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});

const mynerve = localFont({
  src: "./fonts/Mynerve.woff",
  weight: "400",
  variable: "--font-hand",
  display: "swap",
  adjustFontFallback: false,
});

const caveat = localFont({
  src: "./fonts/Caveat.woff",
  weight: "400 700",
  variable: "--font-note",
  display: "swap",
  adjustFontFallback: false,
});

const deploymentUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";
const metadataBase = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? deploymentUrl);

export const metadata: Metadata = {
  metadataBase,
  title: site.title,
  description: site.description,
  applicationName: "diple",
  authors: [{ name: "Aliaksei Krauchanka" }],
  keywords: [
    "EPUB reader",
    "PDF reader",
    "read later",
    "highlights",
    "margin notes",
    "Markdown notes",
    "journal",
    "iOS",
    "macOS",
    "open source",
  ],
  openGraph: {
    type: "website",
    siteName: "diple.",
    title: site.title,
    description: site.description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "diple. Read in one room. Write in the other." }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0b0b0f",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${literata.variable} ${mynerve.variable} ${caveat.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Set before first paint: without it the reveal styles would hide content on a page
            whose script never arrives. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
      </head>
      <body>
        {children}
        <Reveal />
      </body>
    </html>
  );
}
