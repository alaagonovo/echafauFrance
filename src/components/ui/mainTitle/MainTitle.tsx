"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function MainTitle() {
  const pathName = usePathname();
  return (
    <div className="flex flex-col gap-5 ">
      <div className="flex gap-2 items-center" data-aos="fade-up">
        <p className="relative w-5 h-5 ">
          <Image src="/svgs/backarrow.svg" alt="" fill />
        </p>
        <Link
          href="/"
          className="text-[var(--main-red)] font-semibold text-[14px] inline-block"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
      <h1
        className="text-4xl  font-semibold leading-[44px]"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        {pathName === "/getaquote"
          ? "Obtenir un devis"
          : "Envoyez votre demande"}
      </h1>
      <p className="text-xl" data-aos="fade-up" data-aos-delay="250">
        Contactez-nous à tout moment via{" "}
        <Link
          href="mailto:info@thescaffolding.co.uk"
          className="text-[var(--main-red)] ml-2 hover:font-medium hover:underline"
        >
          echafaufrance@gmail.com
        </Link>
      </p>
    </div>
  );
}

export default MainTitle;
