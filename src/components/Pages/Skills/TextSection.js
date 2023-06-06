import React from "react";

const TextSection = () => {
  return (
    <div className="lg:w-[70%]  mx-auto py-12 lg:py-16 flex flex-col items-center text-black">
      <p className="text-justify md:text-center text-black tracking-wide text-[16px]">
        Here you can find practice materials and activities to improve your
        English speaking, listening, reading and writing skills. Improving your
        skills will help you use English more effectively so that you can do
        well in your studies, get ahead at work and confidently communicate in
        English in your free time that is suitable for you.
      </p>
      <div className="w-full flex flex-col items-center">
        <h2 className="text-left lg:text-justify mt-16">
          How to improve your English proficiency
        </h2>
        <p className="text-justify my-4 text-black tracking-wide text-[16px] md:w-[95%]">
          To build your vocabulary and develop your English communication
          skills, practice and study are essential. Working through practice
          activities and regularly reviewing the new language you learn which
          can help you accelerate your knowledge and understanding of English
          quicker than you might think.
        </p>
        <h2 className="text-left lg:text-justify mt-16 ">
          Take a low-cost self-study course online
        </h2>
        <p className="text-justify my-4 text-black tracking-wide text-[16px] md:w-11/12">
          Learn English in your own time, at your own pace with a flexible,
          online self-study course. <br /> <br /> Get unlimited access to
          helpful, high-quality learning materials and activities from beginner
          to advanced level. Learn on the go, earn digital certificates and
          improve your English speaking, listening, reading and writing skills.
        </p>
        <h2 className="text-left lg:text-justify mt-16 ">
          Choose the skill you want to practice and better yourself in
        </h2>
        <p className="text-justify my-4 text-black tracking-wide text-[16px] ">
          The self-study lessons in these sections are written and organized by
          English level based on the Common European Framework of Reference for
          languages (CEFR). There are different types of texts recordings and
          videos with interactive exercises and worksheets that practice the
          skills you need. Choose the skill you want to practice today and
          improve your English at your own speed, whenever it’s convenient for
          you.
        </p>
      </div>
    </div>
  );
};

export default TextSection;
