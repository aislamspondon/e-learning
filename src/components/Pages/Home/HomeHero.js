import React from "react";
import { Button } from "@mui/material";
import Image from "next/image";
import RoundedImage from "@/components/RoundedImage/RoundedImage";
import Link from "next/link";
const HomeHero = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 py-14 place-items-center">
      <div className="flex flex-col items-start gap-5 md:mt-8">
        <h1 className=" bigger-bold text-black ">Online eLearning 100%</h1>
        <p className="text-gray-secondary md:pr-16 tracking-wider text-lg">
          Improve your confidence in communications, and level up on your
          English skills. Live classes and interactive lessons online. (coming
          soon)
        </p>
        <Link href="/english-levels">
          <Button
            variant="contained"
            className="bg-blue-primary text-[13px] mt-5 font-poppins normal-case px-3 py-2"
          >
            Find out more
          </Button>
        </Link>
      </div>
      <div className="w-full relative  mt-16 md:mt-0 flex justify-center md:justify-end">
        <RoundedImage
          extraClass={"w-[300px] h-[300px] lg:w-[385px] lg:h-[390px] relative "}
          imgSrc={"/images/home/hero.png"}
        />
        {/* chip  */}
        <div className="py-0.5 px-1.5 shadow-sm box-border border-t border-gray-50  bg-white absolute -left-5 -top-5 lg:left-[80px] rounded-[4px] lg:top-0 flex justify-evenly items-center w-[159px] h-[63px]">
          <div className="bg-sky-primary w-[34px] h-[26px] pl-1.5 pr-0.5 py-0 rounded flex justify-center items-center ml-2.5 ">
            <Image src="/images/home/icon.png" alt="" width={20} height={26} />
          </div>
          <span className="w-fit text-[13px] leading-[14px] text-black/70 font-semibold font-playfair ml-3">
            Learn from Industry Experts
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
