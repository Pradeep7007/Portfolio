import React from 'react';
import { project } from '../assests/Deatils.js';
import './Project.css';

const Project = () => {
  return (
    <div className='all main-content'>
     <div className="skills-container">
      {project.map(({ img, type, explanation, link }, index) => (
        <div className="skill-card" key={index}>
          <img src={img} alt={`Project ${index + 1}`} className="skill-image" />
          <div className="skill-content">
            <h5 className="skill-type">{type.toUpperCase()}</h5>
            <p className="skill-explanation">{explanation}</p>
            {link && (
              <button
                className="project-button mx-auto"
                onClick={() => window.open(link, '_blank')}
                aria-label={`View project: ${type}`}
              >
                View Project
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Project;
