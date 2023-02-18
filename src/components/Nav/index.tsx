import React from "react";
import "./index.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  const itemArr = [
    { id: "#", component: <AiOutlineHome /> },
    { id: "#about", component: <AiOutlineUser /> },
    { id: "#experience", component: <BiBook /> },
    { id: "#services", component: <RiServiceLine /> },
    { id: "#contact", component: <BiMessageSquareDetail /> },
  ];

  return (
    <nav>
      {itemArr.map((item) => {
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
