import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showHello, setShowHello] = useState(false);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&display=swap';
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
              className="text-6xl md:text-8xl text-[#e5d3b3] mb-6 tracking-wider"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {progress > 100 ? 100 : progress}%
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="w-16 h-16 rounded-full border-4 border-t-[#e5d3b3] border-r-transparent border-b-transparent border-l-transparent"
            />
          </motion.div>
        ) : (
          <motion.div
            key="hello"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center w-full"
          >
            <svg
              viewBox="0 0 200 120"
              className="w-64 md:w-96"
              fill="none"
              stroke="#e5d3b3"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
                d="M 20 80 C 30 80, 40 20, 45 20 C 50 20, 45 70, 45 80 C 45 100, 60 100, 60 80 C 60 60, 50 60, 50 70 C 50 90, 65 90, 70 80 C 80 50, 90 20, 95 20 C 100 20, 90 80, 90 90 C 90 100, 100 100, 105 80 C 115 50, 125 20, 130 20 C 135 20, 125 80, 125 90 C 125 100, 135 100, 140 80 C 145 60, 165 60, 165 75 C 165 90, 145 90, 145 75 C 145 65, 160 65, 175 65"
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Preloader;
