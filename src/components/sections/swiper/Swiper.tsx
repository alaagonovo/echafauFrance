import React from "react";
import InfinityScroll from "../infinityscroll/InfinityScroll";
import reviews from "../../../../data/reviews";
import Image from "next/image";

const Reviews = () => {
  return (
    <section
      id="reviews"
      className="scroll-container relative bg-white rounded-ee-[40px] rounded-es-[40px]"
    >
      <div className="mt-8 mb-10 md:mt-22 md:mb-24 lg:mb-16 flex flex-col gap-6 relative">
        <div className="h-[90vh] lg:h-[80vh] mx-auto bg-gray-100 absolute left-0 right-0 xl:left-[15%] xl:right-[15%] top-0 bottom-[10%] shadow-md xl:rounded-3xl rounded-0">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black mt-12 lg:mt-7 text-center z-2 relative"
            data-aos="zoom-in-out"
          >
            Ce que disent nos clients!
          </h1>
          <span className="relative -top-2 sm:-top-14 left-6 z-1 w-[90px] h-[90px] xl:w-[150px] xl:h-[150px] inline-block">
            <Image
              src="/svgs/qoute.svg"
              alt="qoute image"
              fill
              className="rotate-180"
              loading="lazy"
            />
          </span>
        </div>

        <InfinityScroll elements={reviews.line1} />
      </div>
    </section>
  );
};

export default Reviews;
