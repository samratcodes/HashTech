import HeroSection from "./components/LandingPage/HeroSection";
import OurTeam from "./components/LandingPage/OurTeam";
import Projects from "./components/LandingPage/Projects";
import WhatWeDo from "./components/LandingPage/WhatWeDo"

export default function Home() {
  return (
    <div className="bg-white relative">
      <HeroSection />
      <Projects/>
      <WhatWeDo />
      <OurTeam/>
    </div>
  );
}
