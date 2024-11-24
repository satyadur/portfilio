import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import quiz from "../../Assets/Projects/quiz.png"
import banking from "../../Assets/Projects/banking.png"
import cara from "../../Assets/Projects/caraecommerce.png"
import crud from "../../Assets/Projects/crudoperations.png"
import todo from "../../Assets/Projects/todolist.png"
import portfolio from "../../Assets/Projects/Screenshot 2024-07-20 224302.png"
import gym from '../../Assets/Projects/gym.png';
import crypto from '../../Assets/Projects/crypo.png';
import solarsystem from '../../Assets/Projects/solarsyatem.png'
import readmegenerator from '../../Assets/Projects/readmegenerator.png'
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="It is designed with the help of React.js and JavaScript. We can present our data in the webpage."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gym}
              isBlog={false}
              title="GYM"
              description="This is a fitmess website . It is developed with the help of React.js, JavaScript and RapidAPI. It help the people to do the perfect exercises. We can search any of the exercises in the app."
              ghLink="https://app.netlify.com/sites/satya-gym-react-app/overview"
              demoLink="https://satya-gym-react-app.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={readmegenerator}
              isBlog={false}
              title="Readme Generator"
              description="This is a readme generator app . we can design our own github profile readme by using this website. it is made with html, css, javascript and react."
              ghLink="https://github.com/satyadur/github-profile-readme-maker"
              demoLink="https://readm-generator-for-github-profile.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="Quiz"
              description="This is a Quiz app . It is developed with the help of HTML, CSS, JavaScript and API. It is help to students for gaining knowlege. It is also give teh entertainment to the people."
              ghLink="https://github.com/satyadur/Quiz"
              demoLink="https://quiz-delta-opal.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={solarsystem}
              isBlog={false}
              title="Solar System"
              description="This website presents the planets in our solar system.It is developed with the help of html and css. By using this website we can know the details of the planets. This website is useful to the children's for learning about the solar system."
              ghLink="https://github.com/satyadur/solar-system"
              demoLink="https://satyadur.github.io/solar-system/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={banking}
              isBlog={false}
              title="Banking Crud-operations"
              description="It is developed with the help of React.js, JavaScript and Redux. by using this web page we can perform curd opeartions like deposit the money, withdraw the money etc."
              ghLink="https://github.com/satyadur/reactredux"
              demoLink="https://satyadur.github.io/reactredux/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cara}
              isBlog={false}
              title="Cara E-commerce"
              description="It is developed with the help of HTML, CSS and JavaScript. It is E-commerce website."
              ghLink="https://github.com/satyadur/cara-ecommerce"
              demoLink="https://cara-ecommerce-pied.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crud}
              isBlog={false}
              title="Crud Operations"
              description="It is developed with the help of HTML, CSS and JavaScript. by using this web page we can perform curd opeartions like save the data of a person, delete the data etc.If we reload the page it does not loose the data."
              ghLink="https://github.com/satyadur/crud-operations"
              demoLink="https://crud-operations-steel.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Todo List"
              description="It is developed with the help of React.js, JavaScript and Redux. by using this web page we can perform curd opeartions like save the data, update the date etc."
              ghLink="https://github.com/satyadur/todolist-in-react"
              demoLink="https://satyadur.github.io/todolist-in-react/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crypto}
              isBlog={false}
              title="CryptoPlace"
              description="It is developed with the help of React.js, JavaScript and also with Crypto API's. by using this web page we can know the current value of currencies.we can see the charts also in this web site. we can see each currency updated chart in this website."
              ghLink="https://github.com/satyadur/crypto-react"
              demoLink="https://satyadur.github.io/crypto-react/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
