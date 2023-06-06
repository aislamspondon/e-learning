import React from "react";
import ReadingHero from "./ReadingHero";
import ReadingText from "./ReadingText";
import SkillList from "../Skills/SkillList/SkillList";
import Improve from "./Improve";
import { readingLevels } from "@/utility/data/skillsData";

const Reading = () => {
  return (
    <div>
      <ReadingHero />
      <ReadingText />
      <h2 className="text-center text-black">
        Choose your level to practise <br /> your reading
      </h2>
      <SkillList list={readingLevels} />
      <Improve />
    </div>
  );
};

export default Reading;
