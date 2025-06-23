import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const TeamCTA = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay: 0.5 }}
    className="text-center mt-16"
  >
    <div className="bg-gradient-to-r from-primary to-accent p-8 rounded-2xl text-white">
      <h3 className="text-2xl md:text-3xl font-bold mb-4">
        Ready to Work With Us?
      </h3>
      <p className="text-lg mb-6 text-gray-100">
        Let's discuss how our team can help bring your vision to life.
      </p>
      <Link href="/contact" className='flex items-center justify-center w-full'>
        <button
          className={`relative flex items-center justify-center gap-2 px-6 py-1 border-2 border-primary hover:scale-105 font-semibold rounded-full overflow-hidden cursor-pointer
            text-base transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
            group text-white shadow-[0_0_0_2px_theme('colors.primary')]
            hover:bg-primary hover:text-white hover:shadow-xl active:scale-95`}
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
              transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[200px] group-hover:h-[200px] group-hover:opacity-100 bg-primary`}
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
  </motion.div>
);

export default TeamCTA; 