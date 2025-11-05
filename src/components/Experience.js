import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Tech Solutions Inc.',
      years: '2022 - Present',
      description: 'Developed and maintained web applications using React and Node.js. Collaborated with cross-functional teams to deliver high-quality software.'
    },
    {
      title: 'Junior Developer',
      company: 'Web Innovations',
      years: '2020 - 2022',
      description: 'Assisted in the development of client websites, focusing on front-end implementation and responsive design.'
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Experience</h2>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div className="experience-item" key={index}>
            <div className="experience-item-content">
              <h3>{exp.title} at {exp.company}</h3>
              <span className="experience-years">{exp.years}</span>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
