import RoundButton from "../common/roundbutton/RoundButton";

function Content() {
  return (
    <div className="w-[94%] lg:max-w-[888px] md:max-w-[700px] absolute -translate-y-1/2 left-[4%] top-[calc(50%+45px)] h-[65vh] flex flex-col justify-between min-h-[450px]">
      
      <h1 className="text-white leading-12 sm:leading-14 md:leading-[65px] md:text-5xl sm:text-4xl text-3xl">
        Découvrez nos solutions d&apos;échafaudage conçues par des experts.
        Robustesse et sécurité garanties.
      </h1>

     

      <p className="text-[18px] md:text-[22px] font-light sm:font-normal text-white w-[80%]">
        Des services fiables, sécurisés et professionnels pour répondre
        parfaitement aux besoins de votre projet.
      </p>

      <RoundButton name="Obtenir un devis" path="/" transition={true} />
    </div>
  );
}

export default Content;
