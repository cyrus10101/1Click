import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#home" className="logo-link">
        <img src={logo} alt="OneClick Logo" />
      </a>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About us</a></li>
        <li><a href="#services">Services & Booking</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#team">Our Team</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <a href="#contact" className="nav-cta">Book Now</a>

      <a href="#contact" className="icons">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M10 17l5-5-5-5" />
          <path d="M15 12H3" />
          <path d="M21 19V5a2 2 0 0 0-2-2h-4" />
        </svg>
      </a>
    </nav>
  );
};

export default Navbar;