'use client'
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCode, FaPaintBrush, FaSearch, FaMobileAlt, FaPenNib } from 'react-icons/fa';
import StatsSection from './StatsSection';

interface Service {
  icon: React.ReactElement<React.ComponentProps<'svg'>>;
  title: string;
  subtitle: string;
}

interface ServiceCardProps extends Service {
  delay: number;
}

const services = [
  {
    icon: <FaCode />,
    title: 'Web Development',
    subtitle: 'Full-Stack Service',
  },
  {
    icon: <FaPaintBrush />,
    title: 'Graphics Design',
    subtitle: 'Brand Identity & UI',
  },
  {
    icon: <FaSearch />,
    title: 'SEO & Digital Marketing',
    subtitle: 'Grow Traffic Fast',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Mobile Development',
    subtitle: 'iOS & Android Apps',
  },
  {
    icon: <FaPenNib />,
    title: 'Content Creation',
    subtitle: 'High-Impact Content',
  },
];

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, subtitle, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const shortTitle = title.includes("Development") ? title.split(" ")[0] + " Dev" : title;

  return (
    <>
      <style>{`
        .gradient-text {
          background: linear-gradient(45deg, #fff, #a8a8a8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .float-animation {
          animation: floatAnim 4s ease-in-out infinite;
        }

        @keyframes floatAnim {
          0% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0); }
        }

        .shimmer-effect::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transform: translateX(-100%);
          transition: 0.5s;
        }

        .shimmer-effect:hover::before {
          transform: translateX(100%);
        }

        .card-glow {
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
        }

        .card-glow:hover {
          box-shadow: 0 0 40px rgba(59, 130, 246, 0.6);
        }
      `}</style>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.5, delay }}
        className="relative w-[280px] h-[320px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-[25px] flex flex-col items-center justify-center text-white transition-all duration-500 ease-in-out shadow-xl hover:scale-105 hover:-translate-y-3 overflow-hidden shimmer-effect card-glow border border-gray-600/30"
      >
        {/* Floating Background Icon */}
        <div className="text-[120px] absolute z-10 text-white/5 float-animation transition-all duration-500 ease-in-out">
          {icon}
        </div>

        {/* Hover Content */}
        <div className="opacity-0 hover:opacity-100 z-20 transition-all duration-500 text-center px-6 transform translate-y-4 hover:translate-y-0">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
            <div className="text-2xl text-white">
              {icon}
            </div>
          </div>
          <p className="text-2xl font-bold gradient-text mb-2">{title}</p>
          <p className="text-sm text-gray-300 leading-relaxed">{subtitle}</p>
        </div>

        {/* Always-visible Bottom Label - Hidden on hover */}
        <div className="absolute bottom-6 z-30 text-lg text-white font-semibold opacity-90 transition-all duration-300 hover:opacity-0 group-hover:opacity-0">
          {shortTitle}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full opacity-60"></div>
        <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-500 rounded-full opacity-40"></div>
      </motion.div>
    </>
  );
};

const WhatWeDo = () => {
  return (<>

    <div className="min-h-screen w-full bg-gradient-to-b from-black to-white text-white py-20 px-6 flex flex-col items-center">
    <div className='-mt-48 w-full'>
    <StatsSection/>
  </div>

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="text-4xl mt-16 md:text-5xl font-bold text-center mb-16 text-blue-700"
      >
        What We Do
      </motion.h2>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            subtitle={service.subtitle}
            delay={index * 0.3}
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default WhatWeDo;
