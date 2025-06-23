'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaUser, FaCommentDots, FaLightbulb } from 'react-icons/fa';
import Navbar from '@/app/components/Navbar';

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <>
      <div className="min-h-screen w-full bg-black text-white py-10 px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <FaLightbulb className="text-primary text-sm" />
            <span className="text-primary text-sm font-medium">Contact Us</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8">
            Have a question, project idea, or just want to say hello? Fill out the form below and our team will get back to you soon!
          </p>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-xl mx-auto bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-2xl p-8 shadow-xl border border-primary/20"
        >
          {submitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="text-center py-10"
            >
              <FaEnvelope className="mx-auto text-4xl text-primary mb-4" />
              <h2 className="text-2xl font-bold mb-2">Thank you!</h2>
              <p className="text-gray-300">Your message has been sent. We'll get back to you soon.</p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15
                  }
                }
              }}
            >
              <motion.div
                className="flex flex-col gap-2"
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              >
                <label htmlFor="name" className="font-semibold text-primary flex items-center gap-2">
                  <FaUser /> Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/60 transition"
                  placeholder="Your Name"
                />
              </motion.div>
              <motion.div
                className="flex flex-col gap-2"
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              >
                <label htmlFor="email" className="font-semibold text-primary flex items-center gap-2">
                  <FaEnvelope /> Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/60 transition"
                  placeholder="you@email.com"
                />
              </motion.div>
              <motion.div
                className="flex flex-col gap-2"
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              >
                <label htmlFor="message" className="font-semibold text-primary flex items-center gap-2">
                  <FaCommentDots /> Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/60 transition resize-none"
                  placeholder="Type your message here..."
                />
              </motion.div>
              <motion.button
                type="submit"
                className="bg-primary hover:bg-accent text-white font-bold py-3 rounded-lg transition-all duration-200 mt-2 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              >
                Send Message
              </motion.button>
            </motion.form>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default ContactPage;
