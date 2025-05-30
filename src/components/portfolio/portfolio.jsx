import React, { useState } from "react";
import "./portfolio.css";
import Tilt from "react-parallax-tilt";
import Techstack from "./Techstack.js";
import { Container } from "react-bootstrap";
import Toolstack from "./Toolstack.js";
import projects from "./projects.json";
import Dialog from "./Dialog.js";
import certificates from "./certificates.json";
const Portfolio = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [certDialogOpen, setCertDialogOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [activeTab, setActiveTab] = useState("portfolio");

  const handleClickOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };
  const handleCertificateOpen = (certificate) => {
    setSelectedCertificate(certificate);
    setCertDialogOpen(true);
  };
  return (
    <>
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
        <div className="tabs-container">
          <button
            onClick={() => setActiveTab("portfolio")}
            className={activeTab === "portfolio" ? "active-tab" : ""}
          >
            Portfolio
          </button>
          <button
            onClick={() => setActiveTab("certificates")}
            className={activeTab === "certificates" ? "active-tab" : ""}
          >
            Certificates
          </button>
        </div>
        {activeTab === "portfolio" && (
          <section className="portfolio_container">
            {projects.map((item, i) => (
              <Tilt
                key={i}
                scale="1"
                transitionSpeed={5000}
                className="portfolio_item"
              >
                <img
                  src={item.coverImg}
                  alt={item.slug}
                  className="imagen"
                  onClick={() => handleClickOpen(item)}
                />
              </Tilt>
            ))}
            <Dialog
              open={open}
              setOpen={setOpen}
              selectedProject={selectedProject}
              setSelectedProject={setSelectedProject}
            />
          </section>
        )}
        {activeTab === "certificates" && (
          <section className="certificates_container">
            {certificates.map((cert, i) => (
              <Tilt
                key={i}
                scale="1"
                transitionSpeed={5000}
                className="portfolio_item"
              >
                <img 
                  src={cert.coverImg} 
                  alt={cert.slug} 
                  className="imagen" 
                  onClick={() => handleCertificateOpen(cert)}
                />
              </Tilt>
            ))}
          </section>
        )}
        {/* Certificate Dialog */}
        {selectedCertificate && (
          <div className={`certificate-dialog ${certDialogOpen ? 'open' : ''}`}>
            <div className="certificate-dialog-content">
              <span className="close-button" onClick={() => setCertDialogOpen(false)}>
                &times;
              </span>
              <img
                src={selectedCertificate.coverImg}
                alt={selectedCertificate.slug}
                className="certificate-fullsize"
              />
            </div>
          </div>
        )}
        <div className="github_image">
          <h2 className="project-heading" style={{ paddingBottom: "20px" }}>
            Days I <strong className="purple">Code</strong>
          </h2>
          <img
            src="https://raw.githubusercontent.com/joseph8884/joseph8884/output/github-contribution-grid-snake-dark.svg"
            alt="Snake animation"
          />
        </div>
        <div className="gab">.</div>
      </section>
      <div className="gab">.</div>
    </>
  );
};

export default Portfolio;
