import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
     {
      name: 'YO-prep (on-going)',
      description: 'YOPrep is a Spring-boot REST API + React frontend application for Finnish matriculation exam practice, featuring flexible JSON-based question storage, and user authentication with BCrypt' ,
      imageUrl: 'yolakki.png', 
      githubUrl: 'https://github.com/AnteTeno/yo-prep'
    },
    {
      name: 'Mobile Computing coursework',
      description: 'Repository for University of Oulu course Mobile Computing, where we learned about moblie development, Kotlin, Android Studio and Jetpack Compose.' ,
      imageUrl: 'unioulu.png', 
      githubUrl: 'https://github.com/AnteTeno/yo-prep'
    },
    {
      name: 'CS skin arbitrage bot',
      description: 'CS Skinbot is a Counter-Strike skin trading application that fetches deal data from CSGOEmpire API and saves it to database for market analysis. The application consists of a FastAPI backend and a React frontend with user authentication.' ,
      imageUrl: 'cslogo.png', 
      githubUrl: 'https://github.com/AnteTeno/cs_skinbot'
    },
    {
      name: 'Datastructures and Algorithms course repository',
      description: 'Repository containing solutions and implementations for various data structures and algorithms as part of a university course. Implemented in Java.',
      imageUrl: 'unioulu.png', 
      githubUrl: 'https://github.com/AnteTeno/Data-structures-and-algorithms'
    },
    {
      name: 'Leetcode solutions',
      description: 'A collection of solutions to various coding problems from Leetcode, implemented in Python. Covers a wide range of topics including arrays, strings, algorithms, and data structures.',
      imageUrl: 'leetcode.png', 
      githubUrl: 'https://github.com/AnteTeno/LeetCode'
    },
    {
      name: 'Portfolio website',
      description: 'A personal portfolio website showcasing my projects, experience, and journey in computer science and engineering.',
      imageUrl: 'portfolio-website.png', 
      githubUrl: 'https://github.com/AnteTeno/portfolio-website'
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