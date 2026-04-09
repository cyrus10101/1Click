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
import work9 from "../../assets/works/work9.jpg";
import work10 from "../../assets/works/work10.jpg";
import work11 from "../../assets/works/work11.jpg";
import work12 from "../../assets/works/work12.jpg";
import work13 from "../../assets/works/work13.jpg";
import work14 from "../../assets/works/work14.jpg";
import work15 from "../../assets/works/work15.jpg";
import work16 from "../../assets/works/work16.jpg";
import work17 from "../../assets/works/work17.jpg";
/*import work18 from "../../assets/works/work9.jpg";
import work19 from "../../assets/works/work9.jpg";
import work20 from "../../assets/works/work9.jpg";
import work21 from "../../assets/works/work9.jpg";
import work22 from "../../assets/works/work9.jpg";
import work23 from "../../assets/works/work9.jpg";
import work24 from "../../assets/works/work9.jpg";
import work25 from "../../assets/works/work9.jpg";
import work26 from "../../assets/works/work9.jpg";
import work27 from "../../assets/works/work9.jpg";
import work28 from "../../assets/works/work9.jpg";
import work29 from "../../assets/works/work9.jpg";
import work30 from "../../assets/works/work9.jpg";*/

const works = [
  { id: 1, img: work1},
  { id: 2, img: work2},
  { id: 3, img: work3},
  { id: 4, img: work4},
  { id: 5, img: work5},
  { id: 6, img: work6 },
  { id: 7, img: work7},
  { id: 8, img: work8},
  { id: 9, img: work9},
  { id: 10, img: work10},
  { id: 11, img: work11},
  { id: 12, img: work12},
  { id: 13, img: work13},
  { id: 14, img: work14},
  { id: 15, img: work15},
  { id: 16, img: work16},
  { id: 17, img: work17},
];

const OurWorks = () => {
  return (
    <section id="service" className="our-works-section">
      <div className="our-works-header">
        <p className="our-works-tag">Our Works</p>
        <h2>Lookbook</h2>
      </div>
      <div className="works-container">
        <div className="works-grid">
          {works.map((work) => (
            <div key={work.id} className="work-card">
              <img src={work.img} alt="Our Work" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWorks;