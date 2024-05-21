import React from "react";
import css from "./Promotion.module.css";
import hasky from "../../icons/giphy.gif";

const Promotion = () => {
  return (
    <div className={css.page}>
      <div className={css.gradientBackground}></div>
      <div className={css.wrapper}>
        <div className={css.title}>Poznaj naszego kumpla ProgHausky :P</div>
        <img src={hasky} alt="hasky" />
      </div>
    </div>
  );
};
export default Promotion;
