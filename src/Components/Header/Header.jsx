import React from "react";
import "./Header.css";
import CTA from "./CTA";
import ME from "../../assets/Pic2.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Athira H</h1>
        <h5 className="text-light">Front End Developer</h5>
        <CTA />
        <HeaderSocials />
      </div>
      <div className="me">
        <img src={ME} alt="me"></img>
      </div>
      <a href="#contact" className="scroll_down">
        Scroll Down
      </a>
    </header>
  );
};

export default Header;
