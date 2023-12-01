import React from "react";
import css from "./Menu.module.css";

const Menu = ({ open, onClose }) => {
  return (
    <>
      {open && (
        <>
          <div className={css.overlay} onClick={onClose}></div>
          <div className={`${css.menu} ${open ? css.open : ""}`}>
            <ul>
              <li>Karmel</li>
              <li>Ciastko</li>
              <li>Czekolada</li>
              <li>Żwirek</li>
              <li>Muchomorek</li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Menu;
