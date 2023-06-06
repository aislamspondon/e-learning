import React from "react";
import GeneralHero from "./GeneralHero";
import GeneralText from "./GeneralText";
import SkillList from "../Skills/SkillList/SkillList";
import Improve from "./Improve";
import { generalList } from "@/utility/data/generalData";

const GeneralEnglish = () => {
  return (
    <div>
      <GeneralHero />
      <GeneralText />
      <h2 className="text-center text-black">Choose a section</h2>
      <SkillList list={generalList} />
      <Improve />
    </div>
  );
};

export default GeneralEnglish;
