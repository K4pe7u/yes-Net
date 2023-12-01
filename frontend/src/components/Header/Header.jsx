import React, { useState } from "react";
import css from "./Header.module.css";
import icon from "../../icons/icons.svg";
import Menu from "../Menu/Menu";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className={css.header}>
      <svg
        className={`${css.logo_icon}`}
        width="120px"
        height="90px"
        fill="white"
      >
        <use href={`${icon}#logo`}></use>
      </svg>

      <div
        className={`${css.menu_icon} ${openMenu ? css.menu_open : ""}`}
        onClick={handleMenuClick}
      >
        <svg width="60px" height="45px" fill="white">
          <use href={`${icon}#menu`}></use>
        </svg>
      </div>

      <Menu open={openMenu} onClose={() => setOpenMenu(false)} />
    </div>
  );
};

export default Header;
