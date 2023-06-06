import RoundedImage from "@/components/RoundedImage/RoundedImage";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Discover = () => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row items-start justify-start gap-10 py-16 md:py-24 ">
      <div className="w-full md:w-[35%]  relative  ">
        <div className="w-[250px] h-[250px] absolute -bottom-16 lg:-top-28 -left-[65px]">
          <Image src="/images/common/square-dot.png" alt="" fill />
        </div>
        <div className=" w-[320px] md:w-[250px] h-[350px] md:h-[300px] lg:w-[373px] lg:h-[417px] relative mx-0 md:ml-auto  border border-transparent rounded-bl-[120px] rounded-tr-[120px] overflow-hidden">
          <Image src={"/images/home/section3.png"} alt="" fill />
        </div>
      </div>
      <div className="w-full md:w-[65%] flex flex-col items-start gap-7 pt-10">
        <h2 className="antialiased bigger  text-black">
          Discover your English level by taking our free online English test
        </h2>
        <Link
          href="/english-levels#online-test"
          className="text-blue-primary tracking-wider text-sm md:text-[20px] font-medium underline underline-offset-2"
        >
          Click here for more information
        </Link>
      </div>
    </div>
  );
};

export default Discover;
