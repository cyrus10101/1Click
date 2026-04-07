import React from "react";
import "./About.css";
import aboutImage from "../../assets/about.jpg";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-top">
        <p className="about-tag">About OneClick</p>
        <h2>
          We don’t just capture events —
          <span> we preserve emotion, presence, and story.</span>
        </h2>
      </div>

      <div className="about-content">
        <div className="about-image">
          <img src={aboutImage} alt="OneClick team at work" />
        </div>

        <div className="about-text">
          <p className="about-lead">
            OneClick is a creative photography and videography studio focused on
            turning real moments into timeless visual experiences.
          </p>

          <p>
            From weddings and pre-wedding sessions to events, portraits, and
            cinematic films, we approach every project with precision,
            creativity, and care. Our goal is not only to document what happens,
            but to preserve how it felt.
          </p>

          <p>
            We believe the strongest visuals come from authenticity. That is why
            we focus on genuine emotion, elegant composition, and storytelling
            that feels personal to every client.
          </p>

          <div className="about-stats">
            <div className="stat-card">
              <h3>100+</h3>
              <p>Projects Captured</p>
            </div>

            <div className="stat-card">
              <h3>4+</h3>
              <p>Core Services</p>
            </div>

            <div className="stat-card">
              <h3>99%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>

          <a href="#contact" className="about-btn">
            Let’s Work Together
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;