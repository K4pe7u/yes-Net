import React, { useEffect, useState } from "react";
import css from "./Header.module.css";
import icon from "../../icons/icons.svg";
import Menu from "../Menu/Menu";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    console.log(isMenuOpen);
    if (!e.matches) {
      return;
    }
    setMenuOpen(false);
  });

  window.addEventListener("keyup", (e) => {
    if (e.key === "Control") {
      console.log(isMenuOpen);
    }
  });

  const toggleMenu = () => {
    console.log("potato");
    if (!window.matchMedia("(min-width: 768px)").matches)
      setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${css.header} ${scroll ? css.scroll : ""}`}>
      <div className={css.logo_icon_container}>
        <svg className={`${css.logo_icon}`}>
          <use href={`${icon}#logo`}></use>
        </svg>
      </div>

      <Menu open={isMenuOpen} onClose={toggleMenu} />
      {
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
      }
    </div>
  );
};

export default Header;
