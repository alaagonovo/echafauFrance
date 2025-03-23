
"use client";
import React, { useRef, useEffect, useState } from "react";
import styles from "./Infinityscroll.module.css";
import Card from "../card/Card";
import { IPelements } from "@/components/interface";

function InfinityScroll({
  elements,
  reverse,
}: {
  elements: IPelements[];
  reverse?: boolean;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateActiveCard = () => {
      if (!containerRef.current) return;
      const cards = Array.from(
        containerRef.current.querySelectorAll(".scroll-card")
      );
      const containerCenter = (window.innerWidth - 200) / 2;

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

    const scrollInterval = setInterval(updateActiveCard, 100); // Update continuously

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className={styles["scroll-wrapper"]} ref={containerRef}>
      <div
        className={
          reverse ? styles["scroll-track-right"] : styles["scroll-track-left"]
        }
      >
        {elements.map((item, index) => {
          let scaleClass = "scale-80  duration-6000"; // Default small size

          if (index === activeIndex) {
            scaleClass = "scale-110"; // Center card
          } else if (index === activeIndex! - 1 || index === activeIndex! + 1) {
            scaleClass = "scale-95   duration-6000"; // Adjacent cards
          }

          return (
            <div
              key={index}
              className={`scroll-card transition-all duration-6000 ease-in-out ${scaleClass}`}
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
