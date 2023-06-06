import React from "react";
import SubHero from "./SubHero";
import SubText from "./SubText";
import SkillList from "../Skills/SkillList/SkillList";
import Improve from "./Improve";
import { subPageList } from "@/utility/data/skillsData";

const SkillsSubPage = () => {
  return (
    <>
      <SubHero />
      <SubText />
      <h2 className="text-center text-black">Choose a lesson</h2>
      <SkillList list={subPageList} />
      <Improve />
    </>
  );
};

export default SkillsSubPage;
