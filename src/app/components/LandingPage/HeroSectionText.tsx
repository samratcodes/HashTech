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
  const [currentWord, setCurrentWord] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const words = ['Smart', 'Secure', 'Simple'];

  useEffect(() => {
    const typeWord = async (word: string) => {
      setIsTyping(true);
      setIsDeleting(false);
      setDisplayText('');
      
      // Type the word character by character
      for (let i = 0; i < word.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 80));
        setDisplayText(word.substring(0, i + 1));
      }
      
      setIsTyping(false);
      await new Promise(resolve => setTimeout(resolve, 1500));
    };

    const deleteWord = async (word: string) => {
      setIsDeleting(true);
      setIsTyping(false);
      
      // Delete the word character by character
      for (let i = word.length; i >= 0; i--) {
        await new Promise(resolve => setTimeout(resolve, 50));
        setDisplayText(word.substring(0, i));
      }
      
      setIsDeleting(false);
      await new Promise(resolve => setTimeout(resolve, 300));
    };

    const cycleWords = async () => {
      while (true) {
        // Cycle through individual words
        for (let i = 0; i < words.length; i++) {
          await typeWord(words[i]);
          await deleteWord(words[i]);
        }
      }
    };

    const timer = setTimeout(() => {
      cycleWords();
    }, 1500); // Start after the main title animation

    return () => clearTimeout(timer);
  }, []);

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
          className="hidden sm:inline-block px-6 py-2 mb-6 text-sm font-semibold text-white bg-accent/70 rounded-full backdrop-blur-md shadow-lg "
        >
          Welcome to the Future of Tech
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="relative"> 
          <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-[#4169e1] to-accent drop-shadow-lg"
        >
          Hash Tech
        </motion.h1>
                       <motion.div
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </span>
        </motion.h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-8 text-2xl sm:text-3xl font-bold text-center min-h-[4rem] flex items-center justify-center"
      >
        <span className="relative inline-block align-bottom">
          <span className="bg-clip-text text-white drop-shadow-lg relative z-10">
            {displayText}
            {/* Animated Underline absolutely positioned under text */}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: (isTyping || isDeleting) ? 1 : 0.8 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute left-0 bottom-0 h-[0.18em] w-full bg-gradient-to-r from-blue-400 via-[#4169e1] to-accent rounded-full shadow-lg z-0"
              style={{
                opacity: displayText.length > 0 ? 1 : 0,
                pointerEvents: 'none',
              }}
            />
          </span>
          {(isTyping || isDeleting) && (
            <motion.span 
              className="inline-block w-1 h-6 bg-gradient-to-b from-blue-400 to-accent ml-2 rounded-full shadow-lg align-bottom"
              animate={{ 
                opacity: [1, 0, 1],
                scaleY: [1, 1.3, 1],
                boxShadow: [
                  "0 0 10px rgba(59, 130, 246, 0.8)",
                  "0 0 20px rgba(59, 130, 246, 0.4)",
                  "0 0 10px rgba(59, 130, 246, 0.8)"
                ]
              }}
              transition={{ 
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )}
        </span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-8 text-base sm:text-lg text-white text-center max-w-lg mx-auto leading-relaxed font-medium bg-black/20 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/10 shadow-lg"
      >
        Book free IT consultations and marketing strategies
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="mt-8 sm:mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6 justify-center w-full max-w-md"
      >
        <Link href="/contact">
          <button
            className={`relative flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-primary hover:scale-105 font-semibold rounded-full overflow-hidden cursor-pointer
              text-base transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
              group text-white shadow-[0_0_20px_rgba(59,130,246,0.3)]
              hover:bg-primary hover:text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] active:scale-95 backdrop-blur-sm w-full sm:w-auto`}
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
        
        <Link href="/aboutus">
          <button
            className="hidden sm:relative sm:flex items-center gap-2 px-8 py-3 font-semibold rounded-full overflow-hidden cursor-pointer
              text-base transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group text-gray-300 hover:text-white
              hover:bg-white/10 backdrop-blur-md active:scale-95 border border-white/20 shadow-lg hover:shadow-xl"
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

      {/* Scroll Indicator - hidden on mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSectionText;

