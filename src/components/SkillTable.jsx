import React from "react";
import SkillItem from "./SkillItem";

const SkillTable = ({ obj }) => {
  return (
    <div className="md:grow">
      <div className="text-center text-gray-400 font-bold text-xl p-3 ">
        {obj.title}
      </div>
      {obj.skills.map((item) => (
        <SkillItem key={item.id} skill={item} />
      ))}
    </div>
  );
};

export default SkillTable;
