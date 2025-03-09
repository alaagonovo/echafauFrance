import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "Echafau'france",
  description: "",
  icons: "/assets/logo.webp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="language" content="fr" />
        <meta name="description" content="Site Web en français avec Next.js" />
        {/* Preload Video */}

        <link
          rel="preload"
          as="video"
          href="/videos/videoHero.mp4"
          type="video/mp4"
        />
      </Head>
      <html lang="fr">
        <body className={`${inter.variable}`}>{children}</body>
      </html>
    </>
  );
}
