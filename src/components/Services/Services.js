import React from "react";

const Services = () => {
  return (
    <div className="pt-12 pl-12 pr-4">
      <h2 className="text-sky-500 font-bold text-4xl border-b-2 border-dotted pb-2 border-b-slate-500 font-serif">
        What I Offer
      </h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-12">
        <div className="text-slate-200 border text-center">
          <h1 className="text-5xl">
            <span class="lnr lnr-laptop"></span>
          </h1>
          <h2 className="text-slate-200 text-xl">Web Development</h2>
        </div>
        <div className="text-slate-200 border text-center">
          <h1 className="text-5xl">
            <span class="lnr lnr-laptop-phone"></span>
          </h1>
          <h2 className="text-slate-200 text-xl">Responsive Design</h2>
        </div>
      </div>
    </div>
  );
};

export default Services;
