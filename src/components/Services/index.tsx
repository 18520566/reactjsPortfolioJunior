import React from "react";
import "./index.css";
import { BiCheck } from "react-icons/bi";

const arrItem = [
  {
    serviceHeader: "UI/UX Design",
    servicesList: [{ service: "Some random service" }],
  },
  {
    serviceHeader: "UI/UX Design",
    servicesList: [{ service: "Some random service" }],
  },
  {
    serviceHeader: "UI/UX Design",
    servicesList: [{ service: "Some random service" }],
  },
];

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {arrItem.map((item) => {
          return (
            <article className="service">
              <div className="service__head">
                <h3>{item.serviceHeader}</h3>
              </div>
              <div className="service__list">
                {item.servicesList.map((service) => {
                  return (
                    <li>
                      <BiCheck className="service__list-icon" />
                      <p>{service.service}</p>
                    </li>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
