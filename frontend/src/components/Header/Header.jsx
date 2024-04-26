import React, { useEffect, useState } from "react";
import css from "./Header.module.css";
import icon from "../../icons/icons.svg";
import Menu from "../Menu/Menu";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (!e.matches) {
      return;
    }
    setMenuOpen(false);
  });

  const toTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  const hideMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = (e) => {
    e.stopPropagation();
    if (!window.matchMedia("(min-width: 768px)").matches) {
      setMenuOpen(!isMenuOpen);
    }
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
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <div className={`${css.header} ${scroll ? css.scroll : ""}`}>
      <div className={css.logo_icon_container}>
        <svg className={`${css.logo_icon}`}
         onClick={toTop}>
          <use href={`${icon}#logo`}></use>
        </svg>
      </div>

      <Menu open={isMenuOpen} onClose={toggleMenu} outsideClick={hideMenu} />
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
