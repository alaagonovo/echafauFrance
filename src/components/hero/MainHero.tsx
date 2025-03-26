import React from "react";

import Content from "./Content";
// import Image from "next/image";
import styles from "./mainhero.module.css";
import ServicesIcon from "./ServicesIcon";
function MainHero() {
  return (
    <section className="relative">
      <div
        className={`bg-[var(--main-red)] absolute bottom-[-20px] w-[100%] h-[700px] ${styles.red_clippath}`}
      ></div>
      <div
        className={`h-[100vh] relative min-h-[700px] ${styles.main_clippath}`}
      >
        <div className="left-0 right-0 top-0 bottom-0 absolute after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black/44 -z-10">
          <video
            src="/videos/videoHero.webm"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover "
          />
          {/* <Image
          src="/assets/cover.jpg"
          fill
          alt="cover Image"
          className="object-cover object-center"
        /> */}
        </div>
        <Content />
        <ServicesIcon />
      </div>
    </section>
  );
}

export default MainHero;
