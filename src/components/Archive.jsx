import React from 'react';
import { motion } from 'framer-motion';

const Archive = () => {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden py-32 bg-[#f8f8f8]">
      
      {/* Center Text */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative z-20 text-center"
      >
        <h2 className="text-6xl md:text-8xl font-[var(--font-serif)] text-black italic relative mix-blend-difference z-30">
          Archive
        </h2>
        <p className="text-xs tracking-widest text-black/60 uppercase mt-4">Selected Works 2023-2026</p>
      </motion.div>

      {/* Floating Staggered Images (matching Frame 005) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="absolute top-[20%] left-[10%] w-32 h-20 md:w-48 md:h-28 bg-gray-300 overflow-hidden"
        >
          <img src="/project_2.png" className="w-full h-full object-cover grayscale opacity-70" alt="" />
        </motion.div>

        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="absolute bottom-[20%] left-[25%] w-40 h-24 md:w-64 md:h-40 bg-gray-300 overflow-hidden"
        >
          <img src="/project_1.png" className="w-full h-full object-cover grayscale opacity-70" alt="" />
        </motion.div>

        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="absolute top-[10%] right-[20%] w-24 h-32 md:w-32 md:h-48 bg-gray-300 overflow-hidden"
        >
          <img src="/portrait.png" className="w-full h-full object-cover grayscale opacity-70" alt="" />
        </motion.div>

        <motion.div 
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="absolute bottom-[10%] right-[10%] w-32 h-24 md:w-48 md:h-32 bg-gray-300 overflow-hidden"
        >
          <img src="/project_3.png" className="w-full h-full object-cover grayscale opacity-70" alt="" />
        </motion.div>
      </div>

    </section>
  );
};

export default Archive;
