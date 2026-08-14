import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import GithubProjects from './components/GithubProjects';
import Archive from './components/Archive';
import { GithubIcon, LinkedinIcon } from './components/Icons';
import { personalInfo } from './data/portfolioData';

function App() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <GithubProjects />
        <Archive />
      </main>

      {/* Minimal Footer */}
      <footer className="w-full py-12 px-8 md:px-16 border-t border-dashed border-black/10 flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm font-[var(--font-cursive)] text-2xl mb-4 md:mb-0">
          Mohan M
        </div>
        <div className="flex space-x-6">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-black/60 hover:text-black transition-colors">
            <GithubIcon className="w-5 h-5" />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-black/60 hover:text-black transition-colors">
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a href={personalInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="text-xs tracking-widest uppercase text-black/60 hover:text-black transition-colors flex items-center">
            WhatsApp
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
