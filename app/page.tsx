"use client";
import HeroSection from "./components/Hero";
import About from "./components/About";
import Story from "./components/Story";
import IntroSection from "./components/Intro";

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <HeroSection />
      <About />
      <div className="h-screen bg-black" />
      <Story />
    </main>
  );
}
