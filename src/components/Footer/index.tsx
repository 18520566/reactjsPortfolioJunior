import React from "react";
import "./index.css";
import {BsGithub, BsInstagram, BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        _hwang
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href='https://github.com/18520566'><BsGithub/></a>
        <a href='https://www.instagram.com/tdhwang_/'><BsInstagram/></a>
        <a href='https://www.linkedin.com/in/dat-hoang-119775212/'><BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Hoang Tien Dat. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
