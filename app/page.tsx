import HeroSection from "./components/Hero";
import About from "./components/About";

export default function Home() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <HeroSection />
      <About />
    </main>
  );
}
