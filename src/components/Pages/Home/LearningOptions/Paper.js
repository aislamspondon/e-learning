import Image from "next/image";
import Link from "next/link";
import React from "react";

const Paper = ({ index, title, description, image, description2 }) => {
  return (
    <div
      className={`w-full ${
        index % 2 === 0
          ? "flex flex-col md:flex-row"
          : " flex flex-col md:flex-row-reverse"
      } justify-between items-center gap-8`}
    >
      <div className="w-full flex flex-col gap-8">
        <h2 className="bigger text-black">{title}</h2>
        <p className="text-black  text-[17px] leading-[28.87px] w-full md:w-[96%] tracking-[2%]">
          {description}
          {description2.length > 0 ? (
            <>
              <br />
              <br />
              {description2}
            </>
          ) : (
            ""
          )}
        </p>

        <Link
          href=""
          className="w-max border-2 font-semibold text-sm border-red-secondary text-red-secondary rounded-[8px] py-2 px-2.5"
        >
          Find Out More
        </Link>
      </div>
      <div className="w-full">
        <div
          className={`w-[300px] h-[340px] md:w-[370px] md:h-[410px] overflow-hidden rounded-tr-[106px] rounded-bl-[106px]  relative ${
            index % 2 === 0
              ? "mx-auto md:ml-auto md:mr-0"
              : "mx-auto md:mr-auto md:ml-0"
          }`}
        >
          <Image src={image} alt="" fill />
        </div>
      </div>
    </div>
  );
};

export default Paper;
