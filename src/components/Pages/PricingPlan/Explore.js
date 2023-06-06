import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";

const Explore = () => {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row justify-between items-start my-24 gap-8 lg:gap-0">
      <div className="w-full lg:w-6/12 relative">
        <div className="h-[470px] relative -left-0 md:-left-24">
          <div className="w-full h-[300px] md:h-[450px] relative">
            <Image src={"/images/pricing/explore1.png"} alt="" fill />
          </div>

          <div className="w-[335px] h-[243px] absolute bottom-14 md:-bottom-5 -right-10 p-5 bg-white border border-transparent rounded-lg">
            <div className="w-[325px] h-[233px] relative border border-transparent rounded-lg">
              <Image src={"/images/pricing/explore2.png"} alt="" fill />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-6/12 flex flex-col gap-5">
        <h2 className="bigger text-black">
          Explore our online platform with Executive e-Learning
        </h2>
        <p className="text-black w-10/12 text-[16px] font-medium">
          We would love to show you our streaming timetable, our amazing
          teachers and modules so you can decide what is best option for you.
          Set up a free account with us, anytime.
        </p>
        <Button
          variant="contained"
          className="bg-red-primary hover:bg-red-primary/90 font-poppins capitalize px-3 mt-6 w-max rounded-full"
        >
          Sign Up for Free Now!
        </Button>
      </div>
    </div>
  );
};

export default Explore;
