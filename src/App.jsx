import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectShowcase from './pages/ProjectShowcase';
import CustomCursor from './components/CustomCursor';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col selection:bg-purple-200 selection:text-purple-900 cursor-none bg-white dark:bg-[#121212] transition-colors duration-500">
        <CustomCursor theme={theme} />
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:id" element={<ProjectShowcase />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
