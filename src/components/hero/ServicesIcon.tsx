import Image from "next/image";
import React from "react";
import ServicesIconData from "../../../data/servicesicons";
import styles from "./servicesicon.module.css";
function ServicesIcon() {
  return (
    <div className="gap-4 flex flex-col justify-end items-end absolute right-4 sm:right-12 bottom-12 sm:bottom-24">
      {ServicesIconData.map((serv, index) => (
        <div
          key={index}
          className={`flex justify-center items-center bg-[rgba(0,0,0,.5)] p-2 lg:p-4 lg:rounded-2xl rounded-[4px]  ${styles.main_cont_icon}`}
          data-aos="fade-up"
          data-aos-delay={`${(index + 1) * 200}`}
        >
          <h2 className="text-white text-sm lg:text-lg">{serv.typeName}</h2>
          <div className="relative w-[28px] h-[28px] sm:w-[38px] sm:h-[38px] shrink-0">
            <Image src={serv.icon} alt="service image" fill />
          </div>
        </div>
      ))}
    </div>
  );
}

export default ServicesIcon;
