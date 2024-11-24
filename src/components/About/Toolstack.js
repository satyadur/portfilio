import React from "react";
import { Col, Row } from "react-bootstrap";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // Import Tippy's default styles

import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiGithub,
  SiNetlify,
  SiBootstrap,
  SiMui,
  SiVite,
  SiYarn,
  SiAxios,
  SiStyledcomponents,
} from "react-icons/si";
import { DiEclipse, DiIntellij, DiMysql, DiNpm } from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <Tippy content="Visual Studio Code">
          <span>
            <SiVisualstudiocode />
          </span>
        </Tippy>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Tippy content="Postman">
          <span>
            <SiPostman />
          </span>
        </Tippy>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Tippy content="MySQL">
          <span>
            <DiMysql />
          </span>
        </Tippy>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Tippy content="Styled Components">
          <span>
            <SiStyledcomponents />
          </span>
        </Tippy>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Tippy content="Axios">
          <span>
            <SiAxios />
          </span>
        </Tippy>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Tippy content="GitHub">
          <span>
            <SiGithub />
          </span>
        </Tippy>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Tippy content="Material-UI">
          <span>
            <SiMui />
          </span>
        </Tippy>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Tippy content="Vercel">
          <span>
            <SiVercel />
          </span>
        </Tippy>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Tippy content="Netlify">
          <span>
            <SiNetlify />
          </span>
        </Tippy>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Tippy content="Eclipse">
          <span>
            <DiEclipse />
          </span>
        </Tippy>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Tippy content="Bootstrap">
          <span>
            <SiBootstrap />
          </span>
        </Tippy>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Tippy content="Yarn">
          <span>
            <SiYarn />
          </span>
        </Tippy>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Tippy content="Vite">
          <span>
            <SiVite />
          </span>
        </Tippy>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Tippy content="NPM">
          <span>
            <DiNpm />
          </span>
        </Tippy>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Tippy content="IntelliJ">
          <span>
            <DiIntellij />
          </span>
        </Tippy>
      </Col>
    </Row>
  );
}

export default Toolstack;
