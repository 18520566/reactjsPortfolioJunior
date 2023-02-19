import React, { useState } from "react";
import { navItemArr } from "../../GlobalContanst";
import "./index.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  

  return (
    <nav>
      {navItemArr.map((item) => {
        return (
          <a
            href={item.id}
            className={activeNav === item.id ? "active" : ""}
            onClick={() => setActiveNav(item.id)}
          >
            {item.component}
          </a>
        );
      })}
    </nav>
  );
};

export default Nav;
