import Me from "../../assets/profile_photo_jose.jpg";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaFigma } from "react-icons/fa";
import React from "react";
import "./header.css";

function Header() {
  return (
    <header id="home">
      <div className="container header_container">
        <section>
          <h5>Hello I'm</h5>
          <h1>JOSE GUZMAN</h1>
          <h5 className="text-light">Fullstack Developer</h5>
        </section>
        <div className="me">
          <img src={Me} alt="me" />
        </div>
        <div className="cta">
          <a
            href="/resume_url"
            download={"resume"}
            target="_blank"
            className="btn"
          >
            Download CV
          </a>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
        <div className="header_social">
          <a href="http://linkedin.com" target="_blank" rel="noreferrer">
            <BsLinkedin />
          </a>
          <a href="http://github.com" target="_blank" rel="noreferrer">
            <BsGithub />
          </a>
          <a href="http://figma.com" target="_blank" rel="noreferrer">
            <FaFigma />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
