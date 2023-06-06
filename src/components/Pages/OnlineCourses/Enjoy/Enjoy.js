import React from "react";

const Enjoy = () => {
  return (
    <div className="w-full py-8 md:py-16 flex flex-col gap-8">
      <h2 className="text-black bigger">
        Enjoy our free complementary resources, before signing up to our
        subscription plan
      </h2>
      <p className="w-7/12 text-lg font-medium text-black">
        Explore our site to improve your English with our bite-sized lessons,
        quizzes and games. With our varied selection of learning materials, you
        can practice your English for free.
      </p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-content-between">
        <div className="w-full h-[100px] md:w-full md:h-[120px] lg:w-[380px] lg:h-[135px] bg-blue-primary flex flex-row md:flex-col items-center justify-between md:items-start lg:flex-row lg:items-center lg:justify-between gap-2 lg:gap-4 px-3 py-3 text-white border shadow rounded">
          <span className="w-max block text-3xl font-playfair font-medium leading-10 text-white">
            Skills
          </span>
          <p className="w-max md:w-auto lg:w-max  block tracking-wide text-sm font-extralight break-words text-white">
            Improve your English speaking, listening, reading and writing
          </p>
        </div>
        <div className="w-full h-[100px] md:w-full md:h-[120px] lg:w-[380px] lg:h-[135px] bg-blue-primary flex flex-row md:flex-col items-center justify-between md:items-start lg:flex-row lg:items-center lg:justify-between gap-2 lg:gap-4 px-4 py-3 text-white border shadow rounded ">
          <span className="w-max block text-3xl font-playfair font-medium leading-10 text-white">
            Grammar
          </span>
          <p className="w-max md:w-auto lg:w-max  block tracking-wide text-sm font-extralight break-words text-white">
            Practice verb tenses and grammar rules
          </p>
        </div>
        <div className="w-full h-[100px] md:w-full md:h-[120px] lg:w-[380px] lg:h-[135px] bg-blue-primary flex flex-row md:flex-col items-center justify-between md:items-start lg:flex-row lg:items-center lg:justify-between gap-2 lg:gap-4 px-4 py-3 text-white border shadow rounded">
          <span className="w-max block text-3xl font-playfair font-medium leading-10 text-white">
            Vocabulary
          </span>
          <p className="w-max md:w-auto lg:w-max  block tracking-wide text-sm font-extralight break-words text-white">
            Learn new words to understand and express yourself clearly
          </p>
        </div>
      </div>
    </div>
  );
};

export default Enjoy;
