import React, { useCallback } from "react";
import homeImg from "../../Images/home-page.jpg";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import { Typewriter } from "react-simple-typewriter";
import { FaDownload, FaFacebook, FaGithub, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";

const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);
  return (
    <div
      style={{
        background: `url(${homeImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className=" h-screen flex flex-col items-center font-serif"
    >
      <Particles
        width="300"
        height="500"
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 20,

          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <h1 className="text-center home-info font-bold text-4xl sm:text-5xl  text-slate-200 mt-36">
        <span className="text-sky-500">M</span>ohammad{" "}
        <span className="text-sky-500">R</span>akib
      </h1>
      <h1 className="home-info  text-2xl sm:text-3xl text-slate-100 mt-5">
        <span>I'm expert in </span>
        <span className="text-sky-200 underline">
          <Typewriter
            words={[
              "Web Development",
              "JavaScript",
              "React JS",
              "MERN Stack",
              "Problem Solving",
            ]}
            loop={550}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={500}
          />
        </span>
      </h1>
      <div className="mt-12">
        <a
          className="rounded-full text-center font-bold bg-transparent  bg-sky-600 hover:bg-sky-500 transition ease-in-out duration-300 text-slate-200 py-2 px-4 flex justify-center items-center gap-2  h-10 "
          href="/Mohammad Rakib-Resume.pdf"
          download
        >
          DOWNLOAD RESUME <FaDownload />
        </a>
      </div>
      <div className="flex flex-col gap-y-3 sm:gap-y-4 px-2 py-3 rounded-xl bg-slate-600 bg-opacity-50 text-slate-100 fixed top-[60px]  left-5 lg:left-auto lg:top-10 lg:right-10">
        <a
          href="https://github.com/MohammadRakib1e18"
          target={"_blank"}
          rel="noreferrer"
          title="Github"
        >
          <FaGithub className="scale-150 hover:scale-[1.8] transition ease-in-out duration-300" />
        </a>
        <a
          href="https://www.facebook.com/rakib.molla.9634340/"
          target={"_blank"}
          rel="noreferrer"
          title="Facebook"
        >
          <FaFacebook className="scale-150 hover:scale-[1.8] transition ease-in-out duration-300" />
        </a>
        <a
          href="https://www.linkedin.com/in/mohammad-rakib1/"
          target={"_blank"}
          rel="noreferrer"
          title="Linkedin"
        >
          <FaLinkedin className="scale-150 hover:scale-[1.8] transition ease-in-out duration-300" />
        </a>
        <a
          href="https://wa.me/8801771909209"
          target={"_blank"}
          rel="noreferrer"
          title="Whatsapp"
        >
          <FaWhatsappSquare className="scale-150 hover:scale-[1.8] transition ease-in-out duration-300" />
        </a>
      </div>
    </div>
  );
};

export default Home;
