import React from "react";
import Paper from "../LiveOnline/Paper";
import RoundedImage from "@/components/RoundedImage/RoundedImage";
import Link from "next/link";

const SelfStudy = () => {
  return (
    <div className="w-full py-16 flex flex-col md:flex-row md:justify-between md:items-center">
      <div className="w-full md:w-6/12 flex flex-col items-start gap-5 ">
        <h2 className="antialiased bigger text-black">
          Self-study online courses
        </h2>
        <p className="text-gray-secondary  tracking-wide mb-5">
          Our online English self-study course gives you the low-cost way to
          reach your goals in English You can improve your English language
          level and your professional communication skills, and learn how to
          express yourself with confidence to boost your career.
        </p>
        <Paper />
        <Paper />
        <Paper />
      </div>
      <div className="w-full md:w-5/12 mt-16 md:mt-0">
        <RoundedImage
          extraClass={
            "w-[320px] h-[340px] md:w-[300px] md:h-[421px] lg:w-[478px] lg:h-[541px] relative mb-10"
          }
          imgSrc={"/images/online-courses/live.png"}
        />
        <Link
          href=""
          className="w-max border-2 font-semibold text-sm border-red-primary text-red-primary rounded-[6px] py-2 px-3"
        >
          Find Out More
        </Link>
      </div>
    </div>
  );
};

export default SelfStudy;
