import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const SocialLinks = () => {
  // Add your profile URLs and email below
  const githubUrl = 'https://github.com/AnteTeno';
  const linkedinUrl = 'https://www.linkedin.com/in/ante-tenoranta-71865a28b/';
  const email = 'tenoranta@gmail.com';

  return (
    <div className="social-links">
      <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
      <a href={`mailto:${email}`} aria-label="Email"><FaEnvelope /></a>
    </div>
  );
}

export default SocialLinks;
