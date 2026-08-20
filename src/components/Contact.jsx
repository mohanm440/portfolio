import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Fallback to mailto link since there's no backend
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-[#121212] relative overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Emoji */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div 
              animate={{ 
                rotate: [0, 20, -10, 20, -10, 10, 0, 0, 0, 0],
                scale: [1, 1.1, 1, 1.1, 1, 1, 1, 1, 1, 1],
                y: [0, -15, 0, -15, 0, 0, 0, 0, 0, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 3,
                ease: "easeInOut"
              }}
              className="text-[12rem] md:text-[15rem] leading-none select-none drop-shadow-2xl origin-bottom-right"
            >
              👋
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 lg:pl-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-bold tracking-widest text-purple-600 dark:text-purple-400 uppercase mb-4 transition-colors">
                LET'S CONNECT
              </p>
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 dark:text-white mb-6 uppercase leading-tight transition-colors">
                Let's work together
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-10 transition-colors">
                I'm currently looking for new opportunities. Whether you have a question, a project in mind, or just want to say hi, I'll try my best to get back to you!
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-400 uppercase tracking-wider mb-2 transition-colors">Your Name</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-[#18181b] border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent transition-all shadow-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 dark:text-gray-400 uppercase tracking-wider mb-2 transition-colors">Your Email</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-[#18181b] border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent transition-all shadow-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-400 uppercase tracking-wider mb-2 transition-colors">Subject</label>
                  <input type="text" name="subject" required value={formData.subject} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-[#18181b] border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent transition-all shadow-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500" placeholder="Job Opportunity" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 dark:text-gray-400 uppercase tracking-wider mb-2 transition-colors">Message</label>
                  <textarea name="message" required rows="5" value={formData.message} onChange={handleChange} className="w-full px-5 py-4 rounded-2xl bg-white dark:bg-[#18181b] border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400 focus:border-transparent transition-all shadow-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 resize-none" placeholder="Hello Mohan..."></textarea>
                </div>
                
                <div className="flex justify-start mt-8">
                  <button type="submit" disabled={isSubmitting} className="w-full md:w-auto px-10 py-4 bg-purple-600 text-white rounded-full font-bold flex items-center justify-center hover:bg-purple-700 transition-all shadow-md purple-shadow hover:-translate-y-1">
                    Send Message <FiSend className="ml-3" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
