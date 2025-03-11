import MainHero from "@/components/hero/MainHero";
import AboutUs from "@/components/sections/aboutus/AboutUs";
import RecentProjects from "@/components/sections/recentprojects/RecentProjects";

export default function Home() {
  return (
    <>
      <MainHero />
      <AboutUs />
      <RecentProjects />
    </>
  );
}
