import RoundedImage from "@/components/RoundedImage/RoundedImage";
import Image from "next/image";
import React from "react";

const Story = () => {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row py-8 lg:py-16 items-center mt-10">
      <div className="w-full lg:w-[45%] relative  mt-16 md:mt-0 ">
        <div className="w-full md:w-10/12 mt-10  mx-auto flex flex-wrap justify-center items-end gap-4">
          <RoundedImage
            extraClass={
              "w-[150px] h-[160px] md:w-[200px] md:h-[200px] relative "
            }
            imgSrc={"/images/about/story1.png"}
          />
          <div className="w-[150px] h-[160px] md:w-[218px] md:h-[218px] border rounded-tr-[120px] relative">
            <Image src="/images/about/story2.png" alt="" fill />
          </div>
          <div className="w-[150px] h-[160px] md:w-[218px] md:h-[218px] border rounded-bl-[120px] relative">
            <Image src="/images/about/story3.png" alt="" fill />
          </div>
          <div className=" w-[150px] h-[160px] md:w-[200px] md:h-[200px] relative  border-2 border-transparent rounded-bl-[70px] rounded-tr-[70px] overflow-hidden self-start">
            <Image src={"/images/about/story4.png"} alt="" fill />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[55%] flex flex-col items-start gap-5 ">
        <h2 className="antialiased ">
          The amazing story of Executive e-Learning
        </h2>
        <p className="text-gray-secondary  tracking-wider text-lg">
          It all began for the two founding partners of Executive e-Learning
          during the Covid-19 pandemic in 2020 with a simple idea. We started a
          pilot project for the Tourist Police Division in Chiangmai, Thailand
          to help them build confidence in speaking, reading, writing and
          listening once a week for up t 2 hours. Seeing the response and most
          importantly the improvement over a 3 months period from our police
          officer students made us feel happy which enabled us to team up with
          the Tourist Police Division to create an online e-learning ecosystem,
          which we innovate every day to make Executive e-Learning the most
          powerful and wonderful platform to use.
        </p>
      </div>
    </div>
  );
};

export default Story;
