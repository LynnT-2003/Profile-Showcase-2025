"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";

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
          <h1
            id="about-title"
            className="lg:mt-[14rem] hover:cursor-pointer mt-0 absolute special-font font-zentry text-9xl text-blue-100 text-center left-1/2 top-1/2 z-20 translate-x-[-50%] translate-y-[-25%]"
            onClick={() =>
              window.open("https://lynn-thit-2025.vercel.app/", "_blank")
            }
          >
            My Final
            <br /> <b>Evolution</b>
          </h1>

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
