import React from "react";
import WritingHero from "./WritingHero";
import WritingText from "./WritingText";
import SkillList from "../Skills/SkillList/SkillList";
import Improve from "./Improve";
import { writingLevels } from "@/utility/data/skillsData";

const Writing = () => {
  return (
    <div>
      <WritingHero />
      <WritingText />
      <h2 className="text-center text-black">
        Choose your level to practise <br /> your writing
      </h2>
      <SkillList list={writingLevels} />
      <Improve />
    </div>
  );
};

export default Writing;
