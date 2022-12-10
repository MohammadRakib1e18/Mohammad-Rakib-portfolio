import React, { useCallback } from "react";
import homeImg from "../../Images/home-page.jpg";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);
  return (
    <div
      data-aos="zoom-in"
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
          fpsLimit: 120,

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
      <h1 className=" home-info font-bold text-5xl text-slate-200 mt-36">
        <span className="text-rose-500">M</span>ohammad{" "}
        <span className="text-rose-500">R</span>akib
      </h1>
      <h1 className="home-info  text-3xl text-slate-100 mt-5">
        <span>I'm expert in </span>
        <span className="text-rose-200 underline">
          <Typewriter
            words={[
              "Web Development",
              "JavaScript",
              "React JS",
              "MERN Stack",
              "Problem Solving",
            ]}
            loop={150}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={50}
            delaySpeed={500}
          />
        </span>
      </h1>
    </div>
  );
};

export default Home;
