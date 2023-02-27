import React from "react";
//const skill = {name:'HTML',rating:85}
const SkillItem = ({ skill }) => {
  return (
    <div className="flex justify-center items-center max-w-[80%] mx-auto  px-2 py-1">
      <div className="text-s text-sm md:text-md lg:text-lg text-gray-300 w-[40%] md:w-[25%]">
        {skill.name}
      </div>
      <div className="w-[60%] md:w-[50%]">
        <div className="mx-auto my-auto h-2.5 rounded-full bg-slate-300">
          <div
            className="h-2.5 rounded-full bg-purple-700"
            style={{ width: skill.rating.toString() + "%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
