'use client'
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';
import { FaLightbulb, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Navbar from '@/app/components/Navbar';
import TeamCTA from '@/app/components/LandingPage/TeamCTA';

interface Project {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  link: string;
  github?: string;
  technologies?: string[];
  category?: string;
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
      className={`relative group cursor-pointer ${className}`}
      onMouseEnter={() => onMouseEnter(project.id)}
      onMouseLeave={onMouseLeave}
    >
      <Image
        src={project.src}
        alt={project.alt}
        fill
        quality={100}
        className={`rounded-lg object-cover p-4 transition-all duration-300 ${
          isOtherHovered ? 'blur-sm scale-95' : ''
        } ${isHovered ? 'scale-105' : ''}`}
      />
      
      {/* Category badge */}
      {project.category && (
        <div className={`absolute top-6 right-6 z-10 bg-primary/80 text-white px-3 py-1 rounded-full text-xs font-semibold ${
          isOtherHovered ? 'blur-sm scale-95' : ''
        }`}>
          {project.category}
        </div>
      )}
      
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
            className="text-white text-sm mb-3 font-semibold bg-black/10 rounded-3xl w-max p-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {project.description}
          </motion.p>
          
          {/* Technologies */}
          {project.technologies && (
            <motion.div
              className="flex flex-wrap gap-2 mb-3"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              {project.technologies.map((tech, index) => (
                <span key={index} className="bg-primary/20 text-primary text-xs px-2 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </motion.div>
          )}
          
          <motion.div
            className="flex gap-2"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Link 
              href={project.link}
              className="bg-primary px-4 py-2 rounded-full text-sm font-bold shadow-lg hover:scale-105 hover:bg-blue-800 text-white transition-transform duration-200 flex items-center gap-2"
            >
              <FaExternalLinkAlt className="text-xs" />
              View Live
            </Link>
            {project.github && (
              <Link 
                href={project.github}
                className="bg-gray-800 px-4 py-2 rounded-full text-sm font-bold shadow-lg hover:scale-105 hover:bg-gray-700 text-white transition-transform duration-200 flex items-center gap-2"
              >
                <FaGithub className="text-xs" />
                Code
              </Link>
            )}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

const ProjectsPage = () => {
  const [hoveredImage, setHoveredImage] = useState<string | null>('Ram LLC');
  const [lastHoveredImage, setLastHoveredImage] = useState<string>('Research');

  const projects: Project[] = [
    {
      id: 'Ram LLC',
      src: "/Ramllc.png",
      alt: "Ram LLC Academy",
      title: "Ram LLC Academy",
      description: "Online Courses Webapp",
      link: "https://ramllcacademy.com/",
      category: "Web App",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 'Portfolized',
      src: "/Portfolized.png",
      alt: "Portfolized",
      title: "Portfolized",
      description: "Designs Quality Portfolio websites",
      link: "https://portfolized.vercel.app/",
      category: "Portfolio",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"]
    }, 
    {
      id: 'Research',
      src: "/biratSapkota.png",
      alt: "Researcher",
      title: "Researcher",
      description: "Personal website for researcher",
      link: "https://dada-tan.vercel.app/",
      category: "Personal",
      technologies: ["React", "CSS3", "JavaScript"]
    },
    {
      id: 'Portfolio',
      src: "/samratSapkota.png",
      alt: "Portfolio",
      title: "Software Engineer",
      description: "Portfolio website for software engineer",
      link: "https://samratsapkota.com.np",
      category: "Portfolio",
      technologies: ["Next.js", "TypeScript", "Tailwind"]
    },
    {
      id: 'DopeDeals',
      src: "/Dopedeals.png",
      alt: "Dope Deals",
      title: "Dope Deals",
      description: "An online Ecommerce platform",
      link: "https://dopedeals.netlify.app/",
      category: "E-commerce",
      technologies: ["React", "Firebase", "Stripe"]
    },
    {
      id: 'HashTech',
      src: "/hashtech.png",
      alt: "HashTech",
      title: "HashTech",
      description: "Smart, Simple, Secure",
      link: "/",
      category: "Company",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"]
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
    <>
      <div className="bg-black min-h-screen">
        {/* Hero Section */}
        <div className="py-20 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <FaLightbulb className="text-primary text-sm" />
              <span className="text-primary text-sm font-medium">Our Portfolio</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
                Our
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary to-white bg-clip-text text-transparent">
                Projects
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
              Explore our diverse portfolio of digital solutions, from web applications to e-commerce platforms. 
              Each project represents our commitment to innovation, quality, and client success.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="w-full px-7 py-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex flex-col md:flex-row w-full gap-4 md:h-screen text-xs sm:text-base"
            >
              {/* Left Column */}
              <div className="w-full md:w-[70%] flex h-full flex-col gap-4">
                {/* Top Image */}
                <ProjectCard
                  project={projects[0]}
                  hoveredImage={hoveredImage}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="h-[200px] md:h-[30%]"
                />

                {/* Bottom Images */}
                <div className="relative flex flex-col md:flex-row h-[400px] md:h-[70%] w-full gap-4">
                  <ProjectCard
                    project={projects[1]}
                    hoveredImage={hoveredImage}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="h-1/2 md:h-full w-full md:w-1/2"
                  />
                  
                  <div className="relative flex flex-row md:flex-col h-1/2 md:h-full w-full md:w-1/2 gap-4">
                    <ProjectCard
                      project={projects[2]}
                      hoveredImage={hoveredImage}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      className="w-1/2 md:w-full h-full md:h-1/2"
                    />
                    <ProjectCard
                      project={projects[3]}
                      hoveredImage={hoveredImage}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      className="w-1/2 md:w-full h-full md:h-1/2"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="w-full md:w-[30%] flex h-full flex-col gap-4 mt-4 md:mt-0">
                <ProjectCard
                  project={projects[4]}
                  hoveredImage={hoveredImage}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="h-[150px] md:h-1/2"
                />
                <ProjectCard
                  project={projects[5]}
                  hoveredImage={hoveredImage}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="h-[150px] md:h-1/2"
                />
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-center mt-20"
          >
<TeamCTA/>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
