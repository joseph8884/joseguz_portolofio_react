import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Cloud Developer",
          "Software Engineer",
          "AWS Solutions Architect",
          "Cloud Engineer",
          "IA",
          "Robotics Enthusiast",
          "Cybersecurity",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
