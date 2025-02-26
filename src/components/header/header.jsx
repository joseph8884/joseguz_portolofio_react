import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaFigma } from "react-icons/fa";
import Type from "./Type";
import React from "react";
import "./header.css";
import Spline from "@splinetool/react-spline";

function Header() {
  return (
    <header id="home" role="banner">
      <main className="header_container">
        <section className="whoami" aria-label="Introduction">
          <h1>
            <span className="greeting">Hello I'm  <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span></span>
            <span className="name">JOSE GUZMAN</span>
          </h1>
          <Type aria-label="Role description" />
        </section>

        <div className="me">
          <Spline scene="https://prod.spline.design/eC4-Y8Dgukm8upuI/scene.splinecode" />
        </div>

        <div className="cta">
          <a
            href="/Cv JOSE GUZMAN.pdf"
            download={"CV JOSE GUZMAN ENGLISH"}
            target="_blank"
            className="btn"
          >
            Download CV
          </a>
          <a href="/contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
        <div className="header_social">
          <a
            href="https://www.linkedin.com/in/héctor-jose-guzmán-montaño-2093a2238"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/joseph8884"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
        </div>
      </main>
    </header>
  );
}

export default Header;
