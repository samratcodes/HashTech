'use client'
import Link from 'next/link';
import { useState } from 'react';
import { FaHome, FaInfoCircle, FaCogs, FaQuestionCircle, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrolled = true;

  const textColor = 'text-blue-400';
  const hoverColor = 'hover:text-blue-300';
  const shadowColor = 'shadow-[0_0_0_2px_#60A5FA]';
  const circleColor = 'bg-blue-400';

  return (
    <>
      <nav className="sticky top-0 w-full z-50 transition-all duration-300 h-16 bg-transparent">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className={`text-xl font-bold ${textColor}`}>Hash Tech</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className={`flex space-x-6 font-semibold text-sm ${textColor}`}>
                <Link href="#" className={`${hoverColor} transition duration-200 flex items-center gap-1`}>
                  <FaHome className='text-xl' /> Home
                </Link>
                <Link href="#" className={`${hoverColor} transition duration-200 flex items-center gap-1`}>
                  <FaInfoCircle className='text-xl' /> About us
                </Link>
                <Link href="#" className={`${hoverColor} transition duration-200 flex items-center gap-1`}>
                  <FaCogs className='text-xl'/> Projects
                </Link>
                <Link href="#" className={`${hoverColor} transition duration-200 flex items-center gap-1`}>
                  <FaQuestionCircle className='text-xl' /> Contact us
                </Link>
              </div>

              {/* CTA Button */}
              <Link href="/get-started">
                <button
                  className={`relative flex items-center gap-2 px-6 py-1 border-2 border-blue-400 hover:scale-105 font-semibold rounded-full overflow-hidden cursor-pointer
                    text-base transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
                    group ${textColor} ${shadowColor}
                    hover:bg-blue-500 hover:text-white hover:shadow-xl active:scale-95`}
                >
                  <svg
                    className="absolute left-[-25%] w-5 fill-current z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-1 group-hover:fill-white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16.1716 11L10.8076 5.6359L12.2218 4.2217L20 12L12.2218 19.778L10.8076 18.3638L16.1716 13H4V11H16.1716Z" />
                  </svg>
                  <span className="relative z-10 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] translate-x-[-12px] group-hover:translate-x-2 group-hover:text-white">
                    Free Consultation
                  </span>
                  <span
                    className={`absolute top-1/2 left-1/2 z-0 w-5 h-5 rounded-full opacity-0 transform -translate-x-1/2 -translate-y-1/2
                      transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[200px] group-hover:h-[200px] group-hover:opacity-100 ${circleColor}`}
                  ></span>
                  <svg
                    className="absolute right-3 w-5 fill-current z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:right-[-25%] group-hover:fill-white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16.1716 11L10.8076 5.6359L12.2218 4.2217L20 12L12.2218 19.778L10.8076 18.3638L16.1716 13H4V11H16.1716Z" />
                  </svg>
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <FaTimes className={`text-2xl ${textColor}`} />
              ) : (
                <FaBars className={`text-2xl ${textColor}`} />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-transparent backdrop-blur-md shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col p-6 space-y-8">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-blue-400">Hash Tech</span>
            <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
              <FaTimes className="text-2xl text-blue-400" />
            </button>
          </div>
          
          <div className="flex flex-col space-y-6">
            <Link href="#" className="flex items-center gap-3 text-blue-400 hover:text-blue-300" onClick={() => setIsMenuOpen(false)}>
              <FaHome className='text-xl' /> Home
            </Link>
            <Link href="#" className="flex items-center gap-3 text-blue-400 hover:text-blue-300" onClick={() => setIsMenuOpen(false)}>
              <FaInfoCircle className='text-xl' /> About
            </Link>
            <Link href="#" className="flex items-center gap-3 text-blue-400 hover:text-blue-300" onClick={() => setIsMenuOpen(false)}>
              <FaCogs className='text-xl'/> Projects
            </Link>
            <Link href="#" className="flex items-center gap-3 text-blue-400 hover:text-blue-300" onClick={() => setIsMenuOpen(false)}>
              <FaQuestionCircle className='text-xl' /> Contact
            </Link>
          </div>

          <Link href="/get-started" className="mt-8">
            <button
              className="w-full px-6 py-2 bg-blue-400 text-white font-semibold rounded-full hover:bg-blue-500 transition duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Free Consultation
            </button>
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;