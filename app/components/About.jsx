"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

// import AnimatedTitle from "./AnimatedTitle";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[20px]">
          Introducing my Multiverse
        </p>

        {/* <h1
          title="Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure"
          className="mt-5 !text-black text-center"
        /> */}

        <h1 className="mt-5 text-center text-5xl leading-[1.5] md:text-[6rem]">
          Welcome to my <br />
          World of Magic
        </h1>

        <div className="about-subtext">
          <p>Turning ideas into code, and code into impact.</p>
          <p className="text-gray-500">
            Coding the future, one line at a time - Innovating with ideas,
            analyzing with data. Dreaming with ambition, my final Evolution.
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/arcane.png"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
