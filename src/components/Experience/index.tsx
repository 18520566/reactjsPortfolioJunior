import React from "react";
import "./index.css";
import { BsPatchCheckFill } from "react-icons/bs";

const arrItem = [
  {
    icon: <BsPatchCheckFill className="experience__details-icon" />,
    header: "HTML",
    level: "Experienced",
  },
  {
    icon: <BsPatchCheckFill className="experience__details-icon" />,
    header: "HTML",
    level: "Experienced",
  },
  {
    icon: <BsPatchCheckFill className="experience__details-icon" />,
    header: "HTML",
    level: "Experienced",
  },
  {
    icon: <BsPatchCheckFill className="experience__details-icon" />,
    header: "HTML",
    level: "Experienced",
  },
  {
    icon: <BsPatchCheckFill className="experience__details-icon" />,
    header: "HTML",
    level: "Experienced",
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {arrItem.map((item) => {
              return (
                <article className="experience__details">
                  {item.icon}
                  <div>
                    <h4>{item.header}</h4>
                    <small className="text-light">{item.level}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        {/* End of frontend */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {arrItem.map((item) => {
              return (
                <article className="experience__details">
                  {item.icon}

                  <div>
                    <h4>{item.header}</h4>
                    <small className="text-light">{item.level}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
