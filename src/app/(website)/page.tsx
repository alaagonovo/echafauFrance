import React from "react";
import MainHero from "@/components/hero/MainHero";
const AboutUs = React.lazy(
  () => import("@/components/sections/aboutus/AboutUs")
);
const RecentProjects = React.lazy(
  () => import("@/components/sections/recentprojects/RecentProjects")
);
const Ournumbers = React.lazy(
  () => import("@/components/sections/ournumbers/Ournumbers")
);
const Services = React.lazy(
  () => import("@/components/sections/ourservices/Services")
);
const Faqs = React.lazy(() => import("@/components/sections/faqs/Faqs"));
const Reviews = React.lazy(() => import("@/components/sections/swiper/Swiper"));

export default function Home() {
  return (
    <>
      <MainHero />
      <AboutUs />
      <Services />
      <Ournumbers />
      <RecentProjects />
      <Reviews />
      <Faqs />
    </>
  );
}
