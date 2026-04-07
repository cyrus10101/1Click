import React from "react";
import "./Services.css";
import weddingPhoto from "../../assets/wedding.jpg";
import preWedding from "../../assets/prewedding.jpg";
import videography from "../../assets/videography.jpg";
import eventCoverage from "../../assets/event.jpg";

const services = [
  {
    title: "Wedding Photography",
    desc: "We specelize in caputuring the most beautiful moments of your weeding day with a timeless and eligant approach. From emotional vows to candid smiles, every detail is carefully documented to create a visual story you can cherish forever. Our focus is on authenticity, ensuring that each photograph reflects real emotions and unforgettable memories.”",
    img: weddingPhoto,
  },
  {
    title: "Pre-Wedding Shoot",
    desc: "“Our pre-wedding sessions are designed to capture the natural connection and chemistry between couples in a relaxed and creative environment. We focus on creating beautiful, story-driven visuals that reflect your personality and journey together, giving you memories to treasure even before your special day begins.”",
    img: preWedding,
  },
  {
    title: "Cinematic Videography",
    desc: "We create cinematic wedding films that go beyond simple recording, transforming your special day into a compelling visual story. With attention to detail, storytelling, and emotion, our films are crafted to feel like a movie — allowing you to relive every moment, every emotion, and every memory for years to come.",
    img: videography,
  },
  {
    title: "Event Coverage",
    desc: "We provide complete event coverage with a focus on capturing every important moment with precision and creativity. Whether it’s an intimate gathering or a grand celebration, our team ensures that every detail is documented seamlessly, preserving the essence and atmosphere of your special occasion.",
    img: eventCoverage,
  },
];

const ServicesSection = () => {
  return (
    <section id ="services" className="services-section">
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card"
            style={{ backgroundImage: `url(${service.img})` }}
          >
            <div className="overlay">
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;