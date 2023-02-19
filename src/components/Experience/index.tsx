import React from "react";
import { experienceArrItem } from "../../GlobalContanst";
import "./index.css";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        {experienceArrItem.map((experience) => {
          return (
            <>
              <div>
                <h3>{experience.title}</h3>
                <div className="experience__content">
                  {experience.item.map((items) => {
                    return (
                      <article className="experience__details">
                        {items.icon}
                        <div>
                          <h4>{items.header}</h4>
                          <small className="text-light">{items.level}</small>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}

        {/* End of frontend */}
      </div>
    </section>
  );
};

export default Experience;
