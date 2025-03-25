import Hero from "@/components/sections/heroofourprojects/Hero";
const Projectssection = React.lazy(
  () => import("@/components/sections/projectscontent/Projectssection")
);
import React from "react";

function Projects() {
  return (
    <div>
      <Hero />
      <Projectssection />
    </div>
  );
}

export default Projects;
