import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';
import { 
  SiPython, SiMysql, SiPandas, SiNumpy, SiScikitlearn, 
  SiPytorch, SiKeras, SiFastapi, SiStreamlit, 
  SiGit, SiGithub, SiJupyter 
} from 'react-icons/si';
import { 
  FaChartLine, FaTree, FaProjectDiagram, FaCodeBranch, 
  FaFilter, FaNetworkWired, FaChartPie, FaShieldAlt 
} from 'react-icons/fa';

// Map string icon names to actual components
const iconMap = {
  SiPython: <SiPython />, SiMysql: <SiMysql />, SiPandas: <SiPandas />, 
  SiNumpy: <SiNumpy />, FaChartLine: <FaChartLine />, SiScikitlearn: <SiScikitlearn />, 
  SiXgboost: <SiScikitlearn />, // XGBoost isn't always in Si, fallback to scikit icon
  FaTree: <FaTree />, FaProjectDiagram: <FaProjectDiagram />, FaCodeBranch: <FaCodeBranch />, 
  FaFilter: <FaFilter />, SiPytorch: <SiPytorch />, SiKeras: <SiKeras />, 
  FaNetworkWired: <FaNetworkWired />, FaChartPie: <FaChartPie />, FaShieldAlt: <FaShieldAlt />, 
  SiFastapi: <SiFastapi />, SiStreamlit: <SiStreamlit />, SiGit: <SiGit />, 
  SiGithub: <SiGithub />, SiVisualstudiocode: <FaCodeBranch />, SiJupyter: <SiJupyter />
};

const Skills = () => {
  // Flatten all skills and split them into 3 rows
  const allSkills = Object.values(skills).flat();
  const rows = [[], [], []];
  allSkills.forEach((skill, index) => {
    rows[index % 3].push(skill);
  });

  return (
    <section id="skills" className="py-24 bg-white dark:bg-transparent relative transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-bold tracking-widest text-purple-600 dark:text-purple-400 uppercase mb-4 transition-colors">
            SKILLS & EXPERTISE
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 dark:text-white uppercase leading-tight transition-colors">
            Technical Toolkit
          </h2>
        </motion.div>
      </div>

      {/* Full-width Marquee Container */}
      <div className="w-full flex flex-col space-y-6 md:space-y-8 fade-edges py-4">
        {rows.map((row, idx) => {
          // Duplicate items to ensure smooth infinite scroll without gaps
          const repeatedItems = [...row, ...row, ...row, ...row, ...row];
          const isReverse = idx % 2 !== 0;

          return (
            <div key={idx} className="flex overflow-hidden group w-full relative">
              <div className={`flex w-max space-x-4 md:space-x-6 px-2 md:px-3 animate-marquee ${isReverse ? 'animate-marquee-reverse' : ''} group-hover:pause-animation`}>
                {repeatedItems.map((skill, i) => (
                  <div 
                    key={i} 
                    className="flex items-center px-6 py-3 md:px-8 md:py-4 bg-gray-50 dark:bg-[#18181b] rounded-full border border-gray-200 dark:border-white/10 text-gray-800 dark:text-gray-200 text-base md:text-lg font-bold shadow-sm glow-border transition-all hover:-translate-y-1 hover:border-purple-300 dark:hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400 cursor-pointer min-w-max"
                  >
                    <span className="mr-3 text-xl md:text-2xl text-purple-600 dark:text-purple-400">
                      {iconMap[skill.icon] || <FaCodeBranch />}
                    </span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
