import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { FaDownload } from "react-icons/fa";
import user from "../Images/Mohammad Rakib.png";
import "./MainLayout.css";

const menu = (
  <>
    <div className=" avatar online h-32 w-32 mx-auto">
      <img
        src={user}
        alt=""
        className="hover:scale-110  w-full rounded-full border-2 border-sky-500 transition duration-700 ease-in-out"
      />
    </div>

    <NavLink
      to="/"
      className=" transition duration-400 ease-in-out  bg-slate-700 rounded-full py-1 hover:bg-sky-600 flex pl-10 items-center h-9"
    >
      <span className="lnr lnr-home mr-1"></span>
      <li>Home</li>
    </NavLink>
    <NavLink
      to="/about"
      className=" transition duration-400 ease-in-out  bg-slate-700 rounded-full py-1  hover:bg-sky-600 flex pl-10  items-center h-9"
    >
      <span class="lnr lnr-user mr-1"></span>
      <li>About me</li>
    </NavLink>
    <NavLink
      to="/portfolio"
      className=" transition duration-400 ease-in-out  pl-10 bg-slate-700 rounded-full py-1  hover:bg-sky-600 flex  items-center h-9"
    >
      <span class="lnr lnr-film-play mr-1"></span>
      <li>Portfolio</li>
    </NavLink>

    <NavLink
      to="/qualification"
      className=" transition duration-400 ease-in-out pl-10 bg-slate-700  rounded-full py-1  hover:bg-sky-600 flex items-center h-9"
    >
      <span class="lnr lnr-graduation-hat mr-1 scale-y-150"></span>
      <li>Qualification</li>
    </NavLink>
    <NavLink
      to="/blogs"
      className=" transition duration-400 ease-in-out pl-10 bg-slate-700  rounded-full py-1  hover:bg-sky-600 flex items-center h-9"
    >
      <span class="lnr lnr-database mr-1"></span>
      <li>Blogs</li>
    </NavLink>
    <NavLink
      to="/contact"
      className=" transition duration-400 ease-in-out pl-10 bg-slate-700  rounded-full py-1  hover:bg-sky-600 flex items-center h-9"
    >
      <span class="lnr lnr-envelope mr-1"></span>
      <li>Contact</li>
    </NavLink>
    <a
      className="transition duration-400 ease-in-out flex justify-center items-center h-10 rounded-full text-center font-bold bg-transparent border-2 border-sky-600 text-sky-500 hover:bg-sky-600 hover:text-slate-200 py-2 px-4 "
      href="https://www.linkedin.com/in/mohammad-rakib1/"
      target={"_blank"}
      rel="noreferrer"
    >
      HIRE ME
    </a>
    <a
      className=" transition duration-400 ease-in-out flex justify-center items-center gap-2 -mt-4 h-10 rounded-full text-center font-bold bg-transparent border-2 border-sky-600 text-sky-500 hover:bg-sky-600 hover:text-slate-200 py-2 px-1 "
      href="/Mohammad Rakib-Resume.pdf"
      download
    >
      RESUME <FaDownload />
    </a>
  </>
);

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-slate-700">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-[200px] space-y-3  text-slate-200 bg-slate-800">
            {menu}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
