import React from "react";
import SkillsHero from "./SkillsHero";
import TextSection from "./TextSection";
import SkillList from "./SkillList/SkillList";
import DiscoverOnline from "./DiscoverOnline";
import { skillList } from "@/utility/data/skillsData";
const Skills = () => {
  return (
    <div>
      <SkillsHero />
      <TextSection />
      <SkillList list={skillList} />
      <DiscoverOnline />
    </div>
  );
};

export default Skills;
