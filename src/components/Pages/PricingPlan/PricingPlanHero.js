import Image from "next/image";
import React from "react";
import FlipClock from "./FlipClock";

const PricingPlanHero = () => {
  return (
    <>
      <div
        className="hidden  w-full md:h-[700px] lg:h-[816px] max-h-screen  md:grid grid-cols-2  
    
    place-items-center bg-[url(/images/pricing/hero.png)] bg-right bg-contain bg-no-repeat overflow-hidden"
      >
        <div className="w-full h-full blurry-end pt-28 ">
          <p className="underline uppercase font-bold text-black underline-offset-4 decoration-[3px] decoration-blue-primary ">
            Special offer
          </p>
          <h3 className="mt-10">
            Start your personal development with your language learning with us
          </h3>
          <ul className="list-disc list-inside ml-2 mt-5 font-medium">
            <li>Learn with our International teachers</li>
            <li>Live Online streaming to watch and listen</li>
            <li>Support Available 24/7</li>
          </ul>
        </div>
      </div>
      <div className="md:hidden  w-full h-[50vh] my-3 block relative rounded-lg overflow-hidden">
        <div className="w-full h-[50vh] relative brightness-[0.3] ">
          <Image src="/images/pricing/hero.png" alt="" fill />
        </div>
        <div className="w-full absolute top-0 text-white p-5">
          <p className="underline uppercase font-bold text-white underline-offset-4 decoration-[3px] decoration-white ">
            Special offer
          </p>
          <h3 className="mt-5 text-white text-[21px] font-medium ">
            Start your personal development with your language learning with us
          </h3>
          <ul className="list-disc list-outside ml-1 mt-5 text-[15px]  text-white">
            <li className="text-white">
              Learn with our International teachers
            </li>
            <li className="text-white">
              Live Online streaming to watch and listen
            </li>
            <li className="text-white">Support Available 24/7</li>
          </ul>
          {/* <FlipClock /> */}
        </div>
      </div>
    </>
  );
};

export default PricingPlanHero;
