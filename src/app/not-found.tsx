import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import Link from 'next/link';
import Navbar from './components/Navbar';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-center py-20 px-4">
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-2xl p-10 shadow-xl border border-primary/20 flex flex-col items-center max-w-lg w-full">
        <FaExclamationTriangle className="text-6xl text-accent mb-6" />
        <h1 className="text-6xl font-extrabold text-primary mb-2 text-center">404</h1>
        <h2 className="text-2xl font-bold mb-4 text-center">Page Not Found</h2>
        <p className="text-lg text-gray-300 mb-8 text-center">
          Oops! The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className="bg-primary hover:bg-accent text-white font-semibold px-6 py-2 rounded-full transition-all duration-200">Back to Home</Link>
      </div>
    </div>
  );
};

export default NotFoundPage; 