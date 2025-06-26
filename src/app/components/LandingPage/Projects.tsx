'use client'
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Project {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  link: string;
}

interface ProjectCardProps {
  project: Project;
  hoveredImage: string | null;
  onMouseEnter: (id: string) => void;
  onMouseLeave: () => void;
  className?: string;
}

const ProjectCard = ({ project, hoveredImage, onMouseEnter, onMouseLeave, className = "" }: ProjectCardProps) => {
  const isHovered = hoveredImage === project.id;
  const isOtherHovered = hoveredImage && hoveredImage !== project.id;

  return (
    <div 
      className={`relative group cursor-pointer bg-primary/20  rounded-2xl ${className}`}
      onMouseEnter={() => onMouseEnter(project.id)}
      onMouseLeave={onMouseLeave}
    >
      <Image
        src={project.src}
        alt={project.alt}
        fill
        quality={100}
        className={`rounded-3xl object-cover p-4 transition-all duration-300 ${
          isOtherHovered ? 'blur-sm scale-95' : ''
        } ${isHovered ? 'scale-105' : ''}`}
      />
      
      {/* Title overlay - hidden when hovered */}
      <div className={`absolute bottom-4 left-4 ${isOtherHovered ? 'blur-sm scale-95' : ''} bg-black bg-opacity-50 text-white px-3 py-1 rounded z-10 ${
        isHovered ? 'hidden' : 'flex'
      }`}>
        {project.title}
      </div>

      {/* Hover overlay */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 bg-black/30 scale-105 rounded-lg flex flex-col justify-end p-4 pl-8 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.p
            className="text-white text-sm mb-3 md:flex hidden font-semibold bg-black/10 rounded-3xl w-max p-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {project.description}
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Link 
              href={project.link}
              className="bg-primary px-2 py-2 md:px-5 md:py-2 rounded-full text-sm font-bold shadow-lg hover:scale-105 hover:bg-blue-800 text-white transition-transform duration-200 w-fit"
            >
              View Project
            </Link>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default function Home() {
  const [hoveredImage, setHoveredImage] = useState<string | null>('Ram LLC');
  const [lastHoveredImage, setLastHoveredImage] = useState<string>('Research');

  const projects: Project[] = [
    {
      id: 'Ram LLC',
      src: "/Ramllc.png",
      alt: "Ram LLC Academy",
      title: "Ram LLC Academy",
      description: "Online Courses Webapp",
      link: "https://ramllcacademy.com/"
    },
    {
      id: 'Portfolized',
      src: "/Portfolized.png",
      alt: "Portfolized",
      title: "Portfolized",
      description: "Designs Quality Porfolio websites ",
      link: "https://portfolized.vercel.app/"
    }, 
    {
      id: 'Research',
      src: "/biratSapkota.png",
      alt: "Researcher",
      title: "Researcher",
      description: "Personal website for researcher",
      link: "https://dada-tan.vercel.app/"
    },
    {
      id: 'Portfolio',
      src: "/samratSapkota.png",
      alt: "Portfolio",
      title: "Software Engineer",
      description: "Portfolio website for software engineer",
      link: "https://samratsapkota.com.np"
    },
    {
      id: 'DopeDeals',
      src: "/Dopedeals.png",
      alt: "Dope Deals",
      title: "Dope Deals",
      description: "An online Ecommerce platform",
      link: "https://dopedeals.netlify.app/"
    },
  
        {
      id: 'HashTech',
      src: "/hashtech.png",
      alt: "HashTech",
      title: "HashTech",
      description: "Smart,Simple,Secure",
      link: "/"
    },

  ];

  const handleMouseEnter = (projectId: string) => {
    setHoveredImage(projectId);
    setLastHoveredImage(projectId);
  };

  const handleMouseLeave = () => {
    setHoveredImage(lastHoveredImage);
  };

  return (
    <div className="bg-black min-h-screen border-t border-gray-600 flex md:flex-row flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl w-96 md:text-5xl font-bold text-primary mb-4">
          Our works
        </h2>
        <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Creative. Skilled. United.
        </p>
      </motion.div> 
      
      <div className="w-full px-7 py-8">
        {/* Flexbox Grid */}
        <div className="flex flex-col md:flex-row w-full gap-4 h-screen text-xs sm:text-base">
          {/* Left Column */}
          <div className="w-[100%] md:w-[70%] flex h-full flex-col gap-4">
            {/* Top Image */}
            <ProjectCard
              project={projects[0]}
              hoveredImage={hoveredImage}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="h-[30%]"
            />

            {/* Bottom Images */}
            <div className="relative flex h-[70%] w-full gap-4">
              <ProjectCard
                project={projects[1]}
                hoveredImage={hoveredImage}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="h-full w-1/2"
              />
              
              <div className="relative flex flex-col h-full w-1/2 gap-4">
                <ProjectCard
                  project={projects[2]}
                  hoveredImage={hoveredImage}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="h-1/2"
                />
                <ProjectCard
                  project={projects[3]}
                  hoveredImage={hoveredImage}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="h-1/2"
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-[100%] md:w-[30%] flex h-full flex-col gap-4">
            <ProjectCard
              project={projects[4]}
              hoveredImage={hoveredImage}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="h-1/2"
            />
            <ProjectCard
              project={projects[5]}
              hoveredImage={hoveredImage}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="h-1/2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
