import React from "react";
import "./OurWorks.css";

import work1 from "../../assets/works/work1.jpg";
import work2 from "../../assets/works/work2.jpg";
import work3 from "../../assets/works/work3.jpg";
import work4 from "../../assets/works/work4.jpg";
import work5 from "../../assets/works/work5.jpg";
import work6 from "../../assets/works/work6.jpg";
import work7 from "../../assets/works/work7.jpg";
import work8 from "../../assets/works/work8.jpg";

const works = [
  { id: 1, img: work1},
  { id: 2, img: work2},
  { id: 3, img: work3},
  { id: 4, img: work4},
  { id: 5, img: work5},
  { id: 6, img: work6 },
  { id: 7, img: work7},
  { id: 8, img: work8},
];

const OurWorks = () => {
  return (
    <section id="service" className="our-works-section">
      <div className="our-works-header">
        <p className="our-works-tag">Our Works</p>
        <p className="our-works-subtext">
          A visual collection of stories, emotions, and frames shaped through our lens.
        </p>
      </div>

      <div className="works-grid">
        {works.map((work) => (
          <div key={work.id} className="work-card">
            <img src={work.img} alt="Our Work" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurWorks;