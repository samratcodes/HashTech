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
    role: "CEO ",
    image: "/Chandan.jpg",
    bio: "Full-stack developer with 8+ years of experience in modern web technologies. Passionate about creating scalable and user-friendly applications.",
    social: {
      github: "https://github.com/alexjohnson",
      linkedin: "https://linkedin.com/in/alexjohnson",
      twitter: "https://twitter.com/alexjohnson",
      email: "alex@hashtech.com"
    }
  },
  {
    name: "Samrat Sapkota",
    role: "CTO / FullStack Developer",
    image: "/samrat.jpg",
    bio: "Creative designer focused on creating intuitive and beautiful user experiences. Expert in Figma, Adobe Creative Suite, and design systems.",
    social: {
      linkedin: "https://linkedin.com/in/sarahchen",
      twitter: "https://twitter.com/sarahchen",
      email: "sarah@hashtech.com"
    }
  },
  {
    name: "Michael Rodriguez",
    role: "Digital Marketing Specialist",
    image: "/api/placeholder/150/150",
    bio: "Marketing expert with deep knowledge in SEO, SEM, and social media strategies. Helps businesses grow their digital presence effectively.",
    social: {
      linkedin: "https://linkedin.com/in/michaelrodriguez",
      twitter: "https://twitter.com/michaelrodriguez",
      email: "michael@hashtech.com"
    }
  },
  {
    name: "Prithak Adhikari",
    role: "Backend Developer",
    image: "/prithak.jpg",
    bio: "iOS and Android developer with expertise in React Native and Flutter. Creates seamless mobile experiences across platforms.",
    social: {
      github: "https://github.com/emilywatson",
      linkedin: "https://linkedin.com/in/emilywatson",
      email: "emily@hashtech.com"
    }
  },
  {
    name: "Pranish Karki",
    role: "Mobile developer",
    image: "/pranish.jpg",
    bio: "Experienced project manager who ensures smooth delivery of projects on time and within budget while maintaining high quality standards.",
    social: {
      linkedin: "https://linkedin.com/in/lisathompson",
      email: "lisa@hashtech.com"
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
            <a
              href={member.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-all duration-300"
            >
              <FaGithub size={14} />
            </a>
          )}
          {member.social.linkedin && (
            <a
              href={member.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-all duration-300"
            >
              <FaLinkedin size={14} />
            </a>
          )}
          {member.social.twitter && (
            <a
              href={member.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-all duration-300"
            >
              <FaTwitter size={14} />
            </a>
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
