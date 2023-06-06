import Image from "next/image";
import React from "react";

const EnglishLevelsHero = () => {
  return (
    <div className="w-full flex flex-col md:flex-row py-4 lg:py-16 justify-between items-center">
      <div className="w-full md:w-[58%] flex flex-col items-start gap-5 ">
        <h1 className="antialiased bigger-bold">English Levels</h1>
        <p className="text-black md:pr-20 tracking-wider text-[16px]">
          Find out more about the different CEFR English levels and take a free
          level test.
        </p>
      </div>
      <div className="w-full md:w-[42%] relative  mt-16 md:mt-0 flex flex-col-reverse items-center ">
        <div className="w-[200px] h-[220px] md:w-[220px] md:h-[250px] lg:w-[293px] lg:h-[313px] border border-transparent rounded-tr-[70px]  rounded-bl-[70px] relative  overflow-hidden ml-auto md:ml-36 -mt-32 md:-mt-40 lg:-mt-56 self-end">
          <Image src="/images/english/hero2.png" alt="" fill />
        </div>
        <div className="w-[200px] h-[220px] md:w-[230px] md:h-[250px] lg:w-[323px] lg:h-[365px] border border-transparent rounded-tr-[70px]  rounded-bl-[70px] relative  overflow-hidden   mr-auto md:mr-0 ml-0 md:-ml-32 ">
          <Image src="/images/english/hero.png" alt="" fill />
        </div>
      </div>
    </div>
  );
};

export default EnglishLevelsHero;
