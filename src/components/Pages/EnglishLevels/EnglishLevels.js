import React from "react";
import EnglishLevelsHero from "./EnglishLevelsHero";
import EnglishText from "./EnglishText";
import SkillList from "../Skills/SkillList/SkillList";
import Improve from "./Improve";
import { levelList } from "@/utility/data/levelData";

const EnglishLevels = () => {
  return (
    <div>
      <EnglishLevelsHero />
      <EnglishText />
      <h2 className="text-center text-black">Choose a section</h2>
      <SkillList list={levelList} />
      <Improve />
    </div>
  );
};

export default EnglishLevels;
