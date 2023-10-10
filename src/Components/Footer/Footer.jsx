import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { GrYoutube } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Pyworld Portfolio
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Technical Skills</a>
        </li>
        <li>
          <a href="#portfolio">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://facebook.com">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com">
          <FiInstagram />
        </a>
        <a href="https://youtube.com">
          <GrYoutube />
        </a>
      </div>
      <div className="footer_copyright">
        <small>Pyworld Portfolio. Reserved All Rights</small>
      </div>
    </footer>
  );
};

export default Footer;
