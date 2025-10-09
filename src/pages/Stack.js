import React from 'react';
import './Stack.css';
import skill from '../assests/skill.png';
import { skills } from '../assests/Deatils';

function Stack() {
  return (
    <div className='all main-content'>
      <div className='skills'>
        <div className='flex-center'>
          <div className='flex-row gap-small align-center d-flex gap-2'>
            <img
              src={skill}
              alt='skill logo'
              width={40}
              height={40}
              style={{ borderRadius: '10px' }}
            />
            <h2 className='demo-bold no-margin mt-1'>My Technical Proficiency</h2>
          </div>
        </div>

        <div className="skills-container">
          {skills.map(({ category, skills }) => (
            <div key={category} className="stack-category-section">
              <h2 className="stack-category-title">{category} : </h2>
              <div className="stack-skills-grid">
                {skills.map(({ image, title, explanation }) => (
                  <div key={title} className="stack-skill-card">
                    <img src={image} alt={title} className="stack-skill-image rounded-circle" />
                    <h3 className="stack-skill-title">{title}</h3>
                    <p className="stack-skill-explanation">{explanation}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stack;
