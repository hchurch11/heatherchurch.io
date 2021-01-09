import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";
import Education from "./Education";
import Music from "./Music";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/#Projects" element={<Projects />} />
        <Route path="/#Contact" element={<Contact />} />
      </Route>
      <Route path="Blog" element={<Blog />} />
      <Route path="Education" element={<Education />} />
      <Route path="Music" element={<Music />} />
      <Route path="AboutMe" element={<AboutMe />} />
    </Routes>
  );
}
