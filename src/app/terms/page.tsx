import React from 'react';
import Link from 'next/link';

const TermsPage = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-center py-20 px-4">
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-2xl p-10 shadow-xl border border-primary/20 flex flex-col items-center max-w-2xl w-full">
        <h1 className="text-4xl font-bold text-primary mb-6 text-center">Terms of Service</h1>
        <div className="text-gray-300 text-base mb-8 text-left w-full max-w-xl">
          <p className="mb-4">
            Welcome to <strong>Hash Tech</strong>. By accessing or using our website, you agree to be bound by the following Terms of Service. If you do not agree to these terms, please do not use our site.
          </p>

          <h2 className="text-xl font-semibold text-white mb-2">1. Use of Website</h2>
          <p className="mb-4">
            Our website is intended for informational purposes only. You may browse the site and contact us through the form provided. Any misuse, including attempts to disrupt the functionality or access restricted areas, is strictly prohibited.
          </p>

          <h2 className="text-xl font-semibold text-white mb-2">2. User Responsibilities</h2>
          <p className="mb-4">
            You agree not to use this website for any unlawful activities. If you submit information via the contact form, it must be accurate and provided in good faith.
          </p>

          <h2 className="text-xl font-semibold text-white mb-2">3. Intellectual Property</h2>
          <p className="mb-4">
            All content on this website, including text, images, and branding, is the property of Hash Tech and protected by intellectual property laws. You may not reproduce, distribute, or use our content without written permission.
          </p>

          <h2 className="text-xl font-semibold text-white mb-2">4. Disclaimers</h2>
          <p className="mb-4">
            We make every effort to ensure the accuracy of the information on our site. However, we do not guarantee that all content is free of errors or up to date. The site is provided "as is" without warranties of any kind.
          </p>

          <h2 className="text-xl font-semibold text-white mb-2">5. Limitation of Liability</h2>
          <p className="mb-4">
            Hash Tech will not be liable for any damages resulting from your use or inability to use the website.
          </p>

          <h2 className="text-xl font-semibold text-white mb-2">6. Contact</h2>
          <p className="mb-4">
            If you have any questions about these terms, please contact us at <span className="text-accent">your@email.com</span>.
          </p>
        </div>
        <Link href="/" className="bg-primary hover:bg-accent text-white font-semibold px-6 py-2 rounded-full transition-all duration-200">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default TermsPage;
