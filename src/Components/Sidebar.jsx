// Sidebar.js
import React from 'react';
import { FaReact, FaLink, FaDatabase, FaJsSquare, FaAngular, FaGitAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiDotnet, SiTailwindcss } from 'react-icons/si';

const Sidebar = ({ activeSection, scrollToSection }) => {
  const getActiveClass = (sectionName) => activeSection === sectionName ? 'border border-blue-500 text-blue-500 px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-110' : 'hover:border hover:border-blue-500 hover:text-blue-500 px-4 py-2 rounded-md transition duration-300 ease-in-out transform hover:scale-110';

  return (
    <div className="fixed top-0 h-full flex flex-col justify-between text-white p-4">
      <div className="mt-24">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl mb-4 font-bold">Yiğit ÖZAY</h1>
          <p className="text-xl">Developer</p>
        </div>
        <div className="flex flex-col items-center mt-24">
        <p className={`cursor-pointer ${getActiveClass('about')}`} onClick={() => scrollToSection('about')}>About Me</p>
          <p className={`cursor-pointer ${getActiveClass('experience')}`} onClick={() => scrollToSection('experience')}>Experience</p>
          <p className={`cursor-pointer ${getActiveClass('projects')}`} onClick={() => scrollToSection('projects')}>Projects</p>
        </div>
      </div>
      <div className="pb-10 mb-5">
        <div className="flex justify-center space-x-4 mb-10">
          <FaReact size="36" />
          <SiTailwindcss size="36" />
          <FaDatabase size="36" />
          <FaJsSquare size="36" />
          <FaAngular size="36" />
          <SiDotnet size="36" />
          <FaGitAlt size="36" />
        </div>
        <div className="flex justify-center space-x-4">
          <a href="https://www.linkedin.com/in/yiğit-özay/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size="36" />
          </a>
          <a href="https://github.com/yigitozay" target="_blank" rel="noopener noreferrer">
            <FaGithub size="36" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
