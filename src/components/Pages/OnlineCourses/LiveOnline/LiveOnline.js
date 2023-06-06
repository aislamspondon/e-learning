import RoundedImage from "@/components/RoundedImage/RoundedImage";
import React from "react";
import Paper from "./Paper";
import Link from "next/link";
// w-full py-16 flex flex-col md:flex-row md:justify-between md:items-center
const LiveOnline = ({ item, index }) => {
  const { title, para, checks, image } = item;
  return (
    <div
      id={item?.id}
      className={`${
        index % 2 === 0
          ? "w-full py-16 flex flex-col-reverse lg:flex-row lg:justify-between md:items-center my-8 gap-14"
          : "w-full py-16 flex flex-col-reverse lg:flex-row-reverse lg:justify-between md:items-center my-8 gap-14"
      }`}
    >
      <div className="w-full lg:w-5/12 mt-16 md:mt-2 lg:mt-0">
        <RoundedImage
          extraClass={
            "block md:hidden lg:block w-[320px] h-[340px] md:w-[400px] md:h-[421px] lg:w-[478px] lg:h-[541px] md:mx-auto relative mb-10"
          }
          imgSrc={image}
        />
        <Link
          href=""
          className="w-max border-2 font-semibold text-sm border-red-primary text-red-primary rounded-[6px] py-2 px-3"
        >
          Find Out More
        </Link>
      </div>
      <div className="w-full lg:w-7/12 flex flex-col items-start gap-4 ">
        <h2 className="antialiased bigger text-black">{title}</h2>
        <p className="text-gray-secondary  mb-2">{para}</p>
        {checks?.map((item, index) => (
          <Paper key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default LiveOnline;
