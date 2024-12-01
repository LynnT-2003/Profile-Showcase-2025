"use client";
import HeroSection from "./components/Hero";
import About from "./components/About";
import Story from "./components/Story";

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <HeroSection />
      <About />
      <Story />
    </main>
  );
}
