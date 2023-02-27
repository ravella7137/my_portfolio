import React from "react";
import ExperienceItem from "./ExperienceItem";
const ExperienceWrapper = (props) => {
  return (
    <li>
      <div className="flex-start flex items-center pt-3">
        <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-[#ccd6f6]"></div>
      </div>
      <div className="mt-1 ml-4">
        <ExperienceItem {...props}></ExperienceItem>
      </div>
    </li>
  );
};

export default ExperienceWrapper;
