import React, { useState, useRef, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
} from "react-icons/di";
import { FaDocker, FaAndroid, FaTerminal } from "react-icons/fa";
import { SiNextdotjs, SiFirebase, SiSpring } from "react-icons/si";
import { SiGithub } from "react-icons/si";

const techNames = [
  "JavaScript",
  "React",
  "Node.js",
  "MongoDB",
  "Python",
  "Java",
  "Docker",
  "Android",
  "Terminal",
  "Next.js",
  "Firebase",
  "Spring",
  "GitHub",
];

function Techstack() {
  const [trails, setTrails] = useState([]);
  const [tooltip, setTooltip] = useState({ visible: false, name: "", x: 0, y: 0 });
  const cardRefs = useRef([]);

  const handleMouseMove = (e, index) => {
    const rect = cardRefs.current[index].getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setTrails((prevTrails) => [
      ...prevTrails,
      { x, y, id: Date.now(), index },
    ]);
    setTooltip({ visible: true, name: techNames[index], x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setTooltip({ visible: false, name: "", x: 0, y: 0 });
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
        {[DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiJava, FaDocker, FaAndroid, FaTerminal, SiNextdotjs, SiFirebase, SiSpring, SiGithub].map((Icon, index) => (
          <Col
            key={index}
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
        <div
          className="tooltip"          
        >
          {tooltip.name}
        </div>
      )}
    </div>
  );
}

export default Techstack;
