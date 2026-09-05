import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '../data/projects';

const ProjectShowcase = () => {
  const { id } = useParams();
  
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20 bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
          <Link to="/#projects" className="text-purple-600 hover:underline font-medium">Return to Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto bg-white">
      <Link to="/#projects" className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors mb-8 font-medium">
        <FiArrowLeft className="mr-2" /> Back to Projects
      </Link>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 text-gray-900 tracking-tight leading-tight">
          {project.title}
        </h1>
        
        <div className="flex flex-wrap gap-3 mb-8">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="px-4 py-1.5 bg-purple-50 text-purple-700 rounded-full text-sm font-semibold border border-purple-100">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4 mb-12">
          {project.githubUrl && project.githubUrl !== "#TODO_ADD_URL" && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-colors shadow-lg font-medium">
              <FiGithub className="mr-2" /> View GitHub
            </a>
          )}
          {project.liveUrl && project.liveUrl !== "#TODO_ADD_URL" && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors shadow-lg purple-shadow font-medium">
              <FiExternalLink className="mr-2" /> Live Demo
            </a>
          )}
        </div>
        
        <div className="w-full h-[300px] md:h-[500px] bg-gray-100 rounded-3xl mb-16 overflow-hidden relative shadow-sm border border-gray-100 flex items-center justify-center">
          {project.image ? (
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover object-top"
              onError={(e) => { e.target.src = 'https://via.placeholder.com/1200x600?text=Project+Image' }}
            />
          ) : (
            <span className="text-gray-400 font-medium">No Image Available</span>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2 prose prose-lg prose-purple max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-heading">Project Overview</h2>
            <p className="text-gray-700 leading-relaxed mb-10 text-lg">
              {project.description}
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-heading">Key Features & Architecture</h3>
            <ul className="space-y-3 mb-10 list-none pl-0">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-gray-700">
                  <span className="text-purple-500 mr-3 mt-1 text-xl">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Sidebar */}
          <div className="md:col-span-1 space-y-8">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Project Details</h4>
              
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-500 font-medium mb-1">Year</p>
                  <p className="text-gray-900 font-semibold">{project.year}</p>
                </div>
                
                <div>
                  <p className="text-xs text-gray-500 font-medium mb-1">Category</p>
                  <p className="text-gray-900 font-semibold">{project.category}</p>
                </div>

                {project.dataset && (
                  <div>
                    <p className="text-xs text-gray-500 font-medium mb-1">Dataset</p>
                    <p className="text-gray-900 font-semibold">{project.dataset}</p>
                  </div>
                )}
                
                {project.architecture && (
                  <div>
                    <p className="text-xs text-gray-500 font-medium mb-1">Architecture</p>
                    <p className="text-gray-900 font-semibold">{project.architecture}</p>
                  </div>
                )}

                {project.explainability && project.explainability !== "N/A" && (
                  <div>
                    <p className="text-xs text-gray-500 font-medium mb-1">Explainability</p>
                    <p className="text-gray-900 font-semibold">{project.explainability}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectShowcase;
