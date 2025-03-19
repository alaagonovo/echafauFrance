import Image from "next/image";
import React from "react";
import styles from "./projectcard.module.css";
import { IProject } from "@/components/interface";
function ProjectCard({ pro }: { pro: IProject }) {
  const { image, category, title, description, date } = pro;
  return (
    <div
      className={`relative h-[480px] w-[380px] ${styles.main_card} bg-center bg-cover`}
      style={{
        clipPath:
          "polygon(0 0, 100% 0, 100% 30%, 100% 100%, 55% 100%, 12% 100%, 0 90%, 0% 30%)",
        // backgroundImage: "url(/assets/cover.jpg)",
      }}
    >
      <Image
        src={image}
        alt="project image"
        fill
        className="position-center object-cover"
        // style={{ boxShadow: "inset rgba(0, 0, 0, 0.9) 1px -93px 38px 2px" }}
      />
      <div
        className={`absolute inset-0 bg-gradient-to-t  transition-all ${styles.background}`}
      ></div>
      <time className="absolute bg-transparent font-thin top-0 text-white py-3 px-2 w-[100px] text-center z-10">
        <span className="font-semibold">{date}</span>
        {/* <br />
         {date.month} 
        1
        <br />
         {date.year}
        2022 */}
      </time>
      <p className="bg-white py-1 px-2 text-[var(--main-red)] absolute top-2 right-2 z-10">
        {category}
      </p>
      <div className={styles.move_container}>
        <div className="flex justify-center items-center flex-col w-full h-full">
          <h1 className="text-2xl text-white text-center">{title}</h1>
          <div className={styles.sub_content}>
            <p className="text-white text-center mb-4">{description}</p>
            <p className="text-base text-white text-center mb-4">
              <span className="relative w-4 h-4 inline-block me-1">
                <Image src="/svgs/locationIcon.svg" alt="location icon" fill />
              </span>
              {pro.title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
