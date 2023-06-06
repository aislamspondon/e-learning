import Image from "next/image";
import React from "react";

const OnlineCoursesHero = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 py-8 lg:py-16 place-items-center ">
      <div className="flex flex-col items-start gap-5 ">
        <h1 className="antialiased bigger-bold">Online courses</h1>
        <p className="text-black md:pr-20   text-[16]">
          Join Executive eLearning and discover amazing English learning online
          - whatever your age, ability or ambition.
        </p>
      </div>
      <div className="w-full relative  mt-16 md:mt-0">
        <div className="w-[230px] h-[230px] absolute mt-[224px] ml-7">
          <Image src="/images/common/square-dot.png" alt="" fill />
        </div>
        <div className="w-[310px] md:w-[350px] mx-auto flex flex-wrap justify-center gap-2">
          <div className="w-[150px] h-[160px] md:w-[170px] md:h-[180px] border overflow-hidden rounded-tl-[70px] relative">
            <Image src="/images/online-courses/hero1.png" alt="" fill />
          </div>
          <div className="w-[150px] h-[160px] md:w-[170px] md:h-[180px] relative overflow-hidden">
            <Image src="/images/online-courses/hero2.png" alt="" fill />
          </div>
          <div className="w-[150px] h-[160px] md:w-[170px] md:h-[180px]  relative overflow-hidden">
            <Image src="/images/online-courses/hero4.png" alt="" fill />
          </div>
          <div className="w-[150px] h-[160px] md:w-[170px] md:h-[180px] border overflow-hidden rounded-br-[70px] relative">
            <Image src="/images/online-courses/hero3.png" alt="" fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineCoursesHero;
