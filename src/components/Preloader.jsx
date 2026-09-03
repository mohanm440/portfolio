import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showHello, setShowHello] = useState(false);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:ital@1&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    document.body.style.overflow = 'hidden';

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setShowHello(true), 400);
          return 100;
        }
        return prev + Math.floor(Math.random() * 12) + 2; 
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (showHello) {
      const timer = setTimeout(() => {
        onComplete();
        document.body.style.overflow = 'unset';
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [showHello, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <AnimatePresence mode="wait">
        {!showHello ? (
          <motion.div
            key="percentage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center"
          >
            <div 
              className="text-6xl md:text-8xl text-[#ffffff] mb-6 tracking-wider"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {progress > 100 ? 100 : progress}%
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="w-16 h-16 rounded-full border-4 border-t-[#ffffff] border-r-transparent border-b-transparent border-l-transparent"
            />
          </motion.div>
        ) : (
          <motion.div
            key="hello"
            initial={{ clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" }}
            animate={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="text-[120px] md:text-[180px] text-[#ffffff] pr-4 leading-none"
            style={{ fontFamily: "'Great Vibes', cursive", paddingBottom: "20px" }}
          >
            hello
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Preloader;
