import Image from "next/image";
import React from "react";
import styles from "./../reviews.module.css";
function Reviewer({
  clientImage,
  clientName,
  clientPlace,
}: {
  clientImage: string;
  clientName: string;
  clientPlace: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center">
        <Image
          src={clientImage}
          className={`${styles.reviewer_Img} object-contain`}
          alt="client Image"
          
          fill
        />
      </div>
      <div>
        <h4 className="text-[var(--main-blue)] font-medium text-[20px]">{clientName}</h4>
        <p className="text-[18px] font-medium text-[var(--main-blue)]">{clientPlace}</p>
      </div>
    </div>
  );
}

export default Reviewer;
