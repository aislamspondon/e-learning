import { Button } from "@mui/material";
import React from "react";

const NextLevel = () => {
  return (
    <div className="w-full  py-16 ">
      <div className="flex flex-col items-start  md:w-9/12">
        <h1 className="antialiased text-black">
          Take your vocabulary to the next level
        </h1>

        <p className="text-black  pr-16  text-[16px] mt-8">
          Discover online English courses to help you build your vocabulary and
          improve your communication skills.
        </p>
        <br />
        <p className="text-black  pr-20  text-[16px] ">
          Practice developing your vocabulary with your classmates in live group
          classes, get vocabulary support from a personal tutor in one-to-one
          lessons or practice by yourself at your own speed with a self-study
          course.
        </p>
        <Button
          variant="contained"
          className="bg-blue-primary mt-5 font-poppins capitalize px-2.5"
        >
          Find Out More
        </Button>
      </div>
    </div>
  );
};

export default NextLevel;
