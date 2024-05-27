import React, { useState } from 'react';
import css from './ContactForm.module.css';
import axios from 'axios';

const ContactForm = () => {
  const [isPrimaryOptionsVisible, setPrimaryOptionsVisible] = useState(false);
  const [selectedPrimaryValue, setSelectedPrimaryValue] = useState('');
  const [isAdditionalOptionsVisible, setAdditionalOptionsVisible] =
    useState(false);
  const [selectedAdditionalValue, setSelectedAdditionalValue] = useState('');
  const [isAdditionalListOptionsVisible, setAdditionalListOptionsVisible] =
    useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    primaryOptionId: '',
    additionalOptionId: '',
    message: '',
  });

  const togglePrimaryOptions = () => {
    setPrimaryOptionsVisible(!isPrimaryOptionsVisible);
  };

  const toggleAdditionalOptions = () => {
    setAdditionalListOptionsVisible(!isAdditionalListOptionsVisible);
  };

  const handlePrimaryOptionClick = (value, id) => {
    setSelectedPrimaryValue(value);
    setFormData((prevState) => ({
      ...prevState,
      primaryOptionId: id,
    }));
    setPrimaryOptionsVisible(false);
    if (value === 'Zgłoszenie Serwisowe') {
      setAdditionalOptionsVisible(true);
    } else {
      setAdditionalOptionsVisible(false);
    }
  };

  const handleAdditionalOptionClick = (value, id) => {
    setSelectedAdditionalValue(value);
    setFormData((prevState) => ({
      ...prevState,
      additionalOptionId: id,
    }));
    setAdditionalListOptionsVisible(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/sendSubmissionForm', formData);
      alert('Formularz został wysłany pomyślnie!');
    } catch (error) {
      console.error('Error submitting form', error);
      alert('Wystąpił błąd podczas wysyłania formularza.');
    }
  };

  return (
    <div className={css.contactContainer}>
      <div className={css.contactForm}>
        <h2 className={css.contactForm_title}>Formularz kontaktowy</h2>
        <form onSubmit={handleSubmit} className={css.contactForm_list}>
          <div className={css.contactForm_item}>
            <label htmlFor="category">Wybierz kategorię:</label>
            <div className={css.customSelectWrapper}>
              <div
                className={css.customSelectValue}
                onClick={togglePrimaryOptions}
              >
                {selectedPrimaryValue || '-'}
                <span
                  className={`${css.arrow} ${
                    isPrimaryOptionsVisible ? css.arrow_left : css.arrow_down
                  } ${isPrimaryOptionsVisible ? 'arrow-down' : ''}`}
                >
                  &#9660;
                </span>
              </div>
              <ul
                className={`${css.customSelectOptions} ${
                  isPrimaryOptionsVisible ? css.show : ''
                }`}
              >
                <li
                  id="1.1"
                  onClick={() =>
                    handlePrimaryOptionClick('Zgłoszenie Serwisowe', '1.1')
                  }
                >
                  Zgłoszenie Serwisowe
                </li>
                <li
                  id="1.2"
                  onClick={() => handlePrimaryOptionClick('Zapytanie', '1.2')}
                >
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
                  {selectedAdditionalValue || '-'}
                  <span
                    className={`${css.arrow} ${
                      isAdditionalListOptionsVisible
                        ? css.arrow_left
                        : css.arrow_down
                    } ${isAdditionalListOptionsVisible ? 'arrow-down' : ''}`}
                  >
                    &#9660;
                  </span>
                </div>
                <ul
                  className={`${css.customSelectOptions} ${
                    isAdditionalListOptionsVisible ? css.show : ''
                  }`}
                >
                  <li
                    id="2.1"
                    onClick={() =>
                      handleAdditionalOptionClick(
                        'Całkowity Zanik Łącza',
                        '2.1'
                      )
                    }
                  >
                    Całkowity Zanik Łącza
                  </li>
                  <li
                    id="2.2"
                    onClick={() =>
                      handleAdditionalOptionClick(
                        'Niestabilna Praca Łącza',
                        '2.2'
                      )
                    }
                  >
                    Niestabilna Praca Łącza
                  </li>
                  <li
                    id="2.3"
                    onClick={() =>
                      handleAdditionalOptionClick(
                        'Problem z Zasięgiem WiFi',
                        '2.3'
                      )
                    }
                  >
                    Problem z Zasięgiem WiFi
                  </li>
                  <li
                    id="2.4"
                    onClick={() => handleAdditionalOptionClick('Inne', '2.4')}
                  >
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
              value={formData.name}
              onChange={handleChange}
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
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </div>
          <div className={css.contactForm_item}>
            <label htmlFor="message">Wiadomość:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              required
              placeholder="Krótki opis problemu"
            ></textarea>
          </div>

          <div className={css.buttonContainer}>
            <button
              className={css.contactForm_button}
              onchange={handleSubmit}
              type="submit"
            >
              <span className={css.contactForm_buttonContent}>Wyślij</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
