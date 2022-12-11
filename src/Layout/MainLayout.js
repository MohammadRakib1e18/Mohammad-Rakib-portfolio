import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import user from "../Images/userLogo.jpg";
import { FaDownload } from "react-icons/fa";

const menu = (
  <>
    <div className="avatar online h-32 w-32 mx-auto">
      <img
        src={user}
        alt=""
        className="w-full rounded-full border-2 border-sky-500"
      />
    </div>
    <Link
      to="/"
      className="pl-12 bg-slate-700 hover:bg-sky-600 rounded-full py-1"
    >
      <li>Home</li>
    </Link>
    <Link
      to="/about"
      className="pl-12 bg-slate-700 hover:bg-sky-600 rounded-full py-1"
    >
      <li>About me</li>
    </Link>
    <Link
      to="/portfolio"
      className="pl-12 bg-slate-700 hover:bg-sky-600 rounded-full py-1"
    >
      <li>Portfolio</li>
    </Link>
    <Link
      to="/services"
      className="pl-12 bg-slate-700 hover:bg-sky-600 rounded-full py-1"
    >
      <li>Services</li>
    </Link>
    <Link
      to="/qualification"
      className="pl-12 bg-slate-700 hover:bg-sky-600 rounded-full py-1"
    >
      <li>Qualification</li>
    </Link>
    <Link
      to="/blogs"
      className="pl-12 bg-slate-700 hover:bg-sky-600 rounded-full py-1"
    >
      <li>Blogs</li>
    </Link>
    <Link
      to="/contact"
      className="pl-12 bg-slate-700 hover:bg-sky-600 rounded-full py-1"
    >
      <li>Contact</li>
    </Link>
    <a
      className="flex justify-center items-center h-10 rounded-full text-center font-bold bg-transparent border-2 border-sky-600 text-sky-500 hover:bg-sky-600 hover:text-slate-200 py-2 px-4 "
      href="https://www.linkedin.com/in/mohammad-rakib1/"
      target={"_blank"}
      rel="noreferrer"
    >
      HIRE ME
    </a>
    <a
      className="flex justify-center items-center gap-2 -mt-4 h-10 rounded-full text-center font-bold bg-transparent border-2 border-sky-600 text-sky-500 hover:bg-sky-600 hover:text-slate-200 py-2 px-1 "
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
        <div className="drawer-content bg-slate-700 border">
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
