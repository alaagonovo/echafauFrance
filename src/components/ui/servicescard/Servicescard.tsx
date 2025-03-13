import { IService } from "@/components/interface";
import Image from "next/image";
import React from "react";

function Servicescard({ service }: { service: IService }) {
  const { icon, title, paragraph } = service;
  return (
    <div>
      <article className="w-[96%] mx-auto sm:w-[330px] rounded-2xl bg-[var(--main-red)] p-6 relative">
        <div className="w-[80px] h-[80px] rounded-2xl  p-4 bg-white">
          <Image src={icon} alt="icon of service" width={48} height={48} />
        </div>
        <h1 className="text-2xl font-medium mt-6 mb-1 text-white">{title}</h1>
        <p className="text-sm text-white">{paragraph}</p>
      </article>
    </div>
  );
}

export default Servicescard;
