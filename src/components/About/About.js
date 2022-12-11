import React from "react";

const About = () => {

    const downloadPdf = () => {
      // using Java Script method to get PDF file
      fetch("Mohammad Rakib-Resume.pdf").then((response) => {
        response.blob().then((blob) => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement("a");
          alink.href = fileURL;
          alink.download = "Mohammad Rakib-Resume.pdf";
          alink.click();
        });
      });
    };

  return (
    <div className="p-24 min-h-screen font-serif">
      <h2 className="text-sky-500 font-bold text-5xl border-b-2 border-dotted pb-2 border-b-slate-500">
        About Me
      </h2>
      <div className="text-slate-200 space-y-5 mt-5 text-lg text-justify">
        <p className="">
          Hello, I'm a{" "}
          <span className="text-sky-300 font-bold">MERN Stack</span> developer.
          My favorite stacks are React JS, Javascript, NodeJS, MongoDB, C, C++.
          I've developed 20+ projects. Those projects expanded my knowledge,
          enriched experience and made me confident in web development world.
        </p>
        <p>
          I'm deadline driven, passionate about my work, and believe in working
          smartly. I love to develop the logic of projects. When I get any bug
          in my code, it pushes me to the next level of my enthusiasm.
        </p>
        <p>
          I've started my coding journey with C language. Then I learned C++ and
          solved 1000+ problems. One of my favorite online judges is Codeforces.
          It helps me grow my logic, write more efficient code, and develop
          projects. I'm ready to take a new challenge to complete a new project.
        </p>
      </div>
      <div className="mt-8">
        {/* <a
          className="inline-block w-[130px] text-center text-slate-200 font-bold bg-sky-600 hover:bg-sky-500 py-1 px-4 rounded-full"
          href="https://www.linkedin.com/in/mohammad-rakib1/"
          target={"_blank"}
          rel="noreferrer"
        >
          HIRE ME
        </a> */}
        <a
          className="inline-block text-center font-bold bg-transparent border-2 border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-slate-200 py-2 px-4 rounded-none"
          href="/Mohammad Rakib-Resume.pdf"
          download
        >
          DOWNLOAD RESUME
        </a>
        {/* <button>DOWNLOAD MY RESUME</button> */}
      </div>
    </div>
  );
};

export default About;
