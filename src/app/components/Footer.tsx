import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-t from-black via-gray-900 to-gray-800 text-white border-t border-primary/20 py-12 px-4 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8 min-h-[180px]">
        {/* Logo and Brand */}
        <div className="flex flex-col items-center md:items-start gap-4 md:w-1/3">
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" alt="HashTech Logo" width={40} height={40} className="rounded-full bg-white p-1" />
            <span className="text-xl font-bold text-primary tracking-wide">Hash Tech</span>
          </div>
          <p className="text-gray-400 text-sm max-w-xs text-center md:text-left">Empowering your brand with secure, simple, and smart digital solutions.</p>
        </div>
        {/* Footer Links - 3 Columns */}
        <div className="flex flex-col sm:flex-row gap-8 w-full md:w-2/3 justify-center md:justify-end">
          {/* Company */}
          <div className="flex flex-col gap-2 min-w-[120px]">
            <span className="font-semibold text-primary mb-2">Company</span>
            <Link href="/aboutus" className="hover:text-accent transition-colors">About</Link>
            <Link href="/projects" className="hover:text-accent transition-colors">Projects</Link>
            <Link href="/aboutus" className="hover:text-accent transition-colors">Services</Link>
            <Link href="/careers" className="hover:text-accent transition-colors">Careers</Link>
            <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
          </div>
          {/* Resources */}
          <div className="flex flex-col gap-2 min-w-[120px]">
            <span className="font-semibold text-primary mb-2">Resources</span>
            <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
            <Link href="/faq" className="hover:text-accent transition-colors">FAQ</Link>
            <Link href="/support" className="hover:text-accent transition-colors">Support</Link>
            <Link href="/partners" className="hover:text-accent transition-colors">Partners</Link>
            <Link href="/newsletter" className="hover:text-accent transition-colors">Newsletter</Link>
          </div>
          {/* Legal */}
          <div className="flex flex-col gap-2 min-w-[120px]">
            <span className="font-semibold text-primary mb-2">Legal</span>
            <Link href="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-accent transition-colors">Cookie Policy</Link>
            <Link href="/disclaimer" className="hover:text-accent transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-xs text-gray-400 text-center mt-8">
        &copy; {new Date().getFullYear()} Hash Tech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
