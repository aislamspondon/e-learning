import RoundedImage from "@/components/RoundedImage/RoundedImage";
import Image from "next/image";
import React from "react";

const AboutHero = () => {
  return (
    <div className="w-full h-max grid grid-cols-1 lg:grid-cols-2 py-8 lg:py-12 place-items-center">
      <div className="w-full flex flex-col items-start gap-5 ">
        <h2 className="antialiased">
          Executive e-Learning online training platform to drive your personal
          development growth
        </h2>
        <p className="text-gray-secondary md:pr-8 tracking-wider text-lg">
          We are Executive e Learning, an online training company based in
          London, UK. For over three years, we have been designing our eLearning
          platform, that will help individuals, teams, and government official
          in public sectors to succeed through employee training and
          development.
        </p>
      </div>
      <div className="w-full relative  mt-16 md:mt-16 lg:mt-0 flex flex-col items-center">
        <RoundedImage
          imgSrc={"/images/about/hero.png"}
          extraClass={
            "w-[300px] h-[350px] md:w-[354px] md:h-[400px] lg:w-[354px] lg:h-[400px] relative ml-0 lg:ml-32 lg:ml-48"
          }
        />
        <div
          className="w-[290px] h-[243px] absolute -bottom-16 lg:-bottom-12 -left-14 md:-left-0   p-4 
        bg-white border border-transparent rounded-lg flex justify-center items-center"
        >
          <div className="w-[280px] h-[213px] relative border border-transparent rounded-lg">
            <Image src={"/images/about/hero2.png"} alt="" fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
