import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/portfolioData';
import { Cpu, ShieldCheck, Database, Wrench } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6 md:px-12 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-purple-400 font-semibold mb-2 block">
            Technical Competencies
          </span>
          <h2 className="font-serif-custom text-4xl md:text-5xl font-light text-white mb-4">
            Skills &amp; <em className="italic font-normal">Technologies</em>
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            Proficient across Machine Learning pipelines, cybersecurity packet analysis, and full-stack data analytics workflows.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Machine Learning */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:border-purple-500/30 transition-all hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="font-serif-custom text-xl font-semibold text-white mb-4">Machine Learning</h3>
            <ul className="space-y-2">
              {skillsData.machineLearning.map((item, idx) => (
                <li key={idx} className="text-xs text-slate-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card 2: Cyber Security */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:border-blue-500/30 transition-all hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif-custom text-xl font-semibold text-white mb-4">Cyber Security</h3>
            <ul className="space-y-2">
              {skillsData.cyberSecurity.map((item, idx) => (
                <li key={idx} className="text-xs text-slate-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card 3: Libraries & Frameworks */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:border-indigo-500/30 transition-all hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-6">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="font-serif-custom text-xl font-semibold text-white mb-4">Libraries &amp; Tools</h3>
            <div className="flex flex-wrap gap-1.5">
              {skillsData.librariesTools.map((item, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 4: Languages & Dev Tools */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:border-violet-500/30 transition-all hover:-translate-y-1"
          >
            <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-6">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="font-serif-custom text-xl font-semibold text-white mb-4">Languages &amp; Dev</h3>
            <div className="mb-4">
              <span className="text-[10px] uppercase text-slate-500 font-semibold block mb-2">Languages</span>
              <div className="flex gap-2">
                {skillsData.languages.map((lang, idx) => (
                  <span key={idx} className="text-xs px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 font-semibold">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className="text-[10px] uppercase text-slate-500 font-semibold block mb-2">Dev Tools</span>
              <div className="flex flex-wrap gap-1.5">
                {skillsData.devTools.map((tool, idx) => (
                  <span key={idx} className="text-[11px] px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
