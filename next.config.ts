import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.unsplash.com"],
  },
  i18n: {
    locales: ["fr"], // Add more locales if needed
    defaultLocale: "fr",
  },
};

export default nextConfig;
