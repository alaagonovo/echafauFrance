import React from "react";
import ServicesIconData from "../../../data/servicesicons";
import styles from "./servicesicon.module.css";
import Image from "next/image";
function ServicesIcon() {
  return (
    <div className="gap-4 flex flex-col justify-end items-end absolute right-0 bottom-12 sm:bottom-24 overflow-hidden">
      {ServicesIconData.map((serv, index) => (
        <div
          key={index}
          className={`flex justify-center items-center bg-[#131f2d] p-3 lg:py-4 lg:px-5   ${styles.main_cont_icon}`}
          data-aos="fade-up"
          data-aos-delay={`${(index + 1) * 200}`}
        >
          <div className="relative shrink-0">
            <p className="text-gray-400 font-medium pe-2 me-2 border-r-3 border-[#070f1e] relative">
              <span
                className={`${styles.num_span} text-xs -top-2 right-0 relative`}
              >
                {" "}
                0{index + 1}
              </span>
              <span
                className={`${styles.icon_span} relative w-8 h-8 lg:hidden block`}
              >
                <Image src={serv.icon} alt="service icon" fill />
              </span>
            </p>
          </div>
          <h2 className="text-gray-400 text-sm font-semibold">
            {serv.typeName}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default ServicesIcon;
