import React from 'react';
import Slide from "react-reveal/Slide";

const Blog = () => {
    return (
      <Slide bottom>
        <div className="p-4 md:p-12 pr-4">
          <h2 className="text-sky-500 font-bold text-3xl sm:text-4xl border-b-2 border-dotted pb-2 border-b-slate-500 font-serif text-shadow ">
            Blog Store
          </h2>

          <div className="flex justify-center items-center">
            <h2 className="text-2xl text-slate-400 font-bold">
              Blogs are coming soon!
            </h2>
          </div>
        </div>
      </Slide>
    );
};

export default Blog;