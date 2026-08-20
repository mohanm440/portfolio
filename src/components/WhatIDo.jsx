import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { whatIDo } from '../data/portfolioData';
import { FiChevronDown } from 'react-icons/fi';

const WhatIDo = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="what-i-do" className="py-24 bg-white dark:bg-transparent relative overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Left Column: Heading & Text */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-bold tracking-widest text-purple-600 dark:text-purple-400 uppercase mb-4 transition-colors">
                WHAT I CAN DO FOR YOU
              </p>
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 dark:text-white mb-6 uppercase leading-tight transition-colors">
                What I can do for you
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed transition-colors">
                As an AI & Machine Learning Engineer, I am passionate about building intelligent systems, uncovering insights from data, and crafting robust predictive models that solve real-world problems and drive innovation.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 lg:pl-12">
            <div className="flex flex-col">
              {whatIDo.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="border-b border-gray-200 dark:border-white/10 last:border-b-0 transition-colors"
                  >
                    <button 
                      onClick={() => toggleAccordion(idx)}
                      className="w-full py-8 flex items-center justify-between text-left focus:outline-none group"
                    >
                      <div className="flex items-center space-x-6">
                        <span className="text-xl font-medium text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                          {String(idx + 1).padStart(2, '0')}.
                        </span>
                        <h3 className={`text-2xl font-bold uppercase transition-colors duration-300 ${isOpen ? 'text-purple-600 dark:text-purple-400' : 'text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400'}`}>
                          {item.title}
                        </h3>
                      </div>
                      <motion.div 
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors ${isOpen ? 'border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400' : 'border-gray-200 dark:border-white/20 text-gray-400 dark:text-gray-500 group-hover:border-purple-600 dark:group-hover:border-purple-400 group-hover:text-purple-600 dark:group-hover:text-purple-400'}`}
                      >
                        <FiChevronDown size={20} />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pb-8 pl-14 text-gray-600 dark:text-gray-300 text-lg leading-relaxed transition-colors">
                            <p>{item.description}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
