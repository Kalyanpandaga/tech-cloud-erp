import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero-section text-center">
      <div className="container">
        <h1 className="display-4">Natural Glow</h1>
        <p className="lead">Beautify, protect, moisturize, and nourish your skin.</p>
        <button className="btn btn-dark">View More</button>
      </div>
      <img className="hero-img" src="./assets/dummy-image.jpg" alt="Natural Glow" />
    </section>
  );
};

export default Hero;
