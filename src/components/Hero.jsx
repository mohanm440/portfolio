import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const [roleText, setRoleText] = useState('');
  const fullText = personalInfo.role;
  
  useEffect(() => {
    let i = 0;
    let isDeleting = false;
    let timer;

    const type = () => {
      if (!isDeleting && i <= fullText.length) {
        setRoleText(fullText.substring(0, i));
        i++;
        timer = setTimeout(type, 100);
      } else if (isDeleting && i >= 0) {
        setRoleText(fullText.substring(0, i));
        i--;
        timer = setTimeout(type, 50);
      } else {
        isDeleting = !isDeleting;
        // Pause at the end before deleting, and pause at the beginning before re-typing
        timer = setTimeout(type, isDeleting ? 2000 : 500); 
      }
    };

    timer = setTimeout(type, 100);
    return () => clearTimeout(timer);
  }, [fullText]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white dark:bg-transparent">
      
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden bg-white group">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-right opacity-90 transform group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Soft gradient to ensure text readability without hiding the video */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 dark:from-[#121212]/80 to-transparent w-full"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start justify-center relative z-10 h-full">
        
        {/* Main Content: Text and Photo */}
        <div className="w-full mt-12 md:mt-0">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            
            {/* Photo above the text */}
            <div className="mb-8 relative w-32 h-32 md:w-40 md:h-40 group cursor-pointer hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 to-pink-300 blur-md opacity-50 animate-pulse group-hover:opacity-80 transition-opacity"></div>
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl relative z-10 bg-white/50 dark:bg-black/50 backdrop-blur-sm group-hover:border-purple-200 dark:group-hover:border-purple-500 transition-colors">
                <img 
                  src="/portrait.png" 
                  alt="Mohan M." 
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/200?text=Your+Photo' }}
                />
              </div>
            </div>

            <p className="text-purple-600 dark:text-purple-400 font-semibold tracking-wider uppercase mb-2">Hi, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold font-heading text-gray-900 dark:text-white mb-4 tracking-tight drop-shadow-sm">
              {personalInfo.name}
            </h1>
            <div className="h-10 md:h-12 mb-6">
              <h2 className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300">
                {roleText}<span className="animate-pulse text-purple-500 font-bold">|</span>
              </h2>
            </div>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-xl leading-relaxed bg-white/50 dark:bg-[#18181b]/50 backdrop-blur-sm p-4 rounded-2xl border border-white/60 dark:border-white/5 shadow-sm hover:shadow-md transition-all">
              I’m an aspiring AI/ML Engineer focused on building practical, data-driven solutions to real-world problems. I specialize in Python, Machine Learning, Deep Learning, and Data Analysis, with hands-on experience developing end-to-end AI projects from raw data to deployable applications.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href={personalInfo.resumeUrl} download="Mohan_M_Resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 hover:-translate-y-1 hover:scale-105 transition-all shadow-lg purple-shadow font-medium">
                <FiDownload className="mr-2" /> Download Resume
              </a>
              <a href="#projects" className="inline-flex items-center px-6 py-3 bg-white/80 dark:bg-[#18181b]/80 backdrop-blur-md text-gray-900 dark:text-white border border-purple-100 dark:border-white/10 rounded-xl hover:bg-purple-50 dark:hover:bg-white/5 hover:border-purple-300 dark:hover:border-white/20 hover:-translate-y-1 hover:scale-105 transition-all shadow-sm font-medium">
                View Projects <FiArrowRight className="ml-2 text-purple-600 dark:text-purple-400" />
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
