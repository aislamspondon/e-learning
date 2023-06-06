import React from "react";
import GrammarHero from "./GrammarHero";
import Choose from "./Choose";
import SkillList from "../Skills/SkillList/SkillList";
import DiscoverOnline from "../Skills/DiscoverOnline";
import Learn from "./Learn";
import { grammarList } from "@/utility/data/grammarData";

const Grammar = () => {
  return (
    <div>
      <GrammarHero />
      <Choose />
      <SkillList list={grammarList} />
      <Learn />
    </div>
  );
};

export default Grammar;
