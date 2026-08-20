import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../data/certifications';
import { FiAward, FiExternalLink } from 'react-icons/fi';

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 bg-white dark:bg-transparent relative transition-colors duration-500">
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
                CERTIFICATIONS
              </p>
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 dark:text-white mb-6 uppercase leading-tight transition-colors">
                Continuous Learning
              </h2>
            </motion.div>
          </div>

          {/* Right Column: Cards */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {certifications.map((cert, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="bg-gray-50 dark:bg-[#18181b] p-8 rounded-[2rem] border border-gray-100 dark:border-white/10 hover:border-purple-200 dark:hover:border-purple-500/50 shadow-sm hover:shadow-xl group relative overflow-hidden cursor-pointer hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 h-full flex flex-col glow-border">
                    <FiAward className="text-4xl text-purple-600 dark:text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-snug group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{cert.name}</h3>
                    <p className="text-sm font-bold tracking-wider uppercase text-gray-500 dark:text-gray-400 mb-6 transition-colors">{cert.provider}</p>
                    
                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-200 dark:border-white/10 transition-colors">
                      <span className="text-sm font-semibold text-gray-600 dark:text-gray-300 transition-colors">{cert.date}</span>
                      {cert.url && cert.url !== "#TODO_ADD_CERT_URL" && (
                        <a 
                          href={cert.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white dark:bg-[#121212] border border-gray-200 dark:border-white/10 flex items-center justify-center text-purple-600 dark:text-purple-400 hover:bg-purple-600 dark:hover:bg-purple-600 hover:text-white dark:hover:text-white hover:border-purple-600 dark:hover:border-purple-600 transition-all shadow-sm"
                        >
                          <FiExternalLink size={18} />
                        </a>
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

export default Certifications;
