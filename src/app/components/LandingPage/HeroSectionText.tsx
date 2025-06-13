'use client'
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const HeroSectionText = () => {
  return (
       <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl sm:text-7xl font-extrabold text-[#0D71BA] drop-shadow-lg"
      >
        Hash Tech
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-4 text-xl sm:text-2xl text-blue-400 font-semibold"
      >
        Secure, Simple & Smart Solutions
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-6 max-w-xl text-base font-medium sm:text-lg text-blue-200"
      >
        Empower your brand with cutting-edge digital solutions. Let us help you navigate the tech landscape with confidence and clarity.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="mt-8"
      >
        <Link href="/get-started">
          <button
            className="relative flex items-center gap-2 px-8 py-3 border-2 border-blue-500 font-semibold rounded-full overflow-hidden cursor-pointer
              text-base transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group text-blue-500 shadow-lg
              hover:bg-blue-600 hover:text-white hover:shadow-xl active:scale-95"
          >
            <svg
              className="absolute left-5 w-5 fill-current z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:fill-white"
              viewBox="0 0 24 24"
            >
              <path d="M16.1716 11L10.8076 5.6359L12.2218 4.2217L20 12L12.2218 19.778L10.8076 18.3638L16.1716 13H4V11H16.1716Z" />
            </svg>
            <span className="relative z-10 ml-8">Free Consultation</span>
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default HeroSectionText;