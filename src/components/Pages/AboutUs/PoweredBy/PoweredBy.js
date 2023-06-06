import Image from "next/image";
import React from "react";
import PoweredByCard from "./PoweredByCard";
import { experts } from "@/utility/data/aboutData";

const PoweredBy = () => {
  return (
    <div className="w-full my-16 text-center flex flex-col gap-8">
      <div className="w-full lg:w-7/12 mx-auto flex flex-col gap-8">
        <h2>Powered by team of talented experts</h2>
        <p>
          Our team of passionate tech geeks are constantly innovating to make
          our customers’ lives and experience easier with us. Executive
          e-Learning hand picks its own team members for many international
          countries to help you understand different accents and tones.
        </p>
      </div>
      <div className="w-full flex-wrap flex items-center justify-center gap-6 my-5">
        {experts.map((item, index) => (
          <PoweredByCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PoweredBy;
