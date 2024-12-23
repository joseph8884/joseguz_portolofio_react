import Img1 from "../../assets/b1.jpg";
  
import React from "react";
import "./portfolio.css";
import Tilt from "react-parallax-tilt";
import Techstack from "./Techstack.js";
import { Container } from "react-bootstrap";
import Toolstack from "./Toolstack.js";
import projects from "./projects.json"


const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <Container fluid className="about-section">
        <Container>
          <h2 className="project-heading">
            <strong className="purple">Skill set</strong> I use
          </h2>
          <Techstack />
          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          <Toolstack />
        </Container>
      </Container>

      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <section className="portfolio_container">
        {projects.map((item, i) => (
          <Tilt
            key={i}
            scale="1"
            transitionSpeed={5000}
            className="portfolio_item"
          >
              <img src={item.coverImg} alt={item.slug} className="imagen" />
          </Tilt>
        ))}
      </section>
      <div className="github_image">
        <h2 className="project-heading" style={{ paddingBottom: "20px" }}>
          Days I <strong className="purple">Code</strong>
        </h2>
        <img
          src="https://raw.githubusercontent.com/joseph8884/joseph8884/output/github-contribution-grid-snake-dark.svg"
          alt="Snake animation"
        />
      </div>
    </section>
  );
};

export default Portfolio;
