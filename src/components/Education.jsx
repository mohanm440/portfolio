import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/education';
import { FiBookOpen } from 'react-icons/fi';

const Education = () => {
  return (
    <section id="education" className="py-24 bg-gray-50 dark:bg-[#18181b] relative transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-bold tracking-widest text-purple-600 dark:text-purple-400 uppercase mb-4 transition-colors">
                EDUCATION
              </p>
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 dark:text-white mb-6 uppercase leading-tight transition-colors">
                Academic Background
              </h2>
            </motion.div>
          </div>

          {/* Right Column: Timeline */}
          <div className="lg:col-span-8">
            <div className="space-y-12">
              {education.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative pl-8 md:pl-0 group"
                >
                  <div className="md:flex items-start md:space-x-8">
                    {/* Timeline marker for desktop */}
                    <div className="hidden md:flex flex-col items-center mt-2">
                      <div className="w-4 h-4 bg-purple-200 border-2 border-purple-600 rounded-full group-hover:bg-purple-600 transition-colors duration-300"></div>
                      <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-700 mt-2 min-h-[100px] group-hover:bg-purple-200 transition-colors duration-300"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-white dark:bg-black/50 p-8 rounded-[2rem] border border-gray-100 dark:border-white/10 shadow-sm group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300 glow-border">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{item.degree}</h3>
                          <h4 className="text-lg text-gray-500 dark:text-gray-400 font-medium flex items-center mt-2 transition-colors">
                            <FiBookOpen className="mr-2" /> {item.college}
                          </h4>
                        </div>
                        <span className="inline-block px-4 py-1.5 mt-4 md:mt-0 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 rounded-full text-sm font-bold tracking-wider uppercase transition-colors">
                          {item.period}
                        </span>
                      </div>
                      
                      {item.description && (
                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-4 transition-colors">
                          {item.description}
                        </p>
                      )}
                      
                      {item.score && (
                        <div className="inline-block px-4 py-2 bg-gray-50 dark:bg-[#18181b] border border-gray-200 dark:border-white/10 rounded-lg transition-colors">
                          <span className="text-gray-900 dark:text-white font-bold transition-colors">Score: </span>
                          <span className="text-purple-600 dark:text-purple-400 font-bold transition-colors">{item.score}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
