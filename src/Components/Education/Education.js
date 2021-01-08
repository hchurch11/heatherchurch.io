import React from "react";
import "./Education.css";
import { Image, Row, Col } from "react-bootstrap";
import Editor from "../../images/Technologies/vscode.png";
import API from "../../images/Technologies/api.png";
import Bootstrap from "../../images/Technologies/bootstrap.png";
import CSS from "../../images/Technologies/css.png";
import GitHub from "../../images/Technologies/github.png";
import Hosting from "../../images/Technologies/hosting.png";
import HTML from "../../images/Technologies/html.png";
import Javascript from "../../images/Technologies/javascript.png";
import Jquery from "../../images/Technologies/jqueryAjax.png";
import mongoDB from "../../images/Technologies/mongoDB.png";
import Nodejs from "../../images/Technologies/nodejs.png";
import NPM from "../../images/Technologies/npmlogo.png";
import Reactimg from "../../images/Technologies/react.png";
import Firebase from "../../images/Technologies/firebase.png";

export default function Education() {
  function Certificates(props) {
    return (
      <div className="certs">
        <h2 className="sub-title">Licenses and Certificates</h2>
        <ul>
          <li>
            <a
              className="certificateLink"
              href="http://www.linkedin.com/learning/improve-seo-for-your-website?trk=flagship-lil_details_certification"
              target="_blank"
              rel="noreferrer"
            >
              <strong>Improve SEO for Your Website</strong>
            </a>
            <em> - LinkedIn, </em>January, 2021
          </li>
          <li>
            <a
              className="certificateLink"
              href="https://www.codecademy.com/profiles/hchurch11/certificates/6c152bd262967f8c941c9707ed636bda"
              target="_blank"
              rel="noreferrer"
            >
              <strong>Learn Python</strong>
            </a>
            <em> - codecademy, </em>January, 2021
          </li>
          <li>
            <a
              className="certificateLink"
              href="https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=771D387A49414D90964251677AB527C1"
              target="_blank"
              rel="noreferrer"
            >
              <strong>React.js Essential Training</strong>
            </a>
            <em> - LinkedIn, </em>January 2021
          </li>
          <li>
            <a
              className="certificateLink"
              href="https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=431537F55B82440FB1630EFD388E250B"
              target="_blank"
              rel="noreferrer"
            >
              <strong>CSS Essential Training</strong>
            </a>
            <em> - LinkedIn, </em>December 2020
          </li>
          <li>
            <a
              className="certificateLink"
              href="https://www.codecademy.com/profiles/hchurch11/certificates/6156c9bebf9046929b95afa8fa67ffd5"
              target="_blank"
              rel="noreferrer"
            >
              <strong>Deploying with Netlify and Heroku</strong>
            </a>
            <em> - codecademy, </em>December 2020
          </li>
          <li>
            <a
              className="certificateLink"
              href="https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=25FEC9C2B0C644D0B3A2D013A3BD5871"
              target="_blank"
              rel="noreferrer"
            >
              <strong>HTML Essential Training </strong>
            </a>
            <em> - LinkedIn, </em>December 2020
          </li>
          <li>
            <a
              className="certificateLink"
              href="http://www.linkedin.com/learning/paths/prepare-for-the-aws-certified-cloud-practitioner-exam?trk=flagship-lil_details_certification"
              target="_blank"
              rel="noreferrer"
            >
              <strong>Introduction to AWS for Non-Engineers </strong>
            </a>
            <em> - LinkedIn, </em>December 2020
            <ol>
              <a
                className="certificateLink"
                href="http://www.linkedin.com/learning/introduction-to-aws-for-non-engineers-1-cloud-concepts-2?trk=flagship-lil_details_certification"
                target="_blank"
                rel="noreferrer"
              >
                <li>Cloud Concepts</li>
              </a>
              <a
                className="certificateLink"
                href="http://www.linkedin.com/learning/introduction-to-aws-for-non-engineers-2-security-2?trk=flagship-lil_details_certification"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <li>Security</li>
              </a>
              <a
                className="certificateLink"
                href="http://www.linkedin.com/learning/introduction-to-aws-for-non-engineers-3-core-services-2?trk=flagship-lil_details_certification"
                target="_blank"
                rel="noreferrer"
              >
                <li>Core Services</li>
              </a>
              <a
                className="certificateLink"
                href="http://www.linkedin.com/learning/introduction-to-aws-for-non-engineers-4-billing-and-pricing-2?trk=flagship-lil_details_certification"
                target="_blank"
                rel="noreferrer"
              >
                <li>Billing and Pricing</li>
              </a>
            </ol>
          </li>
          <li>
            <a
              className="certificateLink"
              href="https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=51418CBF2D3C4D95B436EDFDEA409541"
              target="_blank"
              rel="noreferrer"
            >
              <strong>Javascript Essential Training </strong>
            </a>
            <em> - LinkedIn, </em>December 2020
          </li>
          <li>
            <a
              className="certificateLink"
              href="https://www.codecademy.com/profiles/hchurch11/certificates/9eb0741e5ebef1f9f58a53bfac67d3a7"
              target="_blank"
              rel="noreferrer"
            >
              <strong>Learn HTML</strong>
            </a>
            <em> - codecademy, </em>December 2020
          </li>
          <li>
            <a
              className="certificateLink"
              href="https://www.codecademy.com/profiles/hchurch11/certificates/705dcb15de0da4dd9d9fc4f3274b430e"
              target="_blank"
              rel="noreferrer"
            >
              <strong>Learn Javascript</strong>
            </a>
            <em> - codecademy, </em>December 2020
          </li>
          <li>
            <a
              className="certificateLink"
              href="https://www.codecademy.com/profiles/hchurch11/certificates/240305d50b925c17868f1ac7a21a3261"
              target="_blank"
              rel="noreferrer"
            >
              <strong>Learn Node.js</strong>
            </a>
            <em> - codecademy, </em>December 2020
          </li>
          <li>
            <a
              className="certificateLink"
              href="https://www.codecademy.com/profiles/hchurch11/certificates/3a62023b0054dc793edc0adecd715fd7"
              target="_blank"
              rel="noreferrer"
            >
              <strong>Learn Responsive Design</strong>
            </a>
            <em> - codecademy, </em>December 2020
          </li>
          <li>
            <a
              className="certificateLink"
              href="https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=98223D35F46C46AAA1057C12823ECC61"
              target="_blank"
              rel="noreferrer"
            >
              <strong>Learning ES6+</strong>
            </a>
            <em> - LinkedIn, </em>December 2020
          </li>
          <li>
            <a
              className="certificateLink"
              href="https://www.linkedin.com/learning/marketing-foundations-market-research-2015/understanding-market-research?trk=flagship-lil_details_certification"
              target="_blank"
              rel="noreferrer"
            >
              <strong>Marketing Foundations: Market Research</strong>
            </a>
            <em> - LinkedIn, </em>December 2020
          </li>
          <li>
            <a
              className="certificateLink"
              href="http://www.linkedin.com/learning/paths/prepare-for-the-aws-certified-cloud-practitioner-exam?trk=flagship-lil_details_certification"
              target="_blank"
              rel="noreferrer"
            >
              <strong>AWS Cloud Practioner Prep</strong>
            </a>
            <em> - LinkedIn, </em>December 2020
          </li>
          <li>
            <a
              className="certificateLink"
              href="https://www.lynda.com/home/CertificateOfCompletion/PrintCertificate.aspx?lpk57=A4E4F55C4DE147E49C43C6C21D525826"
              target="_blank"
              rel="noreferrer"
            >
              <strong>Git Essential Training: The Basics</strong>
            </a>
            <em> - LinkedIn, </em>November 2020
          </li>
          <li>
            <a
              className="certificateLink"
              href="https://www.codecademy.com/profiles/hchurch11/certificates/af00e5032d0a68cc84879983f5d8333b"
              target="_blank"
              rel="noreferrer"
            >
              <strong>Learn React Course Certificate</strong>
            </a>
            <em> - codecademy, </em>November 2020
          </li>
          <li>
            <a
              className="certificateLink"
              href="https://www.freecodecamp.org/certification/hchurch11/responsive-web-design"
              target="_blank"
              rel="noreferrer"
            >
              <strong>Responsive Web Design Certificate</strong>
            </a>
            <em> - freeCodeCamp, </em>November 2020
          </li>
          <li>
            <a
              className="certificateLink"
              href="https://www.shecodes.io/certificates/e514bedbe6cd61689f581d449c883ea0"
              target="_blank"
              rel="noreferrer"
            >
              <strong>React Development Certificate</strong>
            </a>
            <em> - SheCodes Workshop, </em>November 2020
          </li>
          <li>
            <a
              className="certificateLink"
              href="https://www.shecodes.io/certificates/1217a9adb2dd5668ed41d57240c0f196"
              target="_blank"
              rel="noreferrer"
            >
              <strong>Front End Development Certificate</strong>
            </a>
            <em> - SheCodes Workshop, </em>October 2020
          </li>
          <li>
            <a
              className="certificateLink"
              href="https://www.shecodes.io/certificates/47c319a6b76260bef635a5a74daf12c1"
              target="_blank"
              rel="noreferrer"
            >
              <strong>Coding Certificate</strong>
            </a>
            <em> - SheCodes Workshop, </em>August 2020
          </li>
          <li>
            <strong>Percussion Performance Certificate</strong>
            <em> - University of Denver, </em>Denver, Co — 2016
          </li>
          <li>
            <strong>Teaching License,</strong> 721177
            <em> K-12 Music </em>— exp. 06/2022
          </li>
        </ul>
      </div>
    );
  }

  function Degrees() {
    return (
      <div className="degrees">
        <h2 className="sub-title">Degrees</h2>
        <ul>
          <li>
            <strong>Master of Music in Percussion Performance</strong>
            <em> - University of Denver, </em>Denver, Co — 2015
          </li>
          <li>
            <strong>Bachelor of Music in Music Education</strong>
            <em> - University of North Dakota,</em> Grand Forks, ND — 2012
          </li>
        </ul>
      </div>
    );
  }

  function Technologies() {
    return (
      <div className="technologies">
        <h2 className="sub-title">Technologies and Languages </h2>
        <Row>
          <Col sm>
            <Image
              alt="Editor"
              className="techIcon"
              src={Editor}
              roundedCircle
            />
          </Col>
          <Col sm>
            <Image
              alt="GitHub"
              className="techIcon"
              src={GitHub}
              roundedCircle
            />
          </Col>
          <Col sm>
            <Image
              alt="Hosting"
              className="techIcon"
              src={Hosting}
              roundedCircle
            />
          </Col>
          <Col sm>
            <Image alt="HTML" className="techIcon" src={HTML} roundedCircle />
          </Col>
          <Col sm>
            <Image alt="CSS" className="techIcon" src={CSS} roundedCircle />
          </Col>
          <Col sm>
            <Image
              alt="Bootstrap"
              className="techIcon"
              src={Bootstrap}
              roundedCircle
            />
          </Col>
          <Col sm>
            <Image
              alt="JavaScript"
              className="techIcon"
              src={Javascript}
              roundedCircle
            />
          </Col>
          <Col sm>
            <Image
              alt="React"
              className="techIcon rotating"
              src={Reactimg}
              roundedCircle
            />
          </Col>
          <Col sm>
            <Image
              alt="jqueryAjax"
              className="techIcon"
              src={Jquery}
              roundedCircle
            />
          </Col>
          <Col sm>
            <Image alt="API" className="techIcon" src={API} roundedCircle />
          </Col>
          <Col sm>
            <Image
              alt="Nodejs"
              className="techIcon"
              src={Nodejs}
              roundedCircle
            />
          </Col>
          <Col sm>
            <Image
              alt="mongoDB"
              className="techIcon"
              src={mongoDB}
              roundedCircle
            />
          </Col>
          <Col sm>
            <Image alt="npm" className="techIcon" src={NPM} roundedCircle />
          </Col>
          <Col sm>
            <Image
              alt="firebase"
              className="techIcon"
              src={Firebase}
              roundedCircle
            />
          </Col>
        </Row>
      </div>
    );
  }
  return (
    <div className="Education container-fluid">
      <h1 className="page-title">Education</h1>
      <Row>
        <Col>
          <Certificates />
        </Col>
        <Col>
          <Degrees />
          <Technologies />
        </Col>
      </Row>
    </div>
  );
}
