import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative w-full min-h-screen pt-24 px-8 md:px-16 grid-border-bottom">
      
      {/* Education Top Right */}
      <div className="absolute top-10 right-8 md:right-16 md:w-1/3 text-right">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs md:text-sm font-[var(--font-serif)] italic text-black/60"
        >
          Currently pursuing B.E. Cyber Security at Paavai Engineering College, Namakkal (2022-2026).
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row mt-32 relative">
        
        {/* Left Side: Title */}
        <div className="md:w-1/3 relative z-10 mb-12 md:mb-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="sticky top-32"
          >
             <h2 className="text-4xl md:text-5xl font-[var(--font-serif)] text-black">
                Skills & <br/>
                <span className="italic text-black/60">Experience</span>
             </h2>
          </motion.div>
        </div>

        {/* Right Side: Content */}
        <div className="md:w-2/3 flex flex-col pt-12 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:w-3/4 mb-32"
          >
            <p className="text-xl md:text-2xl font-[var(--font-serif)] leading-relaxed text-black">
              My skills revolve around building robust Machine Learning models, secure network systems, and data analytics pipelines. Beyond core data science, I work with Python, Scikit-learn, XGBoost, and modern frameworks to solve real-world problems.
            </p>
            {/* Faded echo text behind it like in the video */}
            <p className="text-xl md:text-2xl font-[var(--font-serif)] leading-relaxed text-black/10 absolute top-2 left-2 -z-10">
              My skills revolve around building robust Machine Learning models, secure network systems, and data analytics pipelines. Beyond core data science, I work with Python, Scikit-learn, XGBoost, and modern frameworks to solve real-world problems.
            </p>
          </motion.div>

          {/* Bottom Left paragraph */}
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="md:w-1/2 md:-ml-32 mb-16 text-sm text-black/60"
          >
            <p>
              I recently completed a Machine Learning Internship at NoviTech, where I gained hands-on experience in training models, deploying solutions via Streamlit, and analyzing real-time datasets.
            </p>
          </motion.div>
          
        </div>

      </div>

      {/* Portrait Image Bottom Right */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute bottom-0 right-8 md:right-32 w-64 md:w-80 h-64 md:h-80 bg-gray-200"
      >
         <img src="/portrait.png" alt="Mohan Portrait" className="w-full h-full object-cover grayscale contrast-125" />
      </motion.div>

    </section>
  );
};

export default About;
