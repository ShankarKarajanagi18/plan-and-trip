import React from 'react';
import './Hero.css';

const Hero = () => {
  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(${process.env.PUBLIC_URL}/home.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat'
  };

  return (
    <div className="hero" style={heroStyle}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          Explore
        </h1>
        <p className="hero-subtitle">
          THIS WONDERFUL<br />
          <span className="world-text">WORLD</span> with us
        </p>
      </div>
    </div>
  );
};

export default Hero;
