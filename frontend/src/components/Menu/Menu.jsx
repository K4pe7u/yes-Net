import React, { useState } from "react";
import css from "./Menu.module.css";
import icon from "../../icons/icons.svg";

const Menu = ({ open, onClose }) => {
  const [tooltipContent, setTooltipContent] = useState(null);
  const handleIconClick = (content) => {
    setTooltipContent(content);
  };
  return (
    <>
      {
        <>
          <div className={`${css.menu} ${open ? css.open : css.close}`}>
            <ul>
              <li>Karmel</li>
              <li>Ciastko</li>
              <li>Czekolada</li>
              <li>Żwirek</li>
              <li>Muchomorek</li>
              <li>Ciastek</li>
            </ul>
            <ul>
              <li
                className={css.iconWithTooltip}
                onClick={() => handleIconClick("example@email.com")}
              >
                <svg
                  className={`${css.envelop}`}
                  width="48px"
                  height="32px"
                  fill="white"
                >
                  <use href={`${icon}#envelop`}></use>
                </svg>
              </li>
              <li
                className={css.iconWithTooltip}
                onClick={() => handleIconClick("123-456-7890")}
              >
                <svg
                  className={`${css.phone}`}
                  width="48px"
                  height="32px"
                  fill="white"
                >
                  <use href={`${icon}#phone`}></use>
                </svg>
              </li>
            </ul>
          </div>
          {tooltipContent && (
            <div className={css.tooltip}>
              {tooltipContent}
              <span onClick={() => setTooltipContent(null)}>X</span>
            </div>
          )}
        </>
      }
    </>
  );
};

export default Menu;
