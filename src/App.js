import './App.css';
import About from './Components/About';
import Experience from './Components/Experience';
import Project from './Components/Project';
import Sidebar from './Components/Sidebar';
import React, { useState,useRef, useEffect } from 'react';

function App() {
  const [spotlightPosition, setSpotlightPosition] = useState({ x: -100, y: -100 });
  const isProgrammaticScroll = useRef(false);

  const [activeSection, setActiveSection] = useState('about');

  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);

  const scrollToSection = (sectionName) => {
    isProgrammaticScroll.current = true; 
    setActiveSection(sectionName);
    
    const ref = { about: aboutRef, experience: experienceRef, projects: projectsRef }[sectionName];
    ref.current.scrollIntoView({ behavior: 'smooth' });
  
    setTimeout(() => {
      isProgrammaticScroll.current = false; 
    }, 1000); 
  };
  const handleMouseMove = (event) => {
    setSpotlightPosition({
      x: event.clientX, 
      y: event.clientY, 
    });
  };
  const spotlightStyle = {
    background: `radial-gradient(circle at ${spotlightPosition.x}px ${spotlightPosition.y}px, transparent, rgba(0, 0, 0, 0.85) 70%)`,
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isProgrammaticScroll.current) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );
  
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (experienceRef.current) observer.observe(experienceRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);
  
    return () => observer.disconnect();
  }, []);
  return (
    <div className="flex h-screen bg-blue-950 overflow-hidden" onMouseMove={handleMouseMove}>
      <div className="w-64 fixed inset-y-0 ml-48 p-4 overflow-y-auto z-10">
        <Sidebar activeSection={activeSection} scrollToSection={scrollToSection} />
      </div>
      <div className="flex-1 pl-64 p-6 overflow-y-auto">
         <About ref={aboutRef} />
        <Experience ref={experienceRef}/>
        <Project ref={projectsRef}/>
        
      </div>
      <div className="pointer-events-none absolute inset-0" style={spotlightStyle} />
    </div>
  );
}

export default App;
