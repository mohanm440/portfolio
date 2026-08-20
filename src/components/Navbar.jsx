import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';

const Navbar = ({ toggleTheme, theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
  ];

  // Optional: Add scroll spy to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 top-6 px-4 pointer-events-none flex justify-center">
      
      {/* Desktop Floating Pill */}
      <div className="pointer-events-auto hidden lg:flex items-center bg-black rounded-full p-2 shadow-2xl border border-white/10 backdrop-blur-md">
        
        {/* Profile Image (Logo) */}
        <a href="#home" className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 shrink-0 hover:scale-105 transition-transform">
          <img src="/portrait.png" alt="Mohan" className="w-full h-full object-cover" />
        </a>

        {/* Links */}
        <div className="flex items-center space-x-6 px-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-xs font-bold uppercase tracking-widest transition-colors ${isActive ? 'text-purple-400' : 'text-gray-300 hover:text-white'}`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Theme Toggle */}
        <button onClick={toggleTheme} className="text-gray-300 hover:text-purple-400 transition-colors ml-4 mr-2">
          {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
        </button>
        
        {/* Contact Button */}
        <a href="#contact" className="ml-2 px-8 py-3 bg-white text-black rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gray-200 hover:scale-105 transition-all">
          Contact
        </a>
      </div>

      {/* Mobile Navbar (Matches Theme) */}
      <div className="pointer-events-auto lg:hidden w-full flex justify-between items-center bg-black rounded-full p-2 shadow-2xl border border-white/10">
        <a href="#home" className="w-10 h-10 ml-1 rounded-full overflow-hidden border border-white/20">
          <img src="/portrait.png" alt="Mohan" className="w-full h-full object-cover" />
        </a>
        <div className="flex items-center space-x-2">
          <button onClick={toggleTheme} className="text-gray-300 hover:text-purple-400 p-2">
            {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          <button className="text-white p-2 mr-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            className="pointer-events-auto lg:hidden absolute top-20 left-4 right-4 bg-black rounded-3xl shadow-2xl border border-white/10 p-6 flex flex-col space-y-6 items-center"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)} 
                className="text-gray-300 font-bold text-sm tracking-widest uppercase hover:text-purple-400"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="w-full text-center px-6 py-4 bg-white text-black rounded-full font-bold text-sm tracking-widest uppercase"
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
};

export default Navbar;
