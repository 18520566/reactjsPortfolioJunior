import React from "react";
import "./index.css";
import ABOUT_ME_1 from "../../assets/ABOUT_ME_2.jpg";
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const arrItem = [
  {
    icon: <FaAward className="about__icon" />,
    header: "Experience",
    text: "1+ Years Working",
  },
  {
    icon: <FiUser className="about__icon" />,
    header: "Clients",
    text: "AutoProff",
  },
  {
    icon: <VscFolderLibrary className="about__icon" />,
    header: "Projects",
    text: "5+ Completed",
  },
];

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ABOUT_ME_1} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
          {arrItem.map((item) => {
            console.log(item.icon)
            return (
              <article className="about__card">
                {item.icon}
                <h5>{item.header}</h5>
                <small>{item.text}</small>
              </article>
            );
          })}
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
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
