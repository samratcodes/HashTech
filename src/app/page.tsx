import HeroSection from "./components/LandingPage/HeroSection";
import WhatWeDo from "./components/LandingPage/WhatWeDo";
import Loader from "./components/Loader";
import StatsSection from "./components/LandingPage/StatsSection";

export default function Home() {
  return (
    <div className="bg-white relative">
      <HeroSection />
      <WhatWeDo />
    </div>
  );
}
