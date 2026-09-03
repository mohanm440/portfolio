import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Parisienne&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      onComplete();
      document.body.style.overflow = 'unset';
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0a]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
        animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
        style={{ fontFamily: \"'Parisienne', cursive\" }}
        className="text-6xl md:text-8xl text-[#e5d3b3]"
      >
        hello
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
