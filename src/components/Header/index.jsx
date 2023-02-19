import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import CTA from "./components/CTA/index.jsx";
import ME_IMAGES from "../../assets/HTD.png";
import Socials from "./components/Socials/index.jsx";
import "./index.css";
import { textHeaderTitleString } from "../../GlobalContanst.js";

const Header = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 2500,
      strings: textHeaderTitleString,
    });
  }, []);

  return (
    <header>
      <div className="container header__container">
        <h5>Hello, thank you for visit </h5>
        <h1>I am Hoang Tien Dat</h1>
        <h5 className="text_light"><span ref={textRef}></span> Developer</h5>
        <CTA />
        <Socials />

        <div className="me">
          <img src={ME_IMAGES} alt="me" />
        </div>
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
