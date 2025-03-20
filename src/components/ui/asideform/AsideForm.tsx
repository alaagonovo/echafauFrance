"use client";
import React from "react";
import Groupicon from "./Groupicon";
import asideData from "../../../../data/asideformdata";
// import SocialIcon from "./SocialIcon";
// import socialData from "../../../../data/socialIcons";
import { usePathname } from "next/navigation";

function AsideForm() {
  const pathName = usePathname();

  return (
    <aside className="order-2 lg:order-1 w-full lg:w-[464px] h-fit lg:h-full  p-12 bg-[var(--main-red)] flex flex-col text-white justify-between">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4" data-aos="fade-up">
          <h1 className="text-2xl font-semibold">
            {pathName === "/getaquote" ? "Obtenir un devis" : "Prendre contact"}
          </h1>
          <p className="text-lg font-light">
            Nous serions ravis de vous entendre. Notre équipe chaleureuse est
            toujours là pour discuter.
          </p>
        </div>
        {asideData.map((item, index) => (
          <Groupicon group={item} index={index} key={index} />
        ))}
      </div>
      {/* <div className="flex gap-8 mt-12">
        {socialData.map((icon, index) => (
          <SocialIcon icon={icon} key={index} index={index} />
        ))}
      </div> */}
    </aside>
  );
}

export default AsideForm;
