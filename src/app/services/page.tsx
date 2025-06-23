export default function ServicesPage() {
  return (
    <div style={{ padding: 32 }} className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto py-16">
        <h1 className="text-4xl font-bold text-primary mb-8">Our Services</h1>
        <p className="text-gray-300 mb-6">
          At <strong>Hash Tech</strong>, we offer a range of IT solutions designed to help your business thrive in the digital age. Whether you're a startup or an enterprise, we provide reliable, scalable, and innovative tech services tailored to your needs.
        </p>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-primary/20">
            <h2 className="text-xl font-semibold text-white mb-2">Custom Software Development</h2>
            <p className="text-gray-400">
              We build scalable and secure software tailored to your business requirements—from web apps to enterprise systems.
            </p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-primary/20">
            <h2 className="text-xl font-semibold text-white mb-2">Website & Web App Development</h2>
            <p className="text-gray-400">
              Modern, responsive, and optimized websites and web applications using cutting-edge frameworks and tools.
            </p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-primary/20">
            <h2 className="text-xl font-semibold text-white mb-2">IT Consulting</h2>
            <p className="text-gray-400">
              Strategic guidance on technology stack, digital transformation, and infrastructure optimization.
            </p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg border border-primary/20">
            <h2 className="text-xl font-semibold text-white mb-2">Cloud Solutions</h2>
            <p className="text-gray-400">
              Cloud infrastructure setup, migration, and management with providers like AWS, Azure, and Google Cloud.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
