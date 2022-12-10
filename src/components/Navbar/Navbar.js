import React from "react";

const Navbar = () => {
  return (
    <div className="bg-slate-800  w-full flex justify-center items-center  lg:hidden">
      <h1 className="text-2xl font-bold text-slate-200 w-4/5 text-center">
        Mohammad Rakib
      </h1>
      <label htmlFor="my-drawer-2" tabIndex={2} className="btn btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
    </div>
  );
};

export default Navbar;
