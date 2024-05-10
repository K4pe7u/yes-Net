import React, { useState } from 'react'
import css from './ContactForm.module.css'

const ContactForm = () => {
  const [isPrimaryOptionsVisible, setPrimaryOptionsVisible] = useState(false)
  const [selectedPrimaryValue, setSelectedPrimaryValue] = useState('')
  const [isAdditionalOptionsVisible, setAdditionalOptionsVisible] =
    useState(false)
  const [selectedAdditionalValue, setSelectedAdditionalValue] = useState('')
  const [isAdditionalListOptionsVisible, setAdditionalListOptionsVisible] =
    useState(false)

  const togglePrimaryOptions = () => {
    setPrimaryOptionsVisible(!isPrimaryOptionsVisible)
  }

  const toggleAdditionalOptions = () => {
    setAdditionalListOptionsVisible(!isAdditionalListOptionsVisible)
  }

  const handlePrimaryOptionClick = (value) => {
    setSelectedPrimaryValue(value)
    setPrimaryOptionsVisible(false)
    if (value === 'Zgłoszenie Serwisowe') {
      setAdditionalOptionsVisible(true)
    } else {
      setAdditionalOptionsVisible(false)
    }
  }

  const handleAdditionalOptionClick = (value) => {
    setSelectedAdditionalValue(value)
    setAdditionalListOptionsVisible(false)
  }

  return (
    <div className={css.contactContainer}>
      <div className={css.contactForm}>
        <h2 className={css.contactForm_title}>Formularz kontaktowy</h2>
        <form action='#' method='post' className={css.contactForm_list}>
          <div className={css.contactForm_item}>
            <div className={css.contactForm_item}>
              <label htmlFor='category'>Wybierz kategorię:</label>
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
                    onClick={() =>
                      handlePrimaryOptionClick('Zgłoszenie Serwisowe')
                    }
                  >
                    Zgłoszenie Serwisowe
                  </li>
                  <li onClick={() => handlePrimaryOptionClick('Zapytanie')}>
                    Zapytanie
                  </li>
                </ul>
              </div>
            </div>
            {isAdditionalOptionsVisible && (
              <div className={css.contactForm_item}>
                <label htmlFor='additionalCategory'>
                  Wskaż przejaw awarii:
                </label>
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
                      onClick={() =>
                        handleAdditionalOptionClick('Całkowity Zanik Łącza')
                      }
                    >
                      Całkowity Zanik Łącza
                    </li>
                    <li
                      onClick={() =>
                        handleAdditionalOptionClick('Niestabilna Praca Łącza')
                      }
                    >
                      Niestabilna Praca Łącza
                    </li>
                    <li
                      onClick={() =>
                        handleAdditionalOptionClick('Problem z Zasięgiem WiFi')
                      }
                    >
                      Problem z Zasięgiem WiFi
                    </li>
                    <li onClick={() => handleAdditionalOptionClick('Inne')}>
                      Inne
                    </li>
                  </ul>
                </div>
              </div>
            )}
            <div className={css.contactForm_item}>
              <label htmlFor='name'>Imię i Nazwisko:</label>
              <input
                type='text'
                id='name'
                name='name'
                required
                autoComplete='off'
              />
            </div>
            <div className={css.contactForm_item}>
              <label htmlFor='email'>E-mail:</label>
              <input
                type='email'
                id='email'
                name='email'
                required
                autoComplete='off'
              />
            </div>
          </div>
          <div className={css.contactForm_item}>
            <div className={css.contactForm_item}>
              <label htmlFor='message'>Wiadomość:</label>
              <textarea
                id='message'
                name='message'
                rows='6'
                required
                placeholder='Krótki opis problemu'
              ></textarea>
            </div>
          </div>
          <div className={css.buttonContainer}>
            <button className={css.contactForm_button} type='submit'>
              <span className={css.contactForm_buttonContent}>Wyślij</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
