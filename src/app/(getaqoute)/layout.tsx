import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import AsideForm from "@/components/ui/asideform/AsideForm";
import "aos/dist/aos.css";
import "../globals.css";
import WithAOS from "@/components/ui/withAOS/WithAos";
import "react-phone-input-2/lib/style.css";
// import Head from "next/head";

const urbanist = Urbanist({
  subsets: ["latin"], // Add other subsets if needed
  weight: ["100", "200", "300", "400", "500", "600", "700"], // Specify the font weights you need
});
export const metadata: Metadata = {
  title: "Scafolding",
  description: "Get in Touch | Inquery",
  icons: "/assets/logo.webp",
};
export default function GetAQuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={urbanist.className}>
      {/* <Head>
        <link rel="preload" href="/assets/herocover.webp" as="image" />
      </Head> */}
      <body>
        <WithAOS>
          <div className="grid grid-cols-1 gap-12 lg:gap-0 lg:grid-cols-[464px_1fr]">
            <AsideForm />
            <main className="order-1 lg:order-2 relative my-12 flex justify-center items-center lg:min-h-[100vh]">
              {children}
            </main>
          </div>
        </WithAOS>
      </body>
    </html>
  );
}
