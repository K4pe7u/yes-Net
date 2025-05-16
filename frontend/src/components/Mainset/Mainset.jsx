import React from "react";
import css from "./Mainset.module.css";
import desktoplogo from "../../image/YesNET.png";

const Mainset = ({open}) => {
  return (
    <div className={css.sellContainer}>
      <div className={css.titleContainer}>
        <img src={desktoplogo} className={css.logoImage} alt="YesNET Logo" />
      </div>
      
      <div className={css.joinContainer}>
        <div className={css.solutionSecondary}>
          Skrój Internet dla Swoich potrzeb!
        </div>
        <div className={css.optionContainer}>
          <button
            onClick={() => open("individual")}
            type="button"
            className={css.individualOption}
          >
            <span className={css.highlight2}></span>
            <span className={css.buttonText2}>Złóż zapytanie</span>
          </button>
          {/* <button
            onClick={() => open("business")}
            type="button"
            className={css.companyOption}
          >
            <span className={css.highlight}></span>
            <span className={css.buttonText}>Rozwiązania biznesowe</span>
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Mainset;
