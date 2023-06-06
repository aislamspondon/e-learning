import { Button } from "@mui/material";
import React from "react";

const Improve = () => {
  return (
    <div className="w-full  py-16 ">
      <div className="flex flex-col items-start  md:w-9/12">
        <h1 className="antialiased ">
          Improve your English skills in social situations
        </h1>

        <p className="text-black pr-16  text-[16px] mt-8">
          For more support in improving your English skills for social
          situations, explore our selection of online courses featuring lots of
          helpful learning resources.
        </p>
        <br />
        <p className="text-black pr-20  text-[16px] ">
          Practice speaking socially with your classmates in live group classes,
          get support from a personal tutor in one-to-one lessons or practice by
          yourself at your own pace with a self-study course.
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
