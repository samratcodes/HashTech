'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, animate } from 'framer-motion';


const Counter = ({ target, label }: { target: number; label: string }) => {
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const controls = animate(count, target, {
      duration: 2,
      onUpdate: latest => setDisplay(Math.floor(latest)),
    });
    return controls.stop;
  }, [target, mounted]);

  return (
    <div className="flex flex-col items-center text-center">
      <span className="text-3xl sm:text-4xl font-bold text-primary">{mounted ? display : 0}+</span>
      <span className="text-base sm:text-lg text-gray-600">{label}</span>
    </div>
  );
};

const HeroSectionText = () => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-white bg-accent/80 rounded-full backdrop-blur-sm"
        >
          Welcome to the Future of Tech
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-[#4169e1] to-accent drop-shadow-lg"
        >
          Hash Tech
        </motion.h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-4 text-xl sm:text-2xl text-primary font-semibold text-center"
      >
        Secure, Simple & Smart Solutions
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-6 max-w-2xl text-base font-medium sm:text-lg hidden md:flex text-white/80 text-center leading-relaxed"
      >
        Empower your brand with cutting-edge digital solutions. </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="mt-8 flex flex-col sm:flex-row gap-6 justify-center"
      >
        <Link href="/get-started">
          <button
            className={`relative flex items-center gap-2 px-6 py-1 border-2 border-primary hover:scale-105 font-semibold rounded-full overflow-hidden cursor-pointer
              text-base transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
              group text-white shadow-[0_0_0_2px_theme('colors.primary')]
              hover:bg-primary hover:text-white hover:shadow-xl active:scale-95`}
          >
            <svg
              className="absolute left-[-25%] w-5 fill-current z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-1 group-hover:fill-white"
              viewBox="0 0 24 24"
            >
              <path d="M16.1716 11L10.8076 5.6359L12.2218 4.2217L20 12L12.2218 19.778L10.8076 18.3638L16.1716 13H4V11H16.1716Z" />
            </svg>
            <span className="relative z-10 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] translate-x-[-12px] group-hover:translate-x-2 group-hover:text-white">
              Free Consultation
            </span>
            <span
              className={`absolute top-1/2 left-1/2 z-0 w-5 h-5 rounded-full opacity-0 transform -translate-x-1/2 -translate-y-1/2
                transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[200px] group-hover:h-[200px] group-hover:opacity-100 bg-primary`}
            ></span>
            <svg
              className="absolute right-3 w-5 fill-current z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:right-[-25%] group-hover:fill-white"
              viewBox="0 0 24 24"
            >
              <path d="M16.1716 11L10.8076 5.6359L12.2218 4.2217L20 12L12.2218 19.778L10.8076 18.3638L16.1716 13H4V11H16.1716Z" />
            </svg>
          </button>
        </Link>
        
        <Link href="/services">
          <button
            className="relative flex items-center gap-2 px-8 py-3 font-semibold rounded-full overflow-hidden cursor-pointer
              text-base transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group text-gray-300 hover:text-white
              hover:bg-gray-700/50 backdrop-blur-sm active:scale-95"
          >
            <span>Explore Services</span>
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 absolute right-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </Link>
      </motion.div>

      {/* Replaced Support Section with Stats */}

    </div>
  );
};

export default HeroSectionText;

