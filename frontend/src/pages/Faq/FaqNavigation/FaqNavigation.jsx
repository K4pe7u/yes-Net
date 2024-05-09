import React, { useState } from "react";
import css from "./FaqNavigation.module.css";

const FaqNavigation = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <div className={css.wrapper}>
        <ul className={css.navigation}>
          <li
            className={`${css.item} ${activeIndex === 0 ? css.active : ""}`}
            onClick={() => handleClick(0)}
          >
            Pomoc Techniczna
          </li>
          <li
            className={`${css.item} ${activeIndex === 1 ? css.active : ""}`}
            onClick={() => handleClick(1)}
          >
            Płatności i Umowy
          </li>
          <li
            className={`${css.item} ${activeIndex === 2 ? css.active : ""}`}
            onClick={() => handleClick(2)}
          >
            Promocje
          </li>
          <li
            className={`${css.item} ${activeIndex === 3 ? css.active : ""}`}
            onClick={() => handleClick(3)}
          >
            Współpraca
          </li>
        </ul>
      </div>
    </>
  );
};

export default FaqNavigation;
