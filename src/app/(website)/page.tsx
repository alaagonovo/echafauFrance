import MainHero from "@/components/hero/MainHero";
import AboutUs from "@/components/sections/aboutus/AboutUs";
import Faqs from "@/components/sections/faqs/Faqs";

import Ournumbers from "@/components/sections/ournumbers/Ournumbers";
import Services from "@/components/sections/ourservices/Services";
import RecentProjects from "@/components/sections/recentprojects/RecentProjects";
import Reviews from "@/components/sections/swiper/Swiper";

export default function Home() {
  return (
    <>
      <MainHero />
      <AboutUs />
      <RecentProjects />
      <Ournumbers />
      <Services />
      <Reviews />
      <Faqs />
    </>
  );
}
