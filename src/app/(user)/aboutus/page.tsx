'use client'
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCode, FaPaintBrush, FaSearch, FaMobileAlt, FaPenNib, FaUsers, FaLightbulb } from 'react-icons/fa';
import StatsSection from '@/app/components/LandingPage/StatsSection';
import TeamCTA from '@/app/components/LandingPage/TeamCTA';

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

const stats = [
  { number: '50+', label: 'Projects Completed' },
  { number: '25+', label: 'Happy Clients' },
  { number: '3+', label: 'Years Experience' },
  { number: '100%', label: 'Client Satisfaction' },
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
        <div className="absolute top-4 right-4 w-2 h-2 bg-accent rounded-full opacity-60"></div>
        <div className="absolute bottom-4 left-4 w-1 h-1 bg-accent rounded-full opacity-40"></div>
      </motion.div>
    </>
  );
};

const WhatWeDo = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen w-full bg-black text-white py-10 px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <FaLightbulb className="text-primary text-sm" />
            <span className="text-primary text-sm font-medium">About HashTech</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
              We Create
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-white bg-clip-text text-transparent">
              Digital Magic
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            We're a passionate team of designers, developers, and strategists dedicated to crafting 
            transformative digital experiences that drive real business results.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-16">
           <StatsSection/>
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 mb-20 max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center">
              <FaUsers className="text-white text-xl" />
            </div>
            <h2 className="text-3xl font-bold text-white">Our Mission</h2>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            To empower businesses with innovative digital solutions that not only meet their current needs 
            but also position them for future growth. We believe in the power of technology to transform 
            ideas into impactful digital experiences that connect, engage, and inspire.
          </p>
        </motion.div>

        {/* Original Layout Section */}
        <div className="flex md:flex-row-reverse flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="text-center w-96 mb-16 mt-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              About Us
            </h2>
            <p className="text-base md:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
              We're a team of designers, developers, and strategists passionate about crafting transformative digital experiences. Our values drive our work—innovation, collaboration, and a deep respect for the craft.
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
        <TeamCTA/>
      </div>

    </>
  );
};

export default WhatWeDo;
