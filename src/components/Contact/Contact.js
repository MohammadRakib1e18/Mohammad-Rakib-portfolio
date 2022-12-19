import React from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import bgImg2 from "../../Images/bg-2.jpg";
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";

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
      className="font-serif form h-screen p-4 md:p-12 pr-4"
      style={{
        background: `url(${bgImg2})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex  flex-col gap-y-5 sm:flex-row justify-between items-center border-b-2 border-dotted border-b-slate-500">
        <h2 className="text-sky-100 font-bold  text-3xl sm:text-5xl text-shadow ">
          Let's Talk
        </h2>
        <div className="flex flex-col gap-y-2">
          <p className="text-slate-900">
            <span class="lnr lnr-phone-handset mr-1"></span>
            <span>+880 1771909209</span>
          </p>
          <p className="flex  justify-around  pb-1">
            <a
              href="https://github.com/MohammadRakib1e18"
              target={"_blank"}
              rel="noreferrer"
              title="Github"
              className="text-slate-900"
            >
              <FaGithub className="scale-150 hover:scale-[1.8] transition ease-in-out duration-300" />
            </a>
            <a
              href="https://www.facebook.com/rakib.molla.9634340/"
              target={"_blank"}
              rel="noreferrer"
              title="Facebook"
              className="text-blue-600"
            >
              <FaFacebook className="scale-150 hover:scale-[1.8] transition ease-in-out duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammad-rakib1/"
              target={"_blank"}
              rel="noreferrer"
              title="Linkedin"
              className="text-sky-600"
            >
              <FaLinkedin className="scale-150 hover:scale-[1.8] transition ease-in-out duration-300" />
            </a>
            <a
              href="https://wa.me/8801771909209"
              target={"_blank"}
              rel="noreferrer"
              title="Whatsapp"
              className="text-green-500"
            >
              <FaWhatsappSquare className="scale-150 hover:scale-[1.8] transition ease-in-out duration-300" />
            </a>
          </p>
        </div>
      </div>

      <form onSubmit={sendEmail} className="pt-6">
        <input
          type="text"
          className=" text-slate-700 border-sky-500 focus:outline-none  bg-slate-300 bg-opacity-40 placeholder:text-slate-600 rounded-none focus:border-sky-200 font-semibold placeholder:font-thin "
          placeholder="Your name"
          required
          name="name"
        />
        <input
          type="email"
          placeholder="abc@gmail.com"
          className=" text-slate-700 border-sky-500 focus:outline-none  bg-slate-300 bg-opacity-40 placeholder:text-slate-600 rounded-none focus:border-sky-200 font-semibold placeholder:font-thin "
          required
          name="email"
          id=""
        />
        <input
          type="text"
          placeholder="subject"
          className=" text-slate-700 border-sky-500 focus:outline-none  bg-slate-300 bg-opacity-40 placeholder:text-slate-600 rounded-none focus:border-sky-200 font-semibold placeholder:font-thin "
          required
          name="subject"
          id=""
        />
        <textarea
          type="text"
          className=" text-slate-700 border-sky-500 focus:outline-none  bg-slate-300 bg-opacity-40 placeholder:text-slate-600 rounded-none focus:border-sky-200 font-semibold placeholder:font-thin "
          placeholder="message"
          required
          name="message"
        />
        <button className=" w-44 submit-btn mx-auto mt-6 py-2 px-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
