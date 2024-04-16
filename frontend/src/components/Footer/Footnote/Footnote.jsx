import React from "react";
import css from "./Footnote.module.css";
import { Link } from "react-router-dom";

const Footnote = () => {
  return (
    <div className={css.footnote}>
      <div className={css.container}>
        <p className={css.footnote_text}>copyright &copy; 2024 yesNET</p>
        <Link to="/policy-privacy" className={css.policyPrivacy}>
          Polityka Prywatności
        </Link>
      </div>
    </div>
  );
};

export default Footnote;
