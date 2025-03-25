import Maintitle from "@/components/common/maintitletext/Maintitle";
import React from "react";
import projectsData from "../../../../data/Projects";
import Projectcard from "@/components/ui/projectcard/Projectcard";

import RoundButton from "@/components/common/roundbutton/RoundButton";

function RecentProjects() {
  return (
    <section className="mt-20 sm:mt-24 py-16 bg-[#ddd]">
      <div className="max-w-[1380px] mx-auto">
        <div className="w-[92%] mx-auto">
          <Maintitle
            title="Projets Récents"
            bio="Découvrez notre portfolio de projets d'échafaudage réalisés : une vitrine de précision, d'innovation et d'excellence à travers des structures variées."
            title_Color="#000"
            bio_Color="#000"
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projectsData.map((pro, index) => (
              <Projectcard key={index} proDetails={pro} index={index} />
            ))}
          </div>
          <div className="block w-fit mt-12 mx-auto" data-aos="fade-up">
            <RoundButton name="Voir tous les projets" path="/projects" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecentProjects;
