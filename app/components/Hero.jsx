"use client";
import React from "react";
import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import Button from "./Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  gsap.registerPlugin(ScrollTrigger);

  const totalVideos = 4;
  const nextVideoRef = useRef(null);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideoIndex);
  };

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVideoRef.current.play(),
        });
        gsap.from("current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0%, 90% 90%, 0% 100%)",
    });

    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "top top",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  const getVideoSrc = (index) => {
    return `/videos/hero-${index}.mp4`;
  };

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMiniVdClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                ref={nextVideoRef}
                preload="auto"
                src={getVideoSrc(upcomingVideoIndex)}
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVideoLoad}
                alt="video"
              />
            </div>
          </div>

          <video
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            loop
            autoPlay
            muted
            id="next-video"
            className="absolute-center invisible absolute size-64 z-20 object-cover object-center"
            onLoadedData={handleVideoLoad}
          />

          <video
            src={
              currentIndex - 1 === 0
                ? getVideoSrc(totalVideos)
                : getVideoSrc(currentIndex - 1)
            }
            // autoPlay={!hasClicked} // Autoplay when hasClicked is false
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
        </div>
        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          a <b>web developer</b>
        </h1>
        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-6 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              Hi! <b>I'm</b> Lynn
            </h1>

            <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
              What Makes Us Different <br /> is What Makes Us Strong
            </p>

            <Button
              id="watch-trailer"
              title="My Github Profile"
              leftIcon={<TiLocationArrow />}
              containerClass="!bg-yellow-300 flex-center gap-1"
            />
          </div>
        </div>
      </div>

      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
        {/* G<b>A</b>MING */}a<b>web developer</b>
      </h1>
    </div>
  );
};

export default HeroSection;
