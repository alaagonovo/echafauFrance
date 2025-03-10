import React from "react";
import Header from "../common/header/Header";
import Content from "./Content";

function MainHero() {
  return (
    <section className="h-[100vh] relative">
      <div className="left-0 right-0 top-0 bottom-0 absolute after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black/60 -z-10">
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
          className="object-cover object-top"
        /> */}
      </div>
      <Header />
      <Content />
    </section>
  );
}

export default MainHero;
