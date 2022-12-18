import React, { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
import project1 from "../../Images/project1.png";
import project2 from "../../Images/project2.png";
import project3 from "../../Images/project3.png";
import "react-photo-view/dist/react-photo-view.css";
import DetailsModal from "./DetailsModal";

const portfolioInfo = [
  {
    img: project1,
    title: "Tomy Mia Kitchen Table",
    info: [
      "This is a Single Page Application (SPA)",
      "BKash and Stripe (upcoming) payment system.",
      "User can provide review, add product",
      "Zoom the photo across the whole screen.",
      "A valid user can edit and delete his/her review.",
      "Desktop and mobile responsive site.",
    ],
    sites: [
      "https://kitchen-table-25175.web.app/",
      "https://github.com/MohammadRakib1e18/tomy-mia-kitchen-table-client-site",
      "https://github.com/MohammadRakib1e18/tomy-mia-kitchen-table-server-site",
    ],
    names: ["Live", "Client", "Server"],
    technologies: [
      "ReactJS",
      "MongoDB",
      "ExpressJS",
      "React Router Dom",
      "Firebase",
      "TailwindCSS and it's libraries",
      "React Photo View",
      "React Hot Toast",
      "Sweet Alert2",
    ],
  },
  {
    img: project2,
    title: "ResalePort.com",
    info: [
      "MERN Stack site with Admin Dashboard.",
      "3 types of user: seller, buyer and admin",
      "Slider with Swiper.js",
      "This is a Single Page Application (SPA)",
      "A buyer can only buy products, keep wishlist",
      "A seller can add product and advertise his products",
      "Admin can delete any seller, buyer or user.",
      "Animation effect with AOS",
      "Desktop and mobile responsive site.",
    ],
    sites: [
      "https://resale-gym-equipment.web.app/",
      "https://github.com/MohammadRakib1e18/ResalePort.com",
      "https://github.com/MohammadRakib1e18/ResalePort.com-server",
    ],
    names: ["Live", "Client", "Server"],
    technologies: [
      "ReactJS",
      "React Query",
      "React Hook Form",
      "React Router Dom",
      "MongoDB",
      "ExpressJS",
      "Firebase",
      "TailwindCSS and it's libraries",
      "React Photo View",
      "React Hot Toast",
      "React icons",
    ],
  },
  {
    img: project3,
    title: "Get Ready",
    info: [
      "JavaScript DOM has been used to manipulate data. ",
      "Responsive Layout ",
      "Complete, Update and Delete features.",
      "Easy to navigate",
      "Password matching and Registration with Modal",
      "Mark a task 'completed' if one wishes",
      "A video kept in Docs to guide the user",
    ],
    sites: [
      "https://get-ready-to-shine.netlify.app/",
      "https://github.com/MohammadRakib1e18/to-do-app",
    ],
    names: ["Live", "Client"],
    technologies: ["Javascript", "Bootstrap5", "Html", "Css"],
  },
];

const Portfolio = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({});

  return (
    <div className="p-4 md:p-12 pr-4 mb-12">
      <h2 className="text-sky-500 font-bold text-4xl sm:text-5xl border-b-2 border-dotted pb-4 border-b-slate-500">
        Projects
      </h2>
      <div className="mt-6 grid grid-cols-1 space-y-12 text-slate-200">
        {portfolioInfo.map((info, index) => (
          <div className="flex flex-col md:flex-row gap-8">
            <div className="h-64 w-full md:w-1/2 overflow-hidden transition ease-in-out">
              <img
                src={info.img}
                alt=""
                className="hover:scale-125  w-full h-full object-cover border-2 border-sky-200 transition duration-700 ease-in-out"
              />
            </div>
            <div className=" flex flex-col justify-between w-full md:w-1/2">
              <h2 className=" text-xl sm:text-2xl text-sky-400 font-bold mb-3">
                {info.title}
              </h2>
              <div>
                <h2 className="text-lg underline mb-2">Short Description</h2>
                <ol>
                  {info.info.map((data, index) => {
                    if (index < 3) return <li>{data}</li>;
                    return null;
                  })}
                </ol>
                <div className="dropdown dropdown-bottom">
                  <label
                    tabIndex={0}
                    className="inline-block my-5 font-bold text-sky-500 hover:text-sky-300  transition duration-400 ease-in-out "
                  >
                    Know more
                    <span class="relative scale-x-150 ml-2 -bottom-1  inline-block lnr lnr-arrow-right hover:scale-x-[2] transition duration-600 ease-in-out"></span>
                  </label>
                  <ul
                    tabIndex={0}
                    className="-mt-2 dropdown-content menu p-2 shadow bg-base-100 rounded-none w-52 border-2 border-slate-600 text-slate-300"
                  >
                    <li className="">
                      <Link to={`/portfolioDetails/${index + 1}`}>
                        Review the site
                      </Link>
                    </li>
                    <li>
                      <label htmlFor="my-modal-3" onClick={() => {setShow(true); setData(info)}}>
                        More Description
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="sm:w-5/6 grid grid-cols-3 gap-x-5">
                {info.sites.map((site, index) => (
                  <a
                    key={index}
                    className="inline-block text-center font-bold bg-transparent border-2 border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-slate-200 py-1 px-2 rounded-none transition duration-400 ease-in-out "
                    href={site}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {info.names[index]}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <DetailsModal show={show} setShow={setShow} data={data}></DetailsModal>
    </div>
  );
};

export default Portfolio;
