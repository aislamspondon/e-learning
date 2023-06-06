import RoundedImage from "@/components/RoundedImage/RoundedImage";
import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const WritingHero = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 py-8 lg:py-16 place-items-center">
      <div className="flex flex-col items-start gap-5 ">
        <h1 className="antialiased md:bigger-bold">Writing</h1>
        <p className="text-gray-secondary md:pr-16 tracking-wider text-lg">
          Discover your current English level by taking our free online test
        </p>
        <Link href={"/english-levels#online-test"}>
          <Button
            variant="contained"
            className="bg-blue-primary mt-5 font-poppins capitalize px-2.5"
          >
            Discover your level
          </Button>
        </Link>
      </div>
      <div className="w-full relative  mt-16 md:mt-0 flex justify-center items-center ">
        <RoundedImage
          imgSrc={"/images/writing/hero.png"}
          extraClass={
            "w-[290px] h-[340px] md:w-[340px] md:h-[390px] w-[395px] h-[461px] relative"
          }
        />
      </div>
    </div>
  );
};

export default WritingHero;
