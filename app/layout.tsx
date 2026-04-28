import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ORE — Unlocking Rural Potential | Kagera Region, Tanzania Since 2015",
  description:
    "ORE is a community-anchored NGO operating in Kagera Region, Tanzania since 2015. We unlock rural potential through climate-smart agriculture, entrepreneurship, and community-led development.",
  keywords: [
    "NGO",
    "Tanzania",
    "rural development",
    "climate resilience",
    "agriculture",
    "empowerment",
    "nonprofit",
  ],
  authors: [{ name: "ORE" }],
  openGraph: {
    title: "ORE — Unlocking Rural Potential",
    description:
      "A community-anchored NGO transforming Kagera Region, Tanzania since 2015.",
    type: "website",
    locale: "en_US",
    siteName: "ORE",
  },
  twitter: {
    card: "summary_large_image",
    title: "ORE — Unlocking Rural Potential",
    description:
      "A community-anchored NGO transforming Kagera Region, Tanzania since 2015.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/ORE favicon.png",
    shortcut: "/ORE favicon.png",
    apple: "/ORE favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-warm-sand text-charcoal">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <main id="main-content" className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
