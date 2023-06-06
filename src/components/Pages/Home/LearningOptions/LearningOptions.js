import React from "react";
import Paper from "./Paper";
import { learning } from "@/utility/data/Home";

const LearningOptions = () => {
  return (
    <div className="flex flex-col items-center my-28 gap-6">
      <h2 className="text-center bigger text-black">
        General English learning options
      </h2>
      <p className="w-full text-[17px] md:w-10/12 mx-auto text-center tracking-wider md:px-8 text-black ">
        Find extra listening and reading practice to help you improve your level
        of English and <br /> practice language you can use in everyday
        situations. With Executive eLearning you can improve your knowledge of
        everyday English and learn the language you need for socializing and
        traveling. You will also develop your comprehension skills and build
        your vocabulary as well as boost your confidence.
      </p>
      <div className="flex flex-col items-center py-10 mt-10 gap-8 md:gap-28">
        {learning?.map((item, index) => (
          <Paper
            index={index}
            key={index}
            title={item.title}
            image={item.image}
            description={item.description}
            description2={item?.description2 || ""}
          />
        ))}
      </div>
    </div>
  );
};

export default LearningOptions;
