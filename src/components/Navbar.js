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
  // Open external links for LinkedIn and Instagram in new tab
  const handleNavigate = (path) => {
    if (path === '/linkedin') {
      window.open('https://www.linkedin.com/in/pradeep7007/', '_blank');
      closeDrawer();
    } else if (path === '/instagram') {
      window.open('https://www.instagram.com/', '_blank');
      closeDrawer();
    } else {
      navigate(path);
      closeDrawer();
    }
  };

   const handleDownloadCV = () => {
    const confirmDownload = window.confirm('Do you want to download the Pradeep Resume ?');
    if (confirmDownload) {
      // Trigger download
      // If you have a public URL for the file, use it directly, e.g.:
      const cvUrl = './Resume.pdf'; // path to your CV file (put resume.pdf in public folder)

      // Create a temporary link to download the file
      const link = document.createElement('a');
      link.href = cvUrl;
      link.download = 'Pradeep-BIT-Resume.pdf'; // filename for the downloaded file
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Close drawer if open
      closeDrawer();
    } else {
      // User canceled download, do nothing
    }
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
        <li onClick={handleDownloadCV}>
          <img src={resume} alt="resume" />Download Resume
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
