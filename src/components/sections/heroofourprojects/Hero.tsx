import RoundButton from "@/components/common/roundbutton/RoundButton";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section
      className="h-[75vh]  relative"
      style={{
        clipPath:
          "polygon(0 0, 100% 0, 100% 30%, 100% 88%, 53% 100%, 48% 100%, 0 88%, 0% 30%)",
      }}
    >
      <div className="left-0 right-0 top-0 bottom-0 absolute after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-black/38 -z-10">
        <Image
          src="/assets/projectscover.jpg"
          fill
          alt="cover Image"
          className="object-cover object-center"
        />
      </div>
      <div className="text-white absolute -translate-x-1/2 -translate-y-1/2  top-[55%] sm:top-1/2 left-1/2 flex gap-4 flex-col text-center items-center lg:w-[50%] w-[90%]">
        <h3 className="text-2xl font-medium">Nos Projets</h3>
        <h1 className="text-4xl font-semibold">
          Présentation de notre expertise en échafaudage
        </h1>
        <p className="text-xl font-medium">
          Découvrez notre portfolio de solutions d’échafaudage innovantes,
          soutenant des projets de toutes tailles en construction, maintenance
          et restauration.
        </p>
        <RoundButton name="Contactez-nous" path="/getintouch" />
      </div>
    </section>
  );
}

export default Hero;
