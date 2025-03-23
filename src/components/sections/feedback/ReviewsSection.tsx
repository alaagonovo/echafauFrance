"use client";
import React from "react";

// import styles from "./reviews.module.css";
// import ReviewCard from "./reviewcard/ReviewCard";

// import reviews from "../../../../data/reviews";
// import Maintitle from "@/components/common/maintitletext/Maintitle";
import AutoPlaySwiper from "../swiper/Swiper";
const ReviewsSection = () => {
  //   const [activeCard, setActiveCard] = useState(reviews[0].id); // Default active card

  // const handleCardClick = (id: string) => {
  //   setActiveCard(id);
  // };

  return (
    // <section className="overflow-hidden">
    //   <div className="mx-auto w-[92%] md:w-[88%] mt-16 md:mt-24 mb-20 lg:mb-8">
    //     <Maintitle
    //       title="Ce que disent nos clients!"
    //       bio="Découvrez les histoires de réussite inspirantes et les témoignages sincères de nos précieux clients : découvrez pourquoi ils font confiance à Echafau pour un service exceptionnel."
    //       bio_Color="var(--main-blue)"
    //     />
    //   </div>
    //   <div
    //     data-aos="zoom-in-out"
    //     data-aos-delay="600"
    //     className={`${styles.container} mb-16 md:mb-24 mx-auto`}
    //   >
    //     {reviews.map((item, index) => (
    //       <ReviewCard
    //         review={item}
    //         key={index}
    //         index={index}
    //         handleOpenCard={handleCardClick}
    //         activeCard={activeCard}
    //       />
    //     ))}
    //   </div>
    // </section>
    <AutoPlaySwiper />
  );
};

export default ReviewsSection;
