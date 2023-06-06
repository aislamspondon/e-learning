import { philosophyList } from "@/utility/data/aboutData";
import SkillList from "../Skills/SkillList/SkillList";
import AboutHero from "./AboutHero";
import GovtSectors from "./GovtSectors";
import PoweredBy from "./PoweredBy/PoweredBy";
import Story from "./Story";

const AboutUs = () => {
  return (
    <div>
      <AboutHero />
      <Story />
      <div className="w-full lg:w-7/12 mx-auto my-10 text-center px-4 flex flex-col gap-12">
        <h2>Who we have created this online e-Learning platform for?</h2>
        <p>
          This first-class platform has been created for all government official
          across Thailand in all government sectors and public sectors who
          requires basic English skills to communicate with tourist and expats
          living in Thailand.
        </p>
      </div>
      <GovtSectors />
      <PoweredBy />
      <h2 className="text-center text-black">
        Executive e-Learning philosophy
      </h2>
      <SkillList list={philosophyList} />
    </div>
  );
};

export default AboutUs;
