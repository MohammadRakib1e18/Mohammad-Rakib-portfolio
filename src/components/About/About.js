import React from "react";
import { FaDownload } from "react-icons/fa";
import { Slide } from "react-reveal";

const About = () => {

  return (
    <Slide left>
      <div className="p-4 md:p-24 pt-12 min-h-screen font-serif">
        <div className="flex justify-between items-end border-b-2 border-dotted border-b-slate-500">
          <h2 className="text-shadow text-sky-500 font-bold text-3xl sm:text-4xl">
            About Me
          </h2>
          <a
            className=" text-center font-bold bg-transparent border-2 border-sky-500 text-sky-500 hover:bg-sky-500 hover:bg-opacity-40 hover:text-slate-200 px-4 rounded-full"
            href="/Mohammad Rakib-Resume.pdf"
            download
          >
            <span className="hidden md:flex items-center">DOWNLOAD RESUME</span>
            <span className="block md:hidden pb-1 scale-150 text-center text-sky-400">
              <FaDownload />
            </span>
          </a>
        </div>
        <div className="text-slate-200 space-y-5 mt-5 text-lg text-justify">
          <p className="">
            Hello, I'm a{" "}
            <span className="text-sky-300 font-bold">MERN Stack</span>{" "}
            developer. My favorite stacks are React JS, Javascript, NodeJS,
            MongoDB, C, C++. I've developed 20+ projects. Those projects
            expanded my knowledge, enriched experience and made me confident in
            web development world.
          </p>
          <p>
            I'm deadline driven, passionate about my work, and believe in
            working smartly. I love to develop the logic of projects. When I get
            any bug in my code, it pushes me to the next level of my enthusiasm.
          </p>
          <p>
            I've started my coding journey with C language. Then I learned C++
            and solved 1000+ problems. One of my favorite online judges is
            Codeforces. It helps me grow my logic, write more efficient code,
            and develop projects. I'm ready to take a new challenge to complete
            a new project.
          </p>
        </div>

        <div className="pt-24 pr-4">
          <h2 className="text-shadow text-sky-500 font-bold text-3xl sm:text-4xl border-b-2 border-dotted border-b-slate-500 font-serif">
            What I Offer
          </h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-slate-600 hover:scale-105 transition ease-in-out duration-300 p-4 border border-cyan-400 hover:border-sky-500 rounded-md text-slate-200 flex items-center flex-col">
              <h1 className="text-5xl ">
                <span className="lnr lnr-laptop"></span>
              </h1>
              <h2 className="text-xl font-bold text-cyan-300">
                Web Development
              </h2>
            </div>
            <div className="bg-slate-600 hover:scale-105 transition ease-in-out duration-300 p-4 border border-cyan-400 hover:border-sky-500 rounded-md text-slate-200 flex items-center flex-col">
              <h1 className="text-5xl lnr lnr-laptop-phone">
                <span className=""></span>
              </h1>
              <h2 className="text-xl font-bold text-cyan-300">
                Responsive Design
              </h2>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default About;
