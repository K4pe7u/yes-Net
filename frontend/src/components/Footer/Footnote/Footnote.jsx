import React from "react";
import css from "./Footnote.module.css";

const Footnote = () => {
  return (
    <div className={css.footnote}>
      <div className={css.container}>
        <p className={css.footnote_text}>copyright &copy; 2024 yesNET</p>
      </div>
    </div>
  );
};

export default Footnote;
