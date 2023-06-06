import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const Improve = () => {
  return (
    <div className="w-full  py-16 ">
      <div className="flex flex-col items-start  md:w-9/12">
        <h1 className="antialiased text-black">
          Learn to speak with confidence
        </h1>

        <p className="text-black pr-16  text-[16px] mt-8">
          Our online English classes feature lots of useful learning materials
          and activities to help you speak and respond with confidence in a safe
          and inclusive learning environment.
        </p>
        <br />
        <p className="text-black pr-20  text-[16px] ">
          Practice speaking to your classmates in live group classes, get
          speaking support from a personal tutor in one-to-one lessons or
          practice by yourself at your own speed with a self-study course.
        </p>
        <Link href={"/online-course"}>
          <Button
            variant="contained"
            className="bg-blue-primary mt-5 font-poppins capitalize px-2.5"
          >
            Explore Courses
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Improve;
