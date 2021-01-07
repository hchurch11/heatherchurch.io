import React from "react";
import "./Music.css";
import ReactPlayer from "react-player";
import { Row, Col } from "react-bootstrap";

export default function Music() {
  return (
    <div className="Music container-fluid">
      <div className="section">
        <h1 className="page-title"> Check out my Music side!</h1>
        <p className="videoNote">
          The following videos are some of the projects that I worked on as a
          musician. Although I am switching careers full-time, I hope to still
          be able to teach and play in some capacity in the future.
        </p>
      </div>
      <Row className="videos_wrapper">
        <Col md={8}>
          <ReactPlayer
            width="100%"
            url="https://www.youtube.com/embed/5jUj1-4AU_g"
          />
          <p>Xylophone Rag</p>
        </Col>
        <Col md={8}>
          <ReactPlayer
            width="100%"
            url="https://www.youtube.com/embed/AnQxAe2JFl8"
          />
          <p>Solo Marimba</p>
        </Col>
      </Row>
      <Row className="videos_wrapper">
        <Col md={8}>
          <ReactPlayer
            width="100%"
            url="https://www.youtube.com/embed/zLmQmYrhITg"
          />
          <p>Percussion Concerto</p>
        </Col>
        <Col md={8}>
          <ReactPlayer
            width="100%"
            url="https://www.youtube.com/embed/8_kX5lQXUx4"
          />
          <p>Collaboration Quarantine Project</p>
        </Col>
      </Row>
    </div>
  );
}
