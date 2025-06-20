
import HeroSection from "./components/LandingPage/HeroSection";
import WhatWeDo from "./components/LandingPage/WhatWeDo";
import StatsSection from "./components/LandingPage/StatsSection";

export default function Home() {
  return (
    <div className="bg-white relative">
      <HeroSection />
      <WhatWeDo />
      <StatsSection />
    </div>
  );
}
