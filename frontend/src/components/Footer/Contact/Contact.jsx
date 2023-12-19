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
            <span>ul. Towarowa 1, Wronki</span>
            <span>Czynne: poniedziałek - piątek w godz. 8-16</span>
            <span>tel.: +48 690 860 520</span>
            <span>e-mail: BOK@yesnet.pl</span>
          </li>
          <li className={css.contactItem}>
            <h3 className={css.contactItem_title}>Punkt Obsługi Abonenta</h3>
            <span>os. Młodych 8, Krzyż Wlkp</span>
            <span>Czynne: wtorki i czwartki w godz. 10-15</span>
          </li>
          <li className={css.contactItem}>
            <h3 className={css.contactItem_title}>Pogotowie Sieci yesNET</h3>
            <span>Czynne: 24/7</span>
            <span>tel.: + 48 660 480 036</span>
            <span>(telefon obsługuje wyłącznie sms)</span>
          </li>
        </ul>
      </div>
      <div className={css.contactForm}>
        <h2 className={css.contactForm_title}>Formularz kontaktowy</h2>
        <form action="#" method="post" className={css.contactForm_list}>
          <div className={css.contactForm_item}>
            <label htmlFor="category">Wybierz kategorię:</label>
            <select id="category" name="category">
              <option value="problem">Zgłoszenie Serwisowe</option>
              <option value="order">Zamówienie Usługi</option>
              <option value="other">Inna sprawa</option>
            </select>
          </div>
          <div className={css.contactForm_item}>
            <label htmlFor="name">Imię i Nazwisko:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              autoComplete="off"
            />
          </div>
          <div className={css.contactForm_item}>
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              autoComplete="off"
            />
          </div>
          <div className={css.contactForm_item}>
            <label htmlFor="message">Wiadomość:</label>
            <textarea
              id="message"
              name="message"
              rows="1"
              required
              placeholder="Krótki opis problemu"
            ></textarea>
          </div>

          <button className={css.contactForm_button} type="submit">
            Wyślij
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
