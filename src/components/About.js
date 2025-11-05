import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h3>Here is a list of my skills:</h3>
        <ul className="skills-list">
          <li><i className="devicon-java-plain colored"></i> Java</li>
          <li><i className="devicon-python-plain colored"></i> Python</li>
          <li><i className="devicon-sqldeveloper-plain colored"></i> SQL</li>
          <li><i className="devicon-linux-plain colored"></i> Linux </li>
          <li><i className="devicon-javascript-plain colored"></i> JavaScript </li>
          <li><i className="devicon-react-original colored"></i> React.js</li>
          <li><i className="devicon-nodejs-plain colored"></i> Node.js</li>
          <li><i className="devicon-html5-plain colored"></i> HTML5</li>
          <li><i className="devicon-css3-plain colored"></i> CSS3</li>
           <li><i className="devicon-git-plain colored"></i> Git <i className="devicon-github-plain colored"></i> GitHub</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
