import React, { useState } from "react";
import { BiMessageDetail } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import "./nav.css";

function FloatButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="float-button-container">
      <button className="float-button" onClick={toggleOptions}>
        <BiMessageDetail size={24} />
      </button>
      {isOpen && (
        <div className="float-button-options">
          <NavLink to="https://buymeacoffee.com/joseguzman" target="blank" className="float-button-option">
            Buy me a coffee
          </NavLink>
          <NavLink to="/contact" className="float-button-option">
            Get in touch
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default FloatButton;