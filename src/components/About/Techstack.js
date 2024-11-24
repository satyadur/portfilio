import React from "react";
import { Col, Row } from "react-bootstrap";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import {
  DiJavascript1,
  DiReact,
  DiGit,
  DiJava,
  DiPostgresql,
} from "react-icons/di";
import {
  SiFirebase,
  SiSpring,
  SiSpringboot,
  SiMysql,
  SiGithub,
  SiRedux,
  SiHibernate,
  SiJson,
  SiKotlin,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <Tippy content="Java">
          <span>
            <DiJava />
          </span>
        </Tippy>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Tippy content="JavaScript">
          <span>
            <DiJavascript1 />
          </span>
        </Tippy>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Tippy content="MySQL">
          <span>
            <SiMysql />
          </span>
        </Tippy>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Tippy content="Hibernate">
          <span>
            <SiHibernate />
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
        <Tippy content="JSON">
          <span>
            <SiJson />
          </span>
        </Tippy>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Tippy content="React">
          <span>
            <DiReact />
          </span>
        </Tippy>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Tippy content="Spring">
          <span>
            <SiSpring />
          </span>
        </Tippy>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Tippy content="Spring Boot">
          <span>
            <SiSpringboot />
          </span>
        </Tippy>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Tippy content="Git">
          <span>
            <DiGit />
          </span>
        </Tippy>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Tippy content="Firebase">
          <span>
            <SiFirebase />
          </span>
        </Tippy>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Tippy content="Redux">
          <span>
            <SiRedux />
          </span>
        </Tippy>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Tippy content="PostgreSQL">
          <span>
            <DiPostgresql />
          </span>
        </Tippy>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Tippy content="Kotlin">
          <span>
            <SiKotlin />
          </span>
        </Tippy>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Tippy content="TypeScript">
          <span>
            <SiTypescript />
          </span>
        </Tippy>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Tippy content="Next.js">
          <span>
            <SiNextdotjs />
          </span>
        </Tippy>
      </Col>
    </Row>
  );
}

export default Techstack;
