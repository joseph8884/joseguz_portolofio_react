import { BiMessageDetail } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";
import { BiBook } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        <AiOutlineHome />
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
        <BiUser />
      </NavLink>
      <NavLink to="/experience" className={({ isActive }) => (isActive ? "active" : "")}>
        <BiBook />
      </NavLink>
      <NavLink to="/services" className={({ isActive }) => (isActive ? "active" : "")}>
        <RiServiceLine />
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
        <BiMessageDetail />
      </NavLink>
    </nav>
  );
}

export default Nav;
