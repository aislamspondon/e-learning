import Image from "next/image";
import React from "react";

const GeneralHero = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 py-8 lg:py-16 place-items-center">
      <div className="flex flex-col items-start gap-5 ">
        <h1 className="antialiased text-black bigger-bold">General English</h1>
        <p className="text-black md:pr-16 tracking-wider text-[16px]">
          Find extra listening and reading practice to help you improve your
          level of English and <br /> practice words you can use in everyday
          situations.
        </p>
      </div>
      <div className="w-full relative  mt-16 md:mt-0 flex justify-center items-center gap-4 ">
        <div className="w-[180px] h-[220px] md:w-[230px] md:h-[250px] lg:w-[220px] lg:h-[365px] border rounded-bl-[20%]   relative  overflow-hidden   ">
          <Image src="/images/general/hero1.png" alt="" fill />
        </div>
        <div className="w-[180px] h-[220px] md:w-[220px] md:h-[250px] lg:w-[220px] lg:h-[365px] border   rounded-tr-[20%] relative  overflow-hidden ">
          <Image src="/images/general/hero2.png" alt="" fill />
        </div>
      </div>
    </div>
  );
};

export default GeneralHero;
