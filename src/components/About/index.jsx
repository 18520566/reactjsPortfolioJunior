import React from "react";
import ABOUT_ME_1 from "../../assets/ABOUT_ME_2.jpg";
import { aboutArrItem, aboutParagraphText } from "../../GlobalContanst";
import "./index.css";



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
          {aboutArrItem.map((item) => {
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
            {aboutParagraphText}
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
