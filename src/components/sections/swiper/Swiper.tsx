// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/autoplay";
// import Image from "next/image";

// const slides = [
//   "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
//   "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
//   "https://images.unsplash.com/photo-1494976388531-d1058494cdd8",
//   "https://images.unsplash.com/photo-1518770660439-4636190af475",
//   "https://images.unsplash.com/photo-1531415074968-036ba1b575da",
//   "https://images.unsplash.com/photo-1511379938547-c1f69419868d",
// ];

// export default function AutoPlaySwiper() {
//   return (
//     <div className="max-w-full flex justify-center items-center h-screen bg-gray-100 w-full">
//       <Swiper
//         modules={[EffectCoverflow, Autoplay]}
//         effect="coverflow"
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={4}
//         loop={true}
//         spaceBetween={50}
//         autoplay={{
//           delay: 0, // No delay, keeps moving
//           disableOnInteraction: false,
//         }}
//         speed={4000} // Controls how fast it moves (adjust as needed)
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 120,
//           modifier: 1.5,
//           slideShadows: false,
//         }}
//         className="w-full max-w-4xl"
//       >
//         {slides.map((src, index) => (
//           <SwiperSlide key={index}>
//             {({ isActive }) => (
//               <div
//                 className={`relative flex justify-center items-center transition-transform duration-2500 ${
//                   isActive ? "scale-100" : "scale-75 opacity-70"
//                 }`}
//               >
//                 <Image
//                   src={src}
//                   alt={`Slide ${index}`}
//                   width={350}
//                   height={450}
//                   className="rounded-lg shadow-lg object-cover"
//                 />
//               </div>
//             )}
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

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
