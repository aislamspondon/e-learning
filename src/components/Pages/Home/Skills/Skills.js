import { Button } from "@mui/material";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Link from "next/link";
const Skills = () => {
  return (
    <div className="w-full flex flex-col items-center gap-10 py-8 px-2 lg:p-16">
      <h1 className="text-center text-black">Skills</h1>
      <p className="text-center tracking-wider md:px-6 text-black ">
        Practice your reading, writing, listening and speaking skills at your
        level. Here you can find practice materials and activities to improve
        your English speaking, listening, reading and writing skills. Improving
        your skills will help you use English more effectively so that you can
        do well in your studies, get ahead at work and confidently communicate
        in English in your free time.
      </p>
      <Carousel
        showArrows
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        className="w-full h-[152px] md:w-[752px] md:h-[362px] lg:w-[1242px] lg:h-[407px] relative mt-10"
      >
        <CarouselContent title={"listening"} link={"/skills/listening"} />
        <CarouselContent title={"reading"} link={"/skills/reading"} />
        <CarouselContent title={"writing"} link={"/skills/writing"} />
        <CarouselContent title={"speaking"} link={"/skills/speaking"} />
      </Carousel>
    </div>
  );
};

export default Skills;

const CarouselContent = ({ title, link }) => {
  return (
    <div className="w-full h-[150px] md:w-[400px] md:h-[360px] lg:w-[1240px] lg:h-[405px] ">
      <Image
        src={"/images/home/skill-bg.png"}
        alt=""
        fill
        className="brightness-120"
      />
      <div className="w-full h-full blurry-end-2   absolute top-0 left-0">
        <div className="pl-10 md:pl-20 w-full md:w-6/12 h-full text-left p-3 md:pt-20  ">
          <h2 className=" bigger text-black capitalize">{title}</h2>
          <p className="mt-2  w-7/12 md:h-auto md:w-full md:mt-4 text-black font-medium text-[11px] leading-3 md:text-base truncate md:whitespace-normal">
            Here you can find activities to practice your {title} skills.{" "}
            {title} will help you to improve your understanding of the language
            and your pronunciation.
          </p>
          <Link href={link}>
            <Button
              variant="contained"
              className="bg-blue-primary mt-8 font-poppins normal-case px-2.5 text-[10px] md:text-base"
            >
              Find out more
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
