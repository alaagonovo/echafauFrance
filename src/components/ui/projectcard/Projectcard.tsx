import { IPcard } from "@/components/interface";
import Image from "next/image";
import React from "react";

function Projectcard({ proDetails }: { proDetails: IPcard }) {
  const { image, title, date } = proDetails;
  return (
    <article className="max-w-[460px] lg:max-w-full lg:w-full relative overflow-hidden bg-white mx-auto">
      <div className="relative h-[280px]">
        <Image src={image} alt="" fill className="object-cover" />
      </div>
      <h1 className="text-xl my-6 font-medium text-[var(--main-blue)] px-10 text-center">
        {title}
      </h1>
      <time className="absolute bg-[var(--main-blue)] font-thin top-0 text-white py-4 px-1 w-[70px] text-center">
        <span className="font-semibold">{date.day}</span>
        <br />
        {date.month}
        <br />
        {date.year}
      </time>
    </article>
  );
}

export default Projectcard;
