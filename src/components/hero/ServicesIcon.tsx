import React from "react";
import ServicesIconData from "../../../data/servicesicons";
import styles from "./servicesicon.module.css";
function ServicesIcon() {
  return (
    <div className="gap-4 flex flex-col justify-end items-end absolute right-0 bottom-12 sm:bottom-24">
      {ServicesIconData.map((serv, index) => (
        <div
          key={index}
          className={`flex justify-center items-center bg-[rgba(0,38,82,0.95)] py-4 px-2 lg:p-4 ${styles.main_cont_icon}`}
          data-aos="fade-up"
          data-aos-delay={`${(index + 1) * 200}`}
        >
          <div className="relative shrink-0">
            <p className="text-gray-400 font-medium pe-2 me-2 border-r-2">
              0{index + 1}
            </p>
          </div>
          <h2 className="text-gray-400 text-sm lg:text-lg">{serv.typeName}</h2>
        </div>
      ))}
    </div>
  );
}

export default ServicesIcon;
