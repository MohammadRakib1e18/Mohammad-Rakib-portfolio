import React from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

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
          toast.success("Check your Email",{duration:4000});
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="form h-screen pt-12 pl-12">
      <h2 className="text-sky-500 font-bold text-5xl border-b-2 border-dotted pb-2 border-b-slate-500">
        Let's Talk
      </h2>

      <form onSubmit={sendEmail} className="pt-6">
        <input
          type="text"
          className=" text-slate-200 border border-sky-500 focus:outline-none focus:ring focus:ring-sky-300 bg-slate-500 placeholder:text-slate-200 rounded-none"
          placeholder="Your name"
          required
          name="name"
        />
        <input
          type="email"
          placeholder="abc@gmail.com"
          className=" text-slate-200 border border-sky-500 focus:outline-none focus:ring focus:ring-sky-300 bg-slate-500 placeholder:text-slate-200 rounded-none"
          required
          name="email"
          id=""
        />
        <input
          type="text"
          placeholder="subject"
          className=" text-slate-200 border border-sky-500 focus:outline-none focus:ring focus:ring-sky-300 bg-slate-500 placeholder:text-slate-200 rounded-none"
          required
          name="subject"
          id=""
        />
        <textarea
          type="text"
          className=" text-slate-200 border border-sky-500 focus:outline-none focus:ring focus:ring-sky-300 bg-slate-500 placeholder:text-slate-200 rounded-none"
          placeholder="message"
          required
          name="message"
        />
        <button className="submit-btn mx-auto mt-8">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
