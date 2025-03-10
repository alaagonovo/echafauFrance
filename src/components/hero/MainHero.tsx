import React from "react";
import Header from "../common/header/Header";
import RoundButton from "../common/roundbutton/RoundButton";
// import Image from "next/image";

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
      <div className="w-[94%] lg:max-w-[800px] md:max-w-[700px] mt-[15vh] sm:mt-[5%] m-auto md:ml-12  md:h-[65vh] sm:h-[75vh] h-[60vh] flex flex-col justify-between pr-4 md:px-0">
        <h1 className="text-white font-medium leading-10 sm:leading-14 md:leading-[65px] md:text-5xl sm:text-4xl text-3xl italic">
          Explorez nos solutions d’échafaudage conçues par des experts.
          Fabriquées pour la solidité et la sécurité.
        </h1>
        <p className="text-[18px] md:text-[22px] font-normal text-white w-[80% italic">
          Fiable, sûr et professionnel, offrant des solutions d’échafaudage
          exceptionnelles qui ont parfaitement répondu aux besoins de notre
          projet.
        </p>
        <RoundButton name="Obtenir un devis" path="/" />
      </div>
    </section>
  );
}

export default MainHero;
