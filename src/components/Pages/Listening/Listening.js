import React from "react";
import ListeningHero from "./ListeningHero";
import ListeningText from "./ListeningText";
import SkillList from "../Skills/SkillList/SkillList";
import Improve from "./Improve";
import { listeningLevels } from "@/utility/data/skillsData";

const Listening = () => {
  return (
    <div>
      <ListeningHero />
      <ListeningText />
      <h2 className="text-center text-black">
        Choose your level to practise <br /> your listening
      </h2>
      <SkillList list={listeningLevels} />
      <Improve />
    </div>
  );
};

export default Listening;
