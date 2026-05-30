import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://courthouse.it.com"),
  title: {
    default: "Courthouse IT — Enterprise Support Portal",
    template: "%s · Courthouse IT",
  },
  description:
    "Structured IT service management for Courthouse Legal Technologies. Submit support tickets, access self-service resources, and track resolution with SLA-backed response times.",
  keywords: [
    "IT support",
    "service desk",
    "help desk",
    "ticket management",
    "enterprise IT",
    "Courthouse IT",
  ],
  authors: [{ name: "Courthouse Legal Technologies, Inc." }],
  openGraph: {
    title: "Courthouse IT — Enterprise Support Portal",
    description:
      "Structured IT support. Precision-routed ticket resolution. Enterprise service management for Courthouse teams.",
    url: "https://courthouse.it.com",
    siteName: "Courthouse IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Courthouse IT — Enterprise Support Portal",
    description:
      "Structured IT support. Precision-routed ticket resolution.",
  },
  robots: { index: true, follow: true },
};

export default function ItLayout({ children }: { children: React.ReactNode }) {
  return children;
}
