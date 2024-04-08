import React from "react";
import { Link } from "react-router-dom";
import css from "./MiniFAQ.module.css";

const MiniFAQ = () => {
  return (
    <div className={css.faqPage}>
      <h2 className={css.faqTitle}>Wsparcie Klienta</h2>
      <span className={css.faqDescription}>
        Rozwiej wszelkie wątpliwości i znajdź odpowiedzi na swoje pytania!
      </span>
      <Link to="/faq" className={css.faqLink}>
        FAQ
      </Link>
    </div>
  );
};
export default MiniFAQ;
