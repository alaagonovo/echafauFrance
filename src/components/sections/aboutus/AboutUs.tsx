import React from "react";
import aboutUsData from "../../../../data/Aboutus";
import Image from "next/image";

function AboutUs() {
  return (
    <section className=" mt-16 w-[94%] mx-auto">
      <h1 className="text-[var(--dark-blue)] text-4xl sm:text-6xl font-medium mb-14">
        À propos de nous
      </h1>
      <div className="grid lg:grid-cols-3 lg:gap-12 gap-14 w-[90%] mx-auto grid-cols-1">
        {aboutUsData.map((item, index) => (
          <div key={index} className=" flex flex-col lg:gap-8 gap-6">
            <div
              className="relative w-[80px] h-[80px] rounded-3xl p-4 flex items-center justify-center"
              style={{
                backgroundColor: `${item.color}`,
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              }}
            >
              <Image src={item.icon} width={64} height={64} alt="icon" />
            </div>
            <p className="text-[18px] text-[var(--text-color)]">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutUs;
