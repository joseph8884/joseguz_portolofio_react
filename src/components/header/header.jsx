import Me from "../../assets/profile_photo_jose.jpg";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaFigma } from "react-icons/fa";
import Type from "./Type";
import React from "react";
import "./header.css";
import Spline from '@splinetool/react-spline';


function Header() {
  return (
  
    <header id="home">
      
      <div className="header_container">
        <section className="whoami">
          <h5>Hello I'm<span className="wave" role="img" aria-labelledby="wave">👋🏻</span></h5>
          <h1>JOSE GUZMAN</h1>
          <Type />
        </section>
        
                <div className="me">
                <Spline
        scene="https://prod.spline.design/eC4-Y8Dgukm8upuI/scene.splinecode" 
      />
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
