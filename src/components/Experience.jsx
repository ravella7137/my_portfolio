import React from "react";
import torry from "../assets/torry.jpeg";
import nal from "../assets/nal.jpeg";
import xyram from "../assets/xyram.jpeg";
import accenture from "../assets/accenture.jpeg";
import ExperienceWrapper from "./ExperienceWrapper";
const experienceArray = [
  {
    startDate: "Jun 2021",
    endDate: "Aug 2022",
    role: "Full Stack Developer",
    desc: "Full Stack development, leading poc's and code review and mentorship",
    img: torry,
    id: 1,
  },
  {
    startDate: "Nov 2019",
    endDate: "Mar 2020",
    role: "Research Project Assistant - II",
    desc: "drone automation script development , Node Js endpoint development",
    img: nal,
    id: 2,
  },
  {
    startDate: "Nov 2019",
    endDate: "Nov 2018",
    role: "Software Development Intern",
    desc: "Full Stack javascript dashboard development and sql server administration",
    img: xyram,
    id: 3,
  },
  {
    startDate: "Sep 2018",
    endDate: "Sep 2017",
    role: "Application Development Associate",
    desc: ".NET and SQL development in operations team of a internal site with large userbase",
    img: accenture,
    id: 4,
  },
];
const Experience = () => {
  return (
    <div name="experience" className="bg-[#121212] w-full pb-5">
      <p className="text-center font-bold text-4xl text-gray-300 underline underline-offset-8 decoration-purple-700  ">
        Experience
      </p>

      <div className="max-w-[600px] mx-auto px-6 md:px-0">
        <ol className="border-l border-purple-700">
          {experienceArray.map((item) => (
            <ExperienceWrapper key={item.id} obj={item}></ExperienceWrapper>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Experience;
