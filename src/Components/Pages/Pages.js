import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Blog from "../Blog/Blog";
import Education from "../Education/Education";
import Music from "../Music/Music";
import AboutMe from "../AboutMe/AboutMe";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

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
