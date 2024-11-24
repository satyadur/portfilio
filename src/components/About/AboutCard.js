import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Durga Satyanarayana Kudupudi </span>
            from <span className="purple"> Andhra Pradesh, India.</span>
            <br />
            I am currently learning full stack java.
            <br />
            I have completed  <span className="purple">BSc(Cs)</span> in Computer Science and Computing at <span className="purple">AdiKavi Nannaya University.</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Trekking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Satya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
