import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import React from "react";
import "../globals.css";
import Header from "@/components/common/header/Header";
// import WithAOS from "@/components/ui/withAOS/WithAos";
const Footer = React.lazy(() => import("@/components/common/footer/Footer"));

const urbanist = Urbanist({
  subsets: ["latin"], // Add other subsets if needed
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
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
    <html lang="fr" className={urbanist.className}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        {/* Preload Video */}
        <link
          rel="preload"
          as="video"
          href="/videos/videoHero.webm"
          type="video/webm"
        />
      </body>
    </html>
  );
}
