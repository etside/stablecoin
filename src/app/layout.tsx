import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "StableUSD — Digital Money for the Digital Age",
    template: "%s | StableUSD",
  },
  description:
    "The world's most trusted stablecoin. Fully reserved, multi-chain, and regulatory compliant. Send, spend, and save with confidence.",
  keywords: [
    "stablecoin",
    "SUSD",
    "digital dollar",
    "cryptocurrency",
    "blockchain",
    "DeFi",
    "USDT alternative",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stableusd.io",
    siteName: "StableUSD",
    title: "StableUSD — Digital Money for the Digital Age",
    description:
      "The world's most trusted stablecoin. Fully reserved, multi-chain, and regulatory compliant.",
  },
  twitter: {
    card: "summary_large_image",
    title: "StableUSD — Digital Money for the Digital Age",
    description:
      "The world's most trusted stablecoin. Fully reserved, multi-chain, and regulatory compliant.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-secondary text-text-primary">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
