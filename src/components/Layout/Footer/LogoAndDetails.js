import Image from "next/image";
import React from "react";

const LogoAndDetails = () => {
  return (
    <div className="lg:w-5/12 flex flex-row lg:flex-col items-center lg:items-start justify-between lg:pr-10">
      <div className="w-[50px] lg:w-[121px] h-[31px] lg:h-[51px] relative">
        <Image src="/images/Logo-white.png" alt="Institution logo" fill />
      </div>
      <p className=" w-9/12 lg:w-auto text-opacity-90 text-xs lg:mt-8 font-lighter lg:tracking-widest leading-2">
        Are businesses are missing out on the benefits of true diversity –
        critical at a time when every sector is facing disruption.
      </p>
    </div>
  );
};

export default LogoAndDetails;
