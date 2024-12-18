import React, { useState, useRef, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { FaAws, FaDigitalOcean } from "react-icons/fa";
import { SiGooglecloud, SiJenkins, SiPostman, SiSelenium, SiKubernetes } from "react-icons/si";

const toolNames = [
  "Google Cloud",
  "DigitalOcean",
  "Jenkins",
  "Postman",
  "Selenium",
  "Kubernetes",
  "AWS",
];

function Toolstack() {
  const [trails, setTrails] = useState([]);
  const [tooltip, setTooltip] = useState({ visible: false, name: "" });
  const cardRefs = useRef([]);

  const handleMouseMove = (e, index) => {
    const rect = cardRefs.current[index].getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setTrails((prevTrails) => [
      ...prevTrails,
      { x, y, id: Date.now(), index },
    ]);
    setTooltip({ visible: true, name: toolNames[index] });
  };

  const handleMouseLeave = () => {
    setTooltip({ visible: false, name: "" });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTrails((prevTrails) => prevTrails.filter((trail) => Date.now() - trail.id < 1000));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {[SiGooglecloud, FaDigitalOcean, SiJenkins, SiPostman, SiSelenium, SiKubernetes, FaAws].map((Icon, index) => (
          <Col
            key={index}
            xs={4}
            md={2}
            className="tech-icons"
            ref={(el) => (cardRefs.current[index] = el)}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={handleMouseLeave}
          >
            <Icon />
            {trails
              .filter((trail) => trail.index === index)
              .map((trail) => (
                <div
                  key={trail.id}
                  className="trail-point"
                  style={{ left: trail.x, top: trail.y }}
                />
              ))}
          </Col>
        ))}
      </Row>
      {tooltip.visible && (
        <div className="tooltip">
          {tooltip.name}
        </div>
      )}
    </div>
  );
}

export default Toolstack;
