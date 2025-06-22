'use client'
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCode, FaPaintBrush, FaSearch, FaMobileAlt, FaPenNib } from 'react-icons/fa';

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

        .background-icon {
          transition: all 0.3s ease-in-out;
        }

        .card:hover .background-icon {
          filter: blur(8px);
          opacity: 0.1;
        }

        .text-content {
          transition: all 0.3s ease-in-out;
          transform: translateY(0);
          position: absolute;
          bottom: 20px;
          left: 20px;
          right: 20px;
        }

        .card:hover .text-content {
          transform: translateY(-20px);
          bottom: 50%;
          transform: translateY(50%);
        }
      `}</style>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.5, delay }}
        className="relative w-[240px] h-[280px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-[25px] px-6 text-white transition-all duration-500 ease-in-out shadow-xl hover:scale-105 hover:-translate-y-3 overflow-hidden shimmer-effect card-glow border-2 border-primary card"
      >
        {/* Floating Icon in Background */}
        <div className="text-[100px] absolute z-10 text-primary/30 float-animation transition-all duration-500 ease-in-out right-4 top-6 background-icon">
          {icon}
        </div>

        {/* Main Card Content */}
        <div className="relative z-20 flex flex-col gap-4 text-content">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xl font-bold gradient-text">{title}</p>
              <p className="text-xs font-semibold text-primary leading-relaxed mt-1">{subtitle}</p>
            </div>
            <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-full w-12 h-12 flex items-center justify-center ml-2">
              <div className="text-white text-lg">
                {icon}
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-[#FFA500] rounded-full opacity-60"></div>
        <div className="absolute bottom-4 left-4 w-1 h-1 bg-[#FFA500] rounded-full opacity-40"></div>
      </motion.div>
    </>
  );
};

const WhatWeDo = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black to-white text-white py-10 px-6 flex md:flex-row-reverse flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="text-center w-96 mb-16 mt-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
          Transforming Ideas Into Reality
        </h2>
        <p className="text-base md:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
          Web, Mobile, Marketing, Design.
        </p>
      </motion.div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
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
  );
};

export default WhatWeDo;
