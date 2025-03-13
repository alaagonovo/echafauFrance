import MainHero from "@/components/hero/MainHero";
import AboutUs from "@/components/sections/aboutus/AboutUs";
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
      <Services/>
    </>
  );
}
