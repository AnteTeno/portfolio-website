import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Alternatively you can find me here:</p>
      <div className="social-icons">
        <a href="https://github.com/AnteTeno" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/ante-tenoranta-71865a28b/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="mailto:tenoranta@gmail.com"><FaEnvelope /></a>
      </div>
      <p>&copy; {new Date().getFullYear()} Ante Tenoranta</p>
    </footer>
  );
}

export default Footer;
