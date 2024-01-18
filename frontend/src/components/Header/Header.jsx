import React, { useEffect, useState } from "react";
import css from "./Header.module.css";
import icon from "../../icons/icons.svg";
import Menu from "../Menu/Menu";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(true);
  const [isMenuVisible, setMenuVisible] = useState(true);

  const responsiveMenuChange = (e) => {
    if (!e.matches) {
      setMenuVisible(true);
      setMenuOpen(true);
    } else {
      setMenuVisible(false);
      setMenuOpen(false);
    }
  };
  const startUp = () => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      console.log("potato ");
      setMenuVisible(false);
      setMenuOpen(false);
    }
  };

  window
    .matchMedia("(max-width: 768px)")
    .addEventListener("change", responsiveMenuChange);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleMenuVisibility = () => {
    setMenuVisible(!isMenuOpen);
  };

  useEffect(() => {
    startUp();
  }, []);
  return (
    <div className={css.header}>
      <svg className={`${css.logo_icon}`}>
        <use href={`${icon}#logo`}></use>
      </svg>
      <Menu
        open={isMenuOpen}
        onClose={toggleMenu}
        visibility={toggleMenuVisibility}
      />
      {isMenuVisible ? (
        <></>
      ) : (
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
      )}
    </div>
  );
};

export default Header;
