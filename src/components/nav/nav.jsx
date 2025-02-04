import { BiMessageDetail } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { BiBriefcase } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css"
function Nav() {

  return (
    <>
      <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        <AiOutlineHome />
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
        <BiUser />
      </NavLink>
      <NavLink to="/portfolio" className={({ isActive }) => (isActive ? "active" : "")}>
        <BiBriefcase />
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
        <BiMessageDetail />
      </NavLink>
    </nav>
    </>
    
  );
}

export default Nav;
