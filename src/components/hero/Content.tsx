import RoundButton from "../common/roundbutton/RoundButton";

function Content() {
  return (
    <div className="w-[94%] lg:max-w-[888px] md:max-w-[700px] absolute -translate-y-1/2 left-[4%] top-[calc(50%+35px)] sm:top-[calc(50%+65px)] h-[70vh] sm:h-[55vh] lg:h-[40vh] flex flex-col justify-between min-h-[320px]">
      <h1
        className="text-white leading-12 sm:leading-14 md:leading-[50px] md:text-[34px] sm:text-4xl text-4xl"
        data-aos="fade-up"
      >
        Découvrez nos solutions d&apos;échafaudage conçues par des experts.
        Robustesse et sécurité garanties.
      </h1>

      <p
        className="text-[18px] md:text-[22px] font-light sm:font-normal text-white w-[80%]"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Des services fiables, sécurisés et professionnels pour répondre
        parfaitement aux besoins de votre projet.
      </p>
      <div data-aos="fade-up" data-aos-delay="400">
        <RoundButton name="Contactez-nous" path="/getintouch" />
      </div>
    </div>
  );
}

export default Content;
