"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import Button from "./Button";

const FloatingImage = () => {
  const frameRef = useRef(null);
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <div id="story" className="pt-24 min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px]">
          the multiversal ip world
        </p>

        <div className="relative size-full">
          {/* <AnimatedTitle
            title="the st<b>o</b>ry of <br /> a hidden real<b>m</b>"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          /> */}

          <h1 className="mt-5 text-center text-7xl uppercase leading-[1.0] md:text-[5rem] mix-blend-difference relative z-10">
            <b>Developing with the</b>
            <br /> <b>minds of tomorrow</b>
          </h1>

          <div className="story-img-container !ml-[1rem] lg:!-ml-[3rem] xl:!-ml-[5rem]">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  src="/img/viktor-hood.jpg"
                  alt="entrance.webp"
                  className="object-contain"
                />
              </div>
            </div>

            {/* for the rounded corner */}
            <svg
              className="invisible absolute size-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="flt_tag">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="flt_tag"
                  />
                  <feComposite
                    in="SourceGraphic"
                    in2="flt_tag"
                    operator="atop"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>

        <div className="h-24 w-full -mt-[25rem]">
          <div className="flex items-center justify-center gap-12">
            <p className="mt-3 text-center font-circular-web text-blue-100 font-extrabold mix-blend-difference md:text-start text-lg ">
              I build the bridge between AI and our reality, <br /> bringing all
              ideas to life. I am not just a developer, <br />I am a creator of
              tomorrow.
            </p>

            <Button id="realm-btn" title="my ai projects" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingImage;
