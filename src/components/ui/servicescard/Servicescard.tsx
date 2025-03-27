import { IService } from "@/components/interface";
import Image from "next/image";
import React from "react";

function Servicescard({
  service,
  index,
}: {
  service: IService;
  index: number;
}) {
  const { icon, title, paragraph } = service;
  // console.log(index);
  return (
    <div>
      <article
        className={`w-[96%] mx-auto  overflow-hidden sm:w-[246px] rounded-lg ${
          index % 2 !== 0 ? "bg-[var(--main-red)]" : "bg-white"
        }  p-6 relative`}
        data-aos="zoom-in-out"
        data-aos-delay={`${index * 250}`}
      >
        <div
          className={`w-[80px] h-[80px] rounded-full  p-4 mx-auto ${
            index % 2 !== 0 ? "bg-white" : "bg-[var(--main-red)]"
          }`}
        >
          <Image
            src={icon}
            alt="icon of service"
            width={48}
            height={48}
            loading="lazy"
            className="h-12"
          />
        </div>
        <h1
          className={`text-[17px] font-semibold mt-6 mb-2 text-center ${
            index % 2 !== 0 ? "text-white" : "text-black"
          } `}
        >
          {title}
        </h1>
        <p
          className={`text-sm text-center truncate-4 truncatee ${
            index % 2 !== 0 ? "text-white" : "text-gray-500"
          }`}
        >
          {paragraph}
        </p>
      </article>
    </div>
  );
}

export default Servicescard;
