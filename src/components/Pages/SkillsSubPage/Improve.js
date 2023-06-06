import { Button } from "@mui/material";
import React from "react";

const Improve = () => {
  return (
    <div className="w-full  py-16 ">
      <div className="flex flex-col items-start  md:w-9/12">
        <h1 className="antialiased text-black">Heading H1</h1>

        <p className="text-black pr-16  text-[16px] mt-8">
          Lorem ipsum dolor sit amet consectetur. Ipsum lacus at malesuada
          rutrum. Pharetra mattis quisque est mattis sagittis. Ut nibh mauris
          vestibulum et dignissim.
        </p>
        <br />
        <p className="text-black pr-20  text-[16px] ">
          Lorem ipsum dolor sit amet consectetur. Ipsum lacus at malesuada
          rutrum. Pharetra mattis quisque est mattis sagittis. Ut nibh mauris
          vestibulum et dignissim.Lorem ipsum dolor sit amet consectetur. Ipsum
          lacus at malesuada rutrum.
        </p>
        <Button
          variant="contained"
          className="bg-blue-primary mt-5 font-poppins capitalize px-2.5"
        >
          Explore Courses
        </Button>
      </div>
    </div>
  );
};

export default Improve;
