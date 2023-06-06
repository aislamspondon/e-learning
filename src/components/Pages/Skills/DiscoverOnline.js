import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";

const DiscoverOnline = () => {
  return (
    <div className="w-full  py-16 ">
      <div className="flex flex-col items-start  md:w-9/12">
        <h1 className="antialiased text-black">
          Discover our online English courses
        </h1>
        <p className="text-black  pr-16  text-[16px] mt-8">
          Improve your English speaking, listening, reading and writing skills
          with our selection of online courses.{" "}
        </p>
        <br />
        <p className="text-black  pr-20  text-[16px]">
          Experience self-study sessions, live group classes and one-to-one
          courses with personal tutors in a safe and inclusive learning
          environment.
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
    </div>
  );
};

export default DiscoverOnline;
