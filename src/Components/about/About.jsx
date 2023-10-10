import React from "react";
import "./About.css";
import ME from "../../assets/Pic1.jpg";
import { VscFolderLibrary } from "react-icons/vsc";
import { FaRocket } from "react-icons/fa";
import { TbAward } from "react-icons/tb";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image"></img>
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <a href="#portfolio">
                <VscFolderLibrary className="about_icon" />
                <h5>Projects</h5>
              </a>
            </article>
            <article className="about_card">
              <a href="#experience">
                <FaRocket className="about_icon" />
                <h5> Skills</h5>
              </a>
            </article>
            {/* <article className="about_card">
              <TbAward className="about_icon" />
              <h5> Experience</h5>
            </article> */}
          </div>
          <p>
            I'm an HR professional with a passion for front-end development. My
            goal is to leverage my technical skills in HTML, CSS, JavaScript,
            and React JS to contribute meaningfully to web development projects
            and grow as a front-end developer.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
