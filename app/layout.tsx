import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://courthouse.legal"),
  title: {
    default: "Courthouse — Structured Legal Intake System",
    template: "%s · Courthouse",
  },
  description:
    "Courthouse transforms legal uncertainty into structured case intelligence, routed to qualified attorneys by jurisdiction, specialization, and documented urgency.",
  keywords: [
    "legal intake",
    "attorney matching",
    "structured legal intake",
    "jurisdiction routing",
    "legal technology",
  ],
  authors: [{ name: "Courthouse Legal Technologies, Inc." }],
  openGraph: {
    title: "Courthouse — Structured Legal Intake System",
    description:
      "Structured legal intake. Precision-matched attorney access. Infrastructure for the legal marketplace.",
    url: "https://courthouse.legal",
    siteName: "Courthouse",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Courthouse — Structured Legal Intake System",
    description:
      "Structured legal intake. Precision-matched attorney access.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0B1F3B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
