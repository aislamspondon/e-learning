import React from "react";
import OnlineCoursesHero from "./OnlineCoursesHero";
import Card from "@/components/Card/Card";
import LiveOnline from "./LiveOnline/LiveOnline";
import Personal from "./Personal/Personal";
import SelfStudy from "./SelfStudy/SelfStudy";
import Enjoy from "./Enjoy/Enjoy";
import { checkList } from "@/utility/data/onlineCourse";

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

const OnlineCourses = () => {
  return (
    <div>
      <OnlineCoursesHero />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-36 md:gap-y-6 lg:gap-0">
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
      {checkList.map((item, index) => (
        <LiveOnline key={index} item={item} index={index} />
      ))}

      <Enjoy />
    </div>
  );
};

export default OnlineCourses;
