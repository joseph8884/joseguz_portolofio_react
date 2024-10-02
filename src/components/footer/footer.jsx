import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaFigma } from "react-icons/fa";
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="/#" className="footer_logo">
        OMEGA
      </a>

      <div className="footer_socials">
        <a href="www.linkedin.com">
          <BsLinkedin />
        </a>
        <a href="www.github.com">
          <BsGithub />
        </a>
        <a href="www.figma.com">
          <FaFigma />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; OMEGA. All right reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
