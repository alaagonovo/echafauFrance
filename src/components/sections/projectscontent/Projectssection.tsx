import React from "react";
import ProjectCard from "./projectCard/ProjectCard";
import allProjects from "../../../../data/allprojects";

function Projectssection() {
  return (
    <div className="max-w-[92%] mx-auto flex flex-wrap gap-10 justify-center my-16 pb-10">
      {allProjects.map((pro, index) => (
        <ProjectCard key={index} pro={pro} />
      ))}
    </div>
  );
}

export default Projectssection;
