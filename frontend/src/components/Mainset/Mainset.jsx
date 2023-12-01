import React from "react";
import css from "./Mainset.module.css";

const Mainset = () => {
  return (
    <div className={css.sellContainer}>
      <div className={css.titleContainer}>
        <h1 className={css.solution}>yesNET</h1>
        <h2 className={css.secondarySolution}>Podłącz się do świata!</h2>
      </div>
      <div className={css.optionContainer}>
        <button data-modal-open type="button" className={css.individualOption}>
          Rozwiązania indywidualne
        </button>
        <button data-modal-open type="button" className={css.companyOption}>
          Rozwiązania dla firma
        </button>
      </div>
    </div>
  );
};

export default Mainset;
