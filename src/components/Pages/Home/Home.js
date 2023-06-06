import React from "react";
import HomeHero from "./HomeHero";
import SectionTwo from "./SectionTwo/SectionTwo";
import Discover from "./Discover/Discover";
import LearningOptions from "./LearningOptions/LearningOptions";
import Skills from "./Skills/Skills";
import DiscoverExecutive from "./DiscoverExecutive/DiscoverExecutive";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <SectionTwo />
      <Discover />
      <LearningOptions />
      <Skills />
      <DiscoverExecutive />
    </div>
  );
};

export default Home;
