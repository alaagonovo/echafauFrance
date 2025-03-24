"use client";
import React from "react";
import SlotCounter from "react-slot-counter";
import { useInView } from "react-intersection-observer";
import { IStc } from "@/components/interface";
import Image from "next/image";
function Statisticscard({ stc }: { stc: IStc }) {
  const [ref, inView] = useInView({ triggerOnce: true });
  const { num, sign, title, desc, icon } = stc;
  return (
    <article ref={ref}>
      <Image
        src={icon}
        alt="icon of statics"
        width={120}
        height={120}
        className="mx-auto my-4"
        loading="lazy"
      />
      <h1 className="text-7xl text-center font-semibold text-[var(--main-red)] leading-18">
        {inView ? <SlotCounter startValue={0} value={num} duration={1.5} /> : 0}
        {sign && <span>{sign}</span>}
      </h1>

      <h1 className="text-center text-[26px] font-medium mt-4 mb-3 sm:mb-1 sm:whitespace-nowrap sm:overflow-hidden sm:text-ellipsis sm:leading-16 leading-6">
        {title}
      </h1>
      <p className="text-center text-lg leading-6 text-[var(--text-color)]">
        {desc}
      </p>
    </article>
  );
}

export default Statisticscard;
