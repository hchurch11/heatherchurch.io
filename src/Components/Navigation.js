import React from "react";

import { Link } from "react-router-dom";
import { NavHashLink as NavLink } from "react-router-hash-link";

export default function Navigation() {
  return (
    <div className="Navigation">
      <nav className="fixed-top">
        <Link to="/" className="nav-link ">
          Home
        </Link>
        <NavLink smooth to="/#Projects" className="nav-link ">
          Projects
        </NavLink>
        <NavLink smooth to="/#Contact" className="nav-link ">
          Contact
        </NavLink>
        <Link to="AboutMe" className="nav-link ">
          About Me
        </Link>

        <Link to="Music" className="nav-link ">
          Music
        </Link>
        <Link to="Education" className="nav-link ">
          Education
        </Link>
        <Link to="Blog" className="nav-link ">
          Blog
        </Link>
      </nav>
    </div>
  );
}
