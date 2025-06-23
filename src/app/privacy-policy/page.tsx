import React from 'react';
import Link from 'next/link';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-center py-20 px-4">
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-2xl p-10 shadow-xl border border-primary/20 flex flex-col items-center max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-primary mb-6 text-center">Privacy Policy</h1>
        <div className="text-gray-300 text-base mb-8 text-left w-full ">
          <p className="mb-4">
            At <strong>Hash Tech</strong>, we are committed to protecting your privacy. This Privacy Policy outlines how we handle your information when you interact with our website.
          </p>

          <h2 className="text-xl font-semibold text-white mb-2">1. Information We Collect</h2>
          <p className="mb-4">
            We do not collect any personal data unless you voluntarily provide it via our contact form. This may include:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Your name</li>
            <li>Your email address</li>
            <li>Your message or inquiry</li>
          </ul>

          <h2 className="text-xl font-semibold text-white mb-2">2. How We Use Your Information</h2>
          <p className="mb-4">
            The information you provide through the contact form is used solely to respond to your inquiries. We do not use your data for marketing or share it with third parties.
          </p>

          <h2 className="text-xl font-semibold text-white mb-2">3. Data Protection</h2>
          <p className="mb-4">
            We implement standard security practices to ensure your information is safe. However, no online transmission is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-xl font-semibold text-white mb-2">4. Cookies and Tracking</h2>
          <p className="mb-4">
            Our website does not use cookies or tracking technologies.
          </p>

          <h2 className="text-xl font-semibold text-white mb-2">5. Third-Party Sharing</h2>
          <p className="mb-4">
            We do not share your personal information with third parties.
          </p>

          <h2 className="text-xl font-semibold text-white mb-2">6. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this policy or the data we hold, feel free to contact us at <span className="text-accent">your@email.com</span>.
          </p>
        </div>
        <Link href="/" className="bg-primary hover:bg-accent text-white font-semibold px-6 py-2 rounded-full transition-all duration-200">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
