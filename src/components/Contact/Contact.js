import React from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import bgImg2 from "../../Images/bg-2.jpg";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7jaw44h",
        "template_wa5io8bd",
        e.target,
        "0QBKu5hPcb71KgpqB"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email has been sent successfully!");
          toast.success("Check your Email", { duration: 4000 });
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div
      className="form h-screen p-4 md:p-12 pr-4"
      style={{
        background: `url(${bgImg2})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex  flex-col gap-y-5 sm:flex-row justify-between items-center border-b-2 border-dotted border-b-slate-500">
        <h2 className="text-sky-500 font-bold  text-3xl sm:text-5xl">
          Let's Talk
        </h2>
        <div className="flex flex-col gap-y-2">
          <p className="text-slate-100">
            <span class="lnr lnr-phone-handset mr-1"></span>
            <span>+880 1771909209</span>
          </p>
          <p className="flex  justify-around text-slate-100 pb-1">
            <FaGithub className="scale-150 hover:scale-[1.8] transition ease-in-out duration-300" />
            <FaFacebook className="scale-150 hover:scale-[1.8] transition ease-in-out duration-300" />
            <FaLinkedin className="scale-150 hover:scale-[1.8] transition ease-in-out duration-300" />
          </p>
        </div>
      </div>

      <form onSubmit={sendEmail} className="pt-6">
        <input
          type="text"
          className=" text-slate-200 border border-sky-500 focus:outline-none  bg-slate-600 placeholder:text-slate-400 rounded-none focus:border-sky-200"
          placeholder="Your name"
          required
          name="name"
        />
        <input
          type="email"
          placeholder="abc@gmail.com"
          className=" text-slate-200 border border-sky-500 focus:outline-none  bg-slate-600 placeholder:text-slate-400 rounded-none focus:border-sky-200"
          required
          name="email"
          id=""
        />
        <input
          type="text"
          placeholder="subject"
          className=" text-slate-200 border border-sky-500 focus:outline-none  bg-slate-600 placeholder:text-slate-400 rounded-none focus:border-sky-200"
          required
          name="subject"
          id=""
        />
        <textarea
          type="text"
          className=" text-slate-200 border border-sky-500 focus:outline-none bg-slate-600 placeholder:text-slate-400 rounded-none focus:border-sky-200"
          placeholder="message"
          required
          name="message"
        />
        <button className="w-44 submit-btn mx-auto mt-6 py-2 px-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
