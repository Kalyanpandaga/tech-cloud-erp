import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/HeroSection.css'; // Custom styles for the hero section
const bgImgage1 = "https://via.placeholder.com/800x400";
const bgImage2 = "https://via.placeholder.com/800x400";
const bgImage3 = "https://via.placeholder.com/800x400";

function HeroSection() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="hero-slide" style={{ backgroundImage: `url(${bgImgage1})` }}>
          <div className="hero-content">
            <h1>Natural Glow</h1>
            <p>Beaut products, protect, moisturize, and revitalize your skin.</p>
            <button className="btn btn-primary">View More</button>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="hero-slide" style={{ backgroundImage: `url(${bgImage2})` }}>
          <div className="hero-content">
            <h1>Fresh & Radiant</h1>
            <p>Nurture your skin with our exclusive range of products.</p>
            <button className="btn btn-primary">Shop Now</button>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="hero-slide" style={{ backgroundImage: `url(${bgImage3})` }}>
          <div className="hero-content">
            <h1>Healthy Skin</h1>
            <p>Discover the perfect blend of beauty and care.</p>
            <button className="btn btn-primary">Explore Collection</button>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroSection;
