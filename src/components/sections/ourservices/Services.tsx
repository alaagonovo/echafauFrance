import React from "react";
import services from "../../../../data/Services";
import Servicescard from "@/components/ui/servicescard/Servicescard";
import styles from "./styles.module.css";
function Services() {
  return (
    <section
      className="bg-cover bg-top py-12"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/assets/servview.jpg)",
      }}
    >
      <div className="max-w-[1380px] mx-auto">
        <div className="w-[94%] mx-auto">
          <div className="max-w-[700px]">
            <h1
              className={`${styles.title} text-6xl sm:text-7xl text-white sm:text-start text-center font-semibold  mb-18`}
            >
              <span
                className="bg-[var(--main-red)] text-white py-2 sm:py-0 ps-4 lg:pe-8 pe-6 inline-block"
                style={{ clipPath: "polygon(0 0, 100% 0, 81% 100%, 0% 100%)" }}
              >
                Nos
              </span>
              services
            </h1>
            <div className="flex flex-wrap mt-12 gap-10 md:justify-start justify-center">
              {services.map((service, index) => (
                <Servicescard service={service} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
