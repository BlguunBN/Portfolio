import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://2nd-portfolio.vercel.app"),
  title: "Bilguuntugs (2nd) | Portfolio",
  description:
    "Portfolio of Bilguuntugs (2nd): practical software projects, engineering work, and product-focused development.",
  keywords: [
    "Bilguuntugs",
    "2nd",
    "portfolio",
    "software engineer",
    "computer science",
    "AI",
    "Next.js",
  ],
  openGraph: {
    title: "Bilguuntugs (2nd) | Portfolio",
    description:
      "Practical software projects and product-focused engineering by Bilguuntugs (2nd).",
    url: "https://2nd-portfolio.vercel.app",
    siteName: "2nd Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bilguuntugs (2nd) | Portfolio",
    description:
      "Practical software projects and product-focused engineering by Bilguuntugs (2nd).",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
