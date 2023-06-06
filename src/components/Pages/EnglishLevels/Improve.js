import { Button } from "@mui/material";
import React from "react";

const Improve = () => {
  return (
    <div className="w-full  py-16 ">
      <div className="flex flex-col items-start md:w-9/12">
        <h1 className="antialiased text-black">
          Improve your English skills at any level
        </h1>

        <p className="text-black md:pr-16  text-[16px] mt-8">
          Whether your English proficiency level is elementary, intermediate or
          advanced, why not develop your skills even further with our online
          courses?
        </p>
        <br />
        <p className="text-black md:pr-20  text-[16px]">
          Practice with classmates in live group classes, get learning support
          from a personal tutor in one-to-one lessons or practice by yourself at
          your own speed with a self-study course.
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

export default Improve;
