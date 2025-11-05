import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      name: 'CS skin arbitrage bot (Under development)',
      description: 'CS skin arbitrage bot scans CSGOEmpire auction items for underpriced items, and flags them for purchase. Built using Python, Streamlit, and SQLite for database.',
      imageUrl: 'cslogo.png', 
      githubUrl: 'https://github.com/AnteTeno/cs_skinbot'
    },
    {
      name: 'Datastructures and Algorithms course repository',
      description: 'Repository containing solutions and implementations for various data structures and algorithms as part of a university course. Implemented in Java.',
      imageUrl: 'datastructures.png', 
      githubUrl: 'https://github.com/AnteTeno/Data-structures-and-algorithms'
    },
    {
      name: 'Leetcode solutions',
      description: 'A collection of solutions to various coding problems from Leetcode, implemented in Python. Covers a wide range of topics including arrays, strings, algorithms, and data structures.',
      imageUrl: 'leetcode.png', 
      githubUrl: 'https://github.com/AnteTeno/LeetCode'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.imageUrl} alt={project.name} className="project-image" />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;