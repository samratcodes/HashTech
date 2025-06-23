import React from 'react';
import Link from 'next/link';

const DisclaimerPage = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-center py-20 px-4">
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-2xl p-10 shadow-xl border border-primary/20 flex flex-col items-center max-w-2xl w-full">
        <h1 className="text-4xl font-bold text-primary mb-6 text-center">Disclaimer</h1>
        <div className="text-gray-300 text-base mb-8 text-left w-full max-w-xl">
          <p className="mb-4">
            The information provided by <strong>Hash Tech</strong> on this website is for general informational purposes only. All content is provided in good faith; however, we make no representation or warranty regarding the accuracy, adequacy, validity, reliability, or completeness of any information on the site.
          </p>

          <h2 className="text-xl font-semibold text-white mb-2">1. No Professional Advice</h2>
          <p className="mb-4">
            The content on this website does not constitute professional or technical advice. Users should consult with appropriate professionals before acting on any information provided.
          </p>

          <h2 className="text-xl font-semibold text-white mb-2">2. External Links Disclaimer</h2>
          <p className="mb-4">
            Our site may contain links to third-party websites or content. These are provided for convenience only, and Hash Tech does not endorse or assume responsibility for any third-party content.
          </p>

          <h2 className="text-xl font-semibold text-white mb-2">3. Limitation of Liability</h2>
          <p className="mb-4">
            Under no circumstance shall Hash Tech be liable for any loss or damage resulting from your reliance on information provided on the website or through linked third-party sites.
          </p>

          <h2 className="text-xl font-semibold text-white mb-2">4. Contact</h2>
          <p className="mb-4">
            If you have any questions about this disclaimer, please contact us at <span className="text-accent">your@email.com</span>.
          </p>
        </div>
        <Link href="/" className="bg-primary hover:bg-accent text-white font-semibold px-6 py-2 rounded-full transition-all duration-200">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default DisclaimerPage;
