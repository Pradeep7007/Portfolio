import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import './Navbar.css';
import photo from '../assests/profile-img.jpg';
import home from '../assests/home.png';
import stack from '../assests/stack.png';
import project from '../assests/projects.png';
import contact from '../assests/contact.png';
import about from '../assests/about me.png';
import linkedin from '../assests/linkedin.png';
import resume from '../assests/resume.png';
import instagram from '../assests/instagram.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();  // Initialize navigate

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  // Navigate to the given path and close drawer
  const handleNavigate = (path) => {
    navigate(path);
    closeDrawer();
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="mobile-header">
        <div className="profile-mobile">
          <img src={photo} alt="profile" className="profile-img-mobile" />
          <div>
            <h2 className="name-mobile">Pradeep S</h2>
            <p className="role-mobile">Full Stack Developer</p>
          </div>
        </div>
        <div className="hamburger" onClick={toggleDrawer}>
          {isOpen ? '✕' : '☰'}
        </div>
      </div>

      {/* Sidebar */}
      <nav className={`nav-bar ${isOpen ? 'open' : ''}`}>
        {/* Desktop Profile */}
        <div className="profile desktop-only">
          <div className="img">
            <img src={photo} alt="img" />
          </div>
          <div>
            <h3 className="mt-3">Pradeep S</h3>
            <p>Full Stack Developer</p>
          </div>
        </div>

        <div className="btns">
          <ul>
            <li onClick={() => handleNavigate('/')}>
              <img src={home} alt="home" />Home
            </li>
            <li onClick={() => handleNavigate('/stack')}>
              <img src={stack} alt="stack" />Stack
            </li>
            <li onClick={() => handleNavigate('/projects')}>
              <img src={project} alt="projects" />Projects
            </li>
            <li onClick={() => handleNavigate('/about')}>
              <img src={about} alt="about" />About Me
            </li>
            <li onClick={() => handleNavigate('/contact')}>
              <img src={contact} alt="contact" />Contact
            </li>
          </ul>

          <hr />

          <ul>
            <li onClick={() => handleNavigate('/linkedin')}>
              <img src={linkedin} alt="linkedin" />Linkedin
            </li>
            <li onClick={() => handleNavigate('/instagram')}>
              <img src={instagram} alt="instagram" />Instagram
            </li>
            <li onClick={() => handleNavigate('/resume')}>
              <img src={resume} alt="resume" />Resume
            </li>
          </ul>
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && <div className="overlay" onClick={closeDrawer}></div>}
    </>
  );
}

export default Navbar;
