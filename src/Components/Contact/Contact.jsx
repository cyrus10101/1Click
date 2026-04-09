import React from "react";
import "./Contact.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


<FaFacebookF />
const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <p className="contact-tag">Get In Touch</p>
        <h2>Let's connect and create something meaningful</h2>
      </div>

      <div className="contact-wrapper">
        <div className="contact-info">
          <div className="info-block">
            <span>Phone</span>
            <a href="tel:+9779800000000">+977 9800000000</a>
          </div>

          <div className="info-block">
            <a href="mailto:cyrusrai63@gmail.com">
                <MdEmail />
            </a>
          </div>

          <div className="info-block">
            <span>Location</span>
            <p>Kathmandu, Nepal</p>
          </div>

          <div className="info-block">
            <div className="social-icons">
                <a href="https://facebook.com">
                    <FaFacebookF />
                </a>
                <a href="https://instagram.com">
                </a>
            </div>
            <FaFacebookF /> 
            <a href="https://instagram.com/" target="_blank" rel="noreferrer">
                <FaFacebookF />
            </a>
          </div>
        </div>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="Enter your full name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label htmlFor="service">Service Type</label>
            <input
              type="text"
              id="service"
              placeholder="Wedding, Event, Portrait..."
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Project Details</label>
            <textarea
              id="message"
              rows="6"
              placeholder="Tell us about your project..."
            ></textarea>
          </div>

          <button type="submit" className="contact-btn">
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;