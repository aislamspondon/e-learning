import Image from "next/image";
import React from "react";

const Paper = ({ item }) => {
  return (
    <div className="w-full border shadow shadow-slate-100 rounded px-5 py-5 flex  items-center justify-between">
      <div className="w-[34.39px] h-[26.2px] relative hidden md:block">
        <Image src="/images/online-courses/tick.png" alt="" fill />
      </div>
      <div className="w-full md:w-[89%] ">
        <p className="text-[15px] mt-2 font-bold text-lg">{item?.title}</p>
      </div>
    </div>
  );
};

export default Paper;
