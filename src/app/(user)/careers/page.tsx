import React from 'react';
import { FaRegSmileBeam } from 'react-icons/fa';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';

const CareersPage = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-center py-20 px-4">
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-2xl p-10 shadow-xl border border-primary/20 flex flex-col items-center max-w-lg w-full">
        <FaRegSmileBeam className="text-6xl text-accent mb-6" />
        <h1 className="text-4xl font-bold text-primary mb-4 text-center">Careers at Hash Tech</h1>
        <p className="text-lg text-gray-300 mb-6 text-center">
          We're not hiring right now, but we're always excited to connect with talented people!
        </p>
        <p className="text-base text-gray-400 mb-8 text-center">
          Check back soon for new opportunities, or feel free to <Link href="/contact" className="text-accent hover:underline">contact us</Link> and introduce yourself for future consideration.
        </p>
        <Link href="/" className="bg-primary hover:bg-accent text-white font-semibold px-6 py-2 rounded-full transition-all duration-200">Back to Home</Link>
      </div>
    </div>
  );
};

export default CareersPage; 