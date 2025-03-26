import { IMaintitle } from "@/components/interface";
import React from "react";

function Maintitle({
  title,
  bio,
  title_Color,
  bio_Color,
  setPadding,
}: IMaintitle) {
  return (
    <div
      className={`mb-14 max-w-[900px] mx-auto  ${
        setPadding ? "lg:px-0 px-4" : "p-0"
      }`}
    >
      <h1
        className={`${
          title_Color ? `text-[${title_Color}]` : `text-[var(--dark-blue)]`
        } text-5xl sm:text-6xl font-semibold text-center mb-3 lg:mb-6`}
        data-aos="fade-up"
      >
        {title}
      </h1>
      <p
        className={`text-center  leading-7 text-base sm:text-[21px] ${
          bio_Color ? `text-[${bio_Color}]` : `text-[var(--main-red)]`
        }`}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {bio}
      </p>
      <p
        className="w-[50px] h-[4px] rounded-2xl mx-auto mt-2"
        style={{ backgroundColor: bio_Color || "var(--main-red)" }}
        data-aos="fade-up"
        data-aos-delay="400"
      ></p>
    </div>
  );
}

export default Maintitle;
