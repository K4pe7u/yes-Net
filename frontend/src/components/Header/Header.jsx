import React from "react";
import css from "./Header.module.css";
import planet from "../../icons/planet.svg";
import yes from "../../icons/yes.svg";
import net from "../../icons/net.svg";
import menu from "../../icons/menu.svg";

function Header() {
  return (
    <div className={css.header}>
      <div className={css.logo_container}>
        <img src={planet} alt="geometric planet" width="120" />
        <div className={css.logo_name}>
          <img src={yes} alt="word yes" width="120" />
          <img src={net} alt="word net" width="120" />
        </div>
      </div>
      <div className={css.menu_container}>
        <img src={menu} alt="hamburger" width="60" />
      </div>
    </div>
  );
}
export default Header;
