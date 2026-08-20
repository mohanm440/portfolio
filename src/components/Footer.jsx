import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-[#121212] py-12 border-t border-gray-100 dark:border-white/10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-2xl font-bold font-heading text-gray-900 dark:text-white transition-colors">Mohan M<span className="text-purple-600 dark:text-purple-400 transition-colors">.</span></h2>
          <p className="text-gray-500 dark:text-gray-400 mt-1 font-medium transition-colors">{personalInfo.role}</p>
          <p className="text-gray-400 dark:text-gray-500 text-sm mt-2 max-w-sm transition-colors">
            Building intelligent solutions with data and AI.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <div className="flex space-x-4 mb-4">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-10 h-10 rounded-full bg-gray-50 dark:bg-[#18181b] flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white transition-colors">
              <FiGithub size={20} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-gray-50 dark:bg-[#18181b] flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-blue-500/20 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <FiLinkedin size={20} />
            </a>
            <a href={`mailto:${personalInfo.email}`} aria-label="Email" className="w-10 h-10 rounded-full bg-gray-50 dark:bg-[#18181b] flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-purple-50 dark:hover:bg-purple-500/20 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              <FiMail size={20} />
            </a>
            <a href={personalInfo.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full bg-gray-50 dark:bg-[#18181b] flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-green-50 dark:hover:bg-green-500/20 hover:text-green-600 dark:hover:text-green-400 transition-colors">
              <FaWhatsapp size={20} />
            </a>
          </div>
          <p className="text-gray-400 dark:text-gray-500 text-sm transition-colors">
            &copy; {currentYear} Mohan M. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
