import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaFigma } from "react-icons/fa";
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <center>
        <hr class="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
        <span class="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
          © 2025{" "}
          <a href="https://flowbite.com/" class="hover:underline">
            Jose Guzman Montaño™
          </a>
          . All Rights Reserved.
        </span>
      </center>
    </footer>
  );
};

export default Footer;
