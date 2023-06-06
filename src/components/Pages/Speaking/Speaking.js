import React from "react";
import SpeakingHero from "./SpeakingHero";
import SpeakingText from "./SpeakingText";
import SkillList from "../Skills/SkillList/SkillList";
import Improve from "./Improve";
import { speakingLevels } from "@/utility/data/skillsData";

const Speaking = () => {
  return (
    <div>
      <SpeakingHero />
      <SpeakingText />
      <h2 className="text-center text-black">
        Choose your level to practise <br /> your speaking
      </h2>
      <SkillList list={speakingLevels} />
      <Improve />
    </div>
  );
};

export default Speaking;
