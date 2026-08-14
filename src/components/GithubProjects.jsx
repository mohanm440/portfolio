import React from 'react';
import { motion } from 'framer-motion';
import { githubProjects } from '../data/portfolioData';

const GithubProjects = () => {
  return (
    <section className="w-full py-24 px-8 md:px-16 grid-border-bottom relative z-10 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-[var(--font-serif)] italic text-black mb-12"
        >
          All Open Source Projects
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {githubProjects.map((repo, index) => (
            <motion.a 
              key={repo.id}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group block p-6 border border-black/10 hover:border-black/30 transition-colors bg-white/50"
            >
              <div className="flex justify-between items-start mb-4">
                <h4 className="font-[var(--font-sans)] font-medium text-black text-lg group-hover:underline decoration-1 underline-offset-4">
                  {repo.name}
                </h4>
                <span className="text-[10px] uppercase tracking-wider text-black/40 border border-black/10 px-2 py-1 rounded-full">
                  {repo.language}
                </span>
              </div>
              <p className="text-sm text-black/60 font-[var(--font-serif)] leading-relaxed">
                {repo.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GithubProjects;
