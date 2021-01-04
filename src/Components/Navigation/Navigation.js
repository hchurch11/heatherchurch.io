import React from "react";
import "./Navigation.css";

export class Navigation extends React.Component {
  render() {
    return (
      <>
        <nav
          className="d-flex justify-content-center navbar fixed-top"
          id="navbar"
        >
          <a href="#welcome-section" className="nav-link btn btn-outline-light">
            About Me
          </a>
          <a href="#projects" className="nav-link btn btn-outline-light">
            Projects
          </a>
          <a href="#contact" className="nav-link btn btn-outline-light">
            Contact
          </a>
          <a href="#Music" className="nav-link btn btn-outline-light">
            Music
          </a>
          <a href="#Education" className="nav-link btn btn-outline-light">
            Education
          </a>
          <a href="#Blog" className="nav-link btn btn-outline-light">
            Blog
          </a>
        </nav>
      </>
    );
  }
}
