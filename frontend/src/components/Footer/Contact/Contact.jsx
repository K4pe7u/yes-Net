import React, { useState } from "react";
import css from "./Contact.module.css";

const Contact = () => {
  const [isPrimaryOptionsVisible, setPrimaryOptionsVisible] = useState(false);
  const [selectedPrimaryValue, setSelectedPrimaryValue] = useState("");
  const [isAdditionalOptionsVisible, setAdditionalOptionsVisible] =
    useState(false);
  const [selectedAdditionalValue, setSelectedAdditionalValue] = useState("");

  const togglePrimaryOptions = () => {
    setPrimaryOptionsVisible(!isPrimaryOptionsVisible);
  };

  const toggleAdditionalOptions = () => {
    setAdditionalOptionsVisible(!isAdditionalOptionsVisible);
  };

  const handlePrimaryOptionClick = (value) => {
    setSelectedPrimaryValue(value);
    setPrimaryOptionsVisible(false);
    if (value === "Zgłoszenie Serwisowe") {
      setAdditionalOptionsVisible(true);
    } else {
      setAdditionalOptionsVisible(false);
    }
  };

  const handleAdditionalOptionClick = (value) => {
    setSelectedAdditionalValue(value);
    setAdditionalOptionsVisible(false);
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
              <div
                className={css.customSelectValue}
                onClick={togglePrimaryOptions}
              >
                {selectedPrimaryValue || "-"}
                <span
                  className={`${css.arrow} ${
                    isPrimaryOptionsVisible ? css.arrow_left : css.arrow_down
                  } ${isPrimaryOptionsVisible ? "arrow-down" : ""}`}
                >
                  &#9660;
                </span>
              </div>
              <ul
                className={`${css.customSelectOptions} ${
                  isPrimaryOptionsVisible ? css.show : ""
                }`}
              >
                <li
                  onClick={() =>
                    handlePrimaryOptionClick("Zgłoszenie Serwisowe")
                  }
                >
                  Zgłoszenie Serwisowe
                </li>
                <li onClick={() => handlePrimaryOptionClick("Zapytanie")}>
                  Zapytanie
                </li>
              </ul>
            </div>
          </div>
          {isAdditionalOptionsVisible && (
            <div className={css.contactForm_item}>
              <label htmlFor="additionalCategory">Wskaż przejaw awarii:</label>
              <div className={css.customSelectWrapper}>
                <div
                  className={css.customSelectValue}
                  onClick={toggleAdditionalOptions}
                >
                  {selectedAdditionalValue || "-"}
                  <span
                    className={`${css.arrow} ${
                      isAdditionalOptionsVisible
                        ? css.arrow_left
                        : css.arrow_down
                    } ${isAdditionalOptionsVisible ? "arrow-down" : ""}`}
                  >
                    &#9660;
                  </span>
                </div>
                <ul
                  className={`${css.customSelectOptions} ${
                    isAdditionalOptionsVisible ? css.show : ""
                  }`}
                >
                  <li
                    onClick={() =>
                      handleAdditionalOptionClick("Całkowity Zanik Łącza")
                    }
                  >
                    Całkowity Zanik Łącza
                  </li>
                  <li
                    onClick={() =>
                      handleAdditionalOptionClick("Niestabilna Praca Łącza")
                    }
                  >
                    Niestabilna Praca Łącza
                  </li>
                  <li
                    onClick={() =>
                      handleAdditionalOptionClick("Problem z Zasięgiem WiFi")
                    }
                  >
                    Problem z Zasięgiem WiFi
                  </li>
                  <li onClick={() => handleAdditionalOptionClick("Inne")}>
                    Inne
                  </li>
                </ul>
              </div>
            </div>
          )}
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
