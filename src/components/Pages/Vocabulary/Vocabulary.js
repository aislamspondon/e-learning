import React from "react";
import VocabularyHero from "./VocabularyHero";
import LevelText from "./LevelText";
import SkillList from "../Skills/SkillList/SkillList";
import NextLevel from "./NextLevel";
import { vocList } from "@/utility/data/vocData";

const Vocabulary = () => {
  return (
    <div>
      <VocabularyHero />
      <LevelText />
      <SkillList list={vocList} />
      <NextLevel />
    </div>
  );
};

export default Vocabulary;
