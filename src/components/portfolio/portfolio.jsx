import Img1 from "../../assets/b1.jpg";
import React from "react";
import "./portfolio.css";
import Experience from "./experience/experience";
import Tilt from "react-parallax-tilt";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Techstack from "./Techstack.js";
import { Container } from "react-bootstrap";
import Toolstack from "./Toolstack.js";
import Github from "./GithubChart.js"
const projects = [
  {
    slug: "moverii",
    coverImg: Img1,
  },
  {
    slug: "Next.js-Blog-App",
    coverImg: Img1,
  },
  {
    slug: "Financial-Dashboard",
    coverImg: Img1,
  },
  {
    slug: "Creative-Agency-LandingPage",
    coverImg: Img1,
  },
  {
    slug: "Fitness-Landing",
    coverImg: Img1,
  },
  {
    slug: "CryptoWorld",
    coverImg: Img1,
  },
  {
    slug: "Modern-Bank-Landing",
    coverImg: Img1,
  },
  {
    slug: "Last-Portfolio",
    coverImg: Img1,
  },
];

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
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
            scale="1.1"
            transitionSpeed={5000}
            className="portfolio_item"
          >
            <a href={`/projects/${item.slug}`}>
              <img src={item.coverImg} alt={item.slug} className="imagen" />
            </a>
          </Tilt>
        ))}
      </section>
      <div className="github_image"> 
      <h2 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h2>
        <img src="https://raw.githubusercontent.com/joseph8884/joseph8884/output/github-contribution-grid-snake-dark.svg" alt="Snake animation" />
      </div>
          </section>
  );
};

export default Portfolio;
