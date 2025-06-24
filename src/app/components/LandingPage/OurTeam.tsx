'use client'
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import TeamCTA from './TeamCTA';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const teamMembers: TeamMember[] = [
{
    name: "Chandan Dhakal",
    role: "CEO / Backend Developer",
    image: "/Chandan.jpeg",
    bio: "Backend developer focused on building robust, scalable, and secure server-side applications. Skilled in designing APIs, managing databases, and optimizing performance for seamless user experiences.",
    social: {
      github: "https://github.com/chandandhakal",
      linkedin: "https://linkedin.com/in/chandandhakal",
      email: "chandandhakal18@gmail.com"
    }
  },
  {
    name: "Samrat Sapkota",
    role: "CTO / FullStack Developer",
    image: "/samrat.jpg",
    bio: "Full-stack developer skilled in Next.js, Node.js, and databases like MongoDB and PostgreSQL. Builds scalable web apps and understands DevOps workflows.",
    social: {
      github: "https://github.com/samratcodes",
      linkedin: "https://www.linkedin.com/in/samrat-sapkota-08b107253/",
      email: "samratcodess@gmail.com"
    }
  },
  {
    name: "Sanskriti Poudel",
    role: "Graphics Designer",
    image: "/sanskriti.jpeg",
    bio: "Graphic designer focused on building strong brand visuals. Passionate about clear design and creative expression.",
    social: {
      github: "https://github.com/Sanskriti-poudel",
      linkedin: "https://www.linkedin.com/in/sanskriti-poudel-a52b45296",
      email: "sanskritipoudel36@gmail.com"
    }
  },
  {
    name: "Prithak Adhikari",
    role: "Backend Developer",
    image: "/prithak.jpg",
    bio: "Backend developer skilled in Django, Node.js, PHP, and a range of databases including MySQL, PostgreSQL, and MongoDB. Experienced in building robust APIs and understands DevOps for streamlined deployment and infrastructure.",
    social: {
      github: "https://github.com/PrithakADHI",
      linkedin: "https://www.linkedin.com/in/prithak-adhikari-55999624a/",
    }
  },
  {
    name: "Pranish Karki",
    role: "Mobile developer/Frontend Developer",
    image: "/pranish.jpg",
    bio: "Mobile and frontend developer skilled in Flutter and Next.js, focused on crafting responsive UIs and seamless user experiences with clean, maintainable code.",
    social: {
      linkedin: "https://www.linkedin.com/in/pranish-karki-820607285/",
      github: "https://github.com/Infinite172",
    }
    
  },
  // {
  //   name: "",
  //   role: "Content Strategist",
  //   image: "/api/placeholder/150/150",
  //   bio: "Content creator and strategist who crafts compelling narratives that engage audiences and drive conversions.",
  //   social: {
  //     linkedin: "https://linkedin.com/in/davidkim",
  //     twitter: "https://twitter.com/davidkim",
  //     email: "david@hashtech.com"
  //   }
  // }
];

const TeamMemberCard: React.FC<{ member: TeamMember; delay: number }> = ({ member, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [imageError, setImageError] = useState(false);

  // Get initials from name
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  // Check if image path is valid (not a placeholder API)
  const isValidImage = !member.image.includes('/api/placeholder/');

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className="group relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-2xl p-6 text-white transition-all duration-500 hover:scale-105 hover:-translate-y-2 border border-gray-600 hover:border-primary"
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Profile Image */}
      <div className="relative z-10 mb-6">
        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary to-accent p-1">
          {isValidImage && !imageError ? (
            <div className="w-full h-full rounded-full overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                width={96}
                height={96}
                className="w-full h-full object-cover"
                onError={() => setImageError(true)}
              />
            </div>
          ) : (
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-2xl font-bold text-white">
              {getInitials(member.name)}
            </div>
          )}
        </div>
      </div>

      {/* Member Info */}
      <div className="relative z-10 text-center">
        <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
        <p className="text-primary font-semibold mb-3">{member.role}</p>
        <p className="text-gray-300 text-sm leading-relaxed mb-4">{member.bio}</p>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-3">
          {member.social.github && (
            <Link
              href={member.social.github}
              passHref
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-all duration-300"
            >
              <FaGithub size={14} />
            </Link>
          )}
          {member.social.linkedin && (
            <Link
              href={member.social.linkedin}
              passHref
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-all duration-300"
            >
              <FaLinkedin size={14} />
            </Link>
          )}
          {member.social.twitter && (
            <Link
              href={member.social.twitter}
              passHref
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-all duration-300"
            >
              <FaTwitter size={14} />
            </Link>
          )}
          {member.social.email && (
            <a
              href={`mailto:${member.social.email}`}
              className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-all duration-300"
            >
              <FaEnvelope size={14} />
            </a>
          )}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full opacity-60"></div>
      <div className="absolute bottom-4 left-4 w-1 h-1 bg-accent rounded-full opacity-40"></div>
    </motion.div>
  );
};

const OurTeam = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Meet Our Amazing Team
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Creative. Skilled. United.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              member={member}
              delay={index * 0.2}
            />
          ))}
        </div>

        {/* Call to Action */}
        <TeamCTA />
      </div>
    </div>
  );
};

export default OurTeam;
