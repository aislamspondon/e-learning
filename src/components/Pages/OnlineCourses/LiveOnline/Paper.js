import Image from "next/image";
import React from "react";

const Paper = ({ item }) => {
  return (
    <div className="w-full border shadow shadow-slate-100 rounded px-5 py-2 flex  items-center justify-between">
      <div className="w-[34.39px] h-[26.2px] relative hidden md:block">
        <Image src="/images/online-courses/tick.png" alt="" fill />
      </div>
      <div className="w-full md:w-[89%] ">
        <p className="text-[18px] font-semibold mb-1">{item?.title}</p>
        <p className="text-[14px] mt-2">{item?.para}</p>
      </div>
    </div>
  );
};

export default Paper;
