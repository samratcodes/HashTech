'use client'
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import HeroSectionText from './HeroSectionText';
import Navbar from '../Navbar';
import StatsSection from './StatsSection';

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix rain effect
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F0';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = '#';
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [mounted]);

  return (
    <div className="relative w-full h-screen min-h-[600px] overflow-hidden flex flex-col bg-black">
      {mounted && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-0"
          style={{ opacity: 0.7 }}
        />
      )}
      
      {/* Additional overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-0"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center flex-1">
        <HeroSectionText />
      </div>
      
      <div className="relative z-10 pb-8">
        <StatsSection />
      </div>

    </div>
  );
};

export default HeroSection;
