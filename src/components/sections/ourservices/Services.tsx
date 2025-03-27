import React from "react";
import services from "../../../../data/Services";
import Servicescard from "@/components/ui/servicescard/Servicescard";
import Maintitle from "@/components/common/maintitletext/Maintitle";
function Services() {
  return (
    <section className="mt-20 sm:mt-24 pt-16 pb-24 bg-[#ddd]" id="services">
      <div className="max-w-[1380px] mx-auto">
        <div className="w-[94%] mx-auto">
          <div className="">
            <Maintitle
              title="Nos services"
              title_Color="#000"
              bio_Color="#000"
              bio="Découvrez notre gamme complète de services d’échafaudage, spécialement conçus pour soutenir les projets de construction, de maintenance et de restauration."
            />
            <div className="flex flex-wrap mt-16 gap-4  justify-center">
              {services.map((service, index) => (
                <Servicescard service={service} key={index} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
