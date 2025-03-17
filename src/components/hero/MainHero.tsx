import React from "react";
import Header from "../common/header/Header";
import Content from "./Content";
// import Image from "next/image";

function MainHero() {
  return (
    <section className="relative">
      <div
        className="bg-[var(--main-red)] absolute bottom-[-20px] w-[100%] h-[700px]"
        style={{
          clipPath: "polygon(100% 0, 100% 86%, 48% 100%, 0 95%, 0 50%, 0% 0%)",
        }}
      ></div>
      <div
        className="h-[100vh] relative min-h-[700px]"
        style={{
          clipPath:
            "polygon(0 0, 40% 0, 100% 0, 100% 90%, 84% 100%, 66% 92%, 0 100%)",
        }}
      >
        <div className="left-0 right-0 top-0 bottom-0 absolute after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black/65 -z-10">
          <video
            src="/videos/videoHero.mp4"
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
        <Header />
        <Content />
      </div>
    </section>
  );
}

export default MainHero;
