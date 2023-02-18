import React from "react";
import "./index.css";
import IMG1 from "../../assets/PORTFOLIO_PROJECT_SCHOOL_SNEAKER_WEB.jpg";

const arrItem = [
  {
    img: IMG1,
    title: "This is a portfolio item title",
    href: "https://github.com",
  },
  {
    img: IMG1,
    title: "This is a portfolio item title",
    href: "https://github.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {arrItem.map((item) => {
          return (
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={item.img} alt />
              </div>
              <h3>{item.title}</h3>
              <div className="portfolio__item-cta">
                <a href={item.href} className="btn" target="_blank">
                  Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
