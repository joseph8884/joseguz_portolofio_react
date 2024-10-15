import Img1 from "../../assets/b1.jpg";
import Img2 from "../../assets/b2.jpg";
import Img3 from "../../assets/b3.jpg";
import Img4 from "../../assets/b4.jpg";
import Img5 from "../../assets/b5.jpg";
import Img6 from "../../assets/b2.jpg";
import React from "react";
import "./portfolio.css";
import Experience from "./experience/experience";
import Tilt from "react-parallax-tilt";
import { useInView } from "framer-motion";
import { useRef } from "react";
const data = [
  {
    id: 1,
    image: Img1,
    title: "Crypto Currence Dashbord",
    github: "https://github.com",
    demo: "https://figma.com",
  },
  {
    id: 2,
    image: Img2,
    title: "Portfolio Web Design",
    github: "https://github.com",
    demo: "https://figma.com",
  },
  {
    id: 3,
    image: Img3,
    title: "Weather Icon Tranding",
    github: "https://github.com",
    demo: "https://figma.com",
  },
  {
    id: 4,
    image: Img4,
    title: "Apihouse Designed by Omega",
    github: "https://github.com",
    demo: "https://figma.com",
  },
  {
    id: 5,
    image: Img5,
    title: "Photo Stock",
    github: "https://github.com",
    demo: "https://figma.com",
  },
  {
    id: 6,
    image: Img6,
    title: "Ip to Binary Converter",
    github: "https://github.com",
    demo: "https://figma.com",
  },
];const projects = [
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
    coverImg: "images/projects/Financial-Dashboard.png",
  },
  {
    slug: "Creative-Agency-LandingPage",
    coverImg: "images/projects/Next-Creative-Agency.png",
  },

  {
    slug: "Fitness-Landing",
    coverImg: "images/projects/FitClub.png",
  },

  {
    slug: "CryptoWorld",
    coverImg: "images/projects/CryptoWorld.png",
  },
  {
    slug: "Modern-Bank-Landing",
    coverImg: "images/projects/Modern-Bank.png",
  },
  {
    slug: "Last-Portfolio",
    coverImg: "images/projects/last-Portfolio.png",
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
      {/* Projects */}
      <section className="w-full px-6 md:px-10 lg:pl-32 xl:container xl:mx-auto mt-[400px] md:mt-[100px]" ref={ref}>
      <div
        className="w-full grid grid-cols-2 md:grid-cols-2 gap-8 md:gap-12 justify-evenly relative mb-12 md:mb-0"
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {projects.map((item, i) => (
          <Tilt key={i} scale="1.1" transitionSpeed={5000}>
            <a href={`/projects/${item.slug}`}>
              <img
                src={item.coverImg}
                alt={item.slug}
                width={50}
                height={50}
                className="w-[450px] xl:w-full rounded-2xl hover:shadow-light-3xl"
              />
            </a>
          </Tilt>
        ))}
      </div>
      </section>
          {/**
   * 
   * 
         <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article className="portfolio_item" key={id}>
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
   */}
    </section>
  );
};

export default Portfolio;
