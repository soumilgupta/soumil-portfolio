import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Soumil Gupta — Finance Professional",
  description:
    "Soumil Gupta — MS Finance, Fordham Gabelli (May 2026). Equity research, investment operations, and portfolio analytics. CFA Level I cleared.",
  keywords: [
    "Soumil Gupta",
    "Finance",
    "Equity Research",
    "Fordham Gabelli",
    "CFA",
    "Investment Analyst",
    "Portfolio Management",
    "Fixed Income",
  ],
  authors: [{ name: "Soumil Gupta" }],
  openGraph: {
    title: "Soumil Gupta — Finance Professional",
    description:
      "Equity research, investment operations, and portfolio analytics. MS Finance, Fordham Gabelli (May 2026). CFA Level I cleared.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soumil Gupta — Finance Professional",
    description:
      "Equity research, investment operations, and portfolio analytics.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
