import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Home/Header.tsx';
import Hero from './components/Home/Hero.tsx';
import About from './components/Home/About.tsx';
import Projects from './components/Home/Projects.tsx';
import Contact from './components/Home/Contact.tsx';
import AboutMe from './components/AboutMe/AboutMe.tsx';
import DevProjects from './components/DevProjects/DevProjects.tsx';
import DesignProjects from './components/DesignProjects/DesignProjects.tsx';
import Resume from './components/Resume/Resume.tsx';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

const App: React.FC = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Router>
      <div className="background-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <Header />
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/dev-projects" element={<DevProjects />} />
        <Route path="/design-projects" element={<DesignProjects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>

      <button 
        className={`scroll-to-top ${showScrollButton ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      />
    </Router>
  );
};

export default App;