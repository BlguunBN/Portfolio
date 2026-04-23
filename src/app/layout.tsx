import type { Metadata } from "next";
import { Geist_Mono, Instrument_Serif, Sora } from "next/font/google";

import { ScrollProgress } from "@/src/components/ui/scroll-progress";

import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://t1portfolio.vercel.app"),
  title: "Bilguuntugs | Product-Oriented Portfolio",
  description:
    "Portfolio of Bilguuntugs: practical software projects, interface-driven product thinking, and product-focused development.",
  keywords: [
    "Bilguuntugs",
    "portfolio",
    "software engineer",
    "computer science",
    "product builder",
    "Next.js",
  ],
  openGraph: {
    title: "Bilguuntugs | Product-Oriented Portfolio",
    description:
      "Practical software projects and product-focused engineering by Bilguuntugs.",
    url: "https://t1portfolio.vercel.app",
    siteName: "Bilguuntugs Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bilguuntugs | Product-Oriented Portfolio",
    description:
      "Practical software projects and product-focused engineering by Bilguuntugs.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${sora.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased`}
      >
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
