'use client'
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';

const Counter = ({ target, label, icon }: { target: number; label: string; icon: React.ReactNode }) => {
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
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, type: "spring" }}
        className="mb-1 sm:mb-3 p-1.5 sm:p-3 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full backdrop-blur-sm border border-white/20 shadow-lg"
      >
        <motion.div
          animate={{ 
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="text-white"
        >
          {icon}
        </motion.div>
      </motion.div>
      <span className="text-lg sm:text-2xl font-bold text-white drop-shadow-lg mb-0.5 sm:mb-1">{mounted ? display : 0}+</span>
      <span className="text-[10px] sm:text-xs text-gray-200 font-medium">{label}</span>
    </div>
  );
};

const StatsSection = () => {
  return (
    <div className="w-full px-4">
      <div className="relative w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-black/40 backdrop-blur-xl rounded-xl px-6 py-6 sm:px-12 sm:py-8 shadow-2xl border border-white/20 relative overflow-hidden"
        >
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-accent/30 rounded-xl blur-xl opacity-60"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 rounded-xl"></div>
          
          {/* Content */}
          <div className="relative z-10 flex flex-row justify-center items-center gap-0 sm:gap-8 lg:gap-12 text-center w-full">
            <Counter 
              target={120} 
              label="Happy Clients" 
              icon={
                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              }
            />
            <div className="hidden sm:block w-px h-12 lg:h-16 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
            <Counter 
              target={85} 
              label="Projects Delivered" 
              icon={
                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              }
            />
            <div className="hidden sm:block w-px h-12 lg:h-16 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
            <Counter 
              target={10} 
              label="Years Experience" 
              icon={
                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              }
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default React.memo(StatsSection); 