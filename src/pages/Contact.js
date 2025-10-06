import React from 'react';
import './Contact.css';

// Import images from assets
import emailImg from '../assests/gmail.png';
import linkedinImg from '../assests/linkedin.png';
import githubImg from '../assests/github.webp';
import leetcodeImg from '../assests/leetcode.jpg';
import instagramImg from '../assests/instagram.png';

function Contact() {
  return (
    <div className='main-content'>
      <h2 className='lets'>Let’s Bring Your Idea to Life!</h2>
      <p>
        Whether it's brainstorming a new project, discussing design optimizations, or just sharing creative insights, I’m always excited to collaborate. Reach out to me and let’s craft something exceptional — together!
      </p>

      {/* Personal Info Section */}
      <div className='contact-info'>
        <p><strong>Name:</strong> Pradeep S</p>
        <p><strong>Phone:</strong> <a href="tel:+919443249161">+91 94432 49161</a></p>
        <p><strong>Location:</strong> Namakkal , 637018.</p>
      </div>

      <div className='contact-buttons'>
        {/* Email Button */}
        <a href="mailto:pmspradeep007@gmail.com" className='contact-button' target="_blank" rel="noopener noreferrer">
          <img src={emailImg} alt="Email" />
          Email
        </a>

        {/* LinkedIn Button */}
        <a href="https://www.linkedin.com/in/pradeep7007/" className='contact-button' target="_blank" rel="noopener noreferrer">
          <img src={linkedinImg} alt="LinkedIn" />
          LinkedIn
        </a>

        {/* GitHub Button */}
        <a href="https://github.com/Pradeep7007" className='contact-button' target="_blank" rel="noopener noreferrer">
          <img src={githubImg} alt="GitHub" />
          GitHub
        </a>

        {/* LeetCode Button */}
        <a href="https://leetcode.com/u/Pradeep_26/" className='contact-button' target="_blank" rel="noopener noreferrer">
          <img src={leetcodeImg} alt="LeetCode" />
          LeetCode
        </a>

        {/* Instagram Button */}
        <a href="https://www.instagram.com/" className='contact-button' target="_blank" rel="noopener noreferrer">
          <img src={instagramImg} alt="Instagram" />
          Instagram
        </a>
      </div>
    </div>
  );
}

export default Contact;
