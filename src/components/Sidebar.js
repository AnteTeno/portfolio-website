import React from 'react';
import './Sidebar.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Assuming react-icons is installed

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <img src="/LOGOFINAL1.png" alt="Portfolio Logo" className="sidebar-logo" />
        <p className="sidebar-role">Ánte Tenoranta</p>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#story">My Story</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="sidebar-social-links">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="mailto:youremail@example.com"><FaEnvelope /></a>
      </div>
    </aside>
  );
};

export default Sidebar;