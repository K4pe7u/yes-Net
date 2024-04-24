import React from "react";
import { Link } from "react-router-dom";
import css from "./MiniFAQ.module.css";
import faqImg from "../../image/FAQ-Grafika.png"
import faqImg02 from "../../image/FAQ-Grafika02.png"
import faqImg03 from "../../image/FAQ-Grafika03.png"
import faqImg04 from "../../image/FAQ-Grafika04.png"

const MiniFAQ = () => {
  return (
    <div className={css.faqContainer}>
      <div className={css.faqPage}>
        <h2 className={css.faqTitle}>Wsparcie Klienta</h2>
        <span className={css.faqDescription}>
          Rozwiej wszelkie wątpliwości<br/>i znajdź odpowiedzi na swoje pytania!
        </span>
        <div className={css.faqLink_container}>
          <Link to="/faq" className={css.faqLink}>
            <span className={css.faqLink_content}>Read Me</span>
          </Link>
        </div>
      </div>
      <img className={css.faqImage} src={faqImg04}></img>
    </div>
  );
};
export default MiniFAQ;
