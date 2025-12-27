import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h3>Here is a list of my skills:</h3>
        <ul className="skills-list">
          <li><i className="devicon-java-plain colored"></i> Java</li>
          <li><i className="devicon-spring-plain colored"></i> Spring</li>
          <li><i className="devicon-maven-plain colored"></i> Maven</li>
          <li><i className="devicon-junit-plain colored"></i> Junit</li>
          <li><i className="devicon-python-plain colored"></i> Python</li>
          <li><i className="devicon-sqlalchemy-plain"></i> SQLAlchemy</li>
          <li><i className="devicon-sqldeveloper-plain colored"></i> SQL</li>
          <li><i className="devicon-linux-plain"></i> Linux </li>
          <li><i className="devicon-git-plain colored"></i> Git <i className="devicon-github-plain colored"></i> GitHub</li>
          <li><i className="devicon-docker-plain colored"></i> Docker</li>
          
        </ul>
      </div>
    </section>
  );
}

export default About;
