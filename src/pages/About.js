import React from 'react';
import graduation from '../assests/graduation.png';
import school from '../assests/school.png';
import certificate from '../assests/certificate.png';
import './About.css';
import { certifications } from '../assests/Deatils.js';

function About() {
  return (
    <div className='all main-content'>
      <div className='academic'>

        <div className='school'>
          <div className='d-flex gap-2'>
            <img
              src={school}
              alt='school'
              width={30}
              height={30}
            />
            <h2 className='demo-semibold'>School</h2>
          </div>

          <div className='name d-flex gap-2'>
            <span></span>
            <h5 className='demo-medium'>SSLC</h5>
          </div>

          <div>
            <h6 className='ms-3'>Sri Vinayaga Matric Higher Secondary School - 2019-2020</h6>
          </div>

          <div className='name d-flex gap-2'>
            <span></span>
            <h5 className='demo-medium'>HSC</h5>
          </div>

          <div className='ms-3'>
            <h6>Sri Vinayaga Matric Higher Secondary School - 2020-2023</h6>
            <p>Percentage - 87.16 %</p>
          </div>
        </div>

        {/* College Section */}
        <div className='school'>
          <div className='d-flex gap-2'>
            <img
              src={graduation}
              alt='college'
              width={30}
              height={30}
            />
            <h2 className='demo-semibold'>College</h2>
          </div>

          <div className='name d-flex gap-2'>
            <span></span>
            <h5 className='demo-medium'>Bachelor Of Technology ( 2023-2027)</h5>
          </div>

          <div className='ms-3'>
            <h6>Bannari Amman Institute Of Technlogy</h6>
            <h6>B.TECH - Artificial Intelligence and Data Science</h6>

            <p>CGPA - 7.42% - Till 5th Semester </p>
          </div>
        </div>

        {/* Certifications Section */}
        <div className='certi'>
          <div className='d-flex gap-2'>
            <img
              src={certificate}
              alt='certificate'
              width={30}
              height={30}
            />
            <h2 className='demo-semibold'>Certifications</h2>
          </div>

          <div className='certifications-list mt-3'>
            {certifications.map(({ title, img, explanation }, index) => (
              <div key={index} className='certification-item'>
                <h5 className='demo-medium text-center'>{title}</h5>
                <div className='d-flex justify-content-center my-2'>
                  <img src={img} alt={title} className='certi-img' />
                </div>
                <p className='text-center'>{explanation}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
