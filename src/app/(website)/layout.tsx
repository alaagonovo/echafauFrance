import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import React from "react";
import "aos/dist/aos.css";
import "../globals.css";
import Header from "@/components/common/header/Header";
import WithAOS from "@/components/ui/withAOS/WithAos";

const Footer = React.lazy(() => import("@/components/common/footer/Footer"));

const urbanist = Urbanist({
  subsets: ["latin"], // Add other subsets if needed
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "100 Echafaudages 100",
  description:
    "Services d’échafaudage professionnels en France pour la construction, la maintenance et plus encore. Des solutions fiables, sûres et économiques, adaptées à vos besoins.",
  icons: { icon: "/svgs/blueLogo.svg" },
  metadataBase: new URL("https://yourwebsite.com"), // Set base URL
  openGraph: {
    title: "100 Echafaudages 100",
    description:
      "Services d’échafaudage professionnels en France pour la construction, la maintenance et plus encore. Des solutions fiables, sûres et économiques, adaptées à vos besoins.",
    url: "https://yourwebsite.com",
    siteName: "100 Echafaudages 100",
    images: ["/svgs/blueLogo.svg"],
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
        <WithAOS>
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
        </WithAOS>
      </body>
    </html>
  );
}
