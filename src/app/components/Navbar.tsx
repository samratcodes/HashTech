'use client';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { FaHome, FaInfoCircle, FaCogs, FaQuestionCircle, FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

// Navbar config JSON
const navbarConfig = {
  brand: {
    name: 'Hash Tech',
    logo: '/logo.svg',
    href: '/',
  },
  links: [
    { label: 'Home', href: '/', icon: FaHome },
    { label: 'About us', href: '/aboutus', icon: FaInfoCircle },
    { label: 'Projects', href: '/projects', icon: FaCogs },
    { label: 'Contact us', href: '/contact', icon: FaQuestionCircle },
  ],
  cta: {
    label: 'Free Consultation',
    href: '/contact',
  },
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (lastScrollY.current !== scrollY) {
        setScrolled(scrollY > 10);
        lastScrollY.current = scrollY;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mounted]);

  const textColor = 'text-primary';
  const hoverColor = 'group hover:text-blue-500 transition-colors duration-300 hover:scale-105';
  const circleColor = 'bg-primary';

  return (
    <>
      <nav className={`fixed top-0 w-full rounded-b-full z-50 transition-all duration-300 h-14 ${mounted && scrolled ? 'bg-black/70 shadow-lg backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href={navbarConfig.brand.href} className="flex items-center">
              <span className={`text-xl font-bold ${textColor}`}>
                <Image src={navbarConfig.brand.logo} alt="Logo" width={32} height={32} className="h-8 w-8 mr-2" />
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className={`flex space-x-6 font-semibold text-sm ${textColor}`}>
                {navbarConfig.links.map((link) => (
                  <Link key={link.label} href={link.href} className={`group relative transition duration-200 flex items-center gap-1 ${hoverColor}`}>
                    {link.label}
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </div>

              {/* CTA Button */}
              <Link href={navbarConfig.cta.href}>
                <button
                  className={`relative flex items-center gap-2 px-6 py-1 border-2 border-primary hover:scale-105 font-semibold rounded-full overflow-hidden cursor-pointer
                    text-base transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
                    group ${textColor} 
                    hover:bg-primary-dark hover:text-white hover:shadow-xl active:scale-95`}
                >
                  <svg
                    className="absolute left-[-25%] w-5 fill-current z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:left-1 group-hover:fill-white"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16.1716 11L10.8076 5.6359L12.2218 4.2217L20 12L12.2218 19.778L10.8076 18.3638L16.1716 13H4V11H16.1716Z" />
                  </svg>
                  <span className="relative z-10 text-white transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] translate-x-[-12px] group-hover:translate-x-2 group-hover:text-white">
                    {navbarConfig.cta.label}
                  </span>
                  <span
                    className={`absolute top-1/2 left-1/2 z-0 w-5 h-5 rounded-full opacity-0 transform -translate-x-1/2 -translate-y-1/2
                      transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[200px] group-hover:h-[200px] group-hover:opacity-100 ${circleColor}`}></span>
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
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
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

      {/* Styled Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 z-40 transform transition-transform duration-500 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
         bg-black/70 shadow-2xl border-l border-blue-200 rounded-l-2xl`}
      >
        <div className="flex flex-col h-full p-6 space-y-8">
          <div className="flex justify-between items-center border-b pb-4">
            <span className="text-2xl font-extrabold text-primary tracking-wide z-100">{navbarConfig.brand.name}</span>
          </div>

          <div className="flex flex-col space-y-4">
            {navbarConfig.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-primary text-base font-medium transition-all duration-300 hover:bg-blue-200/60 hover:shadow-md`}
              >
                {link.icon && (
                  <link.icon className="text-lg text-blue-600 transition-transform duration-300 group-hover:scale-110" />
                )}
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-auto">
            <Link href={navbarConfig.cta.href} onClick={() => setIsMenuOpen(false)}>
              <button
                className="w-full px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark shadow-md hover:shadow-lg transition duration-300"
              >
                {navbarConfig.cta.label}
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <style jsx>{`
        .group:hover .group-hover\\:w-full {
          width: 100% !important;
        }
      `}</style>
    </>
  );
};

export default Navbar;
