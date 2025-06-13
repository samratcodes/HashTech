import React from 'react';

import HeroSectionText from './HeroSectionText';
const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden flex">
        <div className="absolute inset-0"></div>
      {/* Left background */}        
      <div className="absolute z-10 inset-y-0 left-0 w-1/4 sm:w-1/5 ">
        <div className="w-full h-full bg-pattern"></div>
         <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Right background */}
      <div className="absolute inset-y-0 right-0 w-1/4 sm:w-1/5 z-10">
        <div className="w-full h-full bg-pattern"></div>
         <div className="absolute inset-0 bg-black z-30 opacity-30"></div>
      </div>

<HeroSectionText/>

      {/* Styles */}
      <style>{`
        :root {
          --l: #0D71BA;
          --b: #fffdfd;
          --w: 104px;
        }

        .bg-pattern {
          background: var(--b);
          animation: weee 10s linear infinite;
          background-image:
            linear-gradient(45deg, var(--l) 0% 14.2857%, transparent 14.2857% 28.5714%, var(--l) 28.5714% 42.8571%, transparent 42.8571% 57.1429%, var(--l) 57.1429% 71.4286%, transparent 71.4286% 85.7143%, var(--l) 85.7143% 100%),
            linear-gradient(-45deg, var(--l) 0% 14.2857%, transparent 14.2857% 28.5714%, var(--l) 28.5714% 42.8571%, transparent 42.8571% 57.1429%, var(--l) 57.1429% 71.4286%, transparent 71.4286% 85.7143%, var(--l) 85.7143% 100%),
            linear-gradient(45deg, var(--l) 0% 30.7692%, transparent 30.7692% 61.5385%, var(--l) 61.5385% 92.3077%, transparent 92.3077%),
            linear-gradient(-45deg, var(--l) 0% 30.7692%, transparent 30.7692% 61.5385%, var(--l) 61.5385% 92.3077%, transparent 92.3077%),
            linear-gradient(45deg, var(--l) 0% 30.7692%, transparent 30.7692% 61.5385%, var(--l) 61.5385% 92.3077%, transparent 92.3077%),
            linear-gradient(-45deg, var(--l) 0% 30.7692%, transparent 30.7692% 61.5385%, var(--l) 61.5385% 92.3077%, transparent 92.3077%),
            linear-gradient(45deg, var(--l) 0% 30.7692%, transparent 30.7692% 61.5385%, var(--l) 61.5385% 92.3077%, transparent 92.3077%),
            linear-gradient(-45deg, var(--l) 0% 30.7692%, transparent 30.7692% 61.5385%, var(--l) 61.5385% 92.3077%, transparent 92.3077%),
            linear-gradient(45deg, var(--l) 0% 14.2857%, transparent 14.2857% 28.5714%, var(--l) 28.5714% 42.8571%, transparent 42.8571% 57.1429%, var(--l) 57.1429% 71.4286%, transparent 71.4286% 85.7143%, var(--l) 85.7143% 100%),
            linear-gradient(-45deg, var(--l) 0% 14.2857%, transparent 14.2857% 28.5714%, var(--l) 28.5714% 42.8571%, transparent 42.8571% 57.1429%, var(--l) 57.1429% 71.4286%, transparent 71.4286% 85.7143%, var(--l) 85.7143% 100%);
          background-size: 50px 20px, 50px 20px, 50px 80px, 50px 80px, 50px 80px, 50px 80px, 50px 80px, 50px 80px;
          background-position-x: 4px, 54px,
            calc(var(--w) * 1 + 4px), calc(var(--w) * 1 + 54px),
            calc(var(--w) * 2 + 4px), calc(var(--w) * 2 + 54px),
            calc(var(--w) * 3 + 4px), calc(var(--w) * 3 + 54px),
            calc(var(--w) * 4 + 4px), calc(var(--w) * 4 + 54px);
          background-repeat: repeat-y;
          height: 100%;
          width: 100%;
        }

        @keyframes weee {
          to {
            background-position-y: 800px, 800px, 1040px, 1040px, 1360px, 1360px, 1040px, 1040px;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
