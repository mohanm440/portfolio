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
              viewBox="0 0 300 150"
              className="w-64 md:w-96"
              fill="none"
              stroke="#e5d3b3"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
                d="M 25 100 C 35 100, 45 70, 50 50 C 55 20, 60 20, 60 30 C 60 50, 45 100, 50 110 C 55 120, 70 100, 80 85 C 90 70, 100 80, 95 95 C 90 110, 100 115, 110 100 C 120 85, 130 50, 135 30 C 140 10, 145 10, 145 30 C 145 60, 130 110, 135 115 C 140 120, 155 100, 165 85 C 175 70, 185 50, 190 30 C 195 10, 200 10, 200 30 C 200 60, 185 110, 190 115 C 195 120, 210 100, 220 90 C 230 80, 240 70, 250 80 C 260 90, 245 115, 235 110 C 225 105, 235 90, 245 80 C 255 70, 270 70, 280 80"
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Preloader;
