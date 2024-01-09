import React, { useState } from "react";
import css from "./Header.module.css";
import icon from "../../icons/icons.svg";
import Menu from "../Menu/Menu";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={css.header}>
      <svg className={`${css.logo_icon}`} width="120px" height="90px">
        <use href={`${icon}#logo`}></use>
      </svg>
      <Menu open={isMenuOpen} onClose={toggleMenu} />

      <div className={css.menu} onClick={toggleMenu}>
        <div
          className={`${css.menu_icon} ${
            isMenuOpen ? css.menu_icon_close : css.menu_icon_open
          }`}
        ></div>
        <div
          className={`${css.menu_icon} ${
            isMenuOpen ? css.menu_icon_close : css.menu_icon_open
          }`}
        ></div>
        <div
          className={`${css.menu_icon} ${
            isMenuOpen ? css.menu_icon_close : css.menu_icon_open
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Header;
