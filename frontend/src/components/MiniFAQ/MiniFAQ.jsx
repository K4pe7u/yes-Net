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
      <div className={css.faqLink_container}>
        <Link to="/faq" className={css.faqLink}>
          <span className={css.faqLink_content}>Read Me</span>
        </Link>
      </div>
    </div>
  );
};
export default MiniFAQ;
