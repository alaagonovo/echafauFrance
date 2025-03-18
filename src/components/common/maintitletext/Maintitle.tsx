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
        } text-5xl sm:text-6xl font-semibold text-center mb-8`}
      >
        {title}
      </h1>
      <p
        className={`text-center italic leading-5 text-[12px] sm:text-base ${
          bio_Color ? `text-[${bio_Color}]` : `text-[var(--main-red)]`
        }`}
      >
        {bio}
      </p>
      <p
        className="w-[50px] h-[4px] rounded-2xl mx-auto mt-2"
        style={{ backgroundColor: bio_Color || "var(--main-red)" }}
      ></p>
    </div>
  );
}

export default Maintitle;
