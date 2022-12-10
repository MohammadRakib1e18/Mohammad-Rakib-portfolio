import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import user from "../Images/userLogo.jpg";

const menu = (
  <>
    <div className="avatar online">
      <img src={user} alt="" className="h-12 w-12 rounded-full border-2" />
    </div>
    <Link to="/" className="bg-slate-700 rounded-full py-1">
      <li>Home</li>
    </Link>
    <Link to="/about" className="bg-slate-700 rounded-full py-1">
      <li>About me</li>
    </Link>
    <Link to="/portfolio" className="bg-slate-700 rounded-full py-1">
      <li>Portfolio</li>
    </Link>
    <Link to="/services" className="bg-slate-700 rounded-full py-1">
      <li>Services</li>
    </Link>
    <Link to="/education" className="bg-slate-700 rounded-full py-1">
      <li>Education</li>
    </Link>
    <Link to="/contact" className="bg-slate-700 rounded-full py-1">
      <li>Contact</li>
    </Link>
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
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-[200px] space-y-3 text-center text-slate-200 bg-slate-800">
            {menu}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
