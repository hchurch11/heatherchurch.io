import React from "react";
import "./Projects.css";
import NumberGuess from "../../images/number_guesser.png";
import SurveyForm from "../../images/survey-form.png";
import ProductLanding from "../../images//product_landing.png";
import ReactWeatherApp from "../../images/react_app.png";
/* import ReactRecipe from "../../images/react_recipe-app.png"; */
import ReactToDo from "../../images/React_todo.png";
import OnlineResume from "../../images/resume.png";
import TechDocument from "../../images/technical_document.png";
import WeatherAppOrig from "../../images/weather_app-orig.png";
/* import { ReactTinyLink } from "react-tiny-link"; */
import { Row } from "react-bootstrap";

export default function Projects() {
  return (
    <div className="Projects" id="Projects">
      <section className="project-section" id="Projects">
        <h1 className="page-title"> Projects </h1>
        <Row>
          <div className="col project-tile">
            <h2 className="project-name">Survey Form</h2>
            <img
              className="project-image img-thumbnail"
              src={SurveyForm}
              alt=""
            />
            <a
              href="https://github.com/hchurch11/survey-form
            "
              target="_blank"
              rel="noreferrer"
              className="project-link btn  btn-block btn-outline-light"
            >
              Code
            </a>
            <a
              href="https://app.netlify.com/sites/heathers-survey-form-project"
              target="_blank"
              rel="noreferrer"
              className="project-link btn  btn-block btn-outline-light"
            >
              Netlify
            </a>
          </div>
          <div className="col project-tile ">
            <h2 className="project-name">Online Resume</h2>
            <img
              className="project-image img-thumbnail"
              src={OnlineResume}
              alt=""
            />
            <a
              href="https://github.com/hchurch11/resume"
              target="_blank"
              rel="noreferrer"
              className="project-link btn btn-block btn-outline-light"
            >
              Code
            </a>
            <a
              href="https://heathersonlineresume.netlify.app"
              target="_blank"
              rel="noreferrer"
              className="project-link btn btn-block btn-outline-light"
            >
              Netlify
            </a>
          </div>
          <div className="col project-tile ">
            <h2 className="project-name">React Weather App</h2>
            <img
              className="project-image  img-thumbnail 
                 "
              src={ReactWeatherApp}
              alt=""
            />
            <a
              href="https://github.com/hchurch11/heathers-weather-app-react"
              target="_blank"
              rel="noreferrer"
              className="project-link btn-block  btn btn-outline-light"
            >
              Code
            </a>
            <a
              href="https://heathers-weather-app-react.netlify.app"
              target="_blank"
              rel="noreferrer"
              className="project-link btn-block  btn btn-outline-light"
            >
              Netlify
            </a>
          </div>
          <div className="col project-tile ">
            <h2 className="project-name">React To-Do List</h2>
            <img
              className="project-image img-thumbnail"
              src={ReactToDo}
              alt=""
            />
            <a
              href="https://github.com/hchurch11/react-to-do"
              target="_blank"
              rel="noreferrer"
              className="project-link btn btn-block btn-outline-light"
            >
              Code
            </a>
            <a
              href="https://heathers-react-to-do.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="project-link btn btn-block btn-outline-light"
            >
              Netlify
            </a>
          </div>
        </Row>
        <div className="row ">
          <div className="col project-tile">
            <h2 className="project-name">Technical Document Page</h2>
            <img
              className="project-image img-thumbnail"
              src={TechDocument}
              alt=""
            />
            <a
              href="https://github.com/hchurch11/technical-document-page"
              target="_blank"
              rel="noreferrer"
              className="project-link btn btn-block btn-outline-light"
            >
              Code
            </a>
            <a
              href="https://technical-document-page.netlify.app"
              target="_blank"
              rel="noreferrer"
              className="project-link btn btn-block  btn-outline-light"
            >
              Netlify
            </a>
          </div>
          <div className="col project-tile">
            <h2 className="project-name">Product Landing Page</h2>
            <img
              className="project-image img-thumbnail"
              src={ProductLanding}
              alt=""
            />
            <a
              href="https://github.com/hchurch11/product-landing-page"
              target="_blank"
              rel="noreferrer"
              className="project-link btn  btn-block btn-outline-light"
            >
              Code
            </a>
            <a
              href="https://product-landing-page-project.netlify.app"
              target="_blank"
              rel="noreferrer"
              className="project-link btn  btn-block btn-outline-light"
            >
              Netlify
            </a>
          </div>
          <div className="col project-tile">
            <h2 className="project-name">Number Guesser Game</h2>
            <img
              className="project-image img-thumbnail"
              src={NumberGuess}
              alt=""
            />
            <a
              href="https://github.com/hchurch11/number-guesser-game"
              target="_blank"
              rel="noreferrer"
              className="project-link btn  btn-block btn-outline-light"
            >
              Code
            </a>
            <a
              href="https://app.netlify.com/sites/heathers-number-guesser-game"
              target="_blank"
              rel="noreferrer"
              className="project-link btn  btn-block btn-outline-light"
            >
              Netlify
            </a>
          </div>
          <div className="col project-tile">
            <h2 className="project-name">Weather App Original</h2>
            <img
              className="project-image img-thumbnail"
              src={WeatherAppOrig}
              alt=""
            />
            <a
              href="https://github.com/hchurch11/heathers-weather-app-2"
              target="_blank"
              rel="noreferrer"
              className="project-link btn  btn-block btn-outline-light"
            >
              Code
            </a>
            <a
              href="https://app.netlify.com/sites/heathers-weather-app-2"
              target="_blank"
              rel="noreferrer"
              className="project-link btn  btn-block btn-outline-light"
            >
              Netlify
            </a>
          </div>
        </div>

        <div className="see-more-projects d-block">
          <a
            href="https://github.com/hchurch11/heatherchurch.io"
            className="project-link btn btn-outline-light "
            target="_blank"
            rel="noreferrer"
            id="more-projects-link"
          >
            Code for this page
          </a>
        </div>
      </section>
    </div>
  );
}
