import React from 'react';
import './AcademicRecord.css';

const AcademicRecord = () => {
  const degreeInfo = {
    degree: "Bachelor's Degree in Computer Science and Engineering",
    university: "University of Oulu",
    startYear: "2023",
    expectedGraduation: "2025",
    specialization: "Cybersecurity",
    creditsCompleted: 148,
    creditsTotal: 180
  };

  

  return (
    <section id="academic" className="academic-record-section">
      <h2 className="section-title">Academic Progress</h2>

      <div className="degree-info">
        <h3>{degreeInfo.degree}</h3>
        <p className="university">{degreeInfo.university}</p>
        <p className="timeline">{degreeInfo.startYear} - {degreeInfo.expectedGraduation} (Expected)</p>
        <p className="specialization">Module of option: {degreeInfo.specialization}</p>

        <div className="progress-bar-container">
          <div className="progress-info">
            <span>Degree Progress</span>
            <span>{degreeInfo.creditsCompleted} / {degreeInfo.creditsTotal} credits ({Math.round((degreeInfo.creditsCompleted / degreeInfo.creditsTotal) * 100)}%)</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${(degreeInfo.creditsCompleted / degreeInfo.creditsTotal) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default AcademicRecord;