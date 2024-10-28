import Img1 from "../../assets/b1.jpg";
import React from "react";
import "./portfolio.css";
import Experience from "./experience/experience";
import Tilt from "react-parallax-tilt";
import { useInView } from "framer-motion";
import { useRef } from "react";

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
    <section id="portfolio">
      <Experience />
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <section className="portfolio_container">
        {projects.map((item, i) => (
          <Tilt key={i} scale="1.1" transitionSpeed={5000} className="portfolio_item">
            <a href={`/projects/${item.slug}`}>
              <img
                src={item.coverImg}
                alt={item.slug}
                className="imagen"
              />
            </a>
          </Tilt>
        ))}
      </section>
    </section>
  );
};

export default Portfolio;
