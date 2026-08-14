import React from 'react';
import { motion } from 'framer-motion';
import { experienceData, educationData, certificationsData } from '../data/portfolioData';
import { Briefcase, GraduationCap, Award, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6 md:px-12 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-2 block">
            Professional Background
          </span>
          <h2 className="font-serif-custom text-4xl md:text-5xl font-light text-white mb-4">
            Experience &amp; <em className="italic font-normal">Education</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <h3 className="font-serif-custom text-2xl font-semibold text-white">Work Experience</h3>
            </div>

            <div className="space-y-8 pl-4 border-l border-purple-500/20">
              {experienceData.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  className="relative pl-6"
                >
                  {/* Timeline Dot */}
                  <span className="absolute -left-[25px] top-1.5 w-4 h-4 rounded-full bg-[#0a0a0c] border-2 border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />

                  <span className="text-xs font-semibold uppercase tracking-wider text-purple-400 block mb-1">
                    {exp.period}
                  </span>
                  <h4 className="font-serif-custom text-xl font-semibold text-white">
                    {exp.role}
                  </h4>
                  <p className="text-xs text-slate-400 font-medium mb-4">
                    {exp.company} — {exp.location}
                  </p>

                  <ul className="space-y-2">
                    {exp.highlights.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-xs text-slate-300 leading-relaxed flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Certifications Column */}
          <div className="space-y-12">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="font-serif-custom text-2xl font-semibold text-white">Education</h3>
              </div>

              <div className="space-y-6">
                {educationData.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                    className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md"
                  >
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-400 block mb-1">
                      {edu.period}
                    </span>
                    <h4 className="font-serif-custom text-lg font-semibold text-white mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-xs text-slate-400 mb-2">
                      {edu.institution}, {edu.location}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {edu.details}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-serif-custom text-2xl font-semibold text-white">Certifications</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {certificationsData.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-md"
                  >
                    <h4 className="text-xs font-semibold text-white mb-1">{cert.name}</h4>
                    <span className="text-[10px] text-purple-400 font-medium block">{cert.issuer}</span>
                    {cert.date && <span className="text-[10px] text-slate-500 block">{cert.date}</span>}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
