import React from "react";
import {
  componentsId,
  copyRights,
  FirstNameInFancyStyle,
  footerSocialsItems
} from "../../GlobalContanst";
import "./index.css";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        {FirstNameInFancyStyle}
      </a>
      <ul className="permalinks">
        {componentsId.map((id) => {
          return (
            <li>
              <a href={id.id}>{id.text}</a>
            </li>
          );
        })}
      </ul>
      <div className="footer__socials">
        {footerSocialsItems.map((item) => {
          return <a href={item.href}>{item.icon}</a>;
        })}
      </div>

      <div className="footer__copyright">
        <small>&copy; {copyRights} </small>
      </div>
    </footer>
  );
};

export default Footer;
