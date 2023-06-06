import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

const ExecutiveELearning = () => {
  return (
    <div className="my-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
      <div className="w-full lg:w-6/12 flex flex-col items-start gap-8">
        <h2 className="bigger">
          We at Executive e-Learning are here to help you succeed in every way
          possible
        </h2>
        <p className="w-full md:w-1/2 font-medium">
          Get in touch with our customer support team with any questions you may
          have, 24/7.
        </p>
        <Button
          variant="contained"
          className="bg-red-primary hover:bg-red-primary/90 font-poppins capitalize px-3 mt-6 w-max rounded-full"
        >
          Contact us
        </Button>
      </div>
      <div className="w-full lg:w-6/12 flex justify-center items-center">
        <div className="w-[300px] h-[250px] md:w-[489px] md:h-[393px] rounded-lg relative">
          <Image src={"/images/pricing/elearning.png"} alt="" fill />
        </div>
      </div>
    </div>
  );
};

export default ExecutiveELearning;
