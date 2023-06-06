import React from "react";
import SkillListPaper from "./SkillListPaper";

const SkillList = ({ list }) => {
  return (
    <div className="w-full flex flex-col gap-12 my-16">
      {list?.map((item, index) => (
        <SkillListPaper item={item} index={index} key={index} />
      ))}
    </div>
  );
};

export default SkillList;
