import React from "react";
import aboutUsData from "../../../../data/Aboutus";
import Image from "next/image";
import Maintitle from "@/components/common/maintitletext/Maintitle";

function AboutUs() {
  return (
    <section className="mt-16  mx-auto max-w-[1380px]">
      <Maintitle
        title="À propos de nous"
        bio="Echafau, fort de 18 ans d'excellence en Europe, offre des solutions d’échafaudage 100% métalliques, durables et innovantes. Avec un taux d’accidents de 0%, nous garantissons sécurité et fiabilité à chaque projet."
        setPadding={true}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[.9fr_1.1fr] gap-12 w-full lg:w-[94%] xl:w-[92%] mx-auto ">
        <div className="relative w-full rounded-0 lg:rounded-2xl overflow-hidden lg:h-full sm:h-[650px] h-[450px]">
          <Image
            src="/assets/aboutview.jpg"
            alt="about Image view"
            fill
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
            loading="lazy"
          />
        </div>
        <div className="grid gap-8 grid-cols-1 lg:px-0 px-4">
          {aboutUsData.map((item, index) => (
            <div key={index} className=" flex flex-col  gap-2">
              <div
                className="relative w-[80px] h-[80px] rounded-3xl p-4 flex items-center justify-center"
                style={{
                  backgroundColor: `${item.color}`,
                  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                }}
              >
                <Image src={item.icon} width={64} height={64} alt="icon" />
              </div>
              <p className="text-[18px] text-[var(--text-color)]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
