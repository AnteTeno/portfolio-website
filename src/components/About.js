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
          <li><i className="devicon-html5-plain colored"></i> HTML5</li>
          <li><i className="devicon-css3-plain colored"></i> CSS3</li>
          <li><i className="devicon-git-plain colored"></i> Git</li>
          <li><i className="devicon-github-plain colored"></i> GitHub </li>
          <li><i className="devicon-docker-plain colored"></i> Docker</li>
          <li><i className="devicon-fastapi-plain colored"></i> FastAPI</li>
          <li><i className="devicon-bash-plain colored"></i> Bash</li>
          <li><i className="devicon-vscode-plain colored"></i> VSCode</li>
          <li><i className="devicon-intellij-plain colored"></i> IntellijIdea</li>
          <li><i className="devicon-maven-plain colored"></i>Maven</li>
          <li><i className="devicon-jetpackcompose-plain colored"></i>Jetpack Compose</li>
          <li><i className="devicon-kotlin-plain colored"></i> Kotlin</li>
          <li><i className="devicon-androidstudio-plain colored"></i> Android Studio</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
