import MainHero from "@/components/hero/MainHero";
import AboutUs from "@/components/sections/aboutus/AboutUs";
import Faqs from "@/components/sections/faqs/Faqs";
import ReviewsSection from "@/components/sections/feedback/ReviewsSection";
import Ournumbers from "@/components/sections/ournumbers/Ournumbers";
import Services from "@/components/sections/ourservices/Services";
import RecentProjects from "@/components/sections/recentprojects/RecentProjects";

export default function Home() {
  return (
    <>
      <MainHero />
      <AboutUs />
      <RecentProjects />
      <Ournumbers />
      <Services />
      <ReviewsSection />
      <Faqs />
    </>
  );
}
