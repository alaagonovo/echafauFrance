import Link from "next/link";
import React from "react";

import Image from "next/image";
import FaqsCard from "@/components/ui/faqsCard/FaqsCard";
import faqs from "../../../../data/faqs";
import RoundButton from "@/components/common/roundbutton/RoundButton";

function Faqs() {
  return (
    <section
      className="h-auto  relative pb-28 pt-16 lg:pb-28 lg:pt-24"
      style={{ backgroundColor: "rgba(0,38,82,0.95)" }}
      id="faqs"
    >
      <Image
        src="/assets/servvview.webp"
        alt="cover image"
        fill
        className="z-[-1]"
        loading="lazy"
      />
      <div className="mx-auto w-[92%] md:w-[88%]">
        <h1
          data-aos="fade-up"
          className="text-5xl text-white font-semibold max-w-[768px]"
        >
          FAQ
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="max-w-full lg:max-w-[768px] mt-5 font-light lg:font-normal text-white text-lg"
        >
          Tout ce que vous devez savoir sur le produit et la facturation. Vous
          ne trouvez pas la réponse que vous cherchez ?
          <Link
            href="/getintouch"
            className="underline decoration-1 ml-2 mr-1 hover:text-[var(--main-red)] font-medium duration-300"
          >
            Discutez avec notre équipe amicale
          </Link>
          .
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 lg:mt-16 gap-x-4 gap-y-10 lg:gap-y-16">
          {faqs.map((faq, index) => (
            <FaqsCard question={faq.question} answer={faq.answer} key={index} />
          ))}
        </div>
        <div>
          <div
            className="flex justify-center mt-16"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <RoundButton
              name="Obtenir un devis"
              path="/getaquote"
              background="transparent"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faqs;
