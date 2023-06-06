import React from "react";
import PricingPlanHero from "./PricingPlanHero";
import PointPaper from "./PointPaper/PointPaper";
import SubscriptionPlan from "./SubscriptionPlan/SubscriptionPlan";
import Explore from "./Explore";
import AccordionSection from "./Accordion/Accordion";
import ExecutiveELearning from "./ExecutiveElearning";
import { priceList } from "@/utility/data/priceData";

const PricingPlan = () => {
  return (
    <div>
      <PricingPlanHero />
      {priceList.map((item, index) => (
        <PointPaper index={index} key={index} item={item} />
      ))}

      <div className="md:mask-1 w-full aspect-video md:aspect-auto md:w-[630px] lg:h-[370px]  my-10 mx-auto">
        <iframe
          className="w-full md:w-[620px] md:h-[340px] mx-auto"
          src="https://www.youtube.com/embed/NIk1-ck4c6Q"
          title="How to teach Kids  | from a Prague kindergarten, part 1 | English for Children"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <SubscriptionPlan />
      <Explore />
      <AccordionSection />
      <ExecutiveELearning />
    </div>
  );
};

export default PricingPlan;
