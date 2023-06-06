import RoundedImage from "@/components/RoundedImage/RoundedImage";
import Image from "next/image";
import React from "react";

const SkillsHero = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 py-8 lg:py-16 place-items-center">
      <div className="flex flex-col items-start gap-5 ">
        <h1 className="antialiased bigger-bold text-black">Skills</h1>
        <p className="text-black tracking-wide text-[16px]  md:pr-16 ">
          Practice your reading, writing, listening and speaking skills at your
          level with Executive <br /> eLearning
        </p>
      </div>
      <div className="w-full relative  mt-16 md:mt-0 flex flex-col items-center">
        <RoundedImage
          imgSrc={"/images/skills/hero-tr.png"}
          extraClass={
            "w-[180px] h-[200px] md:w-[200px] md:h-[220px] lg:w-[231px] lg:h-[243px] relative ml-28  md:mt-10 md:ml-32 lg:ml-48"
          }
        />
        <RoundedImage
          imgSrc={"/images/skills/hero-bl.png"}
          extraClass={
            "w-[180px] h-[200px] md:w-[220px] md:h-[225px] lg:w-[241px] lg:h-[253px] relative mr-28 -mt-24   lg:-mt-32 lg:mr-44"
          }
        />
      </div>
    </div>
  );
};

export default SkillsHero;
