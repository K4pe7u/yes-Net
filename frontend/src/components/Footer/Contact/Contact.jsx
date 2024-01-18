import React, { useState } from "react";
import css from "./Contact.module.css";

const Contact = () => {
  const [isOptionsVisible, setOptionsVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const toggleOptions = () => {
    setOptionsVisible(!isOptionsVisible);
  };

  const handleOptionClick = (value) => {
    setSelectedValue(value);
    setOptionsVisible(false);
  };

  return (
    <div className={css.contactContainer}>
      <div className={css.contactInfo}>
        <h2 className={css.contactTitle}>Dane kontaktowe</h2>
        <ul className={css.contactList}>
          <li className={css.contactItem}>
            <h3 className={css.contactItem_title}>Biuro Obsługi Klienta</h3>
            <span>ul. Towarowa 1, Wronki</span>
            <span>Czynne: poniedziałek - piątek w godz. 8-16</span>
            <span className={css.importantInformation}>
              tel.: +48 690 860 520
            </span>
            <span className={css.importantInformation}>
              e-mail: BOK@yesnet.pl
            </span>
          </li>
          <li className={css.contactItem}>
            <h3 className={css.contactItem_title}>Punkt Obsługi Abonenta</h3>
            <span>os. Młodych 8, Krzyż Wlkp</span>
            <span>Czynne: wtorki i czwartki w godz. 10-15</span>
          </li>
          <li className={css.contactItem}>
            <h3 className={css.contactItem_title}>Pogotowie Sieci yesNET</h3>
            <span>Czynne: 24/7</span>
            <span className={css.importantInformation}>
              tel.: + 48 660 480 036
            </span>
            <span>(telefon obsługuje wyłącznie sms)</span>
          </li>
        </ul>
      </div>
      <div className={css.contactForm}>
        <h2 className={css.contactForm_title}>Formularz kontaktowy</h2>
        <form action="#" method="post" className={css.contactForm_list}>
          <div className={css.contactForm_item}>
            <label htmlFor="category">Wybierz kategorię:</label>
            <div className={css.customSelectWrapper}>
              <div className={css.customSelectValue} onClick={toggleOptions}>
                {selectedValue || "-"}
                <span
                  className={`${css.arrow} ${
                    isOptionsVisible ? css.arrow_left : css.arrow_down
                  } ${isOptionsVisible ? "arrow-down" : ""}`}
                >
                  &#9660;
                </span>
              </div>
              <ul
                className={`${css.customSelectOptions} ${
                  isOptionsVisible ? css.show : ""
                }`}
              >
                <li onClick={() => handleOptionClick("Zgłoszenie Serwisowe")}>
                  Zgłoszenie Serwisowe
                </li>
                <li onClick={() => handleOptionClick("Zamówienie Usługi")}>
                  Zamówienie Usługi
                </li>
                <li onClick={() => handleOptionClick("Inne")}>Inna sprawa</li>
              </ul>
            </div>
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
          <label className={css.buttonContainer}>
            <button className={css.contactForm_button} type="submit">
              <span className={css.contactForm_buttonContent}>Wyślij</span>
            </button>
          </label>
        </form>
      </div>
    </div>
  );
};

export default Contact;
