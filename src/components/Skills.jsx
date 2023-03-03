import React from "react";
import SkillTable from "./SkillTable";

const skills = [
  {
    title: "Front-end",
    skills: [
      { name: "HTML", rating: 85, id: 1 },
      { name: "CSS", rating: 85, id: 2 },
      { name: "Javascript", rating: 85, id: 3 },
      { name: "Typescript", rating: 75, id: 4 },
      { name: "React", rating: 80, id: 5 },
      { name: "React-Redux", rating: 80, id: 6 },
      { name: "React Native", rating: 65, id: 7 },
    ],
    id: 1,
  },
  {
    title: "Back-end",
    skills: [
      { name: "Express Js", rating: 75, id: 8 },
      { name: "Python", rating: 75, id: 9 },
      { name: "AWS", rating: 60, id: 10 },
      { name: "Agile", rating: 80, id: 12 },
      { name: "RDBMS", rating: 80, id: 13 },
      { name: "NoSqlDB", rating: 70, id: 14 },
    ],
    id: 2,
  },
];

const Skills = () => {
  return (
    <section name="skills" className="bg-[#121212]  w-full">
      <h2 className="text-center font-bold text-4xl text-gray-300 underline underline-offset-8 decoration-purple-700  pt-5 md:pt-[4rem]  pb-2 md:pb-5">
        Skills
      </h2>

      <div className="md:flex">
        {skills.map((item) => (
          <SkillTable key={item.id} obj={item}></SkillTable>
        ))}
      </div>
    </section>
  );
};

export default Skills;
