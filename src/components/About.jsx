import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { FiPhone, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-[#18181b] relative overflow-hidden transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full text-center"
          >
            <p className="text-sm font-bold tracking-widest text-purple-600 dark:text-purple-400 uppercase mb-4">
              Get to know me
            </p>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 dark:text-white mb-12 uppercase leading-tight transition-colors">
              Who am I
            </h2>
            <div className="text-gray-600 dark:text-gray-300 text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto space-y-6 transition-colors">
              {Array.isArray(personalInfo.about) 
                ? personalInfo.about.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))
                : <p>{personalInfo.about}</p>
              }
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 pb-12 border-b border-gray-200 dark:border-white/10 transition-colors">
              <div>
                <h3 className="text-5xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">1<span className="text-purple-600 dark:text-purple-400">+</span></h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wider">Year of Hands-On Learning</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">10<span className="text-purple-600 dark:text-purple-400">+</span></h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wider">Completed Projects</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">5<span className="text-purple-600 dark:text-purple-400">+</span></h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wider">Machine Learning Models</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col md:flex-row justify-center gap-12">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wider mb-2">Call Today</p>
                <a href={personalInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  {personalInfo.phone}
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wider mb-2">Email Me</p>
                <a href={`mailto:${personalInfo.email}`} className="text-xl font-bold text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                  {personalInfo.email}
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-4 mt-8">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-300 dark:border-white/20 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 dark:hover:text-white hover:border-purple-600 dark:hover:border-purple-600 transition-all duration-300">
                <FiGithub size={18} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-300 dark:border-white/20 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 dark:hover:text-white hover:border-purple-600 dark:hover:border-purple-600 transition-all duration-300">
                <FiLinkedin size={18} />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
