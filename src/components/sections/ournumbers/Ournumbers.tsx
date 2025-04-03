import Statisticscard from "@/components/ui/numcard/Statisticscard";
import React from "react";
import numsData from "../../../../data/Statistics";
import Maintitle from "@/components/common/maintitletext/Maintitle";

function Ournumbers() {
  return (
    <section className="w-[94%] mx-auto pt-20 pb-24">
      <div>
        <Maintitle title="Noschiffres" title_Color="#000" bio_Color="#000" />
      </div>
      <div className="max-w-[1380px] mx-auto">
        <div className="w-[92%] mx-auto grid lg:grid-cols-3 grid-cols-1 gap-16 lg:gap-8 mt-8 items-end">
          {numsData.map((stc, index) => (
            <Statisticscard key={index} stc={stc} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Ournumbers;
