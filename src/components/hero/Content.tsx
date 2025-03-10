"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import RoundButton from "../common/roundbutton/RoundButton";

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }, // Controls letter-by-letter delay
  },
};

const letter = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

function Content() {
  const [showParagraph, setShowParagraph] = useState(false);

  useEffect(() => {
    // Delay showing the paragraph AFTER H1 completes
    const timer = setTimeout(() => {
      setShowParagraph(true);
    }, 5000); // Adjust timing based on how long H1 takes

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-[94%] lg:max-w-[800px] md:max-w-[700px] mt-[5vh] sm:mt-[5%] m-auto md:ml-12  md:h-[65vh] h-[70vh]  flex flex-col justify-between pr-4 md:px-0">
      {/* Animated H1 */}
      <motion.h1
        className="text-white font-medium leading-12 sm:leading-14 md:leading-[65px] md:text-5xl sm:text-4xl text-3xl italic"
        variants={sentence}
        initial="hidden"
        animate="visible"
      >
        {"Explorez nos solutions d’échafaudage conçues par des experts. Fabriquées pour la solidité et la sécurité."
          .split("")
          .map((char, index) => (
            <motion.span key={index} variants={letter}>
              {char}
            </motion.span>
          ))}
      </motion.h1>

      {/* Animated P (Starts AFTER H1 with a manual delay) */}
      {showParagraph && (
        <motion.p
          className="text-[18px] md:text-[22px] font-light sm:font-normal text-white w-[80%] italic"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {"Fiable, sûr et professionnel, offrant des solutions d’échafaudage exceptionnelles qui ont parfaitement répondu aux besoins de notre projet."
            .split("")
            .map((char, index) => (
              <motion.span key={index} variants={letter}>
                {char}
              </motion.span>
            ))}
        </motion.p>
      )}

      <RoundButton
        name="Obtenir un devis"
        path="/"
        transition={true}
        delay={12.5}
      />
    </div>
  );
}

export default Content;
