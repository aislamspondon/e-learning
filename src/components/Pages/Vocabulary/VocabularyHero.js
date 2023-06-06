import Image from "next/image";
import React from "react";

const VocabularyHero = () => {
  return (
    <div className="w-full flex flex-col md:flex-row py-8 lg:py-16 justify between items-center gap-10 md:gap-0">
      <div className="w-full md:w-[58%] flex flex-col items-start gap-5 ">
        <h1 className="antialiased text-black bigger-bold">Vocabulary</h1>
        <p className="text-gray-secondary md:pr-16 tracking-wider text-lg">
          Learn new words to improve your vocabulary to help you communicate
          well in English.
        </p>
      </div>
      <div className="w-full md:w-[42%] relative flex justify-center items-center  ">
        <div className="w-[152px] h-[125px] absolute -mt-[43px] top-10 right-0">
          <Image src="/images/common/cluster-bg.svg" alt="" fill />
        </div>
        <div className="w-[200px] h-[220px] md:w-[300px] md:h-[350px] lg:w-[350px] lg:h-[400px] border  rounded-tr-[30%]  rounded-bl-[30%] relative clone-shadow overflow-hidden">
          <Image src="/images/vocabulary/hero.png" alt="" fill />
        </div>
      </div>
    </div>
  );
};

export default VocabularyHero;
