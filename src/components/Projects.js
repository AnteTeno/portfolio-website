import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      name: 'Project Alpha',
      description: 'A brief description of what this project does and the technologies used.',
      imageUrl: 'https://via.placeholder.com/300', // Placeholder for project screenshot
      githubUrl: '#'
    },
    {
      name: 'Project Beta',
      description: 'A brief description of what this project does and the technologies used.',
      imageUrl: 'https://via.placeholder.com/300', // Placeholder for project screenshot
      githubUrl: '#'
    },
    {
      name: 'Project Gamma',
      description: 'A brief description of what this project does and the technologies used.',
      imageUrl: 'https://via.placeholder.com/300', // Placeholder for project screenshot
      githubUrl: '#'
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