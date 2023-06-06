import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ title, image, description, link }) => {
  return (
    <div className="border shadow-sm  shadow-gray-300 bg-white max-w-full w-[340px] h-[460px] md:w-[330px] md:h-[480px] lg:w-[380px] lg:h-[460px] mx-auto overflow-hidden flex flex-col items-start relative min-h-max">
      <div className="w-full h-[236px] relative overflow-hidden">
        <Image src={image} fill alt="" />
      </div>
      <div className="p-3 flex flex-col gap-3 ">
        <h3>{title}</h3>
        <p className="text-black font-medium md:tracking-wider">
          {description}
        </p>
        <Link href={link}>
          <Button
            variant="contained"
            className="bg-blue-primary mt-5 font-poppins normal-case text-sm px-3.5 py-3 tracking-wide w-max md:absolute md:bottom-5 rounded-md"
          >
            Find out more
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
