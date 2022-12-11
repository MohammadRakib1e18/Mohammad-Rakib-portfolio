import React from "react";
import { Link } from "react-router-dom";
import project1 from "../../Images/project1.png";
import project2 from "../../Images/project2.png";
import project3 from "../../Images/project3.png";

const Portfolio = () => {
  return (
    <div className="pt-12 pl-12 pr-4">
      <h2 className="text-sky-500 font-bold text-5xl border-b-2 border-dotted pb-4 border-b-slate-500">
        Projects
      </h2>
      <div className="mt-6 grid grid-cols-1 space-y-4 text-slate-200">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="h-64 w-1/2">
            <img
              src={project1}
              alt=""
              className=" w-full h-full object-cover border-2 border-sky-200"
            />
          </div>
          <div className="w-1/2">
            <h2 className="text-xl font-semibold underline mb-2">
              Short Description
            </h2>
            <ul>
              <li>1. This is a Single Page Application (SPA)</li>
              <li>2. User can provide review.</li>
              <li>3. Zoom the photo across the whole screen.</li>
            </ul>
            <div className="mt-8">
              <a
                className="inline-block text-center font-bold bg-transparent border-2 border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-slate-200 py-2 px-4 rounded-none"
                href="https://kitchen-table-25175.web.app/"
              >
                Live Site
              </a>
              <Link to='/details/1'></Link>

            </div>
          </div>
        </div>
        <div className="h-64">
          <img
            src={project2}
            alt=""
            className=" w-full h-full object-cover border-2 border-sky-400"
          />
        </div>
        <div className="h-64">
          <img
            src={project3}
            alt=""
            className=" w-full h-full object-cover border-2 border-sky-400"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
