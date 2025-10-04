import React from 'react'
import './Stack.css';
import skill from '../assests/skill.png';
import { my_stack } from '../assests/Deatils.js';

function Stack() {
  return (
    <div className='all main-content'>
      
      <div className='skills'>

        <div className='d-flex justify-content-center'>
        <div className='d-flex gap-2 align-items-center'>
        <img
            src={skill}
            alt='skill logo'
            width={40}
            height={40}
            style={{ borderRadius: '10px' }}
        />
        <h3 className='demo-semibold m-0'>My Technical Proficiency</h3>
        </div>
        </div>

        <div className='mt-3'>
            {my_stack.map((stack,index)=>(
                <div className='mt-4'>
                    <h3 className='font-size'>{stack.category} : </h3>

                <div className='d-flex gap-2 flex-wrap'>
                    {stack.skills.map((skill)=>(
                        <div className='d-flex align-items-center justify-content-center skill-bg p-2' 
                        style={{ minWidth:'80px', minHeight: '30px',padding:'5px' }}>
                        <h6 className='m-0 skill-name'>{skill.name}</h6>
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
