import RoundedImage from "@/components/RoundedImage/RoundedImage";
import Link from "next/link";
import React from "react";
import Paper from "./Paper";

const PointPaper = ({ index, item }) => {
  return (
    <div
      className={`w-full py-8 md:py-16 gap-14 flex flex-col-reverse ${
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      } lg:justify-between md:items-center`}
    >
      <div className="w-full lg:w-7/12 flex flex-col items-start gap-8  my-8 md:my-0">
        <h3 className="antialiased text-black text-[28px]">{item?.title}</h3>
        {item?.para && (
          <p className="text-gray-secondary  mb-2">{item?.para}</p>
        )}
        {item?.checks?.map((item, index) => (
          <Paper key={index} item={item} />
        ))}

        <Link
          href=""
          className="w-max border-2 font-semibold text-sm border-red-primary text-red-primary 
          rounded-[6px] py-2 px-3 hidden md:block lg:hidden mt-10"
        >
          Find Out More
        </Link>
      </div>
      <div className="w-full block md:hidden lg:flex flex-col items-start lg:w-max mt-16 lg:mt-0">
        <RoundedImage
          extraClass={
            "max-w-full w-[320px] h-[340px] md:w-[400px] md:h-[421px] lg:w-[422px] lg:h-[446px]  relative mb-10"
          }
          imgSrc={item?.image}
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

export default PointPaper;
