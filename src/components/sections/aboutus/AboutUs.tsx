import React from "react";
import aboutUsData from "../../../../data/Aboutus";
import Image from "next/image";
// import RoundButton from "@/components/common/roundbutton/RoundButton";
// import Maintitle from "@/components/common/maintitletext/Maintitle";

function AboutUs() {
  return (
    <section className="mt-16  mx-auto max-w-[1380px]" id="aproposdenous">
      {/* <Maintitle
        title="À propos de nous"
        bio="Echafau, fort de 18 ans d'excellence en Europe, offre des solutions d’échafaudage 100% métalliques, durables et innovantes. Avec un taux d’accidents de 0%, nous garantissons sécurité et fiabilité à chaque projet."
        setPadding={true}
      /> */}
      <p className="w-[92%] mx-auto text-center font-medium py-8 text-[var(--dark-red)]">
        À Propos
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[.9fr_1.1fr] gap-12 lg:gap-22 w-full lg:w-[94%] xl:w-[92%] mx-auto">
        <div className=" flex flex-col gap-6">
          <div
            className="relative w-full rounded-0  overflow-hidden max-w-[470px] lg:h-full h-[450px] mx-auto"
            style={{
              clipPath:
                "polygon(0 0, 84% 0, 100% 16%, 100% 80%, 100% 100%, 0 100%, 0% 80%, 0% 20%)",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }}
          >
            <Image
              src="/assets/aboutview.jpg"
              alt="about Image view"
              fill
              loading="lazy"
            />
          </div>
          {/* <p className="py-4 font-medium text-xl">
            Echafau est une entreprise française fondée en 2006.
          </p> */}
          {/* <RoundButton name="Obtenir un devis" path="/" /> */}
        </div>

        <div className="grid gap-8 grid-cols-1 lg:px-0 px-4">
          <h1 className="font-semibold text-3xl text-[var(--dark-red)]">
            Echafau est une entreprise française fondée en 2006.
          </h1>
          {aboutUsData.map((item, index) => (
            <div key={index} className="flex   gap-2">
              <div
                className="relative w-[24px] h-[24px] flex-shrink-0"
                style={
                  {
                    // backgroundColor: `${item.color}`,
                    // boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                  }
                }
              >
                <Image src={item.icon} fill alt="icon" />
              </div>
              <p className="text-xl">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
