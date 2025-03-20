import Statisticscard from "@/components/ui/numcard/Statisticscard";

import React from "react";
import numsData from "../../../../data/Statistics";
import Maintitle from "@/components/common/maintitletext/Maintitle";

function Ournumbers() {
  return (
    <section className="w-[94%] mx-auto py-24">
      <div>
        <Maintitle
          title="Noschiffres"
          // bio="Découvrez notre portfolio de projets d'échafaudage réalisés : une vitrine de précision, d'innovation et d'excellence à travers des structures variées."
          title_Color="#000"
          // bio_Color="#000"
        />
        {/* <h1 className="text-[40px] font-semibold text-start"> */}
        {/* <span
            className="bg-[var(--main-red)] text-white py-2 sm:py-0 ps-4 lg:pe-8 pe-6 inline-block"
            style={{ clipPath: "polygon(0 0, 100% 0, 81% 100%, 0% 100%)" }}
          > */}
        {/* Nos */}
        {/* </span> */}
        {/* <span className="-ms-4"> */}
        {/* chiffres */}
        {/* </span> */}
        {/* </h1> */}
      </div>
      <div className="max-w-[1380px] mx-auto">
        <div className="w-[92%] mx-auto grid lg:grid-cols-3 grid-cols-1 gap-16 lg:gap-8 mt-16 items-end">
          {numsData.map((stc, index) => (
            <Statisticscard key={index} stc={stc} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Ournumbers;
