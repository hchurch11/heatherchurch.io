import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="Contact">
      <section id="Contact" className="contact-section vh-100">
        <h1 className="page-title"> Contact </h1>
        <div className="contact-section-header">
          <h2 className="text-center">Open for opportunities!</h2>
          <p className="text-center">Let's get to know each other! </p>
        </div>
        <div className="contact-links">
          <a
            id="profile-link"
            href="https://github.com/hchurch11"
            target="_blank"
            rel="noreferrer"
            className="btn contact-details"
          >
            <i className="fab fa-github"></i> GitHub
          </a>

          <a
            href="https://www.instagram.com/musicianturnedtechnerd/"
            target="_blank"
            rel="noreferrer"
            className="btn contact-details"
          >
            <i className="fab fa-instagram"></i> Instagram
          </a>

          <a
            href="https://www.linkedin.com/in/heatherchurchpercedu/"
            target="_blank"
            rel="noreferrer"
            className="btn contact-details"
          >
            <i className="fa fa-linkedin-square" aria-disabled="true"></i>
            LinkedIn
          </a>

          <a
            href="https://www.freecodecamp.org/hchurch11"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            <i className="fa fa5-free-code-camp" aria-disabled="true"></i>
            freeCodeCamp
          </a>
          <a
            href="https://app.netlify.com/teams/hchurch11/sites"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            <i className="fa" aria-disabled="true"></i>Netlify
          </a>
          <a
            href="mailto:heatherlchurch11@gmail.com"
            className="btn contact-details"
          >
            <i className="fas fa-at"></i>Email
          </a>
          <a href="tel:70-899-2512" className="btn contact-details">
            <i className="fas fa-mobile-alt"></i> Call me
          </a>
        </div>
      </section>
    </div>
  );
}
