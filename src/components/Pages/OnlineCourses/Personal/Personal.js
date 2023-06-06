import RoundedImage from "@/components/RoundedImage/RoundedImage";

import Link from "next/link";
import React from "react";
import Paper from "../LiveOnline/Paper";

const Personal = () => {
  return (
    <div className="w-full py-16 flex flex-col-reverse lg:flex-row md:justify-between md:items-center">
      <div className="w-full lg:w-5/12 mt-16 lg:mt-0">
        <RoundedImage
          extraClass={
            "block md:hidden lg:block w-[320px] h-[340px] md:w-[300px] md:h-[421px] lg:w-[478px] lg:h-[541px] relative mb-10"
          }
          imgSrc={"/images/online-courses/live.png"}
        />
        <Link
          href=""
          className="w-max border-2 font-semibold text-sm border-red-primary text-red-primary rounded-[6px] py-2 px-3 mt-10"
        >
          Find Out More
        </Link>
      </div>
      <div className="w-full lg:w-6/12 flex flex-col items-start gap-5 ">
        <h2 className="antialiased bigger text-black">
          Personal in office tutoring
        </h2>
        <p className="text-gray-secondary  tracking-wide mb-5">
          Learn English online with one of our professional tutors. These
          one-to-one sessions will focus on you to create a personal plan to
          help you maximize your potential and confidence when reading, writing
          and speaking English.
        </p>
        <Paper />
        <Paper />
        <Paper />
      </div>
    </div>
  );
};

export default Personal;
