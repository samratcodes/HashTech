import React from 'react';
import Link from 'next/link';

const CookiePolicyPage = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-center py-20 px-4">
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-2xl p-10 shadow-xl border border-primary/20 flex flex-col items-center max-w-2xl w-full">
        <h1 className="text-4xl font-bold text-primary mb-6 text-center">Cookie Policy</h1>
        <div className="text-gray-300 text-base mb-8 text-left w-full max-w-xl">
          <p className="mb-4">
            At <strong>Hash Tech</strong>, we are committed to protecting your privacy. This Cookie Policy explains what cookies are, how we use them, and how you can manage your preferences.
          </p>

          <h2 className="text-xl font-semibold text-white mb-2">1. What Are Cookies?</h2>
          <p className="mb-4">
            Cookies are small text files that are stored on your device when you visit a website. They help improve user experience and collect anonymous data for functionality and performance purposes.
          </p>

          <h2 className="text-xl font-semibold text-white mb-2">2. How We Use Cookies</h2>
          <p className="mb-4">
            Currently, <strong>Hash Tech</strong> does not use cookies for analytics, marketing, or tracking purposes. Only essential cookies may be used to ensure the basic functionality of the website, such as navigation and secure form submissions.
          </p>

          <h2 className="text-xl font-semibold text-white mb-2">3. Third-Party Cookies</h2>
          <p className="mb-4">
            Our site does not use any third-party services that place cookies on your device. If this changes in the future, this policy will be updated accordingly.
          </p>

          <h2 className="text-xl font-semibold text-white mb-2">4. Managing Cookie Preferences</h2>
          <p className="mb-4">
            Since we do not use non-essential cookies, there is no need for cookie consent at this time. If this changes, you will be provided with tools to manage your cookie preferences.
          </p>

          <h2 className="text-xl font-semibold text-white mb-2">5. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Cookie Policy, please contact us at <span className="text-accent">your@email.com</span>.
          </p>
        </div>
        <Link
          href="/"
          className="bg-primary hover:bg-accent text-white font-semibold px-6 py-2 rounded-full transition-all duration-200"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default CookiePolicyPage;
