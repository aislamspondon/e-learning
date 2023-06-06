import React from "react";
import RoundedImage from "@/components/RoundedImage/RoundedImage";
import Link from "next/link";
const SkillListPaper = ({ index, item }) => {
  return (
    <div
      id={item?.id || ""}
      className={`w-full relative flex flex-col  justify-start items-center gap-8 ${
        index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <RoundedImage
        imgSrc={item?.image}
        extraClass={
          "w-full md:w-[295px] h-[340px] md:h-[328px] relative brightness-50	md:brightness-100 "
        }
      />
      <div className="w-11/12 mx-auto md:mx-0 md:w-7/12 absolute   text-white/80 md:text-black md:static top-12 flex flex-col items-center md:block">
        <Link href={item?.route || "#"} className="w-full">
          <h1 className="text-center md:text-left">{item?.title} </h1>
        </Link>
        <p className="mt-10  text-[16px] text-left md:w-[90%]">
          {item?.paragraph}
        </p>
      </div>
    </div>
  );
};

export default SkillListPaper;
