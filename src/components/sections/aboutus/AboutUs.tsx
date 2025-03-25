import React from "react";
import aboutUsData from "../../../../data/Aboutus";
import Image from "next/image";

function AboutUs() {
  return (
    <section
      className="md:mt-28 mt-16  mx-auto max-w-[1380px]"
      id="aproposdenous"
    >
      <h1
        className="lg:hidden block font-semibold text-[2.5rem]  w-[92%] mx-auto my-4"
        data-aos="fade-left"
      >
        À Propos
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[.9fr_1.1fr] gap-12 lg:gap-22 w-full lg:w-[94%] xl:w-[92%] mx-auto">
        <div className=" flex flex-col gap-6">
          <div
            className="relative w-full rounded-0  overflow-hidden max-w-[740px] lg:h-full h-[590px] mx-auto"
            style={{
              clipPath:
                "polygon(0 0, 84% 0, 100% 16%, 100% 80%, 100% 100%, 0 100%, 0% 80%, 0% 20%)",
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            }}
            data-aos="fade-right"
          >
            <Image
              src="/assets/aboutview.webp"
              alt="about Image view"
              fill
              loading="lazy"
            />
          </div>
        </div>

        <div className="grid gap-8 grid-cols-1 lg:px-0 px-4">
          <h1
            className="lg:block hidden font-semibold text-[2.5rem]  ms-6"
            data-aos="fade-left"
          >
            À Propos
          </h1>
          {aboutUsData.map((item, index) => (
            <div
              key={index}
              className="flex   gap-2"
              data-aos="fade-left"
              data-aos-delay={`${(index + 1) * 300}`}
            >
              <div className="relative w-[24px] h-[24px] flex-shrink-0">
                <Image src={item.icon} fill alt="icon" loading="lazy" />
              </div>
              <p className="text-[21px]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
