import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Student',
      company: 'University of Oulu',
      years: '2023 - Present',
      description: 'Pursuing a Bachelor\'s degree in Computer Science with a focus on cybersecurity. Engaged in various projects and coursework that improve my problem-solving skills and technical knowledge.'
    },
    {
      title: 'Construction worker',
      company: 'Tekforvalt AS, Tana Norway',
      years: 'Summers: 2019, 2021, 2022, 2025',
      description: 'Learned various construction skills including carpentry, painting, and general labor tasks on different kinds of small construction projects. Gained hands-on experience in teamwork, safety protocols, and project management.'
    },
    {
      title: 'Construction worker',
      company: 'Byggmester M.Paulen AS, Karasjok Norway',
      years: 'May-September 2024',
      description: 'Did various kinds of construction work such as renovations, carpentry and painting.'
    },
    {
      title: 'Kindergarten Assistant',
      company: 'Diddimanáidgardi, Tana Norway',
      years: 'February-June 2023',
      description: 'Supported daily classroom activities and provided attentive care for children aged 2–6 in a bilingual learning environment. Planned and implemented engaging lessons and activities that promoted social, emotional, and cognitive development Fostered a safe, nurturing, and inclusive atmosphere encouraging curiosity and growth Collaborated closely with teachers, parents, and staff to ensure consistent communication and support for each child’s development.'
    },
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
