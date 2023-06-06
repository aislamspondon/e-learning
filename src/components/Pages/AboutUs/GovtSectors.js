import Image from "next/image";
import React from "react";

const GovtSectors = () => {
  return (
    <div className="w-full my-16 text-center flex flex-col gap-8">
      <div className="w-full lg:w-6/12 mx-auto flex flex-col gap-8">
        <h2>Government Sectors</h2>
        <p>
          These are the following sectors this platform is created for, we will
          be adding more as we grow and expand.
        </p>
      </div>
      <div className="w-full flex-wrap flex items-center justify-center gap-6 my-5">
        <div className="w-[350px] p-5 flex items-center justify-start gap-10 border-2 border-blue-primary rounded-lg">
          <Image
            src={"/images/common/tick.png"}
            width={30}
            height={30}
            alt=""
          />
          <p className="text-lg font-semibold ">Tourist Police Officers</p>
        </div>
        <div className="w-[350px] p-5 flex items-center justify-start gap-10 border-2 border-blue-primary rounded-lg">
          <Image
            src={"/images/common/tick.png"}
            width={30}
            height={30}
            alt=""
          />
          <p className="text-lg font-semibold ">Royal Thai Police Officer</p>
        </div>
        <div className="w-[350px] p-5 flex items-center justify-start gap-10 border-2 border-blue-primary rounded-lg">
          <Image
            src={"/images/common/tick.png"}
            width={30}
            height={30}
            alt=""
          />
          <p className="text-lg font-semibold ">Immigration Officer</p>
        </div>
        <div className="w-[350px] p-5 flex items-center justify-start gap-10 border-2 border-blue-primary rounded-lg">
          <Image
            src={"/images/common/tick.png"}
            width={30}
            height={30}
            alt=""
          />
          <p className="text-lg font-semibold ">Justice System</p>
        </div>
        <div className="w-[350px] p-5 flex items-center justify-start gap-10 border-2 border-blue-primary rounded-lg">
          <Image
            src={"/images/common/tick.png"}
            width={30}
            height={30}
            alt=""
          />
          <p className="text-lg font-semibold ">Ministers & Politian&apos;s</p>
        </div>
        <div className="w-[350px] p-5 flex items-center justify-start gap-10 border-2 border-blue-primary rounded-lg">
          <Image
            src={"/images/common/tick.png"}
            width={30}
            height={30}
            alt=""
          />
          <p className="text-lg font-semibold ">Army/Military</p>
        </div>
        <div className="w-[350px] p-5 flex items-center justify-start gap-10 border-2 border-blue-primary rounded-lg">
          <Image
            src={"/images/common/tick.png"}
            width={30}
            height={30}
            alt=""
          />
          <p className="text-lg font-semibold ">Fire Department</p>
        </div>
      </div>
    </div>
  );
};

export default GovtSectors;
