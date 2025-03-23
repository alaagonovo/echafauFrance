import React from "react";
import InfinityScroll from "../infinityscroll/InfinityScroll";
import reviews from "../../../../data/reviews";
import Image from "next/image";

const Reviews = () => {
  return (
    <section
      id="reviews"
      className="scroll-container relative pb-16 bg-white rounded-ee-[40px] rounded-es-[40px]"
    >
      <div className="mt-8 md:mt-22 flex flex-col gap-6 relative">
        <div
          className="h-[90vh] lg:h-[80vh] mx-auto bg-gray-100 absolute left-0 right-0 xl:left-[15%] xl:right-[15%] top-0 bottom-[10%] shadow-md"
          style={{ borderRadius: "25px" }}
        >
          <h1 className="text-3xl lg:text-5xl font-semibold text-black mt-7 text-center z-2 relative">
            Ce que disent nos clients!
          </h1>
          <span className="absolute top-8 lg:top-6 left-6 z-1">
            <Image
              src="/svgs/qoute.svg"
              alt="qoute image"
              width={150}
              height={150}
              className="rotate-180"
            />
          </span>
        </div>

        <InfinityScroll elements={reviews.line1} />
      </div>
    </section>
  );
};

export default Reviews;
