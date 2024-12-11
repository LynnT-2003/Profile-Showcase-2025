"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import Button from "./Button";
import dynamic from "next/dynamic";
const IconCloud = dynamic(() => import("./icon-cloud"), { ssr: false });

const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    if (window.innerWidth > 768) {
      gsap.set("#about-title", { opacity: 0, scale: 0.8 });

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

      clipAnimation.to(
        "#about-title",
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.5"
      );
    }
  });

  const slugs = [
    "typescript",
    "javascript",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "vercel",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "figma",
  ];

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

        <h1 className="mt-5 text-center text-7xl uppercase leading-[1.0] md:text-[6rem]">
          Welcome to my <br />
          World of Magic
        </h1>

        <div className="about-subtext">
          <p>Turning ideas into code, and code into impact.</p>
          <p className="text-gray-500">
            Coding the future, one line at a time - Innovating with Idea and
            Analyzing with Data. Dreaming with ambition.
          </p>
        </div>
      </div>

      <div className="hidden md:block h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image ">
          <img
            src="img/arcane.png"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover z-10"
          />
          <div
            id="about-title"
            className="absolute left-0 top-0 size-full flex-center z-20 text-white text-4xl font-bold"
            onClick={() =>
              window.open("https://lynn-thit-2025.vercel.app/", "_blank")
            }
          >
            <IconCloud iconSlugs={slugs} />
          </div>

          <Button
            id="watch-trailer"
            title="seek my knowledge"
            leftIcon={<TiLocationArrow />}
            containerClass="!bg-yellow-300 flex-center gap-1 rounded-none text-2xl font-bold text-black"
            onClick={() =>
              window.open("https://lynn-thit-2025.vercel.app/", "_blank")
            }
          />
        </div>
      </div>

      <div className="md:hidden h-full w-screen" id="clip">
        <div className="flex items-center justify-center mx-4 h-[60vh]">
          <img
            src="img/arcane.png"
            alt="Background"
            className="h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
