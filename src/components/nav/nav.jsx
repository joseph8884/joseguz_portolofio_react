import { BiMessageDetail } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";
import { BiBook } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { useState } from "react";
import React from "react";
import "./nav.css";

function Nav({ getSection }) {
  const [activeNav, setActiveNav] = useState("/#");


  return (
    <nav>
        <a
          href="/#"
          onClick={() => {setActiveNav("/#") ; getSection('home')}}
          className={activeNav === "/#" ? "active" : ""}
        >
          <AiOutlineHome />
        </a>
        <a
          href="#about"
          onClick={() => {setActiveNav("#about"); getSection('about')}}
          className={activeNav === "#about" ? "active" : ""}
        >
          <BiUser />
        </a>
        <a
          href="#experience"
          onClick={() => {setActiveNav("#experience"); getSection('experience')}}
          className={activeNav === "#experience" ? "active" : ""}
        >
          <BiBook />
        </a>
        <a
          href="#services"
          onClick={() =>{ setActiveNav("#services"); getSection('services')}}
          className={activeNav === "#services" ? "active" : ""}
        >
          <RiServiceLine />
        </a>
        <a
          href="#contact"
          onClick={() => {setActiveNav("#contact"); getSection('contact')}}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <BiMessageDetail />
        </a>
    </nav>
  );
}

export default Nav;