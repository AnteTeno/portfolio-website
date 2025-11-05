import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-subtitle">Hi, my name is</p>
          <h1 className="hero-title">Ánte.</h1>
          <h2 className="hero-tagline">I’m a computer science student specializing in cybersecurity, 
            but I love exploring everything from web development to software engineering and beyond. 
            Check out my projects and get to know more about me!</h2>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#story" className="btn btn-primary">Read my story</a>
          </div>
        </div>
        <img src="/IMG_4882.jpeg" alt="Your Name" className="hero-image" />
      </div>
    </section>
  );
};

export default Hero;
