import React from 'react'
import './Navbar.css';
import photo from '../assests/profile-img.jpg';
import home from '../assests/home.png';
import stack from '../assests/stack.png';
import project from '../assests/projects.png';
import contact from '../assests/contact.png';
import about from '../assests/about me.png';

function Navbar() {
  return (
    <div className='nav-bar p-3'>
        <div className='profile d-flex gap-2'>
            <div className='img'>
                <img 
                src={photo} 
                alt='img'
                />
            </div>
            <div>
                <h2>Pradeep S</h2>
                <p>Full Stack Developer</p>
            </div>
        </div>

        <div className='btns'>
            <ul>
                <li><img src={home} alt='home'/>Home</li>
                <li><img src={stack} alt='stack'/>Stack</li>
                <li><img src={project} alt='projects'/>Projects</li>
                <li><img src={about} alt='about'/>About Me</li>
                <li><img src={contact} alt='contact'/>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
