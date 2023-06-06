import Image from "next/image";
import React from "react";

const GrammarHero = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 py-8 lg:py-16 place-items-center">
      <div className="flex flex-col items-start gap-5 ">
        <h1 className="antialiased text-black bigger-bold">Grammar</h1>
        <p className="text-black font-medium md:pr-16 tracking-wide text-[16px]">
          Revise and practice your grammar to help you increase your confidence
          and improve your <br /> language level.
        </p>
      </div>
      <div className="w-full">
        <div className="w-[300px] h-[300px] md:w-[340px] md:h-[350px] lg:w-[443px] lg:h-[395px] relative ml-auto">
          <Image src={"/images/grammar/hero.png"} alt="" fill />
        </div>
      </div>
    </div>
  );
};

export default GrammarHero;
