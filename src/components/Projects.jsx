import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section id="projects" className="relative w-full min-h-screen pt-32 px-8 md:px-16 pb-32">
      
      {/* Title Section */}
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row mb-32 relative">
        <div className="md:w-1/2 flex items-start">
           <div className="w-64 h-64 bg-gray-200 overflow-hidden">
             <img src="/project_1.png" alt="Traffic" className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80" />
           </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0 flex flex-col items-center md:items-start text-center md:text-left pl-0 md:pl-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-[var(--font-serif)] tracking-widest text-black mb-6"
          >
            PROJECTS
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xs md:text-sm text-black/60 font-sans leading-relaxed max-w-sm"
          >
            My name is Mohan. I focus on developing advanced machine learning models and ensuring network security. Here is a curated selection of my work demonstrating my capabilities in AI and cybersecurity.
          </motion.p>
        </div>
      </div>

      {/* Project 1 (Center-aligned like Florence Tuscani) */}
      <div className="w-full max-w-5xl mx-auto relative mb-48">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full md:w-3/4 mx-auto relative h-64 md:h-[400px] bg-gray-200 overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black/20 z-10 transition-opacity group-hover:opacity-0"></div>
          <div className="absolute top-4 left-4 z-20 text-white mix-blend-difference font-[var(--font-serif)] text-xl md:text-3xl">
            1. Network Anomaly Detection
          </div>
          <div className="absolute top-4 right-4 z-20 text-white mix-blend-difference font-[var(--font-serif)] text-xl md:text-3xl italic">
            XGBoost
          </div>
          <img src="/project_1.png" alt="Project 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </motion.div>
        
        {/* Decorative small blocks */}
        <div className="absolute -bottom-16 right-0 md:right-32 w-32 md:w-48 h-24 md:h-32 bg-gray-100 p-4 border border-dashed border-black/10">
          <p className="text-[10px] text-black/40">SHAP explainability</p>
          <p className="text-[10px] text-black/40 mt-1">Real-time alerts via Streamlit</p>
        </div>
      </div>

      {/* Project 2 (Staggered left) */}
      <div className="w-full max-w-5xl mx-auto relative mb-32">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-2/3 relative h-64 md:h-96 bg-gray-200 overflow-hidden group"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black/20 z-10 transition-opacity group-hover:opacity-0"></div>
          <div className="absolute top-4 left-4 z-20 text-white mix-blend-difference font-[var(--font-serif)] text-xl md:text-3xl">
            2. AI Sales Analytics
          </div>
          <div className="absolute top-4 right-4 z-20 text-white mix-blend-difference font-[var(--font-serif)] text-xl md:text-3xl italic">
            Random Forest
          </div>
          <img src="/project_2.png" alt="Project 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        </motion.div>
      </div>

    </section>
  );
};

export default Projects;
