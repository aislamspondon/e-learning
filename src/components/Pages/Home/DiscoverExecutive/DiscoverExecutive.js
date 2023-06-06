import RoundedImage from "@/components/RoundedImage/RoundedImage";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DiscoverExecutive = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row my-16 py-16 justify-between items-start">
      <div className="w-full lg:w-7/12 flex flex-col items-start gap-5 ">
        <h2 className="antialiased bigger">
          Discover our online English courses with Executive eLearning
        </h2>
        <p className="text-gray-secondary md:pr-16 tracking-wider text-lg">
          Improve your English speaking, listening, reading and writing skills
          with our selection of online courses. Experience self-study sessions,
          live group classes and one-to-one courses with personal tutors in a
          safe and inclusive learning environment.
        </p>
        <Link href={"/online-course"}>
          <Button
            variant="contained"
            className="bg-blue-primary mt-5 font-poppins capitalize px-2.5"
          >
            Find Out More
          </Button>
        </Link>
      </div>
      <div className="w-full lg:w-5/12 relative  mt-10 lg:mt-0 flex justify-center items-start">
        <div className="w-[230px] h-[230px] absolute -mt-[43px] lg:-mt-[86px] -left-16 lg:left-10">
          <Image src="/images/common/square-dot.png" alt="" fill />
        </div>

        <div className="w-[300px] h-[300px] md:w-[380px] md:h-[300px] lg:w-[408px] lg:h-[357px] absolute top-8 lg:top-0 right-2 lg:-right-[93px]">
          <Image src={"/images/home/discover1.svg"} alt="" fill />
        </div>
        <div className="w-[200px] h-[220px] lg:w-[245px] lg:h-[273px] relative border border-transparent rounded-bl-[70px] rounded-tr-[70px] overflow-hidden p-3 bg-white mt-48 -left-[78px] lg:-left-10">
          <Image
            src={"/images/home/discover2.png"}
            alt=""
            width={245}
            height={273}
          />
        </div>
      </div>
    </div>
  );
};

export default DiscoverExecutive;
