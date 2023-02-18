import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const Socials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://linkedin.con" target="_blank">
        <FaGithub />
      </a>
      <a href="https://linkedin.con" target="_blank">
        <FiDribbble />
      </a>
    </div>
  );
};

export default Socials;
