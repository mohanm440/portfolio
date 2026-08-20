import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import WhatIDo from '../components/WhatIDo';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';

const Home = () => {
  useEffect(() => {
    // If there's a hash in the URL (like #projects), scroll to it after rendering
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // tiny delay ensures all components are mounted before scrolling
    } else {
      window.scrollTo(0, 0); // scroll to top if no hash
    }
  }, []);

  return (
    <div className="w-full">
      <Hero />
      <About />
      <Skills />
      <WhatIDo />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
    </div>
  );
};

export default Home;
