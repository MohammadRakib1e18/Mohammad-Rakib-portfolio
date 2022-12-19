import React from "react";
import { FaSun } from "react-icons/fa";
import SingleProgress from "./SingleProgress";

const codingSkill = [
  {
    subject: "Algo/DS",
    skill: "70",
  },
  {
    subject: "Javascript",
    skill: "80",
  },
  {
    subject: "Node JS",
    skill: "65",
  },

  {
    subject: "C",
    skill: "85",
  },
  {
    subject: "C++",
    skill: "75",
  },
];
const developmentSkill = [
  {
    subject: 'ReactJS',
    skill:'80'
  },
  {
    subject: 'MongoDB',
    skill:'65',
  },
  {
    subject: 'TailwindCSS',
    skill:'85',
  },
  {
    subject: 'Bootstrap',
    skill:'90',
  },
  {
    subject: 'Git/Github',
    skill: '70',
  }
]

const Qualification = () => {
  return (
    <div className="p-4 md:p-12 pr-4 font-serif">
      <h2 className="text-shadow  text-sky-500 font-bold text-2xl sm:text-4xl border-b-2 border-dotted pb-2 border-b-slate-500 flex justify-between">
        <span>Education & Course</span>
        <FaSun className="spinnerAnimation" />
      </h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <div className="bg-slate-600 hover:scale-105 transition ease-in-out duration-300 pl-12 p-4 border border-cyan-400 hover:border-sky-500 rounded-md text-slate-200 box-shadow">
          <h2 className="text-xl font-bold text-cyan-300 ">
            Diploma-in-Engineering
          </h2>
          <p className="">Royal Institute of Technology</p>
          <p className="">July 2016 - June 2020</p>
        </div>
        <div className="bg-slate-600 hover:scale-105 transition ease-in-out duration-300  pl-12 p-4 border border-cyan-400 hover:border-sky-500 rounded-md text-slate-200 box-shadow">
          <h2 className="text-xl font-bold text-cyan-300">
            Honours in English
          </h2>
          <p className="">National University</p>
          <p className="">July 2016 - June 2020</p>
        </div>
        <div className="bg-slate-600 hover:scale-105 transition ease-in-out duration-300  pl-12 p-4 border border-cyan-400 hover:border-sky-500 rounded-md text-slate-200 box-shadow">
          <h2 className="text-xl font-bold text-cyan-300">Web Development</h2>
          <p className="">Programming Hero</p>
          <p className="">July 2022 - December 2022</p>
        </div>
      </div>
      <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 gap-16">
        <div>
          <h2 className="text-shadow text-sky-500 text-center font-bold text-3xl border-b-2 border-dotted pb-2 border-b-slate-500">
            Coding Skills
          </h2>
          <div className="mt-8">
            {codingSkill.map((skill, index) => (
              <SingleProgress key={index} skill={skill}></SingleProgress>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-shadow text-sky-500 text-center font-bold text-3xl border-b-2 border-dotted pb-2 border-b-slate-500">
            Development Skills
          </h2>
          <div className="mt-8">
            {developmentSkill.map((skill, index) => (
              <SingleProgress key={index} skill={skill}></SingleProgress>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
