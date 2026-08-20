import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      className="sticky z-10 bg-white dark:bg-[#121212] border border-gray-100 dark:border-white/10 rounded-[2.5rem] p-6 md:p-10 shadow-lg dark:shadow-none transition-colors duration-500"
      style={{ top: `calc(8rem + ${index * 2}rem)` }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center group`}>
        
        {/* Image Side */}
        <div className="w-full lg:w-1/2">
          <div className="relative rounded-[2rem] overflow-hidden shadow-xl aspect-video glow-border group-hover:-translate-y-2 transition-all duration-500">
            {project.image ? (
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => { e.target.src = 'https://via.placeholder.com/800x600?text=Project+Image' }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-[#18181b] text-gray-400 dark:text-gray-600 font-medium transition-colors">No Image</div>
            )}
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-purple-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
              <Link to={`/projects/${project.id}`} className="bg-white text-purple-600 px-6 py-3 rounded-full font-bold flex items-center hover:bg-gray-50 hover:scale-105 transition-transform">
                View Project <FiArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Text Side */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <div className="mb-4 flex items-center space-x-4">
            <span className="text-sm font-bold text-purple-600 dark:text-purple-400 tracking-wider uppercase border border-purple-200 dark:border-purple-500/30 bg-purple-50 dark:bg-purple-900/20 px-4 py-1.5 rounded-full transition-colors">
              {project.category}
            </span>
            <span className="text-gray-500 dark:text-gray-400 font-medium transition-colors">{project.year}</span>
          </div>

          <h3 className="text-3xl lg:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-6 leading-tight group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8 transition-colors">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="px-4 py-2 bg-gray-50 dark:bg-[#18181b] border border-gray-100 dark:border-white/10 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium transition-colors">
                {tech}
              </span>
            ))}
          </div>
          
          {/* Action Links */}
          <div className="flex gap-4">
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="py-3 px-6 border border-gray-200 dark:border-white/20 text-gray-800 dark:text-gray-200 rounded-xl flex items-center justify-center hover:bg-gray-50 dark:hover:bg-white/5 hover:border-gray-300 dark:hover:border-white/30 font-semibold transition-all hover:-translate-y-1"
            >
              <FiGithub className="mr-2" size={20} /> View Source
            </a>
            {project.liveUrl && project.liveUrl !== "#TODO_ADD_URL" && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="py-3 px-6 bg-purple-600 text-white rounded-xl flex items-center justify-center hover:bg-purple-700 font-semibold transition-all hover:-translate-y-1 shadow-md purple-shadow"
              >
                <FiExternalLink className="mr-2" size={20} /> Live Demo
              </a>
            )}
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default ProjectCard;
