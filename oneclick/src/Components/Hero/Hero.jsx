import React from "react";
import "./Hero.css";
import teaser from "../../assets/Treser.mp4"; 

const Hero = () => {
  return (
    <section className="hero">

      {/* Background Video */}
      <video
        className = "hero-video"
        autoPlay
        loop
        muted
        playsInline
        preload = "auto"
        >
          <source src={teaser} type="video/mp4" />
        </video>

      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
        <div class="hero-content">
          <h1>
            Capture Moments That <span>Feel Alive</span>
          </h1>
      
          <p>
            We turn your memories into timeless visual stories — crafted with precision and emotion.
          </p>
      
          <div class="hero-buttons">
            <button class="primary-btn">Start Your Story</button>
            <button class="secondary-btn">View Portfolio</button>
          </div>
      
          <p class="trust">Trusted by 100+ clients</p>
        </div>
    </section>
  );
};

export default Hero;
