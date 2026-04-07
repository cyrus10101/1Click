import React from "react";
import "./Portfolio.css";

import img1 from "../../assets/portfolio1.jpg";
import img2 from "../../assets/portfolio2.jpg";
import img3 from "../../assets/portfolio3.jpg";
import img4 from "../../assets/portfolio4.jpg";
import img5 from "../../assets/portfolio5.jpg";
import img6 from "../../assets/portfolio6.jpg";

const portfolioData = [
  {
    id: 1,
    title: "Wedding Story",
    category: "Wedding",
    img: img1,
  },
  {
    id: 2,
    title: "Pre-Wedding Shoot",
    category: "Pre-Wedding",
    img: img2,
  },
  {
    id: 3,
    title: "Cinematic Film",
    category: "Videography",
    img: img3,
  },
  {
    id: 4,
    title: "Event Coverage",
    category: "Event",
    img: img4,
  },
  {
    id: 5,
    title: "Baby Shoot",
    category: "Portrait",
    img: img5,
  },
  {
    id: 6,
    title: "Fashion Frame",
    category: "Fashion",
    img: img6,
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-header">
        <p className="portfolio-tag">Our Work</p>
        <h2>Selected Projects</h2>
      </div>

      <div className="portfolio-grid">
        {portfolioData.map((item) => (
          <div
            key={item.id}
            className="portfolio-card"
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <div className="portfolio-overlay">
              <span>{item.category}</span>
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;