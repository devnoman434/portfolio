import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Cylo_heath"
              description="Cylo Health is your go-to platform for personalized health and wellness. We offer tailored insights, innovative tools, and expert guidance to help you take control of your health journey. Stay connected, stay healthy, and achieve your wellness goals with Cylo Health."
              ghLink="https://github.com/galixoai/cylo_health"
              demoLink="https://dev.cylo.health/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="forms-handling"
              description="Easily create custom forms, collect submissions, and display the results in organized, sortable tables. Our user-friendly platform allows you to manage data effortlessly, with real-time updates and options to export your results in CSV or Excel formats. Simplify data handling with no coding required!"
              ghLink="https://github.com/devnoman434/forms_handling"
              demoLink="https://forms-handling.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="CRUD Basics"
              description="Master the four core operations of data management—Create, Read, Update, and Delete—with easy-to-follow tutorials and examples. Whether you're a beginner or refreshing your skills, this website helps you build, manage, and interact with data in real-world projects. Start learning CRUD today!"
              ghLink="https://github.com/devnoman434/crud"
              demoLink="https://crudbasics.vercel.app/"        
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Vie template regenerate"
              description="Discover a sleek and modern website built with the VIE (Visual Interface Experience) template. Optimized for all devices, it offers a seamless, visually engaging browsing experience with clean design, fast loading, and interactive features."
              ghLink="https://github.com/devnoman434/Practice_Project"
              demoLink="https://vie-by-noman.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
