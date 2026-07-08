import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: {
    default: "Highlander Audio — Live Sound System & RF Engineering",
    template: "%s — Highlander Audio",
  },
  description:
    "Highlander Audio — freelance system engineer, RF coordinator and monitor engineer for the UK & international festival, arena and corporate touring circuit.",
  metadataBase: new URL("https://highlanderaudio.com"),
  openGraph: {
    title: "Highlander Audio — Live Sound System & RF Engineering",
    description:
      "System engineering, RF coordination and monitor world for festivals, arenas and corporate shows worldwide.",
    url: "https://highlanderaudio.com",
    siteName: "Highlander Audio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <Nav />
        <main className="relative z-10 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
