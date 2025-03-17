import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import "./globals.css";
const Footer = React.lazy(() => import("@/components/common/footer/Footer"));

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Echafau'france",
  description: "Site Web en français avec Next.js",
  icons: { icon: "/assets/logo.webp" },
  metadataBase: new URL("https://yourwebsite.com"), // Set base URL
  openGraph: {
    title: "Echafau'france",
    description: "Découvrez Echafau'france, spécialiste en échafaudage",
    url: "https://yourwebsite.com",
    siteName: "Echafau'france",
    images: ["/assets/logo.webp"],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body>
        <main>{children}</main>
        <Footer />
        {/* Preload Video */}
        <link
          rel="preload"
          as="video"
          href="/videos/videoHero.mp4"
          type="video/mp4"
        />
      </body>
    </html>
  );
}
