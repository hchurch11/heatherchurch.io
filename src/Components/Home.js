import React from "react";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Home() {
  return (
    <div className="Home">
      <section className="welcome-section vh-100">
        <h1>Heather Church</h1>
        <h3>frontend developer</h3>
      </section>
      <Projects />
      <Contact />
    </div>
  );
}
