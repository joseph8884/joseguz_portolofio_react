import { VscFolderLibrary } from "react-icons/vsc";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import ME from "../../assets/profile_photo_jose.jpg";
import React from "react";
import "./about.css";
import Achivments from "./Achivments";
import Comments from "./Comments";
function About() {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          
            <img src={ME} alt="About Me" />
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>5+ Clients</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>
            Hello world, I am Jose Guzman, I am a software engenieer
            /business owner and resercher on my free time. Now i am learing AWS so I can improve my skills, I love
            learn new topics and gain new experiences. I also like to put
            i consider myself as discipline person, who loves what he does 
            with tech career, Im in the jurning to learn what i am best for.
            For that reason we create <a href="https://webelopers.io"> Webelopers</a>
            I would love to bring my value to the world, in a world that everyday is 
            changing and improving in tecnology. 
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
      <Achivments/>
      <Comments/>
    </section>
  );
}

export default About;
