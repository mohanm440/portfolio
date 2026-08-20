import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white dark:bg-transparent transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-bold tracking-widest text-purple-600 dark:text-purple-400 uppercase mb-4 transition-colors">
              PORTFOLIO
            </p>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 dark:text-white mb-6 uppercase leading-tight transition-colors">
              Featured Projects
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed transition-colors">
              These selected projects reflect my passion for blending AI innovation with practical applications — solving real problems through robust architecture and intelligent algorithms.
            </p>
          </motion.div>
        </div>

        {/* Projects Vertical Stack */}
        <div className="flex flex-col gap-12 md:gap-24 relative pb-20">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Projects;
