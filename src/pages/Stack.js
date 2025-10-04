import React from 'react'
import './Stack.css';
import skill from '../assests/skill.png';
import { technicalSkills } from '../assests/Deatils.js';

function Stack() {
  return (
    <div className='all main-content'>
      
      <div className='skills'>

        <div className="container text-center mb-4">
  <div className="d-flex justify-content-center align-items-center flex-wrap gap-2">
    <img
      src={skill}
      alt='skill logo'
      width={40}
      height={40}
      style={{ borderRadius: '10px' }}
    />
    <h2 className='demo-bold m-0'>My Technical Proficiency</h2>
  </div>
</div>


        <div className="skills-container">
      {technicalSkills.map((category, index) => (
        <div key={index} className="category-block">
          <h2 className="category-title demo-semibold">{category.category}:</h2>
          <div className="skills-grid">
            {category.skills.map((skill, idx) => (
              <div key={idx} className="skill-card">
                <div className="skill-header">
                  <img src={skill.image} alt={skill.name} className="skill-image" />
                  <h3 className="skill-name">{skill.name}</h3>
                </div>
                <p className="skill-description">{skill.shortExplanation}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    </div>
    </div>
  )
}

export default Stack
