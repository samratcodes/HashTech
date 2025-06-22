'use client'
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, animate } from 'framer-motion';
import { div } from 'framer-motion/client';

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
    <div className="flex flex-col items-center text-center ">
      <span className="text-3xl sm:text-4xl font-bold text-primary">{mounted ? display : 0}+</span>
      <span className="text-xs sm:text-lg text-primary">{label}</span>
    </div>
  );
};

const StatsSection = () => {
  return (
    <div className="w-full bg-black/70 ">
      <div className="relative w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto bg-black/70 rounded-2xl px-8 py-6 sm:px-16 sm:py-10 shadow-xl flex sm:text-2xl text-[2px]  sm:flex-row justify-center items-center gap-12 text-center"
        >
          <Counter target={120} label="Happy Clients" />
          <Counter target={85} label="Projects Delivered" />
          <Counter target={10} label="Years Experience" />
        </motion.div>
      </div>
    </div>
  );
};

export default React.memo(StatsSection); 