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
              viewBox="0 0 220 140"
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
                d="M 10,70 C 15,65 20,40 25,20 C 30,0 35,0 35,20 C 35,40 25,90 25,100 C 25,110 35,100 40,90 C 45,80 50,80 55,90 C 60,100 65,110 70,100 C 75,90 70,70 60,70 C 50,70 50,90 60,100 C 70,110 80,100 90,80 C 100,60 110,20 115,20 C 120,20 120,40 115,60 C 110,80 100,100 105,110 C 110,120 120,100 130,80 C 140,60 150,20 155,20 C 160,20 160,40 155,60 C 150,80 140,100 145,110 C 150,120 160,100 170,90 C 180,80 190,80 190,90 C 190,100 180,110 170,110 C 160,110 155,100 165,90 C 175,80 190,80 200,90"
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Preloader;
