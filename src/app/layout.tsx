import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://t1portfolio.vercel.app"),
  title: "Bilguuntugs | Software Developer & AI Engineer",
  description:
    "Portfolio of Bilguuntugs: software development, AI-focused product work, and interface-driven engineering.",
  keywords: [
    "Bilguuntugs",
    "portfolio",
    "software engineer",
    "AI engineer",
    "computer science",
    "product builder",
    "Next.js",
  ],
  openGraph: {
    title: "Bilguuntugs | Software Developer & AI Engineer",
    description:
      "Software development, AI-focused product work, and interface-driven engineering by Bilguuntugs.",
    url: "https://t1portfolio.vercel.app",
    siteName: "Bilguuntugs Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bilguuntugs | Software Developer & AI Engineer",
    description:
      "Software development, AI-focused product work, and interface-driven engineering by Bilguuntugs.",
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
      <body suppressHydrationWarning className={`${inter.variable} ${jetBrainsMono.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
