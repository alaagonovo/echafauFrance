import Image from "next/image";
import React from "react";

import styles from "../infinityscroll/Infinityscroll.module.css";
import { IPelements } from "@/components/interface";

function Card({ review }: { review: IPelements }) {
  return (
    <article className={`${styles["scroll-item"]} p-4 z-10`}>
      <div className="w-[100px] h-[70px]  overflow-hidden relative p-1 shrink-0 mx-auto">
        <Image
          src={review.clientImage}
          alt="client image"
          fill
          className="object-contain"
          loading="lazy"
        />
      </div>
      <p className="text-md text-[var(--dark-blue)] text-center">
        {review.clientName}
      </p>
      <h1 className="text-xl font-medium text-center my-2">{review.title}</h1>
      <span className="relative ">
        <Image
          src="/svgs/qoute.svg"
          alt="qoute image"
          width={40}
          height={40}
          className="rotate-180"
          loading="lazy"
        />
      </span>
      <p className="text-md text-center custom-5-truncate">{review.desc}</p>
      <span className="relative flex justify-end">
        <Image
          src="/svgs/qoute.svg"
          alt="qoute image"
          width={40}
          height={40}
          loading="lazy"
        />
      </span>
    </article>
  );
}

export default Card;
