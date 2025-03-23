// "use client";
// import React, { useRef, useEffect, useState } from "react";
// import styles from "./Infinityscroll.module.css";
// import Card from "../card/Card";
// import { IPelements } from "@/components/interface";

// function InfinityScroll({ elements }: { elements: IPelements[] }) {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const updateActiveCard = () => {
//       if (!containerRef.current) return;
//       const cards = Array.from(
//         containerRef.current.querySelectorAll(".scroll-card")
//       );
//       const containerCenter = window.innerWidth / 2;

//       let closestIndex = 0;
//       let closestDistance = Infinity;

//       cards.forEach((card, index) => {
//         const rect = card.getBoundingClientRect();
//         const cardCenter = rect.left + rect.width / 2;
//         const distance = Math.abs(containerCenter - cardCenter);

//         if (distance < closestDistance) {
//           closestDistance = distance;
//           closestIndex = index;
//         }
//       });

//       setActiveIndex(closestIndex);
//     };

//     const scrollInterval = setInterval(updateActiveCard, 100); // Update continuously

//     return () => clearInterval(scrollInterval);
//   }, []);

//   return (
//     <div className={styles["scroll-wrapper"]} ref={containerRef}>
//       <div
//         className={`${styles["scroll-track-left"]} flex
//   gap-[50px]`}
//       >
//         {elements.map((item, index) => {
//           let scaleClass = "scale-80  duration-5000"; // Default small size

//           if (index === activeIndex) {
//             scaleClass = "scale-110"; // Center card
//           } else if (index === activeIndex! - 1 || index === activeIndex! + 1) {
//             scaleClass = "scale-95   duration-5000"; // Adjacent cards
//           }

//           return (
//             <div
//               key={index}
//               className={`scroll-card transition-all duration-5000 ease-in-out ${scaleClass}`}
//             >
//               <Card review={item} />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default InfinityScroll;
"use client";
import React, { useRef, useEffect, useState } from "react";
import styles from "./Infinityscroll.module.css";
import Card from "../card/Card";
import { IPelements } from "@/components/interface";

function InfinityScroll({ elements }: { elements: IPelements[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isInViewport, setIsInViewport] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Intersection Observer to detect when the section is in the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInViewport) return;

    const updateActiveCard = () => {
      if (!containerRef.current) return;
      const cards = Array.from(
        containerRef.current.querySelectorAll(".scroll-card")
      );
      const containerCenter = window.innerWidth / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distance = Math.abs(containerCenter - cardCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    const scrollInterval = setInterval(updateActiveCard, 100);

    return () => clearInterval(scrollInterval);
  }, [isInViewport]);

  return (
    <div className={styles["scroll-wrapper"]} ref={containerRef}>
      <div
        className={` ${styles["scroll-track-left"]} ${
          isInViewport ? "" : styles.animation_stop
        } flex gap-[50px]`}
      >
        {elements.map((item, index) => {
          let scaleClass = "scale-80 duration-5000"; // Default size

          if (index === activeIndex) {
            scaleClass = "scale-110"; // Center card
          } else if (index === activeIndex! - 1 || index === activeIndex! + 1) {
            scaleClass = "scale-95 duration-5000"; // Adjacent cards
          }

          return (
            <div
              key={index}
              className={`scroll-card transition-all duration-5000 ease-in-out ${scaleClass}`}
            >
              <Card review={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default InfinityScroll;
