import React from "react";
import css from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={css.contactContainer}>
      <div className={css.contactInfo}>
        <h2 className={css.contactTitle}>Dane kontaktowe</h2>
        <ul className={css.contactList}>
          <li className={css.contactItem}>
            <h3 className={css.contactItem_title}>Biuro Obsługi Klienta</h3>
            <span>
              ul. Towarowa 1 Wronki <br />
            </span>
            <span>
              Czynne: poniedziałek - piątek w godz. 8-16
              <br />
            </span>
            <span>
              tel.67 25 42 333 oraz 690 860 520
              <br />
            </span>
            <span>
              e-mail: BOK@yesnet.pl
              <br />
            </span>
          </li>
          <li className={css.contactItem}>
            <h3 className={css.contactItem_title}>Punkt Obsługi Abonenta</h3>
            <span>
              os. Młodych 8, Krzyż Wlkp
              <br />
            </span>
            <span>
              Czynne: wtorki i czwartki w godz. 10-15
              <br />
            </span>
          </li>
          <li className={css.contactItem}>
            <h3 className={css.contactItem_title}>POGOTOWIE SIECI yesNET</h3>
            <span>
              Czynne: 24/7
              <br />
            </span>
            <span>
              tel.:660 480 036 (telefon obsługuje wyłącznie sms)
              <br />
            </span>
          </li>
        </ul>
      </div>
      <div className={css.contactForm}>
        <h2>Formularz kontaktowy</h2>
        <form action="#" method="post">
          <label for="category">Wybierz kategorię:</label>
          <select id="category" name="category">
            <option value="problem">Zgłoszenie problemu serwisowego</option>
            <option value="order">Zamówienie usługi</option>
            <option value="other">Inna sprawa</option>
          </select>

          <label for="name">Imię i nazwisko:</label>
          <input type="text" id="name" name="name" required />

          <label for="email">E-mail:</label>
          <input type="email" id="email" name="email" required />

          <label for="message">Wiadomość:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <input type="submit" value="Wyślij" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
