import type { Metadata, Viewport } from "next";
import "./globals.css";

const deploymentUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";
const metadataBase = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? deploymentUrl);

export const metadata: Metadata = {
  metadataBase,
  title: "diple. — Read. Mark. Remember.",
  description:
    "A private, open-source reading workspace for books, highlights, notes and connected thought.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    type: "website",
    title: "diple. — Read. Mark. Remember.",
    description:
      "A private reading workspace for books and the thoughts they leave behind.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "diple. Read. Mark. Remember.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "diple. — Read. Mark. Remember.",
    description:
      "A private reading workspace for books and the thoughts they leave behind.",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#08080a",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
