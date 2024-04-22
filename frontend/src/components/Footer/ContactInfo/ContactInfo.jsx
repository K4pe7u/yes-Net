import React from "react";
import css from "./ContactInfo.module.css";

const ContactInfo = () => {
  return (
    <div className={css.contactContainer}>
      <div className={css.contactInfo}>
        <h2 className={css.contactTitle}>Dane kontaktowe</h2>
        <ul className={css.contactList}>
          <li className={css.contactItem}>
            <h3 className={css.contactItem_title}>Biuro Obsługi Klienta</h3>
            <span>ul. Towarowa 1, Wronki</span>
            <span>Czynne: Pn - Pt<br></br> godz. 8:00 - 16:00</span>
            <span className={css.importantInformation}>
              Tel.: +48 690 860 520
            </span>
            <span className={css.importantInformation}>
              E-mail: bok@yesnet.pl
            </span>
          </li>
          <li className={css.contactItem}>
            <h3 className={css.contactItem_title}>Punkt Obsługi Abonenta</h3>
            <span>os. Młodych 8, Krzyż Wlkp</span>
            <span>Czynne: Wt i Czw<br></br> godz. 10:00 - 14:30</span>
            <span className={css.importantInformation}>
              Tel.: +48 672 565 797
            </span>
          </li>
          <li className={css.contactItem}>
            <h3 className={css.contactItem_title}>Pogotowie Sieci yesNET</h3>
            <span>Czynne: 24/7</span>
            <span className={css.importantInformation}>
              Tel.: +48 660 480 036
            </span>
            <span>(telefon obsługuje wyłącznie sms)</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
