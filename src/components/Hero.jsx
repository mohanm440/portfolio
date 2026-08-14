import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative w-full h-[calc(100vh-64px)] flex flex-col justify-center overflow-hidden px-8 md:px-16 pt-10">
      
      {/* Decorative top grid line and label */}
      <div className="absolute top-1/4 left-0 w-full flex items-center px-8 md:px-16">
        <div className="text-[10px] md:text-xs tracking-[0.2em] text-black/40 mr-4 whitespace-nowrap">
          [ MACHINE LEARNING ENGINEER ]
        </div>
        <div className="flex-grow border-t border-dashed border-black/10"></div>
        {/* Little decorative square */}
        <div className="w-6 h-6 ml-4 bg-gray-200 hidden md:block opacity-50 relative">
          <img src="/portrait.png" alt="" className="w-full h-full object-cover grayscale mix-blend-multiply opacity-50" />
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col mt-20 md:mt-32 relative z-10">
        
        {/* Line 1: I WRITE CODE THAT + Red Image */}
        <div className="flex items-end">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[10vw] md:text-[7vw] leading-[0.8] font-light text-black tracking-tight"
          >
            I WRITE CODE THAT
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block ml-4 w-32 md:w-56 h-16 md:h-24 bg-red-600 relative overflow-hidden"
          >
            <img src="/portrait.png" alt="Mohan M" className="w-full h-full object-cover mix-blend-multiply grayscale contrast-125" />
          </motion.div>
        </div>

        {/* Line 2: Blue Image + BUILDS EXPERIENCE */}
        <div className="flex items-start mt-2 md:mt-4">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:block mr-6 w-48 md:w-80 h-16 md:h-28 bg-blue-900 relative overflow-hidden mt-2"
          >
             <img src="/portrait.png" alt="Mohan M" className="w-full h-full object-cover mix-blend-screen opacity-70" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-[10vw] md:text-[7vw] leading-[0.8] font-light text-black tracking-tight"
          >
            BUILDS EXPERIENCE
          </motion.h1>
        </div>

      </div>

    </section>
  );
};

export default Hero;
