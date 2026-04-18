import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";

import "./globals.css";
import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/footer";
import ScrollToTopButton from "@/components/ui/scroll-to-to-bottom";
import { Inter } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pygmalion Agency | Agence de Marketing & Communication",
  description:
    "Pygmalion Agency est une agence de marketing et communication.",
  keywords: [
    "agence marketing",
    "agence communication",
    "Campagnes marketing",
    "Community management",
    "Montage & optimisation",
    "Tournage & production",
    "Direction artistique",
    "Création de contenu",
    "Stratégie & accompagnement",
  ],
  authors: [{ name: "Pygmalion Agency" }],
  creator: "Pygmalion Agency",
  openGraph: {
    title: "Pygmalion Agency | Marketing & Communication",
    description:
      "Agence spécialisée en marketing et communication.",
    url: "https://ton-site.com",
    siteName: "Pygmalion Agency",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pygmalion Agency",
    description: "Agence de marketing et communication.",
  },
  metadataBase: new URL("https://ton-site.com"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body>
        <ScrollToTopButton />
        <header>
          <Navbar />
        </header>

        <main>{children}</main>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
