import React, { useState, useEffect } from 'react';
import './Home.css';
import arrow from '../assests/right-arrow.png';
import one from '../assests/1.png';
import two from '../assests/2.png';
import three from '../assests/3.png';
import { useNavigate } from 'react-router-dom';

const images = [one, two, three];

function Home() {
  const [current, setCurrent] = useState(0);

  const navigate=useNavigate();

  const prevSlide = () => {
    setCurrent(prev => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent(prev => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Auto-scroll every 5 seconds without unnecessary re-renders
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="main-content">
      <div className="avai">
        <button><span></span>Available For Work</button>
      </div>

      <div className="intro">
        <h2>Hey, I'm Pradeep</h2>
      </div>

      <div className='self'>
        <p>
          Experienced in web design and UI/UX with Figma, alongside strong programming skills
          in Java and C. Solid foundation in computer science focused on building efficient,
          user-friendly digital solutions.
        </p>
      </div>

      <div className='page-btn'>
        <button className='navii' onClick={() => handleNavigate('/about')}>About Me <img src={arrow} alt='arrow' /></button>
        <button className='navii' onClick={() => handleNavigate('/projects')} >Explore Projects <img src={arrow} alt='arrow' /></button>
      </div>

      <div>
        <h2 className='mt-2 recent'>Recent Projects</h2>

        <div className="carousel-container">
          <img
            src={images[current]}
            alt={`Slide ${current + 1}`}
            className="carousel-image"
          />
        </div>

        <div className='d-flex justify-content-center'>
        <button onClick={prevSlide} className="carousel-button">‹</button>
        <button onClick={nextSlide} className="carousel-button">›</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
