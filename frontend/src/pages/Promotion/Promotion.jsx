import React from "react";
import css from "./Promotion.module.css";
import husky from "../../icons/giphy.gif";

const Promotion = () => {
  return (
    <div className={css.page}>
      <div className={css.gradientBackground}></div>
      <div className={css.wrapper}>
        <div className={css.title}>Poznaj naszego kumpla ProgHusky :P.</div>
        <div className={css.title}>
          Bez wytchnienia pracuje nad kontentem tej sekcji. Już niedługo....
        </div>
        <img src={husky} alt="husky" />
      </div>
    </div>
  );
};
export default Promotion;
