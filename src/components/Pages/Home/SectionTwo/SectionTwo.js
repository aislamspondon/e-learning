import Card from "@/components/Card/Card";
import React from "react";

const cardData = [
  {
    title: "Self-study online course",
    image: "/images/home/card.png",
    description:
      "Improve your English skills at your own pace, by watching animation videos",
    link: "/online-course#self-study",
  },
  {
    title: "Live online classes",
    image: "/images/home/card2.png",
    description: "Interactive group classes with expert teachers.",
    link: "/online-course#live-online-classes",
  },
  {
    title: "Personal online tutoring",
    image: "/images/home/card3.png",
    description:
      "Personal in office one-to-one English tutoring at any time that suits you and the department.",
    link: "/online-course#personal-tutoring",
  },
];

const SectionTwo = () => {
  return (
    <div className="w-full flex flex-col items-center my-5 md:my-32 gap-8">
      <h1 className="text-center text-black">Welcome to Executive eLearning</h1>
      <p className="text-center tracking-wider ">
        Join Executive eLearning online and improve your skills, communications
        and most importantly build your confidence and remove your shyness
        totally. All our high-quality courses, animation video, resources and
        team members for live streaming all have be bespoke designed for Thai
        government officials across the nation. All of our courses are designed
        according to British standards by team of English teaching experts from
        London, United Kingdom which is suitable for both adults and children
        for beginners&apos; level and advance levels.
      </p>
      <div className="w-full mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 place-content-between">
        {cardData?.map((item, index) => (
          <Card
            link={item.link}
            title={item.title}
            description={item.description}
            image={item.image}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionTwo;
